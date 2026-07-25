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

## B. Cross-cutting polish — ✅ shipped 2026-07-25

- ✅ **Per-tool OG images** — build-time generator `scripts/gen-og.mjs` (`npm run gen:og`,
  Playwright → 1200×630 PNGs in `public/og/`); `Layout.astro` gained an `ogImage` prop and
  every tool + the hub now sets its own. Runtime stays fully static.
- ✅ **"Recently used tools"** — `ToolLayout` records each visit to `localStorage`
  (`uc_recent_tools`); the hub renders a "Recently used" row when present.
- ✅ **Copy-link / deep-link state** — shared `src/lib/deeplink.ts` (`bindParam`) syncs a tool's
  primary input with a URL query param (`?hex=…`, `?text=…`, `?n=…`, …). Wired into 14 tools;
  GPA and Time Zone were intentionally skipped (multi-field state — future work if wanted).
- ✅ **Homepage/about counts** — corrected to the real **17** live categories (index + about;
  removed the non-existent "Density"/"Torque" list entries — those exist only as unit arrays).
- ✅ **Programmatic converter pages** — `src/lib/units.ts` now auto-adds the reverse of every
  `commonPair` (+54 pages → 188 pair pages), picked up by pages, links, search, and sitemap.

## C. Remaining polish ideas (optional)

- Deep-link the two skipped tools (GPA rows, Time Zone selections) via encoded multi-field state.
- Regenerate OG images whenever a tool's name/tagline changes (`npm run gen:og`, then commit PNGs).
