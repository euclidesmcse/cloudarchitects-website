import { Target, Eye, Shield, Heart, Zap, Users, Lightbulb, Handshake, Rocket, Check } from "lucide-react";
import { PageHero, SectionHeading, CTASection, HUE } from "@/components/site/primitives";

const valores = [
  { icon: Shield, titulo: "Excelência Técnica", descricao: "Cada arquitectura é desenhada com os mais altos padrões de qualidade, segurança e performance. Não comprometemos a excelência.", hue: HUE.blue },
  { icon: Heart, titulo: "Paixão pela Inovação", descricao: "Exploramos constantemente novas tecnologias e abordagens para oferecer soluções na vanguarda do mercado cloud.", hue: HUE.violet },
  { icon: Handshake, titulo: "Parceria Transparente", descricao: "Acreditamos numa relação aberta e honesta com os clientes. Comunicamos com clareza e alinhamento constante.", hue: HUE.cyan },
  { icon: Zap, titulo: "Agilidade e Eficiência", descricao: "Entregamos resultados com rapidez sem sacrificar a qualidade. Processos optimizados e equipas focadas em valor real.", hue: HUE.amber },
  { icon: Lightbulb, titulo: "Pensamento Crítico", descricao: "Desafiamos o status quo. Questionamos premissas e desenhamos soluções que resolvem problemas, não os disfarçam.", hue: HUE.green },
  { icon: Rocket, titulo: "Impacto no Negócio", descricao: "Cada projecto é medido pelo impacto real nos objectivos de negócio dos clientes. Tecnologia que gera resultados.", hue: HUE.blue },
];

const chips = [
  "Multi-cloud: AWS · Azure · GCP · OCI",
  "SLA alvo de 99,9%",
  "Cloud · DevOps · IA sob um só teto",
  "Certificações AWS, Azure & GCP",
];

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={
          <>
            Tecnologia que <span className="gradient-text">transforma negócios.</span>
          </>
        }
        lede="Somos uma equipa de arquitectos cloud, engenheiros DevOps e especialistas em IA que acreditam no poder da tecnologia para impulsionar resultados reais."
        primary={{ href: "/contacto", label: "Falar com engenharia" }}
        secondary={{ href: "/servicos", label: "Ver serviços" }}
      />

      {/* História + Missão/Visão */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="ca-rise">
            <SectionHeading eyebrow="A nossa história" title="De uma visão à excelência em cloud" />
            <div className="ca-font-sans mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>A Cloud Architects nasceu da convicção de que a infraestrutura tecnológica não deve ser um obstáculo — deve ser um motor de crescimento. Fundada por engenheiros com experiência em algumas das maiores plataformas cloud do mundo, surgiu para preencher a lacuna entre a tecnologia de ponta e as necessidades reais das empresas.</p>
              <p>Desde o primeiro dia, o foco é claro: desenhar, implementar e operar infraestruturas cloud seguras, escaláveis e eficientes. Combinamos experiência em arquitectura multi-cloud, DevOps e inteligência artificial para entregar soluções que fazem a diferença.</p>
              <p>Servimos empresas de diversos sectores, de startups em crescimento a organizações enterprise, ajudando-as a navegar a transformação digital com confiança e excelência técnica.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: Target, hue: HUE.blue, t: "Missão", d: "Democratizar o acesso à excelência em infraestrutura cloud, com arquitecturas robustas, automação inteligente e agentes de IA que permitem às empresas focar no que importa: o seu negócio." },
              { icon: Eye, hue: HUE.cyan, t: "Visão", d: "Ser referência ibérica em arquitectura cloud e automação inteligente, reconhecida pela qualidade técnica, inovação constante e impacto real nos resultados dos clientes." },
            ].map((c) => (
              <div
                key={c.t}
                className="ca-rise rounded-3xl border border-slate-200/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${c.hue}, ${c.hue}cc)`, boxShadow: `0 10px 24px -8px ${c.hue}66` }}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="ca-font-display mt-4 text-xl font-semibold text-[#0a1b33]">{c.t}</h3>
                <p className="ca-font-sans mt-2.5 leading-relaxed text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <div className="border-y border-slate-200/60 bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Os nossos valores" title="O que nos define" lede="Princípios que guiam cada decisão, cada linha de código e cada arquitectura que desenhamos." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <article
                key={v.titulo}
                className="ca-rise rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${v.hue}, ${v.hue}cc)`, boxShadow: `0 10px 24px -8px ${v.hue}66` }}
                >
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="ca-font-display mt-4 text-lg font-semibold text-[#0a1b33]">{v.titulo}</h3>
                <p className="ca-font-sans mt-2 text-sm leading-relaxed text-slate-600">{v.descricao}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Equipa */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Equipa" title="Quem faz acontecer" lede="Profissionais apaixonados por tecnologia, unidos por um objectivo: transformar desafios complexos em soluções elegantes." />
        <div className="ca-rise mt-10 rounded-3xl border border-dashed border-slate-300 bg-white/60 py-16 text-center">
          <Users className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="ca-font-display mt-4 text-xl font-semibold text-[#0a1b33]">Em breve</h3>
          <p className="ca-font-sans mx-auto mt-2 max-w-md text-sm text-slate-500">Estamos a preparar as apresentações da equipa. Em breve poderá conhecer cada um dos nossos especialistas.</p>
        </div>
        <div className="ca-rise mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {chips.map((c) => (
            <span key={c} className="ca-font-sans inline-flex items-center gap-2 font-mono text-[0.72rem] text-slate-500">
              <Check className="h-3.5 w-3.5" style={{ color: HUE.green }} />
              {c}
            </span>
          ))}
        </div>
      </section>

      <CTASection
        title="Vamos construir algo extraordinário?"
        text="Agende uma conversa sem compromisso e descubra como a Cloud Architects pode acelerar a transformação digital da sua empresa."
        primary={{ href: "/contacto", label: "Iniciar conversa" }}
        secondary={{ href: "/solucoes", label: "Conhecer soluções" }}
      />
    </>
  );
}
