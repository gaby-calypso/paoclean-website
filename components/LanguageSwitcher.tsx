"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

type LanguageSwitcherProps = {
  /** Ruta equivalente en el otro idioma, sin la sección (#...). */
  href: string;
  hrefLang: string;
  label: string;
  shortLabel: string;
};

/** Cambia de idioma conservando la sección en la que está el visitante. */
export function LanguageSwitcher({ href, hrefLang, label, shortLabel }: LanguageSwitcherProps) {
  const router = useRouter();

  const keepSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;
    if (!hash) return;
    event.preventDefault();
    router.push(`${href}${hash}`);
  };

  return (
    <a
      href={href}
      hrefLang={hrefLang}
      onClick={keepSection}
      aria-label={label}
      title={label}
      className="border-line text-ink hover:border-brand hover:text-brand inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm font-bold transition-colors"
    >
      {shortLabel}
    </a>
  );
}
