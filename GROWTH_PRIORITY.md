# Growth Priority — prounitconverter.com

_Last updated: 2026-07-25_

Ranked by **ICE** (Impact × Confidence × Ease, each 1–5; Score = I×C×E / 5, higher = do sooner).
This is a build/marketing priority queue, not a schedule.

---

## Tier 1 — Do next (highest ICE)

| # | Action | I | C | E | Score | Notes |
|---|--------|---|---|---|-------|-------|
| 1 | **Submit new `/tools/*` URLs to Google Search Console + request indexing** | 5 | 5 | 5 | 25 | Free, minutes of work. See SEO_PLAYBOOK.md. |
| 2 | **Enable Cloudflare IndexNow** | 4 | 5 | 5 | 20 | One toggle in Cloudflare → instant Bing/Yandex indexing. |
| 3 | **Percentage Calculator + BMI Calculator + Age Calculator** | 5 | 4 | 4 | 16 | Massive evergreen volume, small builds, strong AdSense RPM. |
| 4 | **Expand `commonPairs` for programmatic `/convert/x-to-y` pages** | 5 | 4 | 4 | 16 | Each pair = a long-tail landing page with near-zero marginal effort. |
| 5 | **Internal-link tools ↔ converters contextually** | 4 | 4 | 5 | 16 | Already partly done (related tools); add in-copy links both directions. |

## Tier 2 — Soon

| # | Action | I | C | E | Score | Notes |
|---|--------|---|---|---|-------|-------|
| 6 | **Per-tool OG images** | 3 | 4 | 3 | ~7 | Better social/Discord/Slack CTR. |
| 7 | **Countdown Timer + Dice Roller + YouTube Timestamp** | 4 | 3 | 4 | ~10 | Shareable → natural backlinks. |
| 8 | **Readability + Meal Calorie calculators** | 4 | 3 | 3 | ~7 | Solid mid-volume, content-rich pages. |
| 9 | **Deep-link tool state via URL params** | 3 | 4 | 3 | ~7 | Shareable results = more inbound links. |
| 10 | **Backlinks: submit to tool directories** | 4 | 3 | 3 | ~7 | See list in SEO_PLAYBOOK.md (you already have Fazier). |

## Tier 3 — Later / bigger bets

| # | Action | I | C | E | Score | Notes |
|---|--------|---|---|---|-------|-------|
| 11 | **URL Shortener + Unshortener (Cloudflare KV/D1)** | 4 | 3 | 2 | ~5 | Tracked as a separate tool/project — needs its own backend, storage, and abuse hardening. |
| 12 | **Image Cropper + Color Scheme Extractor (canvas)** | 3 | 3 | 2 | ~4 | Heavier UI; good for "tool" backlinks. |
| 13 | **Blog / conversion guides** | 4 | 2 | 2 | ~3 | "How many X in Y" articles feeding converter pages. |

---

## The compounding loop
1. Ship a tool/converter page (data-driven — cheap).
2. Cross-link it from related tools, the hub, footer, and relevant `/convert` category.
3. Submit + request indexing (GSC + IndexNow).
4. Watch GSC Performance for queries you rank #5–20 for; strengthen that page's copy/FAQ.
5. Repeat. Each page raises topical authority for the whole domain.

## What NOT to prioritize
- Don't chase tools that duplicate existing pages (e.g. a standalone binary/hex number-base tool —
  `/convert/numbase` already ranks; the new Text↔Binary tool is deliberately ASCII-focused to avoid this).
- Don't add heavy JS libraries; the zero-dependency, fast-loading approach is a Core Web Vitals asset.
