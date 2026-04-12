import {
  DEFAULT_LOCALE,
  SITE_URL,
  SUPPORTED_LOCALES,
  type SiteLocale,
} from "./config";

export function normalizePath(path = "/") {
  if (!path || path === "/") return "/";
  // Elimină orice slash de la început și final, apoi pune unul singur la început
  const clean = path.replace(/^\/+|\/+$/g, "");
  return `/${clean}`;
}

export function getLocalePath(locale: SiteLocale, path = "/") {
  const normalized = normalizePath(path);

  if (locale === DEFAULT_LOCALE) {
    return normalized; // ex: /articole
  }

  if (normalized === "/") {
    return `/${locale}`; // ex: /en
  }

  return `/${locale}${normalized}`; // ex: /en/articole
}

export function getAbsoluteLocaleUrl(locale: SiteLocale, path = "/") {
  return new URL(getLocalePath(locale, path), SITE_URL).toString();
}

export function getAlternateLinks(path = "/") {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: getAbsoluteLocaleUrl(locale, path),
  }));
}