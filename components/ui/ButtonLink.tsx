import type { AnchorHTMLAttributes, ReactNode } from "react";

import { Icon, type IconName } from "@/components/ui/Icon";

type Variant = "gold" | "whatsapp" | "ghost" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition duration-200 hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy-deep shadow-[0_10px_24px_-10px_rgb(244_180_0/0.8)] hover:bg-gold-deep",
  whatsapp: "bg-whatsapp text-white shadow-[0_10px_24px_-10px_rgb(15_125_59/0.8)] hover:bg-whatsapp-deep",
  ghost: "border border-white/25 bg-white/10 text-white hover:bg-white/20",
  outline: "border-2 border-brand text-brand hover:bg-sky-soft",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

export function buttonClasses(variant: Variant = "gold", size: Size = "md", extra = ""): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  external?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "gold",
  size = "md",
  icon,
  external = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={buttonClasses(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {icon && <Icon name={icon} size={19} />}
      {children}
    </a>
  );
}
