import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Remove top padding */
  noTop?: boolean;
  /** Remove bottom padding */
  noBottom?: boolean;
  /** Add subtle grid background */
  grid?: boolean;
  /** Add top glow gradient */
  glow?: boolean;
  /** Slate-850 bg (slightly lighter than page bg) */
  muted?: boolean;
  /** id for scroll-anchor / nav */
  id?: string;
}

/**
 * Page section with standard vertical padding and optional effects.
 * Wraps children — pair with <Container> inside for width constraints.
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      noTop = false,
      noBottom = false,
      grid = false,
      glow = false,
      muted = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={cn(
        "relative",
        !noTop && "pt-16 sm:pt-20 lg:pt-24",
        !noBottom && "pb-16 sm:pb-20 lg:pb-24",
        grid && "bg-grid",
        glow && "bg-glow",
        muted && "bg-surface-850",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  ),
);
Section.displayName = "Section";

export { Section, type SectionProps };
