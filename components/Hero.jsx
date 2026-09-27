"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { isOpenNow } from "@/lib/business";
import { HeroScene, PortraitAvatar } from "@/components/Illustrations";

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
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              {t("hero.cta_primary")}
            </a>
            <a href="tel:+17869052246" className="btn btn-outline btn-lg">
              {t("hero.cta_secondary")}
            </a>
          </div>

          <p className="hero-microtrust">{t("hero.microtrust")}</p>
        </div>

        <div className="hero-media">
          <div className="photo-placeholder hero-photo" data-label={t("hero.photo_alt")}>
            <HeroScene />
          </div>

          <div className="profile-badge">
            <div className="profile-badge-photo">
              <div className="photo-placeholder photo-placeholder--avatar" data-label="">
                <PortraitAvatar />
              </div>
            </div>
            <div>
              <p className="profile-badge-name">{t("hero.card_name")} — {t("hero.card_role")}</p>
              <p className="profile-badge-check">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {t("hero.card_badge")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}