import {
  DEFAULT_LOCALE,
  SITE_URL,
  SUPPORTED_LOCALES,
  type SiteLocale,
} from "./config";

export function normalizePath(path = "/") {
  if (!path) return "/";

  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean === "/" ? "/" : clean.replace(/\/+$/, "");
}

export function getLocalePath(locale: SiteLocale, path = "/") {
  const normalized = normalizePath(path);

  if (locale === DEFAULT_LOCALE) {
    return normalized === "/" ? "/" : `${normalized}/`;
  }

  if (normalized === "/") {
    return `/${locale}/`;
  }

  return `/${locale}${normalized}/`;
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