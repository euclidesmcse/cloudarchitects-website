import Link from "next/link";
import { ArrowRight, Cloud, TerminalSquare, Brain, ShieldCheck } from "lucide-react";
import { PageHero, CTASection, HUE } from "@/components/site/primitives";

const categories = [
  {
    id: "multi-cloud",
    title: "Multi-Cloud",
    icon: Cloud,
    badge: "Híbrido & Multi-Cloud",
    hue: HUE.blue,
    description:
      "Arquiteturas distribuídas que atravessam provedores com resiliência, portabilidade e governança unificada — sem dependência de um único fornecedor.",
    benefits: [
      "Estratégia híbrida com AWS, Azure e GCP",
      "Orquestração centralizada com Landing Zones",
      "Governança, custos e compliance unificados",
      "Migração gradual com mínimo impacto",
      "Disaster Recovery multi-região ativo-ativo",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: TerminalSquare,
    badge: "CI/CD & Automação",
    hue: HUE.cyan,
    description:
      "Pipeline de entrega contínua que acelera o ciclo de desenvolvimento sem sacrificar qualidade — cultura, ferramentas e processos sob medida.",
    benefits: [
      "Pipelines CI/CD automatizados",
      "Infraestrutura como Código (Terraform, Bicep)",
      "Observabilidade com tracing, métricas e logs",
      "GitOps para ambientes imutáveis e rastreáveis",
      "Release management com rollback automatizado",
    ],
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    icon: Brain,
    badge: "IA & ML",
    hue: HUE.violet,
    description:
      "Soluções de IA que transformam dados em decisões — pipelines de ML, agentes inteligentes e IA generativa integrados aos seus processos.",
    benefits: [
      "Modelos de ML personalizados (NLP, predição)",
      "Agentes de IA autónomos com RAG",
      "IA generativa integrada a workflows",
      "Fine-tuning de LLMs com dados proprietários",
      "MLOps — ciclo de vida completo em produção",
    ],
  },
  {
    id: "seguranca",
    title: "Segurança",
    icon: ShieldCheck,
    badge: "Cloud Security",
    hue: HUE.green,
    description:
      "Segurança em profundidade para proteger identidades, dados e infraestrutura na nuvem — prevenção, deteção e resposta contínuas.",
    benefits: [
      "Zero Trust para identidade e acesso",
      "Proteção de dados com criptografia e DLP",
      "Security Operations (SIEM, SOAR, Threat Hunting)",
      "Compliance automatizado (RGPD, ISO 27001, SOC 2)",
      "Gestão de vulnerabilidades e container security",
    ],
  },
];

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title={
          <>
            Soluções em nuvem, <span className="gradient-text">por resultado.</span>
          </>
        }
        lede="Da estratégia à operação — arquiteturas cloud que combinam performance, segurança e inovação para acelerar o crescimento do seu negócio."
        primary={{ href: "/contacto", label: "Falar com um arquiteto" }}
        secondary={{ href: "/servicos", label: "Ver serviços" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <article
              key={cat.id}
              style={{ "--ca-hue": cat.hue } as React.CSSProperties}
              className="ca-rise ca-huecard group flex flex-col rounded-2xl border border-slate-200/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-start justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `${cat.hue}1f`, color: cat.hue, boxShadow: `inset 0 0 0 1px ${cat.hue}33` }}
                >
                  <cat.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em]" style={{ color: cat.hue }}>
                  {cat.badge}
                </span>
              </div>
              <h3 className="ca-font-display mt-5 text-xl font-semibold tracking-[-0.02em] text-[#0a1b33]">{cat.title}</h3>
              <p className="ca-font-sans mt-2.5 text-sm leading-relaxed text-slate-500">{cat.description}</p>
              <ul className="mt-5 space-y-2.5">
                {cat.benefits.map((b) => (
                  <li key={b} className="ca-font-sans flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: cat.hue, boxShadow: `0 0 8px ${cat.hue}` }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/solucoes/${cat.id}`}
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.74rem]"
                style={{ color: cat.hue }}
              >
                saiba mais <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Não encontrou a solução ideal?"
        text="Cada negócio é único. Agende uma conversa com os nossos arquitetos e descubra a estratégia cloud certa para si."
        primary={{ href: "/contacto", label: "Falar com um arquiteto" }}
        secondary={{ href: "/servicos", label: "Ver todos os serviços" }}
      />
    </>
  );
}
