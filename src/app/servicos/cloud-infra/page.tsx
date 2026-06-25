import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  Shield,
  Server,
  Network,
  DollarSign,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cloud & Infraestrutura — Cloud Architects",
  description:
    "Arquitectura e gestão de infraestrutura multi-cloud (AWS, Azure, GCP, OCI) com foco em segurança, performance e optimização contínua de custos.",
};

const features = [
  { icon: Cloud, title: "Arquitectura Multi-Cloud", description: "Desenhamos landing zones e arquitecturas de referência para AWS, Azure, GCP e OCI, adaptadas às necessidades do seu negócio." },
  { icon: Shield, title: "Segurança by Design", description: "Implementamos políticas de segurança desde o primeiro dia: IAM, Network Policies, WAF, e criptografia em trânsito e em repouso." },
  { icon: DollarSign, title: "FinOps & Optimização", description: "Analisamos e optimizamos os seus custos cloud com dashboards em tempo real, right-sizing automático e reserved instances." },
  { icon: Server, title: "Gestão Contínua", description: "Assumimos a gestão diária da sua infraestrutura com monitorização 24/7, patching automático e resposta a incidentes." },
];

const benefits = [
  "Migração zero-downtime entre clouds",
  "Landing zones com governança e políticas",
  "Infraestrutura como Código (Terraform, Bicep)",
  "Networking avançado (VPC, peering, VPN, CDN)",
  "Backup e disaster recovery automatizados",
  "Relatórios mensais de performance e custos",
];

export default function CloudInfraPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/30 via-surface-950 to-surface-950" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-[120px]" />
        <Container className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-brand-600/30 text-brand-400">Cloud & Infraestrutura</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Infraestrutura Cloud{" "}
              <span className="bg-gradient-to-r from-brand-400 to-sky-400 bg-clip-text text-transparent">de Excelência</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-400">
              Arquitectamos, migramos e gerimos infraestrutura multi-cloud com foco em segurança, performance e optimização de custos — desde o desenho inicial até à gestão diária.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">Solicitar Consultoria <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">O Que Oferecemos</h2>
            <p className="mt-4 text-surface-400">Um portfólio completo de serviços de infraestrutura cloud.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map((f) => (
              <Card key={f.title} className="flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-sky-600/20 text-brand-400 ring-1 ring-brand-600/20">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">{f.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits + CTA */}
      <Section muted>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">Tudo Incluído</h2>
              <ul className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-surface-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-surface-800 bg-surface-900/50 p-8 text-center">
              <h3 className="text-xl font-semibold text-surface-50">Pronto para escalar?</h3>
              <p className="mt-3 text-sm text-surface-400">Fale connosco e descubra como podemos transformar a sua infraestrutura cloud.</p>
              <Link href="/contacto" className="mt-6 inline-block">
                <Button size="lg">Começar Agora <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
