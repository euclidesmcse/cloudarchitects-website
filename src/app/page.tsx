import Link from "next/link";
import {
  Cloud,
  GitBranch,
  Bot,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <Section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden pt-0">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/40 via-surface-950 to-surface-950" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-accent-600/10 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-brand-600/30 text-brand-400">
              Cloud · DevOps · Agentes de IA
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Infraestrutura Cloud que{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                impulsiona o seu negócio
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface-400">
              Da arquitectura à operação — desenhamos, automatizamos e gerimos
              infraestrutura cloud, pipelines DevOps e agentes de IA para
              empresas que exigem excelência técnica.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Iniciar Projecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/servicos">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver Serviços
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-surface-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-500" />
                Arquitectura Multi-Cloud
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-500" />
                Automação Total
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-500" />
                Suporte 24/7
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Serviços ──────────────────────────── */}
      <Section muted={false}>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4">O que fazemos</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Serviços Especializados
            </h2>
            <p className="mt-4 text-surface-400">
              Da estratégia à execução — soluções completas para a sua
              infraestrutura tecnológica.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                glow
                className="group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-600/20 text-brand-400 ring-1 ring-brand-600/20">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-50">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                  >
                    Saber mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ────────────────────────────────── */}
      <Section muted>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Pronto para transformar a sua infraestrutura?
            </h2>
            <p className="mt-4 text-lg text-surface-400">
              Agende uma conversa gratuita com a nossa equipa e descubra como
              podemos ajudar a sua empresa a escalar com segurança e eficiência.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Agendar Reunião
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solucoes">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Conhecer Soluções
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ─── Service Data ────────────────────────── */

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infraestrutura",
    description:
      "Arquitectura, migração e gestão de infraestrutura multi-cloud (AWS, Azure, GCP, OCI) com foco em segurança, performance e optimização de custos.",
    href: "/servicos/cloud-infra",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automação",
    description:
      "Pipelines CI/CD, Infrastructure as Code, GitOps, containerização com Docker e Kubernetes, e automação de processos operacionais.",
    href: "/servicos/devops-automacao",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Desenvolvimento e operação de agentes de inteligência artificial generativa, integração com LLMs locais e cloud, e automatização inteligente.",
    href: "/servicos/agentes-ia",
  },
  {
    icon: Headphones,
    title: "Consultoria Técnica",
    description:
      "Auditoria de infraestrutura, planeamento estratégico, formação de equipas e suporte técnico especializado em cloud e DevOps.",
    href: "/servicos/consultoria",
  },
];
