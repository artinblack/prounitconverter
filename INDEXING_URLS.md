# Google Search Console — Request Indexing checklist

_Last updated: 2026-07-25_

18 new URLs to submit via **URL Inspection → Request Indexing** in Google Search Console.
These match the `<link rel="canonical">` on each page (no trailing slash — paste exactly).

Google caps manual requests at **~10–12/day**, so do the hub + Batch 1 on day 1, Batch 2 on day 2.

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

---

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
