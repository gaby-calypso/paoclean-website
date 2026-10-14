import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n";
import { siteConfig } from "@/site.config";

/**
 * PENDIENTE: los textos actuales son marcadores de ejemplo. Reemplazarlos por
 * reseñas reales en los diccionarios y cambiar SHOW_EXAMPLE_BADGE a false.
 */
const SHOW_EXAMPLE_BADGE = true;

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials, common } = dict;
  const { rating } = siteConfig.trust;

  return (
    <section aria-labelledby="opiniones-title" className="section-y bg-soft-glow">
      <div className="container-page">
        <SectionHeading id="opiniones-title" eyebrow={testimonials.eyebrow} title={testimonials.title} />

        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {testimonials.items.map((item, index) => (
            <li key={index} className="shadow-card flex flex-col rounded-[var(--radius-card)] bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-star flex" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="star" size={16} />
                  ))}
                </span>
                {SHOW_EXAMPLE_BADGE && (
                  <span className="bg-sky-soft text-brand-deep rounded-full px-2.5 py-0.5 text-xs font-bold">
                    {common.exampleBadge}
                  </span>
                )}
              </div>
              <blockquote className="mt-4 flex-1">“{item.quote}”</blockquote>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="bg-navy grid size-10 place-items-center rounded-full text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {initials(item.name)}
                </span>
                <span className="leading-tight">
                  <span className="block font-bold">{item.name}</span>
                  <span className="text-ink-soft block text-xs">{item.city}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>

        {rating && (
          <p className="shadow-card mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold">
            <span>Google</span>
            <span aria-hidden="true">·</span>
            <span className="text-star flex" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={15} />
              ))}
            </span>
            {rating.score.toFixed(1)} {testimonials.ratingSummary}
          </p>
        )}
      </div>
    </section>
  );
}
