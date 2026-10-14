import { getServices } from "@/content/services";
import type { Dictionary } from "@/lib/i18n";
import { siteConfig, type Locale } from "@/site.config";

type StructuredDataProps = { dict: Dictionary; locale: Locale; path?: string; serviceName?: string };

/** Datos estructurados para que Google entienda el negocio (y el servicio, en su página). */
export function StructuredData({ dict, locale, path = "", serviceName }: StructuredDataProps) {
  const { contact, trust } = siteConfig;
  const business = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#negocio`,
    name: siteConfig.name,
    description: dict.meta.description,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/images/equipo-lobby.jpg`,
    telephone: `+${contact.phoneE164}`,
    email: contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: siteConfig.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    knowsLanguage: ["en", "es"],
    makesOffer: getServices(locale).map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name },
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    ...(trust.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: trust.rating.score,
            reviewCount: trust.rating.count,
          },
        }
      : {}),
  };

  const graph = serviceName
    ? [
        business,
        {
          "@type": "Service",
          name: serviceName,
          url: `${siteConfig.url}${path}`,
          provider: { "@id": business["@id"] },
          areaServed: business.areaServed,
        },
      ]
    : [business];

  return (
    <script
      type="application/ld+json"
      // El contenido sale de la configuración propia; se escapa "<" por seguridad.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
