# 🚀 Guia de Deploy — RZEnergy

Este guia leva-te do zip até `https://rzenergy.vercel.app` a funcionar.
Depois, quando tiveres acesso ao DNS de `rzenergy.pt`, aponta-lo para lá.

**Tempo estimado:** 45–90 minutos (primeira vez).
**Custo:** €0 (tudo em free tier).

---

## 🎯 O que vais publicar

- **Frontend** (React) → Vercel (`rzenergy.vercel.app`)
- **Backend** (FastAPI) → Render (`rzenergy-api.onrender.com`)
- **Base de dados** → MongoDB Atlas (free tier 512 MB)
- **Envio de emails do formulário** → Resend

---

## 0) Contas que precisas de criar

Cria **uma de cada**, com o mesmo email onde possível:

| Serviço | URL | Precisas de... |
|---|---|---|
| GitHub | https://github.com | email |
| MongoDB Atlas | https://cloud.mongodb.com | email |
| Render | https://render.com | podes fazer login com o GitHub |
| Vercel | https://vercel.com | podes fazer login com o GitHub |
| Resend | https://resend.com | email |

> ⚠️ Nenhum destes serviços pede cartão para os planos free.

---

## 1) Subir o código para o GitHub

1. No GitHub, clica em **New repository**.
2. Nome: `rzenergy-site`. Privado ou público — indiferente.
3. **Não** marques "Add README" (o zip já traz um).
4. Copia os comandos que o GitHub te mostra na secção **"…or push an existing repository from the command line"**.
5. No teu computador, abre um terminal na pasta descomprimida do zip e executa esses comandos. Fica algo do género:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/<TEU-USER>/rzenergy-site.git
git push -u origin main
```

> Se nunca usaste git, [instala aqui](https://git-scm.com/downloads) e cria um Personal Access Token em GitHub → Settings → Developer settings → Tokens (usa-o no lugar da password).

---

## 2) MongoDB Atlas — criar o cluster

1. Vai a https://cloud.mongodb.com → **Build a Database** → escolhe **M0 (FREE)**.
2. Região: **Frankfurt (eu-central-1)** ou **Ireland (eu-west-1)**.
3. Nome do cluster: `rzenergy` (não muda depois).
4. Aparece a janela **Security Quickstart**:
   - Username: `rzenergy` — Password: **carrega em "Autogenerate"** e **guarda-a agora num sítio seguro**.
   - Network Access: escolhe **"My Local Environment"** e depois em **IP Access List** carrega em **"Allow access from anywhere"** → 0.0.0.0/0 (necessário porque o Render tem IPs dinâmicos).
5. Depois de criado, clica **Connect** no cluster → **Drivers** → Python → copia a **connection string**:

```
mongodb+srv://rzenergy:<password>@rzenergy.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

6. Substitui `<password>` pela password real. **Guarda esta string.** É o teu `MONGO_URL`.

---

## 3) Resend — configurar envio de emails

### 3.1) Modo rápido para arrancar (sem DNS ainda)
1. https://resend.com → cria conta.
2. **API Keys** → **Create API Key** → nome `rzenergy-prod` → **Full access** → copia a chave (começa por `re_...`). Guarda.
3. **Enquanto não tens DNS do rzenergy.pt**, o `from` tem de ser `onboarding@resend.dev`.
   Vais usar isto no Render mais à frente.

### 3.2) Depois, quando tiveres DNS (recomendado)
1. Resend → **Domains** → **Add Domain** → `rzenergy.pt`.
2. Resend mostra 3–4 registos DNS (TXT/CNAME/MX) — cola-os no painel DNS do domínio.
3. Espera pela verificação (verde ✅).
4. Só então podes usar `noreply@rzenergy.pt` como `from`.

---

## 4) Deploy do backend no Render

1. https://render.com → **New +** → **Blueprint** → **Connect** ao repositório GitHub `rzenergy-site`.
2. Render detecta o ficheiro `render.yaml` e propõe criar o serviço `rzenergy-api`.
3. Aceita e, quando pedir, preenche as variáveis marcadas como `sync: false`:

   | Variável | Valor a colar |
   |---|---|
   | `MONGO_URL` | a connection string do passo 2 |
   | `CORS_ORIGINS` | por agora coloca `*` (afinamos no passo 6) |
   | `RESEND_API_KEY` | a chave `re_...` do passo 3.1 |
   | `CONTACT_FROM_EMAIL` | por agora `onboarding@resend.dev` |

4. **Apply / Deploy**. O primeiro build demora **3–5 min**.
5. Quando ficar verde, copia o URL do serviço (algo como `https://rzenergy-api.onrender.com`).
6. **Teste rápido**: no browser abre `https://rzenergy-api.onrender.com/api/` → deve devolver `{"message":"Hello World"}`.

> 💤 **Nota Render Free**: o backend "dorme" após 15 min sem tráfego. A primeira request depois de dormir demora 30–60s.

---

## 5) Deploy do frontend no Vercel

1. https://vercel.com → **Add New** → **Project** → importa o repositório `rzenergy-site`.
2. Configuração do projeto:
   - **Root Directory**: `frontend`
   - **Framework Preset**: `Create React App`
   - **Build Command**: `yarn build` (já vem do `vercel.json`)
   - **Output Directory**: `build`
3. Em **Environment Variables** adiciona:

   | Nome | Valor |
   |---|---|
   | `REACT_APP_BACKEND_URL` | o URL do Render (ex.: `https://rzenergy-api.onrender.com`) |

4. **Deploy**. Demora 2–3 min.
5. No fim, o Vercel dá-te um URL do género `https://rzenergy-site-abc123.vercel.app`.
6. Em **Settings → Domains** podes fixar o subdomínio bonito: `rzenergy.vercel.app`.

---

## 6) Fechar o CORS (segurança)

Volta ao Render → serviço `rzenergy-api` → **Environment**:
- Muda `CORS_ORIGINS` para o teu URL Vercel final. Ex.:
  ```
  https://rzenergy.vercel.app,https://rzenergy-site.vercel.app
  ```
- **Save Changes** → o Render reinicia automaticamente.

---

## 7) Testar o site em produção

1. Abre `https://rzenergy.vercel.app`.
2. Scroll até ao formulário de contacto.
3. Preenche e submete com um ficheiro PDF pequeno.
4. Verifica:
   - ✅ Toast verde "Mensagem enviada!"
   - ✅ Email chega a `saibamais@rzenergy.pt` (ou o que definiste)
   - ✅ Em MongoDB Atlas → **Browse Collections** → base `rzenergy` → coleção `contact_submissions` → aparece o registo

Se o email **não** chegar → volta ao Render, **Logs** do serviço, procura mensagens `Resend error`.

---

## 8) Mais tarde: apontar `www.rzenergy.pt` (quando tiveres DNS)

1. Vercel → Project → **Settings** → **Domains** → **Add** → escreve `www.rzenergy.pt`.
2. Vercel mostra um registo **CNAME** (algo como `cname.vercel-dns.com`).
3. No painel DNS do teu registrar (GoDaddy, PTisp, Amen, Cloudflare…) adiciona:
   - Type: `CNAME`
   - Name/Host: `www`
   - Value/Target: `cname.vercel-dns.com`
   - TTL: `Auto` ou `3600`
4. Espera pela propagação (5 min a 1h).
5. Vercel emite certificado SSL automaticamente. Vais ter `https://www.rzenergy.pt` a funcionar.

Também podes redirecionar o **domínio raiz** (`rzenergy.pt` sem www) para o www no mesmo painel do Vercel.

---

## ✅ Checklist final

- [ ] Repositório no GitHub
- [ ] Cluster MongoDB Atlas criado + `MONGO_URL` guardada
- [ ] `Allow access from anywhere` ativo no Atlas (Network Access)
- [ ] API Key Resend gerada
- [ ] Backend a correr no Render (`/api/` responde)
- [ ] Frontend a correr no Vercel
- [ ] `REACT_APP_BACKEND_URL` correto no Vercel
- [ ] `CORS_ORIGINS` fechado ao domínio do Vercel
- [ ] Formulário de contacto enviou email real
- [ ] Registo apareceu no MongoDB Atlas

---

## 🆘 Problemas comuns

**"Failed to fetch" no formulário**
→ `REACT_APP_BACKEND_URL` está errado ou tens `/` extra no fim. Corrige no Vercel e faz **Redeploy**.

**"CORS blocked"**
→ Falta o domínio Vercel em `CORS_ORIGINS` no Render. Adiciona e espera reinício.

**Contact form dá 500 "RESEND_API_KEY não configurada"**
→ Adiciona a chave `re_...` no Render.

**Contact form dá 502 "domain is not verified"**
→ Estás a usar `noreply@rzenergy.pt` sem ter verificado o domínio no Resend. Mete `onboarding@resend.dev` como `CONTACT_FROM_EMAIL` ou faz a verificação DNS.

**Site abre mas primeira request demora 40s**
→ Backend Render Free adormeceu. Normal. Em produção séria migra para o plano de $7/mês do Render (sempre acordado) ou usa fly.io.

---

Boa sorte 💪
