import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0a152d] text-[13px] text-white">
        ✦
      </span>
      {showText && (
        <span className="ca-font-display text-[15px] font-semibold tracking-tight text-[#0a1b33]">
          Cloud Architects
        </span>
      )}
    </Link>
  );
}
