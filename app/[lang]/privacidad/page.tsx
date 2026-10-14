import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { getDictionary, hasLocale, hreflang, localePath, otherLocale } from "@/lib/i18n";
import { getCurrentYear } from "@/lib/year";
import { siteConfig } from "@/site.config";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacidad">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: `${dict.privacy.title} | ${siteConfig.name}`,
    alternates: {
      canonical: `/${lang}/privacidad`,
      languages: { [hreflang.en]: "/en/privacidad", [hreflang.es]: "/es/privacidad" },
    },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacidad">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { privacy } = dict;
  const year = await getCurrentYear();

  return (
    <>
      <SiteHeader dict={dict} locale={lang} alternateHref={localePath(otherLocale(lang), "/privacidad")} />
      <main id="contenido" className="section-y">
        <article className="container-page max-w-3xl">
          <p className="bg-sky-soft text-brand-deep mb-6 rounded-xl px-4 py-3 text-sm font-semibold">
            {privacy.draftNotice}
          </p>
          <h1 className="text-[clamp(2rem,1.5rem+2vw,2.75rem)]">{privacy.title}</h1>
          <p className="text-ink-soft mt-2">{privacy.updated}</p>

          <div className="mt-10 space-y-8">
            {privacy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl">{section.title}</h2>
                <p className="text-ink-soft mt-2">{section.body}</p>
              </section>
            ))}
          </div>

          <a
            href={localePath(lang)}
            className="text-brand mt-12 inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
          >
            ← {privacy.back}
          </a>
        </article>
      </main>
      <SiteFooter dict={dict} locale={lang} year={year} />
    </>
  );
}
