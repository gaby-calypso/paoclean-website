import type { NextConfig } from "next";

import { siteConfig } from "./site.config";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  async redirects() {
    return [
      // La raíz abre en el idioma principal del cliente.
      { source: "/", destination: `/${siteConfig.defaultLocale}`, permanent: false },
      { source: "/privacidad", destination: `/${siteConfig.defaultLocale}/privacidad`, permanent: false },
      // En inglés las páginas de servicio viven en /en/services/...
      { source: "/en/servicios/:slug", destination: "/en/services/:slug", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/en/services/:slug", destination: "/en/servicios/:slug" }];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
