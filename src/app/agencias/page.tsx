import Link from "next/link";
import {
  Handshake,
  Layers,
  Zap,
  ShieldCheck,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Building2,
  Sparkles,
  DollarSign,
  Clock,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Agencias() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <Section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden pt-0">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/40 via-surface-950 to-surface-950" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-accent-600/10 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand" className="mb-6">
              Parceiro White-Label · Cloud & DevOps
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              A sua agência merece uma infraestrutura{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                enterprise — sem complicação
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface-400">
              Oferecemos soluções cloud, DevOps e IA sob a sua marca. Você mantém
              o relacionamento com o cliente, nós entregamos a excelência técnica
              que o seu projeto exige.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#tornar-parceiro">
                <Button size="lg" className="w-full sm:w-auto">
                  Tornar-me Parceiro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#modelo">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver Modelo de Parceria
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-surface-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-500" />
                Marca Branca
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-500" />
                Entrega Garantida
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-500" />
                SLA 24/7
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-500" />
                Equipa Dedicada
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Value Proposition ─────────────────── */}
      <Section muted id="modelo">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-brand-600/30 text-brand-400">
              Proposta de Valor
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Expanda a sua oferta sem contratar mais engenheiros
            </h2>
            <p className="mt-4 text-surface-400">
              A Cloud Architects atua como o seu departamento de engenharia
              white-label. Integramos na sua equipa de forma transparente —
              os seus clientes veem apenas a sua marca.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proposta.map((item) => (
              <Card key={item.title} glow className="group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-600/20 text-brand-400 ring-1 ring-brand-600/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Partnership Model ─────────────────── */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-accent-600/30 text-accent-400">
              Modelo de Parceria
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Como funciona a parceria
            </h2>
            <p className="mt-4 text-surface-400">
              Um modelo desenhado para agências crescerem sem limites — simples,
              transparente e 100% white-label.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {modelo.map((step, index) => (
              <Card key={step.title} hover className="group">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/15 text-sm font-bold text-brand-400">
                      {index + 1}
                    </span>
                    <Badge variant="brand" small>
                      {step.tag}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-surface-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership highlight */}
          <div className="mt-12 rounded-xl border border-brand-600/20 bg-brand-600/5 p-8 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-brand-400" />
            <p className="mt-4 text-lg font-medium text-surface-50">
              Sem taxas de setup. Sem compromissos de longo prazo.
            </p>
            <p className="mt-1 text-sm text-surface-400">
              Pague apenas pelos serviços que utilizar — escala para cima e para
              baixo conforme a necessidade dos seus clientes.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Benefits ──────────────────────────── */}
      <Section muted>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-brand-600/30 text-brand-400">
              Benefícios
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              O que a sua agência ganha
            </h2>
            <p className="mt-4 text-surface-400">
              Mais do que um fornecedor — um parceiro estratégico para acelerar o
              crescimento do seu negócio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((item) => (
              <Card key={item.title} hover className="group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600/20 to-brand-600/20 text-accent-400 ring-1 ring-accent-600/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Testimonials Placeholder ──────────── */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-brand-600/30 text-brand-400">
              Testemunhos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              O que os nossos parceiros dizem
            </h2>
            <p className="mt-4 text-surface-400">
              Agências que já confiam na Cloud Architects para entregar
              excelência técnica aos seus clientes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} glow className="group">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-surface-300">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-surface-700/50 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-700 text-sm font-semibold text-surface-300">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-surface-100">
                        {item.name}
                      </p>
                      <p className="text-xs text-surface-500">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ────────────────────────────────── */}
      <Section muted id="tornar-parceiro">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="brand" className="mb-4">
              Junte-se a Nós
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Pronto para escalar a sua agência com cloud de alto nível?
            </h2>
            <p className="mt-4 text-lg text-surface-400">
              Agende uma conversa connosco e descubra como a nossa parceria
              white-label pode transformar a sua oferta de serviços.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Quero Ser Parceiro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/servicos">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Conhecer os Serviços
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ─── Data ──────────────────────────────── */

const proposta = [
  {
    icon: Layers,
    title: "White-Label Total",
    description:
      "Toda a entrega é feita com a sua marca. Desde a comunicação com o cliente até aos relatórios finais — a Cloud Architects é invisível para o seu cliente.",
  },
  {
    icon: Users,
    title: "Equipa de Engenharia Dedicada",
    description:
      "Aceda a um time de especialistas cloud, DevOps e IA sem custos fixos. Montamos a equipa certa para cada projeto, quando precisar.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Enterprise",
    description:
      "Arquiteturas resilientes, security-by-design e boas práticas Well-Architected Framework. O nível de qualidade que os seus clientes esperam.",
  },
  {
    icon: Zap,
    title: "Velocidade de Execução",
    description:
      "Pipelines automatizados, infraestrutura como código e processos maduros que entregam resultados em dias, não em meses.",
  },
  {
    icon: DollarSign,
    title: "Margens Atrativas",
    description:
      "Modelo de pricing transparente que permite à sua agência definir a margem que deseja. Sem surpresas, sem custos ocultos.",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico Contínuo",
    description:
      "Suporte 24/7 para incidentes, monitorização ativa e acompanhamento dedicado para garantir a satisfação dos seus clientes.",
  },
];

const modelo = [
  {
    tag: "Onboarding",
    title: "Conhecemos o seu projeto",
    description:
      "Fazemos uma imersão no contexto do seu cliente, levantamos requisitos técnicos e desenhamos a solução mais adequada — tudo sob a sua marca.",
  },
  {
    tag: "Execução",
    title: "Entregamos a solução",
    description:
      "Arquitetamos, implementamos e documentamos tudo. O cliente recebe relatórios e comunicação com a cara da sua agência, não da Cloud Architects.",
  },
  {
    tag: "Operação",
    title: "Gerimos o dia-a-dia",
    description:
      "Monitorização proativa, gestão de incidentes, atualizações de segurança e otimização contínua de custos. Você foca no negócio, nós na infraestrutura.",
  },
  {
    tag: "Escala",
    title: "Crescemos juntos",
    description:
      "À medida que os seus clientes evoluem, expandimos a solução. Novos serviços, mais capacidade, maior complexidade — sempre white-label.",
  },
];

const beneficios = [
  {
    icon: TrendingUp,
    title: "Aumente o Ticket Médio",
    description:
      "Adicione cloud, DevOps e IA ao seu portfólio sem investir em contratação ou formação. Diferencie-se da concorrência com serviços de alto valor.",
  },
  {
    icon: Clock,
    title: "Reduza o Time-to-Market",
    description:
      "Com processos e templates prontos, entregamos projetos complexos em tempo recorde. A sua agência ganha agilidade competitiva.",
  },
  {
    icon: Building2,
    title: "Sem Custos Fixos",
    description:
      "Não precisa de manter uma equipa de engenharia interna. Paga apenas pelos projetos que executamos juntos — escala sob demanda.",
  },
  {
    icon: Layers,
    title: "Foco no Core Business",
    description:
      "Deixe a parte técnica connosco e concentre-se no que faz de melhor: vender, atender clientes e fazer o negócio crescer.",
  },
  {
    icon: Handshake,
    title: "Parceiro, Não Fornecedor",
    description:
      "Somos uma extensão da sua equipa. Alinhamento estratégico, reuniões periódicas e um canal direto com a nossa liderança técnica.",
  },
  {
    icon: Star,
    title: "Diferencial Competitivo",
    description:
      "Ofereça soluções que poucas agências conseguem entregar. Seja reconhecido como parceiro de tecnologia de ponta no mercado.",
  },
];

const testimonials = [
  {
    initials: "AR",
    name: "Ana Rodrigues",
    role: "CEO, Agência Pixel Digital",
    text: "A parceria com a Cloud Architects permitiu-nos fechar contratos que antes estavam fora do nosso alcance. A entrega white-label é impecável — os nossos clientes nem imaginam que não fomos nós que fizemos a parte técnica.",
  },
  {
    initials: "PM",
    name: "Paulo Martins",
    role: "CTO, Webhouse Solutions",
    text: "Já trabalhei com várias consultoras, mas nenhuma tem a fluidez de comunicação e a qualidade técnica da Cloud Architects. É como ter um CTO e uma equipa de engenharia internos, sem o custo fixo.",
  },
  {
    initials: "CS",
    name: "Carla Santos",
    role: "Directora de Operações, NovaMédia",
    text: "O modelo de parceria é extremamente transparente. Desde o primeiro projeto, sentimos que éramos uma prioridade. A nossa taxa de retenção de clientes subiu 40% desde que começámos a colaborar.",
  },
];
