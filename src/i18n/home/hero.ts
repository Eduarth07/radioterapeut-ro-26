import type { SiteLocale } from "../config";

type HeroContent = {
  title: string;
  subtitle: string;
  description: string;
  contactCta: string;
  contactAriaLabel: string;
  servicesCta: string;
  affiliationsLabel: string;
};

export const heroContent: Record<SiteLocale, HeroContent> = {
  ro: {
    title: "Dr. Tatiana Cirimpei",
    subtitle: "Medic radioterapeut",
    description:
      "Consultații medicale și tratamente de radioterapie personalizate, realizate conform celor mai noi ghiduri și protocoale internaționale, susținute de expertiză acumulată în Franța și competență în tehnici avansate precum radioterapia stereotactică.",
    contactCta: "Formular de contact",
    contactAriaLabel: "Formular de contact Dr. Tatiana Cirimpei",
    servicesCta: "Servicii medicale",
    affiliationsLabel: "Afilieri profesionale",
  },
  en: {
    title: "Dr. Tatiana Cirimpei",
    subtitle: "Radiation oncologist",
    description:
      "Medical consultations and personalized radiotherapy treatments, delivered according to the latest international guidelines and protocols, supported by professional experience gained in France and expertise in advanced techniques such as stereotactic radiotherapy.",
    contactCta: "Contact form",
    contactAriaLabel: "Contact form for Dr. Tatiana Cirimpei",
    servicesCta: "Medical services",
    affiliationsLabel: "Professional affiliations",
  },
  uk: {
    title: "Др. Тетяна Чирімпей",
    subtitle: "Лікар-радіотерапевт",
    description:
      "Медичні консультації та персоналізоване лікування променевою терапією відповідно до найновіших міжнародних настанов і протоколів, підкріплені професійним досвідом, здобутим у Франції, та компетенцією в сучасних методиках, зокрема стереотаксичній радіотерапії.",
    contactCta: "Форма зв’язку",
    contactAriaLabel: "Форма зв’язку з др. Тетяною Чирімпей",
    servicesCta: "Медичні послуги",
    affiliationsLabel: "Професійні асоціації",
  },
};