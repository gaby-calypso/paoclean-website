import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

/** Encabezado de sección: etiqueta con línea, título y texto introductorio. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase ${
            light ? "text-sky" : "text-brand"
          }`}
        >
          <span className="h-px w-5 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`h2-section ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {intro && <p className={`mt-3 ${light ? "text-white/75" : "text-ink-soft"}`}>{intro}</p>}
    </div>
  );
}
