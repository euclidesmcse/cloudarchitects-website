"use client";

import { useState } from "react";
import { LogIn, Shield, Download, BarChart3, Headphones, Users, FileText, CheckCircle, Mail, ArrowRight, Cloud, Activity, Settings, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Eyebrow, HUE } from "@/components/site/primitives";
import { ScrollFX } from "@/components/site/scroll-fx";

const beneficios = [
  { titulo: "Monitorização 24/7", descricao: "Acompanhamento contínuo da sua infraestrutura cloud com alertas em tempo real e suporte dedicado.", icone: Activity, hue: HUE.blue },
  { titulo: "Relatórios Detalhados", descricao: "Dashboards personalizados com métricas de desempenho, custos e segurança da sua operação.", icone: BarChart3, hue: HUE.cyan },
  { titulo: "Suporte Prioritário", descricao: "Atendimento via chat, telefone e e-mail com SLA garantido para chamados críticos.", icone: Headphones, hue: HUE.violet },
  { titulo: "Gestão de Custos", descricao: "Ferramentas para otimizar gastos com cloud, com recomendações automáticas de economia.", icone: Cloud, hue: HUE.amber },
  { titulo: "Segurança Avançada", descricao: "Proteção com criptografia ponta a ponta, backups automatizados e conformidade RGPD.", icone: Shield, hue: HUE.green },
  { titulo: "Deploy Contínuo", descricao: "Pipelines CI/CD integrados para deploy automatizado com rollback seguro e testes de carga.", icone: Settings, hue: HUE.blue },
];

const funcionalidades = [
  { titulo: "Painel de Controlo", descricao: "Veja o estado de todos os seus serviços num só lugar, com gráficos interativos e filtros inteligentes.", icone: Activity },
  { titulo: "Gestão de Ficheiros", descricao: "Upload, download e gestão de ficheiros diretamente pelo portal, com criptografia integrada.", icone: FileText },
  { titulo: "Histórico de Atividades", descricao: "Registo completo de todas as ações realizadas na plataforma, com trilha de auditoria.", icone: Users },
  { titulo: "Faturas e Pagamentos", descricao: "Aceda às suas faturas, histórico de pagamentos e renove os seus planos com poucos cliques.", icone: Download },
];

export default function AreaClientePage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const inputCls =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-[#4C82FB]/60 focus:ring-2 focus:ring-[#4C82FB]/20";
  const labelCls = "block ca-font-sans text-[12px] font-semibold uppercase tracking-wider text-slate-400";

  return (
    <>
      <ScrollFX />
      {/* Hero + login */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="ca-lightorb" style={{ width: 600, height: 600, top: -200, left: -150, background: "radial-gradient(circle, rgba(76,130,251,.12), transparent 70%)" }} />
        <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="ca-rise">
            <Eyebrow>Área do Cliente</Eyebrow>
            <h1 className="ca-font-display mt-6 text-[clamp(2.3rem,4.6vw,3.6rem)] font-medium leading-[1.07] tracking-tight text-[#0a1b33]">
              Aceda à sua <span className="gradient-text">conta.</span>
            </h1>
            <p className="ca-font-sans mt-6 max-w-lg text-lg text-slate-600">
              Faça a gestão dos seus serviços, acompanhe métricas, emita faturas e abra chamados de suporte num só lugar.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 ca-font-sans text-[12px] text-slate-500">
              {["Suporte 24/7", "SLA alvo de 99,9%", "Sem taxas ocultas"].map((c) => (
                <li key={c} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="ca-rise rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] sm:p-8">
            <h2 className="ca-font-display text-xl font-semibold text-[#0a1b33]">Entrar na sua conta</h2>
            <p className="ca-font-sans mt-1 text-sm text-slate-500">Informe os seus dados para aceder ao painel.</p>
            <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label htmlFor="email" className={labelCls}>E-mail</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className={inputCls} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="senha" className={labelCls}>Senha</label>
                  <button type="button" className="ca-font-sans text-xs font-semibold text-[#4C82FB] transition-colors hover:text-[#0a1b33]">Esqueceu a senha?</button>
                </div>
                <input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="••••••••" className={inputCls} />
              </div>
              <button type="submit" className="ca-btn3d ca-font-sans inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a152d] px-5 py-3 text-sm font-semibold text-white">
                Entrar <ArrowRight className="h-4 w-4" />
              </button>
              <p className="ca-font-sans text-center text-xs text-slate-400">
                Ao entrar, concorda com os nossos{" "}
                <Link href="/termos" className="text-[#4C82FB] underline underline-offset-2 hover:text-[#0a1b33]">Termos de Uso</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="ca-rise mx-auto max-w-[60ch] text-center">
          <Eyebrow center>Vantagens</Eyebrow>
          <h2 className="ca-font-display mt-4 text-balance text-[clamp(1.8rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-tight text-[#0a1b33]">Porquê ser cliente Cloud Architects</h2>
          <p className="ca-font-sans mt-4 text-slate-600">Tudo o que precisa para gerir a sua infraestrutura cloud com segurança, agilidade e transparência.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <article
              key={b.titulo}
              className="ca-rise rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${b.hue}, ${b.hue}cc)`, boxShadow: `0 10px 24px -8px ${b.hue}66` }}>
                <b.icone className="h-5 w-5" />
              </div>
              <h3 className="ca-font-display mt-4 text-lg font-semibold text-[#0a1b33]">{b.titulo}</h3>
              <p className="ca-font-sans mt-2 text-sm leading-relaxed text-slate-500">{b.descricao}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Funcionalidades */}
      <div className="border-y border-slate-200/60 bg-[radial-gradient(120%_100%_at_50%_0,rgba(76,130,251,0.05),transparent_60%)]">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="ca-rise mx-auto max-w-[60ch] text-center">
            <Eyebrow center>Funcionalidades</Eyebrow>
            <h2 className="ca-font-display mt-4 text-balance text-[clamp(1.8rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-tight text-[#0a1b33]">Tudo na palma da mão</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {funcionalidades.map((f) => (
              <article
                key={f.titulo}
                className="ca-rise flex items-start gap-5 rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${HUE.violet}, ${HUE.violet}cc)`, boxShadow: `0 10px 24px -8px ${HUE.violet}66` }}>
                  <f.icone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="ca-font-display text-lg font-semibold text-[#0a1b33]">{f.titulo}</h3>
                  <p className="ca-font-sans mt-1.5 text-sm leading-relaxed text-slate-500">{f.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Histórias de clientes — em breve (honesto) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="ca-rise mx-auto max-w-[60ch] text-center">
          <Eyebrow center>Histórias de clientes</Eyebrow>
          <h2 className="ca-font-display mt-4 text-balance text-[clamp(1.8rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-tight text-[#0a1b33]">Casos reais, em breve</h2>
        </div>
        <div className="ca-rise mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-slate-300 bg-white/60 py-14 text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-slate-400" />
          <p className="ca-font-sans mx-auto mt-4 max-w-md text-sm text-slate-500">Estamos a reunir depoimentos e casos de estudo reais dos nossos clientes. Em breve partilhamos resultados mensuráveis — sem números inventados.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <div className="ca-rise relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0a152d] via-[#0e1f42] to-[#16305c] px-6 py-14 text-center sm:px-12">
          <div className="ca-lightorb" style={{ width: 420, height: 420, top: -160, left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(53,224,208,.3), transparent 70%)" }} />
          <h2 className="ca-font-display relative mx-auto max-w-[24ch] text-balance text-[clamp(1.7rem,3.4vw,2.6rem)] font-medium leading-[1.1] tracking-tight text-white">Pronto para transformar a sua infraestrutura?</h2>
          <p className="ca-font-sans relative mx-auto mt-4 max-w-xl text-slate-300">Junte-se às empresas que confiam na Cloud Architects para gerir a sua presença na cloud.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3.5">
            <button className="ca-btn3d ca-font-sans inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0a152d]">
              <LogIn className="h-4 w-4" /> Aceder à minha conta
            </button>
            <Link href="/contacto" className="ca-font-sans inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <Mail className="h-4 w-4" /> Falar com vendas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
