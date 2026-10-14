"use client";

import Image, { type StaticImageData } from "next/image";
import { useId, useState } from "react";

type BeforeAfterProps = {
  before: StaticImageData;
  after: StaticImageData;
  altBefore: string;
  altAfter: string;
  labelBefore: string;
  labelAfter: string;
  sliderLabel: string;
  sizes: string;
  /** Clase de proporción, p. ej. "aspect-[4/5]". */
  aspect?: string;
};

/**
 * Comparador antes/después. Usa un control deslizante nativo, así que funciona
 * con mouse, toque y teclado (flechas) y lo anuncian los lectores de pantalla.
 */
export function BeforeAfter({
  before,
  after,
  altBefore,
  altAfter,
  labelBefore,
  labelAfter,
  sliderLabel,
  sizes,
  aspect = "aspect-[4/5]",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <div
      className={`shadow-float relative overflow-hidden rounded-[var(--radius-card)] bg-slate-200 select-none ${aspect}`}
    >
      <Image src={after} alt={altAfter} placeholder="blur" fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={altBefore} placeholder="blur" fill sizes={sizes} className="object-cover" />
      </div>

      <span className="bg-navy/85 pointer-events-none absolute top-3 left-3 rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-wider text-white uppercase">
        {labelBefore}
      </span>
      <span className="bg-brand pointer-events-none absolute top-3 right-3 rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-wider text-white uppercase">
        {labelAfter}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="text-navy absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" stroke="none">
            <path d="M9 7l-5 5 5 5zM15 7l5 5-5 5z" />
          </svg>
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        {sliderLabel}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-valuetext={`${position}%`}
        className="peer absolute inset-0 size-full cursor-ew-resize opacity-0"
      />
      <span
        className="ring-brand pointer-events-none absolute inset-0 rounded-[var(--radius-card)] ring-offset-2 peer-focus-visible:ring-4"
        aria-hidden="true"
      />
    </div>
  );
}
