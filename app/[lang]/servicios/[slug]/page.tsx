import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactBars } from "@/components/site/ContactBars";
import { Coverage } from "@/components/site/Coverage";
import { FaqList } from "@/components/site/FaqList";
import { FinalCta } from "@/components/site/FinalCta";
import { Hero } from "@/components/site/Hero";
import { IconCards } from "@/components/site/IconCards";
import { MediaBlocks } from "@/components/site/MediaBlocks";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { QuoteSection } from "@/components/site/QuoteSection";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StructuredData } from "@/components/site/StructuredData";
import { Testimonials } from "@/components/site/Testimonials";
import { TrustStrip } from "@/components/site/TrustStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServiceBySlug, getServices, servicePath } from "@/content/services";
import { getDictionary, hasLocale, hreflang, otherLocale } from "@/lib/i18n";
import { images } from "@/lib/images";
import { getCurrentYear } from "@/lib/year";
import { locales, siteConfig } from "@/site.config";

export function generateStaticParams() {
  return locales.flatMap((lang) => getServices(lang).map((service) => ({ lang, slug: service.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/servicios/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const service = getServiceBySlug(lang, slug);
  if (!service) return {};

  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: {
      canonical: servicePath(lang, service.id),
      languages: Object.fromEntries(locales.map((l) => [hreflang[l], servicePath(l, service.id)])),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: service.meta.title,
      description: service.meta.description,
      locale: hreflang[lang].replace("-", "_"),
      url: servicePath(lang, service.id),
      images: [{ url: images[service.hero.image].src, alt: service.hero.imageAlt }],
    },
  };
}

/** Plantilla de página de servicio: misma estructura, contenido propio de cada servicio. */
export default async function ServicePage({ params }: PageProps<"/[lang]/servicios/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const service = getServiceBySlug(lang, slug);
  if (!service) notFound();

  const dict = await getDictionary(lang);
  const year = await getCurrentYear();
  const [trustA = "", trustB = "", trustC = ""] = dict.trust;
  const path = servicePath(lang, service.id);

  return (
    <>
      <StructuredData dict={dict} locale={lang} path={path} serviceName={service.name} />
      <SiteHeader
        dict={dict}
        locale={lang}
        alternateHref={servicePath(otherLocale(lang), service.id)}
        whatsappMessage={service.whatsappMessage}
      />
      <main id="contenido">
        <Hero
          dict={dict}
          titleBefore={service.hero.titleBefore}
          highlight={service.hero.highlight}
          titleAfter={service.hero.titleAfter}
          intro={service.hero.intro}
          chips={service.hero.chips}
          image={images[service.hero.image]}
          imageAlt={service.hero.imageAlt}
          whatsappMessage={service.whatsappMessage}
        />
        <TrustStrip items={[trustA, trustB, service.trustHighlight, trustC]} />
        <PhotoGallery
          dict={dict}
          title={service.gallery.title}
          intro={service.gallery.intro}
          photos={service.gallery.photos}
        />
        <MediaBlocks dict={dict} blocks={service.blocks} />
        <section aria-labelledby="ventajas-title" className="section-y bg-surface">
          <div className="container-page">
            <SectionHeading
              id="ventajas-title"
              eyebrow={dict.service.whyEyebrow}
              title={service.why.title}
              intro={service.why.intro}
            />
            <IconCards items={service.why.items} />
          </div>
        </section>
        <ServiceDetail
          id="incluye"
          eyebrow={dict.service.detailEyebrow}
          title={service.detail.title}
          intro={service.detail.intro}
          items={service.detail.items.map((item) => ({ strong: item.title, text: item.body }))}
          image={images[service.detail.image]}
          imageAlt={service.detail.imageAlt}
          cta={dict.common.freeQuote}
        />
        <ProcessSteps
          eyebrow={dict.service.processEyebrow}
          title={dict.service.processTitle}
          steps={service.process}
        />
        <Testimonials dict={dict} />
        <Coverage dict={dict} locale={lang} />
        <QuoteSection dict={dict} locale={lang} defaultService={service.id} />
        <FaqList dict={dict} items={service.faq} />
        <FinalCta
          dict={dict}
          title={service.finalCta.title}
          body={service.finalCta.body}
          whatsappMessage={service.whatsappMessage}
        />
      </main>
      <SiteFooter dict={dict} locale={lang} year={year} />
      <ContactBars dict={dict} whatsappMessage={service.whatsappMessage} />
    </>
  );
}
