"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="brand brand-footer">{BUSINESS.name}</span>
        <p>{t("footer.tagline")}</p>
        <p className="footer-copy">
          © {year} {BUSINESS.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
