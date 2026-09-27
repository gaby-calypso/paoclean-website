"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { isOpenNow } from "@/lib/business";

export default function Hero() {
  const { t, whatsappUrl } = useLanguage();
  // null = todavía no sabemos (evita desajuste de hidratación con la hora del servidor)
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
        <div className="hero-photo-wrap">
          {/* PENDIENTE: reemplazar por <img> real de Pao trabajando o un espacio recién limpiado */}
          <div className="photo-placeholder" data-label={t("hero.photo_alt")}>
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M4 20h16M7 20V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11M9 7V4h6v3" />
            </svg>
          </div>
          <div className="hero-wipe" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
