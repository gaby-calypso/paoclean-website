"use client";

import { useLanguage } from "@/context/LanguageContext";
import { faqList } from "@/lib/translations";

export default function Faq() {
  const { t, lang } = useLanguage();

  return (
    <section className="faq" id="faq">
      <p className="eyebrow">{t("faq.eyebrow")}</p>
      <h2>{t("faq.title")}</h2>
      <div className="faq-list">
        {faqList[lang].map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}