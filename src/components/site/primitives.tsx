import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { ScrollFX } from "./scroll-fx";

/** Cores semânticas por domínio (gradientes dos ícones). */
export const HUE = {
  blue: "#4C82FB",
  cyan: "#22D3EE",
  violet: "#A855F7",
  amber: "#F59E0B",
  green: "#10B981",
} as const;

/** No tema claro não usamos grão — mantido como no-op para compatibilidade. */
export function Grain() {
  return null;
}

/** Rótulo (Inter, uppercase, tracking). */
export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`ca-font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400 ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

type Action = { href: string; label: string };

/** Hero das páginas internas — claro, com aurora suave. */
export function PageHero({
  eyebrow,
  title,
  lede,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  primary?: Action;
  secondary?: Action;
}) {
  return (
    <section className="relative overflow-hidden">
      <ScrollFX />
      <div className="ca-lightorb" style={{ width: 620, height: 620, top: -240, left: -160, background: "radial-gradient(circle, rgba(76,130,251,.14), transparent 70%)" }} />
      <div className="ca-lightorb" style={{ width: 520, height: 520, top: -120, right: -180, background: "radial-gradient(circle, rgba(53,224,208,.13), transparent 70%)" }} />
      <div className="relative z-[2] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="ca-rise max-w-[54ch]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="ca-font-display mt-4 text-balance text-[clamp(2.2rem,4.6vw,3.5rem)] font-medium leading-[1.07] tracking-tight text-[#0a1b33]">
            {title}
          </h1>
          {lede ? <p className="ca-font-sans mt-5 max-w-[48ch] text-[15px] leading-relaxed text-slate-500 md:text-[17px]">{lede}</p> : null}
          {primary || secondary ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary ? (
                <a href={primary.href} className="ca-btn3d ca-font-sans inline-flex items-center gap-2 rounded-full bg-[#0a152d] px-6 py-3 text-[14px] font-semibold text-white">
                  {primary.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
              {secondary ? (
                <Link href={secondary.href} className="ca-font-sans inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-[14px] font-semibold text-[#0a1b33] shadow-sm transition-all hover:border-slate-300">
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Cabeçalho de secção. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`ca-rise max-w-[60ch] ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow center={center}>{eyebrow}</Eyebrow> : null}
      <h2 className="ca-font-display mt-3 text-balance text-[clamp(1.8rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-tight text-[#0a1b33]">
        {title}
      </h2>
      {lede ? <p className="ca-font-sans mt-4 text-[16px] text-slate-500">{lede}</p> : null}
    </div>
  );
}

/** Card com cor por domínio (grelhas). */
export function FeatureCard({
  hue = HUE.blue,
  tag,
  title,
  children,
  span = false,
}: {
  hue?: string;
  tag?: string;
  title: string;
  children?: ReactNode;
  span?: boolean;
}) {
  return (
    <article
      className={`ca-rise group flex flex-col rounded-3xl border border-slate-200/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5 ${span ? "md:col-span-2" : ""}`}
    >
      {tag ? (
        <span className="ca-font-sans flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: hue }}>
          <i className="h-1.5 w-1.5 rounded-full" style={{ background: hue }} />
          {tag}
        </span>
      ) : null}
      <h3 className="ca-font-display mt-3.5 text-[18px] font-semibold text-[#0a1b33]">{title}</h3>
      {children ? <p className="ca-font-sans mt-2 text-[14px] leading-relaxed text-slate-500">{children}</p> : null}
    </article>
  );
}

/** Banda de CTA (ilha escura sobre fundo claro). */
export function CTASection({
  title,
  text,
  primary,
  secondary,
}: {
  title: ReactNode;
  text?: ReactNode;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <div className="ca-rise relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0a152d] via-[#0e1f42] to-[#16305c] px-8 py-16 text-center md:py-20">
        <div className="ca-lightorb" style={{ width: 420, height: 420, top: -160, left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(53,224,208,.3), transparent 70%)" }} />
        <h2 className="ca-font-display relative mx-auto max-w-[24ch] text-balance text-[clamp(1.7rem,3.4vw,2.6rem)] font-medium leading-[1.1] tracking-tight text-white">
          {title}
        </h2>
        {text ? <p className="ca-font-sans relative mx-auto mt-4 max-w-[48ch] text-[15px] text-slate-300">{text}</p> : null}
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href={primary.href} className="ca-btn3d ca-font-sans inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0a152d]">
            {primary.label} <ArrowUpRight className="h-4 w-4" />
          </a>
          {secondary ? (
            <a href={secondary.href} className="ca-font-sans inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10">
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
