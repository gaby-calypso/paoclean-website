// ============================================================================
// Datos del negocio — PENDIENTE: ajustar con información real antes de lanzar
// ============================================================================

export const BUSINESS = {
  name: "PaoClean",
  phoneDisplay: "+1 (786) 905-2246",
  phoneE164: "17869052246", // sin "+" para wa.me y tel:
  email: "paocleanllc@gmail.com",

  // PENDIENTE: confirmar el horario real de atención.
  // 0 = domingo ... 6 = sábado. Formato 24h (decimales para medias horas).
  hours: {
    0: null, // domingo cerrado
    1: [8, 18],
    2: [8, 18],
    3: [8, 18],
    4: [8, 18],
    5: [8, 18],
    6: [9, 14],
  },
};

// PENDIENTE: agregar Facebook y Google Business cuando existan.
export const SOCIALS = {
  instagram: "https://www.instagram.com/paoclean",
  facebook: "#",
  google: "#",
};

export const WHATSAPP_MESSAGE = {
  es: "Hola, me gustaría pedir una cotización para limpieza.",
  en: "Hi, I'd like to request a cleaning quote.",
};

export function buildWhatsappUrl(lang) {
  const msg = encodeURIComponent(WHATSAPP_MESSAGE[lang] || WHATSAPP_MESSAGE.es);
  return `https://wa.me/${BUSINESS.phoneE164}?text=${msg}`;
}

export function isOpenNow() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const range = BUSINESS.hours[day];
  return !!range && hour >= range[0] && hour < range[1];
}