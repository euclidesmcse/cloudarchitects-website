import type { Metadata } from "next";
import { Headphones, ClipboardCheck, TrendingUp, Users } from "lucide-react";
import { ServicePage } from "@/components/site/service-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Consultoria Técnica — Cloud Architects",
  description:
    "Auditoria, planeamento estratégico e formação em cloud, DevOps e IA. Aceleramos a maturidade técnica da sua organização.",
};

const features = [
  { icon: ClipboardCheck, title: "Auditoria Técnica", description: "Analisamos a sua infraestrutura actual, identificamos riscos, gargalos e oportunidades de melhoria com um relatório detalhado." },
  { icon: TrendingUp, title: "Planeamento Estratégico", description: "Definimos um roadmap cloud alinhado com os objectivos de negócio, com milestones claros e estimativas de custo e retorno." },
  { icon: Users, title: "Formação de Equipas", description: "Workshops práticos e programas de capacitação em cloud, DevOps, IaC e IA para elevar o nível técnico da sua equipa." },
  { icon: Headphones, title: "Suporte Especializado", description: "Apoio técnico contínuo em modo retainer. Resolução de problemas complexos e aconselhamento arquitectural." },
];

const benefits = [
  "Discovery: entrevistas e levantamento de requisitos",
  "Assessment: auditoria técnica e análise de maturidade",
  "Roadmap: plano de acção com prioridades e timelines",
  "Execução: implementação faseada com checkpoints",
  "Transferência: documentação e capacitação da equipa interna",
];

export default function ConsultoriaPage() {
  return (
    <ServicePage
      eyebrow="Consultoria Técnica"
      title="Auditoria, estratégia"
      highlight="e formação"
      lede="Avaliamos a sua infraestrutura, desenhamos o plano e capacitamos a sua equipa — para que a autonomia técnica fique dentro de casa depois de sairmos."
      hue={HUE.amber}
      capabilitiesHeading="Como elevamos a sua maturidade técnica"
      features={features}
      benefitsHeading="A nossa metodologia"
      benefits={benefits}
      ctaTitle="Onde está a sua infraestrutura hoje — e onde podia estar?"
      ctaText="Começamos com um diagnóstico honesto e um roadmap priorizado por impacto."
    />
  );
}
