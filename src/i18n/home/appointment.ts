import type { SiteLocale } from "../config";

type AppointmentContent = {
  title: string;
  introLead: string;
  introPhonePrefix: string;
  emailSubject: string;
  nameSr: string;
  surnameSr: string;
  emailSr: string;
  phoneSr: string;
  messageSr: string;
  namePlaceholder: string;
  surnamePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  consentPrefix: string;
  consentLinkText: string;
  consentSuffix: string;
  gdprError: string;
  captchaError: string;
  responseInfo: string;
  submitLabel: string;
  modalTitle: string;
  modalCloseAria: string;
  modalAcceptButton: string;
  submitSuccessMessage: string;

  errorNameReq: string;
  errorSurnameReq: string;
  errorEmailReq: string;
  errorEmailInv: string;
  errorPhoneReq: string;
  errorMessageReq: string;
};

export const appointmentContent: Record<SiteLocale, AppointmentContent> = {
  ro: {
    title: "Formular de contact",
    introLead: "Programările sau informațiile se pot solicita utilizând formularul de mai jos sau",
    introPhonePrefix: "telefonic la",
    emailSubject: "Cerere nouă de programare - radioterapeut.ro",
    nameSr: "Nume",
    surnameSr: "Prenume",
    emailSr: "Email",
    phoneSr: "Telefon",
    messageSr: "Mesaj",
    namePlaceholder: "Nume*",
    surnamePlaceholder: "Prenume*",
    emailPlaceholder: "Email*",
    phonePlaceholder: "Telefon*",
    messagePlaceholder: "Mesaj*",
    consentPrefix: "Sunt de acord cu",
    consentLinkText: "politica de confidențialitate",
    consentSuffix: ".",
    gdprError: "Pentru a continua, trebuie să parcurgi și să accepți termenii și condițiile.",
    captchaError: "Te rugăm să confirmi că nu ești robot.",
    responseInfo:
      "După trimiterea formularului veți fi contactat(ă) în cel mai scurt timp pentru stabilirea detaliilor vizitei medicale sau pentru a primi informațiile suplimentare.",
    submitLabel: "Trimite",
    modalTitle: "Termeni și condiții / Politica de confidențialitate",
    modalCloseAria: "Închide",
    modalAcceptButton: "Confirm și accept",
    submitSuccessMessage: "Mesajul a fost trimis cu succes. ",

    errorNameReq: "Te rugăm să introduci numele de familie.",
    errorSurnameReq: "Te rugăm să introduci prenumele.",
    errorEmailReq: "Te rugăm să introduci adresa de email.",
    errorEmailInv: "Adresa de email introdusă nu este validă.",
    errorPhoneReq: "Te rugăm să introduci numărul de telefon.",
    errorMessageReq: "Te rugăm să ne scrii un scurt mesaj.",
  },

  en: {
    title: "Contact form",
    introLead: "Appointments or additional information can be requested using the form below or",
    introPhonePrefix: "by phone at",
    emailSubject: "New appointment request - radioterapeut.ro",
    nameSr: "Last name",
    surnameSr: "First name",
    emailSr: "Email",
    phoneSr: "Phone",
    messageSr: "Message",
    namePlaceholder: "Last name*",
    surnamePlaceholder: "First name*",
    emailPlaceholder: "Email*",
    phonePlaceholder: "Phone*",
    messagePlaceholder: "Message*",
    consentPrefix: "I agree with the",
    consentLinkText: "privacy policy",
    consentSuffix: ".",
    gdprError: "To continue, you must review and accept the terms and conditions.",
    captchaError: "Please confirm that you are not a robot.",
    responseInfo:
      "After submitting the form, you will be contacted as soon as possible to arrange the details of the medical visit or to receive additional information.",
    submitLabel: "Send",
    modalTitle: "Terms and conditions / Privacy policy",
    modalCloseAria: "Close",
    modalAcceptButton: "Confirm and accept",
    submitSuccessMessage: "Your message was sent successfully.",

    errorNameReq: "Please enter your last name.",
    errorSurnameReq: "Please enter your first name.",
    errorEmailReq: "Please enter your email address.",
    errorEmailInv: "Please enter a valid email address.",
    errorPhoneReq: "Please enter your phone number.",
    errorMessageReq: "Please write a short message.",
  },

  uk: {
    title: "Форма зв’язку",
    introLead: "Запис або додаткову інформацію можна отримати через форму нижче або",
    introPhonePrefix: "за телефоном",
    emailSubject: "Нове звернення щодо запису - radioterapeut.ro",
    nameSr: "Прізвище",
    surnameSr: "Ім’я",
    emailSr: "Email",
    phoneSr: "Телефон",
    messageSr: "Повідомлення",
    namePlaceholder: "Прізвище*",
    surnamePlaceholder: "Ім’я*",
    emailPlaceholder: "Email*",
    phonePlaceholder: "Телефон*",
    messagePlaceholder: "Повідомлення*",
    consentPrefix: "Я погоджуюся з",
    consentLinkText: "політикою конфіденційності",
    consentSuffix: ".",
    gdprError: "Щоб продовжити, потрібно ознайомитися з умовами та прийняти їх.",
    captchaError: "Будь ласка, підтвердьте, що ви не робот.",
    responseInfo:
      "Після надсилання форми з вами зв’яжуться якомога швидше для узгодження деталей медичного візиту або надання додаткової інформації.",
    submitLabel: "Надіслати",
    modalTitle: "Умови та положення / Політика конфіденційності",
    modalCloseAria: "Закрити",
    modalAcceptButton: "Підтвердити та прийняти",
    submitSuccessMessage: "Повідомлення успішно надіслано.",

    errorNameReq: "Будь ласка, введіть своє прізвище.",
    errorSurnameReq: "Будь ласка, введіть своє ім'я.",
    errorEmailReq: "Будь ласка, введіть свою електронну адресу.",
    errorEmailInv: "Будь ласка, введіть дійсну електронну адресу.",
    errorPhoneReq: "Будь ласка, введіть свій номер телефону.",
    errorMessageReq: "Будь ласка, введіть повідомлення.",
  },
};