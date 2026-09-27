"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="sobre-pao">
      <div className="about-media">
        {/* PENDIENTE: reemplazar por <img> real (retrato de Pao) */}
        <div className="photo-placeholder photo-placeholder--portrait" data-label={t("about.photo_alt")}>
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="12" cy="8" r="3.2" />
            <path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" />
          </svg>
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">{t("about.eyebrow")}</p>
        <h2>{t("about.title")}</h2>
        <p>{t("about.body1")}</p>
        <p>{t("about.body2")}</p>
      </div>
    </section>
  );
}
