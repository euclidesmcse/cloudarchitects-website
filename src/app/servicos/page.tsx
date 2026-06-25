import Link from "next/link";
import {
  Cloud,
  GitBranch,
  Bot,
  Headphones,
  Shield,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ─── Service Type ─────────────────────────── */
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export default function ServicosPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <Section className="relative overflow-hidden pt-0">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/30 via-surface-950 to-surface-950" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-accent-600/10 blur-[100px]" />

        <Container className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-brand-600/30 text-brand-400">
              Soluções Completas
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Os Nossos{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                Serviços
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-400">
              Da arquitectura à operação contínua — oferecemos um portfólio
              completo de serviços cloud, DevOps, IA, segurança e
              observabilidade para empresas que exigem excelência técnica.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Lista de Serviços ────────────────── */}
      <Section muted={false}>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} glow className="group flex flex-col">
                <CardContent className="flex flex-1 flex-col p-6 sm:p-8">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-600/20 text-brand-400 ring-1 ring-brand-600/20">
                    <service.icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-surface-50">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-surface-400">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-surface-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
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

      {/* ── CTA ───────────────────────────────── */}
      <Section muted>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Não encontrou o que procura?
            </h2>
            <p className="mt-4 text-lg text-surface-400">
              Cada projecto é único. Fale connosco e desenhamos uma solução
              personalizada para as necessidades da sua empresa.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Fale Connosco
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

/* ─── Service Data ──────────────────────────── */

const services: Service[] = [
  {
    icon: Cloud,
    title: "Cloud & Infraestrutura",
    description:
      "Arquitectamos, migramos e gerimos infraestrutura multi-cloud (AWS, Azure, GCP, OCI) com foco em segurança, performance e optimização contínua de custos. Desde a configuração de landing zones até à gestão diária de ambientes de produção.",
    features: [
      "Arquitectura e migração multi-cloud",
      "Landing zones e governança",
      "Optimização de custos (FinOps)",
      "Gestão contínua de ambientes",
    ],
    href: "/servicos/cloud-infra",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automação",
    description:
      "Implementamos pipelines CI/CD completos, Infrastructure as Code com Terraform e Bicep, GitOps com ArgoCD, containerização com Docker e Kubernetes, e automatizamos processos operacionais para acelerar o time-to-market.",
    features: [
      "Pipelines CI/CD (GitHub Actions, Azure DevOps)",
      "Infrastructure as Code (Terraform, Bicep)",
      "GitOps com ArgoCD / Flux",
      "Containerização e Kubernetes",
    ],
    href: "/servicos/devops-automacao",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Desenvolvemos e operamos agentes de inteligência artificial generativa para automatizar tarefas complexas. Integração com LLMs locais e cloud, RAG, fine-tuning e deployment em produção com monitorização contínua.",
    features: [
      "Agentes generativos e RAG",
      "Integração com LLMs (OpenAI, Claude, locais)",
      "Fine-tuning e avaliação",
      "Deployment e monitorização",
    ],
    href: "/servicos/agentes-ia",
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description:
      "Auditamos, protegemos e mantemos a sua infraestrutura em conformidade com as melhores práticas e normas do mercado. Implementamos Zero Trust, gestão de segredos, políticas de rede e hardening contínuo.",
    features: [
      "Auditoria e hardening de infraestrutura",
      "Zero Trust e gestão de identidades",
      "Gestão de segredos (Vault, Infisical)",
      "Conformidade (SOC 2, ISO 27001, RGPD)",
    ],
    href: "/servicos/seguranca-compliance",
  },
  {
    icon: Activity,
    title: "Monitorização & Observabilidade",
    description:
      "Centralizamos métricas, logs e traces para dar visibilidade total sobre a sua infraestrutura e aplicações. Configuramos alertas inteligentes, dashboards personalizados e SLOs para garantir a fiabilidade dos serviços.",
    features: [
      "Métricas, logs e traces centralizados",
      "Dashboards personalizados (Grafana)",
      "Alertas inteligentes e SLOs",
      "Análise de custos e performance",
    ],
    href: "/servicos/monitorizacao-observabilidade",
  },
  {
    icon: Headphones,
    title: "Consultoria Técnica",
    description:
      "Apoiamos a sua equipa com auditorias especializadas, planeamento estratégico, formação técnica e suporte continuado em cloud, DevOps e IA. Aceleramos a maturidade técnica da sua organização.",
    features: [
      "Auditoria e diagnóstico técnico",
      "Planeamento estratégico cloud",
      "Formação e capacitação de equipas",
      "Suporte técnico especializado",
    ],
    href: "/servicos/consultoria",
  },
];
