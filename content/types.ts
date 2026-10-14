import type { IconName } from "@/components/ui/Icon";
import type { ImageKey, PairKey } from "@/lib/images";

export type ServiceId = "residencial" | "profunda" | "oficinas" | "postconstruccion" | "mudanza";

export type Photo = { image: ImageKey; alt: string };

export type ComparePair = { pair: PairKey; label: string; altBefore: string; altAfter: string };

type BlockBase = { id: string; eyebrow: string; title: string; intro: string };

/**
 * Bloques de fotos de cada página de servicio. Cada servicio elige los suyos,
 * igual que en la referencia (antes/después, fotos en acción, "también limpiamos").
 */
export type MediaBlock =
  | (BlockBase & {
      type: "compare";
      items: ComparePair[];
      hint: string;
      cta?: string;
    })
  | (BlockBase & {
      type: "photos";
      photos: Photo[];
      cta: string;
    })
  | (BlockBase & {
      type: "compareAndPhoto";
      compare: ComparePair;
      photo: Photo;
      photoBadge: string;
      hint: string;
      cta: string;
    })
  | (BlockBase & {
      type: "video";
      embedUrl: string;
      caption: string;
    });

export type IconCard = { icon: IconName; title: string; body: string };

export type ServiceContent = {
  id: ServiceId;
  slug: string;
  /** Nombre corto para menús, pie de página y formulario. */
  name: string;
  card: { tag: string; body: string; image: ImageKey };
  meta: { title: string; description: string };
  hero: {
    titleBefore: string;
    highlight: string;
    titleAfter: string;
    intro: string;
    chips: string[];
    image: ImageKey;
    imageAlt: string;
  };
  /** Tercer punto de la franja de confianza, propio de cada servicio. */
  trustHighlight: string;
  gallery: { title: string; intro: string; photos: Photo[] };
  blocks: MediaBlock[];
  why: { title: string; intro: string; items: IconCard[] };
  detail: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    image: ImageKey;
    imageAlt: string;
  };
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  finalCta: { title: string; body: string };
  whatsappMessage: string;
};
