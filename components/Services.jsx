"use client";

import { useLanguage } from "@/context/LanguageContext";
import { servicesList } from "@/lib/translations";

const ICONS = [
  <svg key="0" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 21c0-4 3-6 8-6s8 2 8 6M12 3v9M9 6l3-3 3 3" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 11 12 4l9 7M5 10v10h14V10" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 21V6l8-3 8 3v15M9 21v-5h6v5M9 9h.01M9 13h.01M15 9h.01M15 13h.01" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m14 7 3 3-8 8-4 1 1-4 8-8ZM17 4l3 3" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="8" width="13" height="10" rx="1" />
    <path d="M16 11h3l2 3v4h-5" />
    <circle cx="7.5" cy="18.5" r="1.5" />
    <circle cx="17.5" cy="18.5" r="1.5" />
  </svg>,
];

export default function Services() {
  var lang = useLanguage();
  var t = lang.t;
  var currentLang = lang.lang;
  var whatsappUrl = lang.whatsappUrl;
  var services = servicesList[currentLang];

  return (
    <section className="services" id="servicios">
      <p className="eyebrow">{t("services.eyebrow")}</p>
      <h2>{t("services.title")}</h2>

      <div className="service-grid">
        {services.map(function (service, i) {
          return (
            <a key={service.title} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="service-card">
              <span className="service-card-icon">{ICONS[i]}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <span className="service-card-cta">{t("services.cta")}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}