import type { APIRoute } from "astro";
import { SITE_URL } from "../i18n/config";

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${new URL("/sitemap-index.xml", SITE_URL).toString()}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};