"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SOCIALS } from "@/lib/business";

const ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v6H14v-6h2.3l.7-3h-3v-1.5c0-.6.4-1 1-1z" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 12h7.5c.08.5.13 1 .13 1.6 0 4.6-3.1 7.9-7.6 7.9A8.5 8.5 0 1 1 15.9 6l-2.4 2.3A5.2 5.2 0 0 0 12 7.5 5.5 5.5 0 1 0 17.4 13H12v-1z" />
    </svg>
  ),
};

export default function SocialLinks(props) {
  var variant = props.variant || "rows";
  var t = useLanguage().t;

  var items = [
    { key: "instagram", href: SOCIALS.instagram, title: t("social.instagram"), sub: t("social.instagram_sub") },
    { key: "facebook", href: SOCIALS.facebook, title: t("social.facebook"), sub: t("social.facebook_sub") },
    { key: "google", href: SOCIALS.google, title: t("social.google"), sub: t("social.google_sub") },
  ];

  if (variant === "icons") {
    return (
      <div className="social-icons">
        {items.map(function (item) {
          return (
            <a key={item.key} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.title} className="social-icon-btn">
              {ICONS[item.key]}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <ul className="social-rows">
      {items.map(function (item) {
        return (
          <li key={item.key}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="social-row">
              <span className="social-row-icon">{ICONS[item.key]}</span>
              <span className="social-row-text">
                <strong>{item.title}</strong>
                <span>{item.sub}</span>
              </span>
              <span className="social-row-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}