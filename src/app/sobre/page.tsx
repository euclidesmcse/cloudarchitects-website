import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  Users,
  Award,
  ArrowRight,
  Lightbulb,
  Handshake,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Sobre() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <Section className="relative flex min-h-[60vh] items-center overflow-hidden pt-0">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/30 via-surface-950 to-surface-950" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-accent-600/10 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-6 border-brand-600/30 text-brand-400"
            >
              Sobre Nós
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-50 sm:text-5xl lg:text-6xl">
              Tecnologia que{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                transforma negócios
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface-400">
              Somos uma equipa de arquitectos cloud, engenheiros DevOps e
              especialistas em IA que acreditam no poder da tecnologia para
              impulsionar resultados reais.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Fale Connosco
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/servicos">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver Serviços
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── História & Missão ────────────────── */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Story */}
            <div>
              <Badge className="mb-4">A Nossa História</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              De uma visão à excelência em cloud
              </h2>
              <div className="mt-6 space-y-4 text-surface-400 leading-relaxed">
                <p>
                  A Cloud Architects nasceu da convicção de que a infraestrutura
                  tecnológica não deve ser um obstáculo — deve ser um motor de
                  crescimento. Fundada por engenheiros com experiência em
                  algumas das maiores plataformas cloud do mundo, a nossa
                  empresa surgiu para preencher a lacuna entre a tecnologia de
                  ponta e as necessidades reais das empresas.
                </p>
                <p>
                  Desde o primeiro dia, o nosso foco tem sido claro: desenhar,
                  implementar e operar infraestruturas cloud que sejam seguras,
                  escaláveis e eficientes. Combinamos décadas de experiência em
                  arquitectura multi-cloud, DevOps e inteligência artificial
                  para entregar soluções que fazem a diferença.
                </p>
                <p>
                  Hoje, servimos empresas de diversos sectores, desde startups
                  em crescimento a organizações enterprise, ajudando-as a
                  navegar a transformação digital com confiança e excelência
                  técnica.
                </p>
              </div>
            </div>

            {/* Right: Mission & Vision cards */}
            <div className="space-y-6">
              <Card glow className="border-brand-600/20">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-600/20 text-brand-400 ring-1 ring-brand-600/20">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-50">
                    Missão
                  </h3>
                  <p className="mt-3 leading-relaxed text-surface-400">
                    Democratizar o acesso à excelência em infraestrutura cloud,
                    disponibilizando arquitecturas robustas, automação
                    inteligente e agentes de IA que permitem às empresas focar
                    no que realmente importa: o seu negócio.
                  </p>
                </CardContent>
              </Card>

              <Card glow className="border-accent-600/20">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600/20 to-purple-600/20 text-accent-400 ring-1 ring-accent-600/20">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-50">
                    Visão
                  </h3>
                  <p className="mt-3 leading-relaxed text-surface-400">
                    Ser referência ibérica em arquitectura cloud e automação
                    inteligente, reconhecida pela qualidade técnica, inovação
                    constante e impacto real nos resultados dos nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Valores ──────────────────────────── */}
      <Section muted>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4">Os Nossos Valores</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              O que nos define
            </h2>
            <p className="mt-4 text-surface-400">
              Princípios que guiam cada decisão, cada linha de código e cada
              arquitectura que desenhamos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <Card key={valor.titulo} hover className="group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-600/20 text-brand-400 ring-1 ring-brand-600/20">
                    <valor.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-50">
                    {valor.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-400">
                    {valor.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Equipa ───────────────────────────── */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4">Equipa</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Conheça quem faz acontecer
            </h2>
            <p className="mt-4 text-surface-400">
              Profissionais apaixonados por tecnologia, unidos por um objectivo
              comum: transformar desafios complexos em soluções elegantes.
            </p>
          </div>

          <div className="mt-12">
            <Card className="border-dashed border-surface-600/50 bg-surface-850/50 py-16 text-center">
              <CardContent>
                <Users className="mx-auto h-16 w-16 text-surface-600" />
                <h3 className="mt-4 text-xl font-semibold text-surface-400">
                  Em breve
                </h3>
                <p className="mt-2 max-w-md mx-auto text-sm text-surface-500">
                  Estamos a preparar as apresentações da nossa equipa. Fique
                  atento — em breve poderá conhecer cada um dos nossos
                  especialistas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-surface-500">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-500" />
              +50 projectos entregues
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-500" />
              Clientes em 3 continentes
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-500" />
              99.9% SLA médio
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-500" />
              Certificações AWS, Azure & GCP
            </span>
          </div>
        </Container>
      </Section>

      {/* ── CTA ────────────────────────────────── */}
      <Section muted>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
              Vamos construir algo extraordinário?
            </h2>
            <p className="mt-4 text-lg text-surface-400">
              Agende uma conversa sem compromisso e descubra como a Cloud
              Architects pode acelerar a transformação digital da sua empresa.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Iniciar Conversa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solucoes">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Conhecer Soluções
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ─── Valores Data ───────────────────────── */

const valores = [
  {
    icon: Shield,
    titulo: "Excelência Técnica",
    descricao:
      "Cada arquitectura é desenhada com os mais altos padrões de qualidade, segurança e performance. Não comprometemos a excelência.",
  },
  {
    icon: Heart,
    titulo: "Paixão pela Inovação",
    descricao:
      "Exploramos constantemente novas tecnologias e abordagens para oferecer soluções que estão na vanguarda do mercado cloud.",
  },
  {
    icon: Handshake,
    titulo: "Parceria Transparente",
    descricao:
      "Acreditamos numa relação aberta e honesta com os nossos clientes. Comunicamos com clareza e alinhamento constante.",
  },
  {
    icon: Zap,
    titulo: "Agilidade e Eficiência",
    descricao:
      "Entregamos resultados com rapidez sem sacrificar a qualidade. Processos optimizados e equipas focadas em valor real.",
  },
  {
    icon: Lightbulb,
    titulo: "Pensamento Crítico",
    descricao:
      "Desafiamos o status quo. Questionamos premissas e desenhamos soluções que realmente resolvem problemas, não apenas os disfarçam.",
  },
  {
    icon: Rocket,
    titulo: "Impacto no Negócio",
    descricao:
      "Cada projecto é medido pelo impacto real nos objectivos de negócio dos nossos clientes. Tecnologia que gera resultados tangíveis.",
  },
];
