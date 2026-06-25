import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SolucoesInteligênciaArtificialPage() {
  return (
    <>
      <Section noBottom>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">IA & Machine Learning</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-surface-100 sm:text-5xl">
              Inteligência Artificial
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-surface-400">
              Soluções de IA que transformam dados em decisões e automatizam processos complexos.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-surface-300 mb-12">
              Criamos pipelines de ML e sistemas de IA generativa integrados aos seus processos de negócio. Do fine-tuning de modelos à operação em produção, entregamos soluções escaláveis, éticas e governadas.
            </p>

            <div className="grid gap-6 md:grid-cols-1">
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Modelos de ML Customizados</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Classificação, regressão, NLP e visão computacional com treino em dados proprietários. Versionamento de datasets, experimentos e modelos com MLflow ou W&B.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Agentes de IA Autônomos</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Agentes inteligentes com RAG (Retrieval-Augmented Generation), tool use e memória persistente. Capacidades multi-step reasoning para automação de processos empresariais complexos.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">IA Generativa Empresarial</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Integração de LLMs (GPT-4, Claude, Llama) com dados corporativos via APIs seguras. Chatbots, assistentes de código e geração de conteúdo com guardrails de compliance.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Fine-Tuning & Adaptação</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Adaptação de modelos open-source (LLaMA, Mistral, DeepSeek) com dados do seu domínio. Quantização e otimização para inferência eficiente em hardware próprio ou cloud.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">MLOps Pipeline Completo</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Ciclo de vida completo: ingestão de dados → feature engineering → treino → validação → deploy → monitoramento. Detecção automática de drift e retrain agendado.</p>
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
