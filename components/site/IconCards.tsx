import { Icon, isIconName } from "@/components/ui/Icon";

type IconCardsProps = {
  items: { icon: string; title: string; body: string }[];
};

/** Cuatro tarjetas blancas con ícono; al pasar el cursor aparece una línea de color arriba. */
export function IconCards({ items }: IconCardsProps) {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.title}
          className="group shadow-card relative overflow-hidden rounded-[var(--radius-card)] bg-white p-6 transition duration-300 hover:-translate-y-1"
        >
          <span
            aria-hidden="true"
            className="from-sky to-gold absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100"
          />
          <span className="bg-sky-soft text-brand grid size-11 place-items-center rounded-xl">
            <Icon name={isIconName(item.icon) ? item.icon : "sparkle"} size={22} />
          </span>
          <h3 className="mt-5 text-lg leading-snug">{item.title}</h3>
          <p className="text-ink-soft mt-2 text-[0.95rem]">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
