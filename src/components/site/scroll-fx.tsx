"use client";

import { useEffect } from "react";

/**
 * Liga os efeitos de scroll da home sem tornar a página inteira client:
 *  - revela elementos .ca-rise ao entrarem no viewport
 *  - anima contadores [data-count] (respeita prefers-reduced-motion)
 */
export function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rise = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            rise.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    document.querySelectorAll<HTMLElement>(".ca-rise").forEach((el) => rise.observe(el));

    const countUp = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      const dec = target % 1 !== 0 ? 2 : 0;
      if (reduce) {
        el.textContent = target.toFixed(dec) + suffix;
        return;
      }
      const dur = 1400;
      let t0: number | null = null;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(dec) + suffix;
      };
      requestAnimationFrame(step);
    };

    const counters = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target as HTMLElement);
            counters.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => counters.observe(el));

    return () => {
      rise.disconnect();
      counters.disconnect();
    };
  }, []);

  return null;
}
