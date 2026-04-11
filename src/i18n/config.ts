export const SITE_URL = "https://radioterapeut.ro";

export const DEFAULT_LOCALE = "ro";

export const SUPPORTED_LOCALES = ["ro", "en", "uk"] as const;

export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<SiteLocale, string> = {
  ro: "Română",
  en: "English",
  uk: "Українська",
};

export const LOCALE_HREFLANG: Record<SiteLocale, string> = {
  ro: "ro",
  en: "en",
  uk: "uk",
};

export const LOCALE_LABELS_BY_UI_LOCALE: Record<
  SiteLocale,
  Record<SiteLocale, string>
> = {
  ro: {
    ro: "Română",
    en: "Engleză",
    uk: "Ucraineană",
  },
  en: {
    ro: "Romanian",
    en: "English",
    uk: "Ukrainian",
  },
  uk: {
    ro: "Румунська",
    en: "Англійська",
    uk: "Українська",
  },
};