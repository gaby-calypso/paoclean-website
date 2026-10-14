import Image from "next/image";

import { BeforeAfter } from "@/components/BeforeAfter";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ComparePair, MediaBlock } from "@/content/types";
import type { Dictionary } from "@/lib/i18n";
import { getPair, images } from "@/lib/images";

/**
 * Bloques de fotos variables de cada servicio. Se alternan fondo claro y blanco
 * como en la referencia. Los botones llevan al formulario de cotización.
 */
export function MediaBlocks({ dict, blocks }: { dict: Dictionary; blocks: MediaBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <section
          key={block.id}
          aria-labelledby={`bloque-${block.id}`}
          className={`section-y ${index % 2 === 0 ? "bg-soft-glow" : "bg-white"}`}
        >
          <div className="container-page">
            <SectionHeading
              id={`bloque-${block.id}`}
              eyebrow={block.eyebrow}
              title={block.title}
              intro={block.intro}
            />
            <BlockBody dict={dict} block={block} />
          </div>
        </section>
      ))}
    </>
  );
}

function Compare({ dict, item, sizes }: { dict: Dictionary; item: ComparePair; sizes: string }) {
  const pair = getPair(item.pair);
  return (
    <BeforeAfter
      before={pair.before}
      after={pair.after}
      altBefore={item.altBefore}
      altAfter={item.altAfter}
      labelBefore={dict.common.before}
      labelAfter={dict.common.after}
      sliderLabel={`${dict.common.compareLabel}: ${item.label}`}
      sizes={sizes}
    />
  );
}

function Hint({ children }: { children: string }) {
  return (
    <p className="text-ink-soft mt-4 flex items-center justify-center gap-1.5 text-center text-xs">
      <Icon name="arrows" size={14} />
      {children}
    </p>
  );
}

function Cta({ children }: { children: string }) {
  return (
    <div className="mt-8 flex justify-center">
      <ButtonLink href="#contacto" icon="phone">
        {children}
      </ButtonLink>
    </div>
  );
}

function BlockBody({ dict, block }: { dict: Dictionary; block: MediaBlock }) {
  switch (block.type) {
    case "compare": {
      const single = block.items.length === 1;
      return (
        <>
          <div className={`mx-auto mt-10 grid gap-5 ${single ? "max-w-sm" : "max-w-2xl sm:grid-cols-2"}`}>
            {block.items.map((item) => (
              <Compare
                key={item.pair}
                dict={dict}
                item={item}
                sizes={single ? "(min-width: 640px) 384px, 92vw" : "(min-width: 640px) 336px, 92vw"}
              />
            ))}
          </div>
          <Hint>{block.hint}</Hint>
          {block.cta && <Cta>{block.cta}</Cta>}
        </>
      );
    }
    case "compareAndPhoto":
      return (
        <>
          <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
            <Compare dict={dict} item={block.compare} sizes="(min-width: 640px) 336px, 92vw" />
            <div className="shadow-float relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-slate-200">
              <Image
                src={images[block.photo.image]}
                alt={block.photo.alt}
                placeholder="blur"
                fill
                sizes="(min-width: 640px) 336px, 92vw"
                className="object-cover"
              />
              <span className="bg-brand absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.7rem] font-bold text-white">
                <Icon name="check" size={12} strokeWidth={3} />
                {block.photoBadge}
              </span>
            </div>
          </div>
          <Hint>{block.hint}</Hint>
          <Cta>{block.cta}</Cta>
        </>
      );
    case "photos":
      return (
        <>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {block.photos.map((photo, index) => (
              <li
                key={`${photo.image}-${index}`}
                className="shadow-float relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-slate-200"
              >
                <Image
                  src={images[photo.image]}
                  alt={photo.alt}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 640px) 240px, 92vw"
                  className="object-cover"
                />
                {index === 0 && (
                  <span className="bg-brand absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.7rem] font-bold text-white">
                    <Icon name="play" size={10} />
                    {dict.common.inAction}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <Cta>{block.cta}</Cta>
        </>
      );
    case "video":
      return (
        <figure className="shadow-float mx-auto mt-10 max-w-3xl overflow-hidden rounded-[var(--radius-card)] bg-black">
          <div className="aspect-video">
            <iframe
              src={block.embedUrl}
              title={block.caption}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="size-full border-0"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm font-semibold text-white">▶ {block.caption}</figcaption>
        </figure>
      );
  }
}
