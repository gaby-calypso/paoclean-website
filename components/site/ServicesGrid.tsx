import Image from "next/image";

import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServices, servicePath } from "@/content/services";
import type { Dictionary } from "@/lib/i18n";
import { images } from "@/lib/images";
import type { Locale } from "@/site.config";

/** Tarjetas de servicios de la página de inicio; cada una lleva a la página del servicio. */
export function ServicesGrid({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { services: text } = dict.home;
  const services = getServices(locale);

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading id="servicios-title" eyebrow={text.eyebrow} title={text.title} intro={text.intro} />

        <ul className="mt-10 flex flex-wrap justify-center gap-5">
          {services.map((service) => (
            <li key={service.id} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]">
              <a
                href={servicePath(locale, service.id)}
                className="group shadow-card flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white transition duration-300 hover:-translate-y-1"
              >
                <span className="relative block overflow-hidden bg-slate-200">
                  <Image
                    src={images[service.card.image]}
                    alt=""
                    placeholder="blur"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="text-ink absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm">
                    {service.card.tag}
                  </span>
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="text-ink text-lg font-extrabold">{service.name}</span>
                  <span className="text-ink-soft mt-2 flex-1 text-[0.95rem]">{service.card.body}</span>
                  <span className="text-brand mt-4 inline-flex items-center gap-1 font-bold">
                    {dict.common.seeService}
                    <Icon
                      name="chevron"
                      size={16}
                      strokeWidth={2.4}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {text.extras.map((extra) => (
            <li
              key={extra}
              className="border-line inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-semibold"
            >
              <span className="bg-brand size-1.5 rounded-full" aria-hidden="true" />
              {extra}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
