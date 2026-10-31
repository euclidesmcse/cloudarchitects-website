import type { Metadata } from "next";
import { SolutionPage } from "@/components/site/solution-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "DevOps — Soluções — Cloud Architects",
  description: "Pipelines de entrega contínua que aceleram o desenvolvimento sem sacrificar qualidade, com segurança, rastreabilidade e rollback instantâneo.",
};

const blocks = [
  { title: "Pipelines CI/CD", description: "Workflows automatizados com GitHub Actions, Azure DevOps ou GitLab CI que executam testes, análise de segurança, build e deploy em ambientes isolados (dev → staging → produção)." },
  { title: "Infraestrutura como Código", description: "Terraform, Bicep e Pulumi para provisionamento declarativo de recursos cloud. Ambientes efêmeros para feature branches e PRs, destruídos automaticamente após merge." },
  { title: "Observabilidade Full-Stack", description: "Monitoring, tracing distribuído e logging centralizado com OpenTelemetry, Grafana, Prometheus e Loki. Dashboards que correlacionam métricas de infra, app e negócio." },
  { title: "GitOps & Deploy Imutável", description: "ArgoCD e Flux para sincronização contínua entre repositórios Git e clusters Kubernetes. Cada deploy é um artefato versionado, auditável e reversível em segundos." },
  { title: "Release Management", description: "Estratégias de deploy avançadas: canary, blue-green e feature flags. Aprovações automatizadas baseadas em métricas de health e SLOs antes da promoção para produção." },
];

export default function SolucoesDevOpsPage() {
  return (
    <SolutionPage
      eyebrow="CI/CD & Automação"
      title="DevOps"
      highlight="de alta cadência"
      lede="Pipelines de entrega contínua que aceleram o desenvolvimento sem sacrificar qualidade."
      intro="Implementamos cultura e ferramentas DevOps que eliminam gargalos entre desenvolvimento e operações. Da integração contínua ao deploy automatizado, cada commit chega a produção com segurança, rastreabilidade e rollback instantâneo."
      hue={HUE.cyan}
      blocks={blocks}
    />
  );
}
