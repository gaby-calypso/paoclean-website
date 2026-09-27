"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="trust-strip">
      <div className="trust-item">
        <strong>{t("trust.years_n")}</strong>
        <span>{t("trust.years_label")}</span>
      </div>
      <div className="trust-divider" aria-hidden="true"></div>
      <div className="trust-item">
        <strong>{t("trust.personal_n")}</strong>
        <span>{t("trust.personal_label")}</span>
      </div>
      <div className="trust-divider" aria-hidden="true"></div>
      {/* PENDIENTE: confirmar si está asegurada/bonded; si no, quitar este bloque */}
      <div className="trust-item">
        <strong>{t("trust.insured_n")}</strong>
        <span>{t("trust.insured_label")}</span>
      </div>
    </section>
  );
}
