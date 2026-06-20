// Playwright competitor analysis script
// Run: node scripts/scrape-competitors.js

const { chromium } = require('playwright');

const COMPETITORS = [
  { name: 'unitconverters.net', url: 'https://www.unitconverters.net/', perf: 99, seo: 100, acc: 98, bp: 100 },
  { name: 'digitaldutch.com',   url: 'https://www.digitaldutch.com/unitconverter/', perf: 88, seo: 82, acc: 66, bp: 100 },
  { name: 'omnicalculator.com', url: 'https://www.omnicalculator.com/conversion', perf: 36, seo: 100, acc: 91, bp: 54 },
  { name: 'unitslab.com',       url: 'https://unitslab.com/', perf: 74, seo: 100, acc: 95, bp: 96 },
  { name: 'calculator.net',     url: 'https://www.calculator.net/conversion-calculator.html', perf: 99, seo: 100, acc: 79, bp: 100 },
];

async function analyzeSite(page, site) {
  console.log(`\n──────────────────────────────────`);
  console.log(`Analyzing: ${site.name}`);
  console.log(`──────────────────────────────────`);

  const result = {
    name: site.name,
    url: site.url,
    pagespeed: { perf: site.perf, seo: site.seo, acc: site.acc, bp: site.bp },
    features: {},
    ui: {},
    seo: {},
    content: {},
    categories: [],
    errors: [],
  };

  try {
    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2000);

    // ── BASIC SEO ─────────────────────────────────────────
    result.seo.title = await page.title();
    result.seo.metaDescription = await page.$eval(
      'meta[name="description"]', el => el.getAttribute('content')
    ).catch(() => null);

    result.seo.h1Count = await page.$$eval('h1', els => els.length);
    result.seo.h1Text  = await page.$$eval('h1', els => els.map(e => e.textContent?.trim().slice(0, 80))).catch(() => []);
    result.seo.h2Count = await page.$$eval('h2', els => els.length);
    result.seo.h2Texts = await page.$$eval('h2', els => els.slice(0, 6).map(e => e.textContent?.trim().slice(0, 60))).catch(() => []);

    result.seo.hasCanonical = await page.$('link[rel="canonical"]').then(el => !!el);
    result.seo.hasOgTags    = await page.$('meta[property="og:title"]').then(el => !!el);

    // Schema.org
    const jsonLd = await page.$$eval('script[type="application/ld+json"]', els =>
      els.map(el => {
        try { return JSON.parse(el.textContent || '{}')['@type']; } catch { return null; }
      }).filter(Boolean)
    );
    result.seo.schemaTypes = jsonLd;
    result.seo.hasSchema   = jsonLd.length > 0;

    // ── ADS ───────────────────────────────────────────────
    result.features.hasAds = await page.$('[id*="ad"], [class*="ad-"], [class*=" ad "], ins.adsbygoogle, #google_ads_frame1').then(el => !!el);
    result.features.adCount = await page.$$eval('[id^="div-gpt-ad"], ins.adsbygoogle', els => els.length).catch(() => 0);

    // ── DARK MODE ─────────────────────────────────────────
    result.features.hasDarkMode = await page.evaluate(() => {
      const body = document.body;
      const html = document.documentElement;
      // Check for dark mode toggle button
      const toggleBtn = document.querySelector('[aria-label*="dark"], [aria-label*="theme"], [id*="dark"], [id*="theme"], [class*="dark-mode"], [class*="theme-toggle"]');
      // Check for dark class already applied
      const hasDarkClass = body.classList.contains('dark') || html.classList.contains('dark') || html.dataset.theme === 'dark';
      return !!toggleBtn || hasDarkClass;
    });

    // ── COPY TO CLIPBOARD ─────────────────────────────────
    result.features.hasCopyButton = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button, [role="button"], a'));
      return btns.some(btn => {
        const text = (btn.textContent || '').toLowerCase();
        const label = (btn.getAttribute('aria-label') || '').toLowerCase();
        return text.includes('copy') || label.includes('copy') || btn.classList.toString().toLowerCase().includes('copy');
      });
    });

    // ── SWAP BUTTON ───────────────────────────────────────
    result.features.hasSwapButton = await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('button, [role="button"], svg, span, a'));
      return all.some(el => {
        const text = (el.textContent || '').trim();
        const aria = (el.getAttribute('aria-label') || '').toLowerCase();
        return text === '⇄' || text === '⇆' || text === '↕' || text === '⇅' || text === '↔' ||
          aria.includes('swap') || aria.includes('reverse') || aria.includes('switch') ||
          (el.tagName === 'BUTTON' && text.length < 5 && /[⇄⇆↕⇅↔←→]/.test(text));
      });
    });

    // ── SEARCH/FILTER UNITS ──────────────────────────────
    result.features.hasUnitSearch = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input'));
      return inputs.some(inp => {
        const placeholder = (inp.placeholder || '').toLowerCase();
        const id = (inp.id || '').toLowerCase();
        const name = (inp.name || '').toLowerCase();
        return placeholder.includes('search') || id.includes('search') || name.includes('search') ||
          placeholder.includes('filter') || id.includes('filter');
      });
    });

    // ── FAVORITES / HISTORY ────────────────────────────────
    result.features.hasFavorites = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('favorite') || text.includes('favourite') || text.includes('bookmark') || text.includes('saved');
    });

    result.features.hasHistory = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('history') || text.includes('recent') || text.includes('last used');
    });

    // ── BATCH / MULTI-VALUE ───────────────────────────────
    result.features.hasBatchConversion = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('batch') || text.includes('multiple values') || text.includes('bulk') || text.includes('list of');
    });

    // ── FORMULA DISPLAY ──────────────────────────────────
    result.features.showsFormula = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('formula') || text.includes('how to convert') || document.querySelector('.formula, [class*="formula"]') !== null;
    });

    // ── CONVERSION TABLE ─────────────────────────────────
    result.features.hasConversionTable = await page.evaluate(() => {
      const tables = document.querySelectorAll('table');
      return tables.length > 0;
    });

    // ── EMBEDDABLE WIDGET ────────────────────────────────
    result.features.hasEmbedWidget = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('embed') || text.includes('iframe') || text.includes('widget') || text.includes('api');
    });

    // ── CURRENCY CATEGORY ────────────────────────────────
    result.features.hasCurrency = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('currency') || text.includes('exchange rate') || text.includes('money') || text.includes('usd') || text.includes('eur');
    });

    // ── MOBILE NAV ───────────────────────────────────────
    result.features.hasMobileNav = await page.evaluate(() => {
      return !!(document.querySelector('[class*="hamburger"], [class*="mobile-menu"], [aria-label*="menu"], nav button'));
    });

    // ── LOCALE / AUTO-DETECT ─────────────────────────────
    result.features.hasLocaleDetect = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('metric') && text.includes('imperial') && (text.includes('auto') || text.includes('detect') || text.includes('locale'));
    });

    // ── LIVE/REAL-TIME UPDATE ────────────────────────────
    result.features.hasLiveUpdate = await page.evaluate(() => {
      // Check for input event wiring by looking at script content
      const scripts = Array.from(document.querySelectorAll('script')).map(s => s.textContent || '').join(' ');
      return scripts.includes('oninput') || scripts.includes("'input'") || scripts.includes('"input"') || scripts.includes('keyup') || scripts.includes('onkeyup');
    });

    // ── CATEGORIES ───────────────────────────────────────
    result.categories = await page.evaluate(() => {
      // Look for nav/menu items that might be categories
      const candidates = Array.from(document.querySelectorAll('nav a, .menu a, .sidebar a, [class*="category"] a, [class*="nav"] a'));
      const seen = new Set();
      return candidates
        .map(a => (a.textContent || '').trim())
        .filter(text => text.length > 2 && text.length < 40 && !seen.has(text) && seen.add(text))
        .slice(0, 25);
    });

    // ── NAVIGATION STRUCTURE ─────────────────────────────
    result.ui.navLinks = await page.$$eval('header a, nav a', els =>
      [...new Set(els.map(e => e.textContent?.trim()).filter(t => t && t.length > 1 && t.length < 40))].slice(0, 15)
    ).catch(() => []);

    result.ui.hasSearchBar = await page.$('input[type="search"], input[placeholder*="search" i], input[id*="search" i]').then(el => !!el);
    result.ui.hasStickyHeader = await page.evaluate(() => {
      const header = document.querySelector('header, [class*="header"]');
      if (!header) return false;
      const style = window.getComputedStyle(header);
      return style.position === 'sticky' || style.position === 'fixed';
    });

    // ── ACCESSIBILITY ────────────────────────────────────
    result.ui.inputLabels = await page.$$eval('label', els => els.length);
    result.ui.hasAriaLabels = await page.$$eval('[aria-label]', els => els.length > 0);
    result.ui.hasSkipLink = await page.$('a[href="#main"], a[href="#content"], [class*="skip"]').then(el => !!el);

    // ── CONTENT DEPTH ─────────────────────────────────────
    result.content.wordCount = await page.evaluate(() => {
      const text = document.body.textContent || '';
      return text.split(/\s+/).filter(w => w.length > 2).length;
    });

    result.content.hasFAQ = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('faq') || text.includes('frequently asked') || text.includes('question') && text.includes('answer');
    });

    result.content.hasHowTo = await page.evaluate(() => {
      const text = document.body.textContent?.toLowerCase() || '';
      return text.includes('how to') || text.includes('how do i') || text.includes('steps');
    });

    result.content.internalLinkCount = await page.$$eval('a[href^="/"], a[href^="./"]', els => els.length).catch(() => 0);

    // ── UNIQUE FEATURES (full page text scan) ────────────
    result.content.fullText = await page.evaluate(() =>
      (document.body.textContent || '').replace(/\s+/g, ' ').slice(0, 3000)
    );

    // Screenshot
    await page.screenshot({
      path: `scripts/screenshots/${site.name.replace(/\./g, '_')}.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 900 }
    });
    console.log(`  ✓ Screenshot saved`);

  } catch (err) {
    result.errors.push(String(err).slice(0, 200));
    console.log(`  ✗ Error: ${err.message?.slice(0, 100)}`);
  }

  return result;
}

async function main() {
  const { mkdirSync } = require('fs');
  mkdirSync('scripts/screenshots', { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    locale: 'en-US',
  });

  const results = [];

  for (const site of COMPETITORS) {
    const page = await context.newPage();
    const result = await analyzeSite(page, site);
    results.push(result);
    await page.close();
    await new Promise(r => setTimeout(r, 1500)); // polite delay
  }

  await browser.close();

  // Save raw JSON
  require('fs').writeFileSync('scripts/competitor-data.json', JSON.stringify(results, null, 2));
  console.log('\n✓ Raw data saved to scripts/competitor-data.json');

  // Print summary
  console.log('\n\n══════════════════════════════════════');
  console.log('COMPETITOR FEATURE MATRIX');
  console.log('══════════════════════════════════════');

  const features = [
    ['hasDarkMode',         'Dark Mode'],
    ['hasCopyButton',       'Copy Button'],
    ['hasSwapButton',       'Swap Button'],
    ['hasUnitSearch',       'Search/Filter Units'],
    ['hasFavorites',        'Favorites/Bookmarks'],
    ['hasHistory',          'Conversion History'],
    ['hasBatchConversion',  'Batch Conversion'],
    ['showsFormula',        'Shows Formula'],
    ['hasConversionTable',  'Conversion Table'],
    ['hasEmbedWidget',      'Embed/Widget/API'],
    ['hasCurrency',         'Currency Support'],
    ['hasMobileNav',        'Mobile Nav'],
    ['hasLiveUpdate',       'Live/Real-time Update'],
    ['hasLocaleDetect',     'Locale Auto-detect'],
    ['hasAds',              'Has Ads'],
  ];

  const pad = (s, n) => String(s).padEnd(n);

  console.log(pad('Feature', 28) + results.map(r => pad(r.name.split('.')[0].slice(0,14), 16)).join(''));
  console.log('─'.repeat(28 + results.length * 16));

  for (const [key, label] of features) {
    const row = pad(label, 28) + results.map(r => pad(r.features[key] ? '✓' : '✗', 16)).join('');
    console.log(row);
  }

  console.log('\nSEO / Schema:');
  for (const r of results) {
    console.log(`  ${r.name}: H1×${r.seo.h1Count} H2×${r.seo.h2Count} schema=[${r.seo.schemaTypes?.join(',')}] ads=${r.features.adCount}`);
  }

  console.log('\nCategories detected:');
  for (const r of results) {
    console.log(`  ${r.name} (${r.categories.length}): ${r.categories.slice(0, 8).join(', ')}`);
  }

  console.log('\nWord count:');
  for (const r of results) {
    console.log(`  ${r.name}: ~${r.content.wordCount} words, ${r.content.internalLinkCount} internal links`);
  }

  return results;
}

main().catch(console.error);
