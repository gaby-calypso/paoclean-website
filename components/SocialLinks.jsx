"use client";

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

const LABELS = {
  instagram: "Instagram",
  facebook: "Facebook",
  google: "Google Business",
};

export default function SocialLinks() {
  const items = Object.entries(SOCIALS).filter(function (entry) {
    var href = entry[1];
    return href && href !== "#";
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="social-icons">
      {items.map(function (entry) {
        var key = entry[0];
        var href = entry[1];
        return <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={LABELS[key] || key} className="social-icon-btn">{ICONS[key]}</a>;
      })}
    </div>
  );
}