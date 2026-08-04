import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  inverse?: boolean;
}

export function BrandLogo({ className, inverse = false }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "font-extrabold tracking-tight",
        inverse ? "text-white" : "text-slate-950",
        className,
      )}
    >
      Flávio H. Zaccheroni<span className="text-blue-500">.</span>
    </span>
  );
}
