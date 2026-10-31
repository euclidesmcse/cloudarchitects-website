import type { Metadata } from "next";
import { SolutionPage } from "@/components/site/solution-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Segurança Cloud — Soluções — Cloud Architects",
  description: "Defesa em profundidade para proteger identidades, dados e workloads na nuvem — da arquitetura Zero Trust à automação de compliance.",
};

const blocks = [
  { title: "Zero Trust Architecture", description: "Modelo de segurança que elimina confiança implícita. Cada acesso é autenticado, autorizado e criptografado — independentemente da origem. Azure AD, Okta ou AWS IAM Identity Center." },
  { title: "Proteção de Dados & DLP", description: "Criptografia em repouso e em trânsito com gestão centralizada de chaves (KMS/HSM). Data Loss Prevention com classificação automática de dados sensíveis e políticas de retenção." },
  { title: "Security Operations Center", description: "SIEM (Microsoft Sentinel, Splunk) + SOAR para deteção e resposta automatizada a incidentes. Threat Hunting proativo com inteligência de ameaças em tempo real." },
  { title: "Compliance Automatizado", description: "Validação contínua de conformidade com RGPD, ISO 27001, SOC 2 e PCI-DSS. Políticas como código (Rego/OPA) que bloqueiam recursos não-conformes antes do deploy." },
  { title: "Container & Supply Chain Security", description: "Scanning de vulnerabilidades em imagens (Trivy, Grype), assinatura de artefatos (Cosign/Sigstore) e SBOM para rastreabilidade completa da cadeia de software." },
];

export default function SolucoesSegurancaPage() {
  return (
    <SolutionPage
      eyebrow="Cloud Security & Compliance"
      title="Segurança cloud"
      highlight="em profundidade"
      lede="Defesa em profundidade para proteger identidades, dados e workloads na nuvem."
      intro="Implementamos controles de segurança multicamada com monitoramento contínuo de ameaças. Da arquitetura Zero Trust à automação de compliance, a sua infraestrutura fica protegida contra um cenário de ameaças em constante evolução."
      hue={HUE.green}
      blocks={blocks}
    />
  );
}
