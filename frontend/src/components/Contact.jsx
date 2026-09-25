import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Paperclip, X, FileText, Loader2 } from 'lucide-react';
import { contactInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const Contact = () => {
  const { toast } = useToast();
  const fileInputRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', accept: false });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files || []);
    if (files.length + selected.length > MAX_FILES) {
      toast({ title: `Só pode anexar até ${MAX_FILES} documentos.`, variant: 'destructive' });
      return;
    }
    const valid = selected.filter((f) => {
      if (f.size > MAX_FILE_SIZE) {
        toast({ title: `Ficheiro "${f.name}" excede 10MB.`, variant: 'destructive' });
        return false;
      }
      return true;
    });
    setFiles((prev) => [...prev, ...valid]);
    e.target.value = '';
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message || !form.accept) {
      toast({ title: 'Por favor preencha todos os campos obrigatórios.', variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('email', form.email);
      fd.append('phone', form.phone);
      fd.append('message', form.message);
      files.forEach((f) => fd.append('files', f));

      await axios.post(`${API}/contact`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 60000,
      });

      toast({
        title: 'Mensagem enviada!',
        description: files.length > 0
          ? `Anexou ${files.length} documento${files.length > 1 ? 's' : ''}. Entraremos em contacto brevemente.`
          : 'Entraremos em contacto brevemente.',
      });
      setForm({ name: '', email: '', phone: '', message: '', accept: false });
      setFiles([]);
    } catch (err) {
      const detail = err?.response?.data?.detail || 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
      toast({ title: 'Erro ao enviar', description: detail, variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-[#0a2a1e] py-14 md:py-20 lg:py-28">
      <div id="formulario" className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
          <div>
            <p className="text-[#f4801f] font-medium text-[13px] md:text-[15px] mb-3 md:mb-4">Contacto</p>
            <h2 className="text-white font-serif text-[26px] sm:text-3xl md:text-4xl font-semibold leading-[1.2] mb-5 md:mb-6">
              Tem alguma dúvida?
            </h2>
            <p className="text-white/80 text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.85] mb-8 md:mb-10 text-left md:text-justify">
              Na RZEnergy acreditamos que a Iberdrola é uma empresa que partilha os nossos valores e princípios. Estamos honrados com esta parceria e de podermos beneficiar da sua ampla experiência.
            </p>

            <ul className="space-y-4 md:space-y-5">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 md:gap-4 text-white hover:text-[#f4801f] transition-colors">
                  <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={17} />
                  </span>
                  <span className="text-[13.5px] md:text-[15px] break-all">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 md:gap-4 text-white hover:text-[#f4801f] transition-colors">
                  <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={17} />
                  </span>
                  <span className="text-[13.5px] md:text-[15px] break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={contactInfo.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 md:gap-4 text-white hover:text-[#f4801f] transition-colors">
                  <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} />
                  </span>
                  <span className="text-[13.5px] md:text-[15px] leading-relaxed">{contactInfo.address}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
            <p className="text-white/90 text-[14px] md:text-[15px] leading-[1.65] md:leading-[1.7] mb-6 md:mb-8 text-left md:text-justify">
              Preencha o formulário para mais informações: Contratações, Simulações, Dúvidas, etc...
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Nome *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 focus:outline-none focus:border-[#f4801f] transition-colors"
              />
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 focus:outline-none focus:border-[#f4801f] transition-colors"
              />
              <input
                type="tel"
                placeholder="Telefone *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 focus:outline-none focus:border-[#f4801f] transition-colors"
              />
              <textarea
                placeholder="Mensagem *"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 focus:outline-none focus:border-[#f4801f] transition-colors resize-none"
              />

              {/* File upload field */}
              <div className="pt-2">
                <label className="block text-white/85 text-[14px] font-medium mb-3">
                  Anexe a sua fatura de Luz/Gás{' '}
                  <span className="text-white/50 font-normal">
                    (até {MAX_FILES} documentos)
                  </span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={files.length >= MAX_FILES}
                  className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-white/30 hover:border-[#f4801f] hover:bg-white/5 text-white/80 hover:text-white py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Paperclip size={17} />
                  <span className="text-[14px] font-medium">
                    {files.length >= MAX_FILES
                      ? 'Limite atingido'
                      : files.length === 0
                        ? 'Selecionar ficheiros'
                        : `Adicionar mais (${files.length}/${MAX_FILES})`}
                  </span>
                </button>

                {files.length > 0 && (
                  <ul className="mt-3 space-y-2 max-h-56 overflow-y-auto pr-1">
                    {files.map((file, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                      >
                        <FileText size={16} className="text-[#f4801f] flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[13px] truncate">{file.name}</p>
                          <p className="text-white/50 text-[11px]">{formatFileSize(file.size)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          aria-label="remover"
                          className="text-white/60 hover:text-white p-1 rounded transition-colors"
                        >
                          <X size={15} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-3 text-white text-[13px] leading-[1.65] font-semibold">
                  O envio da fatura será utilizado apenas para fins de análise/proposta comercial. O seu envio não está ligado para a finalidade de marketing.
                </p>
              </div>

              <label className="flex items-start gap-3 text-white/75 text-[13px] leading-[1.6] cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.accept}
                  onChange={(e) => setForm({ ...form, accept: e.target.checked })}
                  className="mt-1 accent-[#f4801f]"
                />
                <span>
                  <span className="text-[#f4801f] font-semibold">*</span> Aceito os <Link to="/termos-e-condicoes" className="underline text-white hover:text-[#f4801f] transition-colors">Termos e Condições</Link>, a <Link to="/politica-de-privacidade" className="underline text-white hover:text-[#f4801f] transition-colors">Política de privacidade</Link> e a <Link to="/politica-rgpd" className="underline text-white hover:text-[#f4801f] transition-colors">Política RGPD</Link>.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-2 bg-[#f4801f] hover:bg-[#ff9838] text-white px-7 py-3.5 rounded-full font-medium text-[15px] transition-colors shadow-lg shadow-[#f4801f]/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    A enviar...
                  </>
                ) : (
                  <>
                    Enviar
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <p className="text-white/50 text-[11px] leading-[1.65] mt-6">
              Responsável pelo arquivo: RZEnergy; Finalidade: envio de informações sobre produtos e serviços. Legitimação: consentimento; Destinatários: os dados não serão comunicados a terceiros, salvo obrigação legal. Os campos marcados com * são obrigatórios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
