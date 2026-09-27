"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PortraitAvatar } from "@/components/Illustrations";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="sobre-pao">
      <div className="about-inner">
        <div className="about-media">
          {/* PENDIENTE: reemplazar por <img> real (retrato de Pao) */}
          <div className="photo-placeholder photo-placeholder--portrait" data-label={t("about.photo_alt")}>
            <PortraitAvatar />
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