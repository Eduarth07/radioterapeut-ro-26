import type { SiteLocale } from "../config";

type ServiceCard = {
  title: string;
  description: string;
  items: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

type ServicesContent = {
  title: string;
  description: string;
  toggleAriaLabel: string;
  oncologicLabel: string;
  nonOncologicLabel: string;
  oncologicCards: ServiceCard[];
  nonOncologicCards: ServiceCard[];
  oncologicFootnote: string;
  nonOncologicFootnote: string;
};

export const servicesContent: Record<SiteLocale, ServicesContent> = {
  ro: {
    title: "Servicii medicale",
    description:
      "Vă ofer consultații și servicii de radioterapie la standarde internaționale, utilizând tehnologii moderne pentru planificare precisă și tratamente eficiente, atât pentru afecțiuni oncologice, cât și pentru indicații non-oncologice selectate, în cadrul unui centru acreditat din Cluj-Napoca",
    toggleAriaLabel: "Tip servicii",
    oncologicLabel: "Oncologice",
    nonOncologicLabel: "Non-oncologice",
    oncologicCards: [
      {
        title: "Consultații de specialitate",
        description:
          "Consultații medicale de specialitate și urmărire, cu comunicare clară și plan adaptat fiecărui pacient.",
        items: [
          "Consultații medicale inițiale",
          "Monitorizare pe durata tratamentului",
          "Consultații de urmărire post-radioterapie",
          "Telemedicină",
          "Second opinion (a doua opinie medicală)",
        ],
        cta: "Mai multe informații...",
        href: "/articole/consultatii-radioterapie",
      },
      {
        title: "Radioterapie",
        description:
          "Tratamente moderne, planificate precis, conform ghidurilor și protocoalelor internaționale.",
        items: [
          "Radioterapie cu fascicul de electroni",
          "Radioterapie cu intensitate modulată (IMRT)",
          "Radioterapie cu arc de volum (VMAT)",
          "Radioterapie stereotactică (SRS/SBRT)",
        ],
        cta: "Mai multe informații...",
        href: "/articole/radioterapie-moderna",
        featured: true,
      },
      {
        title: "Reacții adverse",
        description:
          "Managementul reacțiilor adverse, cu recomandări practice și ajustări rapide pentru confort și siguranță.",
        items: [
          "Tratamentul toxicităților acute",
          "Îngrijirea toxicităților tardive",
        ],
        cta: "Mai multe informații...",
        href: "/articole/management-reactii-adverse-radioterapie",
      },
    ],
    nonOncologicCards: [
      {
        title: "Radioterapie pentru pinteni calcaneeni",
        description:
          "Tratament antiinflamator modern, non-invaziv, destinat cazurilor selectate de durere cronică la nivelul călcâiului, atunci când opțiunile clasice nu sunt suficiente.",
        items: [
          "Consultație și evaluare personalizată",
          "Protocol terapeutic scurt și confortabil",
          "Ameliorarea durerii și reluarea mersului cu mai mult confort",
        ],
        cta: "Mai multe informații...",
        href: "/articole/radioterapie-pinteni-calcaneeni",
      },
      {
        title: "Radioterapie pentru alte afecțiuni benigne",
        description:
          "În anumite afecțiuni benigne selectate, radioterapia poate reprezenta o opțiune terapeutică utilă, stabilită individual în funcție de indicație, localizare și beneficiul clinic estimat.",
        items: [
          "Hemangioame și malformații vasculare selectate",
          "Keloizi și cicatrici hipertrofice recidivante",
          "Evaluare individuală pentru alte indicații benigne",
        ],
        cta: "Mai multe informații...",
        href: "/articole/afectiuni-benigne-selectate",
        featured: true,
      },
    ],
    oncologicFootnote:
      "Nota: Consultațiile și tratamentele de radioterapie pentru pacienții diagnosticați cu afecțiuni oncologice sunt gratuite, fiind decontate prin Casa Națională de Asigurări de Sănătate (CNAS). Serviciile de tip second opinion se oferă în regim privat, conform listei de tarife a furnizorului.",
nonOncologicFootnote:
  "Notă: Pentru indicațiile non-oncologice, consultațiile și tratamentele de radioterapie sunt disponibile în regim privat, conform listei de tarife a furnizorului.",
  },

  en: {
    title: "Medical services",
    description:
      "I provide consultations and radiotherapy services at international standards, using modern technologies for precise planning and effective treatments, both for oncological conditions and selected non-oncological indications, within an accredited center in Cluj-Napoca.",
    toggleAriaLabel: "Service type",
    oncologicLabel: "Oncological",
    nonOncologicLabel: "Non-oncological",
    oncologicCards: [
      {
        title: "Specialist consultations",
        description:
          "Specialist medical consultations and follow-up, with clear communication and a plan tailored to each patient.",
        items: [
          "Initial medical consultations",
          "Monitoring during treatment",
          "Post-radiotherapy follow-up consultations",
          "Telemedicine",
          "Second opinion",
        ],
        cta: "Learn more...",
        href: "/en/articole/radiotherapy-medical-consultations",
      },
      {
        title: "Radiotherapy",
        description:
          "Modern treatments, precisely planned in accordance with international guidelines and protocols.",
        items: [
          "Electron beam radiotherapy",
          "Intensity-modulated radiotherapy (IMRT)",
          "Volumetric modulated arc therapy (VMAT)",
          "Stereotactic radiotherapy (SRS/SBRT)",
        ],
        cta: "Learn more...",
        href: "/en/articole/high-precision-radiotherapy-technologies-and-treatment-methods",
        featured: true,
      },
      {
        title: "Side effects",
        description:
          "Management of side effects, with practical recommendations and rapid adjustments for comfort and safety.",
        items: [
          "Treatment of acute toxicities",
          "Care for late toxicities",
        ],
        cta: "Learn more...",
        href: "/en/articole/management-of-radiotherapy-side-effects",
      },
    ],
    nonOncologicCards: [
      {
        title: "Radiotherapy for heel spurs",
        description:
          "A modern, non-invasive anti-inflammatory treatment for selected cases of chronic heel pain, when conventional options are no longer enough.",
        items: [
          "Personalized consultation and assessment",
          "Short and comfortable treatment protocol",
          "Pain relief and improved walking comfort",
        ],
        cta: "Learn more...",
        href: "/en/articole/radiotherapy-for-heel-spurs",
      },
      {
        title: "Radiotherapy for other benign conditions",
        description:
          "In certain selected benign conditions, radiotherapy may represent a valuable therapeutic option, established individually according to indication, location and expected clinical benefit.",
        items: [
          "Selected hemangiomas and vascular malformations",
          "Recurrent keloids and hypertrophic scars",
          "Individual evaluation for other benign indications",
        ],
        cta: "Learn more...",
        href: "/en/articole/radiotherapy-in-selected-non-oncological-conditions",
        featured: true,
      },
    ],
oncologicFootnote:
  "Note: Radiotherapy consultations and treatments for oncological conditions may be covered through Romania’s public health insurance system (CNAS), subject to medical indication, insurance status, and the applicable legal and administrative requirements. Patients insured in Romania may access covered services under the national rules. Patients insured in another EU/EEA country, Switzerland or the United Kingdom should note that the European Health Insurance Card (EHIC) is intended for medically necessary care during a temporary stay and not for planned treatment; planned treatment may require prior authorisation or an S2 form. For patients from non-EU countries, coverage depends on any applicable international agreement or other valid entitlement documents; otherwise, services should generally be considered private. Second opinion services are provided on a private basis, according to the provider’s fee schedule.",
nonOncologicFootnote:
  "Note: Radiotherapy consultations and treatments for non-oncological indications are generally provided on a private basis, according to the provider’s fee schedule. Patients insured outside Romania who wish to seek treatment are advised to verify in advance whether any Romanian, European or international coverage rules may apply in their specific case.",
  },

  uk: {
    title: "Медичні послуги",
    description:
      "Я надаю консультації та послуги променевої терапії відповідно до міжнародних стандартів, використовуючи сучасні технології для точного планування та ефективного лікування як онкологічних захворювань, так і окремих неонкологічних показань, у межах акредитованого центру в Клуж-Напоці.",
    toggleAriaLabel: "Тип послуг",
    oncologicLabel: "Онкологічні",
    nonOncologicLabel: "Неонкологічні",
    oncologicCards: [
      {
        title: "Спеціалізовані консультації",
        description:
          "Спеціалізовані медичні консультації та спостереження з чітким поясненням і планом, адаптованим до кожного пацієнта.",
        items: [
          "Первинні медичні консультації",
          "Моніторинг під час лікування",
          "Контрольні консультації після променевої терапії",
          "Телемедицина",
          "Друга медична думка",
        ],
        cta: "Дізнатися більше...",
        href: "/uk/articole/medychni-konsultatsiyi-z-promenevoyi-terapiyi",
      },
      {
        title: "Променева терапія",
        description:
          "Сучасне лікування, точно сплановане відповідно до міжнародних настанов і протоколів.",
        items: [
          "Променева терапія електронним пучком",
          "Променева терапія з модуляцією інтенсивності (IMRT)",
          "Об’ємно-модульована дугова терапія (VMAT)",
          "Стереотаксична променева терапія (SRS/SBRT)",
        ],
        cta: "Дізнатися більше...",
        href: "/uk/articole/vysokotochna-promeneva-terapiya-tekhnolohiyi-ta-metody-likuvannya",
        featured: true,
      },
      {
        title: "Побічні реакції",
        description:
          "Контроль побічних реакцій із практичними рекомендаціями та швидкими корекціями для комфорту й безпеки.",
        items: [
          "Лікування гострої токсичності",
          "Догляд при пізній токсичності",
        ],
        cta: "Дізнатися більше...",
        href: "/uk/articole/upravlinnya-pobichnymy-reaktsiyamy-pry-promeneviy-terapiyi",
      },
    ],
    nonOncologicCards: [
      {
        title: "Променева терапія при п’ятковій шпорі",
        description:
          "Сучасне неінвазивне протизапальне лікування для окремих випадків хронічного болю в п’яті, коли звичні методи вже недостатні.",
        items: [
          "Індивідуальна консультація та оцінка",
          "Короткий і комфортний протокол лікування",
          "Зменшення болю та покращення комфорту під час ходьби",
        ],
        cta: "Дізнатися більше...",
        href: "/uk/articole/promeneva-terapiya-pry-pyatkovykh-shporakh",
      },
      {
        title: "Променева терапія при інших доброякісних станах",
        description:
          "При окремих доброякісних захворюваннях променева терапія може бути цінним терапевтичним варіантом, який визначається індивідуально залежно від показань, локалізації та очікуваної клінічної користі.",
        items: [
          "Окремі гемангіоми та судинні мальформації",
          "Рецидивні келоїди та гіпертрофічні рубці",
          "Індивідуальна оцінка для інших доброякісних показань",
        ],
        cta: "Дізнатися більше...",
        href: "/uk/articole/promeneva-terapiya-pry-neonkolohichnykh-zakhvoryuvannyakh",
        featured: true,
      },
    ],
oncologicFootnote:
  "Примітка: Для осіб, які прибули із зони збройного конфлікту в Україні, консультації та лікування променевою терапією при онкологічних захворюваннях можуть покриватися в межах системи медичного страхування Румунії (CNAS) відповідно до чинних правил. Згідно з офіційними правилами CNAS, такі пацієнти можуть користуватися базовим пакетом медичних послуг і національними лікувальними програмами на тих самих умовах, що й застраховані особи в Румунії. Для консультацій у клінічній амбулаторії зазвичай не потрібне направлення, а при першому зверненні пацієнта реєструє постачальник медичних послуг у системі CNAS. Послуги second opinion надаються на приватній основі згідно з тарифами постачальника.",
nonOncologicFootnote:
  "Примітка: Консультації та лікування променевою терапією при неонкологічних показаннях, як правило, надаються на приватній основі згідно з тарифами постачальника. Якщо ви прибули із зони збройного конфлікту в Україні та маєте право на медичну допомогу в Румунії за спеціальними правилами CNAS, умови покриття конкретних послуг слід уточнювати індивідуально під час запису або консультації.",
  },
};