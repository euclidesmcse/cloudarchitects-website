import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { PageHero, SectionHeading, CTASection } from "./primitives";

export type Feature = { icon: LucideIcon; title: string; description: string };

export function ServicePage({
  eyebrow,
  title,
  highlight,
  lede,
  hue,
  capabilitiesHeading = "O que oferecemos",
  capabilitiesLede,
  features,
  benefitsHeading,
  benefits,
  ctaTitle,
  ctaText,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  lede: ReactNode;
  hue: string;
  capabilitiesHeading?: string;
  capabilitiesLede?: ReactNode;
  features: Feature[];
  benefitsHeading?: string;
  benefits?: string[];
  ctaTitle: ReactNode;
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
        primary={{ href: "/contacto", label: "Falar com engenharia" }}
        secondary={{ href: "/servicos", label: "Todos os serviços" }}
      />

      {/* Capacidades */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Capacidades" title={capabilitiesHeading} lede={capabilitiesLede} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="ca-rise group flex flex-col rounded-3xl border border-slate-200/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                style={{ background: `linear-gradient(135deg, ${hue}, ${hue}cc)`, boxShadow: `0 10px 24px -8px ${hue}66` }}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="ca-font-display mt-5 text-[18px] font-semibold text-[#0a1b33]">{f.title}</h3>
              <p className="ca-font-sans mt-2 text-[14px] leading-relaxed text-slate-500">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Incluído */}
      {benefits && benefits.length > 0 ? (
        <div className="border-y border-slate-200/70 bg-white/60">
          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Incluído" title={benefitsHeading ?? "Tudo incluído"} />
            <div className="ca-rise mt-10 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.2)]">
              <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="ca-font-sans flex items-start gap-2.5 text-[14px] text-slate-600">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: hue }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      ) : null}

      <CTASection
        title={ctaTitle}
        text={ctaText}
        primary={{ href: "/contacto", label: "Agendar diagnóstico" }}
        secondary={{ href: "/servicos", label: "Ver todos os serviços" }}
      />
    </>
  );
}
