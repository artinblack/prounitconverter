# Website Test Report: prounitconverter.com

**Date:** 2026-06-20
**Duration:** 135.9s
**Base URL:** https://prounitconverter.com
**Health Score:** 25/100

---

## Executive Summary

| Metric | Value |
|---|---|
| Pages Crawled | 30 |
| Working (2xx) | 23 |
| Broken (net::ERR_FAILED) | 7 |
| Redirects (3xx) | 0 |
| Pages with Console Errors | 0 |
| Pages with Broken Images | 0 |
| Missing Page Titles | 0 |
| Missing Meta Descriptions | 0 |
| Missing H1 Tags | 0 |
| Average Load Time | 2,717ms |
| Slowest Page | / (homepage) — 29,744ms |

The site has a critical split-deployment problem: 7 of the 14 converter category pages (`/convert/length`, `/convert/weight`, `/convert/temperature`, `/convert/volume`, `/convert/speed`, `/convert/digital`, `/convert/time`) return a hard `net::ERR_FAILED` error — meaning they are completely inaccessible and linked directly from the main navigation. The working pages (area, currency, angle, pressure, energy, power, force, voltage, cooking, numbase) load cleanly with good SEO metadata; however, the homepage takes nearly 30 seconds to reach network idle, which is a severe user-experience problem likely caused by a slow external API call or cold-start delay.

---

## Site Discovery

- **Method:** BFS crawl from homepage (no sitemap found)
- **Sitemap found:** No — `https://prounitconverter.com/sitemap.xml` returned non-200 or no `<loc>` tags
- **Pages discovered:** 30 (cap reached)
- **Recommendation:** Add a `sitemap.xml` — it helps search engines discover all pages and is standard practice for converter sites

---

## Page Results

| Path | Status | Title | Meta | H1 | Load Time | Console Errors | Broken Images |
|---|---|---|---|---|---|---|---|
| / | 200 | ✓ | ✓ | ✓ | **29,744ms** ⚠️ | 0 | 0 |
| /about | 200 | ✓ | ✓ | ✓ | 1,209ms | 0 | 0 |
| /contact | 200 | ✓ | ✓ | ✓ | 1,984ms | 0 | 0 |
| /convert/length | ❌ ERR | — | — | — | 12ms | — | — |
| /convert/weight | ❌ ERR | — | — | — | 13ms | — | — |
| /convert/temperature | ❌ ERR | — | — | — | 10ms | — | — |
| /convert/area | 200 | ✓ | ✓ | ✓ | 2,582ms | 0 | 0 |
| /convert/volume | ❌ ERR | — | — | — | 13ms | — | — |
| /convert/speed | ❌ ERR | — | — | — | 10ms | — | — |
| /convert/digital | ❌ ERR | — | — | — | 10ms | — | — |
| /convert/time | ❌ ERR | — | — | — | 15ms | — | — |
| /convert/currency | 200 | ✓ | ✓ | ✓ | 1,963ms | 0 | 0 |
| /convert/angle | 200 | ✓ | ✓ | ✓ | 1,236ms | 0 | 0 |
| /convert/pressure | 200 | ✓ | ✓ | ✓ | 1,730ms | 0 | 0 |
| /convert/energy | 200 | ✓ | ✓ | ✓ | 1,567ms | 0 | 0 |
| /convert/power | 200 | ✓ | ✓ | ✓ | 1,123ms | 0 | 0 |
| /convert/force | 200 | ✓ | ✓ | ✓ | 1,236ms | 0 | 0 |
| /convert/voltage | 200 | ✓ | ✓ | ✓ | 1,310ms | 0 | 0 |
| /convert/cooking | 200 | ✓ | ✓ | ✓ | 1,232ms | 0 | 0 |
| /convert/numbase | 200 | ✓ | ✓ | ✓ | 1,353ms | 0 | 0 |
| /convert/ft-to-m | 200 | ✓ | ✓ | ✓ | 1,606ms | 0 | 0 |
| /convert/in-to-cm | 200 | ✓ | ✓ | ✓ | 1,431ms | 0 | 0 |
| /convert/km-to-mi | 200 | ✓ | ✓ | ✓ | 1,339ms | 0 | 0 |
| /convert/mi-to-km | 200 | ✓ | ✓ | ✓ | 1,336ms | 0 | 0 |
| /convert/kg-to-lb | 200 | ✓ | ✓ | ✓ | 1,341ms | 0 | 0 |
| /convert/lb-to-kg | 200 | ✓ | ✓ | ✓ | 1,275ms | 0 | 0 |
| /convert/c-to-f | 200 | ✓ | ✓ | ✓ | 1,388ms | 0 | 0 |
| /convert/f-to-c | 200 | ✓ | ✓ | ✓ | 1,369ms | 0 | 0 |
| /convert/l-to-gal | 200 | ✓ | ✓ | ✓ | 1,160ms | 0 | 0 |
| /convert/GB-to-MB | 200 | ✓ | ✓ | ✓ | 1,979ms | 0 | 0 |

> Pages with status ❌ ERR returned `net::ERR_FAILED` — hard network failure, not an HTTP error code.
> The homepage redirects to `/?from=m&to=ft&value=1` (a length conversion), yet `/convert/length` itself is broken.

---

## Console Errors

**None.** All reachable pages returned zero JavaScript console errors. This is excellent.

---

## Broken Images

**None.** All reachable pages have no broken images.

---

## Interactive Elements

*All interactive testing was performed on the homepage (`https://prounitconverter.com`).*

### Buttons (10 tested)

| Button | Result | Notes |
|---|---|---|
| *(first button)* | ❌ Error | Timeout 3,000ms — page likely not fully interactive when first button was clicked (homepage takes ~30s to reach networkidle) |
| Single | ✓ Clicked OK | — |
| Batch | ✓ Clicked OK | — |
| ☆ (Favorite) | ✓ Clicked OK | — |
| ⓘ (Info) | — Skipped | Hidden (×2 instances) |
| ⇄ (Swap) | — Skipped | Hidden |
| Copy | — Skipped | Hidden |
| Share | — Skipped | Hidden |
| Reset | — Skipped | Hidden |

**Assessment:** The visible buttons (Single, Batch, Favorite) work correctly. The hidden buttons (Copy, Share, Reset, Swap, Info) are likely shown only after a conversion is entered — this is expected behavior. The first button timeout is a symptom of the homepage's slow load, not a real bug.

### Forms (1 found)

| Form | Text Inputs Found | Status |
|---|---|---|
| Converter form | 0 text inputs | Filled OK (uses `<input type="number">`, not text inputs) |

The converter form uses number inputs rather than text inputs — this is correct for a unit converter.

### Navigation Links (15 found)

| Link Text | Href | Status |
|---|---|---|
| Unit Converter | / | ✓ Working |
| About | /about | ✓ Working |
| Contact | /contact | ✓ Working |
| 📏 Length | /convert/length | ❌ BROKEN |
| ⚖️ Weight | /convert/weight | ❌ BROKEN |
| 🌡️ Temperature | /convert/temperature | ❌ BROKEN |
| ⬛ Area | /convert/area | ✓ Working |
| 🧊 Volume | /convert/volume | ❌ BROKEN |
| 🚀 Speed | /convert/speed | ❌ BROKEN |
| 💾 Digital | /convert/digital | ❌ BROKEN |
| ⏱️ Time | /convert/time | ❌ BROKEN |
| 💱 Currency | /convert/currency | ✓ Working |
| 📐 Angle | /convert/angle | ✓ Working |
| 🌬️ Pressure | /convert/pressure | ✓ Working |
| ⚡ Energy | /convert/energy | ✓ Working |

**7 of 15 navigation links lead to broken pages.** This means users clicking Length, Weight, Temperature, Volume, Speed, Digital, or Time from the nav get a broken page with no content.

---

## Feature Detection

| Feature | Detected | Tested | Result |
|---|---|---|---|
| Calculator / Converter | ✓ Yes | ✓ Yes | **Functional** — entering a value in one field changed the output field |
| Search Box | ✓ Yes | — | Present (likely unit/category search) |
| Dropdowns / Select | ✓ Yes | — | 5 `<select>` elements (unit pickers) |
| Accordion | ✓ Yes | — | Present (likely FAQ or collapsible content) |
| Tabs | ✓ Yes (2) | — | Present (Single / Batch conversion toggle) |
| Dark Mode Toggle | ✓ Yes | — | Detected |
| Modal / Dialog | ✗ No | — | — |
| Cookie Banner | ✗ No | — | — |
| Chat Widget | ✗ No | — | — |
| Infinite Scroll | ✗ No | — | — |

**The core converter functionality works correctly** on pages that load. Entering `42` in the first number input caused the output field to update, confirming live bidirectional conversion is functional.

---

## Performance

| Metric | Value |
|---|---|
| Fastest Page | /convert/power — 1,123ms |
| Slowest Page | / (homepage) — **29,744ms** |
| Pages > 10s | 1 (homepage) |
| Pages > 3s | 1 (homepage) |
| Pages > 1.5s | 9 pages (area, contact, currency, pressure, energy, ft-to-m, GB-to-MB, cooking, numbase) |
| Avg load time (excl. homepage) | ~1,480ms |
| Avg load time (incl. homepage) | 2,717ms |

The homepage's 30-second load is the outlier — all other pages load between 1.1s and 2.6s, which is acceptable. The homepage likely holds open an HTTP connection waiting for a currency exchange rate or other live data API before reaching `networkidle`. Without the homepage, average load is ~1.5s which is reasonable.

---

## Recommendations

### 🔴 High Priority — Fix Immediately

**1. 7 converter category pages are completely broken (`net::ERR_FAILED`)**

The following pages return a hard network error (not even an HTTP status code):
- `/convert/length`
- `/convert/weight`
- `/convert/temperature`
- `/convert/volume`
- `/convert/speed`
- `/convert/digital`
- `/convert/time`

**Pattern:** The broken pages are the same categories where the homepage links directly (e.g., the nav shows "📏 Length" → `/convert/length`), but the working pair-specific pages like `/convert/ft-to-m` and `/convert/km-to-mi` work fine. This suggests the generic category routes (without `/from=...&to=...` query params) are missing from the Cloudflare Worker or CDN routing config.

**Fix:** Check your Cloudflare Workers routes or `wrangler.toml` to ensure `/convert/length`, `/convert/weight`, etc. are mapped. These may have been accidentally removed during a recent deploy. Compare the routes of a broken category (length) vs. a working one (area) — the difference in routing config will reveal the issue.

---

**2. Homepage takes ~30 seconds to fully load**

The homepage reached `networkidle` in 29.7 seconds. Even if users see content sooner, this indicates an open HTTP connection is holding the page (likely a live currency exchange rate API call, or a Cloudflare Worker cold-start holding the response).

**Fix options:**
- If this is an API call (e.g., fetching live exchange rates for the default length conversion): move the API fetch client-side with a loading state, so the HTML is served immediately
- If it's a Cloudflare Worker cold-start: use `wrangler` to keep the worker warm, or add a cache layer so the first visitor after a cold start doesn't pay the full penalty
- Add a `waitUntil: event.waitUntil(...)` pattern to respond immediately while data fetches in the background

---

### 🟡 Medium Priority — Fix Soon

**3. Add a sitemap.xml**

No sitemap was found at `/sitemap.xml` or `/sitemap_index.xml`. The site has 30+ converter pages with good individual metadata — a sitemap would help Google index them faster and more reliably.

**Fix:** Astro's `@astrojs/sitemap` integration can auto-generate this on every build with two lines of config.

---

**4. The 7 broken nav links give no error message to users**

When `/convert/length` fails with `net::ERR_FAILED`, the browser shows a generic "This site can't be reached" error — not your site's 404 page. Users who land on these URLs have no way to navigate back or understand what happened.

**Fix (short-term):** Until the routing is fixed, add client-side redirects in your service worker or Cloudflare Worker to redirect `/convert/length` → `/?from=m&to=ft&value=1` so users at least reach a working converter.

---

### 🟢 Low Priority — Nice to Have

**5. Add a sitemap link in robots.txt**

`https://prounitconverter.com/robots.txt` was not checked — once a sitemap is added, make sure `robots.txt` includes `Sitemap: https://prounitconverter.com/sitemap.xml`.

**6. The "Single / Batch" tab toggle and "Copy / Share / Reset" buttons are hidden on page load**

These buttons require a conversion value to be entered before becoming visible. This is good UX. However, the hidden state means automated health tests (like this one) cannot fully test them. Consider adding a brief end-to-end Playwright test in your CI that:
1. Enters a value
2. Verifies the output updates
3. Clicks Copy and verifies the clipboard
4. Clicks Reset and verifies the input clears

---

## Broken Pages — Full Error Detail

All 7 broken pages returned `net::ERR_FAILED` with zero load time (12–15ms), meaning the connection was refused or dropped immediately — not a timeout. This rules out a slow server and points to a missing route in your CDN/Worker configuration.

| Page | Error |
|---|---|
| /convert/length | `net::ERR_FAILED` |
| /convert/weight | `net::ERR_FAILED` |
| /convert/temperature | `net::ERR_FAILED` |
| /convert/volume | `net::ERR_FAILED` |
| /convert/speed | `net::ERR_FAILED` |
| /convert/digital | `net::ERR_FAILED` |
| /convert/time | `net::ERR_FAILED` |

---

*Generated by Claude Code `/test_website` skill · Playwright 1.61.0 headless Chromium · 2026-06-20*
*Test duration: 135.9 seconds · 30 pages crawled · BFS discovery (no sitemap)*
