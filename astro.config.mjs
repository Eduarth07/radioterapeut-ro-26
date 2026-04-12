// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://radioterapeut.ro',
  trailingSlash: 'never', 
  
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en', 'uk'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [
    sitemap({
      // Activează automat generarea de linkuri <xhtml:link rel="alternate" hreflang="..."> 
      // în sitemap.xml pentru cele 3 limbi definite
      i18n: {
        defaultLocale: 'ro',
        locales: {
          ro: 'ro-RO',
          en: 'en-US', // sau en-GB în funcție de target
          uk: 'uk-UA'
        }
      }
    })
  ]
});