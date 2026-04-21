import type { APIRoute } from "astro";
import { SITE_URL } from "../i18n/config";

export const GET: APIRoute = () => {
  const sitemapUrl = new URL("/sitemap-index.xml", SITE_URL).toString();

  // Construim un răspuns manual pentru a evita eroarea de "immutable headers"
  return new Response(null, {
    status: 301,
    headers: {
      "Location": sitemapUrl,
      "Content-Type": "text/xml",
    },
  });
};