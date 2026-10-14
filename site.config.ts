/**
 * Configuración central del sitio.
 *
 * Todos los datos del negocio viven aquí: los componentes leen de este archivo
 * y de los diccionarios (`dictionaries/`), así que para ajustar el sitio basta
 * con editar estos valores. Lo marcado con PENDIENTE debe confirmarse con el
 * cliente antes de publicar.
 */

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const siteConfig = {
  name: "PaoClean",
  industry: "Cleaning services",
  country: "US",
  city: "Miami",
  region: "FL",
  /** Cliente de EE. UU.: inglés por defecto, con opción a español. */
  defaultLocale: "en" as Locale,

  /** PENDIENTE: dominio definitivo. En Vercel se usa la URL del proyecto. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  contact: {
    phoneDisplay: "+1 (786) 905-2246",
    /** Sin "+" ni espacios: se usa en enlaces tel: y wa.me. */
    phoneE164: "17869052246",
    email: "paocleanllc@gmail.com",
  },

  /**
   * PENDIENTE: confirmar horario con el cliente.
   * Formato schema.org para los datos estructurados; el texto visible está en
   * los diccionarios (`contact.hoursValue`).
   */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],

  /** PENDIENTE: confirmar las zonas exactas de servicio. */
  serviceAreas: [
    "Miami",
    "Hialeah",
    "Doral",
    "Miami Beach",
    "Kendall",
    "Coral Gables",
    "Brickell",
    "Homestead",
    "Aventura",
    "North Miami",
    "Key Biscayne",
    "Pinecrest",
  ],
  mapQuery: "Miami, FL",

  /** Solo se muestran las redes con URL. PENDIENTE: Facebook y Google Business. */
  social: {
    instagram: "https://www.instagram.com/paoclean",
    facebook: "",
    google: "",
  },

  /**
   * Indicadores de confianza. No se muestran mientras sean null o false,
   * para no publicar datos que el cliente no ha confirmado.
   */
  trust: {
    /** PENDIENTE: calificación y número de reseñas reales de Google. */
    rating: null as null | { score: number; count: number },
    /** PENDIENTE: confirmar si cuenta con seguro de responsabilidad civil. */
    insured: false,
    /** PENDIENTE: confirmar años de experiencia. */
    yearsInBusiness: 1,
  },

  /**
   * Agenda en línea. Si el cliente usa Calendly, Cal.com u otra agenda, poner aquí
   * su enlace de inserción y aparecerá el botón "Ver horarios disponibles".
   * Vacío: las citas se piden con el formulario (fecha y horario preferidos).
   */
  bookingUrl: "",

  /**
   * Las fotos actuales son ilustraciones generadas con IA. Mientras sea true,
   * se muestra un aviso debajo de la galería. Cambiar a false cuando se
   * reemplacen por fotos reales de trabajos de PaoClean.
   */
  showDemoPhotoNotice: true,
} as const;

export type SiteConfig = typeof siteConfig;
