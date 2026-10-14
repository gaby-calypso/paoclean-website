/**
 * Reglas de validación del formulario de cotización y citas.
 * Se usan en el navegador (para mostrar errores) y en el servidor
 * (que nunca confía en lo que llega del navegador).
 */

export const LIMITS = {
  name: 80,
  phone: 30,
  service: 40,
} as const;

/** Días hacia adelante en los que se puede pedir una cita. */
export const MAX_DAYS_AHEAD = 120;

export const TIME_WINDOWS = ["any", "morning", "afternoon"] as const;
export type TimeWindow = (typeof TIME_WINDOWS)[number];

export const OTHER_SERVICE = "other";

export type LeadInput = {
  name: string;
  phone: string;
  service: string;
  /** Fecha preferida AAAA-MM-DD; vacía si solo pide cotización. */
  date: string;
  time: TimeWindow;
  consent: boolean;
  locale: string;
  /** Campo trampa: las personas no lo ven; si trae texto, es un bot. */
  website?: string;
};

export type LeadField = "name" | "phone" | "service" | "date" | "consent";

export type Lead = Omit<LeadInput, "website" | "service"> & {
  /** "cita" si eligió fecha; "cotizacion" si no. */
  type: "cita" | "cotizacion";
  serviceId: string;
  serviceName: string;
  receivedAt: string;
  sourcePage: string;
};

const clean = (value: unknown, max: number): string =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";

export function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

/** Fecha local de hoy en formato AAAA-MM-DD. */
export function todayIso(now = new Date()): string {
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

export function maxDateIso(now = new Date()): string {
  return todayIso(new Date(now.getTime() + MAX_DAYS_AHEAD * 86_400_000));
}

function isValidDate(value: string, now: Date): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T12:00:00`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) return false;
  // Un día de margen para cubrir la diferencia de zona horaria entre visitante y servidor.
  const yesterday = todayIso(new Date(now.getTime() - 86_400_000));
  return value >= yesterday && value <= maxDateIso(now);
}

export function validateLead(
  raw: Partial<Record<keyof LeadInput, unknown>>,
  serviceIds: readonly string[],
  now = new Date(),
): { data: LeadInput; errors: LeadField[] } {
  const time = clean(raw.time, 12);
  const data: LeadInput = {
    name: clean(raw.name, LIMITS.name),
    phone: clean(raw.phone, LIMITS.phone),
    service: clean(raw.service, LIMITS.service),
    date: clean(raw.date, 10),
    time: (TIME_WINDOWS as readonly string[]).includes(time) ? (time as TimeWindow) : "any",
    consent: raw.consent === true,
    locale: clean(raw.locale, 5),
    website: clean(raw.website, 200),
  };

  const errors: LeadField[] = [];
  if (data.name.length < 2) errors.push("name");
  const digits = phoneDigits(data.phone).length;
  if (digits < 10 || digits > 15) errors.push("phone");
  if (data.service !== OTHER_SERVICE && !serviceIds.includes(data.service)) errors.push("service");
  if (data.date && !isValidDate(data.date, now)) errors.push("date");
  if (!data.consent) errors.push("consent");

  return { data, errors };
}
