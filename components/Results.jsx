"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BeforeScene, AfterScene } from "@/components/Illustrations";

export default function Results() {
  const { t } = useLanguage();
  const sliderRef = useRef(null);
  const [pct, setPct] = useState(50);
  const draggingRef = useRef(false);

  const setPositionFromClientX = useCallback((clientX) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setPct(p);
  }, []);

  const startDrag = (e) => {
    draggingRef.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setPositionFromClientX(x);
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPositionFromClientX(x);
    };
    const onUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [setPositionFromClientX]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 5));
  };

  return (
    <section className="results" id="resultados">
      <p className="eyebrow">{t("results.eyebrow")}</p>
      <h2>{t("results.title")}</h2>
      <p className="results-sub">{t("results.subtitle")}</p>

      <div
        className="ba-slider"
        ref={sliderRef}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div className="ba-side ba-after" data-label={t("results.after_alt")}>
          <AfterScene />
        </div>
        <div
          className="ba-side ba-before"
          data-label={t("results.before_alt")}
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <BeforeScene />
        </div>
        <div
          className="ba-handle"
          style={{ left: `${pct}%` }}
          role="slider"
          aria-label="Comparar antes y después"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          onKeyDown={onKeyDown}
        >
          <span className="ba-handle-grip"></span>
        </div>
        <span className="ba-tag ba-tag-before">{t("results.before")}</span>
        <span className="ba-tag ba-tag-after">{t("results.after")}</span>
      </div>
    </section>
  );
}