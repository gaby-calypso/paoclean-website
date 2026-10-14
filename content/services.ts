import { servicesEn } from "@/content/services.en";
import { servicesEs } from "@/content/services.es";
import type { ServiceContent, ServiceId } from "@/content/types";
import type { Locale } from "@/site.config";

const byLocale: Record<Locale, ServiceContent[]> = { es: servicesEs, en: servicesEn };

/** Segmento de la ruta de servicios en cada idioma. */
export const servicesSegment: Record<Locale, string> = { es: "servicios", en: "services" };

export function getServices(locale: Locale): ServiceContent[] {
  return byLocale[locale];
}

export function getServiceBySlug(locale: Locale, slug: string): ServiceContent | undefined {
  return byLocale[locale].find((s) => s.slug === slug);
}

export function getServiceById(locale: Locale, id: ServiceId): ServiceContent {
  const service = byLocale[locale].find((s) => s.id === id);
  if (!service) throw new Error(`Falta el servicio "${id}" en el idioma "${locale}".`);
  return service;
}

export function servicePath(locale: Locale, id: ServiceId): string {
  return `/${locale}/${servicesSegment[locale]}/${getServiceById(locale, id).slug}`;
}

export const serviceIds = servicesEs.map((s) => s.id);
