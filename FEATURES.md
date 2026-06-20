# Unit Converter — Feature Roadmap

> Derived from live Playwright analysis of 20 top-ranked unit converter websites (June 2025).
> Each feature entry notes competitor coverage rate, who has it, and implementation notes.

---

## Competitive Baseline — What We Already Have

| Feature | Our Site | Competitor Avg |
|---|---|---|
| Live conversion as you type | ✅ | 15% of 20 sites |
| Swap button (⇄) | ✅ | 10% |
| Copy to clipboard | ✅ | 20% |
| Dark mode | ✅ | 25% |
| Conversion table (all units) | ✅ | 30% |
| FAQ section | ✅ | 40% |
| Currency with live rates | ✅ | 35% live, 55% static |
| Schema.org (WebApplication + FAQPage + HowTo) | ✅ | 25% have any schema |
| Proper H1 + multiple H2s per page | ✅ | ~20% of top sites |
| Canonical + OG tags | ✅ | ~30% |
| Ad-free | ✅ | 40% have ads |
| Mobile-first layout | ✅ | Partial most sites |

**We are already in the top quartile for features.** The gaps below are real differentiation opportunities.

---

## Feature Gap Analysis

### 🔑 Zero-competition gaps (0% of 20 scraped competitors)

These features don't exist on **any** scanned competitor. First-mover advantage.

---

#### 1. Keyboard Shortcuts
**Coverage: 0 / 20 sites (0%)**

Power users — developers, students, scientists — use keyboards. No competitor implements any keyboard shortcuts.

| Shortcut | Action |
|---|---|
| `Tab` | Move focus between value field → from-unit → to-unit |
| `S` (when not in input) | Swap units |
| `C` | Copy result to clipboard |
| `Escape` | Reset / clear value |
| `Enter` | Copy result (when result field focused) |
| `1–9` | Quick-select category from category bar |
| `?` | Show keyboard shortcut help overlay |

**Implementation**: Small `<kbd>` hint badges next to buttons; help modal toggled by `?`.

---

#### 2. Precision Slider / Significant Figures Control
**Coverage: 0 / 20 sites (0%)**

Let the user choose how many decimal places to show (2 · 4 · 6 · 8 · Full). Scientists want 10 sig-figs; casual users want 2. No competitor offers this control.

**Implementation**: Range input `1–10` next to the result; updates `formatResult()` precision.

---

#### 3. Unit Information Popover
**Coverage: 0 / 20 sites (0%)**

Click an ⓘ icon next to any unit name in the dropdown to see: definition, origin, common uses, and a real-world example. E.g. "What is a Nautical Mile?" → "1 NMI = 1 arc-minute of latitude. Used in aviation and maritime navigation."

**Implementation**: `<dialog>` / tooltip populated from a `unitInfo` map in `units.ts`.

---

#### 4. "What does X equal?" Smart Input
**Coverage: 0 / 20 sites (0%)**

Natural language detection: if a user types `"100 mph"` or `"5 feet 11 inches"` into a search-style input at the top of the page, parse it and auto-select the right category + units + value. Great for SEO (users search "how many X in Y") and for speed.

**Implementation**: Regex-based parser; match against unit symbols/names from `units.ts`.

---

### 🔥 High-impact, low-coverage gaps (< 15% of competitors)

---

#### 5. Batch / Multi-Value Conversion
**Coverage: 2 / 20 sites (10%)** — amtake.com, topunitconverter.com

Paste a column of numbers (one per line, or comma-separated) and convert them all at once. Essential for data entry workers, scientists, teachers. Example: paste `1, 2, 5, 10, 25, 100` → get all in feet converted to meters.

**Implementation**: Textarea tab in the converter widget; parse values on input, output as table.

---

#### 6. Swap Button (Already Have — Ensure Visible)
**Coverage: 2 / 20 sites (10%)** — amtake.com, myclicktools.com

We already have this. Ensure the ⇄ button is visually prominent on mobile with sufficient touch target.

---

#### 7. Developer API / JSON Endpoint
**Coverage: 1 / 20 sites (5%)** — webtoolrack.com only

A simple public JSON endpoint: `GET /api/convert?from=ft&to=m&value=100` returns `{"result": 30.48, "from": "ft", "to": "m", "category": "length"}`. Drives developer backlinks, tool integrations, and positions the site as infrastructure.

**Implementation**: Astro API route `/src/pages/api/convert.ts` with CORS headers. Add a `/api` docs page.

---

### 📊 Medium-coverage gaps (15–40% of competitors)

---

#### 8. Unit Search / Filter in Dropdowns
**Coverage: 6 / 20 sites (30%)** — unitslab, calculator.net, convertworld, calculatorsoup, amtake, unitconvertpro

Instead of a plain `<select>`, provide a searchable dropdown: type "kilo" and get Kilogram, Kilometer, Kilopascal. Critical once we add 15+ categories with 10+ units each.

**Implementation**: Replace `<select>` with a custom combobox component (input + filtered list); accessible with ARIA `role="combobox"`.

---

#### 9. Favorites / Pinned Conversions
**Coverage: 4 / 20 sites (20%)** — onlineconversion, unitconversion.org, amtake, unitconvertpro

Let users star frequently-used conversions. Starred conversions appear in a "Favorites" section at the top of the homepage. Stored in `localStorage`.

**Data shape**: `[{ category, fromId, toId, label }]` — max 10 items, with a star button in the widget header.

---

#### 10. Conversion History
**Coverage: 6 / 20 sites (30%)** — unitconverters.net, calculator.net, omnicalculator.com, topunitconverter, amtake, unitconvertpro

Show the last 10 conversions in a collapsible "Recent" drawer. Click any history item to re-load it. Useful for users who convert multiple things in sequence.

**Implementation**: Append to `localStorage` array on each conversion; render as a dropdown panel near the widget.

---

#### 11. Formula with Step-by-Step Display
**Coverage: 6 / 20 sites (30%)** — omnicalculator, amtake, inchcalculator, myclicktools, webtoolrack, unitconvertpro

Show the actual conversion formula below the result. Example: `100 ft × 0.3048 = 30.48 m`. For temperature: `°F = (°C × 9/5) + 32 = 212°F`. This is SEO-valuable (answers "how to convert X to Y" queries directly on-page) and educational.

**Implementation**: Generate formula string from unit factors; display in a styled `<code>` block below the converter widget.

---

#### 12. Embeddable Widget Code Generator
**Coverage: 5 / 20 sites (25%)** — convertworld, calculatorsoup, omnicalculator, amtake, myclicktools

Let any blogger or developer embed a converter on their site. Generate an `<iframe>` snippet targeting `/embed/[category]` which renders a minimal converter widget with no header/footer. Drives organic backlinks.

**Implementation**: `/src/pages/embed/[category].astro` (slim layout); `/embed` page with code generator UI.

---

#### 13. Social Share Buttons
**Coverage: 4 / 20 sites (20%)** — convertworld, amtake, inchcalculator, webtoolrack

Share a specific conversion result as a permalink: `https://site.com/convert/length?from=ft&to=m&value=100`. Twitter/X, WhatsApp, copy link.

**Implementation**: Add query-param support to category pages; read params on load to pre-fill widget; share buttons compose the URL.

---

#### 14. Print / PDF Export
**Coverage: 5 / 20 sites (25%)** — omnicalculator, amtake, inchcalculator, myclicktools, unitconvertpro

A print-optimized CSS `@media print` stylesheet that hides the nav and renders the full conversion table cleanly. A "Print table" button triggers `window.print()`.

**Implementation**: Add `@media print` rules to `global.css`; print button in `ConversionTable.astro`.

---

### 🌐 SEO / Content gaps

---

#### 15. Individual Unit-Pair Landing Pages
**Coverage (partial)**: unitconverters.net has 29 unit-pair nav links. omnicalculator has 337 internal links.

**The single highest-leverage SEO action.** Create dedicated pages for the highest-search-volume unit pairs:
- `/convert/feet-to-meters`
- `/convert/inches-to-cm`
- `/convert/kg-to-lbs`
- `/convert/celsius-to-fahrenheit`
- `/convert/miles-to-km`
- `/convert/liters-to-gallons`
- `/convert/inches-to-mm`
- `/convert/mph-to-kmh`

Each page: live converter pre-set to that pair, conversion table, a 300-word explanation, FAQ (3 questions), HowTo schema, and BreadcrumbList schema. These pages target the supporting keywords directly.

**Implementation**: `src/pages/convert/[from]-to-[to].astro` with `getStaticPaths()` generating ~40 top pairs.

---

#### 16. More Unit Categories
**Coverage**: digitaldutch.com (rank #1) covers 17 categories; we cover 9.

Missing categories present in top competitors:
| Category | Found at |
|---|---|
| **Angle** | digitaldutch, translatorscafe, convertworld, calculatorsoup |
| **Pressure** | digitaldutch, translatorscafe, convertworld, topunitconverter |
| **Energy** | digitaldutch, translatorscafe, convertworld |
| **Density** | digitaldutch, translatorscafe, unitslab |
| **Fuel Consumption** | digitaldutch, convertworld |
| **Power** | digitaldutch, translatorscafe |
| **Force** | digitaldutch, translatorscafe |
| **Electric / Voltage** | calculatorsoup, translatorscafe |
| **Cooking measurements** | onlineconversion, inchcalculator |
| **Clothing sizes** | convertworld |
| **Number base** (binary/hex/decimal) | calculatorsoup |

**Priority order**: Angle → Pressure → Energy → Density → Fuel Consumption → Power.

---

#### 17. Multi-Language Support
**Coverage: 15 / 20 sites (75%)** — the majority of competitors offer at least 2 languages.

This is the **largest SEO gap** we have. Competitors with multi-language:
- digitaldutch: Detects locale automatically
- unitslab: English, German, Spanish, Russian, French, Ukrainian
- calculator.net: Detects locale
- unitconverters.net: Multiple languages via nav
- convertworld: Many languages

Not implementing this means leaving non-English search traffic on the table.

**Implementation approach**: Astro i18n with `src/i18n/` locale strings. Priority locales: `es`, `de`, `fr`, `pt`, `hi`, `zh`. Routes: `/es/convert/length`, etc.

---

#### 18. BreadcrumbList + ItemList Schema
**Coverage**: inchcalculator, myclicktools, webtoolrack — these are the SEO leaders by schema count.

myclicktools.com has 14 schema types including BreadcrumbList, ItemList, VideoObject, QAPage, HowTo, WebApplication, DefinedTerm, SoftwareApplication — by far the most schema-rich site in the niche despite being rank #27. This schema depth is likely to drive rich result appearances.

**Add to every page**:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://..." },
    { "@type": "ListItem", "position": 2, "name": "Length Converter", "item": "https://.../convert/length" }
  ]
}
```

**Add to category pages**: `ItemList` listing all units as `ListItem` entries.
**Add to unit-pair pages**: `DefinedTerm` for each unit definition.

---

#### 19. Unit Glossary / Definitions Pages
**Coverage**: unitslab.com has a "Glossary" section; myclicktools uses DefinedTerm schema.

A `/glossary` page listing every unit we support with its definition, symbol, historical origin, and common uses. Each unit gets its own URL (`/glossary/meter`, `/glossary/foot`) for long-tail SEO.

**Implementation**: Static `src/pages/glossary/[unit].astro` + `DefinedTerm` schema per page.

---

#### 20. "Quick Conversion" Input at Top of Every Page
**Coverage**: unitconverters.net has a predictive tool suggesting conversions based on text input.

A prominent search bar in the header that accepts `"100 km to miles"` and navigates directly to `/convert/length?from=km&to=mi&value=100`. Targets users who type conversion queries directly.

---

### 📱 Engagement / Retention features

---

#### 21. Progressive Web App (PWA)
**Coverage: 0 / 20 sites (0%)**

Add a `manifest.webmanifest` and a minimal service worker so the site is installable as a home-screen app and works offline (using cached static pages). Directly competes with the Play Store apps that appear in the keyword rankings (ranks #3, #4, #21).

**Implementation**: Astro's `@astrojs/service-worker` integration or manual `public/sw.js`.

---

#### 22. Unit Comparison Feature
**Coverage: 0 / 20 sites (0%)**

Select 2–3 units and see them compared side by side with a visual bar chart. E.g., "How does a kilometer compare to a mile and a nautical mile?" Good for educational use cases and shareable.

**Implementation**: A `/compare` route with query params: `/compare?units=km,mi,nmi&value=10`.

---

#### 23. "Did you mean?" / Auto-suggestion
**Coverage: ~5% (unitconverters.net predictive tool)**

When a user types in the converter search bar and makes a typo (e.g. "celcius"), suggest "Celsius". Also: if they select two units from different categories, show a helpful error instead of a wrong result.

---

### 🔧 Technical / Infrastructure improvements

---

#### 24. URL-Based State (Shareable Conversions)
**Coverage**: ~5% — barely implemented anywhere

Make every conversion state shareable. `/convert/length?from=ft&to=m&value=6` opens the converter pre-filled with 6 ft → m. Users can bookmark or share specific conversions.

**Implementation**: On every widget value/unit change, use `history.replaceState()` to update the URL query params. On page load, read params to pre-fill.

---

#### 25. Canonical Unit-Pair Redirect
When a user is on `/convert/length` and selects `ft` and `m`, redirect (or soft-navigate) to `/convert/feet-to-meters` so that specific-pair pages accumulate the SEO benefit of user intent signals.

---

#### 26. Enhanced Schema: SoftwareApplication + VideoObject
**Coverage**: myclicktools.com (the most schema-rich site, rank #27)

Add `SoftwareApplication` schema (alongside existing `WebApplication`) and a `VideoObject` schema if we create an explainer video. The VideoObject schema can trigger video rich results in Google Search.

---

## Summary Priority Matrix

| Priority | Feature | Effort | SEO Impact | UX Impact |
|---|---|---|---|---|
| 🔴 P0 | Unit-pair landing pages (15 top pairs) | Medium | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 🔴 P0 | More categories (Angle, Pressure, Energy) | Low | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 🔴 P0 | URL-based state (shareable links) | Low | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 🔴 P0 | Formula display below result | Low | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 🟠 P1 | Keyboard shortcuts | Low | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| 🟠 P1 | Unit search / searchable dropdown | Medium | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 🟠 P1 | BreadcrumbList + ItemList schema | Low | ⭐⭐⭐⭐ | ⭐ |
| 🟠 P1 | Conversion history (localStorage) | Low | ⭐ | ⭐⭐⭐ |
| 🟠 P1 | Favorites / pinned conversions | Low | ⭐ | ⭐⭐⭐ |
| 🟠 P1 | Print / PDF export | Low | ⭐⭐ | ⭐⭐⭐ |
| 🟡 P2 | Batch / multi-value conversion | Medium | ⭐⭐ | ⭐⭐⭐⭐ |
| 🟡 P2 | Embeddable widget | Medium | ⭐⭐⭐⭐ | ⭐⭐ |
| 🟡 P2 | Developer API endpoint | Low | ⭐⭐⭐ | ⭐⭐ |
| 🟡 P2 | Social share / permalink | Low | ⭐⭐⭐ | ⭐⭐⭐ |
| 🟡 P2 | Unit info popover (ⓘ) | Low | ⭐⭐ | ⭐⭐⭐ |
| 🟡 P2 | Precision slider | Low | ⭐ | ⭐⭐⭐ |
| 🟢 P3 | Multi-language (es, de, fr, pt) | High | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 🟢 P3 | PWA / offline support | Medium | ⭐⭐⭐ | ⭐⭐⭐ |
| 🟢 P3 | Unit comparison view | High | ⭐⭐ | ⭐⭐⭐ |
| 🟢 P3 | Glossary pages per unit | High | ⭐⭐⭐⭐ | ⭐⭐ |
| 🟢 P3 | Natural language input parser | High | ⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## Competitor Quick Reference

| Rank | Site | Perf | SEO | Acc | Schema | H1 | H2 | Words | Internal Links | Ads |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | digitaldutch.com | 88 | 82 | 66 | none | 1 | 0 | 173 | 1 | 0 |
| 2 | unitconverters.net | 99 | 100 | 98 | none | 0 | 0 | 350 | 120 | 0 |
| 6 | unitslab.com | 74 | 100 | 95 | none | 1 | 3 | 829 | 281 | 15 |
| 7 | calculator.net | 99 | 100 | 79 | none | 1 | 0 | 1026 | 33 | 2 |
| 8 | onlineconversion.com | — | — | — | none | 0 | 2 | 537 | 21 | 6 |
| 10 | unitconverterpro.com | — | — | — | none | 1 | 1 | 672 | 27 | 8 |
| 12 | unittoolbox.com | — | — | — | SoftwareApp, FAQPage | 1 | 6 | 927 | 87 | 0 |
| 13 | translatorscafe.com | — | — | — | none | 0 | 0 | 0 | 0 | 0 |
| 15 | theunitconverter.net | — | — | — | none | 1 | 1 | 511 | 0 | 0 |
| 17 | convertworld.com | — | — | — | none | 1 | 9 | 2456 | 182 | 6 |
| 18 | calculatorsoup.com | — | — | — | none | 1 | 7 | 573 | 0 | 1 |
| 19 | unitconversion.org | — | — | — | none | 0 | 0 | 1355 | 0 | 7 |
| 22 | omnicalculator.com | 36 | 100 | 91 | none | 1 | 10 | 11298 | 337 | 0 |
| 23 | convertunits.com | — | — | — | none | 1 | 0 | 3 | 0 | 0 |
| 24 | topunitconverter.com | — | — | — | none | 1 | 3 | 3709 | 0 | 0 |
| 25 | amtake.com | — | — | — | BreadcrumbList | 3 | 74 | 3319 | 5 | 0 |
| 26 | inchcalculator.com | — | — | — | Org, WebPage, Breadcrumb | 1 | 28 | 1889 | 50 | 1 |
| 27 | myclicktools.com | — | — | — | **14 types** (richest) | 1 | 19 | 4200 | 8 | 0 |
| 28 | webtoolrack.com | — | — | — | Org, WebSite, SoftwareApp, FAQPage | 1 | 11 | 1610 | 0 | 0 |
| 30 | unitconvertpro.com | — | — | — | WebSite, WebPage | 1 | 11 | 4206 | 55 | 0 |

**Key insight**: The top-2 ranked sites (digitaldutch, unitconverters.net) have **zero schema markup** and **zero H2 tags**. They rank on domain authority + speed alone. A technically correct new site combining their speed with myclicktools.com's schema depth + omnicalculator.com's content volume would be differentiated against the entire field.

---

*Analysis methodology: Playwright headless Chromium, 1280×900 viewport, domcontentloaded wait + 1.8s settle. June 2025.*
