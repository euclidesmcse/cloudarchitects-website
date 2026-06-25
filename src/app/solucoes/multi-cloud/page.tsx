import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SolucoesMultiCloudPage() {
  return (
    <>
      <Section noBottom>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">Híbrido & Multi-Cloud</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-surface-100 sm:text-5xl">
              Multi-Cloud
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-surface-400">
              Arquiteturas Multi-Cloud que eliminam vendor lock-in e maximizam resiliência.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-surface-300 mb-12">
              Projetamos e operamos ambientes multi-cloud que distribuem cargas de trabalho estrategicamente entre AWS, Azure e GCP. Cada workload vai para o provedor que oferece o melhor custo-benefício, com governança unificada e portabilidade garantida.
            </p>

            <div className="grid gap-6 md:grid-cols-1">
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Landing Zones Multi-Provedor</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Fundação segura e escalável para cada cloud, com políticas de segurança, rede e identidade padronizadas mas adaptadas a cada provedor.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Orquestração Cross-Cloud</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Gestão centralizada de recursos entre nuvens via ferramentas como Terraform Cloud, Crossplane e Azure Arc, com visibilidade total de inventário e custos.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Migração Híbrida Gradual</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Estratégias de migração faseada (rehost, replatform, refactor) que minimizam downtime e riscos operacionais, mantendo ambientes on-premise e cloud em sincronia.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Disaster Recovery Multi-Região</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Planos de continuidade com replicação síncrona/assíncrona entre regiões e provedores, garantindo RPO e RTO de minutos para cargas críticas.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">FinOps & Otimização Contínua</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Framework de gestão financeira que rastreia, aloca e otimiza gastos em todas as nuvens, com dashboards unificados e alertas de anomalias.</p>
          </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section muted noTop>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-surface-100">
              Pronto para implementar?
            </h2>
            <p className="mt-3 text-surface-400">
              Agende uma conversa com nossos especialistas e descubra como
              aplicar estas soluções no seu contexto.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contacto" className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-500 transition-colors">
                Fale com um arquiteto
              </Link>
              <Link href="/solucoes" className="inline-flex items-center gap-2 text-sm font-medium text-surface-400 hover:text-surface-200 transition-colors">
                <ArrowRight className="h-4 w-4 rotate-180" />
                Voltar para soluções
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
