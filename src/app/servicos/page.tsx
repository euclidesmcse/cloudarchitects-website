import Link from "next/link";
import { Cloud, GitBranch, Bot, Headphones, Shield, Activity, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading, CTASection, HUE } from "@/components/site/primitives";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  href: string;
  hue: string;
}

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Um sistema, <span className="gradient-text">seis frentes.</span>
          </>
        }
        lede="Da arquitectura à operação contínua — um portfólio completo de cloud, DevOps, IA, segurança e observabilidade para empresas que exigem excelência técnica."
        primary={{ href: "/contacto", label: "Falar com engenharia" }}
        secondary={{ href: "/solucoes", label: "Ver soluções" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              style={{ "--ca-hue": s.hue } as React.CSSProperties}
              className="ca-rise ca-huecard group flex flex-col rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${s.hue}1f`, color: s.hue, boxShadow: `inset 0 0 0 1px ${s.hue}33` }}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="ca-font-display mt-4 text-lg font-semibold tracking-[-0.01em] text-[#0a1b33]">{s.title}</h3>
              <p className="ca-font-sans mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="ca-font-sans flex items-start gap-2 text-[0.82rem] text-slate-600">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: s.hue }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-[0.74rem]"
                style={{ color: s.hue }}
              >
                saber mais <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Não encontrou exactamente o que procura?"
        text="Cada projecto é único. Falamos com a sua equipa técnica e desenhamos uma solução à medida."
        primary={{ href: "/contacto", label: "Falar connosco" }}
        secondary={{ href: "/solucoes", label: "Conhecer soluções" }}
      />
    </>
  );
}

const services: Service[] = [
  {
    icon: Cloud,
    title: "Cloud & Infraestrutura",
    description: "Arquitectamos, migramos e gerimos infraestrutura multi-cloud (AWS, Azure, GCP, OCI) com foco em segurança, performance e optimização contínua de custos.",
    features: ["Arquitectura e migração multi-cloud", "Landing zones e governança", "Optimização de custos (FinOps)", "Gestão contínua de ambientes"],
    href: "/servicos/cloud-infra",
    hue: HUE.blue,
  },
  {
    icon: GitBranch,
    title: "DevOps & Automação",
    description: "Pipelines CI/CD completos, Infrastructure as Code, GitOps com ArgoCD, containerização com Docker e Kubernetes, e automação operacional.",
    features: ["Pipelines CI/CD", "Infrastructure as Code", "GitOps com ArgoCD / Flux", "Containerização e Kubernetes"],
    href: "/servicos/devops-automacao",
    hue: HUE.cyan,
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description: "Desenvolvemos e operamos agentes de IA generativa para automatizar tarefas complexas. LLMs locais e cloud, RAG, fine-tuning e deployment em produção.",
    features: ["Agentes generativos e RAG", "Integração com LLMs", "Fine-tuning e avaliação", "Deployment e monitorização"],
    href: "/servicos/agentes-ia",
    hue: HUE.violet,
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description: "Auditamos, protegemos e mantemos a sua infraestrutura em conformidade. Zero Trust, gestão de segredos, políticas de rede e hardening contínuo.",
    features: ["Auditoria e hardening", "Zero Trust e identidades", "Gestão de segredos (Vault, Infisical)", "Conformidade (SOC 2, ISO 27001, RGPD)"],
    href: "/servicos/seguranca-compliance",
    hue: HUE.green,
  },
  {
    icon: Activity,
    title: "Monitorização & Observabilidade",
    description: "Centralizamos métricas, logs e traces para visibilidade total. Alertas inteligentes, dashboards personalizados e SLOs para garantir fiabilidade.",
    features: ["Métricas, logs e traces", "Dashboards (Grafana)", "Alertas inteligentes e SLOs", "Análise de custo e performance"],
    href: "/servicos/monitorizacao-observabilidade",
    hue: HUE.amber,
  },
  {
    icon: Headphones,
    title: "Consultoria Técnica",
    description: "Auditorias especializadas, planeamento estratégico, formação técnica e suporte continuado em cloud, DevOps e IA. Aceleramos a sua maturidade técnica.",
    features: ["Auditoria e diagnóstico", "Planeamento estratégico cloud", "Formação de equipas", "Suporte especializado"],
    href: "/servicos/consultoria",
    hue: HUE.blue,
  },
];
