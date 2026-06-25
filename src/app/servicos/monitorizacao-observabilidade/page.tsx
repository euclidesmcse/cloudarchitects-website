import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Eye, Bell, ChartBar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Monitorização & Observabilidade — Cloud Architects",
  description: "Métricas, logs e traces centralizados. Dashboards, alertas inteligentes e SLOs para garantir a fiabilidade dos seus serviços.",
};

const features = [
  { icon: Eye, title: "Observabilidade Completa", desc: "Métricas, logs e traces num único painel. Stack Grafana LGTM (Loki, Grafana, Tempo, Mimir) ou Datadog." },
  { icon: Bell, title: "Alertas Inteligentes", desc: "Alertas configurados com thresholds dinâmicos e escalonamento automático. Zero alert fatigue." },
  { icon: ChartBar, title: "Dashboards & SLOs", desc: "Dashboards personalizados para cada equipa. Service Level Objectives com burn rate alerts." },
  { icon: Activity, title: "Análise de Performance", desc: "Identificação de bottlenecks, análise de latência e optimização proactiva de recursos." },
];

export default function MonitorizacaoPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-surface-950 to-surface-950" />
        <Container className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-cyan-600/30 text-cyan-400">Monitorização & Observabilidade</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Visibilidade <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Total</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-400">
              Centralizamos métricas, logs e traces para dar visibilidade total sobre a sua infraestrutura e aplicações.
            </p>
            <div className="mt-8"><Link href="/contacto"><Button size="lg">Ver uma Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
          </div>
        </Container>
      </Section>
      <Section><Container>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <Card key={f.title} className="flex gap-5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 text-cyan-400 ring-1 ring-cyan-600/20"><f.icon className="h-6 w-6" /></div>
              <div><h3 className="text-lg font-semibold text-surface-100">{f.title}</h3><p className="mt-2 text-sm leading-relaxed text-surface-400">{f.desc}</p></div>
            </Card>
          ))}
        </div>
      </Container></Section>
      <Section muted><Container>
        <div className="text-center"><h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">Não deixe pontos cegos</h2><p className="mt-4 text-surface-400">Saiba o que acontece na sua infra antes dos seus clientes.</p>
        <Link href="/contacto" className="mt-6 inline-block"><Button size="lg">Começar <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
      </Container></Section>
    </>
  );
}
