import type { MetadataRoute } from "next";

import { getServices, servicePath } from "@/content/services";
import { locales, siteConfig } from "@/site.config";

function entry(paths: Record<string, string>, path: string, priority: number): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: Object.fromEntries(Object.entries(paths).map(([l, p]) => [l, `${siteConfig.url}${p}`])),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = Object.fromEntries(locales.map((l) => [l, `/${l}`]));
  const privacy = Object.fromEntries(locales.map((l) => [l, `/${l}/privacidad`]));

  const services = getServices(siteConfig.defaultLocale).flatMap((service) => {
    const paths = Object.fromEntries(locales.map((l) => [l, servicePath(l, service.id)]));
    return locales.map((l) => entry(paths, servicePath(l, service.id), 0.9));
  });

  return [
    ...locales.map((l) => entry(home, `/${l}`, 1)),
    ...services,
    ...locales.map((l) => entry(privacy, `/${l}/privacidad`, 0.2)),
  ];
}
