"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS } from "@/lib/business";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div>
            <span className="brand brand-footer">{BUSINESS.name}</span>
            <p>{t("footer.tagline")}</p>
          </div>
          <div className="footer-social">
            <span className="contact-label">{t("footer.follow")}</span>
            <SocialLinks />
          </div>
        </div>
        <p className="footer-copy">
          © {year} {BUSINESS.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}