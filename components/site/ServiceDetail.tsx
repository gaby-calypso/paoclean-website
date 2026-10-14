import Image, { type StaticImageData } from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceDetailProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: { strong: string; text: string }[];
  image: StaticImageData;
  imageAlt: string;
  cta: string;
};

/** Texto con lista de verificación a la izquierda e imagen a la derecha. */
export function ServiceDetail({
  id,
  eyebrow,
  title,
  intro,
  items,
  image,
  imageAlt,
  cta,
}: ServiceDetailProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section-y">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} align="left" />
          <ul className="mt-6 space-y-3.5">
            {items.map((item) => (
              <li key={item.strong} className="flex items-start gap-3">
                <span className="bg-brand mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-white">
                  <Icon name="check" size={14} strokeWidth={2.8} />
                </span>
                <span className="text-ink-soft">
                  <strong className="text-ink font-bold">{item.strong}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
          <ButtonLink href="#contacto" icon="phone" className="mt-8">
            {cta}
          </ButtonLink>
        </div>
        <div className="shadow-float mx-auto w-full max-w-md overflow-hidden rounded-[var(--radius-card)] bg-slate-200 lg:max-w-none">
          <Image
            src={image}
            alt={imageAlt}
            placeholder="blur"
            sizes="(min-width: 1024px) 520px, (min-width: 448px) 448px, 92vw"
            className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}
