import type { SiteLocale } from "../i18n/config";

import { ImageMetadata } from "astro";

import imgImportantaRadioterapieCover from "../assets/blog-01.png";
import imgImportantaRadioterapieArticle from "../assets/blog-detail1.webp";

import imgMituriRadioterapieCover from "../assets/thumb_blog-02.png";
import imgMituriRadioterapieArticle from "../assets/blog-02.webp";

import imgPregatireRadioterapieCover from "../assets/thumb_blog-detail3.png";
import imgPregatireRadioterapieArticle from "../assets/blog-detail3.webp";

import imgRadioterapiaPeIntelesulTuturorCover from "../assets/thumb_blog-04.png";
import imgRadioterapiaPeIntelesulTuturorArticle from "../assets/blog-04.png";
import imgRadioterapiaPeIntelesulTuturorBig from "../assets/blog-04.png";

import imgConsultatiiRadioterapieCover from "../assets/thumb_blog-consultatii.png";
import imgConsultatiiRadioterapieArticle from "../assets/blog-consultatii.png";

import imgRadioterapieModernaCover from "../assets/thum_blog-radioterapie-moderna.png";
import imgRadioterapieModernaArticle from "../assets/blog-radioterapie-moderna.png";

import imgManagementReactiiAdverseRadioterapieCover from "../assets/thumb_blog-reactii-adverse.png";
import imgManagementReactiiAdverseRadioterapieArticle from "../assets/blog-reactii-adverse.png";

import imgRadioterapiePinteniCalcaneeniCover from "../assets/thumb_blog-pinteni-calcaneeni.png";
import imgRadioterapiePinteniCalcaneeniArticle from "../assets/blog-pinteni-calcaneeni.png";

import imgAfectiuniBenigneSelectateCover from "../assets/thumb_blog-afectiuni-benigne.png";
import imgAfectiuniBenigneSelectateArticle from "../assets/blog-afectiuni-benigne-c.png";

import imgColaborareInterdisciplinaraRadioterapieCover from "../assets/blog-colaborare-medicala.png";

import imgInlineCt from "../assets/ct.webp";
import imgInlineTruebeam from "../assets/truebeam.webp";
import imgInlineHalcyon from "../assets/halcyon.webp";

export type LocalizedArticleContent = {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    readTime: string;
    coverAlt: string;
    tags: string[];
    contentHtml: string;
};

export type ArticleEntry = {
    id: string;
    author: string;
    isoDate: string;
    coverImage: ImageMetadata;
    articleImage?: ImageMetadata;
    bigImage?: ImageMetadata;
    translations: Record<SiteLocale, LocalizedArticleContent>;
};

export const articlesI18n: ArticleEntry[] = [
  {
    id: "importanta-radioterapie",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2026-01-10",
    coverImage: imgImportantaRadioterapieCover,
    articleImage: imgImportantaRadioterapieArticle,
    translations: {
      ro: {
        slug: "importanta-radioterapie",
        category: "Educație medicală",
        title: "Importanța radioterapiei în tratamentul cancerului",
        excerpt:
          "Radioterapia este o metodă esențială, precisă și modernă, cu rol major în distrugerea celulelor tumorale și protejarea țesuturilor sănătoase.",
        readTime: "8 min",
        coverAlt: "Imagine reprezentativă radioterapie",
        tags: ["Pacient", "Tratament", "Consultație"],
        contentHtml: `
            <p>În general, radioterapia este o metodă esențială în tratamentul cancerului, utilizată pentru distrugerea celulelor tumorale. Cu ajutorul radiațiilor de înaltă energie, direcționate cu precizie asupra zonei afectate, putem opri dezvoltarea tumorii sau chiar elimina complet celulele maligne, protejând în același timp țesuturile sănătoase din jur.</p>
            <p>Această formă de tratament este una locală, ceea ce înseamnă că acționează direct asupra regiunii în care se află tumora. Radioterapia poate fi folosită ca tratament principal în anumite tipuri de cancer, dar este adesea combinată cu alte metode, precum chirurgia sau chimioterapia, pentru a crește eficiența generală a terapiei. Uneori, este indicată și în scop paliativ, pentru a reduce simptomele și a îmbunătăți calitatea vieții pacientului.</p>
            <h3>Beneficiile radioterapiei moderne</h3>
            <p>Radioterapia modernă este mult diferită față de ceea ce poate ați auzit în trecut. Datorită progreselor tehnologice, tratamentele sunt astăzi:</p>
            <ul>
            <li>Mult mai precise – radiațiile sunt direcționate exact către tumoare;</li>
            <li>Bine tolerate – efectele adverse sunt reduse semnificativ;</li>
            <li>Non-invazive – nu necesită incizii sau spitalizare;</li>
            <li>Rapide – ședințele durează doar câteva minute, iar tratamentul complet poate fi de scurtă durată, în funcție de caz.</li>
            </ul>
            <h3>Ce simte pacientul în timpul tratamentului?</h3>
            <p>Tratamentul în sine este nedureros. Pacientul stă întins pe o masă, iar aparatul se mișcă în jurul lui fără a-l atinge. Nu se simte radiația, nu se vede, nu se miroase. Tot procesul este ghidat și monitorizat permanent de o echipă medicală dedicată, formată din medici, fizicieni și asistenți specializați.</p>
            <blockquote>
            <p>Radioterapia nu este doar o tehnică medicală – este o șansă reală de vindecare sau de îmbunătățire a vieții. Dacă tu sau cineva apropiat se confruntă cu această boală, te încurajez să iei legătura cu mine. O discuție deschisă și o evaluare atentă pot deschide un drum nou spre tratament și echilibru.</p>
            </blockquote>
            <h3>Ce tipuri de cancer se pot trata cu radioterapie?</h3>
            <p>Radioterapia este eficientă în tratarea multor forme de cancer, inclusiv cancerul de sân, cancerul pulmonar, de prostată, ginecologic sau colorectal. Fiecare caz este însă unic. De aceea, este esențial ca înainte de începerea tratamentului să aibă loc o consultație de specialitate. În cadrul acesteia, se analizează dosarul medical, se discută opțiunile terapeutice și se stabilește un plan personalizat, adaptat fiecărui pacient.</p>
            <p>Un astfel de plan ia în considerare atât localizarea tumorii, cât și stadiul bolii, vârsta pacientului și starea sa generală de sănătate. Tocmai de aceea, evaluarea inițială este extrem de importantă și nu trebuie amânată. Uneori, câteva zile pot face diferența.</p>
            <p>Radioterapia nu este doar o opțiune, ci una dintre cele mai importante arme pe care le avem astăzi în tratamentul cancerului. Atunci când este indicată corect și realizată cu precizie, poate schimba radical evoluția bolii și oferi șanse reale de vindecare. Tocmai de aceea este esențial ca fiecare pacient să fie evaluat cu atenție și să primească o recomandare adaptată situației sale. Dacă ai primit un diagnostic oncologic sau ești în căutarea celei mai bune abordări terapeutice, te încurajez să îți programezi o consultație. Radioterapia, aplicată la timp și corect, poate fi exact ceea ce îți redă speranța și controlul asupra propriei vieți.</p>
        `,
      },
      en: {
        slug: "importance-of-radiotherapy",
        category: "Medical education",
        title: "The Importance of Radiotherapy in Cancer Treatment",
        excerpt:
          "Radiotherapy is an essential, precise, and modern treatment method that plays a major role in destroying tumor cells while protecting healthy tissues.",
        readTime: "8 min",
        coverAlt: "Representative radiotherapy image",
        tags: ["Patient", "Treatment", "Consultation"],
        contentHtml: `
            <p>In general, radiotherapy is an essential method in cancer treatment, used to destroy tumor cells. With the help of high-energy radiation directed precisely at the affected area, we can stop the development of the tumor or even completely eliminate malignant cells, while at the same time protecting the surrounding healthy tissues.</p>

            <p>This form of treatment is local, which means that it acts directly on the region where the tumor is located. Radiotherapy may be used as the main treatment in certain types of cancer, but it is often combined with other methods, such as surgery or chemotherapy, in order to increase the overall effectiveness of therapy. Sometimes, it is also indicated for palliative purposes, to reduce symptoms and improve the patient’s quality of life.</p>

            <h3>The Benefits of Modern Radiotherapy</h3>

            <p>Modern radiotherapy is very different from what you may have heard in the past. Thanks to technological progress, treatments today are:</p>

            <ul>
            <li>Much more precise – radiation is directed exactly toward the tumor;</li>
            <li>Better tolerated – side effects are significantly reduced;</li>
            <li>Non-invasive – no incisions or hospitalization are required;</li>
            <li>Fast – sessions last only a few minutes, and the full treatment course may be relatively short, depending on the case.</li>
            </ul>

            <h3>What Does the Patient Feel During Treatment?</h3>

            <p>The treatment itself is painless. The patient lies on a treatment table while the machine moves around them without touching the body. Radiation cannot be felt, seen, or smelled. The entire process is guided and continuously monitored by a dedicated medical team made up of physicians, physicists, and specialized radiation therapists.</p>

            <blockquote>
            <p>Radiotherapy is not just a medical technique – it is a real chance for healing or for improving quality of life. If you or someone close to you is facing this disease, I encourage you to get in touch with me. An open discussion and a careful evaluation can open a new path toward treatment and balance.</p>
            </blockquote>

            <h3>What Types of Cancer Can Be Treated with Radiotherapy?</h3>

            <p>Radiotherapy is effective in the treatment of many forms of cancer, including breast cancer, lung cancer, prostate cancer, gynecologic cancers, and colorectal cancer. However, every case is unique. That is why a specialist consultation is essential before treatment begins. During this consultation, the medical file is reviewed, treatment options are discussed, and a personalized plan is established for each patient.</p>

            <p>Such a plan takes into account both the location of the tumor and the stage of the disease, as well as the patient’s age and general health condition. This is precisely why the initial evaluation is extremely important and should not be delayed. Sometimes, even a few days can make a difference.</p>

            <p>Radiotherapy is not just one option among many, but one of the most important tools we have today in cancer treatment. When indicated correctly and delivered with precision, it can significantly change the course of the disease and offer a real chance of cure. That is why it is essential for each patient to be carefully evaluated and to receive a recommendation tailored to their situation. If you have received an oncologic diagnosis or you are looking for the best therapeutic approach, I encourage you to schedule a consultation. Radiotherapy, applied at the right time and in the right way, may be exactly what helps restore hope and control over your life.</p>
        `,
      },

      uk: {
        slug: "vazhlyvist-radioterapii",
        category: "Медична освіта",
        title: "Важливість променевої терапії в лікуванні раку",
        excerpt:
          "Променева терапія є важливим, точним і сучасним методом лікування, який відіграє значну роль у знищенні пухлинних клітин і захисті здорових тканин.",
        readTime: "8 хв",
        coverAlt: "Ілюстративне зображення променевої терапії",
        tags: ["Пацієнт", "Лікування", "Консультація"],
        contentHtml: ` <p>Загалом променева терапія є важливим методом лікування раку, який застосовується для знищення пухлинних клітин. За допомогою високоенергетичного випромінювання, точно спрямованого на уражену ділянку, можна зупинити розвиток пухлини або навіть повністю усунути злоякісні клітини, водночас захищаючи навколишні здорові тканини.</p> <p>Ця форма лікування є локальною, тобто діє безпосередньо на ділянку, де розташована пухлина. Променева терапія може використовуватися як основний метод лікування при певних видах раку, але часто поєднується з іншими методами, такими як хірургія або хіміотерапія, щоб підвищити загальну ефективність терапії. Іноді її також призначають із паліативною метою — для зменшення симптомів і покращення якості життя пацієнта.</p> <h3>Переваги сучасної променевої терапії</h3> <p>Сучасна променева терапія дуже відрізняється від того, що ви могли чути раніше. Завдяки технологічному прогресу сьогоднішнє лікування є:</p> <ul> <li>Набагато точнішим — випромінювання спрямовується безпосередньо на пухлину;</li> <li>Краще переносимим — побічні ефекти значно зменшені;</li> <li>Неінвазивним — не потребує розрізів чи госпіталізації;</li> <li>Швидким — сеанси тривають лише кілька хвилин, а повний курс лікування може бути відносно коротким, залежно від конкретного випадку.</li> </ul> <h3>Що відчуває пацієнт під час лікування?</h3> <p>Саме лікування є безболісним. Пацієнт лежить на спеціальному столі, а апарат рухається навколо нього, не торкаючись тіла. Випромінювання неможливо відчути, побачити чи відчути на запах. Увесь процес контролюється та постійно відстежується спеціалізованою медичною командою, до складу якої входять лікарі, фізики та радіотерапевтичні техніки.</p> <blockquote> <p>Променева терапія — це не просто медична технологія, а реальний шанс на одужання або покращення якості життя. Якщо ви або хтось із ваших близьких стикається з цією хворобою, я заохочую вас зв’язатися зі мною. Відкрита розмова та ретельна оцінка можуть відкрити новий шлях до лікування та відновлення рівноваги.</p> </blockquote> <h3>Які види раку можна лікувати променевою терапією?</h3> <p>Променева терапія є ефективною при лікуванні багатьох форм раку, включно з раком молочної залози, легені, простати, гінекологічними та колоректальними пухлинами. Однак кожен випадок є унікальним. Саме тому перед початком лікування необхідна консультація спеціаліста. Під час такої консультації вивчається медична документація, обговорюються варіанти лікування і складається індивідуальний план, адаптований до кожного пацієнта.</p> <p>Такий план враховує як локалізацію пухлини, так і стадію захворювання, вік пацієнта та його загальний стан здоров’я. Саме тому первинна оцінка є надзвичайно важливою і не повинна відкладатися. Іноді навіть кілька днів можуть мати значення.</p> <p>Променева терапія — це не просто одна з можливостей, а один із найважливіших інструментів, які ми маємо сьогодні в лікуванні раку. Коли вона призначена правильно і проводиться з високою точністю, вона може суттєво змінити перебіг хвороби та дати реальний шанс на одужання. Саме тому надзвичайно важливо, щоб кожного пацієнта уважно оцінили та надали рекомендацію, адаптовану до його ситуації. Якщо ви отримали онкологічний діагноз або шукаєте найкращий терапевтичний підхід, я заохочую вас записатися на консультацію. Променева терапія, застосована вчасно і правильно, може стати саме тим, що поверне надію та контроль над власним життям.</p> `,
      },
    },
  },
  {
    id: "mituri-radioterapie",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2025-12-20",
coverImage: imgMituriRadioterapieCover,
articleImage: imgMituriRadioterapieArticle,
    translations: {
      ro: {
        slug: "mituri-radioterapie",
        category: "Informații utile",
        title: "Mituri frecvente despre radioterapie – Ce e adevărat și ce nu",
        excerpt:
          "Clarificăm cele mai comune mituri despre radioterapie, astfel încât pacienții să înceapă tratamentul cu încredere și informații corecte.",
        readTime: "7 min",
        coverAlt: "Mituri si adevaruri despre radioterapie",
        tags: ["Pacient", "Tratament", "Mituri"],
        contentHtml: `
                <p>Radioterapia este una dintre cele mai utilizate și eficiente metode de tratament în oncologie. Cu toate acestea, în jurul ei planează încă multe temeri și neînțelegeri. Acest lucru este de înțeles – cuvintele precum „radiații” pot stârni neliniște. Tocmai de aceea, este important să clarificăm câteva dintre cele mai frecvente mituri pe care pacienții le aud sau le citesc, și să îți ofer o perspectivă corectă și reală.</p>

                <h3>❌ Mit: Radioterapia este dureroasă</h3>
                <p>✔️ <strong>Adevăr</strong>: Unul dintre cele mai liniștitoare lucruri pe care pacienții le află în prima zi de tratament este că… nu doare. Radioterapia este o procedură non-invazivă. În timpul ședinței, nu se simte nimic – nu există înțepături, tăieturi sau senzații neplăcute. Pacientul stă nemișcat, într-o poziție stabilă, iar fasciculul de radiații este direcționat cu precizie către zona afectată.</p>

                <h3>❌ Mit: Radioterapia arde pielea</h3>
                <p>✔️ <strong>Adevăr</strong>: În anumite cazuri, pot apărea reacții ușoare ale pielii în zona tratată – roșeață, uscăciune, sau o ușoară iritație. Însă aceste efecte sunt temporare, monitorizate atent de echipa medicală și gestionate cu produse dermatologice speciale, atunci când este cazul. Nu este vorba despre „arsuri” în sensul clasic și, în majoritatea cazurilor, pacienții nu au deloc disconfort.</p>

                <h3>❌ Mit: După radioterapie devii radioactiv</h3>
                <p>✔️ <strong>Adevăr</strong>: Acesta este un mit frecvent și complet fals. În cazul radioterapiei externe (cea mai utilizată formă), pacientul NU devine radioactiv și nu reprezintă niciun pericol pentru cei din jur. Poți interacționa normal cu familia, copiii sau colegii, fără restricții. Radiațiile acționează doar în timpul ședinței, iar odată ce aceasta s-a încheiat, nu rămâne nimic în corp.</p>

                <h3>❌ Mit: Radioterapia are efecte adverse severe</h3>
                <p>✔️ <strong>Adevăr</strong>: Reacțiile adverse sunt posibile, ca în orice tip de tratament, dar majoritatea sunt ușoare și temporare. Oboseala, modificările de apetit sau mici disconforturi locale pot apărea, dar sunt gestionabile și dispar treptat după încheierea tratamentului. Radioterapia modernă este gândită pentru a fi cât mai bine tolerată și adaptată fiecărui pacient în parte.</p>

                <h3>❌ Mit: Dacă faci radioterapie, nu mai poți face alte tratamente</h3>
                <p>✔️ <strong>Adevăr</strong>: Radioterapia nu exclude alte opțiuni terapeutice. Dimpotrivă, este adesea parte dintr-un plan complex care poate include și chirurgie, chimioterapie sau terapii țintite. Medicul oncolog și medicul radioterapeut colaborează pentru a decide cea mai bună combinație și secvență de tratamente, în funcție de particularitățile cazului tău.</p>

                <h3>❌ Mit: Radiațiile afectează grav organele sănătoase</h3>
                <p>✔️ <strong>Adevăr</strong>: Radioterapia modernă se bazează pe tehnologii de ultimă generație care permit livrarea cu maximă precizie a dozei de radiații. Asta înseamnă că radiația este concentrată exact pe zona afectată, iar țesuturile sănătoase sunt protejate pe cât posibil. În plus, tratamentul este planificat cu ajutorul unor simulări și algoritmi sofisticați, tocmai pentru a obține eficiență maximă cu riscuri minime.</p>

                <h3>Concluzie</h3>
                <p>Radioterapia este un tratament sigur, controlat și extrem de important în lupta împotriva cancerului. Înțelegerea corectă a procedurii te ajută să elimini anxietățile inutile și să îți găsești liniștea. Dacă ai întrebări, nelămuriri sau îngrijorări, nu ezita să discuți deschis cu medicul radioterapeut. Informația corectă este întotdeauna un pas înainte spre încredere și vindecare.</p>
            `,
      },
      en: {
        slug: "radiotherapy-myths",
        category: "Useful information",
        title: "Common Myths About Radiotherapy – What Is True and What Is Not",
        excerpt:
          "We clarify the most common myths about radiotherapy so that patients can begin treatment with confidence and accurate information.",
        readTime: "7 min",
        coverAlt: "Myths and facts about radiotherapy",
        tags: ["Patient", "Treatment", "Myths"],
        contentHtml: ` <p>Radiotherapy is one of the most widely used and effective treatment methods in oncology. Even so, many fears and misunderstandings still surround it. This is understandable – words such as “radiation” can create anxiety. That is exactly why it is important to clarify some of the most common myths that patients hear or read, and to offer you a correct and realistic perspective.</p> <h3>❌ Myth: Radiotherapy is painful</h3> <p>✔️ <strong>Fact</strong>: One of the most reassuring things patients learn on the very first day of treatment is that… it does not hurt. Radiotherapy is a non-invasive procedure. During the session, nothing is felt – there are no needles, cuts, or unpleasant sensations. The patient remains still, in a stable position, while the radiation beam is directed precisely toward the affected area.</p> <h3>❌ Myth: Radiotherapy burns the skin</h3> <p>✔️ <strong>Fact</strong>: In some cases, mild skin reactions may appear in the treated area – redness, dryness, or slight irritation. However, these effects are temporary, carefully monitored by the medical team, and managed with special dermatologic products when needed. This is not the same as a “burn” in the usual sense, and in most cases patients do not experience significant discomfort.</p> <h3>❌ Myth: After radiotherapy you become radioactive</h3> <p>✔️ <strong>Fact</strong>: This is a common and completely false myth. In the case of external radiotherapy (the most commonly used form), the patient does NOT become radioactive and does not pose any danger to others. You can interact normally with family members, children, or colleagues, without restrictions. Radiation acts only during the treatment session, and once it is finished, nothing remains in the body.</p> <h3>❌ Myth: Radiotherapy causes severe side effects</h3> <p>✔️ <strong>Fact</strong>: Side effects are possible, as with any type of treatment, but most of them are mild and temporary. Fatigue, changes in appetite, or minor local discomfort may occur, but they are manageable and gradually disappear after treatment is completed. Modern radiotherapy is designed to be as well tolerated as possible and adapted to each patient individually.</p> <h3>❌ Myth: If you undergo radiotherapy, you can no longer have other treatments</h3> <p>✔️ <strong>Fact</strong>: Radiotherapy does not exclude other therapeutic options. On the contrary, it is often part of a complex treatment plan that may also include surgery, chemotherapy, or targeted therapies. The medical oncologist and the radiation oncologist work together to determine the best combination and sequence of treatments, depending on the specifics of your case.</p> <h3>❌ Myth: Radiation seriously damages healthy organs</h3> <p>✔️ <strong>Fact</strong>: Modern radiotherapy relies on advanced technologies that allow the radiation dose to be delivered with great precision. This means the dose is concentrated exactly on the affected area, while healthy tissues are protected as much as possible. In addition, treatment is planned using simulation and sophisticated algorithms precisely to achieve maximum effectiveness with minimal risk.</p> <h3>Conclusion</h3> <p>Radiotherapy is a safe, controlled, and extremely important treatment in the fight against cancer. A correct understanding of the procedure helps eliminate unnecessary anxiety and gives you greater peace of mind. If you have questions, uncertainties, or concerns, do not hesitate to speak openly with your radiation oncologist. Accurate information is always a step forward toward confidence and healing.</p> `,
      },
      uk: {
        slug: "mify-pro-radioterapiiu",
        category: "Корисна інформація",
        title: "Поширені міфи про променеву терапію – Що є правдою, а що ні",
        excerpt:
          "Ми пояснюємо найпоширеніші міфи про променеву терапію, щоб пацієнти могли розпочати лікування з упевненістю та правильною інформацією.",
        readTime: "7 хв",
        coverAlt: "Міфи та факти про променеву терапію",
        tags: ["Пацієнт", "Лікування", "Міфи"],
        contentHtml: ` <p>Променева терапія є одним із найпоширеніших і найефективніших методів лікування в онкології. Проте навколо неї й досі існує багато страхів і непорозумінь. Це цілком зрозуміло — слова на кшталт «радіація» можуть викликати тривогу. Саме тому важливо пояснити кілька найпоширеніших міфів, які пацієнти чують або читають, і дати вам правильне та реалістичне уявлення.</p> <h3>❌ Міф: Променева терапія є болючою</h3> <p>✔️ <strong>Правда</strong>: Одне з найзаспокійливіших відкриттів, яке пацієнти роблять у перший день лікування, полягає в тому, що… це не болить. Променева терапія є неінвазивною процедурою. Під час сеансу нічого не відчувається — немає уколів, розрізів чи неприємних відчуттів. Пацієнт лежить нерухомо в стабільному положенні, а пучок випромінювання точно спрямовується на уражену ділянку.</p> <h3>❌ Міф: Променева терапія «спалює» шкіру</h3> <p>✔️ <strong>Правда</strong>: У деяких випадках у зоні лікування можуть з’явитися легкі шкірні реакції — почервоніння, сухість або незначне подразнення. Однак ці ефекти є тимчасовими, перебувають під ретельним контролем медичної команди та, за потреби, коригуються спеціальними дерматологічними засобами. Це не «опіки» у звичайному розумінні, і в більшості випадків пацієнти не мають значного дискомфорту.</p> <h3>❌ Міф: Після променевої терапії людина стає радіоактивною</h3> <p>✔️ <strong>Правда</strong>: Це поширений і повністю хибний міф. У випадку зовнішньої променевої терапії (найбільш уживаної форми) пацієнт НЕ стає радіоактивним і не становить жодної небезпеки для оточення. Ви можете нормально контактувати з родиною, дітьми чи колегами без будь-яких обмежень. Випромінювання діє лише під час сеансу, а після його завершення в організмі нічого не залишається.</p> <h3>❌ Міф: Променева терапія має тяжкі побічні ефекти</h3> <p>✔️ <strong>Правда</strong>: Побічні ефекти можливі, як і при будь-якому виді лікування, але більшість із них є легкими та тимчасовими. Може з’явитися втома, зміни апетиту або незначний локальний дискомфорт, але ці прояви контрольовані й поступово зникають після завершення лікування. Сучасна променева терапія розроблена так, щоб переноситися якомога краще та бути адаптованою до кожного пацієнта індивідуально.</p> <h3>❌ Міф: Якщо проходиш променеву терапію, інші види лікування вже неможливі</h3> <p>✔️ <strong>Правда</strong>: Променева терапія не виключає інших терапевтичних можливостей. Навпаки, вона часто є частиною комплексного плану лікування, який може також включати хірургію, хіміотерапію або таргетну терапію. Медичний онколог і лікар-радіотерапевт співпрацюють, щоб визначити найкраще поєднання та послідовність лікування залежно від особливостей вашого випадку.</p> <h3>❌ Міф: Випромінювання серйозно ушкоджує здорові органи</h3> <p>✔️ <strong>Правда</strong>: Сучасна променева терапія базується на передових технологіях, які дозволяють подавати дозу випромінювання з максимальною точністю. Це означає, що доза концентрується саме в ураженій ділянці, тоді як здорові тканини максимально захищаються. Крім того, лікування планується за допомогою симуляцій і складних алгоритмів саме для того, щоб досягти максимальної ефективності з мінімальним ризиком.</p> <h3>Висновок</h3> <p>Променева терапія — це безпечний, контрольований і надзвичайно важливий метод лікування в боротьбі з раком. Правильне розуміння процедури допомагає усунути зайву тривогу й знайти більше внутрішнього спокою. Якщо у вас є запитання, сумніви чи занепокоєння, не вагайтеся відкрито поговорити зі своїм лікарем-радіотерапевтом. Правдива інформація завжди є кроком уперед до впевненості та одужання.</p> `,
      },
    },
  },
  {
    id: "pregatire-radioterapie",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2025-11-05",
coverImage: imgPregatireRadioterapieCover,
articleImage: imgPregatireRadioterapieArticle,

    translations: {
      ro: {
        slug: "pregatire-radioterapie",
        category: "Informații utile",
        title: "Cum să te pregătești pentru o ședință de radioterapie?",
        excerpt:
          "Pregătirea corectă reduce efectele secundare și îmbunătățește eficiența tratamentului. Iată pașii practici, explicați clar.",
        readTime: "12 min",
        coverAlt: "Pregătirea pacientului pentru radioterapie",
        tags: ["Pacient", "Tratament", "Pregătire"],
        contentHtml: ` <p>Pregătirea corectă pentru radioterapie poate reduce efectele secundare și îmbunătăți eficacitatea tratamentului, oferindu-vă mai mult confort și siguranță pe parcursul terapiei. Deși fiecare plan de tratament este personalizat, există câteva recomandări generale care pot face diferența.</p>

    <h3>1. Înțelegeți procesul</h3>

    <p>Pregătirea pentru radioterapie începe cu o informare corectă. Este firesc să apară temeri în fața necunoscutului, iar înțelegerea fiecărei etape vă poate aduce multă liniște. Radioterapia nu este o intervenție chirurgicală și nu implică durere – este o metodă non-invazivă, bazată pe direcționarea unor doze controlate de radiații către zona afectată de boală.</p>

    <h4>Procesul de simulare al tratamentului</h4>

    <figure class="article-media article-media-right article-media-sm">
      <img src="${imgInlineCt.src}" alt="Simulator CT" class="article-media-img" />
    </figure>

    <p>Primul pas este ședința de simulare, care are loc înainte de începerea propriu-zisă a tratamentului. Simularea, numită și centrare sau reperaj, este prima etapă a tratamentului pe care urmează să îl primiți. Tratamentul dumneavoastră este pregătit cu ajutorul unui scanner de simulare (computer tomograf simulator), numit și scanner dosimetric. Acesta ajută la stabilirea exactă a zonei din corp care trebuie tratată și la trasarea precisă a limitelor. Aceste limite sunt marcate fie cu o vopsea specială numită fucsină, fie cu mici puncte de tatuaj. Fiind o etapă esențială pentru desfășurarea corectă a tratamentului, în general, durează între 30 de minute și o oră.</p>

    <p>Scannerul de simulare este uneori completat de alte investigații imagistice, cum ar fi RMN-ul sau PET-CT-ul, atunci când situația o impune.</p>

    <p>Etapa de simulare a tratamentului este aceeași pentru diferitele tehnici de radioterapie.</p>

    <p>Astfel, după efectuarea scannerului de simulare și stabilirea dozei totale de radiații necesare, medicul radioterapeut are nevoie de câteva zile pentru a lucra pe imaginile obținute la scanner, în vederea personalizării tratamentului în funcție de tipul tumorii și de anatomie. Această parte a activității este numită „planificare dosimetrică” și nu necesită prezența dumneavoastră. Ea este realizată de o echipă formată din mai mulți profesioniști care lucrează în strânsă colaborare: fizicieni, tehnicieni, medici radioterapeuți și alți specialiști în sănătate.</p>

    <p>Înainte de începerea tratamentului de radioterapie și apoi periodic, vi se pot face radiografii, imagini sau alte verificări pentru a ne asigura că poziția corpului și semnele de referință sunt corecte. Aceste verificări nu sunt menite să observe dacă tumora a scăzut sau s-a oprit.</p>

    <p>Totuși, în anumite cazuri, dacă se constată sau se suspectează modificări ale țesuturilor, medicul radioterapeut poate decide repetarea scannerului și optimizarea planului de tratament (de exemplu, cu ajutorul unui nou scanner dosimetric), în funcție de modificările apărute în timpul ședințelor rămase. Aceasta se numește radioterapie adaptivă.</p>

    <p>În cazul tumorilor care se mișcă odată cu respirația, ședințele de tratament pot necesita accesorii suplimentare și uneori o atenție mai mare din partea dumneavoastră, pentru ca tratamentul să fie adaptat în funcție de momentele ciclului respirator.</p>

    <div class="article-media-clear"></div>

    <h4>Tratamentul</h4>

    <p>Când ajungeți la ședința de tratament propriu-zisă, veți fi preluat de personalul medical și condus în sala cu acceleratorul liniar. Acesta este un aparat de mari dimensiuni, care poate părea impresionant la început, dar funcționează fără să simțiți nimic și este complet sigur. Vă veți întinde pe o masă, într-o poziție identică cu cea din timpul simulării, iar echipa vă va ajuta să vă așezați corect. Este posibil să primiți semne sau tatuaje mici pe piele în timpul simulării, care ajută la alinierea perfectă a corpului.</p>

    <p>Apoi, personalul va ieși din încăpere, dar veți fi supravegheat în permanență prin cameră video și audio. Aparatul se va roti în jurul dumneavoastră și veți auzi anumite sunete – însă nu veți simți absolut nimic. Tratamentul durează doar câteva minute, chiar dacă întreaga procedură (pregătire, poziționare) poate dura mai mult.</p>

    <p>Ședința este nedureroasă, nu lasă urme imediate pe piele și, în general, nu are efecte resimțite imediat. După finalizare, vă puteți întoarce acasă sau la activitățile dumneavoastră obișnuite.</p>

    <h4>Familiarizarea cu aparatele de tratament</h4>

    <figure class="article-media article-media-right article-media-md">
      <img src="${imgInlineTruebeam.src}" alt="Accelerator TrueBeam STx" class="article-media-img" />
    </figure>

    <p>Acceleratorul TrueBeam STx permite livrarea tratamentului cu o precizie extrem de mare, în special pentru tumori aflate în zone dificile. În timpul ședinței, veți fi poziționat la fel ca la simulare, iar aparatul se va roti în jurul dumneavoastră, fără a atinge corpul.</p>

    <p>Este complet nedureros, iar radiația este direcționată exact către zona afectată. Ședința durează doar câteva minute, iar întregul proces este supravegheat video și audio de echipă.</p>

    <div class="article-media-clear"></div>

    <figure class="article-media article-media-left article-media-md">
      <img src="${imgInlineHalcyon.src}" alt="Accelerator Halcyon" class="article-media-img" />
    </figure>

    <p class="pt-5">Halcyon este un accelerator liniar de ultimă generație, rapid și silențios. Datorită vitezei sale, timpul petrecut de dumneavoastră pe masă este mai redus, fără a compromite calitatea tratamentului.</p>

    <p>Este ideal pentru pacienții care se simt inconfortabil să stea mult timp în aceeași poziție și oferă o experiență de tratament mai prietenoasă, cu aceeași eficiență clinică ridicată.</p>

    <div class="article-media-clear"></div>

    <h4>Frecvența și durata ședințelor</h4>

    <p>Radioterapia nu este, de regulă, o procedură unică. În funcție de planul stabilit la început, veți avea un număr exact de ședințe, de cele mai multe ori programate zilnic (de luni până vineri), timp de câteva săptămâni. Fiecare ședință este scurtă, dar esențială – respectarea programului este foarte importantă pentru eficiența tratamentului.</p>

    <p>Tratamentul are un efect cumulativ, adică beneficiile și eventualele reacții apar treptat, pe măsură ce ședințele se acumulează. Este normal să nu simțiți nimic la primele întâlniri – rezultatele se construiesc în timp.</p>

    <h3>2. Aveți grijă de pielea din zona iradiată</h3>

    <p>Pe durata radioterapiei, pielea din zona expusă tratamentului poate deveni mai sensibilă decât de obicei. Este important să o protejați și să evitați orice factori care ar putea irita sau agrava această sensibilitate. Nu aplicați loțiuni, creme, uleiuri sau parfumuri pe zona tratată, decât dacă acestea v-au fost recomandate de medicul radioterapeut – unele produse pot interacționa negativ cu radiațiile sau pot bloca eficiența tratamentului.</p>

    <p>Îmbrăcați-vă cât mai confortabil, alegând haine lejere, din materiale naturale, precum bumbacul, care permit pielii să respire și reduc frecarea sau presiunea asupra zonei tratate. De asemenea, este esențial să evitați complet expunerea la soare a regiunii iradiate, chiar și pentru perioade scurte – pielea devine mai vulnerabilă și poate reacționa puternic la razele UV.</p>

    <p>Grija pentru piele în această perioadă nu este un moft, ci o parte esențială a tratamentului. O piele bine protejată contribuie la confortul dumneavoastră și permite continuarea tratamentului fără întreruperi. Dacă observați orice schimbare (roșeață accentuată, senzație de arsură, uscăciune severă), informați imediat echipa medicală – există soluții blânde și eficiente pentru a gestiona aceste reacții.</p>

    <h3>3. Odihnă și alimentație echilibrată – aliații dumneavoastră în timpul tratamentului</h3>

    <p>Un organism bine hrănit și odihnit va face față mai ușor ședințelor de radioterapie. Este complet normal să resimțiți oboseală pe parcursul tratamentului, chiar dacă dormiți suficient noaptea. Corpul dumneavoastră consumă multă energie pentru a se reface, așa că nu ezitați să vă oferiți pauze, să vă relaxați și să vă ajustați ritmul zilnic în funcție de cum vă simțiți. Fie că alegeți o plimbare ușoară, o sesiune de respirație conștientă sau pur și simplu odihnă, toate contribuie la echilibrul dumneavoastră fizic și emoțional.</p>

    <p>Totodată, alimentația are un rol esențial în susținerea organismului. În ziua ședinței, evitați mesele grele sau foarte consistente, mai ales dacă urmează să fie tratată o zonă din sfera abdominală. Optați pentru alimente ușor digerabile, precum supele, orezul, legumele fierte, iaurtul sau fructele moi. Hidratarea este la fel de importantă – consumul regulat de apă ajută la menținerea unui bun tonus și la eliminarea mai rapidă a toxinelor din corp.</p>

    <h3>4. Respectați programările și veniți la timp</h3>

    <p>Radioterapia își atinge eficiența maximă atunci când este administrată cu regularitate, în ședințe programate la intervale bine stabilite. Fiecare sesiune face parte dintr-un plan terapeutic atent calculat, iar respectarea orelor și zilelor de tratament este esențială pentru a obține rezultatele dorite. Întârzierile sau întreruperile pot afecta ritmul terapiei și, implicit, eficacitatea acesteia. Încercați să ajungeți cu câteva minute mai devreme, astfel încât să evitați stresul inutil și să vă pregătiți în liniște pentru ședință.</p>

    <h3>5. Comunicați deschis cu echipa medicală</h3>

    <p>Pe parcursul tratamentului, este important să nu rămâneți singuri cu întrebările, disconfortul sau simptomele noi. Comunicarea cu medicul radioterapeut și cu asistenții din echipa de tratament vă poate ajuta să gestionați mai ușor eventualele efecte secundare și să beneficiați de sprijinul de care aveți nevoie. Informați-i imediat dacă resimțiți durere, dacă observați modificări ale pielii în zona iradiată, dacă experimentați oboseală accentuată, greață sau orice altă schimbare care vă îngrijorează.</p>

    <p>Fiecare organism reacționează diferit la tratament, iar echipa medicală este acolo tocmai pentru a vă adapta îngrijirea în funcție de ceea ce simțiți. Nu ezitați să întrebați, să solicitați sfaturi sau lămuriri – orice discuție sinceră contribuie la un tratament mai eficient și mai bine tolerat. Aveți dreptul să fiți informat și sprijinit la fiecare pas.</p>
  `,
      },

      en: {
        slug: "how-to-prepare-for-a-radiotherapy-session",
        category: "Useful information",
        title: "How to Prepare for a Radiotherapy Session",
        excerpt:
          "Proper preparation can reduce side effects and improve treatment effectiveness. Here are the practical steps, explained clearly.",
        readTime: "12 min",
        coverAlt: "Patient preparation for radiotherapy",
        tags: ["Patient", "Treatment", "Preparation"],
        contentHtml: `
    <p>Proper preparation for radiotherapy can reduce side effects and improve the effectiveness of treatment, giving you more comfort and confidence throughout therapy. Although each treatment plan is personalized, there are a few general recommendations that can make a real difference.</p>

    <h3>1. Understand the process</h3>

    <p>Preparing for radiotherapy begins with accurate information. It is natural to feel anxious when facing the unknown, and understanding each step can bring a great deal of reassurance. Radiotherapy is not surgery and it does not involve pain — it is a non-invasive treatment based on directing controlled doses of radiation to the area affected by disease.</p>

    <h4>Treatment simulation process</h4>

    <figure class="article-media article-media-right article-media-sm">
      <img src="${imgInlineCt}" alt="Simulator CT" class="article-media-img" />
    </figure>

    <p>The first step is the simulation session, which takes place before the actual treatment begins. Simulation, also called positioning or treatment planning setup, is the first stage of the treatment you are about to receive. Your treatment is prepared using a simulation scanner (a CT simulator), also called a dosimetric scanner. This helps define the exact area of the body that needs to be treated and allows the treatment boundaries to be mapped with precision. These boundaries are marked either with a special dye or with tiny tattoo dots. Because this is an essential stage for the correct delivery of treatment, it generally lasts between 30 minutes and one hour.</p>

    <p>The simulation scanner may sometimes be complemented by other imaging investigations, such as MRI or PET-CT, when the situation requires it.</p>

    <p>The simulation stage is the same for the different radiotherapy techniques.</p>

    <p>After the simulation scan has been completed and the total radiation dose has been determined, the radiation oncologist needs a few days to work on the acquired images in order to personalize the treatment according to the type of tumor and the patient’s anatomy. This part of the process is called dosimetric planning and does not require your presence. It is carried out by a team of professionals working closely together: physicists, radiation therapists, radiation oncologists and other healthcare specialists.</p>

    <p>Before the start of radiotherapy, and then periodically during treatment, X-rays, images or other checks may be performed to ensure that your body position and reference marks are correct. These checks are not intended to assess whether the tumor has shrunk or stopped growing.</p>

    <p>However, in certain cases, if tissue changes are detected or suspected, the radiation oncologist may decide to repeat the scan and optimize the treatment plan (for example, with the help of a new dosimetric scan), depending on the changes that occur during the remaining sessions. This is called adaptive radiotherapy.</p>

    <p>In the case of tumors that move with breathing, treatment sessions may require additional accessories and sometimes greater attention from you, so that the treatment can be adapted according to specific phases of the breathing cycle.</p>

    <div class="article-media-clear"></div>

    <h4>Treatment delivery</h4>

    <p>When you arrive for the actual treatment session, you will be guided by the medical staff into the treatment room with the linear accelerator. This is a large machine that may seem impressive at first, but it works safely and you will not feel anything during the procedure. You will lie on a treatment table in exactly the same position used during simulation, and the team will help you get into the correct position. You may have small marks or tattoos on your skin from the simulation session, which help ensure perfect alignment of the body.</p>

    <p>Then the staff will leave the room, but you will be monitored continuously through video and audio systems. The machine will rotate around you and you may hear certain sounds — but you will feel absolutely nothing. The treatment itself lasts only a few minutes, even though the entire procedure (preparation and positioning) may take a little longer.</p>

    <p>The session is painless, it does not leave immediate marks on the skin, and in general it does not cause effects that are felt right away. Once the session is finished, you can return home or go back to your usual daily activities.</p>

    <h4>Getting familiar with the treatment machines</h4>

    <figure class="article-media article-media-right article-media-md">
      <img src="${imgInlineTruebeam.src}" alt="Accelerator TrueBeam STx" class="article-media-img" />
    </figure>

    <p>The TrueBeam STx linear accelerator allows treatment to be delivered with extremely high precision, especially for tumors located in difficult areas. During the session, you will be positioned exactly as you were during simulation, and the machine will rotate around you without touching your body.</p>

    <p>It is completely painless, and the radiation is directed precisely to the affected area. The session lasts only a few minutes, and the entire process is monitored by the team through video and audio.</p>

    <div class="article-media-clear"></div>

    <figure class="article-media article-media-left article-media-md">
      <img src="${imgInlineHalcyon.src}" alt="Accelerator Halcyon" class="article-media-img" />
    </figure>

    <p class="pt-5">Halcyon is a next-generation linear accelerator that is fast and quiet. Thanks to its speed, the time you spend on the treatment table is shorter, without compromising the quality of treatment.</p>

    <p>It is ideal for patients who feel uncomfortable remaining in the same position for a long time, and it provides a more patient-friendly treatment experience while maintaining the same high clinical effectiveness.</p>

    <div class="article-media-clear"></div>

    <h4>Frequency and duration of sessions</h4>

    <p>Radiotherapy is usually not a single procedure. Depending on the treatment plan established at the beginning, you will have an exact number of sessions, most often scheduled daily (Monday to Friday) over several weeks. Each session is short, but essential — following the schedule carefully is very important for treatment effectiveness.</p>

    <p>Treatment has a cumulative effect, meaning that both the benefits and any side effects appear gradually as the sessions add up. It is normal not to feel anything during the first appointments — the results build over time.</p>

    <h3>2. Take care of the skin in the treated area</h3>

    <p>During radiotherapy, the skin in the treated area may become more sensitive than usual. It is important to protect it and avoid anything that could irritate or worsen this sensitivity. Do not apply lotions, creams, oils or perfumes to the treated area unless they have been recommended by your radiation oncologist — some products may interact negatively with radiation or interfere with treatment effectiveness.</p>

    <p>Wear comfortable clothing, choosing loose garments made from natural fabrics such as cotton, which allow the skin to breathe and reduce friction or pressure on the treated area. It is also essential to avoid direct sun exposure to the irradiated region, even for short periods — the skin becomes more vulnerable and may react strongly to UV rays.</p>

    <p>Skin care during this period is not just a minor detail, but an essential part of treatment. Well-protected skin contributes to your comfort and helps treatment continue without interruption. If you notice any change such as marked redness, a burning sensation or severe dryness, inform the medical team immediately — there are gentle and effective ways to manage these reactions.</p>

    <h3>3. Rest and balanced nutrition — your allies during treatment</h3>

    <p>A well-nourished and well-rested body will cope more easily with radiotherapy sessions. It is completely normal to feel tired during treatment, even if you sleep enough at night. Your body uses a great deal of energy to recover, so do not hesitate to give yourself breaks, relax, and adjust your daily rhythm according to how you feel. Whether you choose a light walk, a mindful breathing session or simply rest, all of these can support your physical and emotional balance.</p>

    <p>Nutrition also plays an essential role in supporting the body. On the day of your session, avoid heavy or very large meals, especially if an area in the abdominal region is going to be treated. Choose foods that are easy to digest, such as soups, rice, cooked vegetables, yogurt or soft fruits. Hydration is just as important — drinking water regularly helps maintain your strength and supports the body’s natural recovery processes.</p>

    <h3>4. Respect your appointments and arrive on time</h3>

    <p>Radiotherapy achieves maximum effectiveness when it is delivered regularly, in sessions scheduled at carefully planned intervals. Each session is part of a precisely calculated treatment plan, and respecting the treatment days and times is essential for achieving the desired results. Delays or interruptions can affect the rhythm of therapy and, therefore, its effectiveness. Try to arrive a few minutes early so that you can avoid unnecessary stress and prepare calmly for your session.</p>

    <h3>5. Communicate openly with the medical team</h3>

    <p>During treatment, it is important not to remain alone with your questions, discomfort or any new symptoms. Communication with your radiation oncologist and the treatment team can help you manage possible side effects more easily and receive the support you need. Inform them immediately if you feel pain, notice skin changes in the treated area, experience significant fatigue, nausea or any other change that worries you.</p>

    <p>Each body responds differently to treatment, and the medical team is there to adapt your care according to how you feel. Do not hesitate to ask questions, seek advice or request clarification — every honest discussion contributes to a more effective and better tolerated treatment. You have the right to be informed and supported every step of the way.</p>
  `,
      },

      uk: {
        slug: "yak-pidhotuvatysya-do-seansu-radioterapiyi",
        category: "Корисна інформація",
        title: "Як підготуватися до сеансу променевої терапії",
        excerpt:
          "Правильна підготовка може зменшити побічні ефекти та підвищити ефективність лікування. Ось практичні кроки, пояснені просто і зрозуміло.",
        readTime: "12 хв",
        coverAlt: "Підготовка пацієнта до променевої терапії",
        tags: ["Пацієнт", "Лікування", "Підготовка"],
        contentHtml: `
    <p>Правильна підготовка до променевої терапії може зменшити побічні ефекти та підвищити ефективність лікування, забезпечуючи вам більше комфорту й упевненості протягом усього курсу терапії. Хоча кожен план лікування є індивідуальним, існує кілька загальних рекомендацій, які справді можуть мати значення.</p>

    <h3>1. Зрозумійте сам процес</h3>

    <p>Підготовка до променевої терапії починається з правильної інформації. Цілком природно відчувати тривогу перед невідомим, а розуміння кожного етапу може принести багато спокою. Променева терапія — це не хірургічне втручання і вона не супроводжується болем. Це неінвазивний метод лікування, заснований на спрямуванні контрольованих доз випромінювання на ділянку, уражену хворобою.</p>

    <h4>Процес симуляції лікування</h4>

    <figure class="article-media article-media-right article-media-sm">
      <img src="${imgInlineCt.src}" alt="Simulator CT" class="article-media-img" />
    </figure>

    <p>Першим етапом є сеанс симуляції, який проводиться перед фактичним початком лікування. Симуляція, яку також називають центруванням або розміткою, є першим етапом лікування, яке ви маєте отримати. Ваше лікування готується за допомогою симуляційного сканера (комп’ютерного томографа-симулятора), який також називають дозиметричним сканером. Він допомагає точно визначити ділянку тіла, яка потребує лікування, і дуже точно окреслити її межі. Ці межі позначаються або спеціальною фарбою, або маленькими точками татуювання. Оскільки це надзвичайно важливий етап для правильного проведення лікування, зазвичай він триває від 30 хвилин до однієї години.</p>

    <p>Іноді симуляційний сканер доповнюється іншими візуалізаційними дослідженнями, такими як МРТ або ПЕТ-КТ, якщо цього вимагає конкретна ситуація.</p>

    <p>Етап симуляції є однаковим для різних технік променевої терапії.</p>

    <p>Після проведення симуляційного сканування та визначення загальної необхідної дози випромінювання лікар-радіотерапевт потребує кілька днів, щоб опрацювати отримані зображення та індивідуалізувати лікування відповідно до типу пухлини й анатомічних особливостей пацієнта. Ця частина процесу називається дозиметричним плануванням і не потребує вашої присутності. Вона виконується командою фахівців, які тісно співпрацюють між собою: фізиками, радіотерапевтами, лікарями-радіотерапевтами та іншими медичними спеціалістами.</p>

    <p>Перед початком променевої терапії, а потім періодично під час лікування, вам можуть робити рентгенівські знімки, інші зображення або перевірки, щоб переконатися, що положення тіла та контрольні мітки є правильними. Ці перевірки не призначені для того, щоб оцінювати, чи зменшилася пухлина або чи припинила вона ріст.</p>

    <p>Однак у певних випадках, якщо виявляються або підозрюються зміни в тканинах, лікар-радіотерапевт може прийняти рішення повторити сканування та оптимізувати план лікування (наприклад, за допомогою нового дозиметричного сканера) залежно від змін, які виникли під час сеансів, що залишилися. Це називається адаптивною променевою терапією.</p>

    <p>У випадку пухлин, що рухаються разом із диханням, сеанси лікування можуть вимагати додаткових аксесуарів, а інколи й більшої уваги з вашого боку, щоб лікування можна було адаптувати до певних фаз дихального циклу.</p>

    <div class="article-media-clear"></div>

    <h4>Лікування</h4>

    <p>Коли ви приходите на сам сеанс лікування, медичний персонал проводить вас до зали з лінійним прискорювачем. Це велике обладнання, яке спочатку може здатися вражаючим, але воно працює безпечно, і ви нічого не відчуватимете під час процедури. Ви ляжете на спеціальний стіл у точно такому ж положенні, як і під час симуляції, а команда допоможе вам правильно розташуватися. Під час симуляції на шкірі можуть бути зроблені маленькі позначки або татуювання, які допомагають ідеально вирівняти тіло.</p>

    <p>Після цього персонал вийде з кімнати, але за вами постійно спостерігатимуть за допомогою відео- та аудіосистем. Апарат обертатиметься навколо вас, і ви можете чути певні звуки — але абсолютно нічого не відчуєте. Саме лікування триває лише кілька хвилин, хоча вся процедура (підготовка й позиціонування) може зайняти трохи більше часу.</p>

    <p>Сеанс є безболісним, не залишає негайних слідів на шкірі і загалом не викликає ефектів, які відчуваються одразу. Після завершення процедури ви можете повернутися додому або до своїх звичних щоденних справ.</p>

    <h4>Ознайомлення з апаратами для лікування</h4>

    <figure class="article-media article-media-right article-media-md">
      <img src="${imgInlineTruebeam.src}" alt="Accelerator TrueBeam STx" class="article-media-img" />
    </figure>

    <p>Лінійний прискорювач TrueBeam STx дозволяє проводити лікування з надзвичайно високою точністю, особливо для пухлин, розташованих у складних зонах. Під час сеансу вас розмістять так само, як і під час симуляції, а апарат обертатиметься навколо вас, не торкаючись тіла.</p>

    <p>Процедура є повністю безболісною, а випромінювання спрямовується точно на уражену ділянку. Сеанс триває лише кілька хвилин, а весь процес контролюється командою через відео та аудіо.</p>

    <div class="article-media-clear"></div>

    <figure class="article-media article-media-left article-media-md">
      <img src="${imgInlineHalcyon.src}" alt="Accelerator Halcyon" class="article-media-img" />
    </figure>

    <p class="pt-5">Halcyon — це лінійний прискорювач нового покоління, швидкий і тихий. Завдяки його швидкості час, який ви проводите на столі для лікування, є коротшим, без жодного компромісу щодо якості лікування.</p>

    <p>Він особливо підходить пацієнтам, яким важко довго залишатися в одному положенні, і забезпечує більш комфортний досвід лікування при збереженні такої ж високої клінічної ефективності.</p>

    <div class="article-media-clear"></div>

    <h4>Частота та тривалість сеансів</h4>

    <p>Променева терапія зазвичай не є одноразовою процедурою. Залежно від плану лікування, встановленого на початку, ви матимете чітко визначену кількість сеансів, найчастіше щодня (з понеділка по п’ятницю) протягом кількох тижнів. Кожен сеанс є коротким, але дуже важливим — дотримання графіка має велике значення для ефективності лікування.</p>

    <p>Лікування має кумулятивний ефект, тобто як користь, так і можливі побічні реакції з’являються поступово в міру накопичення сеансів. Нормально нічого не відчувати під час перших відвідувань — результати формуються з часом.</p>

    <h3>2. Дбайте про шкіру в зоні опромінення</h3>

    <p>Під час променевої терапії шкіра в зоні лікування може стати чутливішою, ніж зазвичай. Важливо захищати її та уникати всього, що може викликати подразнення або посилити цю чутливість. Не наносіть на опромінену ділянку лосьйони, креми, олії чи парфуми, якщо їх не рекомендував ваш лікар-радіотерапевт — деякі засоби можуть негативно взаємодіяти з випромінюванням або знижувати ефективність лікування.</p>

    <p>Носіть зручний одяг, обираючи вільні речі з натуральних тканин, наприклад бавовни, які дозволяють шкірі дихати та зменшують тертя або тиск на оброблювану ділянку. Також дуже важливо повністю уникати прямого сонячного впливу на опромінену зону, навіть протягом короткого часу — шкіра стає більш вразливою і може сильно реагувати на ультрафіолетове випромінювання.</p>

    <p>Догляд за шкірою в цей період — це не дрібниця, а важлива частина лікування. Добре захищена шкіра сприяє вашому комфорту й дозволяє продовжувати лікування без перерв. Якщо ви помічаєте будь-які зміни, такі як виражене почервоніння, відчуття печіння або сильна сухість, негайно повідомте медичну команду — існують делікатні й ефективні способи контролю цих реакцій.</p>

    <h3>3. Відпочинок і збалансоване харчування — ваші союзники під час лікування</h3>

    <p>Організм, який добре харчується і достатньо відпочиває, легше переносить сеанси променевої терапії. Цілком нормально відчувати втому під час лікування, навіть якщо ви добре спите вночі. Ваше тіло витрачає багато енергії на відновлення, тому не соромтеся робити паузи, розслаблятися та змінювати щоденний ритм відповідно до свого самопочуття. Легка прогулянка, дихальні вправи або просто відпочинок — усе це підтримує ваш фізичний і емоційний баланс.</p>

    <p>Харчування також відіграє важливу роль у підтримці організму. У день сеансу уникайте важкої або дуже ситної їжі, особливо якщо лікуватиметься зона живота. Обирайте легкозасвоювані продукти, такі як супи, рис, варені овочі, йогурт або м’які фрукти. Гідратація не менш важлива — регулярне вживання води допомагає підтримувати сили та сприяє природному відновленню організму.</p>

    <h3>4. Дотримуйтеся графіка і приходьте вчасно</h3>

    <p>Променева терапія досягає максимальної ефективності тоді, коли проводиться регулярно, у сеансах, запланованих через чітко визначені проміжки часу. Кожен сеанс є частиною точно розрахованого терапевтичного плану, а дотримання днів і часу лікування є дуже важливим для досягнення бажаних результатів. Запізнення або перерви можуть порушити ритм терапії і, відповідно, її ефективність. Намагайтеся приходити на кілька хвилин раніше, щоб уникнути зайвого стресу та спокійно підготуватися до сеансу.</p>

    <h3>5. Відкрито спілкуйтеся з медичною командою</h3>

    <p>Під час лікування важливо не залишатися наодинці зі своїми запитаннями, дискомфортом чи новими симптомами. Спілкування з вашим лікарем-радіотерапевтом та командою лікування допоможе легше впоратися з можливими побічними ефектами й отримати необхідну підтримку. Негайно повідомляйте їм, якщо ви відчуваєте біль, помічаєте зміни шкіри в зоні опромінення, маєте виражену втому, нудоту або будь-які інші зміни, що вас турбують.</p>

    <p>Кожен організм реагує на лікування по-різному, і медична команда існує саме для того, щоб адаптувати догляд відповідно до вашого самопочуття. Не соромтеся ставити запитання, просити поради чи роз’яснення — кожна щира розмова сприяє ефективнішому й краще переносимому лікуванню. Ви маєте право бути поінформованими та підтриманими на кожному етапі.</p>
  `,
      },
    },
  },
  {
    id: "radioterapia-pe-intelesul-tuturor",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2026-03-10",
    coverImage: imgRadioterapiaPeIntelesulTuturorCover,
    articleImage: imgRadioterapiaPeIntelesulTuturorArticle,
    bigImage: imgRadioterapiaPeIntelesulTuturorBig,
    translations: {
      ro: {
        slug: "radioterapia-pe-intelesul-tuturor",
        category: "Educație medicală",
        title: "Radioterapia pe înțelesul tuturor – ce este și cum decurge",
        excerpt:
          "Un ghid amplu și accesibil: când se recomandă radioterapia, cum se desfășoară, ce efecte secundare pot apărea și cum le gestionăm.",
        readTime: "15 min",
        coverAlt: "Discuție despre planul terapeutic",
        tags: ["Pacient", "Tratament", "Consultație"],
        contentHtml: `
        <h3>Introducere – De la incertitudine la încredere</h3>
        <p>În momentul în care primești diagnosticul de cancer, fiecare nou cuvânt medical poate suna amenințător. „Radioterapia” este unul dintre acele cuvinte. Mulți pacienți îmi povestesc că prima lor reacție a fost o teamă, alimentată de informații fragmentare găsite pe internet sau de povești de la cunoștințe.</p>
        <p>Totuși, în spatele acestor emoții există astăzi vești cu adevărat bune. Tratamentele oncologice moderne aduc rezultate remarcabile: de la chirurgia minim invazivă la terapiile țintite, imunoterapia și, bineînțeles, radioterapia de înaltă precizie. Mulți pacienți se recuperează complet sau își țin boala sub control pe termen lung, continuându-și viața activă alături de familie și prieteni.</p>
        <p>În această transformare, radioterapia joacă un rol esențial. Fiind un tratament local, precis și sigur, ea contribuie decisiv la vindecare sau la menținerea bolii sub control, fie singură, fie în combinație cu alte terapii.</p>
        <p>Pentru că necunoscutul naște teamă, scopul acestui articol este să îți ofere explicații accesibile și exemple concrete, astfel încât să iei decizii informate și să îți recapeți sentimentul de control asupra propriului plan de tratament.</p>

        <h3>Ce este, de fapt, radioterapia?</h3>
        <p>Imaginează-ți o lupă care concentrează lumina soarelui pe o singură frunză uscată dintr-un copac. Lumina este peste tot, dar abia focalizarea ei o transformă într-o energie capabilă să schimbe ceva. Radioterapia funcționează după un principiu similar: folosim fascicule de radiații ionizante – de obicei raze X de energie înaltă – dirijate către țesuturile care conțin celule canceroase. Aceste fascicule distrug capacitatea celulelor maligne de a se multiplica, permițând organismului să le elimine treptat. Spre deosebire de chimioterapie, care circulă în tot corpul, radioterapia este un tratament local: lovește țintit, acolo unde avem nevoie, protejând maximum de țesut sănătos din jur.</p>
        <p>În ultimul deceniu, evoluțiile tehnologice au avut un impact major asupra tratamentelor de radioterapie. Radioterapia modernă permite o iradiere mult mai precisă și mai rapidă, reducând semnificativ timpul petrecut de pacient pe masa de tratament. Înaintea fiecărei ședințe se pot realiza imagini de control pentru a verifica poziționarea, iar în unele cazuri planul poate fi ajustat zilnic, astfel încât doza să fie livrată cu acuratețe maximă, protejând mai bine organele sănătoase și țintind eficient zona afectată. Precizia ajunge la fracțiuni de milimetru, ceea ce se traduce în doze mai mari către tumoră și mai mici către organele sănătoase.</p>

        <h3>Când și de ce se recomandă radioterapia</h3>
        <ul>
            <li><strong>După operație (adjuvant)</strong>  – distruge eventuale celule rămase invizibile la microscop.</li>
            <li><strong>Înainte de operație (neoadjuvant)</strong>  – micșorează tumora și face intervenția chirurgicală mai puțin invazivă.</li>
            <li><strong>Tratament principal</strong> – la anumite tipuri de cancer (de exemplu, prostata) poate fi terapie curativă în sine.</li>
            <li><strong>Paliativ sau de ameliorare</strong> – reduce durerea sau sângerarea în metastaze osoase, cerebrale ori pelvine.</li>
        </ul>
        <p>Mesaj-cheie: Radioterapia nu este „ultima soluție”, ci una dintre primele arme moderne pe care le avem.</p>

        <h3>Cum decurge tratamentul, pas cu pas</h3>
        <p>Totul începe cu consultația inițială, unde evaluăm istoricul medical, analizele imagistice și tratamentele efectuate până acum. Sunt adresate mai multe întrebări, tocmai pentru a înțelege nu doar boala, ci și stilul tău de viață, preferințele și eventualele temeri. Urmează planificarea: realizăm o simulare imagistică utilizând un CT-simulator, în poziția exactă în care vei sta la fiecare ședință. Uneori confecționăm o mască termoplastică (pentru cap și gât) sau folosim sisteme de vacuum și perne personalizate, menite să păstreze corpul nemișcat. Pe CT-ul de simulare, medicul deliniaza volumul de tratat si organele din jur care trebuie protejate, iar fizicianul medical, împreună cu un software de ultimă generație, calculează distribuția ideală a dozei.</p>
        <p>Faza de verificare presupune un control riguros de calitate al planului, astfel încât doza să fie livrată exact cum a fost calculată. La fiecare ședință, se face imageria de control a poziției(CBCT) că și măsură de siguranță. Orice diferență mai mare de un milimetru este corectată pe loc, prin mici mișcări ale mesei de tratament. Procedura în sine - propriu-zisă durează aproximativ zece-treizeci de minute, in funcție de zona tratată și tipul de tratament folosit.</p>
        <p><strong>Nu vei simți nimic în timpul iradierii:</strong> nu există căldură, arsuri instantanee sau șocuri electrice. Iar imediat ce te ridici de pe masă, poți să îți reiei activitățile zilnice.</p>

        <h3>Efecte secundare și modalități de gestionare</h3>
        <p>Orice tratament eficient poate aduce reacții nedorite, însă cele mai multe sunt ușoare și tranzitorii.</p>
        <p><strong>Oboseala</strong> este cea mai frecventă; apare progresiv pe parcursul săptămânilor și se ameliorează de regulă la câteva săptămâni după terminarea curei. Te încurajez să îți asculți corpul și să faci pauze scurte în timpul zilei, fără a renunța complet la mișcare, pentru că exercițiul fizic blând combate mai bine oboseala decât repausul absolut.</p>
        <p><strong>Pielea</strong> de pe zona iradiată poate deveni ușor roșiatică, asemănătoare unui bronz discret. Se recomanda evitarea frecării, a băilor fierbinți și utilizarea cremelor înainte de tratament. Pentru regiunile abdominale sau pelvine, pot exista modificări tranzitorii ale tranzitului digestiv sau urinare mai frecventă; anticipăm aceste efecte și discutăm încă de la început un set de reguli dietetice și medicamente de suport.</p>
        <p><strong>Greața</strong> poate apărea în cazul iradierii abdomenului, dar este bine controlată cu medicamente antiemetice moderne. În cazul iradierii capului și gâtului, pot apărea dificultăți la înghițire sau uscăciune a gurii, însă există soluții eficiente pentru aceste simptome.</p>
        <p><strong>Alte efecte</strong> pot include căderea părului în zona tratată, modificări ale gustului sau senzație de amorțeală. Acestea sunt de obicei temporare și se ameliorează după încheierea tratamentului.</p>
        <p><strong>Ceea ce NU se întâmplă:</strong> Nu devii radioactiv! Și nu, nu transmiți „razele” altora, iar durerea severă în timpul ședinței este practic imposibilă. Echipa medicala, compusă din medici, tehnicieni și fizicieni, este pregătită pe tot parcursul să intervină rapid dacă apare orice disconfort.</p>

        <h3>Întrebări frecvente</h3>
        <p><strong><i>Cât de „puternice” sunt radiațiile și îmi pot face rău pe termen lung?</i></strong><br> 
        Raspuns: Doza administrată la fiecare ședință este strict calculată – suficientă pentru a distruge celulele canceroase, dar cu mult sub pragurile de siguranță pentru țesuturile sănătoase. Ca ordine de mărime, expunerea zilnică este comparabilă cu cea a unei examinări CT, însă concentrată local și fracționată astfel încât organismul să poată repara rapid celulele normale. Planul este monitorizat constant, iar aparatul se oprește automat dacă detectează orice abatere.</p>
        <p><strong><i>Pot îmbrățișa apropiații după fiecare ședință?</i></strong><br>
        Raspuns: Da, radioterapia externă nu lasă radiații reziduale în corpul tău. Contactul fizic este perfect sigur.</p>
        <p><strong><i>Îmi va cădea părul?</i></strong><br>
        Raspuns: Doar dacă porțiunea iradiată include scalpul. Pentru sâni, pelvis sau plămân, părul rămâne intact.</p>
        <p><strong><i>Cât va dura schema mea?</i></strong><br>
        Raspuns: În funcție de obiectiv, există protocoale de o singură ședință (în stereotaxie) până la planuri clasice de cinci-șapte săptămâni. Durata finală se decide individual în funcție de mai multe particularități.</p>
        <p><strong><i>Pot continua serviciul?</i></strong><br>
        Raspuns: În peste 70 % din cazuri, pacienții merg la muncă pe tot parcursul tratamentului, cu recomandarea de a-și ajusta programul dacă oboseala devine supărătoare.</p>
        <p><strong><i>Trebuie să țin regim alimentar strict?</i></strong><br>
        Raspuns: Nu există o „dietă universală pentru radioterapie”, dar hidratarea adecvată și un meniu bogat în proteine și vitamine accelerează vindecarea țesuturilor.</p>
        <p><strong><i>Mai pot face sport?</i></strong><br>
        Raspuns: Da, însă optează pentru activități moderate: plimbări, exerciții de respirație, yoga ușoară. Eforturile extreme se amână până după terminarea curei.</p>
    
        <h3> De ce să nu-ți mai fie frică </h3>
        <p> Tehnologia de astăzi are încorporate sisteme inteligente de siguranță: detectoare care opresc fasciculul la cea mai mică mișcare neașteptată, verificări zilnice ale parametrilor mașinii și audituri externe semestriale. Pe scurt, doza calculată în plan rămâne doza pe care o primești, fără surprize. Mai mult, studiile clinice arată că radiațiile externe nu cresc riscul altor boli atunci când sunt administrate corect; beneficiile depășesc net orice risc potențial.</p>
        <h3>Cuvânt de încheiere - Împreună, pas cu pas</h3>
        <p>Mă numesc <strong>Tatiana Cirimpei</strong> și, dincolo de a fi medic, sunt partenerul dumneavoastră de încredere în această călătorie. Am ales radioterapia tocmai pentru că îmbină precizia științei cu empatia relației umane. Cred cu tărie că fiecare pacient are dreptul la explicații clare și la decizii medicale care respectă nu doar boala, ci și valorile și planurile sale de viață. Dacă ai ajuns la finalul acestui articol, înseamnă că ești gata să treci de la incertitudine la acțiune.</p>

        <blockquote>
            <i>Nu lăsa întrebările fără răspuns: scrie-mi oricând dorești sau programează o consultație. În cele mai multe cazuri, claritatea câștigată într-o discuție față în față este începutul vindecării. Radioterapia nu este doar o tehnică medicală – este o șansă reală de vindecare sau de îmbunătățire a vieții.</i>
        </blockquote>
        `,
      },

      en: {
        slug: "radiotherapy-explained-simply",
        category: "Medical education",
        title:
          "Radiotherapy Made Easy to Understand — What It Is and How It Works",
        excerpt:
          "A comprehensive and accessible guide: when radiotherapy is recommended, how it works, what side effects may occur, and how we manage them.",
        readTime: "15 min",
        coverAlt: "Discussion about the treatment plan",
        tags: ["Patient", "Treatment", "Consultation"],
        contentHtml: `
  <h3>Introduction — From uncertainty to confidence</h3>
  <p>The moment you receive a cancer diagnosis, every new medical term can sound frightening. “Radiotherapy” is one of those words. Many patients tell me that their first reaction was fear, fueled by fragmented information found online or by stories they had heard from others.</p>
  <p>Yet behind these emotions, there is truly good news today. Modern cancer treatments deliver remarkable results: from minimally invasive surgery to targeted therapies, immunotherapy and, of course, high-precision radiotherapy. Many patients recover completely or keep their disease under control in the long term, continuing to live active lives alongside their families and friends.</p>
  <p>In this transformation, radiotherapy plays an essential role. As a local, precise and safe treatment, it contributes decisively either to cure or to keeping the disease under control, whether used alone or in combination with other therapies.</p>
  <p>Because the unknown creates fear, the purpose of this article is to offer you accessible explanations and concrete examples, so that you can make informed decisions and regain a sense of control over your own treatment plan.</p>

  <h3>What exactly is radiotherapy?</h3>
  <p>Imagine a magnifying glass concentrating sunlight onto a single dry leaf on a tree. Light is everywhere, but only when it is focused does it become an energy capable of changing something. Radiotherapy works according to a similar principle: we use beams of ionizing radiation — most often high-energy X-rays — directed toward tissues that contain cancer cells. These beams damage the ability of malignant cells to multiply, allowing the body to gradually eliminate them. Unlike chemotherapy, which circulates throughout the entire body, radiotherapy is a local treatment: it strikes precisely where needed, while protecting as much healthy surrounding tissue as possible.</p>
  <p>Over the last decade, technological advances have had a major impact on radiotherapy treatments. Modern radiotherapy allows treatment to be delivered with far greater precision and speed, significantly reducing the time the patient spends on the treatment table. Before each session, verification images can be performed to confirm positioning, and in some cases the plan can even be adjusted daily so that the dose is delivered with maximum accuracy, better protecting healthy organs while effectively targeting the affected area. Precision reaches fractions of a millimeter, which translates into higher doses to the tumor and lower doses to healthy organs.</p>

  <h3>When and why radiotherapy is recommended</h3>
  <ul>
    <li><strong>After surgery (adjuvant)</strong> – to destroy any remaining cells that are invisible under the microscope.</li>
    <li><strong>Before surgery (neoadjuvant)</strong> – to shrink the tumor and make surgery less invasive.</li>
    <li><strong>Main treatment</strong> – for certain types of cancer (for example, prostate cancer), it can be curative treatment in itself.</li>
    <li><strong>Palliative or symptom-relieving treatment</strong> – to reduce pain or bleeding in bone, brain or pelvic metastases.</li>
  </ul>
  <p>Key message: Radiotherapy is not the “last resort,” but one of the first modern tools we have.</p>

  <h3>How treatment works, step by step</h3>
  <p>Everything begins with the initial consultation, where we assess your medical history, imaging studies and the treatments you have received so far. Many questions are asked in order to understand not only the disease, but also your lifestyle, preferences and possible concerns. Next comes planning: we perform an imaging simulation using a CT simulator, in the exact position you will maintain during each session. Sometimes we create a thermoplastic mask (for head and neck treatments) or use vacuum systems and customized cushions designed to keep the body still. On the simulation CT, the radiation oncologist outlines the treatment volume and the nearby organs that need to be protected, while the medical physicist, together with advanced software, calculates the ideal dose distribution.</p>
  <p>The verification phase involves rigorous quality control of the treatment plan so that the dose is delivered exactly as it was calculated. At each session, position verification imaging (CBCT) is performed as a safety measure. Any difference greater than one millimeter is corrected immediately through small adjustments of the treatment table. The procedure itself usually lasts about ten to thirty minutes, depending on the area being treated and the type of treatment used.</p>
  <p><strong>You will not feel anything during irradiation:</strong> there is no heat, no instant burning and no electric shock. And as soon as you get off the treatment table, you can return to your usual daily activities.</p>

  <h3>Side effects and how they are managed</h3>
  <p>Any effective treatment may bring unwanted reactions, but most of them are mild and temporary.</p>
  <p><strong>Fatigue</strong> is the most common; it appears progressively over the course of the weeks and usually improves within a few weeks after treatment ends. I encourage you to listen to your body and take short breaks during the day, without giving up movement entirely, because gentle physical activity helps fight fatigue better than complete rest.</p>
  <p><strong>The skin</strong> in the treated area may become slightly reddish, similar to a light tan. It is recommended to avoid friction, hot baths and the use of creams before treatment. For abdominal or pelvic regions, temporary digestive changes or more frequent urination may occur; we anticipate these effects and discuss dietary recommendations and supportive medication from the very beginning.</p>
  <p><strong>Nausea</strong> may occur when the abdomen is irradiated, but it is well controlled with modern antiemetic medication. In cases of head and neck irradiation, swallowing difficulties or dry mouth may appear, but effective solutions are available for these symptoms.</p>
  <p><strong>Other effects</strong> may include hair loss in the treated area, changes in taste or a sensation of numbness. These are usually temporary and improve after treatment is completed.</p>
  <p><strong>What does NOT happen:</strong> You do not become radioactive. And no, you do not “transmit radiation” to others, while severe pain during the session is practically impossible. The medical team, made up of physicians, radiation therapists and physicists, is prepared at all times to intervene quickly if any discomfort appears.</p>

  <h3>Frequently asked questions</h3>
  <p><strong><i>How “strong” is the radiation, and can it harm me in the long term?</i></strong><br>
  Answer: The dose delivered at each session is strictly calculated — enough to destroy cancer cells, but well below the safety thresholds for healthy tissues. As an order of magnitude, the daily exposure is comparable to that of a CT scan, but concentrated locally and fractionated so that the body can quickly repair normal cells. The plan is monitored constantly, and the machine stops automatically if it detects any deviation.</p>

  <p><strong><i>Can I hug my loved ones after each session?</i></strong><br>
  Answer: Yes, external radiotherapy does not leave residual radiation in your body. Physical contact is completely safe.</p>

  <p><strong><i>Will I lose my hair?</i></strong><br>
  Answer: Only if the irradiated area includes the scalp. For breast, pelvic or lung treatments, your hair remains unaffected.</p>

  <p><strong><i>How long will my treatment schedule last?</i></strong><br>
  Answer: Depending on the treatment goal, there are single-session protocols (in stereotactic radiotherapy) all the way to classic plans lasting five to seven weeks. The final duration is decided individually based on several specific factors.</p>

  <p><strong><i>Can I continue working?</i></strong><br>
  Answer: In over 70% of cases, patients continue working throughout treatment, with the recommendation to adjust their schedule if fatigue becomes bothersome.</p>

  <p><strong><i>Do I need to follow a strict diet?</i></strong><br>
  Answer: There is no universal “radiotherapy diet,” but proper hydration and a menu rich in proteins and vitamins help speed up tissue healing.</p>

  <p><strong><i>Can I still exercise?</i></strong><br>
  Answer: Yes, but choose moderate activities: walking, breathing exercises or gentle yoga. Intense physical effort should be postponed until after treatment is completed.</p>

  <h3>Why you no longer need to be afraid</h3>
  <p>Today’s technology includes intelligent safety systems: detectors that stop the beam at the slightest unexpected movement, daily checks of machine parameters and regular external audits. In short, the dose calculated in the plan remains the dose you receive, without surprises. Moreover, clinical studies show that external radiation does not increase the risk of other diseases when it is delivered correctly; the benefits clearly outweigh any potential risk.</p>

  <h3>Closing words — Together, step by step</h3>
  <p>My name is <strong>Tatiana Cirimpei</strong>, and beyond being a physician, I am your trusted partner on this journey. I chose radiotherapy precisely because it combines the precision of science with the empathy of human connection. I firmly believe that every patient has the right to clear explanations and to medical decisions that respect not only the disease, but also their values and life plans. If you have reached the end of this article, it means you are ready to move from uncertainty to action.</p>

  <blockquote>
    <i>Do not leave your questions unanswered: write to me whenever you wish or schedule a consultation. In most cases, the clarity gained in a face-to-face discussion is the beginning of healing. Radiotherapy is not just a medical technique — it is a real chance for cure or for improving quality of life.</i>
  </blockquote>
`,
      },

      uk: {
        slug: "radioterapiya-prostymy-slovamy",
        category: "Медична освіта",
        title:
          "Променева терапія простими словами — що це таке і як вона проходить",
        excerpt:
          "Розгорнутий і доступний гід: коли рекомендується променева терапія, як вона проходить, які побічні ефекти можуть виникати та як ми з ними справляємося.",
        readTime: "15 хв",
        coverAlt: "Обговорення плану лікування",
        tags: ["Пацієнт", "Лікування", "Консультація"],
        contentHtml: `
  <h3>Вступ — Від невизначеності до впевненості</h3>
  <p>У момент, коли ви чуєте діагноз рак, кожне нове медичне слово може звучати загрозливо. «Променева терапія» — одне з таких слів. Багато пацієнтів розповідають мені, що їхньою першою реакцією був страх, підсилений уривчастою інформацією з інтернету або історіями знайомих.</p>
  <p>Проте сьогодні за цими емоціями стоять справді добрі новини. Сучасні онкологічні методи лікування дають вражаючі результати: від малоінвазивної хірургії до таргетної терапії, імунотерапії та, звичайно, високоточної променевої терапії. Багато пацієнтів повністю одужують або тривалий час утримують хворобу під контролем, продовжуючи активне життя поруч із родиною та друзями.</p>
  <p>У цій зміні променева терапія відіграє надзвичайно важливу роль. Як локальний, точний і безпечний метод лікування, вона суттєво сприяє або одужанню, або тривалому контролю захворювання — як самостійно, так і в поєднанні з іншими видами терапії.</p>
  <p>Оскільки невідомість породжує страх, мета цієї статті — дати вам доступні пояснення та конкретні приклади, щоб ви могли приймати поінформовані рішення і знову відчути контроль над власним планом лікування.</p>

  <h3>Що таке променева терапія насправді?</h3>
  <p>Уявіть собі лупу, яка концентрує сонячне світло на одному сухому листку на дереві. Світло є всюди, але лише у сфокусованому вигляді воно перетворюється на енергію, здатну щось змінити. Променева терапія працює за подібним принципом: ми використовуємо пучки іонізуючого випромінювання — найчастіше це рентгенівські промені високої енергії — спрямовані на тканини, що містять ракові клітини. Ці промені пошкоджують здатність злоякісних клітин розмножуватися, дозволяючи організму поступово їх усунути. На відміну від хіміотерапії, яка циркулює по всьому організму, променева терапія є локальним лікуванням: вона діє прицільно саме там, де потрібно, максимально захищаючи здорові тканини навколо.</p>
  <p>Протягом останнього десятиліття технологічний прогрес суттєво вплинув на променеву терапію. Сучасна променева терапія дозволяє проводити лікування набагато точніше і швидше, значно зменшуючи час перебування пацієнта на лікувальному столі. Перед кожним сеансом можуть виконуватися контрольні зображення для перевірки позиціонування, а в деяких випадках план може навіть коригуватися щодня, щоб доза доставлялася з максимальною точністю, краще захищаючи здорові органи та ефективно впливаючи на уражену ділянку. Точність досягає часток міліметра, що означає вищі дози для пухлини та нижчі — для здорових органів.</p>

  <h3>Коли і чому рекомендується променева терапія</h3>
  <ul>
    <li><strong>Після операції (ад’ювантно)</strong> – щоб знищити можливі залишкові клітини, невидимі навіть під мікроскопом.</li>
    <li><strong>Перед операцією (неоад’ювантно)</strong> – щоб зменшити пухлину та зробити хірургічне втручання менш травматичним.</li>
    <li><strong>Як основне лікування</strong> – при деяких видах раку (наприклад, раку простати) вона може бути самостійним радикальним методом лікування.</li>
    <li><strong>Паліативно або для полегшення симптомів</strong> – щоб зменшити біль або кровотечу при кісткових, мозкових чи тазових метастазах.</li>
  </ul>
  <p>Ключове повідомлення: променева терапія — це не «останній варіант», а один із перших сучасних інструментів, які ми маємо.</p>

  <h3>Як проходить лікування, крок за кроком</h3>
  <p>Усе починається з первинної консультації, під час якої ми оцінюємо медичну історію, результати візуалізаційних досліджень і лікування, проведені до цього моменту. Ми ставимо багато запитань, щоб зрозуміти не лише саму хворобу, а й ваш спосіб життя, уподобання та можливі побоювання. Далі настає етап планування: ми проводимо візуалізаційну симуляцію за допомогою КТ-симулятора в точному положенні, в якому ви будете перебувати під час кожного сеансу. Іноді ми виготовляємо термопластичну маску (для лікування ділянки голови та шиї) або використовуємо вакуумні системи та індивідуальні подушки, які допомагають утримувати тіло нерухомим. На симуляційному КТ лікар-радіотерапевт окреслює об’єм лікування та сусідні органи, які потрібно захистити, а медичний фізик разом із сучасним програмним забезпеченням розраховує ідеальний розподіл дози.</p>
  <p>Етап перевірки включає суворий контроль якості плану лікування, щоб доза була доставлена саме так, як розраховано. На кожному сеансі виконується контрольне позиціонування за допомогою зображень (CBCT) як захід безпеки. Будь-яке відхилення понад один міліметр одразу коригується невеликими змінами положення лікувального столу. Сама процедура зазвичай триває приблизно від десяти до тридцяти хвилин, залежно від зони лікування та типу застосованої терапії.</p>
  <p><strong>Під час опромінення ви нічого не відчуватимете:</strong> немає ні тепла, ні миттєвих опіків, ні електричних розрядів. А щойно ви підніметеся зі столу, зможете повернутися до своїх звичних повсякденних справ.</p>

  <h3>Побічні ефекти та способи їх контролю</h3>
  <p>Будь-яке ефективне лікування може мати небажані реакції, але більшість із них є легкими та тимчасовими.</p>
  <p><strong>Втома</strong> є найчастішою; вона наростає поступово протягом кількох тижнів і зазвичай минає через кілька тижнів після завершення лікування. Я заохочую вас прислухатися до свого тіла і робити короткі перерви протягом дня, не відмовляючись повністю від руху, адже легка фізична активність допомагає боротися з втомою краще, ніж повний спокій.</p>
  <p><strong>Шкіра</strong> в зоні лікування може стати трохи червонішою, подібно до легкого засмаги. Рекомендується уникати тертя, гарячих ванн і використання кремів перед лікуванням. Для черевної або тазової ділянки можливі тимчасові зміни травлення або частіше сечовипускання; ми передбачаємо ці реакції і ще на початку обговорюємо правила харчування та підтримувальні ліки.</p>
  <p><strong>Нудота</strong> може з’являтися під час опромінення живота, але зазвичай добре контролюється сучасними протиблювотними препаратами. У разі опромінення голови та шиї можуть виникати труднощі при ковтанні або сухість у роті, однак для цих симптомів існують ефективні рішення.</p>
  <p><strong>Інші ефекти</strong> можуть включати випадіння волосся в зоні лікування, зміну смаку або відчуття оніміння. Зазвичай вони є тимчасовими та поступово зменшуються після завершення терапії.</p>
  <p><strong>Чого НЕ відбувається:</strong> ви не стаєте радіоактивними. І ні, ви не «передаєте випромінювання» іншим людям, а сильний біль під час сеансу практично неможливий. Медична команда, до якої входять лікарі, радіотерапевти та фізики, завжди готова швидко втрутитися, якщо виникне будь-який дискомфорт.</p>

  <h3>Часті запитання</h3>
  <p><strong><i>Наскільки «сильним» є випромінювання і чи може воно зашкодити мені в довгостроковій перспективі?</i></strong><br>
  Відповідь: Доза, яка подається під час кожного сеансу, розраховується дуже точно — достатньо для знищення ракових клітин, але значно нижче порогів безпеки для здорових тканин. За масштабом щоденне опромінення можна порівняти з КТ-обстеженням, але воно є локалізованим і поділеним на фракції, щоб організм міг швидко відновлювати нормальні клітини. План постійно контролюється, а апарат автоматично зупиняється, якщо виявляє будь-яке відхилення.</p>

  <p><strong><i>Чи можу я обіймати близьких після кожного сеансу?</i></strong><br>
  Відповідь: Так, зовнішня променева терапія не залишає залишкового випромінювання у вашому тілі. Фізичний контакт є повністю безпечним.</p>

  <p><strong><i>У мене випаде волосся?</i></strong><br>
  Відповідь: Лише якщо зона опромінення включає волосисту частину голови. Під час лікування молочної залози, таза або легень волосся не постраждає.</p>

  <p><strong><i>Скільки триватиме моя схема лікування?</i></strong><br>
  Відповідь: Залежно від мети лікування існують протоколи з одним сеансом (у стереотаксичній радіотерапії) і класичні схеми тривалістю п’ять-сім тижнів. Остаточна тривалість визначається індивідуально залежно від кількох конкретних особливостей.</p>

  <p><strong><i>Чи можу я продовжувати працювати?</i></strong><br>
  Відповідь: У понад 70% випадків пацієнти продовжують працювати протягом усього лікування, за потреби адаптуючи свій графік, якщо втома стає вираженою.</p>

  <p><strong><i>Чи потрібно дотримуватися суворої дієти?</i></strong><br>
  Відповідь: Не існує універсальної «дієти для променевої терапії», але достатня гідратація та харчування, багате на білки й вітаміни, допомагають пришвидшити загоєння тканин.</p>

  <p><strong><i>Чи можу я займатися спортом?</i></strong><br>
  Відповідь: Так, але варто обирати помірні види активності: прогулянки, дихальні вправи або легку йогу. Інтенсивні фізичні навантаження краще відкласти до завершення лікування.</p>

  <h3>Чому більше не потрібно боятися</h3>
  <p>Сучасні технології мають вбудовані інтелектуальні системи безпеки: датчики, які зупиняють пучок при найменшому неочікуваному русі, щоденні перевірки параметрів апарата та регулярні зовнішні аудити. Коротко кажучи, доза, розрахована в плані, і є тією дозою, яку ви отримуєте — без неприємних сюрпризів. Більше того, клінічні дослідження показують, що зовнішнє опромінення не підвищує ризик інших хвороб, якщо проводиться правильно; користь значно переважає будь-який потенційний ризик.</p>

  <h3>Завершальне слово — Разом, крок за кроком</h3>
  <p>Мене звати <strong>Тетяна Чирімпей</strong>, і, окрім того, що я лікар, я є вашим надійним партнером у цій подорожі. Я обрала променеву терапію саме тому, що вона поєднує точність науки з емпатією людських стосунків. Я твердо вірю, що кожен пацієнт має право на зрозумілі пояснення та медичні рішення, які поважають не лише саму хворобу, а й його цінності та життєві плани. Якщо ви дочитали цю статтю до кінця, це означає, що ви готові перейти від невизначеності до дії.</p>

  <blockquote>
    <i>Не залишайте свої запитання без відповіді: напишіть мені в будь-який момент або запишіться на консультацію. У більшості випадків ясність, отримана під час особистої розмови, стає початком одужання. Променева терапія — це не просто медична техніка, а реальний шанс на одужання або покращення якості життя.</i>
  </blockquote>
`,
      },
    },
  },
  {
    id: "consultatii-radioterapie",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2025-10-04",
    coverImage: imgConsultatiiRadioterapieCover,
    articleImage: imgConsultatiiRadioterapieArticle,
    translations: {
      ro: {
        slug: "consultatii-radioterapie",
        category: "Servicii medicale",
        title: "Consultațiile medicale de radioterapie",
        excerpt:
          "De la prima evaluare la monitorizarea post-tratament, aflați ce presupune fiecare etapă a consultului medical și cum vă pregătiți pentru un plan terapeutic corect.",
        readTime: "4 min",
        coverAlt: "Consultație de specialitate în radioterapie",
        tags: ["Consultație", "Radioterapie", "Second opinion"],
        contentHtml: `
<p>În confruntarea cu un diagnostic oncologic, claritatea este primul pas către reușită. Consultația de radioterapie nu este o simplă analiză de dosar, ci momentul în care medicul specialist integrează toate datele clinice pentru a construi o strategie de tratament precisă. Scopul nostru este ca fiecare pacient să înțeleagă exact etapele terapiei, beneficiile tehnologiilor moderne și modul în care organismul va fi protejat pe parcursul vindecării.</p>
    <p>O abordare corectă presupune timp dedicat fiecărui caz, explicații pe înțelesul tuturor și un parteneriat bazat pe încredere între medic și pacient.</p>

    <h3>1. Consultația inițială</h3>
    <p>Aceasta este etapa fundamentală în care se pune baza întregului tratament. Medicul radioterapeut analizează amănunțit documentele medicale, cu accent pe rezultatul biopsiei (examenul histopatologic) și pe investigațiile imagistice recente, precum CT, RMN sau PET-CT.</p>
    <p><b>În cadrul acestei prime vizite, se stabilesc aspecte esențiale:</b></p>
    <ul>
      <li><b>Confirmarea indicației:</b> Se decide dacă radioterapia este necesară în acest stadiu și cum se corelează ea cu chirurgia sau chimioterapia.</li>
      <li><b>Stabilirea scopului:</b> Indiferent dacă obiectivul este eliminarea completă a bolii sau controlul simptomelor și reducerea durerii, planul este explicat în detaliu.</li>
      <li><b>Alegerea tehnicii:</b> Se prezintă metodele de iradiere (precum VMAT sau IMRT) care oferă cea mai mare precizie pentru localizarea respectivă.</li>
    </ul>

    <p><i>Tot în această etapă pot fi evaluate și anumite afecțiuni non-oncologice rezistente la tratamentele clasice, cum sunt durerile cronice de călcâi sau cicatricile persistente, unde radioterapia în doze mici poate aduce o ameliorare semnificativă.</i></p>

    <h3>2. Supravegherea medicală pe parcursul ședințelor</h3>
    <p>Radioterapia este un proces continuu, iar prezența medicului este constantă. Pe durata săptămânilor de tratament, pacientul beneficiază de consultații periodice de control. Acestea au rolul de a monitoriza reacția organismului la tratament și de a oferi soluții imediate (recomandări nutriționale sau de îngrijire locală) pentru a asigura un confort maxim și o bună toleranță.</p>

    <h3>3. Monitorizarea după finalizarea tratamentului</h3>
    <p>Grija medicală nu se încheie la ultima ședință de iradiere. Deoarece efectele radioterapiei continuă să lucreze în beneficiul pacientului timp de câteva săptămâni, controalele ulterioare sunt vitale pentru evaluarea răspunsului terapeutic și pentru urmărirea stării de sănătate pe termen lung.</p>

    <h3>A doua opinie medicală și suportul la distanță</h3>
    <p>Solicitarea unei a doua opinii medicale este un demers firesc și responsabil în oncologie. Aceasta oferă confirmarea planului ales sau poate aduce clarificări despre tehnologii mai avansate. De asemenea, pentru pacienții care locuiesc departe de clinică, oferim posibilitatea consultațiilor prin apel video sau telefon, facilitând interpretarea analizelor noi fără necesitatea unei deplasări imediate.</p>
    <blockquote>
      <p>Fiecare plan de tratament este o promisiune de precizie și siguranță. Rolul nostru este să oferim pacientului certitudinea că beneficiază de cea mai bună strategie medicală disponibilă astăzi.</p>
    </blockquote>

    <h3>Când este recomandat să programați o consultație?</h3>
    <ul>
      <li>Imediat după primirea diagnosticului, pentru a stabili locul radioterapiei în planul de tratament;</li>
      <li>Înainte de începerea iradierii, pentru a lămuri orice întrebare legată de tehnologia utilizată;</li>
      <li>Pentru o a doua opinie medicală, în vederea confirmării conduitei terapeutice;</li>
      <li>După finalizarea curei de tratament, pentru vizitele periodice de monitorizare.</li>
    </ul>`,
      },
      en: {
        slug: "radiotherapy-medical-consultations",
        category: "Medical services",
        title: "Radiotherapy Medical Consultations",
        excerpt:
          "From the first evaluation to post-treatment follow-up, learn what each stage of the medical consultation involves and how to prepare for a proper treatment plan.",
        readTime: "4 min",
        coverAlt: "Specialist radiotherapy consultation",
        tags: ["Consultation", "Radiotherapy", "Second opinion"],
        contentHtml: `
                <p>When facing an oncological diagnosis, clarity is the first step toward success. A radiotherapy consultation is not just a simple review of medical records, but the moment when the specialist integrates all clinical data in order to build a precise treatment strategy. Our goal is for every patient to clearly understand each stage of therapy, the benefits of modern technologies, and the way the body will be protected throughout the healing process.</p>

                    <p>A proper approach requires dedicated time for each case, explanations that are easy to understand, and a partnership built on trust between doctor and patient.</p>

                    <h3>1. The initial consultation</h3>
                    <p>This is the fundamental stage on which the entire treatment plan is built. The radiation oncologist carefully reviews the medical documents, with particular attention to the biopsy result (histopathological examination) and recent imaging investigations such as CT, MRI or PET-CT.</p>

                    <p><b>During this first visit, essential aspects are established:</b></p>
                    <ul>
                    <li><b>Confirmation of indication:</b> It is determined whether radiotherapy is necessary at this stage and how it fits in relation to surgery or chemotherapy.</li>
                    <li><b>Defining the objective:</b> Whether the goal is complete eradication of the disease or symptom control and pain relief, the treatment plan is explained in detail.</li>
                    <li><b>Choosing the technique:</b> The irradiation methods (such as VMAT or IMRT) that provide the highest precision for the specific location are presented.</li>
                    </ul>

                    <p><i>At this stage, certain non-oncological conditions resistant to conventional treatment may also be evaluated, such as chronic heel pain or persistent scars, where low-dose radiotherapy can provide significant relief.</i></p>

                    <h3>2. Medical supervision during treatment sessions</h3>
                    <p>Radiotherapy is a continuous process, and the physician’s presence remains constant. Throughout the weeks of treatment, the patient benefits from regular follow-up consultations. Their role is to monitor the body’s response to treatment and to provide immediate solutions (nutritional recommendations or local care advice) in order to ensure maximum comfort and good tolerance.</p>

                    <h3>3. Follow-up after treatment completion</h3>
                    <p>Medical care does not end with the last irradiation session. Because the effects of radiotherapy continue to work in the patient’s favor for several weeks, subsequent follow-up visits are essential for evaluating the therapeutic response and monitoring long-term health status.</p>

                    <h3>Second medical opinion and remote support</h3>
                    <p>Requesting a second medical opinion is a natural and responsible step in oncology. It may confirm the chosen treatment plan or provide clarification regarding more advanced technologies. In addition, for patients who live far from the clinic, we offer the possibility of consultations by video or phone call, making it easier to interpret new test results without the need for immediate travel.</p>
                    <blockquote>
                    <p>Each treatment plan is a promise of precision and safety. Our role is to give the patient the certainty that they are receiving the best medical strategy available today.</p>
                    </blockquote>

                    <h3>When is it recommended to schedule a consultation?</h3>
                    <ul>
                    <li>Immediately after receiving the diagnosis, in order to establish the place of radiotherapy within the treatment plan;</li>
                    <li>Before starting irradiation, to clarify any questions related to the technology being used;</li>
                    <li>For a second medical opinion, in order to confirm the therapeutic approach;</li>
                    <li>After completing the course of treatment, for regular follow-up visits.</li>
                    </ul>
                `,
      },
      uk: {
        slug: "medychni-konsultatsiyi-z-promenevoyi-terapiyi",
        category: "Медичні послуги",
        title: "Медичні консультації з променевої терапії",
        excerpt:
          "Від первинної оцінки до спостереження після лікування — дізнайтеся, що включає кожен етап медичної консультації та як підготуватися до правильного терапевтичного плану.",
        readTime: "4 хв",
        coverAlt: "Спеціалізована консультація з променевої терапії",
        tags: ["Консультація", "Променева терапія", "Second opinion"],
        contentHtml: `
                    <p>У ситуації, коли людина стикається з онкологічним діагнозом, ясність є першим кроком до успіху. Консультація з променевої терапії — це не просто перегляд медичних документів, а момент, коли лікар-спеціаліст інтегрує всі клінічні дані, щоб побудувати точну стратегію лікування. Наша мета полягає в тому, щоб кожен пацієнт чітко розумів етапи терапії, переваги сучасних технологій і те, як організм буде захищений протягом усього процесу одужання.</p>

                    <p>Правильний підхід передбачає час, присвячений кожному окремому випадку, зрозумілі пояснення та партнерство, засноване на довірі між лікарем і пацієнтом.</p>

                    <h3>1. Первинна консультація</h3>
                    <p>Це фундаментальний етап, на якому закладається основа всього лікування. Лікар-радіотерапевт детально аналізує медичні документи, приділяючи особливу увагу результату біопсії (гістопатологічного дослідження) та нещодавнім візуалізаційним обстеженням, таким як КТ, МРТ або ПЕТ-КТ.</p>

                    <p><b>Під час цього першого візиту визначаються ключові аспекти:</b></p>
                    <ul>
                    <li><b>Підтвердження показань:</b> Визначається, чи є променева терапія необхідною на цьому етапі та як вона співвідноситься з хірургічним лікуванням або хіміотерапією.</li>
                    <li><b>Визначення мети:</b> Незалежно від того, чи є ціллю повне усунення захворювання, чи контроль симптомів і зменшення болю, план лікування пояснюється детально.</li>
                    <li><b>Вибір техніки:</b> Представляються методи опромінення (такі як VMAT або IMRT), які забезпечують найвищу точність для відповідної локалізації.</li>
                    </ul>

                    <p><i>На цьому ж етапі можуть також оцінюватися певні неонкологічні захворювання, стійкі до класичних методів лікування, такі як хронічний біль у п’яті або стійкі рубці, коли низькодозова променева терапія може дати значне полегшення.</i></p>

                    <h3>2. Медичний нагляд під час сеансів лікування</h3>
                    <p>Променева терапія є безперервним процесом, а присутність лікаря залишається постійною. Протягом тижнів лікування пацієнт проходить регулярні контрольні консультації. Їхня роль полягає в тому, щоб контролювати реакцію організму на лікування та надавати негайні рішення (рекомендації щодо харчування або місцевого догляду), щоб забезпечити максимальний комфорт і добру переносимість.</p>

                    <h3>3. Спостереження після завершення лікування</h3>
                    <p>Медична турбота не закінчується з останнім сеансом опромінення. Оскільки ефекти променевої терапії продовжують працювати на користь пацієнта ще кілька тижнів, подальші контрольні огляди є життєво важливими для оцінки терапевтичної відповіді та довгострокового спостереження за станом здоров’я.</p>

                    <h3>Друга медична думка та дистанційна підтримка</h3>
                    <p>Запит на другу медичну думку є природним і відповідальним кроком в онкології. Це може підтвердити обраний план лікування або дати додаткові роз’яснення щодо більш сучасних технологій. Крім того, для пацієнтів, які живуть далеко від клініки, ми пропонуємо можливість консультацій через відеодзвінок або телефон, що полегшує інтерпретацію нових аналізів без необхідності негайної поїздки.</p>
                    <blockquote>
                    <p>Кожен план лікування — це обіцянка точності та безпеки. Наша роль полягає в тому, щоб дати пацієнтові впевненість, що він отримує найкращу медичну стратегію, доступну сьогодні.</p>
                    </blockquote>

                    <h3>Коли рекомендується записатися на консультацію?</h3>
                    <ul>
                    <li>Одразу після встановлення діагнозу, щоб визначити місце променевої терапії в загальному плані лікування;</li>
                    <li>Перед початком опромінення, щоб з’ясувати будь-які питання, пов’язані з використовуваною технологією;</li>
                    <li>Для отримання другої медичної думки з метою підтвердження терапевтичної тактики;</li>
                    <li>Після завершення курсу лікування — для регулярних контрольних візитів.</li>
                    </ul>
                `,
      },
    },
  },
  {
    id: "radioterapie-moderna",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2025-08-05",
coverImage: imgRadioterapieModernaCover,
articleImage: imgRadioterapieModernaArticle,
    translations: {
        ro: {
            slug: "radioterapie-moderna",
            category: "Servicii medicale",
            title: "Radioterapia de înaltă precizie: Tehnologii și metode de tratament",
            excerpt:
                "O analiză detaliată a tehnicilor IMRT, VMAT și SBRT, explicând modul în care evoluția tehnologică permite administrarea tratamentului oncologic cu o acuratețe milimetrică.",
            readTime: "5 min",
            coverAlt: "Radioterapie modernă și planificare precisă",
            tags: ["Radioterapie", "IMRT", "VMAT", "SBRT"],
            contentHtml: `<p>Radioterapia a evoluat de la o metodă de tratament standardizată către o soluție medicală personalizată, bazată pe o precizie geometrică riguroasă. Această transformare a fost posibilă prin integrarea sistemelor de calcul avansate cu acceleratoarele liniare de ultimă generație, permițând adaptarea fasciculului de radiații la anatomia specifică a fiecărui pacient.</p>
                <p>Înțelegerea modului în care funcționează aceste tehnologii este esențială pentru a vedea cum reușește medicina actuală să maximizeze doza administrată tumorii, protejând în același timp integritatea țesuturilor sănătoase din vecinătate.</p>

                <h3>Evoluția către conformația tridimensională</h3>
                <p>În trecut, radioterapia utiliza fascicule plane care nu puteau distinge precis între volumul tumoral și organele vitale din jur. Astăzi, procesul începe cu o simulare CT, care îi permite echipei medicale să vizualizeze tumora în spațiu tridimensional. Pe baza acestei „hărți” digitale, se stabilește tehnica de tratament cea mai potrivită pentru a obține o distribuție optimă a dozei.</p>

                <h3>Radioterapia cu fascicul de electroni</h3>
                <p>Această metodă este utilizată specific pentru afecțiuni localizate la suprafața corpului sau la o adâncime foarte mică sub piele. Particularitatea fizică a electronilor este că aceștia își eliberează energia rapid și se opresc brusc după ce parcurg câțiva centimetri. Această proprietate asigură tratarea eficientă a leziunilor cutanate, eliminând riscul ca radiațiile să pătrundă către organele profunde.</p>

                <h3>Radioterapia cu Intensitate Modulată (IMRT)</h3>
                <p>Tehnica IMRT a reprezentat un salt major în capacitatea de a „sculpta” radiația. În timpul ședinței, acceleratorul liniar se poziționează în mai multe unghiuri fixe în jurul pacientului. Din fiecare unghi, aparatul utilizează un sistem de lamele mobile (colimator multilamelar) care fragmentează fasciculul în sute de segmente mai mici, cu intensități diferite.</p>
                <p>Rezultatul este o doză care se pliază perfect pe formele complexe sau concave ale tumorilor, fiind o soluție ideală atunci când ținta este situată în imediata apropiere a unor structuri critice, precum măduva spinării sau globii oculari.</p>

                <h3>Radioterapia cu Arc de Volum (VMAT)</h3>
                <p>VMAT este o formă avansată de administrare a dozei, care optimizează timpul și precizia tratamentului. Spre deosebire de tehnicile statice, brațul aparatului se rotește continuu într-un arc complet în jurul pacientului, fără întreruperi. Pe parcursul acestei mișcări circulare, intensitatea dozei și forma fasciculului sunt modificate în timp real.</p>
                <p>Această dinamică scurtează durata unei ședințe la doar câteva minute. Reducerea timpului petrecut pe masa de tratament nu reprezintă doar un confort sporit pentru pacient, ci și o garanție a preciziei, deoarece scade probabilitatea apariției mișcărilor involuntare în timpul iradierii.</p>

                <h3>Radioterapie stereotactică (SRS / SBRT)</h3>
                <p>Stereotaxia reprezintă vârful de lance al preciziei în radioterapie, fiind adesea livrată prin tehnica VMAT, dar la o intensitate mult mai mare. Aceasta presupune administrarea unor doze foarte concentrate într-un număr redus de ședințe (de obicei între 1 și 5), comparativ cu tratamentele fracționate clasice.</p>
                <p>Sistemele de imobilizare sunt extrem de riguroase, asigurând o acuratețe milimetrică. SRS este utilizată pentru localizări intracraniene, în timp ce SBRT vizează tumori sau metastaze din restul corpului (plămân, ficat, coloană). Este o abordare radicală, capabilă să distrugă țesutul tumoral cu un impact minim asupra restului organismului.</p>

                <blockquote>
            
                <p>IMPORTANT: <br>Decizia medicală privind alegerea tehnicii potrivite se realizează întotdeauna luând în considerare cele mai actuale ghiduri și protocoale naționale și internaționale, fiind adaptată fiecărui caz clinic pentru a asigura un echilibru perfect între eficiență și siguranță.</p>
                </blockquote>

                <h3>Personalizarea planului terapeutic</h3>
                <p>Indiferent de tehnologia utilizată, succesul tratamentului depinde de colaborarea dintre medicul radioterapeut și fizicianul medical. Alegerea între IMRT, VMAT sau stereotaxie nu este una arbitrară, ci rezultatul unei analize dosimetrice comparative. Obiectivul final rămâne întotdeauna același: obținerea controlului asupra bolii prin soluții tehnice care să respecte biologia și calitatea vieții fiecărui individ.</p>`,

            },
        en: {
        slug: "high-precision-radiotherapy-technologies-and-treatment-methods",
        category: "Medical services",
        title: "High-Precision Radiotherapy: Technologies and Treatment Methods",
        excerpt:
            "A detailed analysis of IMRT, VMAT and SBRT techniques, explaining how technological progress allows cancer treatment to be delivered with millimetric accuracy.",
        readTime: "5 min",
        coverAlt: "Modern radiotherapy and precise planning",
        tags: ["Radiotherapy", "IMRT", "VMAT", "SBRT"],
        contentHtml: `<p>Radiotherapy has evolved from a standardized treatment method into a personalized medical solution based on rigorous geometric precision. This transformation has been made possible by the integration of advanced computing systems with next-generation linear accelerators, allowing the radiation beam to be adapted to each patient’s specific anatomy.</p>

            <p>Understanding how these technologies work is essential in order to see how modern medicine manages to maximize the dose delivered to the tumor while at the same time protecting the integrity of the surrounding healthy tissues.</p>

            <h3>The evolution toward three-dimensional conformality</h3>
            <p>In the past, radiotherapy used flat radiation fields that could not accurately distinguish between the tumor volume and the vital organs nearby. Today, the process begins with a CT simulation, which allows the medical team to visualize the tumor in three-dimensional space. Based on this digital “map,” the most appropriate treatment technique is selected in order to achieve the optimal dose distribution.</p>

            <h3>Electron beam radiotherapy</h3>
            <p>This method is used specifically for conditions located on the surface of the body or at a very shallow depth beneath the skin. The physical characteristic of electrons is that they release their energy rapidly and stop abruptly after traveling only a few centimeters. This property allows superficial lesions to be treated effectively while eliminating the risk of radiation reaching deeper organs.</p>

            <h3>Intensity-Modulated Radiotherapy (IMRT)</h3>
            <p>IMRT represented a major leap forward in the ability to “sculpt” radiation. During treatment, the linear accelerator is positioned at several fixed angles around the patient. From each angle, the machine uses a system of moving leaves (a multileaf collimator) that breaks the beam into hundreds of smaller segments with different intensities.</p>
            <p>The result is a dose distribution that conforms very closely to complex or concave tumor shapes, making it an ideal solution when the target is located in the immediate vicinity of critical structures, such as the spinal cord or the eyeballs.</p>

            <h3>Volumetric Modulated Arc Therapy (VMAT)</h3>
            <p>VMAT is an advanced form of dose delivery that optimizes both treatment time and precision. Unlike static techniques, the treatment arm rotates continuously in a complete arc around the patient, without interruption. Throughout this circular movement, both the dose intensity and the beam shape are modified in real time.</p>
            <p>This dynamic approach shortens the duration of a session to just a few minutes. Reducing the time spent on the treatment table not only improves patient comfort, but also enhances precision, because it lowers the probability of involuntary movement during irradiation.</p>

            <h3>Stereotactic radiotherapy (SRS / SBRT)</h3>
            <p>Stereotactic treatment represents the highest level of precision in radiotherapy and is often delivered using the VMAT technique, but at a much higher intensity. It involves administering highly concentrated doses in a small number of sessions (usually between 1 and 5), compared with conventional fractionated treatments.</p>
            <p>Immobilization systems are extremely rigorous, ensuring millimetric accuracy. SRS is used for intracranial targets, while SBRT is aimed at tumors or metastases in the rest of the body (lung, liver, spine). It is a radical approach capable of destroying tumor tissue while having minimal impact on the rest of the body.</p>

            <blockquote>
            <p>IMPORTANT: <br>The medical decision regarding the choice of the appropriate technique is always made by taking into account the most up-to-date national and international guidelines and protocols, and it is adapted to each clinical case in order to ensure the perfect balance between effectiveness and safety.</p>
            </blockquote>

            <h3>Personalizing the treatment plan</h3>
            <p>Regardless of the technology used, treatment success depends on the collaboration between the radiation oncologist and the medical physicist. The choice between IMRT, VMAT or stereotactic radiotherapy is never arbitrary, but the result of a comparative dosimetric analysis. The final goal always remains the same: achieving control over the disease through technical solutions that respect both biology and each patient’s quality of life.</p>`,
        },
        uk: {
        slug: "vysokotochna-promeneva-terapiya-tekhnolohiyi-ta-metody-likuvannya",
        category: "Медичні послуги",
        title: "Високоточна променева терапія: Технології та методи лікування",
        excerpt:
            "Детальний аналіз технік IMRT, VMAT і SBRT, що пояснює, як технологічний прогрес дозволяє проводити онкологічне лікування з міліметровою точністю.",
        readTime: "5 хв",
        coverAlt: "Сучасна променева терапія та точне планування",
        tags: ["Променева терапія", "IMRT", "VMAT", "SBRT"],
        contentHtml: `<p>Променева терапія пройшла шлях від стандартизованого методу лікування до персоналізованого медичного рішення, заснованого на суворій геометричній точності. Ця трансформація стала можливою завдяки інтеграції сучасних обчислювальних систем із лінійними прискорювачами нового покоління, що дозволяє адаптувати пучок випромінювання до індивідуальної анатомії кожного пацієнта.</p>

            <p>Розуміння того, як працюють ці технології, є важливим для усвідомлення того, як сучасна медицина здатна максимально збільшити дозу, доставлену до пухлини, одночасно захищаючи цілісність навколишніх здорових тканин.</p>

            <h3>Еволюція до тривимірної конформності</h3>
            <p>У минулому променева терапія використовувала плоскі поля випромінювання, які не могли точно відрізнити об’єм пухлини від життєво важливих органів поруч. Сьогодні процес починається з КТ-симуляції, яка дозволяє медичній команді візуалізувати пухлину у тривимірному просторі. На основі цієї цифрової «карти» обирається найбільш відповідна техніка лікування для досягнення оптимального розподілу дози.</p>

            <h3>Променева терапія електронним пучком</h3>
            <p>Цей метод використовується спеціально для уражень, розташованих на поверхні тіла або на дуже незначній глибині під шкірою. Фізична особливість електронів полягає в тому, що вони швидко віддають свою енергію і різко зупиняються після проходження лише кількох сантиметрів. Ця властивість забезпечує ефективне лікування шкірних уражень, усуваючи ризик проникнення випромінювання до глибоких органів.</p>

            <h3>Променева терапія з модуляцією інтенсивності (IMRT)</h3>
            <p>Техніка IMRT стала великим кроком уперед у здатності «скульптурувати» випромінювання. Під час сеансу лінійний прискорювач розташовується під кількома фіксованими кутами навколо пацієнта. З кожного кута апарат використовує систему рухомих пелюсток (багатопелюстковий коліматор), яка поділяє пучок на сотні менших сегментів із різною інтенсивністю.</p>
            <p>У результаті формується розподіл дози, що дуже точно повторює складні або увігнуті форми пухлин, що робить цей метод ідеальним, коли мішень розташована в безпосередній близькості до критично важливих структур, таких як спинний мозок або очні яблука.</p>

            <h3>Об’ємно-модульована дугова терапія (VMAT)</h3>
            <p>VMAT є вдосконаленою формою доставки дози, що оптимізує як тривалість лікування, так і його точність. На відміну від статичних технік, гентрі апарата безперервно обертається повною дугою навколо пацієнта без зупинок. Упродовж цього кругового руху інтенсивність дози та форма пучка змінюються в реальному часі.</p>
            <p>Така динаміка скорочує тривалість одного сеансу до лише кількох хвилин. Зменшення часу перебування на лікувальному столі означає не лише більший комфорт для пацієнта, а й вищу точність, оскільки знижується ймовірність мимовільних рухів під час опромінення.</p>

            <h3>Стереотаксична променева терапія (SRS / SBRT)</h3>
            <p>Стереотаксія є вершиною точності у променевій терапії й часто виконується за допомогою техніки VMAT, але з набагато вищою інтенсивністю. Вона передбачає введення дуже концентрованих доз за невелику кількість сеансів (зазвичай від 1 до 5) порівняно з класичними фракціонованими схемами лікування.</p>
            <p>Системи іммобілізації є надзвичайно суворими, забезпечуючи міліметрову точність. SRS використовується для внутрішньочерепних локалізацій, тоді як SBRT спрямована на пухлини або метастази в інших ділянках тіла (легеня, печінка, хребет). Це радикальний підхід, здатний знищувати пухлинну тканину з мінімальним впливом на решту організму.</p>

            <blockquote>
            <p>ВАЖЛИВО: <br>Медичне рішення щодо вибору відповідної техніки завжди приймається з урахуванням найсучасніших національних і міжнародних рекомендацій та протоколів і адаптується до кожного клінічного випадку, щоб забезпечити ідеальний баланс між ефективністю та безпекою.</p>
            </blockquote>

            <h3>Персоналізація терапевтичного плану</h3>
            <p>Незалежно від використаної технології, успіх лікування залежить від співпраці між лікарем-радіотерапевтом і медичним фізиком. Вибір між IMRT, VMAT або стереотаксичною терапією ніколи не є випадковим, а є результатом порівняльного дозиметричного аналізу. Кінцева мета завжди залишається незмінною: досягнення контролю над хворобою за допомогою технічних рішень, які враховують як біологію, так і якість життя кожного пацієнта.</p>`,
            },
        }
  },
  {
    id: "management-reactii-adverse-radioterapie",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2025-08-01",
coverImage: imgManagementReactiiAdverseRadioterapieCover,
articleImage: imgManagementReactiiAdverseRadioterapieArticle,
    translations: {
        ro: {
        slug: "management-reactii-adverse-radioterapie",
        category: "Servicii medicale",
        title: "Managementul reacțiilor adverse în radioterapie",
        excerpt:
            "Reacțiile adverse apărute în timpul sau după radioterapie necesită evaluare atentă, recomandări practice și ajustări rapide pentru confort și siguranță.",
        readTime: "4 min",

        coverAlt: "Monitorizarea reacțiilor adverse în radioterapie",
        tags: ["Radioterapie", "Reacții adverse", "Monitorizare"],
        contentHtml: `
            <p>Deși tehnologiile actuale permit o protecție superioară a țesuturilor sănătoase, radioterapia rămâne un tratament intens, care poate genera anumite reacții secundare. Acestea nu sunt semne că tratamentul „nu merge bine”, ci reprezintă modul natural în care organismul răspunde la acțiunea radiațiilor asupra celulelor aflate în proces de regenerare.</p>

                <p>Fiecare organism este unic, iar apariția acestor reacții depinde de zona tratată, doza cumulată și starea generală de sănătate. Din fericire, medicina modernă dispune de protocoale clare pentru a preveni și a limita aceste efecte, asigurând continuitatea tratamentului în condiții de confort.</p>

                <h3>Reacțiile acute: Ce se întâmplă în timpul tratamentului?</h3>
                <p>Efectele acute apar de obicei în primele săptămâni de terapie și sunt, în marea lor majoritate, temporare. Acestea se manifestă local, strict în zona iradiată, deoarece radioterapia nu afectează întregul corp (cu excepția unei stări de oboseală generalizată).</p>
                
                <p><b>Principalele manifestări pot include:</b></p>
                <ul>
                <li><b>Modificări cutanate:</b> O reacție similară unei expuneri prelungite la soare (roșeață, uscăciune sau sensibilitate la nivelul pielii).</li>
                <li><b>Inflamații locale:</b> Dificultăți ușoare la înghițire (pentru zona gâtului) sau tranzit intestinal accelerat (pentru zona abdominală).</li>
                <li><b>Oboseala (Fatigue):</b> O stare de epuizare care apare pe măsură ce corpul consumă energie pentru a repara celulele sănătoase afectate de radiații.</li>
                </ul>

                <div class=\"vizual-container\">
                <p class=\"legenda-vizual\"><i>*Notă: Reacțiile adverse sunt întotdeauna localizate. De exemplu, iradierea la nivelul pelvisului nu va cauza niciodată căderea părului de pe cap.</i></p>
                </div>

                <h3>Efectele tardive: Monitorizarea pe termen lung</h3>
                <p>Toxicitățile tardive pot apărea la luni sau chiar ani după finalizarea tratamentului. Acestea sunt legate de procesul de vindecare al țesuturilor profunde (cum ar fi fibroza sau modificările de elasticitate ale vaselor de sânge). Deși apar mult mai rar datorită tehnicilor moderne de precizie (VMAT/IMRT), monitorizarea periodică după încheierea curei de radioterapie rămâne esențială pentru a interveni rapid dacă funcționalitatea unui organ este afectată.</p>

                <h3>Cum gestionăm aceste simptome în echipa medicală?</h3>
                <p>Gestionarea reacțiilor adverse nu înseamnă doar prescrierea unor medicamente, ci un ansamblu de măsuri adaptate:</p>
                <ul>
                <li><b>Suport dermatologic:</b> Utilizarea unor creme specifice și reguli stricte de igienă locală pentru a preveni leziunile cutante.</li>
                <li><b>Consiliere nutrițională:</b> Ajustarea dietei pentru a proteja sistemul digestiv sau pentru a ușura deglutiția în timpul iradierii.</li>
                <li><b>Tratament simptomatic:</b> Medicație antiinflamatoare, antiemetică sau de susținere, administrată preventiv sau la primele semne de disconfort.</li>
                </ul>

                <blockquote>
                <p>Comunicarea transparentă cu medicul radioterapeut este cel mai bun instrument de control. Orice modificare apărută, indiferent cât de mică pare, trebuie semnalată imediat pentru a fi gestionată înainte de a deveni un impediment în tratament.</p>
                </blockquote>

                <h3>Când trebuie să contactați echipa medicală?</h3>
                <p>Este important să raportați medicului dumneavoastră următoarele simptome dacă devin persistente sau se accentuează:</p>
                <ul>
                <li>Roșeață intensă a pielii care provoacă durere sau usturime;</li>
                <li>Dificultăți de hidratare sau imposibilitatea de a înghiți alimente solide;</li>
                <li>Greață care nu cedează la recomandările alimentare obișnuite;</li>
                <li>Tulburări urinare sau digestive noi, apărute în timpul ședințelor;</li>
                <li>O stare de slăbiciune care vă împiedică să vă desfășurați activitățile zilnice de bază.</li>
                </ul>

                <h3>Concluzie: Siguranța prin monitorizare activă</h3>
                <p>Radioterapia modernă este construită pentru a fi suportabilă. Scopul echipei medicale este să echilibreze eficiența oncologică (distrugerea tumorii) cu prezervarea calității vieții. Prin monitorizarea zilnică și ajustarea rapidă a planului de îngrijire, marea majoritate a pacienților reușesc să finalizeze tratamentul fără întreruperi și fără sechele majore.</p>`,
        },
        en: {
        slug: "management-of-radiotherapy-side-effects",
        category: "Medical services",
        title: "Management of Side Effects in Radiotherapy",
        excerpt:
            "Side effects that occur during or after radiotherapy require careful evaluation, practical recommendations and prompt adjustments for comfort and safety.",
        readTime: "4 min read",

        coverAlt: "Monitoring side effects in radiotherapy",
        tags: ["Radiotherapy", "Side effects", "Monitoring"],
        contentHtml: `
            <p>Although current technologies allow superior protection of healthy tissues, radiotherapy remains an intensive treatment that may generate certain side effects. These are not signs that the treatment “is not working well,” but rather the natural way in which the body responds to the action of radiation on cells that are in the process of regeneration.</p>

                <p>Each body is unique, and the appearance of these reactions depends on the treated area, the cumulative dose and the patient’s general state of health. Fortunately, modern medicine has clear protocols to prevent and limit these effects, ensuring treatment continuity under comfortable conditions.</p>

                <h3>Acute reactions: What happens during treatment?</h3>
                <p>Acute effects usually appear during the first weeks of therapy and are, in the vast majority of cases, temporary. They manifest locally, strictly in the irradiated area, because radiotherapy does not affect the entire body (with the exception of a general feeling of fatigue).</p>
                
                <p><b>The main manifestations may include:</b></p>
                <ul>
                <li><b>Skin changes:</b> A reaction similar to prolonged sun exposure (redness, dryness or skin sensitivity).</li>
                <li><b>Local inflammation:</b> Mild difficulty swallowing (for the throat area) or accelerated bowel transit (for the abdominal area).</li>
                <li><b>Fatigue:</b> A state of exhaustion that appears as the body uses energy to repair healthy cells affected by radiation.</li>
                </ul>

                <div class="vizual-container">
                <p class="legenda-vizual"><i>*Note: Side effects are always localized. For example, irradiation to the pelvic area will never cause hair loss on the scalp.</i></p>
                </div>

                <h3>Late effects: Long-term monitoring</h3>
                <p>Late toxicities may appear months or even years after treatment has been completed. These are related to the healing process of deeper tissues (such as fibrosis or changes in the elasticity of blood vessels). Although they occur much more rarely thanks to modern precision techniques (VMAT/IMRT), regular monitoring after the completion of radiotherapy remains essential in order to intervene quickly if the function of an organ is affected.</p>

                <h3>How do we manage these symptoms within the medical team?</h3>
                <p>Managing side effects does not mean simply prescribing medication, but rather a set of adapted measures:</p>
                <ul>
                <li><b>Dermatologic support:</b> The use of specific creams and strict local hygiene rules in order to prevent skin lesions.</li>
                <li><b>Nutritional counseling:</b> Adjusting the diet to protect the digestive system or to make swallowing easier during irradiation.</li>
                <li><b>Symptomatic treatment:</b> Anti-inflammatory, antiemetic or supportive medication, administered preventively or at the first signs of discomfort.</li>
                </ul>

                <blockquote>
                <p>Transparent communication with the radiation oncologist is the best tool for control. Any change that appears, no matter how minor it may seem, should be reported immediately so that it can be managed before it becomes an obstacle to treatment.</p>
                </blockquote>

                <h3>When should you contact the medical team?</h3>
                <p>It is important to report the following symptoms to your doctor if they become persistent or worsen:</p>
                <ul>
                <li>Intense skin redness that causes pain or a burning sensation;</li>
                <li>Difficulty staying hydrated or inability to swallow solid food;</li>
                <li>Nausea that does not improve with usual dietary recommendations;</li>
                <li>New urinary or digestive disturbances that appear during the treatment sessions;</li>
                <li>A state of weakness that prevents you from carrying out your basic daily activities.</li>
                </ul>

                <h3>Conclusion: Safety through active monitoring</h3>
                <p>Modern radiotherapy is designed to be tolerable. The goal of the medical team is to balance oncologic effectiveness (tumor destruction) with the preservation of quality of life. Through daily monitoring and rapid adjustment of the care plan, the vast majority of patients manage to complete treatment without interruptions and without major long-term consequences.</p>`,
        },
        uk: {
        slug: "upravlinnya-pobichnymy-reaktsiyamy-pry-promeneviy-terapiyi",
        category: "Медичні послуги",
        title: "Контроль побічних реакцій під час променевої терапії",
        excerpt:
            "Побічні реакції, що виникають під час або після променевої терапії, потребують уважної оцінки, практичних рекомендацій і швидкого коригування для комфорту та безпеки.",
        readTime: "4 хв читання",

        coverAlt: "Моніторинг побічних реакцій під час променевої терапії",
        tags: ["Променева терапія", "Побічні реакції", "Моніторинг"],
        contentHtml: `
        <p>Хоча сучасні технології забезпечують значно кращий захист здорових тканин, променева терапія все ж залишається інтенсивним методом лікування, який може викликати певні побічні реакції. Вони не є ознакою того, що лікування «проходить неправильно», а радше природною відповіддю організму на дію випромінювання на клітини, що перебувають у процесі відновлення.</p>

            <p>Кожен організм унікальний, і поява таких реакцій залежить від ділянки лікування, сумарної дози та загального стану здоров’я пацієнта. На щастя, сучасна медицина має чіткі протоколи для профілактики та обмеження цих ефектів, забезпечуючи безперервність лікування в максимально комфортних умовах.</p>

            <h3>Гострі реакції: Що відбувається під час лікування?</h3>
            <p>Гострі ефекти зазвичай з’являються в перші тижні терапії і в переважній більшості випадків є тимчасовими. Вони проявляються локально, лише в зоні опромінення, оскільки променева терапія не впливає на весь організм загалом (за винятком відчуття загальної втоми).</p>
            
            <p><b>Основні прояви можуть включати:</b></p>
            <ul>
            <li><b>Шкірні зміни:</b> Реакція, подібна до тривалого перебування на сонці (почервоніння, сухість або підвищена чутливість шкіри).</li>
            <li><b>Локальні запалення:</b> Легкі труднощі при ковтанні (для ділянки шиї) або прискорений кишковий транзит (для абдомінальної зони).</li>
            <li><b>Втома:</b> Стан виснаження, що виникає тоді, коли організм витрачає енергію на відновлення здорових клітин, уражених випромінюванням.</li>
            </ul>

            <div class="vizual-container">
            <p class="legenda-vizual"><i>*Примітка: Побічні реакції завжди є локалізованими. Наприклад, опромінення ділянки таза ніколи не спричинить випадіння волосся на голові.</i></p>
            </div>

            <h3>Пізні ефекти: Довгострокове спостереження</h3>
            <p>Пізні токсичності можуть з’явитися через місяці або навіть роки після завершення лікування. Вони пов’язані з процесом загоєння глибших тканин (наприклад, фіброзом або змінами еластичності кровоносних судин). Хоча такі ефекти трапляються значно рідше завдяки сучасним високоточним технікам (VMAT/IMRT), регулярне спостереження після завершення курсу променевої терапії залишається вкрай важливим, щоб швидко втрутитися, якщо функціональність певного органа буде порушена.</p>

            <h3>Як ми контролюємо ці симптоми в межах медичної команди?</h3>
            <p>Контроль побічних реакцій не означає лише призначення медикаментів, а включає цілий комплекс адаптованих заходів:</p>
            <ul>
            <li><b>Дерматологічна підтримка:</b> Використання спеціальних кремів і суворих правил місцевої гігієни для запобігання шкірним ураженням.</li>
            <li><b>Нутриційне консультування:</b> Корекція раціону для захисту травної системи або полегшення ковтання під час опромінення.</li>
            <li><b>Симптоматичне лікування:</b> Протизапальні, протиблювотні або підтримувальні препарати, що призначаються профілактично або при перших ознаках дискомфорту.</li>
            </ul>

            <blockquote>
            <p>Відкрите спілкування з лікарем-радіотерапевтом є найкращим інструментом контролю. Про будь-яку зміну, незалежно від того, наскільки незначною вона здається, слід повідомляти одразу, щоб її можна було скоригувати ще до того, як вона стане перешкодою для лікування.</p>
            </blockquote>

            <h3>Коли потрібно звернутися до медичної команди?</h3>
            <p>Важливо повідомити лікаря про такі симптоми, якщо вони стають стійкими або посилюються:</p>
            <ul>
            <li>Сильне почервоніння шкіри, що викликає біль або печіння;</li>
            <li>Труднощі з підтриманням гідратації або неможливість ковтати тверду їжу;</li>
            <li>Нудота, яка не минає попри звичайні дієтичні рекомендації;</li>
            <li>Нові порушення сечовипускання або травлення, що з’явилися під час сеансів лікування;</li>
            <li>Стан слабкості, який заважає виконувати базові повсякденні справи.</li>
            </ul>

            <h3>Висновок: Безпека через активний моніторинг</h3>
            <p>Сучасна променева терапія створена так, щоб бути добре переносимою. Мета медичної команди — збалансувати онкологічну ефективність (знищення пухлини) зі збереженням якості життя. Завдяки щоденному моніторингу та швидкому коригуванню плану підтримки переважна більшість пацієнтів успішно завершує лікування без перерв і без значних ускладнень.</p>`,
        },
    },
  },
  {
    id: "radioterapie-pinteni-calcaneeni",
    author: "Dr. Tatiana Cirimpei",
    isoDate: "2025-08-01",
coverImage: imgRadioterapiePinteniCalcaneeniCover,
articleImage: imgRadioterapiePinteniCalcaneeniArticle,
    translations:{
        ro: {
        slug: "radioterapie-pinteni-calcaneeni",
        category: "Servicii medicale",
        title: "Radioterapia pentru pintenii calcaneeni: O soluție eficientă împotriva durerii cronice",
        excerpt:
            "Când metodele clasice dau greș, radioterapia antiinflamatorie în doze mici poate reduce semnificativ durerea cauzată de pintenii calcaneeni, redând mobilitatea piciorului.",
        readTime: "4 min",

        coverAlt: "Evaluarea durerii de călcâi și radioterapie antiinflamatorie",
        tags: ["Servicii medicale", "Pinteni calcaneeni", "Radioterapie"],
        contentHtml: `
            <p>Pintenii calcaneeni (depunerile de calciu la nivelul călcâiului) și fasciita plantară pot transforma fiecare pas într-o provocare dureroasă. Deși prima linie de tratament implică de obicei kinetoterapia, talonetele ortopedice sau antiinflamatoarele, există situații în care durerea devine cronică și rezistentă la aceste măsuri convenționale.</p>
                <p>În aceste cazuri, radioterapia de joasă doză intervine ca o metodă terapeutică extrem de eficientă, utilizată de decenii în centrele medicale europene pentru proprietățile sale antiinflamatorii și analgezice remarcabile.</p>
                <h3>Ce este radioterapia antiinflamatorie?</h3>
                <p>Este important de înțeles că, deși folosim același accelerator liniar ca în tratamentele oncologice, protocolul este complet diferit. Doza de radiații administrată este de aproximativ 50-100 de ori mai mică decât cea folosită pentru tratarea unei tumori.</p>
                <p>La acest nivel minim, radiația nu distruge țesutul, ci acționează asupra celulelor inflamatorii și a terminațiilor nervoase locale, „stingând” focarul de durere din călcâi. Este o procedură non-invazivă, care nu necesită anestezie sau spitalizare.</p>

                <h3>Cum se desfășoară tratamentul?</h3>
                <p>Spre deosebire de curele lungi de radioterapie, protocolul pentru pintenii calcaneeni este unul scurt și simplificat:</p>
                <ul>
                <li><b>Ședințe ultrarapide:</b> Expunerea efectivă durează doar câteva zeci de secunde.</li>
                <li><b>Frecvență redusă:</b> De regulă, se efectuează un număr mic de ședințe (aproximativ 6), repartizate pe parcursul a două săptămâni.</li>
                <li><b>Confort total:</b> Pacientul stă întins sau așezat, iar procedura este complet nedureroasă – nu se simte nicio senzație de căldură sau disconfort în timpul iradierii.</li>
                </ul>
                <h3>La ce rezultate să vă așteptați?</h3>
                <p>Radioterapia nu „topește” pintenul de os (acesta va rămâne vizibil pe radiografie), ci elimină inflamația țesuturilor moi din jurul lui, care este adevărata cauză a durerii. </p>
                <p>Efectul nu este întotdeauna instantaneu. Deși unii pacienți simt o ameliorare rapidă, beneficiul maxim se instalează progresiv în primele 4-12 săptămâni după finalizarea protocolului. Studiile clinice arată că peste 70-80% dintre pacienți raportează o reducere semnificativă a durerii sau chiar dispariția completă a acesteia pe termen lung.</p>

                <blockquote>
                <p>Obiectivul meu este redarea mobilității. Radioterapia antiinflamatorie este puntea de legătură între eșecul tratamentelor clasice și evitarea unei intervenții chirurgicale invazive.</p>
                </blockquote>

                <h3>Când este recomandată această procedură?</h3>
                <p>Radioterapia devine o opțiune viabilă în următoarele scenarii:</p>
                <ul>
                <li>Durerea persistă de mai mult de 6 luni, în ciuda repausului și a fizioterapiei;</li>
                <li>Administrarea pe termen lung a antiinflamatoarelor este contraindicată sau ineficientă;</li>
                <li>Durerea de călcâi limitează sever activitățile zilnice sau capacitatea de muncă;</li>
                <li>Pacientul dorește să evite infiltrațiile dureroase sau intervenția chirurgicală.</li>
                </ul>

                <h3>O abordare integrată</h3>
                <p>Pentru rezultate optime, radioterapia trebuie privită ca parte a unui plan de recuperare. Recomandăm în continuare purtarea încălțămintei adecvate și efectuarea exercițiilor de stretching pentru fascia plantară. Această combinație asigură nu doar eliminarea durerii actuale, ci și prevenirea reapariției inflamației în viitor.</p>`,
                    },
        en: {
            slug: "radiotherapy-for-heel-spurs",
            category: "Medical services",
            title: "Radiotherapy for Heel Spurs: An Effective Solution Against Chronic Pain",
            excerpt:
                "When conventional methods fail, low-dose anti-inflammatory radiotherapy can significantly reduce pain caused by heel spurs and help restore foot mobility.",
            readTime: "4 min",
   
            coverAlt: "Assessment of heel pain and anti-inflammatory radiotherapy",
            tags: ["Medical services", "Heel spurs", "Radiotherapy"],
            contentHtml: `
            <p>Heel spurs (calcium deposits at the level of the heel) and plantar fasciitis can turn every step into a painful challenge. Although the first line of treatment usually includes physical therapy, orthopedic insoles or anti-inflammatory medication, there are situations in which the pain becomes chronic and resistant to these conventional measures.</p>

                <p>In such cases, low-dose radiotherapy becomes an extremely effective therapeutic method, used for decades in European medical centers because of its remarkable anti-inflammatory and analgesic properties.</p>

                <h3>What is anti-inflammatory radiotherapy?</h3>
                <p>It is important to understand that although we use the same linear accelerator as in oncologic treatments, the protocol is completely different. The dose of radiation administered is approximately 50 to 100 times lower than the one used to treat a tumor.</p>

                <p>At this minimal level, radiation does not destroy tissue, but acts on inflammatory cells and local nerve endings, “switching off” the source of pain in the heel. It is a non-invasive procedure that does not require anesthesia or hospitalization.</p>

                <h3>How is the treatment carried out?</h3>
                <p>Unlike long radiotherapy courses, the protocol for heel spurs is short and simplified:</p>
                <ul>
                <li><b>Ultra-fast sessions:</b> The actual exposure lasts only a few tens of seconds.</li>
                <li><b>Reduced frequency:</b> Usually, a small number of sessions are performed (around 6), spread over two weeks.</li>
                <li><b>Total comfort:</b> The patient lies down or remains seated, and the procedure is completely painless – there is no sensation of heat or discomfort during irradiation.</li>
                </ul>

                <h3>What results should you expect?</h3>
                <p>Radiotherapy does not “melt away” the bony spur itself (it will remain visible on the X-ray), but it eliminates the inflammation of the surrounding soft tissues, which is the true cause of the pain.</p>
                <p>The effect is not always immediate. Although some patients feel rapid improvement, the maximum benefit develops progressively within the first 4 to 12 weeks after the protocol is completed. Clinical studies show that more than 70–80% of patients report a significant reduction in pain or even complete disappearance of pain in the long term.</p>

                <blockquote>
                <p>My goal is to restore mobility. Anti-inflammatory radiotherapy is the bridge between the failure of conventional treatments and avoiding invasive surgery.</p>
                </blockquote>

                <h3>When is this procedure recommended?</h3>
                <p>Radiotherapy becomes a valid option in the following situations:</p>
                <ul>
                <li>The pain persists for more than 6 months despite rest and physiotherapy;</li>
                <li>Long-term use of anti-inflammatory drugs is contraindicated or ineffective;</li>
                <li>Heel pain severely limits daily activities or work capacity;</li>
                <li>The patient wishes to avoid painful injections or surgery.</li>
                </ul>

                <h3>An integrated approach</h3>
                <p>For optimal results, radiotherapy should be viewed as part of a recovery plan. We still recommend wearing appropriate footwear and performing stretching exercises for the plantar fascia. This combination helps not only eliminate current pain, but also prevent the recurrence of inflammation in the future.</p>`,
            },
        uk: {
            slug: "promeneva-terapiya-pry-pyatkovykh-shporakh",
            category: "Медичні послуги",
            title: "Променева терапія при п’яткових шпорах: Ефективне рішення проти хронічного болю",
            excerpt:
                "Коли класичні методи не допомагають, низькодозова протизапальна променева терапія може суттєво зменшити біль, спричинений п’ятковими шпорами, і відновити рухливість стопи.",
            readTime: "4 хв",
  
            coverAlt: "Оцінка болю в п’яті та протизапальна променева терапія",
            tags: ["Медичні послуги", "П’яткові шпори", "Променева терапія"],
            contentHtml: `
            <p>П’яткові шпори (відкладення кальцію в ділянці п’яти) та підошовний фасциїт можуть перетворити кожен крок на болісне випробування. Хоча перша лінія лікування зазвичай включає фізіотерапію, ортопедичні устілки або протизапальні препарати, бувають ситуації, коли біль стає хронічним і стійким до цих звичних заходів.</p>

                <p>У таких випадках низькодозова променева терапія стає надзвичайно ефективним методом лікування, який уже десятиліттями застосовується в європейських медичних центрах завдяки своїм вираженим протизапальним і знеболювальним властивостям.</p>

                <h3>Що таке протизапальна променева терапія?</h3>
                <p>Важливо розуміти, що хоча ми використовуємо той самий лінійний прискорювач, що й в онкологічному лікуванні, сам протокол є зовсім іншим. Доза випромінювання, що подається, приблизно у 50–100 разів менша за ту, яка використовується для лікування пухлини.</p>

                <p>На такому мінімальному рівні випромінювання не руйнує тканини, а впливає на запальні клітини та місцеві нервові закінчення, ніби «вимикаючи» джерело болю в п’яті. Це неінвазивна процедура, яка не потребує анестезії чи госпіталізації.</p>

                <h3>Як проходить лікування?</h3>
                <p>На відміну від тривалих курсів променевої терапії, протокол для лікування п’яткових шпор є коротким і спрощеним:</p>
                <ul>
                <li><b>Надшвидкі сеанси:</b> саме опромінення триває лише кілька десятків секунд.</li>
                <li><b>Невисока частота:</b> зазвичай проводиться невелика кількість сеансів (приблизно 6), розподілених протягом двох тижнів.</li>
                <li><b>Повний комфорт:</b> пацієнт лежить або сидить, а процедура є повністю безболісною — під час опромінення немає відчуття тепла чи дискомфорту.</li>
                </ul>

                <h3>Яких результатів варто очікувати?</h3>
                <p>Променева терапія не «розчиняє» саму кісткову шпору (вона залишатиметься видимою на рентгені), а усуває запалення м’яких тканин навколо неї, яке і є справжньою причиною болю.</p>
                <p>Ефект не завжди настає миттєво. Хоча деякі пацієнти відчувають швидке полегшення, максимальна користь розвивається поступово протягом перших 4–12 тижнів після завершення протоколу. Клінічні дослідження показують, що понад 70–80% пацієнтів повідомляють про значне зменшення болю або навіть його повне зникнення в довгостроковій перспективі.</p>

                <blockquote>
                <p>Моя мета — відновити рухливість. Протизапальна променева терапія є тим мостом між неефективністю класичних методів лікування та уникненням інвазивного хірургічного втручання.</p>
                </blockquote>

                <h3>Коли рекомендується ця процедура?</h3>
                <p>Променева терапія стає доцільним варіантом у таких ситуаціях:</p>
                <ul>
                <li>Біль триває понад 6 місяців, незважаючи на спокій і фізіотерапію;</li>
                <li>Тривале застосування протизапальних препаратів є протипоказаним або неефективним;</li>
                <li>Біль у п’яті суттєво обмежує щоденну активність або працездатність;</li>
                <li>Пацієнт хоче уникнути болісних ін’єкцій або хірургічного втручання.</li>
                </ul>

                <h3>Комплексний підхід</h3>
                <p>Для досягнення оптимальних результатів променеву терапію слід розглядати як частину відновлювального плану. Ми й надалі рекомендуємо носити відповідне взуття та виконувати вправи на розтягування підошовної фасції. Таке поєднання допомагає не лише усунути поточний біль, а й запобігти повторному виникненню запалення в майбутньому.</p>`,
            },
        }
    },
    {
        id: "afectiuni-benigne-selectate",
        author: "Dr. Tatiana Cirimpei",
        isoDate: "2025-08-01",
coverImage: imgAfectiuniBenigneSelectateCover,
articleImage: imgAfectiuniBenigneSelectateArticle,
        translations:{
            ro:{
                  slug: "afectiuni-benigne-selectate",
                    category: "Servicii medicale",
                    title: "Radioterapia în afecțiuni non-oncologice: Indicații și beneficii",
                    excerpt:
                        "Dincolo de oncologie, radioterapia de doză mică este o soluție eficientă pentru controlul proliferării celulare în afecțiuni precum keloizii sau hemangioamele rezistente.",
                    readTime: "4 min",
                    
                    coverAlt: "Evaluarea indicațiilor de radioterapie în afecțiuni benigne selectate",
                    tags: ["Servicii medicale", "Afecțiuni benigne", "Radioterapie"],
                    contentHtml: `
                        <p>Deși este recunoscută în principal ca pilon central în tratamentul cancerului, radioterapia deține un rol terapeutic valoros și în gestionarea unor afecțiuni non-oncologice (benigne). În aceste situații, nu urmărim distrugerea unei tumori maligne, ci utilizăm energia radiațiilor pentru a modula inflamația, a opri proliferarea celulară excesivă sau a induce regresia unor malformații vasculare.</p>

                        <p>Utilizarea radioterapiei în patologia benignă necesită o selecție riguroasă a pacienților. Decizia terapeutică nu este una de rutină, ci rezultatul unei analize atente a raportului dintre beneficiul clinic și istoricul medical al fiecărui individ.</p>

                        <h3>Mecanismul de acțiune în patologia benignă</h3>
                        <p>Spre deosebire de dozele mari folosite în oncologie, în cazul afecțiunilor benigne se utilizează protocoale cu doze mult mai reduse. Acestea au capacitatea de a inhiba diviziunea accelerată a celulelor care produc colagen în exces sau a celor care formează vase de sânge anormale, fără a afecta integritatea generală a țesutului sănătos.</p>

                        <h3>Keloizii și cicatricile hipertrofice</h3>
                        <p>Keloizii sunt cicatrici care cresc dincolo de limitele rănii inițiale, fiind adesea dureroase, pruriginoase (provoacă mâncărime) și inestetice. Din cauza ratei mari de recidivă după simpla excizie chirurgicală, radioterapia este utilizată ca tratament adjuvant strategic.</p>
                        
                        

                        <p><b>Cum ajută radioterapia:</b> Administrată imediat după intervenția chirurgicală (de regulă în primele 24-48 de ore), radioterapia previne activitatea excesivă a fibroblastelor – celulele responsabile pentru producția de colagen. Astfel, riscul ca cicatricea să se reformeze este redus semnificativ.</p>

                        <h3>Hemangioamele și malformațiile vasculare</h3>
                        <p>Hemangioamele sunt aglomerări de vase de sânge care pot apărea în diverse zone ale corpului. Deși majoritatea nu necesită tratament, există cazuri complexe unde localizarea (de exemplu, în apropierea ochilor sau a căilor respiratorii) sau evoluția rapidă impun intervenția.</p>
                        <p>În situații specifice, radioterapia poate induce sclerozarea (închiderea) vaselor de sânge anormale, ducând la oprirea creșterii sau chiar la micșorarea leziunii. Indicația se stabilește strict în echipa multidisciplinară, atunci când alte metode (medicamentoase sau laser) nu sunt aplicabile.</p>

                        <h3>Alte aplicații: Prevenirea osificărilor heterotopice</h3>
                        <p>O altă utilizare importantă a radioterapiei benigne este prevenirea formării de os în locuri anormale (osificări heterotopice), frecvent întâlnite după intervenții chirurgicale la nivelul șoldului sau după traumatisme severe. O singură doză de radioterapie administrată perioperator poate bloca transformarea celulelor stem în celule osoase în locuri nedorite.</p>

                        <blockquote>
                        <p>Radioterapia pentru afecțiuni benigne reprezintă o soluție de finețe medicală, unde doza minimă este calculată pentru a obține un impact funcțional maxim, redând confortul pacientului fără intervenții chirurgicale repetate.</p>
                        </blockquote>

                        <h3>Criterii pentru evaluarea de specialitate</h3>
                        <p>Radioterapia nu este prima opțiune de tratament în afecțiunile benigne, dar devine o soluție de luat în calcul atunci când:</p>
                        <ul>
                        <li>Afecțiunea are un istoric de recidivă după tratamentele convenționale;</li>
                        <li>Simptomele (durere, limitarea mișcării, sângerare) afectează sever calitatea vieții;</li>
                        <li>Alte intervenții sunt contraindicate din cauza localizării leziunii;</li>
                        <li>Există o recomandare clară din partea unui medic specialist (dermatolog, ortoped sau chirurg).</li>
                        </ul>

                        <p>Evaluarea de specialitate în cadrul departamentului de radioterapie permite stabilirea unui plan personalizat, care să ofere siguranță pe termen lung și rezultate estetice sau funcționale optime.</p>`,
            },
            en: {
            slug: "radiotherapy-in-selected-non-oncological-conditions",
            category: "Medical services",
            title: "Radiotherapy in Non-Oncological Conditions: Indications and Benefits",
            excerpt:
                "Beyond oncology, low-dose radiotherapy is an effective solution for controlling cellular proliferation in conditions such as keloids or resistant hemangiomas.",
            readTime: "4 min",
     
            coverAlt: "Assessment of radiotherapy indications in selected benign conditions",
            tags: ["Medical services", "Benign conditions", "Radiotherapy"],
            contentHtml: `
                <p>Although it is primarily recognized as a central pillar in cancer treatment, radiotherapy also has a valuable therapeutic role in the management of certain non-oncological (benign) conditions. In these situations, the goal is not to destroy a malignant tumor, but to use the energy of radiation to modulate inflammation, stop excessive cellular proliferation, or induce the regression of certain vascular malformations.</p>

                <p>The use of radiotherapy in benign pathology requires rigorous patient selection. The therapeutic decision is not a routine one, but the result of a careful analysis of the balance between clinical benefit and each individual’s medical history.</p>

                <h3>Mechanism of action in benign pathology</h3>
                <p>Unlike the high doses used in oncology, much lower-dose protocols are used in benign conditions. These doses are able to inhibit the accelerated division of cells that produce excess collagen or of those that form abnormal blood vessels, without affecting the overall integrity of healthy tissue.</p>

                <h3>Keloids and hypertrophic scars</h3>
                <p>Keloids are scars that grow beyond the limits of the initial wound and are often painful, pruritic (itchy), and aesthetically distressing. Because of the high recurrence rate after simple surgical excision, radiotherapy is used as a strategic adjuvant treatment.</p>

                <p><b>How radiotherapy helps:</b> When administered immediately after surgery (usually within the first 24 to 48 hours), radiotherapy prevents the excessive activity of fibroblasts — the cells responsible for collagen production. In this way, the risk of scar recurrence is significantly reduced.</p>

                <h3>Hemangiomas and vascular malformations</h3>
                <p>Hemangiomas are clusters of blood vessels that may appear in various areas of the body. Although most do not require treatment, there are complex cases in which the location (for example, near the eyes or airways) or rapid progression makes intervention necessary.</p>
                <p>In specific situations, radiotherapy can induce sclerosis (closure) of abnormal blood vessels, leading to the halt of growth or even shrinkage of the lesion. The indication is established strictly within the multidisciplinary team, when other methods (medical treatment or laser therapy) are not applicable.</p>

                <h3>Other applications: Prevention of heterotopic ossification</h3>
                <p>Another important use of benign radiotherapy is the prevention of bone formation in abnormal locations (heterotopic ossification), frequently encountered after hip surgery or severe trauma. A single perioperative dose of radiotherapy can block the transformation of stem cells into bone cells in unwanted locations.</p>

                <blockquote>
                <p>Radiotherapy for benign conditions represents a highly refined medical solution, in which the minimum dose is calculated to achieve maximum functional impact, restoring patient comfort without repeated surgical interventions.</p>
                </blockquote>

                <h3>Criteria for specialist evaluation</h3>
                <p>Radiotherapy is not the first treatment option in benign conditions, but it becomes a solution worth considering when:</p>
                <ul>
                <li>The condition has a history of recurrence after conventional treatments;</li>
                <li>Symptoms (pain, limitation of movement, bleeding) severely affect quality of life;</li>
                <li>Other interventions are contraindicated because of the lesion’s location;</li>
                <li>There is a clear recommendation from a specialist physician (dermatologist, orthopedist, or surgeon).</li>
                </ul>

                <p>Specialist evaluation within the radiotherapy department makes it possible to establish a personalized plan that provides long-term safety and optimal aesthetic or functional results.</p>`,
            },
            uk: {
            slug: "promeneva-terapiya-pry-neonkolohichnykh-zakhvoryuvannyakh",
            category: "Медичні послуги",
            title: "Променева терапія при неонкологічних захворюваннях: Показання та переваги",
            excerpt:
                "Окрім онкології, низькодозова променева терапія є ефективним рішенням для контролю клітинної проліферації при таких станах, як келоїди або резистентні гемангіоми.",
            readTime: "4 хв",

            coverAlt: "Оцінка показань до променевої терапії при вибраних доброякісних захворюваннях",
            tags: ["Медичні послуги", "Доброякісні захворювання", "Променева терапія"],
            contentHtml: `
                <p>Хоча променева терапія насамперед відома як один із центральних методів лікування раку, вона також має цінну терапевтичну роль у веденні певних неонкологічних (доброякісних) захворювань. У таких ситуаціях метою є не знищення злоякісної пухлини, а використання енергії випромінювання для модулювання запалення, зупинки надмірної клітинної проліферації або спричинення регресії деяких судинних мальформацій.</p>

                <p>Застосування променевої терапії при доброякісній патології потребує дуже ретельного відбору пацієнтів. Терапевтичне рішення не є рутинним, а формується на основі уважного аналізу співвідношення між клінічною користю та медичним анамнезом кожної конкретної людини.</p>

                <h3>Механізм дії при доброякісній патології</h3>
                <p>На відміну від високих доз, що використовуються в онкології, при доброякісних захворюваннях застосовуються протоколи зі значно нижчими дозами. Вони здатні пригнічувати прискорений поділ клітин, які виробляють надлишок колагену, або клітин, що формують аномальні кровоносні судини, не порушуючи загальної цілісності здорової тканини.</p>

                <h3>Келоїди та гіпертрофічні рубці</h3>
                <p>Келоїди — це рубці, які розростаються за межі первинної рани та часто є болючими, сверблячими й естетично неприємними. Через високий рівень рецидиву після простого хірургічного висічення променева терапія використовується як стратегічне ад’ювантне лікування.</p>

                <p><b>Як допомагає променева терапія:</b> якщо вона проводиться одразу після операції (зазвичай у перші 24–48 годин), променева терапія запобігає надмірній активності фібробластів — клітин, відповідальних за вироблення колагену. Таким чином, ризик повторного формування рубця значно зменшується.</p>

                <h3>Гемангіоми та судинні мальформації</h3>
                <p>Гемангіоми — це скупчення кровоносних судин, які можуть з’являтися в різних ділянках тіла. Хоча більшість із них не потребує лікування, існують складні випадки, коли локалізація (наприклад, поблизу очей або дихальних шляхів) чи швидке прогресування роблять втручання необхідним.</p>
                <p>У певних ситуаціях променева терапія може спричиняти склерозування (закриття) аномальних кровоносних судин, що веде до зупинки росту або навіть зменшення ураження. Показання встановлюються виключно мультидисциплінарною командою, коли інші методи (медикаментозне лікування або лазерна терапія) не є застосовними.</p>

                <h3>Інші застосування: Профілактика гетеротопічної осифікації</h3>
                <p>Ще одним важливим застосуванням променевої терапії при доброякісних станах є профілактика утворення кісткової тканини в аномальних місцях (гетеротопічна осифікація), що часто спостерігається після операцій на кульшовому суглобі або після тяжких травм. Одна періопераційна доза променевої терапії може заблокувати перетворення стовбурових клітин на кісткові клітини в небажаних ділянках.</p>

                <blockquote>
                <p>Променева терапія при доброякісних захворюваннях є прикладом високоточного медичного підходу, де мінімальна доза розраховується для досягнення максимального функціонального ефекту, повертаючи пацієнтові комфорт без повторних хірургічних втручань.</p>
                </blockquote>

                <h3>Критерії для спеціалізованої оцінки</h3>
                <p>Променева терапія не є першим вибором лікування при доброякісних захворюваннях, але вона стає варіантом, який варто розглядати, коли:</p>
                <ul>
                <li>Захворювання має історію рецидивів після стандартного лікування;</li>
                <li>Симптоми (біль, обмеження рухів, кровотеча) суттєво погіршують якість життя;</li>
                <li>Інші втручання протипоказані через локалізацію ураження;</li>
                <li>Є чітка рекомендація від лікаря-спеціаліста (дерматолога, ортопеда або хірурга).</li>
                </ul>

                <p>Спеціалізована оцінка у відділенні променевої терапії дає змогу сформувати персоналізований план, який забезпечує довгострокову безпеку та оптимальні естетичні або функціональні результати.</p>`,
            },
        }
    },
    {
        id: "colaborare-interdisciplinara-radioterapie",
        author: "Dr. Tatiana Cirimpei",
        isoDate: "2025-07-12",
        coverImage: imgColaborareInterdisciplinaraRadioterapieCover,
        articleImage: imgColaborareInterdisciplinaraRadioterapieCover,
        translations:{
            ro: {
            slug: "colaborare-interdisciplinara-radioterapie",
            category: "Colaborare medicală",
            title: "Managementul integrat al pacientului oncologic: Precizie, timp și suport interdisciplinar",
            excerpt:
                "Un model de parteneriat medical bazat pe acces rapid la tratament, dialog și utilizarea tehnologiei de top pentru un control tumoral optim.",
            readTime: "6 min",
            coverAlt: "Colaborare multidisciplinară Tumor Board",
            tags: ["Radioterapie", "Comunicare", "Tehnologie"],
            contentHtml: `<p><i>Acest articol este dedicat colegilor medici, specialiști și primari, care urmăresc integrarea celor mai noi soluții de radioterapie în planul de management al pacienților lor, cu scopul de a asigura un tratament corect, sigur și eficient.</i></p>
                <p>În practica oncologică, succesul depinde de capacitatea noastră, ca medici, de a colabora pentru binele pacientului. Radioterapia este astăzi un instrument de o precizie extraordinară, care vine în sprijinul tuturor specialităților implicate în tratamentul cancerului. Obiectivul meu este ca fiecare pacient să primească indicația cea mai potrivită, beneficiind de tehnologie de top într-un timp cât mai scurt.<br>Iată pilonii pe care se bazează abordarea mea profesională:</p>

                <h3>1. Acces rapid la tratament</h3>
                <p>Timpul este un factor critic în oncologie. Fluxul de lucru din cadrul clinicii este structurat astfel încât să elimine perioadele de așteptare, asigurând un debut terapeutic prompt imediat ce indicația este validată, iar simularea CT este finalizată.</p>
                <ul>
                <li><b>Programare eficientă:</b> Pacientul beneficiază de tratament fără amânări inutile.</li>
                <li><b>Comunicare medicală:</b> Informarea periodică a medicului trimițător despre evoluția clinică a pacientului.</li>
                <li><b>Continuitatea îngrijirii:</b> După finalizarea curei de iradiere, pacientul revine sub supravegherea medicului curant, însoțit de un raport medical detaliat.</li>
                </ul>

                <h3>2. Dialog și expertiză în Comisiile Multidisciplinare (Tumor Board)</h3>
                <p>Consider că deciziile cele mai bune se iau în echipă. Sunt disponibilă pentru participarea activă în comisiile multidisciplinare sau pentru a oferi o perspectivă tehnică în cadrul discuțiilor pe cazuri complexe. Colaborarea între medici, bazată pe respect și competență, este singura cale prin care îi putem oferi pacientului șansa la un rezultat optim.</p>
                
                <h3>3. Colegialitate și sprijin pentru medicii radioterapeuți</h3>
                <p>Dincolo de colaborarea interdisciplinară, cred în solidaritatea în interiorul specialității noastre. Sunt deschisă să ofer consultanță sau o a doua opinie colegilor mei radioterapeuți pe cazuri punctuale care necesită o planificare dozimetrică complexă. Scopul meu final este ca pacientul, indiferent de locul unde este tratat, să beneficieze de cea mai sigură și eficientă soluție tehnică disponibilă.</p>

                <h3>4. Siguranța și precizia tehnologiei în secvențialitatea tratamentului</h3>
                <p>Performanța tratamentului este direct dependentă de acuratețea livrării dozei. Acceleratoarele liniare precum <b>TrueBeam STx</b> și <b>Halcyon</b>, utilizate în cadrul unității unde activez, reprezintă standardul actual de excelență în domeniu. Prin intermediul softurilor de planificare de ultimă generație, ne asigurăm că iradierea este strict conformă cu obiectivele clinice, fie că vorbim de pregătirea pentru o intervenție chirurgicală sau de consolidarea rezultatelor după chimioterapie.</p>
                <p>Această precizie submilimetrică permite o distribuție dozimetrică riguroasă, care protejează țesuturile sănătoase și vascularizația peritumorală. Astfel, putem oferi soluții sigure chiar și în situații anatomice dificile, minimizând toxicitatea pe termen lung și asigurând o recuperare mai ușoară pentru pacient, indiferent de localizarea bolii.</p>

                <blockquote>
                <p>Dincolo de performanța aparatelor cu care tratăm, esența profesiei noastre rămâne grija față de om. Rolul meu este să mă asigur că pacientul primește tratamentul corect la momentul potrivit, oferind colegilor mei un suport tehnic și profesional pe care se pot baza în orice etapă a tratamentului.</p>
                </blockquote>

                <h3>Colaborare și comunicare directă</h3>
                <p>Dacă aveți pacienți care necesită evaluare pentru radioterapie sau doriți să discutăm oportunitatea iradierii într-un caz specific, vă încurajez să stabilim o linie de comunicare directă. Prioritatea mea este ca, împreună, să asigurăm un parcurs medical fluid și corect pentru fiecare pacient.</p>`
            },
            en: {
            slug: "interdisciplinary-collaboration-in-radiotherapy",
            category: "Medical collaboration",
            title: "Integrated Management of the Oncology Patient: Precision, Time and Interdisciplinary Support",
            excerpt:
                "A medical partnership model built on rapid access to treatment, dialogue, and the use of advanced technology for optimal tumor control.",
            readTime: "6 min read",
            coverAlt: "Multidisciplinary Tumor Board collaboration",
            tags: ["Radiotherapy", "Communication", "Technology"],
            contentHtml: `<p><i>This article is dedicated to fellow physicians, specialists and senior consultants who seek to integrate the latest radiotherapy solutions into the management plan of their patients, with the goal of ensuring treatment that is accurate, safe and effective.</i></p>

                <p>In oncologic practice, success depends on our ability, as physicians, to collaborate for the benefit of the patient. Radiotherapy is now a tool of extraordinary precision that supports all specialties involved in cancer treatment. My goal is for every patient to receive the most appropriate indication, benefiting from advanced technology within the shortest possible time.<br>These are the pillars on which my professional approach is built:</p>

                <h3>1. Rapid access to treatment</h3>
                <p>Time is a critical factor in oncology. The clinic’s workflow is structured to eliminate waiting periods, ensuring prompt initiation of treatment as soon as the indication has been validated and the CT simulation has been completed.</p>
                <ul>
                <li><b>Efficient scheduling:</b> The patient benefits from treatment without unnecessary delays.</li>
                <li><b>Medical communication:</b> The referring physician is kept regularly informed about the patient’s clinical course.</li>
                <li><b>Continuity of care:</b> After the completion of the irradiation course, the patient returns under the supervision of the treating physician, accompanied by a detailed medical report.</li>
                </ul>

                <h3>2. Dialogue and expertise within Multidisciplinary Tumor Boards</h3>
                <p>I believe that the best decisions are made as a team. I am available for active participation in multidisciplinary boards or to provide a technical perspective in discussions involving complex cases. Collaboration between physicians, based on respect and competence, is the only way we can offer the patient the best chance of an optimal outcome.</p>
                
                <h3>3. Collegiality and support for fellow radiation oncologists</h3>
                <p>Beyond interdisciplinary collaboration, I believe in solidarity within our own specialty. I am open to offering guidance or a second opinion to fellow radiation oncologists in selected cases that require complex dosimetric planning. My ultimate goal is for the patient, regardless of where treatment is delivered, to benefit from the safest and most effective technical solution available.</p>

                <h3>4. Safety and technological precision throughout the treatment sequence</h3>
                <p>The performance of treatment depends directly on the accuracy of dose delivery. Linear accelerators such as <b>TrueBeam STx</b> and <b>Halcyon</b>, used within the unit where I practice, represent the current standard of excellence in the field. With the help of next-generation planning software, we ensure that irradiation is delivered strictly in line with clinical objectives, whether we are speaking about preparation for surgery or consolidation of results after chemotherapy.</p>
                <p>This submillimetric precision allows for a rigorous dosimetric distribution that protects healthy tissues and peritumoral vascularization. In this way, we can offer safe solutions even in anatomically challenging situations, minimizing long-term toxicity and ensuring easier recovery for the patient, regardless of disease location.</p>

                <blockquote>
                <p>Beyond the performance of the machines we use, the essence of our profession remains care for the human being. My role is to ensure that the patient receives the right treatment at the right time, while offering my colleagues technical and professional support they can rely on at any stage of treatment.</p>
                </blockquote>

                <h3>Direct collaboration and communication</h3>
                <p>If you have patients who require evaluation for radiotherapy or if you would like to discuss the appropriateness of irradiation in a specific case, I encourage you to establish a direct line of communication with me. My priority is that, together, we ensure a smooth and correct medical pathway for every patient.</p>`,
            },
            uk: {
            slug: "mizhdystsyplinarna-spivpratsya-v-promeneviy-terapiyi",
            category: "Медична співпраця",
            title: "Інтегроване ведення онкологічного пацієнта: Точність, час і міждисциплінарна підтримка",
            excerpt:
                "Модель медичного партнерства, заснована на швидкому доступі до лікування, діалозі та використанні передових технологій для оптимального контролю пухлини.",
            readTime: "6 хв читання",
            coverAlt: "Мультидисциплінарна співпраця в межах Tumor Board",
            tags: ["Променева терапія", "Комунікація", "Технологія"],
            contentHtml: `<p><i>Ця стаття присвячена колегам-лікарям, спеціалістам і старшим консультантам, які прагнуть інтегрувати найновіші рішення променевої терапії в план ведення своїх пацієнтів, щоб забезпечити точне, безпечне та ефективне лікування.</i></p>

                <p>В онкологічній практиці успіх залежить від нашої здатності, як лікарів, співпрацювати заради блага пацієнта. Променева терапія сьогодні є інструментом надзвичайної точності, який підтримує всі спеціальності, залучені до лікування раку. Моя мета полягає в тому, щоб кожен пацієнт отримував найбільш правильне показання до лікування, користуючись передовими технологіями в максимально короткі строки.<br>Ось основні принципи, на яких ґрунтується мій професійний підхід:</p>

                <h3>1. Швидкий доступ до лікування</h3>
                <p>Час є критичним фактором в онкології. Робочий процес у клініці організований так, щоб усунути періоди очікування та забезпечити швидкий початок лікування одразу після підтвердження показань і завершення КТ-симуляції.</p>
                <ul>
                <li><b>Ефективне планування:</b> Пацієнт отримує лікування без зайвих затримок.</li>
                <li><b>Медична комунікація:</b> Лікар, який направив пацієнта, регулярно отримує інформацію про клінічний перебіг лікування.</li>
                <li><b>Безперервність догляду:</b> Після завершення курсу опромінення пацієнт повертається під нагляд лікуючого лікаря разом із детальним медичним висновком.</li>
                </ul>

                <h3>2. Діалог і експертність у межах мультидисциплінарних комісій (Tumor Board)</h3>
                <p>Я переконана, що найкращі рішення приймаються командою. Я відкрита до активної участі в мультидисциплінарних комісіях або до надання технічної експертної думки під час обговорення складних клінічних випадків. Співпраця між лікарями, заснована на повазі та компетентності, є єдиним шляхом, який дає пацієнтові шанс на найкращий можливий результат.</p>
                
                <h3>3. Колегіальність і підтримка для колег-радіотерапевтів</h3>
                <p>Окрім міждисциплінарної співпраці, я вірю в солідарність усередині нашої спеціальності. Я готова надавати консультації або другу думку колегам-радіотерапевтам у вибраних випадках, які потребують складного дозиметричного планування. Моя кінцева мета — щоб пацієнт, незалежно від того, де саме він лікується, отримав найбезпечніше й найефективніше технічне рішення з доступних.</p>

                <h3>4. Безпека і точність технологій у всій послідовності лікування</h3>
                <p>Ефективність лікування безпосередньо залежить від точності доставки дози. Лінійні прискорювачі, такі як <b>TrueBeam STx</b> і <b>Halcyon</b>, які використовуються в підрозділі, де я працюю, є сучасним стандартом досконалості в цій галузі. Завдяки програмному забезпеченню нового покоління для планування ми гарантуємо, що опромінення відповідає клінічним цілям, незалежно від того, чи йдеться про підготовку до операції, чи про закріплення результатів після хіміотерапії.</p>
                <p>Ця субміліметрова точність дозволяє досягти суворого дозиметричного розподілу, який захищає здорові тканини та перитуморальну васкуляризацію. Завдяки цьому ми можемо пропонувати безпечні рішення навіть у складних анатомічних ситуаціях, мінімізуючи довгострокову токсичність і забезпечуючи легше відновлення пацієнта незалежно від локалізації захворювання.</p>

                <blockquote>
                <p>Поза технічними можливостями апаратів, з якими ми працюємо, сутність нашої професії залишається незмінною — це турбота про людину. Моя роль полягає в тому, щоб забезпечити пацієнтові правильне лікування у правильний час, одночасно надаючи колегам технічну та професійну підтримку, на яку вони можуть покластися на будь-якому етапі лікування.</p>
                </blockquote>

                <h3>Пряма співпраця та комунікація</h3>
                <p>Якщо у вас є пацієнти, яким потрібна оцінка щодо променевої терапії, або якщо ви хочете обговорити доцільність опромінення в конкретному випадку, я закликаю вас налагодити зі мною пряму комунікацію. Мій пріоритет полягає в тому, щоб разом забезпечити кожному пацієнтові чіткий, правильний і безперервний медичний маршрут.</p>`,
            },
        }
    }
];

export const featuredArticleIdByCategory: Record<string, string> = {
  "Educație medicală": "importanta-radioterapie",
  "Informații utile": "pregatire-radioterapie",
  "Servicii medicale": "consultatii-radioterapie",
};

export const defaultFeaturedArticleId = "radioterapia-pe-intelesul-tuturor";
export function getFeaturedArticleForLocale(locale: SiteLocale, category?: string) {
  const featuredId = category
    ? featuredArticleIdByCategory[category] ?? defaultFeaturedArticleId
    : defaultFeaturedArticleId;

  const article = articlesI18n.find((entry) => entry.id === featuredId) ?? articlesI18n[0];

  if (!article) return null;

  return {
    id: article.id,
    author: article.author,
    isoDate: article.isoDate,
    coverImage: article.coverImage,
    articleImage: article.articleImage,
    bigImage: article.bigImage,
    ...article.translations[locale],
  };
}

export function getArticlesForLocale(locale: SiteLocale) {
    return articlesI18n.map((article) => ({
        id: article.id,
        author: article.author,
        isoDate: article.isoDate,
        coverImage: article.coverImage,
        articleImage: article.articleImage,
        bigImage: article.bigImage,
        ...article.translations[locale],
    }));
}

export function getArticleBySlug(locale: SiteLocale, slug: string) {
    const article = articlesI18n.find(
        (entry) => entry.translations[locale].slug === slug,
    );

    if (!article) return null;

    return {
        id: article.id,
        author: article.author,
        isoDate: article.isoDate,
        coverImage: article.coverImage,
        articleImage: article.articleImage,
        bigImage: article.bigImage,
        ...article.translations[locale],
    };
}

export function getArticleLocalePaths(id: string) {
    const article = articlesI18n.find((entry) => entry.id === id);
    if (!article) return null;

    return {
        ro: `/articole/${article.translations.ro.slug}`,
        en: `/en/articole/${article.translations.en.slug}`,
        uk: `/uk/articole/${article.translations.uk.slug}`,
    };
}
