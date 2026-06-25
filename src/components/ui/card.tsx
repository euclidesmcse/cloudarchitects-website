import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Remove padding */
  noPadding?: boolean;
  /** Hover lift effect */
  hover?: boolean;
  /** Subtle gradient border */
  gradientBorder?: boolean;
  /** Glow shadow on hover */
  glow?: boolean;
  /** Force light surface bg for inside dark sections */
  light?: boolean;
}

/**
 * Content card with dark surface, subtle border, and optional effects.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      noPadding = false,
      hover = false,
      gradientBorder = false,
      glow = false,
      light = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl border bg-surface-850 shadow-card transition-all duration-300",
        !noPadding && "p-6 sm:p-8",
        hover && "hover:-translate-y-1 hover:shadow-card-hover",
        gradientBorder && "gradient-border",
        glow && "hover:shadow-glow",
        light && "bg-surface-800",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon node to render above title */
  icon?: React.ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ icon, className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", icon && "space-y-3", className)} {...props}>
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600/10 text-brand-400">
          {icon}
        </div>
      )}
      {children}
    </div>
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-lg font-semibold text-surface-100 sm:text-xl", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm leading-relaxed text-surface-400", className)}
      {...props}
    />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-surface-400", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-6 flex items-center gap-3 pt-4 border-t border-surface-700/50", className)}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  type CardProps,
  type CardHeaderProps,
};
