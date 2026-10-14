import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n";

/** Preguntas en tarjetas separadas. Usa <details>: funciona con teclado y sin JavaScript. */
export function FaqList({ dict, items }: { dict: Dictionary; items: { q: string; a: string }[] }) {
  return (
    <section aria-labelledby="preguntas-title" className="section-y">
      <div className="container-page">
        <SectionHeading id="preguntas-title" eyebrow={dict.faq.eyebrow} title={dict.faq.title} />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {items.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group border-line rounded-2xl border bg-white px-5 shadow-[0_6px_20px_-14px_rgb(15_42_71/0.35)]"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="bg-sky-soft text-brand grid size-7 shrink-0 place-items-center rounded-full transition-transform duration-200 group-open:rotate-45">
                  <Icon name="plus" size={16} strokeWidth={2.4} />
                </span>
              </summary>
              <p className="text-ink-soft pb-5">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
