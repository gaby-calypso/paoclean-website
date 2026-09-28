"use client";

import { useLanguage } from "@/context/LanguageContext";
import LeadForm from "@/components/LeadForm";

export default function Quote() {
  const { t } = useLanguage();

  return (
    <section className="quote-section" id="cotizar">
      <p className="eyebrow">{t("quote.eyebrow")}</p>
      <h2>{t("quote.title")}</h2>
      <p>{t("quote.subtitle")}</p>
      <LeadForm />
    </section>
  );
}