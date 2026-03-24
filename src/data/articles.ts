export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  coverImage: string;
  coverAlt: string;
  author: string;
  tags: string[];
  contentHtml: string;
};

export const articles: Article[] = [
  {
    slug: "importanta-radioterapie",
    category: "Educație medicală",
    title: "Importanța radioterapiei în tratamentul cancerului",
    excerpt:
      "Radioterapia este o metodă esențială, precisă și modernă, cu rol major în distrugerea celulelor tumorale și protejarea țesuturilor sănătoase.",
    readTime: "8 min",
    date: "10 ianuarie 2026",
    coverImage: "/blog-detail1.webp",
    coverAlt: "Imagine reprezentativă radioterapie",
    author: "Dr. Cirimpei Tatiana",
    tags: ["Pacient", "Tratament", "Consultație"],
    contentHtml: `
      <p>În general, radioterapia este o metodă esențială în tratamentul cancerului, utilizată pentru distrugerea celulelor tumorale. Cu ajutorul radiațiilor de înaltă energie, direcționate cu precizie asupra zonei afectate, putem opri dezvoltarea tumorii sau chiar elimina complet celulele maligne, protejând în același timp țesuturile sănătoase din jur.</p>
      <p>Această formă de tratament este una locală, ceea ce înseamnă că acționează direct asupra regiunii în care se află tumora. Radioterapia poate fi folosită ca tratament principal în anumite tipuri de cancer, dar este adesea combinată cu alte metode, precum chirurgia sau chimioterapia, pentru a crește eficiența generală a terapiei. Uneori, este indicată și în scop paliativ, pentru a reduce simptomele și a îmbunătăți calitatea vieții pacientului.</p>

      <h3>Beneficiile radioterapiei moderne</h3>
      <p>Radioterapia modernă este mult diferită față de ceea ce poate ați auzit în trecut. Datorită progreselor tehnologice, tratamentele sunt astăzi:</p>
      <ul>
        <li>Mult mai precise – radiațiile sunt direcționate exact către tumoare.</li>
        <li>Bine tolerate – efectele adverse sunt reduse semnificativ.</li>
        <li>Non-invazive – nu necesită incizii sau spitalizare.</li>
        <li>Rapide – ședințele durează doar câteva minute.</li>
      </ul>

      <h3>Ce simte pacientul în timpul tratamentului?</h3>
      <p>Tratamentul în sine este nedureros. Pacientul stă întins pe o masă, iar aparatul se mișcă în jurul lui fără a-l atinge. Nu se simte radiația, nu se vede, nu se miroase. Tot procesul este ghidat și monitorizat permanent de o echipă medicală dedicată, formată din medici, fizicieni și asistenți specializați..</p>

      <blockquote>
        Radioterapia nu este doar o tehnică medicală – este o șansă reală de vindecare sau de îmbunătățire a vieții. Dacă tu sau cineva apropiat se confruntă cu această boală, te încurajez să iei legătura cu mine. O discuție deschisă și o evaluare atentă pot deschide un drum nou spre tratament și echilibru.
      </blockquote>

      <h3>Ce tipuri de cancer se pot trata cu radioterapie?</h3>
      <p>Radioterapia este eficientă în tratarea multor forme de cancer, inclusiv cancerul de sân, cancerul pulmonar, de prostată, ginecologic sau colorectal. Fiecare caz este însă unic. De aceea, este esențial ca înainte de începerea tratamentului să aibă loc o consultație de specialitate. În cadrul acesteia, se analizează dosarul medical, se discută opțiunile terapeutice și se stabilește un plan personalizat, adaptat fiecărui pacient.</p>
      <p>Un astfel de plan ia în considerare atât localizarea tumorii, cât și stadiul bolii, vârsta pacientului și starea sa generală de sănătate. Tocmai de aceea, evaluarea inițială este extrem de importantă și nu trebuie amânată. Uneori, câteva zile pot face diferența.</p>
      <p>Radioterapia nu este doar o opțiune, ci una dintre cele mai importante arme pe care le avem astăzi în tratamentul cancerului. Atunci când este indicată corect și realizată cu precizie, poate schimba radical evoluția bolii și oferi șanse reale de vindecare. Tocmai de aceea este esențial ca fiecare pacient să fie evaluat cu atenție și să primească o recomandare adaptată situației sale. Dacă ai primit un diagnostic oncologic sau ești în căutarea celei mai bune abordări terapeutice, te încurajez să îți programezi o consultație. Radioterapia, aplicată la timp și corect, poate fi exact ceea ce îți redă speranța și controlul asupra propriei vieți.</p>
    `,
  },
  {
    slug: "mituri-radioterapie",
    category: "Informații utile",
    title: "Mituri frecvente despre radioterapie – Ce e adevărat și ce nu",
    excerpt:
      "Clarificăm cele mai comune mituri despre radioterapie, astfel încât pacienții să înceapă tratamentul cu încredere și informații corecte.",
    readTime: "7 min",
    date: "24 ianuarie 2026",
    coverImage: "/blog-02.webp",
    coverAlt: "Discuție medic-pacient",
    author: "Dr. Cirimpei Tatiana",
    tags: ["Pacient", "Tratament", "Mituri"],
    contentHtml: `
      <p>Radioterapia este una dintre cele mai utilizate și eficiente metode de tratament în oncologie. Cu toate acestea, în jurul ei planează încă multe temeri și neînțelegeri. Tocmai de aceea, este important să clarificăm cele mai frecvente mituri.</p>

      <h3>❌ Mit: Radioterapia este dureroasă</h3>
      <p>✔️ <strong>Adevăr:</strong> Radioterapia este o procedură non-invazivă. În timpul ședinței, nu se simte nimic – nu există înțepături sau tăieturi.</p>

      <h3>❌ Mit: Radioterapia arde pielea</h3>
      <p>✔️ <strong>Adevăr:</strong> Pot apărea reacții ușoare (roșeață, uscăciune), dar acestea sunt temporare și monitorizate atent.</p>

      <h3>❌ Mit: După radioterapie devii radioactiv</h3>
      <p>✔️ <strong>Adevăr:</strong> În radioterapia externă pacientul NU devine radioactiv și nu reprezintă pericol pentru cei din jur.</p>

      <h3>❌ Mit: Radioterapia are efecte adverse severe</h3>
      <p>✔️ <strong>Adevăr:</strong> Majoritatea reacțiilor sunt ușoare și temporare, iar radioterapia modernă este gândită pentru toleranță bună.</p>

      <h3>❌ Mit: Dacă faci radioterapie, nu mai poți face alte tratamente</h3>
      <p>✔️ <strong>Adevăr:</strong> Radioterapia este frecvent integrată într-un plan complex alături de chirurgie, chimioterapie sau terapii țintite.</p>

      <h3>❌ Mit: Radiațiile afectează grav organele sănătoase</h3>
      <p>✔️ <strong>Adevăr:</strong> Tehnologiile moderne permit livrarea dozei cu maximă precizie, protejând țesuturile sănătoase.</p>

      <h3>Concluzie</h3>
      <p>Radioterapia este un tratament sigur, controlat și extrem de important în lupta împotriva cancerului. Informația corectă este un pas esențial spre încredere și vindecare.</p>
    `,
  },
  {
    slug: "pregatire-radioterapie",
    category: "Ghid pacient",
    title: "Cum să te pregătești pentru o ședință de radioterapie?",
    excerpt:
      "Pregătirea corectă reduce efectele secundare și îmbunătățește eficiența tratamentului. Iată pașii practici, explicați clar.",
    readTime: "12 min",
    date: "5 februarie 2026",
    coverImage: "/blog-detail3.webp",
    coverAlt: "Pregătirea pacientului pentru radioterapie",
    author: "Dr. Cirimpei Tatiana",
    tags: ["Pacient", "Tratament", "Pregătire"],
    contentHtml: `
      <p>Pregătirea corectă pentru radioterapie poate reduce efectele secundare și îmbunătăți eficacitatea tratamentului, oferind mai mult confort și siguranță pe parcursul terapiei.</p>

      <h3>1. Înțelegeți procesul</h3>
      <p>Primul pas este ședința de simulare (centrate/reperaj), realizată cu scanner CT de simulare. Această etapă stabilește exact zona tratată și permite personalizarea planului dosimetric.</p>
      <p>După simulare, echipa formată din medici radioterapeuți, fizicieni și tehnicieni realizează planificarea dosimetrică. În timpul tratamentului se fac verificări periodice ale poziției și, dacă este necesar, se poate adapta planul.</p>

      <h4>Tratamentul propriu-zis</h4>
      <p>În sala cu acceleratorul liniar, poziționarea este identică cu cea din simulare. Aparatul se rotește în jurul corpului fără să îl atingă, iar procedura este nedureroasă și monitorizată permanent.</p>

      <h4>Familiarizarea cu aparatele</h4>
      <p>TrueBeam STx permite precizie extrem de mare pentru zone dificile. Halcyon este un accelerator modern, rapid și silențios, cu timp redus de tratament pe masă.</p>

      <h4>Frecvența și durata</h4>
      <p>Ședințele sunt de regulă zilnice (luni-vineri), pe durata a câteva săptămâni, conform planului personalizat. Regularitatea este esențială pentru eficiență.</p>

      <h3>2. Aveți grijă de pielea din zona iradiată</h3>
      <p>Evitați produse locale neindicate de medic, hainele strâmte și expunerea la soare. Anunțați imediat echipa medicală la orice modificare accentuată.</p>

      <h3>3. Odihnă și alimentație echilibrată</h3>
      <p>Oboseala este frecventă în timpul tratamentului. Se recomandă alimentație ușor digerabilă, hidratare bună și adaptarea ritmului zilnic.</p>

      <h3>4. Respectați programările</h3>
      <p>Fiecare ședință face parte dintr-un plan terapeutic atent calculat. Întârzierile sau întreruperile pot reduce eficiența terapiei.</p>

      <h3>5. Comunicați deschis cu echipa medicală</h3>
      <p>Semnalați orice simptom nou: modificări cutanate, oboseală accentuată, greață sau disconfort. Îngrijirea se adaptează continuu în funcție de evoluție.</p>
    `,
  },
  {
    slug: "radioterapia-pe-intelesul-tuturor",
    category: "Educație medicală",
    title: "Radioterapia pe înțelesul tuturor – ce este și cum decurge",
    excerpt:
      "Un ghid amplu și accesibil: când se recomandă radioterapia, cum se desfășoară, ce efecte secundare pot apărea și cum le gestionăm.",
    readTime: "15 min",
    date: "28 iulie 2025",
    coverImage: "/blog-05.png",
    coverAlt: "Discuție despre planul terapeutic",
    author: "Dr. Tatiana Cirimpei",
    tags: ["Pacient", "Tratament", "Consultație"],
    contentHtml: `
      <h3>Introducere – De la incertitudine la încredere</h3>
      <p>În momentul în care primești diagnosticul de cancer, fiecare nou cuvânt medical poate suna amenințător. „Radioterapia” este unul dintre acele cuvinte. Mulți pacienți îmi povestesc că prima lor reacție a fost o teamă, alimentată de informații fragmentare găsite pe internet sau de povești de la cunoștințe.</p>
      <p>Totuși, în spatele acestor emoții există astăzi vești cu adevărat bune. Tratamentele oncologice moderne aduc rezultate remarcabile: de la chirurgia minim invazivă la terapiile țintite, imunoterapia și, bineînțeles, radioterapia de înaltă precizie. Mulți pacienți se recuperează complet sau își țin boala sub control pe termen lung, continuându‑și viața activă alături de familie și prieteni.</p>
      <p>În această transformare, radioterapia joacă un rol esențial. Fiind un tratament local, precis și sigur, ea contribuie decisiv la vindecare sau la menținerea bolii sub control, fie singură, fie în combinație cu alte terapii.</p>
      <p>Pentru că necunoscutul naște teamă, scopul acestui articol este să îți ofere explicații accesibile și exemple concrete, astfel încât să iei decizii informate și să îți recapeți sentimentul de control asupra propriului plan de tratament.</p>

      <h3>Ce este, de fapt, radioterapia?</h3>
      <p>Imaginează-ți o lupă care concentrează lumina soarelui pe o singură frunză uscată dintr-un copac. Lumina este peste tot, dar abia focalizarea ei o transformă într-o energie capabilă să schimbe ceva. Radioterapia funcționează după un principiu similar: folosim fascicule de radiații ionizante – de obicei raze X de energie înaltă – dirijate către țesuturile care conțin celule canceroase. Aceste fascicule distrug capacitatea celulelor maligne de a se multiplica, permițând organismului să le elimine treptat. Spre deosebire de chimioterapie, care circulă în tot corpul, radioterapia este un tratament local: lovește țintit, acolo unde avem nevoie, protejând maximum de țesut sănătos din jur.</p>
      <p>În ultimul deceniu, evoluțiile tehnologice au avut un impact major asupra tratamentelor de radioterapie. Radioterapia modernă permite o iradiere mult mai precisă și mai rapidă, reducând semnificativ timpul petrecut de pacient pe masa de tratament. Înaintea fiecărei ședințe se pot realiza imagini de control pentru a verifica poziționarea, iar în unele cazuri planul poate fi ajustat zilnic, astfel încât doza să fie livrată cu acuratețe maximă, protejând mai bine organele sănătoase și țintind eficient zona afectată. Precizia ajunge la fracțiuni de milimetru, ceea ce se traduce în doze mai mari către tumoare și mai mici către organele sănătoase.</p>

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
      Raspuns: În peste 70 % din cazuri, pacienții merg la muncă pe tot parcursul tratamentului, cu recomandarea de a-și ajusta programul dacă oboseala devine supărătoare.</p>
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
];

export const featuredArticleSlug = "radioterapia-pe-intelesul-tuturor";
