"use client";

import { useRef } from "react";

import { buttonClasses } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

type BookingDialogProps = {
  url: string;
  buttonLabel: string;
  title: string;
  closeLabel: string;
};

/**
 * Agenda en línea (Calendly, Cal.com, etc.) dentro de una ventana.
 * Solo aparece cuando hay un enlace de agenda en site.config.ts.
 */
export function BookingDialog({ url, buttonLabel, title, closeLabel }: BookingDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={buttonClasses("outline", "lg", "mt-8 w-full sm:w-auto")}
      >
        <Icon name="calendar" size={20} />
        {buttonLabel}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={title}
        className="m-auto h-[min(90dvh,760px)] w-[min(94vw,900px)] max-w-none overflow-hidden rounded-[var(--radius-card)] p-0 backdrop:bg-black/60"
        onClick={(event) => {
          // Clic fuera del contenido (sobre el fondo) cierra la ventana.
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="flex h-full flex-col">
          <div className="border-line flex items-center justify-between border-b px-5 py-3">
            <p className="font-bold">{title}</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={closeLabel}
              className="hover:bg-surface grid size-11 place-items-center rounded-full"
            >
              <Icon name="close" size={22} />
            </button>
          </div>
          <iframe src={url} title={title} loading="lazy" className="w-full flex-1 border-0" />
        </div>
      </dialog>
    </>
  );
}
