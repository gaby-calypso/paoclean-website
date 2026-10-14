import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Dictionary } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/links";
import { siteConfig } from "@/site.config";

type FinalCtaProps = { dict: Dictionary; title: string; body: string; whatsappMessage: string };

export function FinalCta({ dict, title, body, whatsappMessage }: FinalCtaProps) {
  return (
    <section aria-labelledby="cierre-title" className="bg-cta py-16 text-center text-white sm:py-20">
      <div className="container-page">
        <h2 id="cierre-title" className="h2-section mx-auto max-w-3xl text-white">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">{body}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={telHref} size="lg" icon="phone">
            {dict.common.call} {siteConfig.contact.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={whatsappHref(whatsappMessage)} variant="ghost" size="lg" icon="whatsapp" external>
            {dict.common.whatsapp}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
