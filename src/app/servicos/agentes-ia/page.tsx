import type { Metadata } from "next";
import { Bot, Brain, Database, LineChart } from "lucide-react";
import { ServicePage } from "@/components/site/service-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Agentes de IA — Cloud Architects",
  description:
    "Agentes de inteligência artificial generativa para automatizar tarefas complexas. RAG, fine-tuning e deployment em produção.",
};

const features = [
  { icon: Bot, title: "Agentes Generativos", description: "Agentes autónomos que executam tarefas complexas: análise de dados, geração de relatórios, resposta a incidentes e muito mais." },
  { icon: Brain, title: "RAG & Memória", description: "Retrieval-Augmented Generation com a sua base de conhecimento. Agentes com contexto e memória persistente." },
  { icon: Database, title: "Fine-Tuning", description: "Ajustamos modelos open-source (Llama, Mistral) ou proprietários aos seus dados e casos de uso específicos." },
  { icon: LineChart, title: "Monitorização", description: "Dashboards de qualidade, latência e custo. Avaliação contínua para garantir que os agentes mantêm a performance esperada." },
];

const benefits = [
  "Agentes de suporte técnico autónomos",
  "Automação de processos de negócio (RPA inteligente)",
  "Geração e validação de documentação técnica",
  "Análise automática de logs e incidentes",
  "Assistentes de compliance e auditoria",
  "Chatbots corporativos com RAG",
];

export default function AgentesIAPage() {
  return (
    <ServicePage
      eyebrow="Agentes de IA"
      title="Agentes que operam,"
      highlight="não só conversam"
      lede="Desenvolvemos e operamos agentes de IA generativa que automatizam tarefas complexas — com LLMs locais e cloud, RAG, fine-tuning e deployment em produção."
      hue={HUE.violet}
      capabilitiesHeading="Capacidades"
      features={features}
      benefitsHeading="Casos de uso"
      benefits={benefits}
      ctaTitle="Quer um agente a trabalhar pela sua empresa?"
      ctaText="Agende uma demo e veja um agente de IA em ação no seu próprio contexto."
    />
  );
}
