import type { Metadata } from "next";
import { GitBranch, Container, Infinity, Cog } from "lucide-react";
import { ServicePage } from "@/components/site/service-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "DevOps & Automação — Cloud Architects",
  description:
    "Pipelines CI/CD, Infrastructure as Code, GitOps e containerização para acelerar o time-to-market da sua equipa.",
};

const features = [
  { icon: GitBranch, title: "CI/CD", description: "Pipelines completas com GitHub Actions, GitLab CI ou Azure DevOps. Build, test e deploy automatizados com quality gates." },
  { icon: Infinity, title: "GitOps", description: "Deploy automatizado com ArgoCD ou Flux. Tudo versionado em Git — da infraestrutura às aplicações." },
  { icon: Container, title: "Containerização", description: "Docker, Kubernetes e orquestração avançada. Clusters geridos (AKS, EKS, GKE) ou self-managed." },
  { icon: Cog, title: "Automação", description: "Scripts e workflows que eliminam tarefas repetitivas. Infraestrutura como Código com Terraform e Bicep." },
];

const benefits = [
  "GitHub Actions / GitLab CI / Azure DevOps",
  "Terraform & Bicep (IaC)",
  "ArgoCD / Flux (GitOps)",
  "Docker, Kubernetes, Helm",
  "Ansible, Packer, Vagrant",
  "HashiCorp Vault (segredos)",
];

export default function DevOpsPage() {
  return (
    <ServicePage
      eyebrow="DevOps & Automação"
      title="Do commit à produção,"
      highlight="sem fricção"
      lede="Pipelines CI/CD, Infrastructure as Code, GitOps e containerização que aceleram o time-to-market da sua equipa com entregas seguras e reversíveis."
      hue={HUE.cyan}
      capabilitiesHeading="Engenharia de entrega, de ponta a ponta"
      features={features}
      benefitsHeading="A nossa stack de automação"
      benefits={benefits}
      ctaTitle="Quer entregar mais rápido e com menos risco?"
      ctaText="Montamos o seu pipeline de build a observe — com rollback automático e IaC versionado."
    />
  );
}
