import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

type BadgeVariant = "default" | "brand" | "accent" | "purple" | "success" | "warning" | "error" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Smaller size for tight spaces */
  small?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-800 text-surface-300 border border-surface-700",
  brand: "bg-brand-600/15 text-brand-300 border border-brand-600/25",
  accent: "bg-accent-600/15 text-accent-300 border border-accent-600/25",
  purple: "bg-purple-600/15 text-purple-300 border border-purple-600/25",
  success: "bg-success/15 text-success border border-success/25",
  warning: "bg-warning/15 text-warning border border-warning/25",
  error: "bg-error/15 text-error border border-error/25",
  outline: "bg-transparent text-surface-300 border border-surface-600",
};

/**
 * Inline badge/tag for labels, categories, statuses.
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", small = false, className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full font-medium leading-none",
        small ? "h-5 px-2 text-[11px]" : "h-6 px-3 text-xs",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  ),
);
Badge.displayName = "Badge";

export { Badge, type BadgeProps, type BadgeVariant };
