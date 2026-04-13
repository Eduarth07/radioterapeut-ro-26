import type { APIRoute } from "astro";
import { SITE_URL } from "../i18n/config";

export const GET: APIRoute = () => {
  return Response.redirect(
    new URL("/sitemap-index.xml", SITE_URL).toString(),
    301
  );
};