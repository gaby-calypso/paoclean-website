"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { resultsGallery } from "@/lib/results";
import { SOCIALS } from "@/lib/business";

const AUTO_ADVANCE_MS = 4500;

export default function Results() {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const len = resultsGallery.length;

  useEffect(() => {
    timerRef.current = setInterval(function () {
      setIndex(function (i) { return (i + 1) % len; });
    }, AUTO_ADVANCE_MS);
    return function () { clearInterval(timerRef.current); };
  }, [len]);

  const goTo = (i) => {
    setIndex(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(function () {
      setIndex(function (p) { return (p + 1) % len; });
    }, AUTO_ADVANCE_MS);
  };

  return (
    <section className="results" id="resultados">
      <p className="eyebrow">{t("results.eyebrow")}</p>
      <h2>{t("results.title")}</h2>
      <p className="results-sub">{t("results.subtitle")}</p>

      <div className="results-carousel">
        <div className="results-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {resultsGallery.map(function (item) {
            return (
              <div className="results-slide" key={item.key}>
                <img src={item.image} alt={item[lang]} className="results-slide-img" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="results-dots">
        {resultsGallery.map(function (item, i) {
          return <button key={item.key} className={`dot${i === index ? " active" : ""}`} aria-label={item[lang]} onClick={function () { goTo(i); }} />;
        })}
      </div>

      <p className="results-disclaimer">{t("results.disclaimer")}</p>

      <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="results-instagram">{t("results.instagram_cta")}</a>
    </section>
  );
}