# Growth Priority — prounitconverter.com

_Last updated: 2026-07-25_

Ranked by **ICE** (Impact × Confidence × Ease, each 1–5; Score = I×C×E ÷ 5, higher = do sooner).
A build/marketing priority queue, not a schedule. Mirrors the build order in `FUTURE_FEATURES.md`.

> **Young-domain rule:** the site is ~1 week old. Favor **distinct, high-quality pages** and
> **get them indexed** before scaling any programmatic page factory — mass thin pages can hurt a
> low-authority domain. This shapes the ranking below.

---

## ✅ Recently shipped (2026-07-25)
17 `/tools/*` pages · per-tool OG images · recently-used tools · deep-link/shareable state ·
reverse pair pages (+54) · **Density + Fuel Economy categories** · Percentage Calculator ·
corrected/dynamic category count.

---

## Tier 1 — Do next (highest ICE)

| # | Action | I | C | E | Score | Notes |
|---|--------|---|---|---|-------|-------|
| 1 | **Index everything new** — GSC Request-Indexing for the new hubs (tools + Density/Fuel) + confirm Cloudflare IndexNow is on | 5 | 5 | 5 | 25 | Free, minutes. Bulk rides the sitemap. See `INDEXING_URLS.md`. |
| 2 | **Net-new high-search tools: Age Calculator, BMI Calculator, Word/Character Counter** | 5 | 4 | 4 | 16 | Distinct, high-quality, huge evergreen volume — ideal for a young domain. (Percentage ✅ done.) |
| 3 | **Printable conversion charts** (`/charts/[pair]`) | 5 | 4 | 4 | 16 | High volume, low competition, long dwell (AdSense), link-worthy. |
| 4 | **Specific-value pages — curated-first** (`/convert/100-cm-to-inches`) | 5 | 3 | 3 | ~9 | Biggest long-tail engine, but start with ~300 quality pages, expand after they index. |
| 5 | **Contextual internal links** tools ↔ matching `/convert` category | 4 | 4 | 5 | 16 | Related-tool links exist; add in-copy links both directions. |

## Tier 2 — Soon

| # | Action | I | C | E | Score | Notes |
|---|--------|---|---|---|-------|-------|
| 6 | **⌘K command palette** across converters + pairs + tools | 4 | 4 | 3 | ~10 | Engagement/retention once inventory is larger. |
| 7 | **More dev tools:** JSON Formatter, Password Generator, Hash, UUID, Date Duration | 4 | 4 | 4 | ~13 | High-intent, all ★ native, your dev tools already index. |
| 8 | **Shareable widgets:** Countdown Timer, Dice Roller, YouTube Timestamp | 4 | 3 | 4 | ~10 | Natural backlinks. |
| 9 | **140 CSS named-color pages** (`/color/tomato`) | 4 | 3 | 3 | ~7 | Long-tail goldmine; pairs with Color Converter. |
| 10 | **Backlinks: submit to tool directories** | 4 | 3 | 3 | ~7 | AlternativeTo, Product Hunt, SaaSHub, awesome-lists. Fazier ✅. |
| 11 | **Readability + Meal Calorie calculators** | 4 | 3 | 3 | ~7 | Mid-volume, content-rich. |

## Tier 3 — Later / bigger bets

| # | Action | I | C | E | Score | Notes |
|---|--------|---|---|---|-------|-------|
| 12 | **Productize the `/api`** (keys, freemium, rate limits, docs) | 4 | 3 | 2 | ~5 | Developer channel + recurring revenue. |
| 13 | **Browser extension** (highlight number+unit → convert) | 4 | 3 | 2 | ~5 | Distribution/backlink flywheel. |
| 14 | **Embeddable tool widgets** (`/embed/tools/*`) | 3 | 3 | 3 | ~5 | Every embed is a backlink. |
| 15 | **Internationalization (i18n)** | 5 | 3 | 1 | ~3 | Large TAM; heavy lift. |
| 16 | **Blog / conversion guides** | 4 | 2 | 2 | ~3 | "How many X in Y" feeding tool pages. |
| — | **URL Shortener + Unshortener** | — | — | — | — | Tracked as a **separate project** (own backend/storage/abuse hardening). |

---

## The compounding loop
1. Ship a distinct, genuinely useful page.
2. Cross-link it from related tools, the hub, footer, and its matching `/convert` category.
3. Submit + request indexing (GSC + IndexNow); bulk via sitemap.
4. Watch GSC Performance for queries ranking #5–20; strengthen that page's copy/FAQ.
5. Repeat. Each quality page raises topical authority for the whole domain.

## What NOT to prioritize (yet)
- **Don't scale programmatic pages before indexing is proven** — quality-first on a young domain.
- **Don't duplicate existing pages** — e.g. no standalone number-base tool (`/convert/numbase`
  ranks; Text↔Binary stays ASCII-focused to avoid cannibalization).
- **Don't add heavy JS libraries** — the zero-dependency, fast-loading stack is a Core Web Vitals moat.
