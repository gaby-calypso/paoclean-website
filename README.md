# PaoClean · Sitio web

Sitio bilingüe (inglés / español) para **PaoClean**, empresa de limpieza residencial y comercial en Miami, Florida: una página de inicio y una página por servicio. El sitio busca convertir visitas en cotizaciones y citas por llamada, WhatsApp o formulario.

**Vista previa:** _agregar aquí el enlace de Vercel_

![Captura del sitio](docs/captura.png)
<!-- PENDIENTE: guardar una captura de pantalla en docs/captura.png -->

## Tecnologías

- [Next.js 16](https://nextjs.org) (App Router, Server Components, Cache Components)
- TypeScript en modo estricto
- Tailwind CSS 4
- ESLint + Prettier
- Despliegue en [Vercel](https://vercel.com)

## Características

- Página de inicio con menú, servicios, sobre nosotros, cobertura, cotización y preguntas frecuentes.
- Cinco páginas de servicio con la misma plantilla y contenido propio: galería, antes/después, bloques de fotos, beneficios, qué incluye, proceso y preguntas.
- Dos idiomas con rutas propias: `/en` (principal) y `/es`; servicios en `/en/services/...` y `/es/servicios/...`. El selector lleva a la misma página en el otro idioma.
- Citas desde la página: el formulario pide fecha y horario preferidos; si se configura una agenda en línea (Calendly, Cal.com), aparece un botón para reservar en una ventana.
- Diseño responsivo pensado primero para celular; probado de 360 px a 1440 px sin desplazamiento horizontal.
- Formulario de cotización y citas con validación en el navegador y en el servidor, campo trampa contra bots, límite de envíos y autorización de contacto.
- Al enviar el formulario se abre WhatsApp con el mensaje listo y el lead se registra en el servidor.
- Comparadores antes/después accesibles con mouse, toque y teclado.
- SEO: metadatos por idioma, `hreflang`, Open Graph, `sitemap.xml`, `robots.txt` y datos estructurados de negocio local.
- Accesibilidad: HTML semántico, enlace para saltar al contenido, foco visible, contraste AA y respeto a `prefers-reduced-motion`.
- Aviso de privacidad en ambos idiomas.

## Cómo correrlo en tu computadora

Requisitos: [Node.js](https://nodejs.org) 20.9 o más reciente.

```bash
npm install
cp .env.example .env.local   # y llena las variables que vayas a usar
npm run dev
```

Abre <http://localhost:3000>.

| Comando             | Qué hace                                 |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                   |
| `npm run build`     | Compilación de producción                |
| `npm run start`     | Sirve la compilación de producción       |
| `npm run lint`      | Revisa el código con ESLint              |
| `npm run typecheck` | Revisa los tipos de TypeScript           |
| `npm run format`    | Da formato a todo el código con Prettier |

## Variables de entorno

Ver `.env.example`. Todas son opcionales para ver el sitio, pero **sin un destino de leads el formulario solo abre WhatsApp** y el registro en el servidor responde con error.

| Variable               | Para qué sirve                                                              |
| ---------------------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Dominio definitivo (canónicas, sitemap y Open Graph)                        |
| `LEADS_WEBHOOK_URL`    | Webhook que recibe cada cotización o cita en JSON (CRM, Zapier, Make o n8n) |
| `RESEND_API_KEY`       | Llave de Resend para enviar los leads por correo                            |
| `LEADS_TO_EMAIL`       | Correo que recibe los leads                                                 |
| `LEADS_FROM_EMAIL`     | Remitente verificado en Resend                                              |

## Estructura

```
app/
  [lang]/layout.tsx         Layout raíz por idioma, fuentes y metadatos
  [lang]/page.tsx           Página de inicio
  [lang]/servicios/[slug]/  Plantilla de las páginas de servicio
  [lang]/privacidad/        Aviso de privacidad
  api/contacto/route.ts     Recibe y valida el formulario
  sitemap.ts, robots.ts     SEO técnico
components/
  site/                     Secciones del sitio (portada, tarjetas, formulario, etc.)
  ui/                       Botones, íconos y encabezados reutilizables
content/
  services.es.ts, services.en.ts   Contenido de cada página de servicio
  types.ts                  Forma del contenido de un servicio
dictionaries/es.json, en.json   Textos generales y de la página de inicio
lib/
  crm.ts                    enviarLead(): único punto de conexión con el CRM
  lead.ts                   Reglas de validación compartidas
  i18n.ts, links.ts, images.ts
public/images/              Fotos del sitio
site.config.ts              Datos del negocio (teléfono, horario, zonas, redes)
```

### Cómo hacer cambios comunes

- **Teléfono, correo, horario, zonas, redes:** `site.config.ts`.
- **Textos generales y de inicio:** `dictionaries/en.json` y `dictionaries/es.json` (siempre los dos).
- **Textos, fotos y bloques de un servicio:** `content/services.es.ts` y `content/services.en.ts`.
- **Agregar un servicio:** copia un servicio en ambos archivos de `content/`, cambia `id`, `slug` y contenido, y agrega el `id` en `ServiceId` de `content/types.ts`.
- **Agenda en línea:** pega el enlace de Calendly o Cal.com en `bookingUrl` de `site.config.ts`.
- **Fotos:** reemplaza los archivos en `public/images/` conservando el nombre.
- **Conectar el CRM:** cambia el contenido de `enviarLead()` en `lib/crm.ts`.
- **Idioma principal:** `defaultLocale` en `site.config.ts`.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En vercel.com: **Add New → Project**, importa el repositorio y haz clic en **Deploy**.
3. En **Settings → Environment Variables** agrega las variables de `.env.example` y vuelve a desplegar.

Cada `git push` a `main` publica una nueva versión; cada rama genera su propia vista previa.

## Créditos

- Tipografía [Plus Jakarta Sans](https://github.com/tokotype/PlusJakartaSans), licencia SIL Open Font License (`app/fonts/OFL.txt`).

## Datos que recibe el CRM

Cada envío del formulario llega a `enviarLead()` con esta forma:

```json
{
  "type": "cita",
  "name": "Carlos Ruiz",
  "phone": "305 555 0101",
  "serviceId": "oficinas",
  "serviceName": "Oficinas y locales",
  "date": "2026-10-16",
  "time": "morning",
  "consent": true,
  "locale": "es",
  "receivedAt": "2026-10-13T23:59:42.136Z",
  "sourcePage": "https://.../es/servicios/limpieza-de-oficinas"
}
```

`type` es `"cita"` cuando el cliente eligió fecha y `"cotizacion"` cuando no.
