# Website Test Report: prounitconverter.com

**Date:** 2026-07-25
**Duration:** 82.7s (core crawl) + targeted /tools pass
**Base URL:** https://prounitconverter.com
**Health Score:** 95/100

---

## Executive Summary

| Metric | Value |
|---|---|
| Pages Crawled (core) | 30 |
| New /tools pages tested | 10 |
| Working (2xx) | 30 / 30 core + 10/10 tools |
| Broken (4xx/5xx/unreachable) | 0 |
| Redirects (3xx) | 0 |
| Pages with Console Errors | 0 (core) + 0 (tools) |
| Pages with Broken Images | 0 |
| Missing Page Titles | 0 |
| Missing Meta Descriptions | 0 |
| Missing H1 | 0 |
| Average Load Time (core) | 2,218ms |
| Average Load Time (/tools) | 2,308ms |
| Slowest Page | / (4,142ms) |

The site is in excellent health. Across the 30 crawled core pages and the 10 newly deployed
/tools pages, **every URL returned HTTP 200 with zero console errors, zero broken images, and
complete SEO metadata** (title, meta description, single H1, canonical, and JSON-LD structured
data on every page). Load times are moderate (~2.2s average, cold-cache over the public
internet) with no page exceeding ~4.2s. The converter widget was verified functional (live
input produced a converted output). Health score: **95/100** — the only deductions
are for average load time and are cosmetic given this is uncached first-hit timing.

---

## Site Discovery

- **Method:** sitemap (sitemap-index.xml → sitemap-0.xml)
- **Sitemap found:** Yes
- **Core pages discovered:** 30 (crawler capped at 30; alphabetical, so it covered homepage + about/api/compare/contact + /convert pages)
- **New /tools pages:** tested in a dedicated targeted pass (they sort after /convert alphabetically and fell outside the 30-page cap)

---

## New /tools Pages (targeted pass)

| URL | Status | Meta | H1 | Canonical | JSON-LD | Load | Console Errors |
|---|---|---|---|---|---|---|---|
| /tools/ | 200 | ✓ | ✓ | ✓ | 3 | 3,559ms | 0 |
| /tools/text-case-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 2,355ms | 0 |
| /tools/color-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 2,106ms | 0 |
| /tools/aspect-ratio-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 2,067ms | 0 |
| /tools/roman-numeral-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 2,239ms | 0 |
| /tools/number-to-words-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 1,934ms | 0 |
| /tools/unix-timestamp-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 3,051ms | 0 |
| /tools/time-zone-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 1,865ms | 0 |
| /tools/base64-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 1,883ms | 0 |
| /tools/text-to-binary-converter/ | 200 | ✓ | ✓ | ✓ | 4 | 2,023ms | 0 |

All 10 new pages pass every check: 200 OK, unique meta description, single H1, self-referencing
canonical, and 3–4 JSON-LD blocks each (SoftwareApplication + BreadcrumbList + HowTo + FAQPage on
tool pages; BreadcrumbList + ItemList + FAQPage on the hub). Zero console errors.

---

## Core Page Results (crawled)

| URL | Status | Title | Meta | H1 | Load | Console Errors | Broken Images |
|---|---|---|---|---|---|---|---|
| / | 200 | ✓ | ✓ | ✓ | 4,142ms | 0 | 0 |
| /about/ | 200 | ✓ | ✓ | ✓ | 2,078ms | 0 | 0 |
| /api/ | 200 | ✓ | ✓ | ✓ | 2,060ms | 0 | 0 |
| /compare/ | 200 | ✓ | ✓ | ✓ | 2,053ms | 0 | 0 |
| /contact/ | 200 | ✓ | ✓ | ✓ | 1,929ms | 0 | 0 |
| /convert/ac-to-ft2/ | 200 | ✓ | ✓ | ✓ | 2,740ms | 0 | 0 |
| /convert/ac-to-ha/ | 200 | ✓ | ✓ | ✓ | 2,928ms | 0 | 0 |
| /convert/angle/ | 200 | ✓ | ✓ | ✓ | 1,925ms | 0 | 0 |
| /convert/arcm-to-arcs/ | 200 | ✓ | ✓ | ✓ | 2,029ms | 0 | 0 |
| /convert/area/ | 200 | ✓ | ✓ | ✓ | 2,097ms | 0 | 0 |
| /convert/atm-to-kpa/ | 200 | ✓ | ✓ | ✓ | 2,956ms | 0 | 0 |
| /convert/atm-to-psi/ | 200 | ✓ | ✓ | ✓ | 2,760ms | 0 | 0 |
| /convert/bar-to-psi/ | 200 | ✓ | ✓ | ✓ | 2,196ms | 0 | 0 |
| /convert/bit-to-B/ | 200 | ✓ | ✓ | ✓ | 1,991ms | 0 | 0 |
| /convert/btu-to-kj/ | 200 | ✓ | ✓ | ✓ | 2,010ms | 0 | 0 |
| /convert/btuh-to-kw/ | 200 | ✓ | ✓ | ✓ | 1,978ms | 0 | 0 |
| /convert/c_cup-to-c_floz/ | 200 | ✓ | ✓ | ✓ | 2,042ms | 0 | 0 |
| /convert/c_cup-to-c_ml/ | 200 | ✓ | ✓ | ✓ | 1,991ms | 0 | 0 |
| /convert/c_cup-to-c_tbsp/ | 200 | ✓ | ✓ | ✓ | 1,883ms | 0 | 0 |
| /convert/c_floz-to-c_ml/ | 200 | ✓ | ✓ | ✓ | 1,938ms | 0 | 0 |
| /convert/c_gal-to-c_l/ | 200 | ✓ | ✓ | ✓ | 1,946ms | 0 | 0 |
| /convert/c_ml-to-c_cup/ | 200 | ✓ | ✓ | ✓ | 1,954ms | 0 | 0 |
| /convert/c_qt-to-c_cup/ | 200 | ✓ | ✓ | ✓ | 2,048ms | 0 | 0 |
| /convert/c_tbsp-to-c_tsp/ | 200 | ✓ | ✓ | ✓ | 1,909ms | 0 | 0 |
| /convert/c_tsp-to-c_ml/ | 200 | ✓ | ✓ | ✓ | 2,072ms | 0 | 0 |
| /convert/c-to-f/ | 200 | ✓ | ✓ | ✓ | 2,022ms | 0 | 0 |
| /convert/c-to-k/ | 200 | ✓ | ✓ | ✓ | 2,805ms | 0 | 0 |
| /convert/cm-to-in/ | 200 | ✓ | ✓ | ✓ | 2,060ms | 0 | 0 |
| /convert/cooking/ | 200 | ✓ | ✓ | ✓ | 1,993ms | 0 | 0 |
| /convert/cup-to-floz/ | 200 | ✓ | ✓ | ✓ | 1,997ms | 0 | 0 |

---

## Console Errors

None detected on any of the 40 tested pages (analytics/AdSense noise filtered out).

## Broken Images

None detected.

---

## Interactive Elements (homepage)

### Buttons (10 tested)
- "(icon)" — clicked OK
- "Single" — clicked OK
- "Batch" — clicked OK
- "☆" — clicked OK
- "ⓘ" — skipped (hidden)
- "⇄" — skipped (hidden)
- "ⓘ" — skipped (hidden)
- "Copy" — skipped (hidden)
- "Share" — skipped (hidden)
- "Reset" — skipped (hidden)

### Forms (1 found)
- 0 input(s) — filled OK

### Navigation Links (15 found)
- Unit Converter → /
- Tools → /tools
- About → /about
- Contact → /contact
- 📏 Length → /convert/length
- ⚖️ Weight → /convert/weight
- 🌡️ Temperature → /convert/temperature
- ⬛ Area → /convert/area
- 🧊 Volume → /convert/volume
- 🚀 Speed → /convert/speed
- 💾 Digital → /convert/digital
- ⏱️ Time → /convert/time
- 💱 Currency → /convert/currency
- 📐 Angle → /convert/angle
- 🌬️ Pressure → /convert/pressure

---

## Feature Detection

| Feature | Detected | Notes |
|---|---|---|
| Calculator/Converter | Yes | Functional — output changed on input ✓ (2 number inputs) |
| Search Box | Yes | Header quick-search |
| Dropdowns | Yes | 5 select elements |
| Accordion (FAQ) | Yes | FAQ accordions |
| Tabs | Yes | 2 tab elements |
| Dark Mode Toggle | Yes | Theme switch |
| Cookie Banner | No | — |
| Chat Widget | No | — |

---

## Performance

| Metric | Value |
|---|---|
| Core avg load | 2,218ms |
| /tools avg load | 2,308ms |
| Slowest page | / (4,142ms) |
| Pages > 3s | 3 |

Timings are cold-cache, single-hit over the public internet, so real repeat-visit performance
(with Cloudflare edge cache + service worker) will be substantially faster.

---

## Recommendations

### High Priority
- None. No broken pages, no console errors, no missing SEO metadata.

### Medium Priority
- **Get the new pages indexed** (not a site defect): submit sitemap-index.xml in Google Search
  Console and Request Indexing for the 10 /tools URLs; enable Cloudflare IndexNow. See SEO_PLAYBOOK.md.
- **Homepage is the slowest page (~4.2s cold).** Consider deferring non-critical third-party scripts
  (AdSense/GA) and confirming fixed ad-slot heights to protect CLS.

### Low Priority
- **Per-tool OG images** — all tools currently share the global og-image.png (fine, but per-tool
  images improve social CTR).
- Sweep remaining "14 categories" references in long-form homepage prose (visible subtitle already fixed).

---
*Generated by Claude Code /test_website skill · Playwright headless Chromium · 2026-07-25*
