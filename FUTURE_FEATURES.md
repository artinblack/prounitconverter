# Future Features — prounitconverter.com

_Last updated: 2026-07-25_

This is the running backlog after shipping the first **9 converter tools** under `/tools/`
(Text Case, Hex/RGB Color, Aspect Ratio, Roman Numeral, Number-to-Words, Unix Timestamp,
Time Zone, Base64, Text↔Binary).

Everything below is scoped for the current stack: **Astro 6 → Cloudflare static Worker,
hand-written CSS, zero-dependency client-side JS.** Items needing a backend are flagged.

---

## A. Remaining tools from the "UTILITY WEBSITE IDEATION" sheet

These were in the sheet but are **calculators/utilities, not converters**, so they were left
out of the converter-focused first batch. All are buildable client-side.

| Tool | Effort | Notes |
|------|--------|-------|
| Age Calculator | S | Date math; "age from date of birth". Very high search. |
| BMI Calculator | S | Metric + imperial; formula-based. High search, strong AdSense fit. |
| Meal Calorie Calculator | M | Mifflin-St Jeor BMR + activity multiplier. |
| Readability Score Calculator | M | Flesch-Kincaid / Gunning Fog on pasted text. |
| Online Countdown Timer | M | `setInterval`; shareable via URL query params. |
| Online Dice Roller | S | RNG; fun/shareable, good for backlinks. |
| Emoji Combiner | M | Uses Google Emoji Kitchen image endpoints (verify availability/ToS). |
| YouTube Timestamp Generator | S | Parse a video URL + time → `&t=` deep link. |
| Image Cropper (Circular) | L | Client `<canvas>` + file upload + PNG download. |
| Color Scheme Extractor | L | `<canvas>` pixel sampling / median-cut quantization from an uploaded image. |

## B. Net-new converter ideas that fit the brand (not in the sheet)

| Tool | Effort | Why |
|------|--------|-----|
| CSS Unit Converter (px ↔ rem ↔ em ↔ %) | S | Developer search; pairs with existing converters. |
| Bandwidth / Data-transfer time calculator | M | "How long to download X GB at Y Mbps". |
| Percentage Calculator | S | Enormous evergreen search volume. |
| GPA / Grade Converter | M | Seasonal student traffic. |
| Fraction ↔ Decimal Converter | S | High search; complements numbase. |
| Scientific Notation Converter | S | Education/engineering niche. |
| Morse Code Translator | S | Fun, shareable, good backlinks. |
| Case-preserving Slug Generator | S | Extends Text Case Converter. |

## C. Phase-2: URL Shortener + URL Unshortener (needs a backend)

These two were **deferred** because a static site cannot store short-links or follow
redirects server-side (browser CORS blocks unshortening arbitrary URLs). Recommended build:

**URL Shortener**
- Storage: **Cloudflare KV** (`SLUG -> {url, createdAt, hits}`) or **D1** if you want analytics/SQL.
- Route: convert the current assets-only Worker into a Worker with a fetch handler, OR add a
  small separate Worker bound to `/s/*` and the create API. Keep the Astro static assets as-is.
- Endpoints: `POST /api/shorten` (validate URL, reject non-http(s), optional custom slug with
  collision check) and `GET /s/:slug` (302 redirect + increment hit counter).
- **Abuse controls (important):** rate-limit by IP (Cloudflare Turnstile on the create form),
  block known malware/phishing domains, disallow open-redirect loops, cap slug creation per IP/day,
  add a `robots` noindex on `/s/*`, and a report/abuse link. Consider requiring Turnstile before mint.
- Cost: KV free tier is generous; D1 fine at this scale.

**URL Unshortener**
- Server-side `fetch(url, { redirect: 'manual' })` loop (max ~10 hops) in a Worker, returning the
  full redirect chain + final destination. Never render remote HTML; only report headers/locations.
- Safety: timeout per hop, block private IP ranges/SSRF, cap response, don't follow non-http schemes.

**Effort:** M–L combined (mostly the Worker + abuse hardening, not the UI).

## D. Cross-cutting polish (small, high-leverage)

- **Per-tool OG images** — currently all tools share the global `og-image.png`. Generate a simple
  branded 1200×630 per tool (or a build-time template) for better social CTR.
- **"Recently used tools"** — localStorage, mirror the converter Favorites pattern already on the homepage.
- **Copy-link / deep-link state** — encode tool input in the URL (`?hex=ff0000`) so results are shareable.
- **Homepage counts** — a few strings still say "14 categories" in the long-form SEO prose; the site
  has 18. Sweep and update (the visible subtitle is already fixed).
- **Programmatic converter pages** — expand `commonPairs` in `src/lib/units.ts` to mint more
  `/convert/x-to-y` long-tail pages (see GROWTH_PRIORITY.md).
