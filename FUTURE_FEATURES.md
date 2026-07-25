# Future Features — prounitconverter.com

_Last updated: 2026-07-25_

## Shipped so far

- **17 unit-converter categories** at `/convert/*` + **188 pair pages** (auto reverse-paired).
- **17 converter/utility tools** at `/tools/*`:
  - _Batch 1:_ Text Case, Hex/RGB Color, Aspect Ratio, Roman Numeral, Number-to-Words,
    Unix Timestamp, Time Zone, Base64, Text↔Binary.
  - _Batch 2:_ CSS Unit, Download-Time, Percentage, GPA, Fraction⇄Decimal, Scientific Notation,
    Morse Code, URL Slug.
- **Polish:** per-tool OG images, recently-used tools, deep-link/shareable state, reverse pair pages.

Stack constraints for everything below: **Astro 6 → Cloudflare static Worker, hand-written CSS,
zero-dependency client-side JS.** Anything needing a backend/library is flagged.

_(The URL Shortener / Unshortener spec was moved out of this backlog — it will be tracked as a
separate tool/project since it needs its own backend, storage, and abuse hardening.)_

---

# 🎯 Biggest bets — start here

These four have the highest ROI for a converter site and fit the static stack.

| Bet | Why it's huge | Effort |
|-----|---------------|--------|
| **1. Specific-value pages** — `/convert/100-cm-to-inches`, `/convert/350-f-to-c` | Google surfaces these as featured snippets. Nearly infinite long-tail, generated programmatically from existing pair data + a curated value list. THE growth engine for a converter site. | M (one dynamic route + a values list) |
| **2. Printable conversion charts** — "cm to inches chart", "kg to lbs chart", "oven temp chart" | High volume, low competition, long dwell time (great AdSense), printable/PDF, naturally link-worthy. Generated from `units.ts`. | S–M |
| **3. Global ⌘K command palette** — fuzzy search across every converter, pair, and tool | Big UX win → more pages/session, lower bounce. Pure client-side over the data you already export. | M |
| **4. Expose `density` + `fuel` as live categories** | Both unit arrays are **already coded** in `units.ts` but not in the `categories` list — flipping them on mints two full converter categories + pair pages for near-zero effort. | XS |

---

# A. New tools (grouped by theme)

Feasibility: **★ native** (works with plain JS / Web APIs) · **◐ tiny-lib** (needs a small
dependency or non-trivial impl).

### Developer tools (high intent, your dev tools already index well)
| Tool | Feasibility | Notes |
|------|-------------|-------|
| JSON Formatter / Minifier / Validator | ★ | Evergreen dev search; pairs with Base64. |
| JSON ⇄ CSV ⇄ YAML | ◐ | YAML needs a tiny parser; JSON/CSV native. |
| JWT Decoder | ★ | Decode header/payload client-side (never verify secrets). |
| URL Encode / Decode | ★ | `encodeURIComponent`. |
| HTML Entity Encode / Decode | ★ | |
| UUID / GUID Generator | ★ | `crypto.randomUUID()`. |
| Hash Generator (SHA-1/256/384/512) | ★ | Native Web Crypto `subtle.digest`. (MD5 would need a tiny impl.) |
| Password Generator + strength meter | ★ | `crypto.getRandomValues`. |
| Color Contrast Checker (WCAG AA/AAA) | ★ | Pairs perfectly with the Color Converter. |
| Cron Expression Explainer | ★ | Parse + describe in English. |
| Regex Tester + cheatsheet | ★ | Live match highlighting. |
| Diff / Text Compare | ◐ | Simple LCS diff is doable native. |
| QR Code Generator | ◐ | Needs a small QR lib or canvas impl. |
| Lorem Ipsum Generator | ★ | |

### Date & time
| Tool | Feasibility | Notes |
|------|-------------|-------|
| Date Duration Calculator (days between dates) | ★ | Very high search volume. |
| Add / Subtract days from a date | ★ | |
| Business/Working-days calculator | ★ | Skip weekends + holiday list. |
| Countdown Timer | ★ | From the old sheet; shareable via `?to=`. |
| Age Calculator | ★ | From the old sheet; huge search. |
| Week number / Day of year | ★ | |

### Math & numbers
| Tool | Feasibility | Notes |
|------|-------------|-------|
| Random Number Generator / Dice / Coin flip | ★ | Fun + shareable → backlinks. |
| Ratio / proportion solver (rule of three) | ★ | |
| Average / mean / median / mode | ★ | |
| GCD / LCM / Prime checker / Factorial | ★ | |
| Rounding & significant-figures tool | ★ | Complements Scientific Notation. |

### Text & writing
| Tool | Feasibility | Notes |
|------|-------------|-------|
| Word / Character / Sentence counter (standalone) | ★ | Massive search; extract from Text Case tool. |
| Line tools: sort, dedupe, reverse, remove blanks | ★ | |
| Find & Replace (regex) | ★ | |
| Readability Score (Flesch-Kincaid) | ★ | From the old sheet. |
| NATO phonetic / ROT13 / Caesar cipher | ★ | Pairs with Morse; puzzle/CTF crowd. |

### Health & finance (top AdSense RPM)
| Tool | Feasibility | Notes |
|------|-------------|-------|
| BMI / BMR-Calorie / Body-Fat / Ideal Weight | ★ | BMI + calorie were in the sheet. |
| Tip / Discount / Sales-Tax-VAT calculator | ★ | High everyday volume. |
| Loan-EMI / Mortgage / Compound Interest | ★ | Long sessions, high-value ads. |

### Measurement-niche converters (perfect brand fit, strong long-tail)
| Tool | Feasibility | Notes |
|------|-------------|-------|
| Shoe Size Converter (US/UK/EU/JP) | ★ | Table lookup; very high search. |
| Ring / Clothing / Hat / Bra size | ★ | |
| Cooking ingredient weight ⇄ volume (density-aware) | ★ | Flour/sugar/butter densities; extends Cooking. |
| Fuel Economy (MPG ⇄ L/100km ⇄ km/L) | ★ | `fuel` array already exists — just expose it. |
| Paper Size (A/B/US) + GSM ⇄ lb weight | ★ | |
| DPI / PPI / pixel-density calculator | ★ | Pairs with CSS Unit + Aspect Ratio. |
| AWG wire gauge / screw & bolt size | ★ | Engineering/DIY long-tail. |
| Frequency ⇄ wavelength, dBm ⇄ mW | ★ | Extend `/convert` with new categories. |

### Fun / viral (links & social)
Random picker / spinner wheel, name/team picker, gradient generator, leetspeak, palindrome
checker. All ★ native, all shareable.

---

# B. Programmatic SEO engine (compounding)

| Play | Impact | Notes |
|------|--------|-------|
| **Specific-value pages** (`/convert/100-cm-to-inches`) | 🔥🔥🔥 | Biggest bet #1. Generate top-N values per popular pair. |
| **Printable chart pages** | 🔥🔥 | Biggest bet #2. |
| **140 CSS named-color pages** | 🔥🔥 | `/color/tomato` → swatch, every format, shades/tints. Pairs with Color Converter; long-tail goldmine. |
| **Tool-value pages** | 🔥 | `/tools/base64/decode/<hash>`-style share links, "42 in Roman numerals" pages, etc. |
| **"X vs Y" comparison guides** | 🔥 | Feed converter/tool pages; earn links. |
| **Internationalization (i18n)** | 🔥🔥 | Large untapped TAM; heavier lift (Astro i18n + translated copy). |

---

# C. Platform & UX features

- **⌘K command palette** (biggest bet #3) — search converters + tools + pairs instantly.
- **Favorites / pinned tools + a "My tools" dashboard** — reuse the existing recent-tools &
  converter-favorites localStorage patterns.
- **Shareable result image** — canvas → PNG card ("1 mile = 1.609 km") for social/Slack.
- **Batch mode + CSV in/out** — paste a column, convert all; download results. Premium-worthy.
- **Deep-link the two skipped tools** (GPA rows, Time Zone selections) via encoded multi-field state.
- **Natural-language search** — extend the header search to parse things like `5'11 to cm`.
- **PWA polish for tools** — install prompt, offline tool pages, per-tool keyboard shortcuts.

---

# D. Distribution & monetization

- **Productize the `/api`** — API keys, freemium tier, Cloudflare rate limiting, docs. Opens a
  developer channel and recurring revenue.
- **Browser extension** — highlight any `number + unit` on any page → instant convert. A genuine
  distribution/backlink flywheel.
- **Embeddable tool widgets** (`/embed/tools/*`, mirroring the existing converter embeds) — every
  embed is a backlink.
- **Premium tier** — ad-free, batch/CSV, saved presets, higher API quota.
- **Contextual affiliates** — kitchen scales on the Cooking converter, measuring tools on Length, etc.

---

# E. Remaining polish (quick wins)

- Regenerate OG images when a tool's name/tagline changes: `npm run gen:og`, then commit the PNGs.
- Sweep any last stray counts as categories grow (source of truth = `categories.length`).
- Add contextual in-copy internal links between related tools and their matching `/convert` category.
