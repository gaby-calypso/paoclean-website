"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { n: "01", title: t("process.step1.title"), body: t("process.step1.body") },
    { n: "02", title: t("process.step2.title"), body: t("process.step2.body") },
    { n: "03", title: t("process.step3.title"), body: t("process.step3.body") },
  ];

  return (
    <section className="process">
      <p className="eyebrow">{t("process.eyebrow")}</p>
      <h2>{t("process.title")}</h2>

      <ol className="process-steps">
        {steps.map((step) => (
          <li key={step.n}>
            <span className="step-n">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}