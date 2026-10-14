import { cacheLife } from "next/cache";

/** Año actual para el pie de página; se recalcula una vez al día. */
export async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
