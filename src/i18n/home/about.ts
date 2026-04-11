import type { SiteLocale } from "../config";

type AboutItem = {
  title: string;
  href: string;
  org?: string;
};

type AboutContent = {
  sectionAriaLabel: string;
  sectionTitle: string;
  personName: string;
  intro: string;
  image1Alt: string;
  image2Alt: string;
  experienceTitle: string;
  volunteeringTitle: string;
  skillsTitle: string;
  affiliationsTitle: string;
  experience: AboutItem[];
  volunteering: AboutItem[];
  skills: AboutItem[];
  affiliations: AboutItem[];
};

export const aboutContent: Record<SiteLocale, AboutContent> = {
  ro: {
    sectionAriaLabel: "Despre mine",
    sectionTitle: "Despre mine",
    personName: "Tatiana Cirimpei",
    intro:
      "Medic specialist în radioterapie, cu formare clinică și experiență profesională acumulată în România și Franța. Interesată de abordarea multidisciplinară a pacientului oncologic, cu preocupare constantă pentru dezvoltare profesională continuă, aplicarea practicilor bazate pe dovezi și menținerea unor standarde ridicate de calitate medicală. Activitate profesională desfășurată cu rigoare, implicare, atenție la detalii și orientare către îngrijirea centrată pe pacient.",
    image1Alt: "Poza 1 Tatiana Cirimpei",
    image2Alt: "Poza 2 Tatiana Cirimpei",
    experienceTitle: "Experiență profesională",
    volunteeringTitle: "Activități de voluntariat",
    skillsTitle: "Certificări și competențe",
    affiliationsTitle: "Afilieri profesionale și participări active",
    experience: [
      {
        title: "Medic specialist radioterapeut",
        org: "Medisprof Cancer Center, Cluj-Napoca, România",
        href: "https://medisprof.ro/",
      },
      {
        title: "Medic rezident - Departamentul de Radioterapie",
        org: "Institutul de Cancer Sainte-Catherine, Avignon, Franța",
        href: "https://www.icap84.org/",
      },
      {
        title: "Medic rezident - Secția de Radioterapie",
        org: 'Institutul oncologic "Prof. Dr. Ion Chiricuta", Cluj-Napoca, România',
        href: "https://iocn.ro/",
      },
      {
        title: "Student în cadrul programului Erasmus+ - Stagiu clinic de pregătire",
        org: "Vinzenz von Paul Kiniken gGmbH Marienhospital, Stuttgart, Germania",
        href: "https://www.marienhospital-stuttgart.de/ueber-uns/vinzenz-von-paul-kliniken/",
      },
    ],
    volunteering: [
      {
        title: "Voluntar - Paramedic SMURD Cluj-Napoca",
        href: "https://www.smurd-cluj.ro/",
      },
      {
        title: 'Voluntar - Proiectul "Sport pentru Autism"',
        href: "https://www.osmcluj.ro/proiecte/",
      },
      {
        title: 'Voluntar - Proiectul „Breaking the Silence”',
        href: "https://www.osmcluj.ro/proiecte/vad_voci",
      },
    ],
    skills: [
      {
        title: "Certificare în domeniul radioterapiei stereotactice",
        org: "CONFER",
        href: "https://oncologieiasi.ro/",
      },
      {
        title: "Masterclass in Stereotactic Body Radiotherapy",
        org: "European Society for Radiotherapy and Oncology (ESTRO)",
        href: "https://www.estro.org/Education",
      },
      {
        title: "Breast Cancer Course: New Horizons, Current Controversies",
        org: "Harvard Medical School",
        href: "https://learn.hms.harvard.edu/",
      },
    ],
    affiliations: [
      {
        title: "European Society for Radiotherapy and Oncology (ESTRO)",
        href: "https://www.estro.org/",
      },
      {
        title: "International Stereotactic Radiosurgery Society (ISRS)",
        href: "https://isrsy.org/",
      },
      {
        title: "European School of Oncology (ESO)",
        href: "https://www.eso.net/",
      },
      {
        title: "Societatea Română de Radioterapie și Oncologie Medicală (SRROM)",
        href: "https://srrom.ro/",
      },
      {
        title: "Societatea Națională de Oncologie Medicală din România (SNOMR)",
        href: "https://snomr.ro/main/page/home.php",
      },
      {
        title: "Comisia Multidisciplinară de Oncologie organizată de Spitalul Regina Maria - Cluj-Napoca",
        href: "https://www.reginamaria.ro/spitale?oras=6953&specialitate=7129",
      },
      {
        title: "Comisia Multidisciplinară de Oncologie organizată la nivel național – Decizie Oncologică",
        href: "https://decizieoncologica.ro/",
      },
      {
        title: "Activitate profesională pe platforma Medic Chat, în domeniul informării și comunicării medicale",
        href: "https://www.medic.chat/doctors/AbD4deTXDXGgoyRCN",
      },
    ],
  },

  en: {
    sectionAriaLabel: "About me",
    sectionTitle: "About me",
    personName: "Tatiana Cirimpei",
    intro:
      "Radiation oncologist with clinical training and professional experience gained in Romania and France. Interested in the multidisciplinary approach to the oncology patient, with a constant focus on continuous professional development, evidence-based practice, and maintaining high standards of medical quality. Professional activity carried out with rigor, commitment, attention to detail, and a patient-centered approach.",
    image1Alt: "Portrait of Dr. Tatiana Cirimpei",
    image2Alt: "Professional photo of Dr. Tatiana Cirimpei",
    experienceTitle: "Professional experience",
    volunteeringTitle: "Volunteer activities",
    skillsTitle: "Certifications and skills",
    affiliationsTitle: "Professional affiliations and active participation",
    experience: [
      {
        title: "Specialist radiation oncologist",
        org: "Medisprof Cancer Center, Cluj-Napoca, Romania",
        href: "https://medisprof.ro/",
      },
      {
        title: "Resident physician - Department of Radiotherapy",
        org: "Sainte-Catherine Cancer Institute, Avignon, France",
        href: "https://www.icap84.org/",
      },
      {
        title: "Resident physician - Radiotherapy Department",
        org: 'Oncology Institute "Prof. Dr. Ion Chiricuta", Cluj-Napoca, Romania',
        href: "https://iocn.ro/",
      },
      {
        title: "Erasmus+ student - Clinical training placement",
        org: "Vinzenz von Paul Kliniken gGmbH Marienhospital, Stuttgart, Germany",
        href: "https://www.marienhospital-stuttgart.de/ueber-uns/vinzenz-von-paul-kliniken/",
      },
    ],
    volunteering: [
      {
        title: "Volunteer - SMURD paramedic, Cluj-Napoca",
        href: "https://www.smurd-cluj.ro/",
      },
      {
        title: 'Volunteer - "Sport for Autism" project',
        href: "https://www.osmcluj.ro/proiecte/",
      },
      {
        title: 'Volunteer - “Breaking the Silence” project',
        href: "https://www.osmcluj.ro/proiecte/vad_voci",
      },
    ],
    skills: [
      {
        title: "Certification in stereotactic radiotherapy",
        org: "CONFER",
        href: "https://oncologieiasi.ro/",
      },
      {
        title: "Masterclass in Stereotactic Body Radiotherapy",
        org: "European Society for Radiotherapy and Oncology (ESTRO)",
        href: "https://www.estro.org/Education",
      },
      {
        title: "Breast Cancer Course: New Horizons, Current Controversies",
        org: "Harvard Medical School",
        href: "https://learn.hms.harvard.edu/",
      },
    ],
    affiliations: [
      {
        title: "European Society for Radiotherapy and Oncology (ESTRO)",
        href: "https://www.estro.org/",
      },
      {
        title: "International Stereotactic Radiosurgery Society (ISRS)",
        href: "https://isrsy.org/",
      },
      {
        title: "European School of Oncology (ESO)",
        href: "https://www.eso.net/",
      },
      {
        title: "Romanian Society of Radiotherapy and Medical Oncology (SRROM)",
        href: "https://srrom.ro/",
      },
      {
        title: "National Society of Medical Oncology of Romania (SNOMR)",
        href: "https://snomr.ro/main/page/home.php",
      },
      {
        title: "Multidisciplinary Oncology Board organized by Regina Maria Hospital - Cluj-Napoca",
        href: "https://www.reginamaria.ro/spitale?oras=6953&specialitate=7129",
      },
      {
        title: "National Multidisciplinary Oncology Board – Decizie Oncologică",
        href: "https://decizieoncologica.ro/",
      },
      {
        title: "Professional activity on the Medic Chat platform, in medical information and communication",
        href: "https://www.medic.chat/doctors/AbD4deTXDXGgoyRCN",
      },
    ],
  },

  uk: {
    sectionAriaLabel: "Про мене",
    sectionTitle: "Про мене",
    personName: "Тетяна Чирімпей",
    intro:
      "Лікар-радіотерапевт із клінічною підготовкою та професійним досвідом, здобутим у Румунії та Франції. Зацікавлена в мультидисциплінарному підході до онкологічного пацієнта, з постійною увагою до безперервного професійного розвитку, доказової практики та підтримання високих стандартів медичної якості. Професійна діяльність ґрунтується на точності, залученості, увазі до деталей і турботі, орієнтованій на пацієнта.",
    image1Alt: "Фото др. Тетяни Чирімпей",
    image2Alt: "Професійне фото др. Тетяни Чирімпей",
    experienceTitle: "Професійний досвід",
    volunteeringTitle: "Волонтерська діяльність",
    skillsTitle: "Сертифікації та компетенції",
    affiliationsTitle: "Професійні афіліації та активна участь",
    experience: [
      {
        title: "Лікар-спеціаліст з радіотерапії",
        org: "Medisprof Cancer Center, Клуж-Напока, Румунія",
        href: "https://medisprof.ro/",
      },
      {
        title: "Лікар-резидент - Відділення радіотерапії",
        org: "Онкологічний інститут Sainte-Catherine, Авіньйон, Франція",
        href: "https://www.icap84.org/",
      },
      {
        title: "Лікар-резидент - Відділення радіотерапії",
        org: 'Онкологічний інститут "Prof. Dr. Ion Chiricuta", Клуж-Напока, Румунія',
        href: "https://iocn.ro/",
      },
      {
        title: "Студентка Erasmus+ - клінічне стажування",
        org: "Vinzenz von Paul Kliniken gGmbH Marienhospital, Штутгарт, Німеччина",
        href: "https://www.marienhospital-stuttgart.de/ueber-uns/vinzenz-von-paul-kliniken/",
      },
    ],
    volunteering: [
      {
        title: "Волонтер - парамедик SMURD Cluj-Napoca",
        href: "https://www.smurd-cluj.ro/",
      },
      {
        title: 'Волонтер - проєкт "Sport pentru Autism"',
        href: "https://www.osmcluj.ro/proiecte/",
      },
      {
        title: 'Волонтер - проєкт «Breaking the Silence»',
        href: "https://www.osmcluj.ro/proiecte/vad_voci",
      },
    ],
    skills: [
      {
        title: "Сертифікація у сфері стереотаксичної радіотерапії",
        org: "CONFER",
        href: "https://oncologieiasi.ro/",
      },
      {
        title: "Masterclass in Stereotactic Body Radiotherapy",
        org: "European Society for Radiotherapy and Oncology (ESTRO)",
        href: "https://www.estro.org/Education",
      },
      {
        title: "Breast Cancer Course: New Horizons, Current Controversies",
        org: "Harvard Medical School",
        href: "https://learn.hms.harvard.edu/",
      },
    ],
    affiliations: [
      {
        title: "European Society for Radiotherapy and Oncology (ESTRO)",
        href: "https://www.estro.org/",
      },
      {
        title: "International Stereotactic Radiosurgery Society (ISRS)",
        href: "https://isrsy.org/",
      },
      {
        title: "European School of Oncology (ESO)",
        href: "https://www.eso.net/",
      },
      {
        title: "Romanian Society of Radiotherapy and Medical Oncology (SRROM)",
        href: "https://srrom.ro/",
      },
      {
        title: "National Society of Medical Oncology of Romania (SNOMR)",
        href: "https://snomr.ro/main/page/home.php",
      },
      {
        title: "Мультидисциплінарна онкологічна комісія лікарні Regina Maria - Клуж-Напока",
        href: "https://www.reginamaria.ro/spitale?oras=6953&specialitate=7129",
      },
      {
        title: "Національна мультидисциплінарна онкологічна комісія – Decizie Oncologică",
        href: "https://decizieoncologica.ro/",
      },
      {
        title: "Професійна діяльність на платформі Medic Chat у сфері медичної інформації та комунікації",
        href: "https://www.medic.chat/doctors/AbD4deTXDXGgoyRCN",
      },
    ],
  },
};