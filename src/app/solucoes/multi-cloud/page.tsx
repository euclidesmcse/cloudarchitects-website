import type { Metadata } from "next";
import { SolutionPage } from "@/components/site/solution-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Multi-Cloud — Soluções — Cloud Architects",
  description: "Arquiteturas multi-cloud que eliminam vendor lock-in e maximizam resiliência, com governança unificada e portabilidade garantida.",
};

const blocks = [
  { title: "Landing Zones Multi-Provedor", description: "Fundação segura e escalável para cada cloud, com políticas de segurança, rede e identidade padronizadas mas adaptadas a cada provedor." },
  { title: "Orquestração Cross-Cloud", description: "Gestão centralizada de recursos entre nuvens via Terraform Cloud, Crossplane e Azure Arc, com visibilidade total de inventário e custos." },
  { title: "Migração Híbrida Gradual", description: "Migração faseada (rehost, replatform, refactor) que minimiza downtime e riscos, mantendo ambientes on-premise e cloud em sincronia." },
  { title: "Disaster Recovery Multi-Região", description: "Planos de continuidade com replicação síncrona/assíncrona entre regiões e provedores, garantindo RPO e RTO de minutos para cargas críticas." },
  { title: "FinOps & Otimização Contínua", description: "Framework de gestão financeira que rastreia, aloca e otimiza gastos em todas as nuvens, com dashboards unificados e alertas de anomalias." },
];

export default function MultiCloudPage() {
  return (
    <SolutionPage
      eyebrow="Híbrido & Multi-Cloud"
      title="Multi-cloud"
      highlight="sem lock-in"
      lede="Arquiteturas multi-cloud que eliminam vendor lock-in e maximizam resiliência."
      intro="Projetamos e operamos ambientes multi-cloud que distribuem cargas de trabalho estrategicamente entre AWS, Azure e GCP. Cada workload vai para o provedor com o melhor custo-benefício, com governança unificada e portabilidade garantida."
      hue={HUE.blue}
      blocks={blocks}
    />
  );
}
