"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS } from "@/lib/business";

export default function MobileBar() {
  const { t, whatsappUrl } = useLanguage();

  return (
    <div className="mobile-bar">
      <a href={`tel:+${BUSINESS.phoneE164}`} className="btn btn-outline">{t("mobilebar.call")}</a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t("mobilebar.quote")}</a>
    </div>
  );
}