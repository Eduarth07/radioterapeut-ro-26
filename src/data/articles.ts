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
    category: "Radioterapie",
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
      <p>Tratamentul în sine este nedureros. Pacientul stă întins pe o masă, iar aparatul se mișcă în jurul lui fără a-l atinge. Nu se simte radiația, nu se vede, nu se miroase. Tot procesul este ghidat și monitorizat permanent de o echipă medicală dedicată.</p>

      <blockquote>
        Radioterapia nu este doar o tehnică medicală – este o șansă reală de vindecare sau de îmbunătățire a vieții.
      </blockquote>

      <h3>Ce tipuri de cancer se pot trata cu radioterapie?</h3>
      <p>Radioterapia este eficientă în tratarea multor forme de cancer, inclusiv cancerul de sân, pulmonar, de prostată, ginecologic sau colorectal. Fiecare caz este unic, iar planul terapeutic trebuie personalizat după consultația de specialitate.</p>
      <p>Un astfel de plan ia în considerare localizarea tumorii, stadiul bolii, vârsta pacientului și starea generală de sănătate. Tocmai de aceea, evaluarea inițială este extrem de importantă și nu trebuie amânată.</p>
      <p>Radioterapia nu este doar o opțiune, ci una dintre cele mai importante arme moderne în tratamentul cancerului. Aplicată la timp și corect, poate schimba radical evoluția bolii și oferi șanse reale de vindecare.</p>
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
    readTime: "14 min",
    date: "18 februarie 2026",
    coverImage: "/tl.webp",
    coverAlt: "Discuție despre planul terapeutic",
    author: "Dr. Tatiana Cirimpei",
    tags: ["Pacient", "Tratament", "Consultație"],
    contentHtml: `
      <h3>Introducere – De la incertitudine la încredere</h3>
      <p>În momentul diagnosticului, cuvântul „radioterapie” poate produce teamă. Totuși, tratamentele oncologice moderne oferă rezultate remarcabile, iar radioterapia de înaltă precizie are un rol esențial în controlul și vindecarea bolii.</p>

      <h3>Ce este, de fapt, radioterapia?</h3>
      <p>Radioterapia folosește fascicule de radiații ionizante direcționate către țesuturile cu celule canceroase. Este un tratament local, precis, care urmărește țintirea tumorii și protejarea organelor sănătoase.</p>
      <p>Tehnologiile moderne permit verificări imagistice înaintea fiecărei ședințe și, în anumite cazuri, adaptarea planului în timp real pentru acuratețe maximă.</p>

      <h3>Când și de ce se recomandă radioterapia</h3>
      <ul>
        <li><strong>Adjuvant:</strong> după operație, pentru celule reziduale microscopice.</li>
        <li><strong>Neoadjuvant:</strong> înainte de operație, pentru reducerea tumorii.</li>
        <li><strong>Tratament principal:</strong> curativ în anumite indicații.</li>
        <li><strong>Paliativ:</strong> pentru controlul durerii și simptomelor.</li>
      </ul>

      <h3>Cum decurge tratamentul, pas cu pas</h3>
      <p>Tratamentul începe cu consultația inițială, urmată de simulare CT și planificare dosimetrică. Fiecare ședință include verificare pozițională, corecții fine și administrarea propriu-zisă a dozei.</p>
      <p>Procedura este nedureroasă, iar după ședință pacientul își poate relua activitățile obișnuite.</p>

      <h3>Efecte secundare și modalități de gestionare</h3>
      <p>Cele mai frecvente reacții sunt oboseala și modificări cutanate ușoare, în general tranzitorii. Planul de îngrijire include recomandări clare de stil de viață, alimentație și monitorizare.</p>
      <p><strong>Important:</strong> în radioterapia externă pacientul nu devine radioactiv.</p>

      <h3>Întrebări frecvente</h3>
      <p><strong>Pot îmbrățișa apropiații după ședință?</strong> Da, este sigur.</p>
      <p><strong>Îmi cade părul?</strong> Doar dacă zona iradiată include scalpul.</p>
      <p><strong>Pot continua serviciul?</strong> În multe cazuri, da, cu ajustări în funcție de toleranță.</p>

      <h3>Cuvânt de încheiere</h3>
      <p>Radioterapia combină precizia tehnologică cu îngrijirea personalizată. Informația corectă și colaborarea cu echipa medicală transformă teama în încredere și acțiune.</p>

      <blockquote>
        Nu lăsa întrebările fără răspuns: o consultație clară poate fi primul pas real spre vindecare.
      </blockquote>
    `,
  },
];

export const featuredArticleSlug = "importanta-radioterapie";
