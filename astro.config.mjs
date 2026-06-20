// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://prounitconverter.com';

// Build date used as lastmod for all static pages — update when content changes
const LAST_MOD = new Date().toISOString().split('T')[0];

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Keep error pages and embed widgets out of the sitemap (they are noindex)
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/500') &&
        !page.includes('/embed/') &&
        !page.includes('/api/convert/') &&
        !page.includes('/api/units'),

      // Assign priority, changefreq, and lastmod per URL type
      serialize(item) {
        const path = item.url.replace(SITE, '') || '/';

        // ── Homepage ─────────────────────────────────────────
        if (path === '/') {
          return { ...item, priority: 1.0, changefreq: 'daily', lastmod: LAST_MOD };
        }

        // ── Unit-pair pages  /convert/meters-to-feet  ────────
        // Must be checked before the broader /convert/ rule
        if (/^\/convert\/[^/]+-to-[^/]+/.test(path)) {
          return { ...item, priority: 0.7, changefreq: 'monthly', lastmod: LAST_MOD };
        }

        // ── Category hub pages  /convert/length  ─────────────
        if (/^\/convert\//.test(path)) {
          return { ...item, priority: 0.9, changefreq: 'weekly', lastmod: LAST_MOD };
        }

        // ── Developer API page ────────────────────────────────
        if (path === '/api') {
          return { ...item, priority: 0.6, changefreq: 'monthly', lastmod: LAST_MOD };
        }

        // ── About & Contact ───────────────────────────────────
        if (path === '/about' || path === '/contact') {
          return { ...item, priority: 0.5, changefreq: 'yearly', lastmod: LAST_MOD };
        }

        // ── Legal pages ───────────────────────────────────────
        if (path === '/privacy' || path === '/terms') {
          return { ...item, priority: 0.4, changefreq: 'yearly', lastmod: LAST_MOD };
        }

        // ── Glossary index ────────────────────────────────────
        if (path === '/glossary') {
          return { ...item, priority: 0.7, changefreq: 'weekly', lastmod: LAST_MOD };
        }

        // ── Glossary unit pages ───────────────────────────────
        if (/^\/glossary\//.test(path)) {
          return { ...item, priority: 0.5, changefreq: 'monthly', lastmod: LAST_MOD };
        }

        // ── Compare page ─────────────────────────────────────
        if (path === '/compare') {
          return { ...item, priority: 0.6, changefreq: 'monthly', lastmod: LAST_MOD };
        }

        // ── Catch-all fallback ────────────────────────────────
        return { ...item, priority: 0.5, changefreq: 'monthly', lastmod: LAST_MOD };
      },
    }),
  ],
  compressHTML: true,
});
