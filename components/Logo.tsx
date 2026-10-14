import { siteConfig } from "@/site.config";

/**
 * Logotipo provisional (insignia circular + nombre).
 * PENDIENTE: reemplazar por el logo oficial del cliente en /public/logo.svg.
 */
export function Logo({ tagline, tone = "dark" }: { tagline?: string; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="bg-brand grid size-10 shrink-0 place-items-center rounded-full text-white shadow-sm ring-2 ring-white"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 11.5L12 5l8 6.5" />
          <path d="M6.5 10v8.5h11V10" />
          <path
            d="M12 12.2l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block font-extrabold ${light ? "text-white" : "text-ink"}`}>{siteConfig.name}</span>
        {tagline && (
          <span className={`block truncate text-xs ${light ? "text-white/65" : "text-ink-soft"}`}>
            {tagline}
          </span>
        )}
      </span>
    </span>
  );
}
