import "server-only";

import { locales, siteConfig, type Locale } from "@/site.config";
import type es from "@/dictionaries/es.json";

/** La forma de los diccionarios se toma del archivo en español. */
export type Dictionary = typeof es;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

/** Ruta absoluta de una página en un idioma, p. ej. localePath("es", "/privacidad"). */
export function localePath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

export function otherLocale(locale: Locale): Locale {
  return locales.find((l) => l !== locale) ?? siteConfig.defaultLocale;
}

/** Etiquetas hreflang por idioma. */
export const hreflang: Record<Locale, string> = {
  en: "en-US",
  es: "es-US",
};
