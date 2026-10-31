"use client";

import { useEffect, useRef, useState } from "react";

const REGIONS = [
  { code: "eu-west-1", label: "lisboa · online", base: 12 },
  { code: "eu-central-1", label: "frankfurt · online", base: 24 },
  { code: "us-east-1", label: "virginia · online", base: 88 },
  { code: "sa-east-1", label: "são paulo · online", base: 132 },
];

const LINES: { t: string; c: string }[] = [
  { t: "$ ca deploy --env prod --region eu-west-1", c: "text-surface-300" },
  { t: "✓ build     42s · cache hit 91%", c: "text-[color:var(--color-success)]" },
  { t: "✓ tests     128 passed · 0 flaky", c: "text-[color:var(--color-success)]" },
  { t: "✓ image     ghcr.io/ca/edge:8f3c1a", c: "text-surface-500" },
  { t: "→ rollout   canary 10% → 50% → 100%", c: "text-accent-400" },
  { t: "✓ healthy   p99 <50ms · err 0.00%", c: "text-[color:var(--color-success)]" },
  { t: "agent> otimizar custo multi-cloud", c: "text-purple-400" },
  { t: "✓ 3 ações · poupança recorrente aplicada", c: "text-[color:var(--color-success)]" },
];

/** Painel de infraestrutura "ao vivo" (ilustrativo) do hero. */
export function HeroConsole() {
  const [ms, setMs] = useState<number[]>(REGIONS.map((r) => r.base));
  const termRef = useRef<HTMLDivElement>(null);

  // jitter de latência
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setMs(REGIONS.map((r) => r.base + Math.round(Math.random() * 8 - 4)));
    }, 2600);
    return () => clearInterval(id);
  }, []);

  // terminal a "escrever"
  useEffect(() => {
    const el = termRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.innerHTML = LINES.map((l) => `<div class="${l.c}">${l.t}</div>`).join("");
      return;
    }

    let li = 0;
    const timers: number[] = [];
    const wait = (fn: () => void, d: number) => timers.push(window.setTimeout(fn, d));

    const typeLine = () => {
      if (!termRef.current) return;
      if (li >= LINES.length) {
        wait(() => {
          if (termRef.current) termRef.current.innerHTML = "";
          li = 0;
          typeLine();
        }, 4200);
        return;
      }
      const line = LINES[li];
      const div = document.createElement("div");
      div.className = line.c;
      termRef.current.appendChild(div);
      while (termRef.current.children.length > 8) {
        termRef.current.removeChild(termRef.current.firstChild!);
      }
      let ci = 0;
      const ch = () => {
        if (!termRef.current) return;
        div.innerHTML =
          line.t.slice(0, ci) + (ci < line.t.length ? '<span class="ca-cur"></span>' : "");
        ci++;
        if (ci <= line.t.length) wait(ch, 14 + Math.random() * 22);
        else {
          li++;
          wait(typeLine, 360);
        }
      };
      ch();
    };

    const boot = window.setTimeout(typeLine, 600);
    timers.push(boot);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-surface-700/70 bg-gradient-to-b from-surface-850 to-surface-950 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />
      {/* barra */}
      <div className="flex items-center gap-2.5 border-b border-surface-800 bg-white/[0.015] px-4 py-3">
        <span className="font-mono text-xs text-surface-400">ca-control · overview</span>
        <span className="ml-auto flex gap-1.5">
          <i className="h-2 w-2 rounded-full bg-[color:var(--color-success)]" />
          <i className="h-2 w-2 rounded-full bg-[color:var(--color-success)]" />
          <i className="h-2 w-2 rounded-full bg-surface-700" />
        </span>
      </div>
      {/* regiões */}
      <div className="grid grid-cols-2 gap-px border-b border-surface-800 bg-surface-800">
        {REGIONS.map((r, i) => (
          <div key={r.code} className="bg-surface-900 px-4 py-3">
            <div className="flex items-center justify-between font-mono text-[0.74rem]">
              <span className="text-surface-200">{r.code}</span>
              <span className="tabular-nums text-accent-400">{ms[i]}ms</span>
            </div>
            <div className="mt-2.5 h-[3px] overflow-hidden rounded bg-white/[0.06]">
              <span
                className="block h-full rounded bg-gradient-to-r from-brand-500 to-accent-400 transition-[width] duration-700"
                style={{ width: `${Math.min(100, 25 + ms[i] / 2)}%` }}
              />
            </div>
            <div className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-surface-500">
              {r.label}
            </div>
          </div>
        ))}
      </div>
      {/* terminal */}
      <div
        ref={termRef}
        aria-hidden="true"
        className="min-h-[190px] whitespace-pre-wrap break-words px-4 py-3.5 font-mono text-[0.75rem] leading-[1.85] text-surface-400"
      />
    </div>
  );
}
