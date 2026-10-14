import { Logo } from "@/components/Logo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getServices, servicePath } from "@/content/services";
import { localePath, type Dictionary } from "@/lib/i18n";
import { mailHref, telHref, whatsappHref } from "@/lib/links";
import { siteConfig, type Locale } from "@/site.config";

const SOCIAL: Record<keyof typeof siteConfig.social, { label: string; icon: IconName }> = {
  instagram: { label: "Instagram", icon: "instagram" },
  facebook: { label: "Facebook", icon: "facebook" },
  google: { label: "Google", icon: "google" },
};

export function SiteFooter({ dict, locale, year }: { dict: Dictionary; locale: Locale; year: number }) {
  const { footer, contact, common } = dict;
  const services = getServices(locale);
  const socials = (Object.keys(siteConfig.social) as (keyof typeof siteConfig.social)[]).filter(
    (key) => siteConfig.social[key],
  );

  return (
    <footer className="bg-navy-darkest pt-14 pb-28 text-sm text-white/70 md:pb-10">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo tagline={`${dict.header.tagline}, FL`} tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed">{footer.about}</p>
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-2" aria-label={footer.followTitle}>
                {socials.map((key) => (
                  <li key={key}>
                    <a
                      href={siteConfig.social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={SOCIAL[key].label}
                      className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <Icon name={SOCIAL[key].icon} size={19} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-labelledby="pie-servicios">
            <h2 id="pie-servicios" className="text-base font-bold text-white">
              {footer.servicesTitle}
            </h2>
            <ul className="mt-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={servicePath(locale, service.id)}
                    className="inline-flex min-h-10 items-center transition-colors hover:text-white"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-bold text-white">{footer.contactTitle}</h2>
            <ul className="mt-3">
              <FooterLink icon="phone" href={telHref}>
                {siteConfig.contact.phoneDisplay}
              </FooterLink>
              <FooterLink icon="whatsapp" href={whatsappHref(common.whatsappMessage)} external>
                {contact.whatsappDirect}
              </FooterLink>
              <FooterLink icon="mail" href={mailHref}>
                {siteConfig.contact.email}
              </FooterLink>
              <li className="flex min-h-10 items-center gap-2.5">
                <Icon name="pin" size={17} className="text-sky shrink-0" />
                {contact.locationValue}
              </li>
              <li className="flex min-h-10 items-center gap-2.5">
                <Icon name="clock" size={17} className="text-sky shrink-0" />
                {contact.hoursValue}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name} · {footer.rights} · Miami, FL
          </p>
          <a href={localePath(locale, "/privacidad")} className="transition-colors hover:text-white">
            {footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  icon,
  href,
  external = false,
  children,
}: {
  icon: IconName;
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex min-h-10 items-center gap-2.5 break-all transition-colors hover:text-white"
      >
        <Icon name={icon} size={17} className="text-sky shrink-0" />
        {children}
      </a>
    </li>
  );
}
