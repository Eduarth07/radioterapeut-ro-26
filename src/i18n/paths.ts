import {
  DEFAULT_LOCALE,
  SITE_URL,
  SUPPORTED_LOCALES,
  type SiteLocale,
} from "./config";

export function normalizePath(path = "/") {
  if (!path || path === "/") return "/";
  // Ne asigurăm că există un singur slash la început
  let clean = path.startsWith("/") ? path : `/${path}`;
  // Forțăm slash-ul la final pentru a se potrivi cu "directory"
  if (!clean.endsWith("/")) clean += "/";
  return clean;
}

export function getLocalePath(locale: SiteLocale, path = "/") {
  const normalized = normalizePath(path);

  if (locale === DEFAULT_LOCALE) {
    return normalized; // ex: /articole/
  }

  if (normalized === "/") {
    return `/${locale}/`; // ex: /en/
  }

  return `/${locale}${normalized}`; // ex: /en/articole/
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