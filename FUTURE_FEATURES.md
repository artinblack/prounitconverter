# Future Features — prounitconverter.com

_Last updated: 2026-07-25_

Running backlog. **17 converter tools now shipped** under `/tools/`:

- **Batch 1 (9):** Text Case, Hex/RGB Color, Aspect Ratio, Roman Numeral, Number-to-Words,
  Unix Timestamp, Time Zone, Base64, Text↔Binary.
- **Batch 2 (8, from former section B):** CSS Unit Converter, Download-Time Calculator,
  Percentage Calculator, GPA Calculator, Fraction ⇄ Decimal, Scientific Notation, Morse Code
  Translator, URL Slug Generator.

Everything below is scoped for the current stack: **Astro 6 → Cloudflare static Worker,
hand-written CSS, zero-dependency client-side JS.** Items needing a backend are flagged.

_(Former section A — the calculators/utilities still sitting in the "UTILITY WEBSITE IDEATION"
sheet: Age, BMI, Meal Calorie, Readability, Countdown Timer, Dice Roller, Emoji Combiner,
YouTube Timestamp, Image Cropper, Color Scheme Extractor — was removed from this backlog on
request. Revisit the sheet directly if/when you want them.)_

---

## A. Phase-2: URL Shortener + URL Unshortener (needs a backend)

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

## B. Cross-cutting polish (small, high-leverage)

- **Per-tool OG images** — currently all tools share the global `og-image.png`. Generate a simple
  branded 1200×630 per tool (or a build-time template) for better social CTR.
- **"Recently used tools"** — localStorage, mirror the converter Favorites pattern already on the homepage.
- **Copy-link / deep-link state** — encode tool input in the URL (`?hex=ff0000`) so results are shareable.
- **Homepage counts** — a few strings still say "14 categories" in the long-form SEO prose; the site
  has 18. Sweep and update (the visible subtitle is already fixed).
- **Programmatic converter pages** — expand `commonPairs` in `src/lib/units.ts` to mint more
  `/convert/x-to-y` long-tail pages (see GROWTH_PRIORITY.md).
