import { BookingDialog } from "@/components/site/BookingDialog";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServices } from "@/content/services";
import { localePath, type Dictionary } from "@/lib/i18n";
import { telHref } from "@/lib/links";
import { siteConfig, type Locale } from "@/site.config";

type QuoteSectionProps = { dict: Dictionary; locale: Locale; defaultService?: string };

/** Cotización y solicitud de cita. Destino de los botones "Pedir presupuesto". */
export function QuoteSection({ dict, locale, defaultService }: QuoteSectionProps) {
  const { quote } = dict;
  const services = getServices(locale).map((s) => ({ id: s.id, name: s.name }));

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="section-y bg-surface">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contacto-title"
            eyebrow={quote.eyebrow}
            title={quote.title}
            intro={quote.intro}
            align="left"
          />
          <ul className="mt-6 space-y-3">
            {quote.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 font-semibold">
                <span className="bg-brand grid size-6 shrink-0 place-items-center rounded-full text-white">
                  <Icon name="check" size={14} strokeWidth={2.8} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          {siteConfig.bookingUrl && (
            <BookingDialog
              url={siteConfig.bookingUrl}
              buttonLabel={quote.bookOnline}
              title={quote.bookingTitle}
              closeLabel={quote.close}
            />
          )}
        </div>

        <QuoteForm
          text={quote}
          services={services}
          defaultService={defaultService}
          locale={locale}
          privacyHref={localePath(locale, "/privacidad")}
          phoneDisplay={siteConfig.contact.phoneDisplay}
          telHref={telHref}
        />
      </div>
    </section>
  );
}
