import type { Metadata } from "next";
import { Shield, Key, FileCheck, AlertTriangle } from "lucide-react";
import { ServicePage } from "@/components/site/service-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Segurança & Compliance — Cloud Architects",
  description:
    "Auditoria, proteção e conformidade da sua infraestrutura. Zero Trust, gestão de segredos e hardening contínuo.",
};

const features = [
  { icon: Shield, title: "Auditoria & Hardening", description: "Análise completa da postura de segurança. Hardening de sistemas, redes e aplicações segundo benchmarks CIS e boas práticas." },
  { icon: Key, title: "Gestão de Segredos", description: "Implementação de HashiCorp Vault ou Infisical. Rotação automática de credenciais e zero hardcoded secrets." },
  { icon: FileCheck, title: "Compliance", description: "Preparação para certificações SOC 2, ISO 27001 e conformidade com RGPD. Políticas documentadas e evidências automatizadas." },
  { icon: AlertTriangle, title: "Resposta a Incidentes", description: "Planos de resposta, playbooks automáticos e simulações regulares. Deteção precoce com alertas inteligentes." },
];

export default function SegurancaPage() {
  return (
    <ServicePage
      eyebrow="Segurança & Compliance"
      title="Segurança"
      highlight="sem compromissos"
      lede="Auditamos, protegemos e mantemos a sua infraestrutura em conformidade com as melhores práticas e normas do mercado — Zero Trust, gestão de segredos e hardening contínuo."
      hue={HUE.green}
      capabilitiesHeading="Proteção em todas as camadas"
      features={features}
      ctaTitle="Proteja o seu negócio antes do próximo incidente."
      ctaText="Segurança não é opcional. Começamos com uma auditoria à sua postura actual."
    />
  );
}
