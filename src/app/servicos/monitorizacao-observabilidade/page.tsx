import type { Metadata } from "next";
import { Activity, Eye, Bell, ChartBar } from "lucide-react";
import { ServicePage } from "@/components/site/service-page";
import { HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Monitorização & Observabilidade — Cloud Architects",
  description:
    "Métricas, logs e traces centralizados. Dashboards, alertas inteligentes e SLOs para garantir a fiabilidade dos seus serviços.",
};

const features = [
  { icon: Eye, title: "Observabilidade Completa", description: "Métricas, logs e traces num único painel. Stack Grafana LGTM (Loki, Grafana, Tempo, Mimir) ou Datadog." },
  { icon: Bell, title: "Alertas Inteligentes", description: "Alertas com thresholds dinâmicos e escalonamento automático. Zero alert fatigue." },
  { icon: ChartBar, title: "Dashboards & SLOs", description: "Dashboards personalizados para cada equipa. Service Level Objectives com burn rate alerts." },
  { icon: Activity, title: "Análise de Performance", description: "Identificação de bottlenecks, análise de latência e optimização proactiva de recursos." },
];

export default function ObservabilidadePage() {
  return (
    <ServicePage
      eyebrow="Monitorização & Observabilidade"
      title="Visibilidade total,"
      highlight="em tempo real"
      lede="Centralizamos métricas, logs e traces para dar visibilidade completa sobre a sua infraestrutura e aplicações — com alertas inteligentes e SLOs."
      hue={HUE.amber}
      capabilitiesHeading="Do sinal ao insight"
      features={features}
      ctaTitle="Saiba o que está a acontecer antes que vire incidente."
      ctaText="Montamos a sua stack de observabilidade com dashboards e SLOs à medida."
    />
  );
}
