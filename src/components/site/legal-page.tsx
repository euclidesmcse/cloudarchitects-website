import type { ReactNode } from "react";
import { Eyebrow } from "./primitives";

/** Layout para páginas de texto (legais, políticas) — tema claro. */
export function LegalPage({
  title,
  updated,
  children,
  footer,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="ca-lightorb" style={{ width: 460, height: 460, top: -180, left: -120, background: "radial-gradient(circle, rgba(76,130,251,.12), transparent 70%)" }} />
        <div className="relative z-[2] mx-auto max-w-3xl px-4 pb-6 pt-14 sm:px-6 sm:pt-16 lg:px-8">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="ca-font-display mt-4 text-[clamp(2rem,4vw,2.8rem)] font-medium tracking-tight text-[#0a1b33]">
            {title}
          </h1>
          {updated ? <p className="ca-font-sans mt-3 text-[13px] text-slate-400">{updated}</p> : null}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="ca-legal ca-font-sans">{children}</div>
        {footer ? <div className="mt-12 border-t border-slate-200/70 pt-8">{footer}</div> : null}
      </section>
    </>
  );
}
