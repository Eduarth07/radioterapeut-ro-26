import type { SiteLocale } from "../config";

type FooterContent = {
  brandName: string;
  roleLocation: string;
  description: string;
  navigationTitle: string;
  navigationAriaLabel: string;
  navHome: string;
  navServices: string;
  navAbout: string;
  navFaq: string;
  navAppointment: string;
  contactTitle: string;
  emailLabel: string;
  phoneLabel: string;
  centerLabel: string;
  scheduleLabel: string;
  scheduleValue: string;
  mapTitle: string;
  copyright: string;
  privacyTerms: string;
};

export const footerContent: Record<SiteLocale, FooterContent> = {
  ro: {
    brandName: "Dr. Tatiana Cirimpei",
    roleLocation: "Medic radioterapeut, Cluj-Napoca, România",
    description:
      "Site-ul oficial al Dr. Tatiana Cirimpei – medic radioterapeut. Informații despre radioterapie, tratamente și servicii medicale personalizate oferite la cele mai înalte standarde.",
    navigationTitle: "Navigație",
    navigationAriaLabel: "Footer navigație",
    navHome: "Acasă",
    navServices: "Servicii",
    navAbout: "Despre",
    navFaq: "FAQ",
    navAppointment: "Programare",
    contactTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Tel",
    centerLabel: "Radioterapie Medisprof Cancer Center",
    scheduleLabel: "Program",
    scheduleValue: "07:00 - 21:00 (Luni-Vineri)",
    mapTitle: "Locație Dr. Tatiana Cirimpei",
    copyright: "© 2026 Dr. Tatiana Cirimpei, Radioterapeut.ro. Toate drepturile rezervate.",
    privacyTerms: "Politica de Confidențialitate. Termeni și Condiții.",
  },
  en: {
    brandName: "Dr. Tatiana Cirimpei",
    roleLocation: "Radiation oncologist, Cluj-Napoca, Romania",
    description:
      "Official website of Dr. Tatiana Cirimpei – radiation oncologist. Information about radiotherapy, treatments, and personalized medical services delivered to the highest standards.",
    navigationTitle: "Navigation",
    navigationAriaLabel: "Footer navigation",
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navFaq: "FAQ",
    navAppointment: "Appointments",
    contactTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    centerLabel: "Radiotherapy Medisprof Cancer Center",
    scheduleLabel: "Schedule",
    scheduleValue: "07:00 - 21:00 (Monday-Friday)",
    mapTitle: "Location of Dr. Tatiana Cirimpei",
    copyright: "© 2026 Dr. Tatiana Cirimpei, Radioterapeut.ro. All rights reserved.",
    privacyTerms: "Privacy Policy. Terms and Conditions.",
  },
  uk: {
    brandName: "Др. Тетяна Чирімпей",
    roleLocation: "Лікар-радіотерапевт, Клуж-Напока, Румунія",
    description:
      "Офіційний сайт др. Тетяни Чирімпей – лікаря-радіотерапевта. Інформація про променеву терапію, лікування та персоналізовані медичні послуги на найвищому рівні.",
    navigationTitle: "Навігація",
    navigationAriaLabel: "Навігація у футері",
    navHome: "Головна",
    navServices: "Послуги",
    navAbout: "Про мене",
    navFaq: "FAQ",
    navAppointment: "Запис",
    contactTitle: "Контакт",
    emailLabel: "Email",
    phoneLabel: "Тел",
    centerLabel: "Радіотерапія Medisprof Cancer Center",
    scheduleLabel: "Графік",
    scheduleValue: "07:00 - 21:00 (Понеділок-П’ятниця)",
    mapTitle: "Локація др. Тетяни Чирімпей",
    copyright: "© 2026 Dr. Tatiana Cirimpei, Radioterapeut.ro. Усі права захищені.",
    privacyTerms: "Політика конфіденційності. Умови та положення.",
  },
};