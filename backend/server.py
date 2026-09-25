from fastapi import FastAPI, APIRouter, Form, File, UploadFile, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import base64
import logging
import requests
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
CONTACT_TO_EMAIL = os.environ.get('CONTACT_TO_EMAIL', 'saibamais@rzenergy.pt')
CONTACT_FROM_EMAIL = os.environ.get('CONTACT_FROM_EMAIL', 'RZEnergy Site <noreply@rzenergy.pt>')
RESEND_URL = 'https://api.resend.com/emails'

MAX_TOTAL_ATTACHMENT_SIZE = 25 * 1024 * 1024  # 25MB total
MAX_FILES = 10

app = FastAPI()
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


def build_email_html(name: str, email: str, phone: str, message: str, file_count: int) -> str:
    safe_message = (message or '').replace('\n', '<br/>')
    return f"""
    <div style="font-family: 'Nunito Sans', Arial, sans-serif; max-width: 640px; margin: 0 auto; background:#fbf4ea; padding:24px;">
      <div style="background:#0a2a1e; color:#fff; padding:20px 24px; border-radius:12px 12px 0 0;">
        <h2 style="margin:0; font-weight:700; font-size:20px;">Novo contacto — Site RZEnergy</h2>
        <p style="margin:4px 0 0; color:#f4801f; font-size:13px;">Formulário submetido em {datetime.utcnow().strftime('%d/%m/%Y %H:%M UTC')}</p>
      </div>
      <div style="background:#fff; padding:24px; border-radius:0 0 12px 12px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <table style="width:100%; border-collapse:collapse; font-size:14px; color:#0a2a1e;">
          <tr><td style="padding:8px 0; font-weight:600; width:110px;">Nome:</td><td style="padding:8px 0;">{name}</td></tr>
          <tr><td style="padding:8px 0; font-weight:600;">Email:</td><td style="padding:8px 0;"><a href="mailto:{email}" style="color:#009640;">{email}</a></td></tr>
          <tr><td style="padding:8px 0; font-weight:600;">Telefone:</td><td style="padding:8px 0;"><a href="tel:{phone}" style="color:#009640;">{phone}</a></td></tr>
          <tr><td style="padding:8px 0; font-weight:600; vertical-align:top;">Mensagem:</td><td style="padding:8px 0; line-height:1.65;">{safe_message}</td></tr>
          <tr><td style="padding:8px 0; font-weight:600;">Anexos:</td><td style="padding:8px 0;">{file_count} ficheiro(s)</td></tr>
        </table>
      </div>
      <p style="text-align:center; color:#0a2a1e; font-size:12px; margin-top:16px;">
        Este email foi enviado automaticamente pelo formulário de contacto de rzenergy.pt
      </p>
    </div>
    """


def send_via_resend(payload: dict) -> dict:
    if not RESEND_API_KEY:
        raise HTTPException(status_code=500, detail="RESEND_API_KEY não configurada.")
    headers = {
        'Authorization': f'Bearer {RESEND_API_KEY}',
        'Content-Type': 'application/json',
    }
    resp = requests.post(RESEND_URL, headers=headers, json=payload, timeout=30)
    if resp.status_code >= 400:
        # Log full error for debugging
        logging.error(f"Resend error {resp.status_code}: {resp.text}")
        raise HTTPException(status_code=502, detail=f"Falha ao enviar email: {resp.text}")
    return resp.json()


@api_router.post("/contact")
async def submit_contact(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    message: str = Form(...),
    files: List[UploadFile] = File([]),
):
    # Basic validation
    if not name.strip() or not email.strip() or not phone.strip() or not message.strip():
        raise HTTPException(status_code=400, detail="Todos os campos são obrigatórios.")

    attachments = []
    total_size = 0
    file_list = files or []
    if len(file_list) > MAX_FILES:
        raise HTTPException(status_code=400, detail=f"Máximo {MAX_FILES} ficheiros permitidos.")

    for f in file_list:
        content = await f.read()
        total_size += len(content)
        if total_size > MAX_TOTAL_ATTACHMENT_SIZE:
            raise HTTPException(status_code=400, detail="Tamanho total dos anexos excede 25MB.")
        attachments.append({
            'filename': f.filename or 'ficheiro',
            'content': base64.b64encode(content).decode('utf-8'),
        })

    file_count = len(attachments)
    html = build_email_html(name, email, phone, message, file_count)
    subject = f"Novo contacto do site — {name}"

    payload = {
        'from': CONTACT_FROM_EMAIL,
        'to': [CONTACT_TO_EMAIL],
        'reply_to': email,
        'subject': subject,
        'html': html,
    }
    if attachments:
        payload['attachments'] = attachments

    result = send_via_resend(payload)

    # Persist in DB (without file content) for records
    try:
        await db.contact_submissions.insert_one({
            'id': str(uuid.uuid4()),
            'name': name, 'email': email, 'phone': phone,
            'message': message, 'files_count': file_count,
            'resend_id': result.get('id'),
            'timestamp': datetime.utcnow(),
        })
    except Exception as e:
        logging.warning(f"Failed to persist contact submission: {e}")

    return {'success': True, 'id': result.get('id'), 'attachments': file_count}


app.include_router(api_router)

# CORS: read allowed origins from env (comma-separated) or default to "*"
_cors_env = os.environ.get('CORS_ORIGINS', '*')
_cors_origins = [o.strip() for o in _cors_env.split(',')] if _cors_env else ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=_cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
