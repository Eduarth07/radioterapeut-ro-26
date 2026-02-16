# radioterapeut-ro-26

Scopul proiectului: refacerea treptată a website-ului actual într-o variantă modernă, optimizată, cu design inspirat din componentele `pocket.tailwindui.com`, adaptate pentru nevoile reale ale site-ului.

## Stack

- Astro 5
- Tailwind CSS v4
- Font: Inter Variable

## Structură curentă

All commands are run from the root of the project, from a terminal:
- `src/layouts/BaseLayout.astro` – document shell (head + meta + theme bootstrap)
- `src/pages/index.astro` – compunerea paginii principale
- `src/components/Header.astro` – navbar + mobile menu + dark/light toggle
- `src/components/Hero.astro` – secțiune hero
- `src/components/Servicii.astro` – secțiune servicii cu toggle oncologic/non-oncologic
- `src/components/Despre.astro` – secțiune „Despre mine”
- `src/styles/global.css` – tokens semantici + dark mode + utilitare custom

## Comenzi utile

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Status etapă

## 👀 Want to learn more?
Implementate în homepage:
- ✅ Navbar
- ✅ Hero
- ✅ Servicii
- ✅ Despre (în lucru, versiune inițială)

Următoarele etape:
1. Stabilizare fundație tehnică (layout, assets, documentație)
2. Polish vizual + consistență între secțiuni
3. Pagini dedicate (`/articole`, `/contact`, `/programare`)
4. SEO + optimizare performanță