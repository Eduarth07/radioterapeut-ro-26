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
  coverImage: "/blog-02.webp",
  coverAlt: "Discuție medic-pacient",
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
  coverImage: "/blog-detail3.webp",
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
    coverImage: "/blog-05.png",
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
  title: "Consultații de specialitate în radioterapie",
  excerpt:
    "Consultații medicale de specialitate și urmărire, cu explicații clare, evaluare atentă și plan adaptat fiecărui pacient.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/blog-consultatii.png",
  coverAlt: "Consultație de specialitate în radioterapie",
  author: "Dr. Cirimpei Tatiana",
  tags: ["Consultație", "Radioterapie", "Second opinion"],
  contentHtml: `
    <p>Fiecare pacient are nevoie de o evaluare atentă, de explicații clare și de un plan medical adaptat situației sale. În radioterapie, consultația de specialitate nu înseamnă doar analizarea unui diagnostic, ci și înțelegerea contextului complet al bolii, a tratamentelor efectuate anterior și a pașilor care urmează.</p>

    <p>Scopul consultațiilor este de a oferi orientare medicală corectă, răspunsuri clare și recomandări personalizate, astfel încât fiecare pacient să poată lua decizii informate și să beneficieze de cea mai potrivită conduită terapeutică.</p>

    <h3>Consultații medicale inițiale</h3>
    <p>Consultația inițială este primul pas în evaluarea oncologică din perspectiva radioterapiei. În cadrul acesteia sunt analizate documentele medicale, investigațiile imagistice, rezultatele histopatologice și tratamentele efectuate anterior. Pe baza acestor informații se stabilește dacă radioterapia este indicată, în ce scop poate fi recomandată și care sunt următorii pași.</p>

    <p>Este o etapă esențială pentru clarificarea opțiunilor de tratament și pentru construirea unui plan adaptat fiecărui pacient.</p>

    <h3>Monitorizare pe durata tratamentului</h3>
    <p>Pe parcursul radioterapiei, monitorizarea regulată este importantă pentru evaluarea toleranței la tratament, identificarea eventualelor reacții adverse și adaptarea recomandărilor medicale în funcție de evoluția clinică.</p>

    <p>Aceste consultații ajută la menținerea unui tratament sigur, bine tolerat și cât mai eficient, oferind pacientului sprijin constant pe toată durata terapiei.</p>

    <h3>Consultații de urmărire post-radioterapie</h3>
    <p>După finalizarea tratamentului, consultațiile de urmărire permit evaluarea evoluției pacientului, a răspunsului terapeutic și a eventualelor efecte secundare tardive. În același timp, acestea oferă cadrul potrivit pentru recomandări suplimentare, îndrumare și monitorizare medicală atentă.</p>

    <p>Urmărirea post-terapeutică reprezintă o parte importantă a îngrijirii oncologice și contribuie la continuitatea tratamentului și la siguranța pacientului.</p>

    <h3>Telemedicină</h3>
    <p>În anumite situații, consultațiile pot fi realizate și prin telemedicină, atunci când acest format este potrivit din punct de vedere medical. Acest tip de evaluare poate fi util mai ales pentru pacienții care locuiesc la distanță, pentru discuții de orientare medicală sau pentru interpretarea documentelor și recomandărilor deja existente.</p>

    <p>Telemedicina nu înlocuiește întotdeauna consultația față în față, dar poate reprezenta o soluție utilă și eficientă în anumite contexte.</p>

    <h3>Second opinion (a doua opinie medicală)</h3>
    <p>A doua opinie medicală este utilă atunci când pacientul dorește o evaluare suplimentară a diagnosticului, a indicației de tratament sau a planului terapeutic propus. Aceasta poate aduce mai multă claritate, confirmare și încredere înainte de începerea sau continuarea tratamentului.</p>

    <p>Solicitarea unei a doua opinii este un demers firesc și responsabil, mai ales în cazurile oncologice care presupun decizii importante și personalizate.</p>

    <blockquote>
      <p>Consultația de specialitate în radioterapie înseamnă mai mult decât o simplă evaluare medicală: înseamnă timp acordat fiecărui caz, explicații clare și o abordare atentă, adaptată nevoilor reale ale pacientului.</p>
    </blockquote>

    <h3>Când este util să solicitați o consultație?</h3>
    <ul>
      <li>după stabilirea unui diagnostic oncologic;</li>
      <li>atunci când doriți să aflați dacă radioterapia este indicată;</li>
      <li>înainte de începerea tratamentului, pentru clarificarea etapelor;</li>
      <li>în timpul radioterapiei, dacă apar întrebări sau reacții adverse;</li>
      <li>după finalizarea tratamentului, pentru monitorizare;</li>
      <li>atunci când doriți o a doua opinie medicală.</li>
    </ul>

    <p>Dacă aveți nevoie de evaluare, îndrumare sau clarificarea opțiunilor de tratament, o consultație de specialitate poate fi primul pas spre un plan medical corect, clar și adaptat situației dumneavoastră.</p>
  `,
},
{
  slug: "radioterapie-moderna",
  category: "Servicii medicale",
  title: "Radioterapia modernă – precizie, siguranță și eficiență în tratamentul oncologic",
  excerpt:
    "Radioterapia modernă permite tratamente precise, conforme ghidurilor actuale, cu protejarea țesuturilor sănătoase și planuri adaptate fiecărui caz.",
  readTime: "5 min",
  date: "29 martie 2026",
  coverImage: "/blog-radioterapie-moderna.png",
  coverAlt: "Radioterapie modernă și planificare precisă",
  author: "Dr. Cirimpei Tatiana",
  tags: ["Radioterapie", "IMRT", "VMAT", "SBRT"],
  contentHtml: `
    <p>Radioterapia modernă reprezintă una dintre cele mai avansate și eficiente metode de tratament oncologic. Prin tehnologii actuale de planificare și administrare a dozei, tratamentul poate fi direcționat cu mare precizie către zona afectată, cu protejarea cât mai bună a organelor și țesuturilor sănătoase din jur.</p>

    <p>Fiecare plan terapeutic este individualizat în funcție de tipul tumorii, localizare, obiectivul tratamentului și particularitățile fiecărui pacient. Indicația, tehnica utilizată și doza administrată sunt stabilite conform ghidurilor și protocoalelor internaționale actuale, pentru a oferi un tratament sigur, corect și eficient.</p>

    <h3>Ce înseamnă radioterapie modernă?</h3>
    <p>Radioterapia actuală nu înseamnă doar administrarea de radiații, ci un proces complex care începe cu evaluarea atentă a cazului, continuă cu simularea și planificarea dosimetrică și se finalizează prin tratament precis, verificat și adaptat permanent dacă este necesar.</p>

    <p>Scopul este de a livra doza optimă în volumul țintă, reducând cât mai mult expunerea structurilor sănătoase din apropiere. Acest lucru permite nu doar eficiență oncologică, ci și o toleranță mai bună a tratamentului.</p>

    <h3>Radioterapie cu fascicul de electroni</h3>
    <p>Radioterapia cu electroni este utilizată în special pentru leziuni situate superficial, la nivelul pielii sau foarte aproape de suprafața corpului. Avantajul acestei tehnici este că doza este concentrată la adâncime mică, ceea ce permite tratarea eficientă a zonei țintă, cu limitarea iradierii țesuturilor mai profunde.</p>

    <p>Această metodă poate fi indicată în anumite situații selecționate, în funcție de localizarea și caracteristicile leziunii.</p>

    <h3>Radioterapie cu intensitate modulată (IMRT)</h3>
    <p>IMRT este o tehnică avansată de radioterapie care permite modelarea intensității fasciculelor de radiații, astfel încât doza să fie distribuită cât mai conform volumului tumoral. Această precizie este utilă mai ales în situațiile în care tumora se află în apropierea unor organe sensibile.</p>

    <p>Prin IMRT se poate obține un echilibru mai bun între eficiența tratamentului și protejarea țesuturilor sănătoase, motiv pentru care această tehnică este frecvent utilizată în tratamentele moderne.</p>

    <h3>Radioterapie cu arc de volum (VMAT)</h3>
    <p>VMAT este o tehnică modernă prin care tratamentul este administrat continuu, în timp ce aparatul se rotește în jurul pacientului. Această metodă permite livrarea precisă și eficientă a dozei, într-un timp mai scurt comparativ cu alte tehnici.</p>

    <p>Unul dintre avantajele VMAT este reducerea duratei efective a ședinței de tratament, ceea ce poate crește confortul pacientului și poate contribui la reproducerea mai bună a poziției în timpul iradierii.</p>

    <h3>Radioterapie stereotactică (SRS / SBRT)</h3>
    <p>Radioterapia stereotactică este o tehnică de înaltă precizie, utilizată pentru administrarea unor doze mari de radiații într-un număr redus de ședințe, în cazuri atent selecționate. Aceasta poate fi folosită pentru anumite tumori sau metastaze, atunci când indicația medicală este potrivită.</p>

    <p>SRS este utilizată în general pentru tratamente intracraniene, iar SBRT pentru anumite localizări extracraniene. Aceste tehnici necesită o planificare riguroasă, sisteme avansate de imobilizare și verificări foarte precise înainte și în timpul tratamentului.</p>

    <blockquote>
      <p>Radioterapia modernă înseamnă tratament personalizat, tehnologie avansată și decizii medicale bazate pe dovezi, cu scopul de a obține control oncologic optim și o toleranță cât mai bună pentru pacient.</p>
    </blockquote>

    <h3>Cum se stabilește tehnica potrivită?</h3>
    <p>Alegerea tehnicii de radioterapie nu este standard pentru toți pacienții. Ea depinde de localizarea tumorii, dimensiunea acesteia, organele din vecinătate, istoricul medical, tratamentele anterioare și obiectivul terapeutic. De aceea, recomandarea se face întotdeauna individualizat, după evaluarea completă a cazului.</p>

    <p>În cadrul consultației și al procesului de planificare se stabilește cea mai potrivită soluție, astfel încât tratamentul să fie adaptat cât mai bine nevoilor reale ale pacientului.</p>

    <h3>De ce este importantă evaluarea de specialitate?</h3>
    <p>Radioterapia este un tratament complex, care necesită indicație corectă, planificare atentă și monitorizare permanentă. O evaluare de specialitate permite înțelegerea exactă a opțiunilor disponibile și alegerea unei conduite terapeutice conforme standardelor actuale.</p>

    <p>Dacă există indicație pentru radioterapie, planul de tratament este construit astfel încât să răspundă cât mai bine particularităților bolii și condiției clinice a pacientului.</p>
  `,
},
{
  slug: "management-reactii-adverse-radioterapie",
  category: "Servicii medicale",
  title: "Managementul reacțiilor adverse în radioterapie",
  excerpt:
    "Reacțiile adverse apărute în timpul sau după radioterapie necesită evaluare atentă, recomandări practice și ajustări rapide pentru confort și siguranță.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/blog-reactii-adverse.png",
  coverAlt: "Monitorizarea reacțiilor adverse în radioterapie",
  author: "Dr. Cirimpei Tatiana",
  tags: ["Radioterapie", "Reacții adverse", "Monitorizare"],
  contentHtml: `
    <p>Radioterapia este, în general, un tratament bine tolerat, însă, ca orice terapie oncologică, poate fi însoțită de reacții adverse. Acestea diferă de la un pacient la altul și depind de mai mulți factori, precum zona tratată, doza administrată, durata tratamentului, eventualele terapii asociate și particularitățile organismului.</p>

    <p>Managementul reacțiilor adverse are un rol esențial în desfășurarea corectă a tratamentului. Evaluarea atentă, intervenția la timp și recomandările adaptate fiecărei situații contribuie la menținerea confortului pacientului, la siguranța tratamentului și la continuitatea acestuia în cele mai bune condiții.</p>

    <h3>De ce este importantă monitorizarea reacțiilor adverse?</h3>
    <p>Reacțiile adverse nu trebuie privite cu teamă, ci cu atenție și responsabilitate. Multe dintre ele sunt temporare, previzibile și pot fi controlate eficient atunci când sunt recunoscute precoce. Comunicarea constantă cu medicul radioterapeut permite ajustarea recomandărilor și intervenția rapidă atunci când apar simptome noi sau modificări importante.</p>

    <p>Scopul nu este doar tratarea reacțiilor deja apărute, ci și prevenirea agravării lor și menținerea unei calități cât mai bune a vieții pe parcursul și după tratament.</p>

    <h3>Tratamentul toxicităților acute</h3>
    <p>Toxicitățile acute sunt reacțiile adverse care apar în timpul radioterapiei sau la scurt timp după finalizarea acesteia. Acestea pot include, în funcție de zona tratată, roșeață și sensibilitate cutanată, oboseală, dificultăți la înghițire, greață, tulburări digestive, disconfort urinar sau alte simptome locale.</p>

    <p>În astfel de situații, managementul corect presupune evaluare clinică, recomandări practice și, atunci când este necesar, tratament simptomatic. Pot fi indicate măsuri de îngrijire locală, ajustări alimentare, recomandări privind hidratarea, medicație de susținere sau alte intervenții adaptate simptomelor prezente.</p>

    <p>Identificarea timpurie a toxicităților acute permite controlul mai bun al simptomelor și reduce riscul ca acestea să devină mai intense sau să afecteze desfășurarea tratamentului.</p>

    <h3>Îngrijirea toxicităților tardive</h3>
    <p>Toxicitățile tardive sunt reacțiile care pot apărea la distanță de tratament, uneori după luni sau mai mult. Nu apar la toți pacienții, însă atunci când există simptome persistente sau noi după încheierea radioterapiei, acestea trebuie evaluate corect și integrate în contextul medical al fiecărui caz.</p>

    <p>Îngrijirea toxicităților tardive presupune monitorizare, recomandări personalizate și, la nevoie, măsuri terapeutice orientate spre ameliorarea simptomelor și menținerea funcționalității. În funcție de situație, pot fi necesare evaluări suplimentare, colaborare multidisciplinară și urmărire periodică.</p>

    <blockquote>
      <p>Managementul reacțiilor adverse în radioterapie înseamnă intervenție la timp, comunicare clară și îngrijire adaptată, pentru ca tratamentul să fie cât mai bine tolerat și cât mai sigur pentru pacient.</p>
    </blockquote>

    <h3>Ce simptome ar trebui semnalate?</h3>
    <ul>
      <li>roșeață accentuată, usturime sau modificări importante ale pielii;</li>
      <li>durere sau disconfort care se accentuează;</li>
      <li>dificultăți la înghițire sau alimentație;</li>
      <li>greață, vărsături sau tulburări digestive persistente;</li>
      <li>modificări urinare sau intestinale noi;</li>
      <li>oboseală marcată sau simptome care afectează activitățile zilnice;</li>
      <li>orice simptom nou apărut în timpul tratamentului sau după finalizarea acestuia.</li>
    </ul>

    <h3>O abordare adaptată fiecărui pacient</h3>
    <p>Nu există un model unic de reacție la radioterapie și nici o abordare identică pentru toți pacienții. De aceea, recomandările trebuie adaptate în funcție de simptome, de zona tratată și de evoluția clinică. Evaluarea individuală permite alegerea celor mai potrivite măsuri pentru ameliorarea disconfortului și pentru susținerea tratamentului în condiții cât mai bune.</p>

    <p>Dacă apar reacții adverse în timpul radioterapiei sau după încheierea acesteia, evaluarea de specialitate este importantă pentru stabilirea conduitei corecte și pentru menținerea confortului și siguranței pacientului.</p>
  `,
},
{
  slug: "radioterapie-pinteni-calcaneeni",
  category: "Servicii medicale",
  title: "Pinteni calcaneeni – radioterapie pentru reducerea durerii",
  excerpt:
    "În anumite situații, radioterapia în doze mici poate fi utilizată ca metodă antiinflamatorie pentru reducerea durerii provocate de pintenii calcaneeni.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/blog-pinteni-calcaneeni.png",
  coverAlt: "Evaluarea durerii de călcâi și radioterapie antiinflamatorie",
  author: "Dr. Cirimpei Tatiana",
  tags: ["Servicii medicale", "Pinteni calcaneeni", "Radioterapie"],
  contentHtml: `
    <p>Pintenii calcaneeni pot provoca durere persistentă la nivelul călcâiului și pot afecta semnificativ mersul, activitatea zilnică și calitatea vieții. În majoritatea cazurilor, tratamentul începe cu măsuri conservatoare, precum repausul relativ, medicația antiinflamatoare, fizioterapia, exercițiile de întindere sau recomandările ortopedice.</p>

    <p>Totuși, în anumite cazuri selectate, atunci când durerea persistă și răspunsul la tratamentele obișnuite este insuficient, radioterapia antiinflamatorie în doze mici poate reprezenta o opțiune terapeutică. Scopul acesteia nu este unul oncologic, ci antiinflamator, având ca obiectiv reducerea durerii și ameliorarea simptomelor.</p>

    <h3>Ce este radioterapia antiinflamatorie?</h3>
    <p>Radioterapia utilizată în afecțiunile benigne se administrează în doze mici, diferite de cele folosite în tratamentele oncologice. În acest context, scopul este reducerea procesului inflamator local și scăderea durerii, nu tratarea unei tumori.</p>

    <p>Tratamentul este non-invaziv, bine tolerat și se desfășoară în ședințe scurte, fără durere în timpul administrării.</p>

    <h3>Evaluare și indicație</h3>
    <p>Indicația pentru radioterapie se stabilește numai după evaluarea clinică și analiza documentelor medicale relevante. Este important ca diagnosticul să fie corect, iar simptomele să fie corelate cu investigațiile și cu istoricul tratamentelor efectuate anterior.</p>

    <p>Radioterapia pentru pinteni calcaneeni este luată în considerare în special la pacienții cu durere persistentă, cu impact funcțional, la care alte măsuri terapeutice nu au avut efect suficient sau nu au putut fi tolerate. Recomandarea trebuie individualizată și făcută în cazuri selectate, după aprecierea atentă a raportului dintre beneficiul potențial și indicația reală.</p>

    <h3>Protocol scurt</h3>
    <p>Tratamentul se desfășoară, de regulă, în ședințe scurte și bine tolerate. Fiecare sesiune durează puțin, iar procedura este nedureroasă. Pacientul este poziționat corespunzător, iar zona de tratat este iradiată precis conform planului stabilit.</p>

    <p>Schema recomandată poate varia în funcție de caz și de protocolul ales, însă, în general, este vorba despre un tratament de scurtă durată, comparativ cu alte tipuri de radioterapie. Efectul nu este întotdeauna imediat, iar ameliorarea durerii poate apărea progresiv în săptămânile care urmează.</p>

    <h3>Recomandări de recuperare</h3>
    <p>Radioterapia antiinflamatorie nu exclude celelalte măsuri de recuperare, ci se poate integra într-o abordare mai largă. În funcție de situație, pot rămâne importante exercițiile de întindere, reducerea suprasolicitării, încălțămintea adecvată, talonetele recomandate și alte măsuri de susținere funcțională.</p>

    <p>Respectarea recomandărilor de recuperare și a măsurilor de protecție locală poate contribui la obținerea unui rezultat mai bun și la reducerea riscului de persistență a durerii.</p>

    <blockquote>
      <p>În cazuri selectate, radioterapia în doze mici poate fi o opțiune terapeutică utilă pentru pintenii calcaneeni dureroși, cu obiectiv antiinflamator și de reducere a durerii.</p>
    </blockquote>

    <h3>Când poate fi utilă o evaluare de specialitate?</h3>
    <ul>
      <li>când durerea de călcâi persistă de mai mult timp și afectează mersul;</li>
      <li>când tratamentele conservatoare nu au adus ameliorare suficientă;</li>
      <li>când există recurență sau limitare funcțională importantă;</li>
      <li>când este necesară clarificarea indicației pentru radioterapie antiinflamatorie.</li>
    </ul>

    <p>O evaluare de specialitate permite stabilirea corectă a indicației și alegerea unei conduite adaptate fiecărui pacient, în funcție de simptome, evoluție și opțiunile terapeutice deja încercate.</p>
  `,
},
{
  slug: "afectiuni-benigne-selectate",
  category: "Servicii medicale",
  title: "Afecțiuni benigne selectate – evaluarea indicației pentru radioterapie",
  excerpt:
    "În anumite afecțiuni benigne selectate, radioterapia poate fi luată în considerare după evaluare individuală, în funcție de indicație și de beneficiul clinic așteptat.",
  readTime: "4 min",
  date: "29 martie 2026",
  coverImage: "/blog-afectiuni-benigne.webp",
  coverAlt: "Evaluarea indicațiilor de radioterapie în afecțiuni benigne selectate",
  author: "Dr. Cirimpei Tatiana",
  tags: ["Servicii medicale", "Afecțiuni benigne", "Radioterapie"],
  contentHtml: `
    <p>Deși radioterapia este cunoscută mai ales ca metodă de tratament în oncologie, există și anumite situații non-oncologice în care aceasta poate fi luată în considerare. Este vorba despre cazuri selectate, în care indicația nu este una de rutină, ci se stabilește individual, după evaluare atentă și în funcție de beneficiul clinic estimat.</p>

    <p>În acest context, recomandarea pentru radioterapie trebuie făcută cu prudență, ținând cont de diagnosticul corect, de evoluția afecțiunii, de tratamentele efectuate anterior și de scopul terapeutic urmărit. Decizia nu este una standard, ci adaptată fiecărui pacient.</p>

    <h3>Cum se stabilește indicația?</h3>
    <p>Indicația pentru radioterapie în afecțiuni benigne se stabilește numai după evaluare medicală și analizarea documentelor relevante. Sunt importante diagnosticul, istoricul local al afecțiunii, tratamentele deja efectuate, riscul de recidivă sau persistență a simptomelor și beneficiul clinic care poate fi obținut.</p>

    <p>Scopul este identificarea acelor situații în care radioterapia poate aduce un avantaj real, fără a extinde inutil indicația către cazuri în care alte opțiuni terapeutice rămân mai potrivite.</p>

    <h3>Hemangioame (cazuri selectate)</h3>
    <p>În anumite cazuri selectate, unele hemangioame pot necesita evaluare suplimentară din perspectiva indicației terapeutice. Recomandarea depinde de tipul leziunii, localizare, evoluție, simptomatologie și de tratamentele anterioare sau alternativele disponibile.</p>

    <p>Nu orice hemangiom reprezintă o indicație pentru radioterapie. Tocmai de aceea, aprecierea trebuie făcută individualizat, în contextul clinic concret al fiecărui pacient.</p>

    <h3>Keloizi / cicatrici hipertrofice (cazuri selectate)</h3>
    <p>Keloizii și cicatricile hipertrofice pot avea o evoluție persistentă sau recidivantă și, în anumite situații selectate, pot necesita o abordare terapeutică suplimentară. În unele cazuri, radioterapia poate fi luată în considerare ca parte a unei strategii de control local, în special atunci când există risc crescut de recidivă sau istoric de reapariție după alte tratamente.</p>

    <p>Indicația se stabilește în funcție de particularitățile leziunii, de contextul terapeutic și de raportul dintre beneficiul posibil și necesitatea reală a unei astfel de intervenții.</p>

    <h3>Alte indicații benigne – la recomandare</h3>
    <p>Există și alte situații benigne în care radioterapia poate fi discutată, însă numai la recomandare și după evaluare medicală atentă. Aceste cazuri nu intră într-o categorie generală aplicabilă tuturor, ci presupun analiză individuală și justificare clară a indicației.</p>

    <p>În astfel de situații, decizia terapeutică trebuie să aibă la bază contextul clinic complet, obiectivul tratamentului și beneficiul așteptat pentru pacient.</p>

    <blockquote>
      <p>Radioterapia pentru afecțiuni benigne nu reprezintă o indicație de rutină, ci o opțiune care poate fi luată în considerare doar în cazuri selectate, după evaluare atentă și recomandare medicală.</p>
    </blockquote>

    <h3>Când este utilă o evaluare de specialitate?</h3>
    <ul>
      <li>când există o afecțiune benignă cu evoluție persistentă sau recidivantă;</li>
      <li>când alte tratamente nu au avut rezultatul dorit sau nu sunt suficiente;</li>
      <li>când este necesară clarificarea indicației și a beneficiului clinic potențial;</li>
      <li>când se dorește o opinie medicală privind oportunitatea radioterapiei într-un caz selectat.</li>
    </ul>

    <p>Evaluarea de specialitate permite stabilirea corectă a indicației și alegerea unei conduite adaptate fiecărui caz, cu prudență, claritate și raportare la beneficiul clinic real așteptat.</p>
  `,
},
];

export const featuredArticleSlug = "radioterapia-pe-intelesul-tuturor";
