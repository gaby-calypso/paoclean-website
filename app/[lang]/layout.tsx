import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale, hreflang } from "@/lib/i18n";
import { locales, siteConfig } from "@/site.config";
import "../globals.css";

const jakarta = localFont({
  src: [
    { path: "../fonts/PlusJakartaSans-Variable.woff2", weight: "200 800", style: "normal" },
    { path: "../fonts/PlusJakartaSans-Variable-Italic.woff2", weight: "200 800", style: "italic" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#1b5ccc",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        [hreflang.en]: "/en",
        [hreflang.es]: "/es",
        "x-default": `/${siteConfig.defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: hreflang[lang].replace("-", "_"),
      url: `/${lang}`,
      images: [{ url: "/images/equipo-lobby.jpg", width: 1100, height: 880, alt: dict.meta.ogAlt }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={hreflang[lang]} className={jakarta.variable}>
      <body>
        <a
          href="#contenido"
          className="bg-brand sr-only z-50 rounded-full px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {dict.common.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
