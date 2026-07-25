# Google Search Console — Request Indexing checklist

_Last updated: 2026-07-25_

High-value URLs to submit via **URL Inspection → Request Indexing** in Google Search Console.
These match the `<link rel="canonical">` on each page (no trailing slash — paste exactly).

Google caps manual requests at **~10–12/day**, so spread them: Batch 1 day 1, Batch 2 day 2,
Batch 3 day 3. Everything else rides the sitemap (see "Strategy as the site scales" below).

## Hub (submit first)
- [ ] https://prounitconverter.com/tools

## Batch 1 — original 9 tools
- [ ] https://prounitconverter.com/tools/text-case-converter
- [ ] https://prounitconverter.com/tools/color-converter
- [ ] https://prounitconverter.com/tools/aspect-ratio-converter
- [ ] https://prounitconverter.com/tools/roman-numeral-converter
- [ ] https://prounitconverter.com/tools/number-to-words-converter
- [ ] https://prounitconverter.com/tools/unix-timestamp-converter
- [ ] https://prounitconverter.com/tools/time-zone-converter
- [ ] https://prounitconverter.com/tools/base64-converter
- [ ] https://prounitconverter.com/tools/text-to-binary-converter

## Batch 2 — new 8 tools
- [ ] https://prounitconverter.com/tools/css-unit-converter
- [ ] https://prounitconverter.com/tools/data-transfer-time-calculator
- [ ] https://prounitconverter.com/tools/percentage-calculator
- [ ] https://prounitconverter.com/tools/gpa-calculator
- [ ] https://prounitconverter.com/tools/fraction-to-decimal-converter
- [ ] https://prounitconverter.com/tools/scientific-notation-converter
- [ ] https://prounitconverter.com/tools/morse-code-translator
- [ ] https://prounitconverter.com/tools/slug-generator

## Batch 3 — new Density + Fuel categories (after deploy)
Hubs (submit first), then a few top pair pages — the rest ride the sitemap.
- [ ] https://prounitconverter.com/convert/density
- [ ] https://prounitconverter.com/convert/fuel
- [ ] https://prounitconverter.com/convert/kgm3-to-gcm3
- [ ] https://prounitconverter.com/convert/kgm3-to-lbft3
- [ ] https://prounitconverter.com/convert/mpg-to-l100km
- [ ] https://prounitconverter.com/convert/l100km-to-mpg
- [ ] https://prounitconverter.com/convert/mpg-to-kml

## Batch 4 — new tools (Age / BMI / Word Counter)
- [ ] https://prounitconverter.com/tools/age-calculator
- [ ] https://prounitconverter.com/tools/bmi-calculator
- [ ] https://prounitconverter.com/tools/word-counter

## Batch 5 — printable charts (hub + top pages; rest via sitemap)
- [ ] https://prounitconverter.com/charts
- [ ] https://prounitconverter.com/charts/cm-to-in
- [ ] https://prounitconverter.com/charts/kg-to-lb
- [ ] https://prounitconverter.com/charts/c-to-f
- [ ] https://prounitconverter.com/charts/mm-to-in
- [ ] https://prounitconverter.com/charts/l-to-gal

_(29 chart pages total — submit the hub + these marquee ones manually; the rest ride the sitemap.)_

---

## Strategy as the site scales (read this)
Manual Request-Indexing is only worth it for **hubs and a handful of top pages** — it's capped at
~10–12/day and doesn't scale. Everything else (all pair pages, and the upcoming **charts** and
**curated specific-value pages**) should be indexed via **sitemap + IndexNow**, not by hand.

- **Manual (this checklist):** the tool hubs + Density/Fuel hubs + a few marquee pair pages.
- **Automatic (bulk):** the sitemap already lists **~415 URLs** and regenerates on every build;
  IndexNow auto-pings on change. Do **not** try to hand-submit programmatic pages — let the
  sitemap do it, and watch the GSC **Pages** report for coverage.

## How to submit (manual, per URL)
1. In GSC, paste a URL into the **top search bar** (URL Inspection).
2. Wait for "URL is not on Google" → click **Request Indexing**.
3. Repeat (respect the ~10–12/day cap).

## Faster bulk alternatives (recommended, cover all 18 at once)
- **Submit the sitemap:** GSC → Sitemaps → add `https://prounitconverter.com/sitemap-index.xml`.
  All 18 URLs are already included.
- **Cloudflare IndexNow:** dashboard → your domain → **Caching → Crawler Hints** → toggle on.
  Auto-pings Bing/Yandex for every changed URL — zero manual work.
- **Bing Webmaster Tools:** import from GSC in two clicks, then submit the same sitemap.

## Note on trailing slashes
Pages resolve at both `/tools/<slug>` and `/tools/<slug>/` (Cloudflare adds the slash), but the
canonical tag points to the **no-slash** version listed above. Paste these exactly so Google
consolidates to the canonical.

## Verify indexing progress
- GSC → **Pages** report (filter by `/tools/`) after ~1–2 weeks.
- Or search `site:prounitconverter.com/tools` in Google to see what's indexed.
