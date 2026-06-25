import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[90rem]",
  full: "max-w-full",
};

/**
 * Max-width container with responsive padding.
 * Use `size` to constrain width, `className` for vertical margins.
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Tag = "div", size = "lg", className, children, ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  ),
);
Container.displayName = "Container";

export { Container, type ContainerProps };
