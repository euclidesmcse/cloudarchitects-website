import { Cloud, GitBranch, Bot, DollarSign, ChevronDown, Shield, Users } from "lucide-react";
import { PageHero, CTASection, HUE } from "@/components/site/primitives";

const HUE_BY_CAT: Record<string, string> = {
  Cloud: HUE.blue,
  DevOps: HUE.cyan,
  "AI Agents": HUE.violet,
  Pricing: HUE.amber,
  Process: HUE.green,
};

const faqItems = [
  { category: "Cloud", icon: Cloud, question: "Quais serviços cloud a Cloud Architects oferece?", answer: "Oferecemos consultoria e gestão completa em cloud computing, incluindo migração para a nuvem, arquitetura de soluções escaláveis, otimização de custos em AWS, Azure e Google Cloud, alojamento de infraestrutura, disaster recovery e conformidade com normas como a RGPD. Trabalhamos com modelos híbridos e multi-cloud para nos adaptarmos às necessidades específicas de cada cliente." },
  { category: "Cloud", icon: Cloud, question: "Como funciona o processo de migração para a cloud?", answer: "O nosso processo segue uma metodologia estruturada: avaliação do ambiente atual (descoberta e mapeamento de dependências), planeamento da migração com definição de estratégia (re-hospedagem, replataforma ou refatoração), execução faseada com validação contínua, e otimização pós-migração. Garantimos zero downtime crítico durante todo o processo e realizamos testes de carga antes do go-live final." },
  { category: "DevOps", icon: GitBranch, question: "O que está incluído nas vossas práticas DevOps?", answer: "As nossas práticas DevOps abrangem integração e entrega contínuas (CI/CD), gestão de configuração com Infrastructure as Code (Terraform, Bicep, Pulumi), monitorização e observabilidade (Prometheus, Grafana, Datadog), gestão de Kubernetes e containerização com Docker, e automação de pipelines de deploy. Implementamos GitOps para garantir rastreabilidade e consistência entre ambientes." },
  { category: "DevOps", icon: GitBranch, question: "Trabalham com ambientes Kubernetes e containerização?", answer: "Sim, somos especialistas em Kubernetes e containerização. Configuramos clusters AKS (Azure), EKS (AWS) e GKE (Google), gerimos helm charts, service mesh (Istio/Linkerd), políticas de rede, auto-scaling e segurança de containers com image scanning e políticas de runtime. Também oferecemos formação e workshops para que a sua equipa possa gerir os clusters internamente." },
  { category: "AI Agents", icon: Bot, question: "Que tipos de agentes de IA podem desenvolver para o meu negócio?", answer: "Desenvolvemos agentes de IA personalizados para diversos casos de uso: assistentes virtuais de suporte ao cliente com processamento de linguagem natural, agentes de automação de workflows internos, chatbots inteligentes para triagem de leads e vendas, sistemas de recomendação baseados em machine learning, e agentes autónomos para análise de dados e geração de relatórios. Integramos com plataformas como Microsoft Copilot, OpenAI, LangChain e Azure AI Foundry." },
  { category: "AI Agents", icon: Bot, question: "Como garantem que os agentes de IA são seguros e éticos?", answer: "A segurança e ética são prioridades na nossa abordagem. Implementamos guardrails de conteúdo, sistemas de validação de outputs para evitar alucinações, controlo de acesso baseado em funções (RBAC), auditoria e logging de todas as interações, e cumprimento rigoroso da RGPD para tratamento de dados pessoais. Todos os agentes passam por testes de robustez, fairness e segurança antes da implementação em produção." },
  { category: "Pricing", icon: DollarSign, question: "Como funciona o modelo de preços?", answer: "Oferecemos modelos de pricing flexíveis para nos adaptarmos a diferentes realidades: projetos com escopo definido (preço fixo), consultoria por hora ou dedicada (retainer mensal), e modelos de managed services com faturação mensal recorrente. Fornecemos uma proposta detalhada e transparente após uma sessão de descoberta gratuita, sem compromissos. Não temos taxas escondidas — o que acordamos é o que faturamos." },
  { category: "Pricing", icon: DollarSign, question: "Oferecem uma sessão de consultoria gratuita antes de contratar?", answer: "Sim, oferecemos uma sessão de descoberta gratuita e sem compromisso. Nesta sessão, analisamos o seu cenário atual, identificamos dores e oportunidades, alinhamos expectativas e apresentamos uma proposta de valor personalizada. Acreditamos que a transparência e o alinhamento desde o início são fundamentais para uma parceria de sucesso." },
  { category: "Process", icon: Users, question: "Como é o vosso processo de onboarding para novos clientes?", answer: "O nosso onboarding segue um fluxo bem definido: (1) kickoff meeting com alinhamento de stakeholders e definição de KPIs, (2) discovery técnica aprofundada, (3) definição de roadmap e milestones, (4) setup de ferramentas e acessos com segurança desde o primeiro dia, (5) execução iterativa com sprints semanais e demos quinzenais, e (6) handover com documentação completa e transferência de conhecimento." },
  { category: "Process", icon: Shield, question: "Como garantem a segurança e conformidade dos vossos serviços?", answer: "A segurança está no centro de tudo o que fazemos. Seguimos as melhores práticas do Azure e AWS Well-Architected Framework e CIS Benchmarks. Implementamos políticas de least privilege, encriptação em repouso e em trânsito, backup automatizado com retenção configurável, SIEM para deteção de ameaças, e realizamos auditorias regulares. Todas as soluções cumprem a RGPD e podem ser adaptadas para ISO 27001, HIPAA ou PCI-DSS." },
];

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Perguntas <span className="gradient-text">frequentes.</span>
          </>
        }
        lede="Tire as suas dúvidas sobre cloud, DevOps, agentes de IA, pricing e o nosso processo de trabalho."
        primary={{ href: "/contacto", label: "Falar com engenharia" }}
        secondary={{ href: "/servicos", label: "Ver serviços" }}
      />

      <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const hue = HUE_BY_CAT[item.category] ?? HUE.blue;
            const Icon = item.icon;
            return (
              <details
                key={index}
                style={{ "--ca-hue": hue } as React.CSSProperties}
                className="ca-rise group overflow-hidden rounded-xl border border-slate-200/60 bg-white transition-colors open:border-slate-300 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${hue}1f`, color: hue }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="ca-font-sans flex-1 text-[0.95rem] font-medium text-[#0a1b33]">{item.question}</span>
                  <span className="ca-font-sans hidden text-[0.6rem] font-semibold uppercase tracking-[0.12em] sm:inline" style={{ color: hue }}>
                    {item.category}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="border-t border-slate-200/60 px-5 pb-5 pt-4">
                  <p className="ca-font-sans text-sm leading-relaxed text-slate-500">{item.answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Não encontrou a resposta que procurava?"
        text="Agende uma sessão gratuita com um dos nossos especialistas e tire todas as suas dúvidas."
        primary={{ href: "/contacto", label: "Agendar sessão gratuita" }}
        secondary={{ href: "/servicos", label: "Ver todos os serviços" }}
      />
    </>
  );
}
