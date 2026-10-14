import { NextResponse, type NextRequest } from "next/server";

import { getServices, serviceIds } from "@/content/services";
import { enviarLead } from "@/lib/crm";
import { OTHER_SERVICE, validateLead, type Lead } from "@/lib/lead";

const MAX_BODY_BYTES = 4_000;

/** Límite sencillo por IP. En Vercel cada instancia tiene su propia memoria,
 *  así que frena abusos básicos; para algo más estricto usar un servicio externo. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { data, errors } = validateLead(body, serviceIds);

  // Si el campo trampa trae texto es un bot: respondemos "ok" sin guardar nada.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }
  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });
  }

  // El nombre del servicio se guarda siempre en español para que el CRM tenga valores uniformes.
  const serviceName =
    data.service === OTHER_SERVICE
      ? "Otro"
      : (getServices("es").find((s) => s.id === data.service)?.name ?? data.service);

  const lead: Lead = {
    type: data.date ? "cita" : "cotizacion",
    name: data.name,
    phone: data.phone,
    serviceId: data.service,
    serviceName,
    date: data.date,
    time: data.time,
    consent: data.consent,
    locale: data.locale,
    receivedAt: new Date().toISOString(),
    sourcePage: request.headers.get("referer") ?? "",
  };

  try {
    await enviarLead(lead);
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Se registra el detalle en el servidor; al visitante no se le exponen datos internos.
    console.error("[contacto] Error al enviar lead:", error);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
