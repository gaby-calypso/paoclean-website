"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "@/lib/translations";
import { buildWhatsappUrl } from "@/lib/business";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? key,
    [lang]
  );

  const whatsappUrl = buildWhatsappUrl(lang);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, whatsappUrl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de un <LanguageProvider>");
  }
  return ctx;
}
