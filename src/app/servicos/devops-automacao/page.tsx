import type { Metadata } from "next";
import Link from "next/link";
import { GitBranch, Container, Infinity, Cog, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container as UIContainer } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "DevOps & Automação — Cloud Architects",
  description: "Pipelines CI/CD, Infrastructure as Code, GitOps e containerização para acelerar o time-to-market da sua equipa.",
};

const features = [
  { icon: GitBranch, title: "CI/CD", description: "Pipelines completas com GitHub Actions, GitLab CI ou Azure DevOps. Build, test e deploy automatizados com quality gates." },
  { icon: Infinity, title: "GitOps", description: "Deploy automatizado com ArgoCD ou Flux. Tudo versionado em Git — da infraestrutura às aplicações." },
  { icon: Container, title: "Containerização", description: "Docker, Kubernetes e orquestração avançada. Clusters geridos (AKS, EKS, GKE) ou self-managed." },
  { icon: Cog, title: "Automação", description: "Scripts e workflows que eliminam tarefas repetitivas. Infraestrutura como Código com Terraform e Bicep." },
];

const stack = [
  "GitHub Actions / GitLab CI / Azure DevOps",
  "Terraform & Bicep (IaC)",
  "ArgoCD / Flux (GitOps)",
  "Docker, Kubernetes, Helm",
  "Ansible, Packer, Vagrant",
  "HashiCorp Vault (segredos)",
];

export default function DevOpsPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-950/30 via-surface-950 to-surface-950" />
        <UIContainer className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-accent-600/30 text-accent-400">DevOps & Automação</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Automação que{" "}
              <span className="bg-gradient-to-r from-accent-400 to-purple-400 bg-clip-text text-transparent">Acelera</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-400">
              Implementamos pipelines CI/CD completos, Infrastructure as Code, GitOps e containerização para reduzir o time-to-market da sua equipa de semanas para horas.
            </p>
            <div className="mt-8">
              <Link href="/contacto"><Button size="lg">Automatize o seu Deploy <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </UIContainer>
      </Section>

      <Section>
        <UIContainer>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">Como Automatizamos</h2>
            <p className="mt-4 text-surface-400">Ferramentas e práticas modernas para pipelines robustas.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map((f) => (
              <Card key={f.title} className="flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600/20 to-purple-600/20 text-accent-400 ring-1 ring-accent-600/20">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">{f.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </UIContainer>
      </Section>

      <Section muted>
        <UIContainer>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">Stack Tecnológico</h2>
              <ul className="mt-6 space-y-3">
                {stack.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-surface-300"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <Card className="flex items-center justify-center border-accent-800/50 bg-accent-950/20 p-8">
              <CardContent className="text-center">
                <Infinity className="mx-auto h-12 w-12 text-accent-400" />
                <h3 className="mt-4 text-xl font-semibold text-surface-50">Deploy Contínuo, Sem Stress</h3>
                <p className="mt-2 text-sm text-surface-400">Cada commit na main dispara um deploy. Rollback em segundos. Sem sustos.</p>
                <Link href="/contacto" className="mt-6 inline-block"><Button>Falar com a Equipa <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              </CardContent>
            </Card>
          </div>
        </UIContainer>
      </Section>
    </>
  );
}
