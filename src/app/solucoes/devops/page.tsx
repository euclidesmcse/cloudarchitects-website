import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SolucoesDevOpsPage() {
  return (
    <>
      <Section noBottom>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">CI/CD & Automação</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-surface-100 sm:text-5xl">
              DevOps
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-surface-400">
              Pipelines de entrega contínua que aceleram desenvolvimento sem sacrificar qualidade.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-surface-300 mb-12">
              Implementamos cultura e ferramentas DevOps que eliminam gargalos entre desenvolvimento e operações. Da integração contínua ao deploy automatizado, cada commit chega a produção com segurança, rastreabilidade e rollback instantâneo.
            </p>

            <div className="grid gap-6 md:grid-cols-1">
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Pipelines CI/CD</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Workflows automatizados com GitHub Actions, Azure DevOps ou GitLab CI que executam testes, análise de segurança, build e deploy em ambientes isolados (dev → staging → produção).</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Infraestrutura como Código</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Terraform, Bicep e Pulumi para provisionamento declarativo de recursos cloud. Ambientes efêmeros para feature branches e PRs, destruídos automaticamente após merge.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Observabilidade Full-Stack</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Monitoring, tracing distribuído e logging centralizado com OpenTelemetry, Grafana, Prometheus e Loki. Dashboards que correlacionam métricas de infra, app e negócio.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">GitOps & Deploy Imutável</h3>
            <p className="text-sm text-surface-400 leading-relaxed">ArgoCD e Flux para sincronização contínua entre repositórios Git e clusters Kubernetes. Cada deploy é um artefato versionado, auditável e reversível em segundos.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Release Management</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Estratégias de deploy avançadas: canary, blue-green e feature flags. Aprovações automatizadas baseadas em métricas de health e SLOs antes da promoção para produção.</p>
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
