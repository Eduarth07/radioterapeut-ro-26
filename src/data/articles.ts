export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  coverImage: string;
  bigImage?: string;
  articleImage?: string;
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
  coverImage: "/blog-01.webp",
  articleImage: "/blog-detail1.webp",
  coverAlt: "Imagine reprezentativă radioterapie",
  author: "Dr. Cirimpei Tatiana",
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
{
  slug: "mituri-radioterapie",
  category: "Informații utile",
  title: "Mituri frecvente despre radioterapie – Ce e adevărat și ce nu",
  excerpt:
    "Clarificăm cele mai comune mituri despre radioterapie, astfel încât pacienții să înceapă tratamentul cu încredere și informații corecte.",
  readTime: "7 min",
  date: "24 ianuarie 2026",
  coverImage: "/thumb_blog-02.png",
  articleImage: "/blog-02.webp",
  coverAlt: "Mituri si adevaruri despre radioterapie",
  author: "Dr. Cirimpei Tatiana",
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
{
  slug: "pregatire-radioterapie",
  category: "Informații utile",
  title: "Cum să te pregătești pentru o ședință de radioterapie?",
  excerpt:
    "Pregătirea corectă reduce efectele secundare și îmbunătățește eficiența tratamentului. Iată pașii practici, explicați clar.",
  readTime: "12 min",
  date: "5 februarie 2026",
  coverImage: "/thumb_blog-detail3.png",
  articleImage: "/blog-detail3.webp",
  coverAlt: "Pregătirea pacientului pentru radioterapie",
  author: "Dr. Cirimpei Tatiana",
  tags: ["Pacient", "Tratament", "Pregătire"],
  contentHtml: `
    <p>Pregătirea corectă pentru radioterapie poate reduce efectele secundare și îmbunătăți eficacitatea tratamentului, oferindu-vă mai mult confort și siguranță pe parcursul terapiei. Deși fiecare plan de tratament este personalizat, există câteva recomandări generale care pot face diferența.</p>

    <h3>1. Înțelegeți procesul</h3>

    <p>Pregătirea pentru radioterapie începe cu o informare corectă. Este firesc să apară temeri în fața necunoscutului, iar înțelegerea fiecărei etape vă poate aduce multă liniște. Radioterapia nu este o intervenție chirurgicală și nu implică durere – este o metodă non-invazivă, bazată pe direcționarea unor doze controlate de radiații către zona afectată de boală.</p>

    <h4>Procesul de simulare al tratamentului</h4>

    <figure class="article-media article-media-right article-media-sm">
      <img src="/ct.webp" alt="Simulator CT" class="article-media-img" />
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
      <img src="/truebeam.webp" alt="Accelerator TrueBeam STx" class="article-media-img" />
    </figure>

    <p>Acceleratorul TrueBeam STx permite livrarea tratamentului cu o precizie extrem de mare, în special pentru tumori aflate în zone dificile. În timpul ședinței, veți fi poziționat la fel ca la simulare, iar aparatul se va roti în jurul dumneavoastră, fără a atinge corpul.</p>

    <p>Este complet nedureros, iar radiația este direcționată exact către zona afectată. Ședința durează doar câteva minute, iar întregul proces este supravegheat video și audio de echipă.</p>

    <div class="article-media-clear"></div>

    <figure class="article-media article-media-left article-media-md">
      <img src="/halcyon.webp" alt="Accelerator Halcyon" class="article-media-img" />
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
  {
    slug: "radioterapia-pe-intelesul-tuturor",
    category: "Educație medicală",
    title: "Radioterapia pe înțelesul tuturor – ce este și cum decurge",
    excerpt:
      "Un ghid amplu și accesibil: când se recomandă radioterapia, cum se desfășoară, ce efecte secundare pot apărea și cum le gestionăm.",
    readTime: "15 min",
    date: "28 iulie 2025",
    coverImage: "/thumb_blog-04.png",
    articleImage: "/blog-04.png",
    bigImage: "/blog-04.png",
    coverAlt: "Discuție despre planul terapeutic",
    author: "Dr. Cirimpei Tatiana",
    tags: ["Pacient", "Tratament", "Consultație"],
    contentHtml: `
      <h3>Introducere – De la incertitudine la încredere</h3>
      <p>În momentul în care primești diagnosticul de cancer, fiecare nou cuvânt medical poate suna amenințător. „Radioterapia” este unul dintre acele cuvinte. Mulți pacienți îmi povestesc că prima lor reacție a fost o teamă, alimentată de informații fragmentare găsite pe internet sau de povești de la cunoștințe.</p>
      <p>Totuși, în spatele acestor emoții există astăzi vești cu adevărat bune. Tratamentele oncologice moderne aduc rezultate remarcabile: de la chirurgia minim invazivă la terapiile țintite, imunoterapia și, bineînțeles, radioterapia de înaltă precizie. Mulți pacienți se recuperează complet sau își țin boala sub control pe termen lung, continuându‑și viața activă alături de familie și prieteni.</p>
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
  {
  slug: "consultatii-radioterapie",
  category: "Servicii medicale",
  title: "Consultațiile medicale de radioterapie",
  excerpt:
    "De la prima evaluare la monitorizarea post-tratament, aflați ce presupune fiecare etapă a consultului medical și cum vă pregătiți pentru un plan terapeutic corect.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/thumb_blog-consultatii.png",
  articleImage: "/blog-consultatii.png",
  coverAlt: "Consultație de specialitate în radioterapie",
  author: "Dr. Cirimpei Tatiana",
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
{
  slug: "radioterapie-moderna",
  category: "Servicii medicale",
  title: "Radioterapia de înaltă precizie: Tehnologii și metode de tratament",
  excerpt:
    "O analiză detaliată a tehnicilor IMRT, VMAT și SBRT, explicând modul în care evoluția tehnologică permite administrarea tratamentului oncologic cu o acuratețe milimetrică.",
  readTime: "5 min",
  date: "29 martie 2026",
  coverImage: "/thumb_blog-radioterapie-moderna.png",
  articleImage: "/blog-radioterapie-moderna.png",
  coverAlt: "Radioterapie modernă și planificare precisă",
  author: "Dr. Cirimpei Tatiana",
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
{
  slug: "management-reactii-adverse-radioterapie",
  category: "Servicii medicale",
  title: "Managementul reacțiilor adverse în radioterapie",
  excerpt:
    "Reacțiile adverse apărute în timpul sau după radioterapie necesită evaluare atentă, recomandări practice și ajustări rapide pentru confort și siguranță.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/thumb_blog-reactii-adverse.png",
  articleImage: "/blog-reactii-adverse.png",
  coverAlt: "Monitorizarea reacțiilor adverse în radioterapie",
  author: "Dr. Cirimpei Tatiana",
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
{
  slug: "radioterapie-pinteni-calcaneeni",
  category: "Servicii medicale",
  title: "Radioterapia pentru pintenii calcaneeni: O soluție eficientă împotriva durerii cronice",
  excerpt:
    "Când metodele clasice dau greș, radioterapia antiinflamatorie în doze mici poate reduce semnificativ durerea cauzată de pintenii calcaneeni, redând mobilitatea piciorului.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/thumb_blog-pinteni-calcaneeni.png",
  articleImage: "/blog-pinteni-calcaneeni.png",
  coverAlt: "Evaluarea durerii de călcâi și radioterapie antiinflamatorie",
  author: "Dr. Cirimpei Tatiana",
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
{
  slug: "afectiuni-benigne-selectate",
  category: "Servicii medicale",
  title: "Radioterapia în afecțiuni non-oncologice: Indicații și beneficii",
  excerpt:
    "Dincolo de oncologie, radioterapia de doză mică este o soluție eficientă pentru controlul proliferării celulare în afecțiuni precum keloizii sau hemangioamele rezistente.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/blog-afectiuni-benigne.png",
  articleImage: "/blog-afectiuni-benigne.png",
  coverAlt: "Evaluarea indicațiilor de radioterapie în afecțiuni benigne selectate",
  author: "Dr. Cirimpei Tatiana",
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
{
  slug: `colaborare-interdisciplinara-radioterapie`,
  category: `Colaborare medicală`,
  title: `Managementul integrat al pacientului oncologic: Precizie, timp și suport interdisciplinar`,
  excerpt: `Un model de parteneriat medical bazat pe acces rapid la tratament, dialog și utilizarea tehnologiei de top pentru un control tumoral optim.`,
  readTime: `6 min`,
  date: `29 martie 2025`,
  coverImage: `/blog-colaborare-medicala.png`,
  articleImage: `/blog-colaborare-medicala.png`,
  coverAlt: `Colaborare multidisciplinară Tumor Board`,
  author: `Dr. Cirimpei Tatiana`,
  tags: [`Radioterapie`, `Comunicare`, `Tehnologie`],
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
    <p>Dacă aveți pacienți care necesită evaluare pentru radioterapie sau doriți să discutăm oportunitatea iradierii într-un caz specific, vă încurajez să stabilim o linie de comunicare directă. Prioritatea mea este ca, împreună, să asigurăm un parcurs medical fluid și corect pentru fiecare pacient.</p>`},
];

export const featuredArticleSlugByCategory: Record<string, string> = {
  "Educație medicală": "importanta-radioterapie",
  "Informații utile": "pregatire-radioterapie",
  "Servicii medicale": "consultatii-radioterapie",
};

export const defaultFeaturedArticleSlug = "radioterapia-pe-intelesul-tuturor";
