import { siteConfig } from "@/site.config";

const { phoneE164 } = siteConfig.contact;

export const telHref = `tel:+${phoneE164}`;
export const mailHref = `mailto:${siteConfig.contact.email}`;

export function whatsappHref(message: string): string {
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
}

/** Sustituye {clave} en una plantilla de texto. */
export function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
