import type { Metadata } from "next";
import { Layers, Users, ShieldCheck, Zap, DollarSign, Headphones, TrendingUp, Clock, Building2, Handshake, Star, Sparkles, MessageSquare } from "lucide-react";
import { PageHero, SectionHeading, CTASection, HUE } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Para Agências — Parceiro White-Label — Cloud Architects",
  description: "Ofereça cloud, DevOps e IA sob a sua marca. Somos o departamento de engenharia white-label da sua agência.",
};

const PALETTE = [HUE.blue, HUE.cyan, HUE.violet, HUE.amber, HUE.green];

const proposta = [
  { icon: Layers, title: "White-Label Total", description: "Toda a entrega é feita com a sua marca. Da comunicação com o cliente aos relatórios finais — a Cloud Architects é invisível para o seu cliente." },
  { icon: Users, title: "Equipa de Engenharia Dedicada", description: "Aceda a um time de especialistas cloud, DevOps e IA sem custos fixos. Montamos a equipa certa para cada projeto, quando precisar." },
  { icon: ShieldCheck, title: "Qualidade Enterprise", description: "Arquiteturas resilientes, security-by-design e Well-Architected Framework. O nível de qualidade que os seus clientes esperam." },
  { icon: Zap, title: "Velocidade de Execução", description: "Pipelines automatizados, infraestrutura como código e processos maduros que entregam resultados em dias, não em meses." },
  { icon: DollarSign, title: "Margens Atrativas", description: "Modelo de pricing transparente que permite à sua agência definir a margem que deseja. Sem surpresas, sem custos ocultos." },
  { icon: Headphones, title: "Suporte Técnico Contínuo", description: "Suporte 24/7 para incidentes, monitorização ativa e acompanhamento dedicado para garantir a satisfação dos seus clientes." },
];

const modelo = [
  { tag: "Onboarding", title: "Conhecemos o seu projeto", description: "Imersão no contexto do seu cliente, levantamento de requisitos técnicos e desenho da solução mais adequada — tudo sob a sua marca." },
  { tag: "Execução", title: "Entregamos a solução", description: "Arquitetamos, implementamos e documentamos tudo. O cliente recebe relatórios e comunicação com a cara da sua agência." },
  { tag: "Operação", title: "Gerimos o dia-a-dia", description: "Monitorização proativa, gestão de incidentes, atualizações de segurança e otimização de custos. Você foca no negócio." },
  { tag: "Escala", title: "Crescemos juntos", description: "À medida que os seus clientes evoluem, expandimos a solução. Novos serviços, mais capacidade — sempre white-label." },
];

const beneficios = [
  { icon: TrendingUp, title: "Aumente o Ticket Médio", description: "Adicione cloud, DevOps e IA ao seu portfólio sem contratar ou formar. Diferencie-se com serviços de alto valor." },
  { icon: Clock, title: "Reduza o Time-to-Market", description: "Com processos e templates prontos, entregamos projetos complexos em tempo recorde. A sua agência ganha agilidade." },
  { icon: Building2, title: "Sem Custos Fixos", description: "Não precisa de manter engenharia interna. Paga apenas pelos projetos que executamos juntos — escala sob demanda." },
  { icon: Layers, title: "Foco no Core Business", description: "Deixe a parte técnica connosco e concentre-se no que faz de melhor: vender, atender clientes e crescer." },
  { icon: Handshake, title: "Parceiro, Não Fornecedor", description: "Somos uma extensão da sua equipa. Alinhamento estratégico, reuniões periódicas e canal direto com a liderança técnica." },
  { icon: Star, title: "Diferencial Competitivo", description: "Ofereça soluções que poucas agências conseguem entregar. Seja reconhecido como parceiro de tecnologia de ponta." },
];

export default function Agencias() {
  return (
    <>
      <PageHero
        eyebrow="Parceiro White-Label · Cloud & DevOps"
        title={
          <>
            Infraestrutura enterprise, <span className="gradient-text">sob a sua marca.</span>
          </>
        }
        lede="Oferecemos soluções cloud, DevOps e IA white-label. Você mantém o relacionamento com o cliente; nós entregamos a excelência técnica que o projeto exige."
        primary={{ href: "/contacto", label: "Tornar-me parceiro" }}
        secondary={{ href: "#modelo", label: "Ver modelo de parceria" }}
      />

      {/* Proposta de valor */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proposta de valor"
          title="Expanda a sua oferta sem contratar mais engenheiros"
          lede="A Cloud Architects atua como o seu departamento de engenharia white-label — os seus clientes veem apenas a sua marca."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proposta.map((p, i) => {
            const hue = PALETTE[i % PALETTE.length];
            return (
              <article
                key={p.title}
                className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{ background: `linear-gradient(135deg, ${hue}, ${hue}cc)`, boxShadow: `0 10px 24px -8px ${hue}66` }}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="ca-font-display mt-4 text-lg font-semibold text-[#0a1b33]">{p.title}</h3>
                <p className="ca-font-sans mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Modelo de parceria */}
      <div id="modelo" className="border-y border-slate-200/70 bg-white/60">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Modelo de parceria" title="Como funciona" lede="Um modelo desenhado para agências crescerem — simples, transparente e 100% white-label." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modelo.map((step, i) => (
              <div key={step.title} className="relative border-t border-slate-200 pt-6">
                <span className="absolute left-0 top-[-1px] h-0.5 w-9 bg-gradient-to-r from-[#4C82FB] to-[#22D3EE]" />
                <div className="ca-font-sans text-sm tracking-[0.1em] text-[#0284c7]">{String(i + 1).padStart(2, "0")} · {step.tag}</div>
                <h4 className="ca-font-display mt-3.5 text-lg font-semibold tracking-[-0.01em] text-[#0a1b33]">{step.title}</h4>
                <p className="ca-font-sans mt-2 text-sm text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-slate-200/60 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)]">
            <Sparkles className="mx-auto h-8 w-8 text-[#4C82FB]" />
            <p className="ca-font-display mt-4 text-lg font-medium text-[#0a1b33]">Sem taxas de setup. Sem compromissos de longo prazo.</p>
            <p className="ca-font-sans mt-1 text-sm text-slate-500">Pague apenas pelos serviços que utilizar — escala para cima e para baixo conforme a necessidade dos seus clientes.</p>
          </div>
        </section>
      </div>

      {/* Benefícios */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Benefícios" title="O que a sua agência ganha" lede="Mais do que um fornecedor — um parceiro estratégico para acelerar o crescimento do seu negócio." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => {
            const hue = PALETTE[(i + 1) % PALETTE.length];
            return (
              <article
                key={b.title}
                className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{ background: `linear-gradient(135deg, ${hue}, ${hue}cc)`, boxShadow: `0 10px 24px -8px ${hue}66` }}
                >
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="ca-font-display mt-4 text-lg font-semibold text-[#0a1b33]">{b.title}</h3>
                <p className="ca-font-sans mt-2 text-sm leading-relaxed text-slate-600">{b.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Testemunhos — em breve (honesto) */}
      <div className="border-t border-slate-200/70">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Testemunhos" title="O que os nossos parceiros dizem" />
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-slate-300 bg-white/60 py-14 text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-slate-400" />
            <p className="ca-font-sans mx-auto mt-4 max-w-md text-sm text-slate-500">Em breve partilhamos histórias reais de agências parceiras — com resultados mensuráveis e verificáveis, sem testemunhos inventados.</p>
          </div>
        </section>
      </div>

      <CTASection
        title="Pronto para escalar a sua agência com cloud de alto nível?"
        text="Agende uma conversa e descubra como a nossa parceria white-label pode transformar a sua oferta de serviços."
        primary={{ href: "/contacto", label: "Quero ser parceiro" }}
        secondary={{ href: "/servicos", label: "Conhecer os serviços" }}
      />
    </>
  );
}
