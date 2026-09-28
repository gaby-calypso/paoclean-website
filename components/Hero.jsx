"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { isOpenNow, RATING, BUSINESS } from "@/lib/business";

function Star() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" fill="currentColor">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L10 1.5z" />
    </svg>
  );
}

export default function Hero() {
  const { t, whatsappUrl } = useLanguage();
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const check = () => setOpen(isOpenNow());
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);

  const statusLabel =
    open === null ? t("status.checking") : open ? t("status.open") : t("status.closed");

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow-status" data-open={open === null ? undefined : String(open)}>
            <span className="status-dot"></span>
            <span>{statusLabel}</span>
          </p>

          <h1>{t("hero.title")}</h1>
          <p className="hero-sub">{t("hero.subtitle")}</p>

          <div className="hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{t("hero.cta_primary")}</a>
            <a href={`tel:+${BUSINESS.phoneE164}`} className="btn btn-outline-light btn-lg">{t("hero.cta_secondary")}</a>
          </div>
          <p className="hero-quote-link"><a href="#cotizar">{t("hero.quote_link")}</a></p>
          <p className="hero-microtrust">{t("hero.microtrust")}</p>
        </div>

        <div className="hero-media">
          <div className="hero-photo-frame">
            <img src="/team-hero.jpg" alt={t("hero.photo_alt")} className="real-photo" />
          </div>

          <div className="rating-badge">
            <span className="rating-badge-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
              </svg>
            </span>
            <div>
              <div className="rating-stars" aria-hidden="true">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="rating-text">{RATING.score} · {RATING.count} {t("hero.rating_reviews")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}