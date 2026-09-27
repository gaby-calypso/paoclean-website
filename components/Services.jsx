"use client";

import { useLanguage } from "@/context/LanguageContext";
import { servicesList } from "@/lib/translations";

export default function Services() {
  const { t, lang, whatsappUrl } = useLanguage();
  const services = servicesList[lang];

  return (
    <section className="services" id="servicios">
      <p className="eyebrow">{t("services.eyebrow")}</p>
      <h2>{t("services.title")}</h2>

      <ul className="service-list">
        {services.map((service) => (
          <li className="service-row" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              {t("services.cta")}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
