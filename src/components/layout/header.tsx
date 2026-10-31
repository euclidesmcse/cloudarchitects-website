"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { navLinks } from "@/lib/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" role="navigation" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} pathname={pathname} />
          ))}

          <span className="ml-3 hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-[12px] text-slate-500 lg:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            sistemas operacionais
          </span>

          <div className="ml-4 border-l border-slate-200 pl-4">
            <Link
              href="/contacto"
              className="ca-btn3d inline-flex h-9 items-center gap-2 rounded-full bg-[#0a152d] px-5 text-sm font-semibold text-white transition-all"
            >
              Fale Connosco
            </Link>
          </div>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#0a1b33] md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <nav
            className="absolute inset-x-0 bottom-0 top-0 overflow-y-auto border-t border-slate-200 bg-white px-4 pb-8 pt-4 shadow-2xl"
            role="navigation"
            aria-label="Navegação móvel"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <MobileNavLinkItem key={link.href} link={link} pathname={pathname} depth={0} />
              ))}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-6">
              <Link
                href="/contacto"
                className="flex w-full items-center justify-center rounded-full bg-[#0a152d] px-4 py-3 text-sm font-semibold text-white"
              >
                Fale Connosco
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinkItem({ link, pathname }: { link: (typeof navLinks)[number]; pathname: string }) {
  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

  if (link.children) {
    return (
      <div className="group relative">
        <button
          className={cn(
            "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
            isActive ? "text-[#0a1b33]" : "text-slate-500 hover:text-[#0a1b33]",
          )}
        >
          {link.label}
          <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute left-0 top-full pt-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="min-w-[220px] rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(10,27,51,0.25)]">
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block rounded-xl px-3 py-2 text-sm transition-colors",
                  pathname === child.href ? "bg-blue-50 text-[#0a1b33]" : "text-slate-500 hover:bg-slate-50 hover:text-[#0a1b33]",
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={cn(
        "rounded-full px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "text-[#0a1b33]" : "text-slate-500 hover:text-[#0a1b33]",
      )}
    >
      {link.label}
    </Link>
  );
}

function MobileNavLinkItem({
  link,
  pathname,
  depth,
}: {
  link: (typeof navLinks)[number];
  pathname: string;
  depth: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!link.children;
  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
            isActive ? "text-[#0a1b33]" : "text-slate-600 hover:bg-slate-50",
          )}
          style={{ paddingLeft: `${12 + depth * 16}px` }}
        >
          {link.label}
          <svg className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {expanded && (
          <div className="mt-1">
            {link.children!.map((child) => (
              <MobileNavLinkItem key={child.href} link={child} pathname={pathname} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={cn(
        "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        isActive ? "bg-blue-50 text-[#0a1b33]" : "text-slate-600 hover:bg-slate-50",
      )}
      style={{ paddingLeft: `${12 + depth * 16}px` }}
    >
      {link.label}
    </Link>
  );
}
