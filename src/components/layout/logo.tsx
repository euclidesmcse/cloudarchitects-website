import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 group", className)}
    >
      <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gradient-to-br from-brand-500 to-accent-600 p-1.5 shadow-glow-sm transition-shadow duration-300 group-hover:shadow-glow">
        <Image
          src="/logo-cloud-architects.svg"
          alt="Cloud Architects"
          width={40}
          height={40}
          className="h-full w-full"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight text-surface-50">
            Cloud
          </span>
          <span className="text-xs font-medium tracking-wider text-brand-400">
            Architects
          </span>
        </div>
      )}
    </Link>
  );
}
