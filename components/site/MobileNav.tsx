"use client";

import { useEffect, useId, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";

type MobileNavProps = {
  items: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
};

/** Menú desplegable para pantallas chicas. Se cierra con Escape o al elegir una sección. */
export function MobileNav({ items, openLabel, closeLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
        className="border-line text-ink grid size-11 place-items-center rounded-full border"
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>
      <nav
        id={panelId}
        hidden={!open}
        aria-label={openLabel}
        className="border-line absolute inset-x-0 top-full border-t bg-white shadow-lg"
      >
        <ul className="container-page py-2">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-line flex min-h-12 items-center border-b text-lg font-semibold last:border-b-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
