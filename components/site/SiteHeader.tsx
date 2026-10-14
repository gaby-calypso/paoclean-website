import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { hreflang, localePath, otherLocale, type Dictionary } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/links";
import { siteConfig, type Locale } from "@/site.config";

type SiteHeaderProps = {
  dict: Dictionary;
  locale: Locale;
  /** Ruta equivalente en el otro idioma. */
  alternateHref: string;
  /** El menú de secciones solo aparece en la página de inicio, como en la referencia. */
  showNav?: boolean;
  whatsappMessage?: string;
};

export function SiteHeader({
  dict,
  locale,
  alternateHref,
  showNav = false,
  whatsappMessage,
}: SiteHeaderProps) {
  const alt = otherLocale(locale);
  const navItems = [
    { href: "#servicios", label: dict.header.nav.services },
    { href: "#nosotros", label: dict.header.nav.about },
    { href: "#cobertura", label: dict.header.nav.coverage },
    { href: "#contacto", label: dict.header.nav.contact },
  ];
  const message = whatsappMessage ?? dict.common.whatsappMessage;

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_rgb(15_42_71/0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-3">
        <a href={localePath(locale)} aria-label={dict.header.home} className="min-w-0 rounded-lg">
          <Logo tagline={dict.header.tagline} />
        </a>

        {showNav && (
          <nav aria-label={dict.header.menu} className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.95rem] font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-brand transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href={telHref} className="group hidden items-center gap-2.5 md:flex">
            <span className="bg-navy grid size-10 place-items-center rounded-full text-white transition-transform group-hover:scale-105">
              <Icon name="phone" size={18} />
            </span>
            <span className="leading-tight">
              <span className="text-brand block text-[0.65rem] font-bold tracking-[0.14em] uppercase">
                {dict.common.callLabel}
              </span>
              <span className="block font-extrabold whitespace-nowrap">
                {siteConfig.contact.phoneDisplay}
              </span>
            </span>
          </a>
          {/* En celular este botón vive en la barra inferior fija. */}
          <span className="hidden md:block">
            <ButtonLink href={whatsappHref(message)} variant="whatsapp" icon="whatsapp" external>
              {dict.common.whatsapp}
            </ButtonLink>
          </span>
          <LanguageSwitcher
            href={alternateHref}
            hrefLang={hreflang[alt]}
            label={dict.common.switchLanguage}
            shortLabel={dict.common.switchLanguageShort}
          />
          {showNav && (
            <MobileNav items={navItems} openLabel={dict.header.menu} closeLabel={dict.header.closeMenu} />
          )}
        </div>
      </div>
      <div
        className="scroll-progress from-sky via-brand to-gold absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r"
        aria-hidden="true"
      />
    </header>
  );
}
