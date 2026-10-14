import type { StaticImageData } from "next/image";

import equipoLobby from "@/public/images/equipo-lobby.jpg";
import generalAntes from "@/public/images/general-antes.jpg";
import generalDespues from "@/public/images/general-despues.jpg";
import localesAntes from "@/public/images/locales-antes.jpg";
import localesDespues from "@/public/images/locales-despues.jpg";
import mudanzaAntes from "@/public/images/mudanza-antes.jpg";
import mudanzaDespues from "@/public/images/mudanza-despues.jpg";
import oficinasAntes from "@/public/images/oficinas-antes.jpg";
import oficinasDespues from "@/public/images/oficinas-despues.jpg";
import paoMarmol from "@/public/images/pao-marmol.jpg";
import postconstruccionAntes from "@/public/images/postconstruccion-antes.jpg";
import postconstruccionDespues from "@/public/images/postconstruccion-despues.jpg";
import residencialAntes from "@/public/images/residencial-antes.jpg";
import residencialDespues from "@/public/images/residencial-despues.jpg";
import terrazasAntes from "@/public/images/terrazas-antes.jpg";
import terrazasDespues from "@/public/images/terrazas-despues.jpg";

/**
 * Catálogo de imágenes. El contenido se refiere a ellas por clave.
 * PENDIENTE: salvo "pao-marmol", son ilustraciones de vista previa; reemplazar
 * los archivos de public/images por fotos reales conservando los nombres.
 */
export const images = {
  "equipo-lobby": equipoLobby,
  "pao-marmol": paoMarmol,
  "general-antes": generalAntes,
  "general-despues": generalDespues,
  "locales-antes": localesAntes,
  "locales-despues": localesDespues,
  "mudanza-antes": mudanzaAntes,
  "mudanza-despues": mudanzaDespues,
  "oficinas-antes": oficinasAntes,
  "oficinas-despues": oficinasDespues,
  "postconstruccion-antes": postconstruccionAntes,
  "postconstruccion-despues": postconstruccionDespues,
  "residencial-antes": residencialAntes,
  "residencial-despues": residencialDespues,
  "terrazas-antes": terrazasAntes,
  "terrazas-despues": terrazasDespues,
} satisfies Record<string, StaticImageData>;

export type ImageKey = keyof typeof images;

/** Pares antes/después disponibles para los comparadores. */
export const beforeAfterPairs = {
  general: { before: "general-antes", after: "general-despues" },
  locales: { before: "locales-antes", after: "locales-despues" },
  mudanza: { before: "mudanza-antes", after: "mudanza-despues" },
  oficinas: { before: "oficinas-antes", after: "oficinas-despues" },
  postconstruccion: { before: "postconstruccion-antes", after: "postconstruccion-despues" },
  residencial: { before: "residencial-antes", after: "residencial-despues" },
  terrazas: { before: "terrazas-antes", after: "terrazas-despues" },
} satisfies Record<string, { before: ImageKey; after: ImageKey }>;

export type PairKey = keyof typeof beforeAfterPairs;

export function getPair(key: PairKey): { before: StaticImageData; after: StaticImageData } {
  const pair = beforeAfterPairs[key];
  return { before: images[pair.before], after: images[pair.after] };
}
