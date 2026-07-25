# SEO Playbook — prounitconverter.com

_Last updated: 2026-07-25_

Concrete actions to push rankings, starting with getting the 10 new pages indexed fast.
The new URLs shipped in this batch:

```
/tools
/tools/text-case-converter
/tools/color-converter
/tools/aspect-ratio-converter
/tools/roman-numeral-converter
/tools/number-to-words-converter
/tools/unix-timestamp-converter
/tools/time-zone-converter
/tools/base64-converter
/tools/text-to-binary-converter
```

---

## 1. Google Search Console (do this first — free, ~15 min)

1. **Verify the property** if not already: https://search.google.com/search-console
   - Easiest for Cloudflare: **Domain property** → add the DNS TXT record Google gives you in the
     Cloudflare DNS dashboard. This covers http/https + all subdomains.
2. **Submit the sitemap:** Sitemaps → add `sitemap-index.xml` (Astro generates it at
   `https://prounitconverter.com/sitemap-index.xml`). The new `/tools/*` pages are already included.
3. **Request indexing for the 10 new URLs:** URL Inspection → paste each URL → "Request Indexing".
   Do the hub (`/tools`) first, then each tool. (Google caps ~10–12/day — perfect for this batch.)
4. **Set up monitoring:** after ~1 week, check Performance → filter by page `/tools/` to see
   impressions/queries. Pages sitting at position 5–20 are your best "improve the copy" targets.

## 2. Bing Webmaster Tools + IndexNow (free, fast indexing)

- **Bing Webmaster Tools** (https://www.bing.com/webmasters): you can **import directly from GSC** in
  two clicks. Submit the same sitemap. Bing/DuckDuckGo traffic is a real bonus for utility tools.
- **IndexNow (instant ping to Bing/Yandex/Seznam):** Cloudflare has a **native IndexNow integration** —
  Cloudflare dashboard → your domain → **Caching → (Crawler Hints / IndexNow)** toggle. Turn it on and
  Cloudflare auto-submits changed URLs. This is the single highest-leverage indexing win after GSC.

## 3. On-page SEO — already shipped on the new pages ✓

Each tool page already has: a unique `<title>` + meta description + keywords, a canonical URL,
Open Graph/Twitter tags, a single `<h1>`, 250–450 words of unique copy, a visible FAQ, and
**JSON-LD: SoftwareApplication + BreadcrumbList + HowTo + FAQPage**. Validate a couple with:
- Rich Results Test: https://search.google.com/test/rich-results
- Schema validator: https://validator.schema.org

## 4. Internal linking (compounds authority)

- ✅ Header "Tools" link, footer "Tools" column, homepage "Handy Converters & Tools" section,
  per-page "Related tools", and tool→`/convert` cross-links are all live.
- **Next:** add contextual in-copy links (e.g. the Color Converter body linking to Number Base;
  the Unix Timestamp tool linking to `/convert/time`). Contextual links pass more weight than nav links.

## 5. Core Web Vitals / performance (a moat you already have)

- The site is static + zero-dependency JS → naturally fast. Keep it that way (no chart/UI libraries).
- Check field data monthly: PageSpeed Insights (https://pagespeed.web.dev) and the GSC
  "Core Web Vitals" report. Watch CLS on ad slots — reserve fixed heights for AdSense units.

## 6. Content depth roadmap

- Add "How many X in Y" style FAQ entries to high-traffic converter pairs (feeds FAQPage rich results).
- Consider short guide articles that link down into converter/tool pages (see GROWTH_PRIORITY.md Tier 3).
- For each tool, watch which real queries appear in GSC and fold those exact phrases into the copy/FAQ.

## 7. Backlinks / off-page

- You already launched on **Fazier** (badges in footer). Keep submitting to tool directories:
  AlternativeTo, Product Hunt, SaaSHub, Toolfinder, there's-an-AI-for-that (if you add AI later),
  and niche dev-tool lists on GitHub "awesome" repos (Base64/timestamp tools fit well).
- Shareable tools (Dice Roller, Countdown Timer, Morse) earn organic links — prioritize a few.

## 8. Recommended tools (free unless noted)

| Tool | Use | Cost |
|------|-----|------|
| **Google Search Console** | Indexing, queries, CWV, coverage | Free |
| **Bing Webmaster Tools** | Bing/DDG indexing + free keyword research | Free |
| **Cloudflare IndexNow / Crawler Hints** | Instant URL submission | Free (native) |
| **PageSpeed Insights / Lighthouse** | Performance + CWV | Free |
| **Ahrefs Webmaster Tools (AWT)** | Backlink + site audit for your own verified site | Free tier |
| **Google Keyword Planner** | Volume/ideas (needs a Google Ads account) | Free |
| **Screaming Frog SEO Spider** | Crawl for broken links, titles, canonicals | Free ≤500 URLs |
| **schema.org validator / Rich Results Test** | Validate JSON-LD | Free |
| **Ubersuggest / Keyword Surfer (ext.)** | Quick keyword volume in-browser | Free tier |

## 9. Quick post-deploy checklist

- [ ] `sitemap-index.xml` submitted in GSC and Bing
- [ ] 10 new URLs "Request Indexing" in GSC
- [ ] IndexNow/Crawler Hints toggled on in Cloudflare
- [ ] Rich Results Test passes on 2 tool pages
- [ ] Verify all new pages return HTTP 200 and render (live end-to-end test)
- [ ] Add 3–5 contextual in-copy internal links
- [ ] Submit to 2–3 tool directories
