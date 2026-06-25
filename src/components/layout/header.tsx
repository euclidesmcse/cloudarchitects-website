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

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-surface-800/80 bg-surface-950/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" role="navigation" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} pathname={pathname} />
          ))}

          <div className="ml-4 pl-4 border-l border-surface-700">
            <Link
              href="/contacto"
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-accent-600 px-4 text-sm font-semibold text-white shadow-glow-sm transition-all duration-200 hover:from-brand-500 hover:to-accent-500 hover:shadow-glow active:scale-[0.97]"
            >
              Fale Connosco
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-surface-300 transition-colors hover:bg-surface-800 hover:text-surface-50 md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-in Nav */}
          <nav
            className="absolute inset-x-0 bottom-0 top-0 overflow-y-auto border-t border-surface-800 bg-surface-950 px-4 pb-8 pt-4 shadow-2xl"
            role="navigation"
            aria-label="Navegação móvel"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <MobileNavLinkItem key={link.href} link={link} pathname={pathname} depth={0} />
              ))}
            </div>

            <div className="mt-6 border-t border-surface-800 pt-6">
              <Link
                href="/contacto"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-brand-600 to-accent-600 px-4 py-3 text-sm font-semibold text-white shadow-glow-sm transition-all hover:from-brand-500 hover:to-accent-500"
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

/* ─── Desktop Nav Item ─────────────────────── */

function NavLinkItem({ link, pathname }: { link: (typeof navLinks)[number]; pathname: string }) {
  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

  if (link.children) {
    return (
      <div className="group relative">
        <button
          className={cn(
            "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            isActive
              ? "text-brand-400"
              : "text-surface-300 hover:bg-surface-800 hover:text-surface-50",
          )}
        >
          {link.label}
          <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute left-0 top-full pt-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="min-w-[200px] rounded-xl border border-surface-700 bg-surface-900 p-1.5 shadow-2xl">
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === child.href
                    ? "bg-brand-600/10 text-brand-400"
                    : "text-surface-300 hover:bg-surface-800 hover:text-surface-50",
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
        "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "text-brand-400"
          : "text-surface-300 hover:bg-surface-800 hover:text-surface-50",
      )}
    >
      {link.label}
    </Link>
  );
}

/* ─── Mobile Nav Item ──────────────────────── */

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
            "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            isActive
              ? "text-brand-400"
              : "text-surface-200 hover:bg-surface-800",
          )}
          style={{ paddingLeft: `${12 + depth * 16}px` }}
        >
          {link.label}
          <svg
            className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
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
        "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        isActive
          ? "bg-brand-600/10 text-brand-400"
          : "text-surface-200 hover:bg-surface-800",
      )}
      style={{ paddingLeft: `${12 + depth * 16}px` }}
    >
      {link.label}
    </Link>
  );
}
