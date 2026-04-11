import type { APIRoute } from "astro";
import { articlesI18n } from "../data/articles.i18n";
import { SITE_URL } from "../i18n/config";

const staticPaths = [
  "/",
  "/articole/",
  "/politica-confidentialitate/",
  "/en/",
  "/en/articole/",
  "/en/privacy-policy/",
  "/uk/",
  "/uk/articole/",
  "/uk/polityka-konfidentsiynosti/",
];

const articlePaths = articlesI18n.flatMap((article) => [
  `/articole/${article.translations.ro.slug}/`,
  `/en/articole/${article.translations.en.slug}/`,
  `/uk/articole/${article.translations.uk.slug}/`,
]);

const urls = [...staticPaths, ...articlePaths].map(
  (path) => new URL(path, SITE_URL).toString()
);

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
