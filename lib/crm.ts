import "server-only";

import type { Lead } from "@/lib/lead";

/**
 * Punto único de conexión con el CRM.
 *
 * Mientras se elige el CRM, cada lead se envía a:
 *   1. LEADS_WEBHOOK_URL, si está configurado (Zapier, Make, n8n o el webhook del CRM).
 *   2. Correo, como respaldo, mediante Resend (RESEND_API_KEY + LEADS_TO_EMAIL).
 *
 * Si el webhook falla, se intenta el correo para que ningún lead se pierda.
 * Cuando se elija el CRM, solo hay que cambiar `sendToWebhook` por su API.
 */
export async function enviarLead(lead: Lead): Promise<void> {
  const errors: string[] = [];

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await sendToWebhook(webhookUrl, lead);
      return;
    } catch (error) {
      errors.push(`webhook: ${describe(error)}`);
    }
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;
  if (resendKey && to) {
    try {
      await sendByEmail(resendKey, to, lead);
      return;
    } catch (error) {
      errors.push(`email: ${describe(error)}`);
    }
  }

  if (errors.length === 0) {
    throw new Error("No hay destino de leads configurado (revisa .env.example).");
  }
  throw new Error(`No se pudo entregar el lead. ${errors.join(" | ")}`);
}

async function sendToWebhook(url: string, lead: Lead): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
}

async function sendByEmail(apiKey: string, to: string, lead: Lead): Promise<void> {
  const from = process.env.LEADS_FROM_EMAIL ?? "PaoClean Web <onboarding@resend.dev>";
  const isBooking = lead.type === "cita";
  const lines = [
    `Tipo: ${isBooking ? "Solicitud de cita" : "Cotización"}`,
    `Nombre: ${lead.name}`,
    `Teléfono: ${lead.phone}`,
    `Servicio: ${lead.serviceName}`,
    ...(isBooking ? [`Fecha preferida: ${lead.date}`, `Horario preferido: ${lead.time}`] : []),
    `Idioma de la página: ${lead.locale}`,
    `Página: ${lead.sourcePage}`,
    `Recibido: ${lead.receivedAt}`,
    `Autorizó contacto: ${lead.consent ? "Sí" : "No"}`,
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `${isBooking ? "Nueva solicitud de cita" : "Nueva cotización"}: ${lead.name} (${lead.serviceName})`,
      text: lines.join("\n"),
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
}

function describe(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
