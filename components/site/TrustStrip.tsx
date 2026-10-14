import { Icon, type IconName } from "@/components/ui/Icon";

const ICONS: IconName[] = ["shield", "star", "bolt", "clock"];

/** Franja oscura bajo la portada con cuatro puntos de confianza. */
export function TrustStrip({ items }: { items: string[] }) {
  return (
    <div className="bg-navy-deep border-t border-white/5 text-white">
      <ul className="container-page grid grid-cols-1 gap-x-6 gap-y-3 py-4 text-sm font-semibold sm:grid-cols-2 lg:flex lg:justify-center lg:gap-8">
        {items.map((item, index) => (
          <li key={item} className="flex items-center gap-2.5">
            <Icon name={ICONS[index] ?? "check"} size={17} className="text-gold shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
