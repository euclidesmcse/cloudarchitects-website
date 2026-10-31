import type { ReactNode } from "react";
import { PageHero, CTASection } from "./primitives";

export type Block = { title: string; description: string };

export function SolutionPage({
  eyebrow,
  title,
  highlight,
  lede,
  intro,
  hue,
  blocks,
  ctaTitle = "Pronto para implementar?",
  ctaText = "Agende uma conversa com os nossos especialistas e descubra como aplicar isto no seu contexto.",
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  lede: ReactNode;
  intro: ReactNode;
  hue: string;
  blocks: Block[];
  ctaTitle?: ReactNode;
  ctaText?: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={
          <>
            {title} <span className="gradient-text">{highlight}</span>
          </>
        }
        lede={lede}
        primary={{ href: "/contacto", label: "Falar com um arquiteto" }}
        secondary={{ href: "/solucoes", label: "Todas as soluções" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="ca-rise ca-font-sans max-w-[68ch] text-[17px] leading-relaxed text-slate-600">{intro}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="ca-rise rounded-3xl border border-slate-200/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: hue }} />
                <h3 className="ca-font-display text-[17px] font-semibold text-[#0a1b33]">{b.title}</h3>
              </div>
              <p className="ca-font-sans mt-3 text-[14px] leading-relaxed text-slate-500">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title={ctaTitle}
        text={ctaText}
        primary={{ href: "/contacto", label: "Falar com um arquiteto" }}
        secondary={{ href: "/solucoes", label: "Voltar às soluções" }}
      />
    </>
  );
}
