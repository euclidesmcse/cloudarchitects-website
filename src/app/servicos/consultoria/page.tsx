import type { Metadata } from "next";
import Link from "next/link";
import { Headphones, ClipboardCheck, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Consultoria Técnica — Cloud Architects",
  description: "Auditoria, planeamento estratégico e formação em cloud, DevOps e IA. Aceleramos a maturidade técnica da sua organização.",
};

const services = [
  { icon: ClipboardCheck, title: "Auditoria Técnica", desc: "Analisamos a sua infraestrutura actual, identificamos riscos, gargalos e oportunidades de melhoria com um relatório detalhado." },
  { icon: TrendingUp, title: "Planeamento Estratégico", desc: "Definimos um roadmap cloud alinhado com os objectivos de negócio, com milestones claros e estimativas de custo e retorno." },
  { icon: Users, title: "Formação de Equipas", desc: "Workshops práticos e programas de capacitação em cloud, DevOps, IaC e IA para elevar o nível técnico da sua equipa." },
  { icon: Headphones, title: "Suporte Especializado", desc: "Apoio técnico contínuo em modo retainer. Resolução de problemas complexos e aconselhamento arquitectural." },
];

const methodology = [
  "Discovery: entrevistas e levantamento de requisitos",
  "Assessment: auditoria técnica e análise de maturidade",
  "Roadmap: plano de acção com prioridades e timelines",
  "Execução: implementação faseada com checkpoints",
  "Transferência: documentação e capacitação da equipa interna",
];

export default function ConsultoriaPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-surface-950 to-surface-950" />
        <Container className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-emerald-600/30 text-emerald-400">Consultoria Técnica</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Consultoria <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Especializada</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-400">
              Apoiamos a sua equipa com auditorias, planeamento estratégico, formação técnica e suporte continuado em cloud, DevOps e IA.
            </p>
            <div className="mt-8">
              <Link href="/contacto"><Button size="lg">Solicitar Consultoria <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title} className="flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 text-emerald-400 ring-1 ring-emerald-600/20">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">{s.desc}</p>
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
              <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">A Nossa Metodologia</h2>
              <ul className="mt-6 space-y-3">
                {methodology.map((m, i) => (
                  <li key={i} className="flex items-center gap-3 text-surface-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600/20 text-xs font-bold text-emerald-400">{i + 1}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="flex items-center justify-center border-emerald-800/50 bg-emerald-950/20 p-8">
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold text-surface-50">Pronto para evoluir?</h3>
                <p className="mt-2 text-sm text-surface-400">Marque uma sessão de discovery gratuita e descubra o potencial da sua infraestrutura.</p>
                <Link href="/contacto" className="mt-6 inline-block"><Button>Marcar Discovery <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
