"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonialsList } from "@/lib/translations";

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const items = testimonialsList[lang];
  const current = items[index] || items[0];

  return (
    <section className="testimonials" id="testimonios">
      <p className="eyebrow">{t("testimonials.eyebrow")}</p>
      <h2>{t("testimonials.title")}</h2>

      {/* PENDIENTE: reemplazar por testimonios reales en lib/translations.js (testimonialsList) */}
      <div className="testimonial-spotlight">
        <blockquote>&ldquo;{current.quote}&rdquo;</blockquote>
        <cite>{current.author}</cite>
      </div>

      <div className="testimonial-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot${i === index ? " active" : ""}`}
            aria-label={`Testimonio ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
