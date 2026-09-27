"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="sobre-pao">
      <div className="about-inner">
        <div className="about-media">
          <div className="about-photo-frame">
            <img src="/pao-marble.jpg" alt={t("about.photo_alt")} className="real-photo" />
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2>{t("about.title")}</h2>
          <p>{t("about.body1")}</p>
          <p>{t("about.body2")}</p>
        </div>
      </div>
    </section>
  );
}