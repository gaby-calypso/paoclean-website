"use client";

import { useLanguage } from "@/context/LanguageContext";
import SocialLinks from "@/components/SocialLinks";

export default function Social() {
  const { t } = useLanguage();

  return (
    <section className="social-section" id="redes">
      <div className="social-copy">
        <p className="eyebrow">{t("social.eyebrow")}</p>
        <h2>{t("social.title")}</h2>
        <p>{t("social.subtitle")}</p>
      </div>
      <SocialLinks variant="rows" />
    </section>
  );
}