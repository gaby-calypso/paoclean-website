import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n";
import { siteConfig, type Locale } from "@/site.config";

export function Coverage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { coverage } = dict;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&hl=${locale}&z=10&output=embed`;

  return (
    <section id="cobertura" aria-labelledby="cobertura-title" className="section-y bg-navy text-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading
            id="cobertura-title"
            eyebrow={coverage.eyebrow}
            title={coverage.title}
            intro={coverage.intro}
            align="left"
            tone="light"
          />
          <ul className="mt-7 flex flex-wrap gap-2">
            {siteConfig.serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-lg border border-white/10 bg-white/[0.07] px-3.5 py-2 text-sm font-semibold"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-sky/40 shadow-float aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border-2 bg-white/5">
          <iframe
            src={mapSrc}
            title={coverage.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
