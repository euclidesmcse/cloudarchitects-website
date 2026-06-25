import {
  Cloud,
  GitBranch,
  Bot,
  DollarSign,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Server,
  Shield,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    category: "Cloud",
    icon: Cloud,
    question: "Quais serviços cloud a Cloud Architects oferece?",
    answer:
      "Oferecemos consultoria e gestão completa em cloud computing, incluindo migração para a nuvem, arquitetura de soluções escaláveis, otimização de custos em AWS, Azure e Google Cloud, alojamento de infraestrutura, disaster recovery e conformidade com normas como a RGPD. Trabalhamos com modelos híbridos e multi-cloud para nos adaptarmos às necessidades específicas de cada cliente.",
  },
  {
    category: "Cloud",
    icon: Cloud,
    question: "Como funciona o processo de migração para a cloud?",
    answer:
      "O nosso processo segue uma metodologia estruturada: avaliação do ambiente atual (descoberta e mapeamento de dependências), planeamento da migração com definição de estratégia (re-hospedagem, replataforma ou refatoração), execução faseada com validação contínua, e otimização pós-migração. Garantimos zero downtime crítico durante todo o processo e realizamos testes de carga antes do go-live final.",
  },
  {
    category: "DevOps",
    icon: GitBranch,
    question: "O que está incluído nas vossas práticas DevOps?",
    answer:
      "As nossas práticas DevOps abrangem integração e entrega contínuas (CI/CD), gestão de configuração com Infrastructure as Code (Terraform, Bicep, Pulumi), monitorização e observabilidade (Prometheus, Grafana, Datadog), gestão de Kubernetes e containerização com Docker, e automação de pipelines de deploy. Implementamos GitOps para garantir rastreabilidade e consistência entre ambientes.",
  },
  {
    category: "DevOps",
    icon: GitBranch,
    question: "Trabalham com ambientes Kubernetes e containerização?",
    answer:
      "Sim, somos especialistas em Kubernetes e containerização. Configuramos clusters AKS (Azure), EKS (AWS) e GKE (Google), gerimos helm charts, service mesh (Istio/Linkerd), políticas de rede, auto-scaling e segurança de containers com image scanning e políticas de runtime. Também oferecemos formação e workshops para que a sua equipa possa gerir os clusters internamente.",
  },
  {
    category: "AI Agents",
    icon: Bot,
    question: "Que tipos de agentes de IA podem desenvolver para o meu negócio?",
    answer:
      "Desenvolvemos agentes de IA personalizados para diversos casos de uso: assistentes virtuais de suporte ao cliente com processamento de linguagem natural, agentes de automação de workflows internos, chatbots inteligentes para triagem de leads e vendas, sistemas de recomendação baseados em machine learning, e agentes autónomos para análise de dados e geração de relatórios. Integramos com plataformas como Microsoft Copilot, OpenAI, LangChain e Azure AI Foundry.",
  },
  {
    category: "AI Agents",
    icon: Bot,
    question: "Como garantem que os agentes de IA são seguros e éticos?",
    answer:
      "A segurança e ética são prioridades na nossa abordagem. Implementamos guardrails de conteúdo, sistemas de validação de outputs para evitar alucinações, controlo de acesso baseado em funções (RBAC), auditoria e logging de todas as interações, e cumprimento rigoroso da RGPD para tratamento de dados pessoais. Todos os agentes passam por testes de robustez, fairness e segurança antes da implementação em produção.",
  },
  {
    category: "Pricing",
    icon: DollarSign,
    question: "Como funciona o modelo de preços?",
    answer:
      "Oferecemos modelos de pricing flexíveis para nos adaptarmos a diferentes realidades: projetos com escopo definido (preço fixo), consultoria por hora ou dedicada (retainer mensal), e modelos de managed services com faturação mensal recorrente. Fornecemos uma proposta detalhada e transparente após uma sessão de descoberta gratuita, sem compromissos. Não temos taxas escondidas — o que acordamos é o que faturamos.",
  },
  {
    category: "Pricing",
    icon: DollarSign,
    question: "Oferecem uma sessão de consultoria gratuita antes de contratar?",
    answer:
      "Sim, oferecemos uma sessão de descoberta gratuita e sem compromisso. Nesta sessão, analisamos o seu cenário atual, identificamos dores e oportunidades, alinhamos expectativas e apresentamos uma proposta de valor personalizada. Acreditamos que a transparência e o alinhamento desde o início são fundamentais para uma parceria de sucesso. Pode agendar a sua sessão através do botão no final desta página.",
  },
  {
    category: "Process",
    icon: Users,
    question: "Como é o vosso processo de onboarding para novos clientes?",
    answer:
      "O nosso onboarding segue um fluxo bem definido: (1) kickoff meeting com alinhamento de stakeholders e definição de KPIs, (2) discovery técnica aprofundada com análise de arquitetura atual, (3) definição de roadmap e milestones, (4) setup de ferramentas e acessos com segurança desde o primeiro dia, (5) execução iterativa com sprints semanais e demos quinzenais, e (6) handover com documentação completa e transferência de conhecimento.",
  },
  {
    category: "Process",
    icon: Shield,
    question: "Como garantem a segurança e conformidade dos vossos serviços?",
    answer:
      "A segurança está no centro de tudo o que fazemos. Seguimos as melhores práticas do Azure Well-Architected Framework, AWS Well-Architected Framework e CIS Benchmarks. Implementamos políticas de least privilege, encriptação em repouso e em trânsito, backup automatizado com retenção configurável, SIEM para deteção de ameaças, e realizamos auditorias regulares. Todas as soluções cumprem a RGPD e podem ser adaptadas para normas setoriais como ISO 27001, HIPAA ou PCI-DSS.",
  },
];

export default function FAQ() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <Section className="relative overflow-hidden pt-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/40 via-surface-950 to-surface-950" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-accent-600/10 blur-[100px]" />

        <Container className="relative z-10 mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="accent" className="mb-6">
              <HelpCircle className="mr-1.5 h-3.5 w-3.5" />
              FAQ
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface-400">
              Tire as suas dúvidas sobre cloud, DevOps, agentes de IA, pricing e o
              nosso processo de trabalho.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── FAQ List ─────────────────────────────── */}
      <Section noTop muted>
        <Container size="md">
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <details
                  key={index}
                  className="group rounded-xl border border-surface-700/50 bg-surface-850/80 transition-colors duration-200 hover:border-surface-600/80 open:border-brand-600/40 open:bg-surface-850"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 text-surface-100 transition-colors duration-200 hover:text-surface-50 [&::-webkit-details-marker]:hidden">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                      <span className="text-base font-medium sm:text-lg">
                        {item.question}
                      </span>
                      <Badge variant="brand" small>
                        {item.category}
                      </Badge>
                    </div>
                    <ChevronDown className="h-5 w-5 shrink-0 text-surface-500 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-surface-700/50 px-6 pb-6 pt-4">
                    <p className="leading-relaxed text-surface-400">
                      {item.answer}
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── CTA ─────────────────────────────── */}
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-950 via-brand-950/30 to-surface-950" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-accent-600/30 text-accent-400">
              <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
              Fale Connosco
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Não encontrou a resposta que procurava?
            </h2>

            <p className="mx-auto mt-4 max-w-md text-surface-400">
              Estamos aqui para ajudar. Agende uma sessão gratuita com um dos
              nossos especialistas e tire todas as suas dúvidas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                icon={<MessageCircle className="h-4 w-4" />}
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                Agendar Sessão Gratuita
              </Button>

              <Button variant="outline" size="lg">
                Ver Todos os Serviços
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
