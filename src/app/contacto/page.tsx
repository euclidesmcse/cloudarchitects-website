"use client";

import { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Globe,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/* ─── Types & Data ──────────────────────────── */

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
  {
    icon: MapPin,
    label: "Morada",
    value: "Av. da Liberdade, 100, 1250-146 Lisboa, Portugal",
    href: "https://maps.google.com",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@cloudarchitects.pt",
    href: "mailto:info@cloudarchitects.pt",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+351 210 000 000",
    href: "tel:+351210000000",
  },
];

const socialLinks = [
  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Code2, label: "GitHub", href: "https://github.com" },
  { icon: Globe, label: "Blog", href: "https://blog.cloudarchitects.pt" },
];

/* ─── Component ──────────────────────────────── */

export default function ContactoPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  /* ── Validation ── */
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "O nome é obrigatório.";
    }
    if (!form.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Insira um email válido.";
    }
    if (!form.message.trim()) {
      newErrors.message = "A mensagem é obrigatória.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ── Submit ── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  /* ── Change handler ── */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /* ── Reusable field ── */
  const field = (
    label: string,
    name: keyof FormData,
    type: "text" | "email" | "tel" | "textarea" = "text",
  ) => {
    const hasError = !!errors[name];
    const base =
      "w-full rounded-lg border bg-surface-800/50 px-4 py-3 text-sm text-surface-100 placeholder-surface-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50";
    const border = hasError
      ? "border-error/50"
      : "border-surface-700 focus:border-brand-500/50";

    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-surface-300">
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            name={name}
            value={form[name]}
            onChange={handleChange}
            rows={5}
            className={cn(base, border, "resize-none")}
            placeholder={label}
          />
        ) : (
          <input
            name={name}
            type={type}
            value={form[name]}
            onChange={handleChange}
            className={cn(base, border)}
            placeholder={label}
          />
        )}
        {hasError && (
          <p className="flex items-center gap-1 text-xs text-error">
            <AlertCircle className="h-3 w-3" />
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <Section glow>
        <Container>
          <div className="mx-auto max-w-2xl space-y-6 py-20 text-center">
            <Badge>Fale Connosco</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-surface-50 sm:text-5xl">
              Contacto
            </h1>
            <p className="text-lg leading-relaxed text-surface-400">
              Estamos prontos para ajudar. Envie-nos uma mensagem e a nossa
              equipa responderá o mais breve possível.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Form + Info ────────────────────────── */}
      <Section noTop>
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <Card glow>
                <CardContent className="p-6 sm:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
                        <CheckCircle className="h-7 w-7 text-success" />
                      </div>
                      <h3 className="text-xl font-semibold text-surface-50">
                        Mensagem Enviada!
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-surface-400">
                        Obrigado pelo seu contacto. Responderemos dentro de 24
                        horas úteis.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="text-xl font-semibold text-surface-50">
                        Envie a sua mensagem
                      </h2>
                      <p className="text-sm text-surface-400">
                        Preencha o formulário abaixo e entraremos em contacto
                        consigo.
                      </p>

                      <div className="grid gap-5 sm:grid-cols-2">
                        {field("Nome *", "name", "text")}
                        {field("Email *", "email", "email")}
                      </div>

                      {field("Telefone", "phone", "tel")}
                      {field("Mensagem *", "message", "textarea")}

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        iconRight={<Send className="h-4 w-4" />}
                      >
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* ── Info ── */}
            <div className="space-y-8 lg:col-span-2">
              {/* ── Contact details ── */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-surface-50">
                  Informações de Contacto
                </h3>

                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-lg border border-surface-700 bg-surface-800/30 p-4 transition-colors hover:border-brand-600/40 hover:bg-brand-600/5"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-surface-500">{item.label}</p>
                        <p className="text-sm font-medium text-surface-200 transition-colors group-hover:text-brand-400">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Social ── */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-surface-50">
                  Redes Sociais
                </h3>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-surface-700 bg-surface-800/50 px-4 py-2.5 text-sm font-medium text-surface-300 transition-colors hover:border-brand-600/40 hover:bg-brand-600/10 hover:text-brand-400"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Highlight Card ── */}
              <Card glow>
                <CardContent className="p-5">
                  <h4 className="text-sm font-semibold text-surface-50">
                    Precisa de Ajuda Urgente?
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-surface-400">
                    Se tem uma emergência técnica, ligue-nos diretamente para
                    assistência imediata.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3"
                    icon={<Phone className="h-3.5 w-3.5" />}
                  >
                    +351 210 000 000
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
