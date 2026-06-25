import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Key, FileCheck, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Segurança & Compliance — Cloud Architects",
  description: "Auditoria, proteção e conformidade da sua infraestrutura. Zero Trust, gestão de segredos e hardening contínuo.",
};

const features = [
  { icon: Shield, title: "Auditoria & Hardening", desc: "Análise completa da postura de segurança. Hardening de sistemas, redes e aplicações segundo benchmarks CIS e boas práticas." },
  { icon: Key, title: "Gestão de Segredos", desc: "Implementação de HashiCorp Vault ou Infisical. Rotação automática de credenciais e zero hardcoded secrets." },
  { icon: FileCheck, title: "Compliance", desc: "Preparação para certificações SOC 2, ISO 27001 e conformidade com RGPD. Políticas documentadas e evidências automatizadas." },
  { icon: AlertTriangle, title: "Resposta a Incidentes", desc: "Planos de resposta, playbooks automáticos e simulações regulares. Deteção precoce com alertas inteligentes." },
];

export default function SegurancaPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-950/30 via-surface-950 to-surface-950" />
        <Container className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-red-600/30 text-red-400">Segurança & Compliance</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Segurança <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Sem Compromissos</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-400">
              Auditamos, protegemos e mantemos a sua infraestrutura em conformidade com as melhores práticas e normas do mercado.
            </p>
            <div className="mt-8"><Link href="/contacto"><Button size="lg">Auditar a Minha Infra <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
          </div>
        </Container>
      </Section>
      <Section><Container>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <Card key={f.title} className="flex gap-5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-orange-600/20 text-red-400 ring-1 ring-red-600/20"><f.icon className="h-6 w-6" /></div>
              <div><h3 className="text-lg font-semibold text-surface-100">{f.title}</h3><p className="mt-2 text-sm leading-relaxed text-surface-400">{f.desc}</p></div>
            </Card>
          ))}
        </div>
      </Container></Section>
      <Section muted><Container>
        <div className="text-center"><h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">Proteja o seu negócio</h2><p className="mt-4 text-surface-400">Segurança não é opcional. Fale connosco.</p>
        <Link href="/contacto" className="mt-6 inline-block"><Button size="lg">Contactar Agora <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
      </Container></Section>
    </>
  );
}
