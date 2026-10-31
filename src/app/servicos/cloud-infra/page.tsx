import type { Metadata } from "next";
import { Cloud, Shield, Server, DollarSign } from "lucide-react";
import { ServicePage } from "@/components/site/service-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Cloud & Infraestrutura — Cloud Architects",
  description:
    "Arquitectura e gestão de infraestrutura multi-cloud (AWS, Azure, GCP, OCI) com foco em segurança, performance e optimização contínua de custos.",
};

const features = [
  { icon: Cloud, title: "Arquitectura Multi-Cloud", description: "Desenhamos landing zones e arquitecturas de referência para AWS, Azure, GCP e OCI, adaptadas às necessidades do seu negócio." },
  { icon: Shield, title: "Segurança by Design", description: "Implementamos políticas de segurança desde o primeiro dia: IAM, Network Policies, WAF, e criptografia em trânsito e em repouso." },
  { icon: DollarSign, title: "FinOps & Optimização", description: "Analisamos e optimizamos os seus custos cloud com dashboards em tempo real, right-sizing automático e reserved instances." },
  { icon: Server, title: "Gestão Contínua", description: "Assumimos a gestão diária da sua infraestrutura com monitorização 24/7, patching automático e resposta a incidentes." },
];

const benefits = [
  "Migração zero-downtime entre clouds",
  "Landing zones com governança e políticas",
  "Infraestrutura como Código (Terraform, Bicep)",
  "Networking avançado (VPC, peering, VPN, CDN)",
  "Backup e disaster recovery automatizados",
  "Relatórios mensais de performance e custos",
];

export default function CloudInfraPage() {
  return (
    <ServicePage
      eyebrow="Cloud & Infraestrutura"
      title="Infraestrutura cloud"
      highlight="de excelência"
      lede="Arquitectamos, migramos e gerimos infraestrutura multi-cloud com foco em segurança, performance e optimização de custos — do desenho inicial à gestão diária."
      hue={HUE.blue}
      capabilitiesHeading="Um portfólio completo de infraestrutura"
      features={features}
      benefitsHeading="Tudo incluído"
      benefits={benefits}
      ctaTitle="Pronto para escalar a sua infraestrutura?"
      ctaText="Fale connosco e descubra como reduzir custo e risco na sua operação multi-cloud."
    />
  );
}
