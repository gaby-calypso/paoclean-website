"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS } from "@/lib/business";

export default function Header() {
  const { lang, toggleLang, t, whatsappUrl } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  const navItems = [
    { href: "#servicios", label: t("nav.services") },
    { href: "#sobre-pao", label: t("nav.about") },
    { href: "#resultados", label: t("nav.results") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <header className={`site-header${navOpen ? " nav-open" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="brand">
          {BUSINESS.name}
        </a>

        <nav className="main-nav pill-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeNav}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Cambiar idioma / Switch language">
            {lang === "es" ? "ES / EN" : "EN / ES"}
          </button>
          <a className="btn btn-ghost header-call" href={`tel:+${BUSINESS.phoneE164}`}>
            {t("nav.call")}
          </a>
          <a className="btn btn-primary header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {t("nav.quote")}
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}