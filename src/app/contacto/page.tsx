"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone, ExternalLink, Code2, Globe, CheckCircle, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const contactInfo = [
  { icon: MapPin, label: "Morada", value: "Aveiro, Portugal", href: "https://maps.google.com" },
  { icon: Mail, label: "Email", value: "info@cloudarchitect.com.br", href: "mailto:info@cloudarchitect.com.br" },
  { icon: Phone, label: "Telefone", value: "+351 210 000 000", href: "tel:+351210000000" },
];

const socialLinks = [
  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Code2, label: "GitHub", href: "https://github.com/cloudarchitects" },
  { icon: Globe, label: "Blog", href: "/blog" },
];

export default function ContactoPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "O nome é obrigatório.";
    if (!form.email.trim()) newErrors.email = "O email é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Insira um email válido.";
    if (!form.message.trim()) newErrors.message = "A mensagem é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const field = (label: string, name: keyof FormData, type: "text" | "email" | "tel" | "textarea" = "text") => {
    const hasError = !!errors[name];
    const base =
      "w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-[#4C82FB]/60 focus:ring-2 focus:ring-[#4C82FB]/20";
    const border = hasError ? "border-red-400/70" : "border-slate-200";
    return (
      <div className="space-y-1.5">
        <label className="ca-font-sans block text-[12px] font-semibold uppercase tracking-wider text-slate-400">{label}</label>
        {type === "textarea" ? (
          <textarea name={name} value={form[name]} onChange={handleChange} rows={5} className={cn(base, border, "resize-none")} placeholder={label} />
        ) : (
          <input name={name} type={type} value={form[name]} onChange={handleChange} className={cn(base, border)} placeholder={label} />
        )}
        {hasError && (
          <p className="ca-font-sans flex items-center gap-1 text-xs text-red-500">
            <AlertCircle className="h-3 w-3" />
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Vamos <span className="gradient-text">conversar.</span>
          </>
        }
        lede="Estamos prontos para ajudar. Envie-nos uma mensagem e a nossa equipa técnica responde — não é um formulário no vazio."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
                    <CheckCircle className="h-7 w-7 text-emerald-500" />
                  </div>
                  <h3 className="ca-font-display text-xl font-semibold text-[#0a1b33]">Mensagem enviada!</h3>
                  <p className="ca-font-sans mt-2 max-w-sm text-sm text-slate-500">Obrigado pelo seu contacto. Responderemos dentro de 24 horas úteis.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="ca-font-display text-xl font-semibold tracking-[-0.01em] text-[#0a1b33]">Envie a sua mensagem</h2>
                  <p className="ca-font-sans text-sm text-slate-600">Preencha o formulário abaixo e entraremos em contacto consigo.</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {field("Nome *", "name", "text")}
                    {field("Email *", "email", "email")}
                  </div>
                  {field("Telefone", "phone", "tel")}
                  {field("Mensagem *", "message", "textarea")}
                  <button
                    type="submit"
                    className="ca-btn3d ca-font-sans inline-flex items-center gap-2 rounded-full bg-[#0a152d] px-6 py-3 text-[14px] font-semibold text-white"
                  >
                    Enviar mensagem <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-3">
              <h3 className="ca-font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate-400">Informações de contacto</h3>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white p-4 transition-colors hover:border-slate-300"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4C82FB]/10 text-[#4C82FB]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="ca-font-sans text-[0.64rem] uppercase tracking-wider text-slate-400">{item.label}</p>
                    <p className="ca-font-sans text-sm font-medium text-slate-700 transition-colors group-hover:text-[#4C82FB]">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="ca-font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate-400">Redes</h3>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ca-font-sans flex items-center gap-2 rounded-lg border border-slate-200/60 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-[#4C82FB]"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)]">
              <h4 className="ca-font-display text-sm font-semibold text-[#0a1b33]">Precisa de ajuda urgente?</h4>
              <p className="ca-font-sans mt-1 text-xs leading-relaxed text-slate-600">Se tem uma emergência técnica, ligue-nos diretamente para assistência imediata.</p>
              <a href="tel:+351210000000" className="ca-font-sans mt-3 inline-flex items-center gap-2 text-sm text-[#4C82FB] hover:text-[#0a1b33]">
                <Phone className="h-3.5 w-3.5" /> +351 210 000 000
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
