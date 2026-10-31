import type { Metadata } from "next";
import { SolutionPage } from "@/components/site/solution-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Inteligência Artificial — Soluções — Cloud Architects",
  description: "Soluções de IA que transformam dados em decisões e automatizam processos complexos — do fine-tuning de modelos à operação em produção.",
};

const blocks = [
  { title: "Modelos de ML Customizados", description: "Classificação, regressão, NLP e visão computacional com treino em dados proprietários. Versionamento de datasets, experimentos e modelos com MLflow ou W&B." },
  { title: "Agentes de IA Autónomos", description: "Agentes inteligentes com RAG (Retrieval-Augmented Generation), tool use e memória persistente. Multi-step reasoning para automação de processos empresariais complexos." },
  { title: "IA Generativa Empresarial", description: "Integração de LLMs (GPT-4, Claude, Llama) com dados corporativos via APIs seguras. Chatbots, assistentes de código e geração de conteúdo com guardrails de compliance." },
  { title: "Fine-Tuning & Adaptação", description: "Adaptação de modelos open-source (LLaMA, Mistral, DeepSeek) com dados do seu domínio. Quantização e otimização para inferência eficiente em hardware próprio ou cloud." },
  { title: "MLOps Pipeline Completo", description: "Ciclo de vida completo: ingestão de dados → feature engineering → treino → validação → deploy → monitoramento. Deteção automática de drift e retrain agendado." },
];

export default function SolucoesIAPage() {
  return (
    <SolutionPage
      eyebrow="IA & Machine Learning"
      title="Inteligência artificial"
      highlight="que decide"
      lede="Soluções de IA que transformam dados em decisões e automatizam processos complexos."
      intro="Criamos pipelines de ML e sistemas de IA generativa integrados aos seus processos de negócio. Do fine-tuning de modelos à operação em produção, entregamos soluções escaláveis, éticas e governadas."
      hue={HUE.violet}
      blocks={blocks}
    />
  );
}
