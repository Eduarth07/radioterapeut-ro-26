import type { SiteLocale } from "../config";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqContent = {
  title: string;
  intro: string;
  leftColumn: FaqItem[];
  rightColumn: FaqItem[];
};

export const faqContent: Record<SiteLocale, FaqContent> = {
  ro: {
    title: "Întrebări frecvente",
    intro:
      "Dacă mai ai întrebări, mă poți contacta oricând pentru clarificări și informații suplimentare.",
    leftColumn: [
      {
        question: "Ce trebuie să fac înainte de începerea radioterapiei?",
        answer:
          "Înainte de începerea tratamentului, vei avea o consultație cu medicul radioterapeut, unde vom discuta istoricul tău medical și investigațiile recente. Urmează o etapă esențială numită simulare — o scanare CT specială, care ne ajută să stabilim poziția exactă și planul personalizat de tratament. Nu este nevoie de pregătiri speciale acasă, dar vei primi toate indicațiile necesare înainte de fiecare etapă.",
      },
      {
        question: "Cum decurge o ședință de radioterapie? Este dureroasă?",
        answer:
          "Ședința de radioterapie este nedureroasă și durează în general câteva minute. Pacientul stă întins pe masa aparatului, într-o poziție stabilă, iar tratamentul este aplicat cu precizie către zona afectată. Nu se simte nimic în timpul expunerii, iar echipa medicală monitorizează pacientul permanent dintr-o cameră alăturată.",
      },
      {
        question: "Care sunt efectele secundare ale radioterapiei și cum pot fi gestionate?",
        answer:
          "Efectele secundare variază în funcție de zona tratată și pot include oboseală, iritații ale pielii sau inflamații locale. Ele apar gradual și sunt de obicei temporare. Fiecare pacient primește recomandări specifice și este urmărit îndeaproape, pentru ca orice reacție să fie controlată din timp. Scopul nostru este să menținem calitatea vieții cât mai bună pe durata tratamentului.",
      },
    ],
    rightColumn: [
      {
        question: "Este necesară internarea pe perioada tratamentului?",
        answer:
          "Nu, radioterapia se face de obicei în regim ambulatoriu, adică vii la ședință și apoi mergi acasă. O ședință durează doar câteva minute, iar tratamentul se administrează zilnic, de luni până vineri, pentru o anumită perioadă stabilită de medic. Internarea este necesară doar în cazuri speciale, rare, când pacientul are nevoie de îngrijiri suplimentare.",
      },
      {
        question: "Pot continua activitățile zilnice în timpul tratamentului cu radioterapie?",
        answer:
          "În majoritatea cazurilor, da. Radioterapia nu afectează întregul organism, ci doar zona tratată, iar majoritatea pacienților își pot continua activitățile obișnuite — serviciu, plimbări, viață socială. Este important însă să îți asculți corpul: dacă apare oboseala, e bine să îți acorzi timp de odihnă. Echipa medicală te va ghida pe parcurs și îți va oferi recomandări adaptate nevoilor tale.",
      },
    ],
  },

  en: {
    title: "Frequently asked questions",
    intro:
      "If you have any other questions, you can contact me anytime for clarification and additional information.",
    leftColumn: [
      {
        question: "What should I do before starting radiotherapy?",
        answer:
          "Before starting treatment, you will have a consultation with the radiation oncologist, where we will review your medical history and recent investigations. This is followed by an essential step called simulation — a special CT scan that helps us determine the exact position and create your personalized treatment plan. No special preparation is usually needed at home, but you will receive all the necessary instructions before each step.",
      },
      {
        question: "What happens during a radiotherapy session? Is it painful?",
        answer:
          "A radiotherapy session is painless and generally lasts only a few minutes. The patient lies on the treatment table in a stable position, and the treatment is delivered precisely to the affected area. You do not feel anything during the exposure, and the medical team continuously monitors you from an adjacent room.",
      },
      {
        question: "What side effects can radiotherapy cause and how are they managed?",
        answer:
          "Side effects vary depending on the treated area and may include fatigue, skin irritation, or local inflammation. They usually appear gradually and are most often temporary. Each patient receives specific recommendations and is closely monitored so that any reaction can be addressed early. Our goal is to maintain the best possible quality of life throughout treatment.",
      },
    ],
    rightColumn: [
      {
        question: "Is hospitalization necessary during treatment?",
        answer:
          "No, radiotherapy is usually performed on an outpatient basis, meaning you come for the session and then go home. A session lasts only a few minutes, and treatment is usually given daily, from Monday to Friday, for a period determined by the doctor. Hospitalization is needed only in rare, special situations when additional care is required.",
      },
      {
        question: "Can I continue my daily activities during radiotherapy treatment?",
        answer:
          "In most cases, yes. Radiotherapy does not affect the whole body, only the treated area, and most patients can continue their usual activities — work, walks, and social life. However, it is important to listen to your body: if fatigue appears, it is best to allow yourself time to rest. The medical team will guide you throughout the process and provide recommendations adapted to your needs.",
      },
    ],
  },

  uk: {
    title: "Часті запитання",
    intro:
      "Якщо у вас залишилися запитання, ви можете будь-коли звернутися до мене за роз’ясненнями та додатковою інформацією.",
    leftColumn: [
      {
        question: "Що потрібно зробити перед початком променевої терапії?",
        answer:
          "Перед початком лікування у вас буде консультація з лікарем-радіотерапевтом, під час якої ми обговоримо вашу медичну історію та останні обстеження. Далі слідує важливий етап — симуляція, тобто спеціальне КТ-дослідження, яке допомагає визначити точне положення та створити персоналізований план лікування. Зазвичай спеціальної підготовки вдома не потрібно, але перед кожним етапом ви отримаєте всі необхідні рекомендації.",
      },
      {
        question: "Як проходить сеанс променевої терапії? Чи це боляче?",
        answer:
          "Сеанс променевої терапії безболісний і зазвичай триває лише кілька хвилин. Пацієнт лежить на столі апарата в стабільному положенні, а лікування точно спрямовується на уражену ділянку. Під час опромінення нічого не відчувається, а медична команда постійно спостерігає за пацієнтом із сусідньої кімнати.",
      },
      {
        question: "Які побічні ефекти може викликати променева терапія і як їх контролюють?",
        answer:
          "Побічні ефекти залежать від зони лікування і можуть включати втому, подразнення шкіри або місцеве запалення. Вони зазвичай з’являються поступово і найчастіше є тимчасовими. Кожен пацієнт отримує індивідуальні рекомендації та перебуває під ретельним наглядом, щоб будь-яку реакцію можна було вчасно скоригувати. Наша мета — зберегти якомога кращу якість життя під час лікування.",
      },
    ],
    rightColumn: [
      {
        question: "Чи потрібна госпіталізація на час лікування?",
        answer:
          "Ні, променева терапія зазвичай проводиться амбулаторно, тобто ви приходите на сеанс і потім повертаєтеся додому. Один сеанс триває лише кілька хвилин, а лікування найчастіше проводиться щодня, з понеділка по п’ятницю, протягом періоду, визначеного лікарем. Госпіталізація потрібна лише в рідкісних особливих випадках, коли пацієнту необхідний додатковий догляд.",
      },
      {
        question: "Чи можу я продовжувати щоденні справи під час лікування променевою терапією?",
        answer:
          "У більшості випадків — так. Променева терапія не впливає на весь організм, а лише на зону лікування, і більшість пацієнтів можуть продовжувати звичні справи — роботу, прогулянки, соціальне життя. Водночас важливо прислухатися до свого організму: якщо з’являється втома, варто дати собі час на відпочинок. Медична команда супроводжуватиме вас протягом усього процесу та надаватиме рекомендації відповідно до ваших потреб.",
      },
    ],
  },
};