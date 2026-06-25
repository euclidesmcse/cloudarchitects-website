import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  ArrowRight,
  Cloud,
  TerminalSquare,
  Brain,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "multi-cloud",
    title: "Multi-Cloud",
    icon: Cloud,
    badge: "Híbrido & Multi-Cloud",
    description:
      "Arquiteturas distribuídas que atravessam provedores com resiliência, portabilidade e governança unificada. Projetamos e operamos ambientes multicloud que eliminam a dependência de um único fornecedor e maximizam o custo-benefício de cada carga de trabalho.",
    benefits: [
      "Estratégia de cloud híbrida com AWS, Azure e GCP",
      "Orquestração centralizada com Landing Zones",
      "Governança, custos e compliance unificados",
      "Migração gradual com mínimo impacto operacional",
      "Disaster Recovery multi-região ativo-ativo",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: TerminalSquare,
    badge: "CI/CD & Automação",
    description:
      "Pipeline de entrega contínua que acelera o ciclo de desenvolvimento sem sacrificar a qualidade. Implementamos cultura, ferramentas e processos DevOps sob medida para que sua equipe entregue valor com mais frequência, segurança e previsibilidade.",
    benefits: [
      "Pipelines CI/CD automatizados (GitHub Actions, Azure DevOps)",
      "Infraestrutura como Código com Terraform e Bicep",
      "Observabilidade com tracing, métricas e logs centralizados",
      "GitOps para ambientes imutáveis e rastreáveis",
      "Release Management com rollback automatizado",
    ],
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    icon: Brain,
    badge: "IA & ML",
    description:
      "Soluções de inteligência artificial que transformam dados em decisões. Criamos pipelines de ML, agentes inteligentes e sistemas de IA generativa integrados aos seus processos de negócio, com foco em escalabilidade, ética e governança.",
    benefits: [
      "Modelos de ML personalizados (classificação, predição, NLP)",
      "Agentes de IA com capacidades autônomas e RAG",
      "IA Generativa integrada a workflows empresariais",
      "Fine-tuning de LLMs com dados proprietários",
      "MLOps — ciclo de vida completo de modelos em produção",
    ],
  },
  {
    id: "seguranca",
    title: "Segurança",
    icon: ShieldCheck,
    badge: "Cloud Security",
    description:
      "Estratégia de segurança em profundidade para proteger identidades, dados e infraestrutura na nuvem. Implementamos controles contínuos de prevenção, detecção e resposta que atendem aos mais rigorosos padrões de compliance do mercado.",
    benefits: [
      "Zero Trust Architecture para identidade e acesso",
      "Proteção de dados com criptografia e DLP",
      "Security Operations (SIEM, SOAR, Threat Hunting)",
      "Compliance automatizado (LGPD, ISO 27001, SOC 2)",
      "Gestão de vulnerabilidades e container security",
    ],
  },
];

export default function SolucoesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <Section noBottom>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              Nossas Especialidades
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-surface-100 sm:text-5xl">
              Soluções em Nuvem
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-surface-400">
              Da estratégia à operação — entregamos arquiteturas cloud que
              combinam performance, segurança e inovação para acelerar o
              crescimento do seu negócio.
            </p>
          </div>
        </Container>
      </Section>

      {/* ─── Categorias ─── */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card
                  key={cat.id}
                  hover
                  glow
                  className="group flex flex-col"
                >
                  <CardContent className="flex flex-1 flex-col gap-6 p-8">
                    {/* Header area */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" small>
                        {cat.badge}
                      </Badge>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-surface-100">
                        {cat.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-surface-400">
                        {cat.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <ul className="mt-auto space-y-2.5">
                      {cat.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                          <span className="text-sm text-surface-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-2 pt-4">
                      <Link
                        href={`/solucoes/${cat.id}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                      >
                        Saiba mais
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ─── CTA Final ─── */}
      <Section muted noTop>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-surface-100">
              Não encontrou a solução ideal?
            </h2>
            <p className="mt-3 text-surface-400">
              Cada negócio é único. Agende uma conversa com nossos arquitetos e
              descubra a estratégia cloud certa para você.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contacto" className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-500 transition-colors">Fale com um arquiteto</Link>
              <Link href="/servicos" className="inline-flex items-center justify-center rounded-lg border border-surface-600 px-8 py-3 text-base font-medium text-surface-200 hover:bg-surface-800/50 transition-colors">Ver todos os serviços</Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
