import Image, { type StaticImageData } from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { Dictionary } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/links";
import { siteConfig } from "@/site.config";

type HeroProps = {
  dict: Dictionary;
  titleBefore: string;
  highlight: string;
  titleAfter: string;
  intro: string;
  chips: string[];
  image: StaticImageData;
  imageAlt: string;
  whatsappMessage: string;
};

const CHIP_ICONS: IconName[] = ["shield", "star", "heart"];

/** Posiciones fijas de las burbujas decorativas (en % del área de la portada). */
const BUBBLES = [
  { top: "12%", left: "4%", size: 22, delay: "0s" },
  { top: "8%", left: "46%", size: 18, delay: "1.2s" },
  { top: "14%", left: "71%", size: 12, delay: "2.4s" },
  { top: "70%", left: "8%", size: 20, delay: "0.6s" },
  { top: "82%", left: "62%", size: 10, delay: "1.8s" },
  { top: "40%", left: "92%", size: 14, delay: "3s" },
];

export function Hero({
  dict,
  titleBefore,
  highlight,
  titleAfter,
  intro,
  chips,
  image,
  imageAlt,
  whatsappMessage,
}: HeroProps) {
  const { common } = dict;
  const { rating, yearsInBusiness } = siteConfig.trust;

  return (
    <section aria-labelledby="hero-title" className="bg-hero relative overflow-hidden text-white">
      {BUBBLES.map((bubble, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="animate-bubble pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_30%_30%,rgb(255_255_255/0.35),rgb(127_196_242/0.08)_60%)] ring-1 ring-white/10"
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
          }}
        />
      ))}

      <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-20">
        <div>
          {rating && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold">
              <span className="text-star flex" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={15} />
                ))}
              </span>
              {rating.score.toFixed(1)} · {common.ratingSuffix}
            </p>
          )}

          <h1
            id="hero-title"
            className="text-[clamp(2.25rem,1.4rem+3.8vw,3.85rem)] leading-[1.05] text-white"
          >
            {titleBefore && <>{titleBefore} </>}
            <span className="text-sky">{highlight}</span> {titleAfter}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/80">{intro}</p>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {chips.map((chip, index) => (
              <li
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-semibold"
              >
                <Icon name={CHIP_ICONS[index] ?? "check"} size={15} className="text-sky" />
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={telHref} size="lg" icon="phone">
              {common.call} {siteConfig.contact.phoneDisplay}
            </ButtonLink>
            <ButtonLink
              href={whatsappHref(whatsappMessage)}
              variant="whatsapp"
              size="lg"
              icon="whatsapp"
              external
            >
              {common.writeWhatsapp}
            </ButtonLink>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
            <Icon name="check" size={16} strokeWidth={2.6} className="text-sky shrink-0" />
            {common.coverageCheck}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="shadow-float overflow-hidden rounded-[1.5rem] border-4 border-white/90 bg-white/10">
            <Image
              src={image}
              alt={imageAlt}
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 512px, calc(100vw - 2rem)"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          {yearsInBusiness > 0 && (
            <div className="text-ink shadow-float absolute -bottom-5 left-3 flex max-w-[16rem] items-center gap-3 rounded-2xl bg-white px-4 py-3 sm:left-5">
              <span className="text-3xl font-extrabold">+{yearsInBusiness}</span>
              <span className="text-ink-soft text-xs leading-snug font-medium">
                {yearsInBusiness === 1 ? common.yearsOne : common.yearsMany}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
