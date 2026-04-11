import type { SiteLocale } from "../i18n/config";
import { getLocalePath } from "../i18n/paths";

type NavLink = {
  label: string;
  href: string;
};

const navLabels: Record<
  SiteLocale,
  {
    home: string;
    services: string;
    about: string;
    articles: string;
  }
> = {
  ro: {
    home: "Acasă",
    services: "Servicii",
    about: "Despre",
    articles: "Articole",
  },
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    articles: "Articles",
  },
  uk: {
    home: "Головна",
    services: "Послуги",
    about: "Про мене",
    articles: "Статті",
  },
};

const headerUiLabels: Record<
  SiteLocale,
  {
    title: string;
    subtitle: string;
    contact: string;
    appointment: string;
    themeToggle: string;
    navigationToggle: string;
    homeAriaLabel: string;
  }
> = {
  ro: {
    title: "Dr. Tatiana Cirimpei",
    subtitle: "Radioterapie",
    contact: "Contact",
    appointment: "Programează-te",
    themeToggle: "Comută tema (dark/light)",
    navigationToggle: "Comută navigația site-ului",
    homeAriaLabel: "Acasă",
  },
  en: {
    title: "Dr. Tatiana Cirimpei",
    subtitle: "Radiotherapy",
    contact: "Contact",
    appointment: "Appointment",
    themeToggle: "Toggle theme (dark/light)",
    navigationToggle: "Toggle site navigation",
    homeAriaLabel: "Home",
  },
  uk: {
    title: "Др. Тетяна Чирімпей",
    subtitle: "Радіотерапія",
    contact: "Контакт",
    appointment: "Записатися",
    themeToggle: "Змінити тему (dark/light)",
    navigationToggle: "Відкрити навігацію сайту",
    homeAriaLabel: "Головна",
  },
};

function withHash(baseHref: string, hash: string) {
  return `${baseHref}#${hash}`;
}

export function getNavLinks(locale: SiteLocale): NavLink[] {
  const labels = navLabels[locale];
  const homeHref = getLocalePath(locale, "/");

  return [
    { label: labels.home, href: homeHref },
    { label: labels.services, href: withHash(homeHref, "servicii") },
    { label: labels.about, href: withHash(homeHref, "despre") },
    { label: labels.articles, href: getLocalePath(locale, "/articole") },
  ];
}

export function getHeaderUi(locale: SiteLocale) {
  const labels = headerUiLabels[locale];
  const homeHref = getLocalePath(locale, "/");

  return {
    ...labels,
    homeHref,
    contactHref: withHash(homeHref, "contact"),
    appointmentHref: withHash(homeHref, "programare"),
  };
}