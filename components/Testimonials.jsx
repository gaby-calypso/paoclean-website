"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonialsList } from "@/lib/translations";

const AUTO_ADVANCE_MS = 6000;

function initialsFrom(author) {
  const cleaned = author.replace(/[—-]/g, "").trim();
  return cleaned.slice(0, 1).toUpperCase();
}

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const items = testimonialsList[lang];
  const current = items[index] || items[0];
  const timerRef = useRef(null);

  useEffect(() => {
    setIndex(0);
  }, [lang]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [items.length]);

  const goTo = (i) => {
    setIndex(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, AUTO_ADVANCE_MS);
  };

  return (
    <section className="testimonials" id="testimonios">
      <p className="eyebrow">{t("testimonials.eyebrow")}</p>
      <h2>{t("testimonials.title")}</h2>

      <div className="testimonial-spotlight" key={index}>
        <span className="testimonial-avatar">{initialsFrom(current.author)}</span>
        <blockquote>&ldquo;{current.quote}&rdquo;</blockquote>
        {current.author}
      </div>

      <div className="testimonial-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot${i === index ? " active" : ""}`}
            aria-label={`Testimonio ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}