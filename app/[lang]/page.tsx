import { notFound } from "next/navigation";

import { ContactBars } from "@/components/site/ContactBars";
import { Coverage } from "@/components/site/Coverage";
import { FaqList } from "@/components/site/FaqList";
import { FinalCta } from "@/components/site/FinalCta";
import { Hero } from "@/components/site/Hero";
import { IconCards } from "@/components/site/IconCards";
import { QuoteSection } from "@/components/site/QuoteSection";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StructuredData } from "@/components/site/StructuredData";
import { Testimonials } from "@/components/site/Testimonials";
import { TrustStrip } from "@/components/site/TrustStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary, hasLocale, localePath, otherLocale } from "@/lib/i18n";
import { images } from "@/lib/images";
import { getCurrentYear } from "@/lib/year";

/** Página de inicio: presenta el negocio y lleva a cada página de servicio. */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const year = await getCurrentYear();
  const { home } = dict;
  const [trustA = "", trustB = "", trustC = ""] = dict.trust;

  return (
    <>
      <StructuredData dict={dict} locale={lang} />
      <SiteHeader dict={dict} locale={lang} alternateHref={localePath(otherLocale(lang))} showNav />
      <main id="contenido">
        <Hero
          dict={dict}
          titleBefore={home.hero.titleBefore}
          highlight={home.hero.highlight}
          titleAfter={home.hero.titleAfter}
          intro={home.hero.intro}
          chips={home.hero.chips}
          image={images["equipo-lobby"]}
          imageAlt={home.hero.imageAlt}
          whatsappMessage={dict.common.whatsappMessage}
        />
        <TrustStrip items={[trustA, trustB, home.trustHighlight, trustC]} />
        <ServicesGrid dict={dict} locale={lang} />
        <ServiceDetail
          id="nosotros"
          eyebrow={home.about.eyebrow}
          title={home.about.title}
          intro={home.about.body}
          items={home.about.bullets}
          image={images["pao-marmol"]}
          imageAlt={home.about.imageAlt}
          cta={dict.common.freeQuote}
        />
        <section aria-labelledby="diferencia-title" className="section-y bg-surface">
          <div className="container-page">
            <SectionHeading id="diferencia-title" eyebrow={home.why.eyebrow} title={home.why.title} />
            <IconCards items={home.why.items} />
          </div>
        </section>
        <Testimonials dict={dict} />
        <Coverage dict={dict} locale={lang} />
        <QuoteSection dict={dict} locale={lang} />
        <FaqList dict={dict} items={home.faq} />
        <FinalCta
          dict={dict}
          title={home.finalCta.title}
          body={home.finalCta.body}
          whatsappMessage={dict.common.whatsappMessage}
        />
      </main>
      <SiteFooter dict={dict} locale={lang} year={year} />
      <ContactBars dict={dict} whatsappMessage={dict.common.whatsappMessage} />
    </>
  );
}
