import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Brain, Database, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Agentes de IA — Cloud Architects",
  description: "Agentes de inteligência artificial generativa para automatizar tarefas complexas. RAG, fine-tuning e deployment em produção.",
};

const features = [
  { icon: Bot, title: "Agentes Generativos", description: "Agentes autónomos que executam tarefas complexas: análise de dados, geração de relatórios, resposta a incidentes e muito mais." },
  { icon: Brain, title: "RAG & Memória", description: "Retrieval-Augmented Generation com a sua base de conhecimento. Agentes com contexto e memória persistente." },
  { icon: Database, title: "Fine-Tuning", description: "Ajustamos modelos open-source (Llama, Mistral) ou proprietários aos seus dados e casos de uso específicos." },
  { icon: LineChart, title: "Monitorização", description: "Dashboards de qualidade, latência e custo. Avaliação contínua para garantir que os agentes mantêm a performance esperada." },
];

const useCases = [
  "Agentes de suporte técnico autónomos",
  "Automação de processos de negócio (RPA inteligente)",
  "Geração e validação de documentação técnica",
  "Análise automática de logs e incidentes",
  "Assistentes de compliance e auditoria",
  "Chatbots corporativos com RAG",
];

export default function AgentesIAPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-950/30 via-surface-950 to-surface-950" />
        <Container className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-purple-600/30 text-purple-400">Agentes de IA</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Inteligência{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Autónoma</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-400">
              Desenvolvemos e operamos agentes de IA generativa que automatizam tarefas complexas. Integração com LLMs, RAG, fine-tuning e deployment em produção.
            </p>
            <div className="mt-8">
              <Link href="/contacto"><Button size="lg">Explorar Agentes de IA <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">Capacidades</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map((f) => (
              <Card key={f.title} className="flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 text-purple-400 ring-1 ring-purple-600/20">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">{f.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">Casos de Uso</h2>
              <ul className="mt-6 space-y-3">
                {useCases.map((u) => (
                  <li key={u} className="flex items-center gap-3 text-surface-300"><CheckCircle2 className="h-5 w-5 shrink-0 text-purple-500" /><span>{u}</span></li>
                ))}
              </ul>
            </div>
            <Card className="flex items-center justify-center border-purple-800/50 bg-purple-950/20 p-8">
              <CardContent className="text-center">
                <Bot className="mx-auto h-12 w-12 text-purple-400" />
                <h3 className="mt-4 text-xl font-semibold text-surface-50">Quer um agente para a sua empresa?</h3>
                <p className="mt-2 text-sm text-surface-400">Agende uma demo e veja um agente de IA em ação no seu contexto.</p>
                <Link href="/contacto" className="mt-6 inline-block"><Button>Agendar Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
