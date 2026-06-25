"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  as?: never; // use Link or <a> externally
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-600 to-accent-600 text-white hover:from-brand-500 hover:to-accent-500 shadow-glow-sm hover:shadow-glow active:scale-[0.97]",
  secondary:
    "bg-surface-800 text-surface-200 border border-surface-700 hover:bg-surface-700 hover:border-surface-600 active:scale-[0.97]",
  outline:
    "bg-transparent text-brand-400 border border-brand-600/40 hover:bg-brand-600/10 hover:border-brand-500 active:scale-[0.97]",
  ghost:
    "bg-transparent text-surface-300 hover:bg-surface-800 hover:text-surface-100",
  danger:
    "bg-error/10 text-error border border-error/30 hover:bg-error/20 active:scale-[0.97]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 gap-1.5 px-3 text-xs",
  md: "h-10 gap-2 px-5 text-sm",
  lg: "h-12 gap-2.5 px-7 text-base",
};

/**
 * Primary action button with loading state and icon support.
 * Use with `<a>` / `<Link>` externally — this is a semantic `<button>`.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconRight,
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : icon ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
      {!loading && iconRight && (
        <span className="shrink-0" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  ),
);
Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
