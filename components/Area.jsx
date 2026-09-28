"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AREAS } from "@/lib/business";

export default function Area() {
  const { t, whatsappUrl } = useLanguage();

  return (
    <section className="area" id="zona">
      <p className="eyebrow">{t("area.eyebrow")}</p>
      <h2>{t("area.title")}</h2>
      <p>{t("area.subtitle")}</p>
      <ul className="area-list">
        {AREAS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="area-link">{t("area.cta")}</a>
    </section>
  );
}