"use client";

import { useState } from "react";
import {
  LogIn,
  Shield,
  Download,
  BarChart3,
  Headphones,
  Users,
  Star,
  FileText,
  Lock,
  CheckCircle,
  ChevronRight,
  Mail,
  ArrowRight,
  Quote,
  Cloud,
  Activity,
  Settings,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const beneficios = [
  {
    titulo: "Monitoramento 24/7",
    descricao:
      "Acompanhamento contínuo da sua infraestrutura em nuvem com alertas em tempo real e suporte dedicado.",
    icone: Activity,
  },
  {
    titulo: "Relatórios Detalhados",
    descricao:
      "Dashboards personalizados com métricas de desempenho, custos e segurança da sua operação.",
    icone: BarChart3,
  },
  {
    titulo: "Suporte Prioritário",
    descricao:
      "Atendimento via chat, telefone e e-mail com SLA garantido para chamados críticos.",
    icone: Headphones,
  },
  {
    titulo: "Gestão de Custos",
    descricao:
      "Ferramentas para otimizar gastos com nuvem, com recomendações automáticas de economia.",
    icone: Cloud,
  },
  {
    titulo: "Segurança Avançada",
    descricao:
      "Proteção com criptografia de ponta a ponta, backups automatizados e conformidade LGPD.",
    icone: Shield,
  },
  {
    titulo: "Deploy Contínuo",
    descricao:
      "Pipelines CI/CD integrados para deploy automatizado com rollback seguro e testes de carga.",
    icone: Settings,
  },
];

const funcionalidades = [
  {
    titulo: "Painel de Controle",
    descricao:
      "Visualize o status de todos os seus serviços em um único lugar, com gráficos interativos e filtros inteligentes.",
    icone: Activity,
  },
  {
    titulo: "Gerenciamento de Arquivos",
    descricao:
      "Faça upload, download e gestão de arquivos diretamente pelo portal com criptografia integrada.",
    icone: FileText,
  },
  {
    titulo: "Histórico de Atividades",
    descricao:
      "Registro completo de todas as ações realizadas na plataforma com trilha de auditoria.",
    icone: Users,
  },
  {
    titulo: "Faturas e Pagamentos",
    descricao:
      "Acesse suas faturas, histórico de pagamentos e renove seus planos com poucos cliques.",
    icone: Download,
  },
];

const depoimentos = [
  {
    nome: "Carlos Mendes",
    cargo: "CTO, TechSolve Ltda.",
    texto:
      "A Cloud Architects transformou nossa infraestrutura de TI. O portal do cliente é intuitivo e o suporte é excepcional. Reduzimos nossos custos em 40%.",
    estrelas: 5,
  },
  {
    nome: "Ana Oliveira",
    cargo: "Diretora de TI, InovaCorp",
    texto:
      "Desde que migramos para a Cloud Architects, nosso tempo de atividade passou para 99.99%. O monitoramento 24/7 nos dá tranquilidade total para focar no negócio.",
    estrelas: 5,
  },
  {
    nome: "Roberto Almeida",
    cargo: "Head de Infraestrutura, DataFlow",
    texto:
      "Os relatórios detalhados e as recomendações de otimização nos ajudaram a economizar mais de R$ 50 mil por ano. Recomendo fortemente.",
    estrelas: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );
}

export default function AreaClientePage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <main>
      {/* ── HERO / LOGIN ── */}
      <Section glow>
        <Container size="lg" className="pt-8 pb-12 md:pt-16 md:pb-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Texto */}
            <div className="space-y-6">
              <Badge variant="brand" className="w-fit">
                Área do Cliente
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Acesse sua{" "}
                <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                  conta
                </span>
              </h1>
              <p className="max-w-lg text-lg text-surface-400">
                Gerencie seus serviços, acompanhe métricas, emita faturas e
                abra chamados de suporte em um só lugar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" icon={<LogIn className="h-5 w-5" />}>
                  Acessar Portal
                </Button>
                <Button variant="outline" size="lg" icon={<Mail className="h-5 w-5" />}>
                  Novo Cadastro
                </Button>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-surface-500">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Suporte 24h
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-success" />
                  SLA 99.99%
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Sem taxa oculta
                </li>
              </ul>
            </div>

            {/* Formulário de Login */}
            <Card hover glow className="w-full max-w-md mx-auto">
              <CardContent className="space-y-5">
                <h2 className="text-xl font-semibold text-white">
                  Entrar na sua conta
                </h2>
                <p className="text-sm text-surface-400">
                  Informe seus dados para acessar o painel do cliente.
                </p>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-surface-300"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-surface-700 bg-surface-800/50 px-4 py-2.5 text-sm text-white placeholder-surface-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="senha"
                      className="block text-sm font-medium text-surface-300"
                    >
                      Senha
                    </label>
                    <button
                      type="button"
                      className="text-xs text-brand-400 hover:text-brand-300 transition-colors"
                    >
                      Esqueceu a senha?
                    </button>
                  </div>
                  <input
                    id="senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-surface-700 bg-surface-800/50 px-4 py-2.5 text-sm text-white placeholder-surface-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  iconRight={<ArrowRight className="h-5 w-5" />}
                >
                  Entrar
                </Button>

                <p className="text-center text-xs text-surface-500">
                  Ao entrar, você concorda com nossos{" "}
                  <a href="#" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
                    Termos de Uso
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ── BENEFÍCIOS ── */}
      <Section id="beneficios">
        <Container size="lg" className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge variant="accent" className="mb-4">
              Vantagens Exclusivas
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Por que ser cliente{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                Cloud Architects
              </span>
            </h2>
            <p className="text-surface-400">
              Oferecemos tudo o que você precisa para gerenciar sua
              infraestrutura em nuvem com segurança, agilidade e transparência.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((beneficio) => {
              const Icon = beneficio.icone;
              return (
                <Card key={beneficio.titulo} hover className="group">
                  <CardContent>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-600/20 ring-1 ring-brand-500/20 transition-colors group-hover:ring-brand-400/40">
                      <Icon className="h-6 w-6 text-brand-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed text-surface-400">
                      {beneficio.descricao}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── FUNCIONALIDADES DO PORTAL ── */}
      <Section muted id="funcionalidades">
        <Container size="lg" className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge variant="purple" className="mb-4">
              Funcionalidades
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Tudo na palma da sua mão
            </h2>
            <p className="text-surface-400">
              Nosso portal foi pensado para oferecer uma experiência completa
              aos nossos clientes, com ferramentas poderosas e interface amigável.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {funcionalidades.map((func) => {
              const Icon = func.icone;
              return (
                <Card key={func.titulo} hover className="group">
                  <CardContent className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-brand-600/20 ring-1 ring-purple-500/20 transition-colors group-hover:ring-purple-400/40">
                      <Icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-lg font-semibold text-white">
                        {func.titulo}
                      </h3>
                      <p className="text-sm leading-relaxed text-surface-400">
                        {func.descricao}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" iconRight={<ChevronRight className="h-5 w-5" />}>
              Ver Todas as Funcionalidades
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── DEPOIMENTOS ── */}
      <Section id="depoimentos">
        <Container size="lg" className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge variant="success" className="mb-4">
              Depoimentos
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              O que nossos{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                clientes
              </span>{" "}
              dizem
            </h2>
            <p className="text-surface-400">
              A satisfação dos nossos clientes é o nosso maior orgulho. Veja o
              que eles têm a dizer sobre a Cloud Architects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {depoimentos.map((dep) => (
              <Card key={dep.nome} glow className="flex flex-col">
                <CardContent className="flex flex-1 flex-col">
                  <Quote className="mb-3 h-8 w-8 text-brand-500/40" />
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-surface-300 italic">
                    &ldquo;{dep.texto}&rdquo;
                  </p>
                  <div className="mt-auto border-t border-surface-700/50 pt-4">
                    <StarRating count={dep.estrelas} />
                    <p className="mt-2 font-semibold text-white">
                      {dep.nome}
                    </p>
                    <p className="text-xs text-surface-500">{dep.cargo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA FINAL ── */}
      <Section muted noBottom>
        <Container size="lg" className="py-16 md:py-20">
          <Card glow className="mx-auto max-w-3xl text-center">
            <CardContent>
              <Badge variant="brand" className="mb-4">
                Comece Agora
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Pronto para transformar sua infraestrutura?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-surface-400">
                Junte-se a centenas de empresas que confiam na Cloud Architects
                para gerenciar sua presença na nuvem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" icon={<LogIn className="h-5 w-5" />}>
                  Acessar Minha Conta
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Vendas
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
