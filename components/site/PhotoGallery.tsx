import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Photo } from "@/content/types";
import type { Dictionary } from "@/lib/i18n";
import { images } from "@/lib/images";
import { siteConfig } from "@/site.config";

type PhotoGalleryProps = { dict: Dictionary; title: string; intro: string; photos: Photo[] };

export function PhotoGallery({ dict, title, intro, photos }: PhotoGalleryProps) {
  return (
    <section aria-labelledby="trabajos-title" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="trabajos-title"
          eyebrow={dict.service.galleryEyebrow}
          title={title}
          intro={intro}
        />
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {photos.map((photo, index) => (
            <li
              key={`${photo.image}-${index}`}
              className="shadow-card overflow-hidden rounded-2xl bg-slate-200"
            >
              <Image
                src={images[photo.image]}
                alt={photo.alt}
                placeholder="blur"
                sizes="(min-width: 896px) 290px, (min-width: 768px) 31vw, 47vw"
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
        {siteConfig.showDemoPhotoNotice && (
          <p className="text-ink-soft mx-auto mt-4 max-w-4xl text-center text-xs">
            {dict.common.demoPhotoNotice}
          </p>
        )}
      </div>
    </section>
  );
}
