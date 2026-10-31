"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Cloud, GitBranch, Bot, Headphones } from "lucide-react";

/* ─── Logos (svgl) para o marquee ─────────────── */
const LOGOS = [
  { src: "https://svgl.app/library/azure.svg", alt: "Microsoft Azure", grad: ["#0078D4", "#2CA5E0"] },
  { src: "https://svgl.app/library/google-cloud.svg", alt: "Google Cloud", grad: ["#4285F4", "#34A853"] },
  { src: "https://svgl.app/library/kubernetes.svg", alt: "Kubernetes", grad: ["#326CE5", "#4B7EE8"] },
  { src: "https://svgl.app/library/docker.svg", alt: "Docker", grad: ["#2496ED", "#1D63ED"] },
  { src: "https://svgl.app/library/terraform.svg", alt: "Terraform", grad: ["#7B42BC", "#9B5DE5"] },
  { src: "https://svgl.app/library/grafana.svg", alt: "Grafana", grad: ["#F46800", "#FF9830"] },
  { src: "https://svgl.app/library/cloudflare.svg", alt: "Cloudflare", grad: ["#F38020", "#FBAD41"] },
  { src: "https://svgl.app/library/nginx.svg", alt: "NGINX", grad: ["#009639", "#4CAF50"] },
];

function Marquee() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="ca-marquee mt-10 w-full overflow-hidden">
      <div className="ca-marquee-track gap-5">
        {items.map((logo, i) => (
          <div
            key={i}
            className="group relative flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200/60 bg-white shadow-sm transition-all hover:border-slate-300"
          >
            <div
              className="absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
              style={{ background: `linear-gradient(135deg, ${logo.grad[0]}, ${logo.grad[1]})` }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="relative h-8 w-auto max-w-[84px] object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  { icon: Cloud, title: "Cloud & Infraestrutura", desc: "Multi-cloud (AWS, Azure, GCP, OCI) desenhada para custo, segurança e resiliência.", grad: ["#4C82FB", "#3B6FE0"], href: "/servicos/cloud-infra" },
  { icon: GitBranch, title: "DevOps & Automação", desc: "CI/CD, IaC, GitOps e Kubernetes — do commit à produção sem fricção.", grad: ["#22D3EE", "#0EA5B7"], href: "/servicos/devops-automacao" },
  { icon: Bot, title: "Agentes de IA", desc: "Agentes generativos com LLMs locais e cloud que operam, não só conversam.", grad: ["#A855F7", "#7C3AED"], href: "/servicos/agentes-ia" },
  { icon: Headphones, title: "Consultoria Técnica", desc: "Auditoria, roadmap e formação — a autonomia fica dentro de casa.", grad: ["#F59E0B", "#EA8C04"], href: "/servicos/consultoria" },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* aurora clara de fundo */}
      <div className="ca-lightorb" style={{ width: 620, height: 620, top: -220, left: -160, background: "radial-gradient(circle, rgba(76,130,251,.16), transparent 70%)" }} />
      <div className="ca-lightorb" style={{ width: 520, height: 520, top: 120, right: -180, background: "radial-gradient(circle, rgba(53,224,208,.15), transparent 70%)" }} />

      {/* topo — wordmark discreto */}
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0a152d] text-[13px] text-white">✦</span>
          <span className="ca-font-display text-[15px] font-semibold tracking-tight text-[#0a1b33]">Cloud Architects</span>
        </Link>
        <Link href="/area-cliente" className="rounded-full px-4 py-2 text-[13px] font-semibold text-slate-500 transition-colors hover:text-[#0a1b33]">
          Área Cliente
        </Link>
      </header>

      {/* ── HERO ── */}
      <section className="px-4 md:px-6">
        <div className="relative mx-auto flex h-[600px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[48px] border border-slate-200/50 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]">
          {/* vídeo de fundo */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <video autoPlay loop muted playsInline className="h-full w-full scale-105 object-cover transition-transform duration-1000">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4" type="video/mp4" />
            </video>
            {/* scrim suave só à esquerda p/ legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/45 to-transparent" />
          </div>

          {/* conteúdo */}
          <div className="relative z-20 flex flex-1 flex-col items-start px-8 pt-12 md:px-16 md:pt-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
              <span className="ca-font-sans inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[12px] font-semibold text-slate-500 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Cloud · DevOps · Agentes de IA
              </span>
              <h1 className="ca-font-display mt-5 text-[42px] font-medium leading-[1.04] tracking-tight text-[#0a1b33] md:text-[56px]">
                A fundação da<br />nova era digital
              </h1>
              <p className="ca-font-sans mt-5 max-w-[46ch] text-[14px] leading-relaxed text-[#64748b] md:text-[15px]">
                Desenhamos plataformas multi-cloud, automatizamos operações e construímos agentes de IA — a base sobre a qual empresas, equipas e produtos crescem.
              </p>
              <motion.div className="ca-floaty mt-8" style={{ perspective: 800 }}>
                <motion.a
                  href="/contacto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="ca-btn3d ca-font-sans inline-flex items-center gap-2 rounded-full bg-[#0a152d] px-6 py-3 text-[14px] font-semibold text-white"
                >
                  Falar connosco <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* navbar flutuante */}
          <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="flex items-center gap-1 rounded-full border border-slate-200/40 bg-white/90 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] backdrop-blur-2xl"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-100 bg-white text-[#0a1b33] shadow-sm">✦</span>
              {[
                { l: "Serviços", h: "/servicos" },
                { l: "Soluções", h: "/solucoes" },
                { l: "Sobre", h: "/sobre" },
                { l: "Blog", h: "/blog" },
              ].map((n) => (
                <Link key={n.h} href={n.h} className="ca-font-sans hidden rounded-full px-3.5 py-2 text-[12px] font-semibold text-slate-500 transition-colors hover:text-[#0a1b33] sm:inline-block">
                  {n.l}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="ca-font-sans ml-1 inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-slate-200/60 bg-white px-5 py-2 text-[12px] font-semibold text-[#0a1b33] shadow-sm transition-all hover:border-slate-300"
              >
                Falar connosco <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.nav>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Serviços ── */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-4 py-24 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <p className="ca-font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">O que fazemos</p>
          <h2 className="ca-font-display mt-3 max-w-[18ch] text-[32px] font-medium leading-[1.08] tracking-tight text-[#0a1b33] md:text-[44px]">
            Quatro frentes, uma só engenharia.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-200/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${s.grad[0]}, ${s.grad[1]})`, boxShadow: `0 10px 24px -8px ${s.grad[0]}66` }}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="ca-font-display mt-5 text-[18px] font-semibold text-[#0a1b33]">{s.title}</h3>
                <p className="ca-font-sans mt-2 flex-1 text-[14px] leading-relaxed text-slate-500">{s.desc}</p>
                <span className="ca-font-sans mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0a1b33]">
                  explorar <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-[1400px] px-4 pb-24 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0a152d] via-[#0e1f42] to-[#16305c] px-8 py-16 text-center md:py-20"
        >
          <div className="ca-lightorb" style={{ width: 420, height: 420, top: -160, left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(53,224,208,.35), transparent 70%)" }} />
          <h2 className="ca-font-display relative mx-auto max-w-[22ch] text-[30px] font-medium leading-[1.1] tracking-tight text-white md:text-[44px]">
            Pronto para construir a próxima era da sua infraestrutura?
          </h2>
          <p className="ca-font-sans relative mx-auto mt-4 max-w-[46ch] text-[15px] text-slate-300">
            Diagnóstico inicial gratuito. Falamos com a sua equipa técnica, não com um formulário.
          </p>
          <motion.div className="relative mt-8" style={{ perspective: 800 }}>
            <motion.a href="/contacto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="ca-btn3d ca-font-sans inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0a152d]">
              Agendar diagnóstico <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200/70">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-[1.7fr_1fr_1fr_1fr] md:px-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0a152d] text-[13px] text-white">✦</span>
              <span className="ca-font-display text-[15px] font-semibold tracking-tight text-[#0a1b33]">Cloud Architects</span>
            </div>
            <p className="ca-font-sans mt-4 max-w-[34ch] text-[14px] leading-relaxed text-slate-500">
              Empresa portuguesa especializada em cloud computing, DevOps, automação e agentes de inteligência artificial.
            </p>
          </div>
          {[
            { t: "Serviços", links: [["Cloud & Infraestrutura", "/servicos/cloud-infra"], ["DevOps & Automação", "/servicos/devops-automacao"], ["Agentes de IA", "/servicos/agentes-ia"], ["Consultoria", "/servicos/consultoria"]] },
            { t: "Empresa", links: [["Sobre nós", "/sobre"], ["Soluções", "/solucoes"], ["Blog", "/blog"], ["FAQ", "/faq"]] },
            { t: "Contacto", links: [["Fale connosco", "/contacto"], ["Área cliente", "/area-cliente"], ["Privacidade", "/privacidade"], ["Termos", "/termos"]] },
          ].map((col) => (
            <div key={col.t}>
              <h5 className="ca-font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{col.t}</h5>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([l, h]) => (
                  <li key={h}>
                    <Link href={h} className="ca-font-sans text-[14px] text-slate-500 transition-colors hover:text-[#0a1b33]">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200/70">
          <div className="ca-font-sans mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-[12px] text-slate-400 md:px-10">
            <span>© 2026 Cloud Architects · Lisboa, Portugal</span>
            <span>Feito com engenharia, não com templates.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
