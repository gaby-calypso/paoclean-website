"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { BUSINESS } from "@/lib/business";
import SocialLinks from "@/components/SocialLinks";

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${BUSINESS.name}`,
    `ORG:${BUSINESS.name}`,
    `TEL;TYPE=CELL:+${BUSINESS.phoneE164}`,
    `EMAIL:${BUSINESS.email}`,
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "paoclean.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function Contact() {
  const { t, whatsappUrl } = useLanguage();
  const { showToast } = useToast();

  const handleSave = () => {
    downloadVCard();
    showToast(t("vcard.saved"));
  };

  const handleShare = async () => {
    const shareData = { title: t("share.title"), url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // el usuario canceló, no hacer nada
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        showToast(t("share.copied"));
      } catch {
        showToast(shareData.url);
      }
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-inner">
        <p className="eyebrow eyebrow-light">{t("contact.eyebrow")}</p>
        <h2>{t("contact.title")}</h2>
        <p className="contact-sub">{t("contact.subtitle")}</p>

        <div className="contact-actions">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            {t("contact.cta_whatsapp")}
          </a>
          <a href={`tel:+${BUSINESS.phoneE164}`} className="btn btn-outline-light btn-lg">
            {BUSINESS.phoneDisplay}
          </a>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-label">{t("contact.email_label")}</span>
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          </div>
          <div className="contact-detail">
            <span className="contact-label">{t("contact.zone_label")}</span>
            <span>{t("contact.zone_value")}</span>
          </div>
          <div className="contact-detail">
            <span className="contact-label">{t("contact.hours_label")}</span>
            <span>{t("contact.hours_value")}</span>
          </div>
        </div>

        <div className="contact-utility">
          <button className="link-btn" onClick={handleSave}>{t("contact.save")}</button>
          <button className="link-btn" onClick={handleShare}>{t("contact.share")}</button>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}