import { buttonClasses } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import type { Dictionary } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/links";

/**
 * Accesos de contacto siempre visibles:
 * - en celular, barra inferior con Llamar y WhatsApp;
 * - en tablet y computadora, botón redondo flotante de WhatsApp, como en la referencia.
 */
export function ContactBars({ dict, whatsappMessage }: { dict: Dictionary; whatsappMessage: string }) {
  const waHref = whatsappHref(whatsappMessage);
  return (
    <>
      <div className="border-line fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
          <a href={telHref} className={buttonClasses("gold", "md", "w-full hover:translate-y-0")}>
            <Icon name="phone" size={19} />
            {dict.common.call}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("whatsapp", "md", "w-full hover:translate-y-0")}
          >
            <Icon name="whatsapp" size={19} />
            {dict.common.whatsapp}
          </a>
        </div>
      </div>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.common.floatingWhatsapp}
        className="bg-whatsapp hover:bg-whatsapp-deep fixed right-5 bottom-5 z-40 hidden size-14 place-items-center rounded-full text-white shadow-[0_12px_30px_-8px_rgb(15_125_59/0.7)] ring-4 ring-white transition hover:scale-105 md:grid"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </>
  );
}
