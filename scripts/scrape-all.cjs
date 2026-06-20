// Full 30-site competitor scrape (unit converter websites only)
// node scripts/scrape-all.cjs

const { chromium } = require('playwright');
const fs = require('fs');

const ALL_SITES = [
  // Top-5 already scraped — re-run for full dataset consistency
  { rank: 1,  name: 'digitaldutch.com',       url: 'https://www.digitaldutch.com/unitconverter/' },
  { rank: 2,  name: 'unitconverters.net',      url: 'https://www.unitconverters.net/' },
  { rank: 6,  name: 'unitslab.com',            url: 'https://unitslab.com/' },
  { rank: 7,  name: 'calculator.net',          url: 'https://www.calculator.net/conversion-calculator.html' },
  { rank: 8,  name: 'onlineconversion.com',    url: 'https://www.onlineconversion.com/' },
  { rank: 10, name: 'unitconverterpro.com',    url: 'https://online.unitconverterpro.com/' },
  { rank: 12, name: 'unittoolbox.com',         url: 'https://unittoolbox.com/' },
  { rank: 13, name: 'translatorscafe.com',     url: 'https://www.translatorscafe.com/unit-converter/en-US/' },
  { rank: 15, name: 'theunitconverter.net',    url: 'https://www.theunitconverter.net/' },
  { rank: 17, name: 'convertworld.com',        url: 'https://www.convertworld.com/en/' },
  { rank: 18, name: 'calculatorsoup.com',      url: 'https://www.calculatorsoup.com/calculators/conversions/index.php' },
  { rank: 19, name: 'unitconversion.org',      url: 'http://www.unitconversion.org/' },
  { rank: 22, name: 'omnicalculator.com',      url: 'https://www.omnicalculator.com/conversion' },
  { rank: 23, name: 'convertunits.com',        url: 'https://www.convertunits.com/' },
  { rank: 24, name: 'topunitconverter.com',    url: 'https://topunitconverter.com/' },
  { rank: 25, name: 'amtake.com',              url: 'https://amtake.com/unit-converter/' },
  { rank: 26, name: 'inchcalculator.com',      url: 'https://www.inchcalculator.com/conversion-calculator/' },
  { rank: 27, name: 'myclicktools.com',        url: 'https://myclicktools.com/tools/unit-converter/' },
  { rank: 28, name: 'webtoolrack.com',         url: 'https://webtoolrack.com/unit-converter-all-major-unit-converter/' },
  { rank: 30, name: 'unitconvertpro.com',      url: 'https://unitconvertpro.com/' },
];

async function analyzeSite(page, site) {
  process.stdout.write(`[${String(site.rank).padStart(2,'0')}] ${site.name.padEnd(26)} `);
  const r = { rank: site.rank, name: site.name, url: site.url, features: {}, seo: {}, ui: {}, content: {}, categories: [], errors: [] };

  try {
    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
    await page.waitForTimeout(1800);

    // ── SEO ──────────────────────────────────────────────
    r.seo.title            = await page.title();
    r.seo.metaDescription  = await page.$eval('meta[name="description"]', e => e.content).catch(() => null);
    r.seo.h1Count          = await page.$$eval('h1', es => es.length);
    r.seo.h1Texts          = await page.$$eval('h1', es => es.map(e => e.textContent.trim().slice(0,80)));
    r.seo.h2Count          = await page.$$eval('h2', es => es.length);
    r.seo.h2Texts          = await page.$$eval('h2', es => es.slice(0,8).map(e => e.textContent.trim().slice(0,60)));
    r.seo.h3Count          = await page.$$eval('h3', es => es.length);
    r.seo.hasCanonical     = !!(await page.$('link[rel="canonical"]'));
    r.seo.hasOgTags        = !!(await page.$('meta[property="og:title"]'));
    r.seo.hasTwitterCard   = !!(await page.$('meta[name="twitter:card"]'));
    r.seo.schemaTypes      = await page.$$eval('script[type="application/ld+json"]', els =>
      els.flatMap(el => { try { const j = JSON.parse(el.textContent||'{}'); return [j['@type'] || (j['@graph'] ? j['@graph'].map(x=>x['@type']) : [])].flat(); } catch { return []; } }).filter(Boolean)
    );
    r.seo.robotsMeta       = await page.$eval('meta[name="robots"]', e => e.content).catch(() => null);

    // ── ADS ──────────────────────────────────────────────
    r.features.adCount     = await page.$$eval('ins.adsbygoogle, [id^="div-gpt-ad"], iframe[src*="doubleclick"], [class*="advert"]', es => es.length).catch(() => 0);
    r.features.hasAds      = r.features.adCount > 0;

    // ── DARK MODE ────────────────────────────────────────
    r.features.hasDarkMode = await page.evaluate(() => {
      const toggle = document.querySelector('[aria-label*="dark" i],[aria-label*="theme" i],[id*="dark"],[id*="theme"],[class*="dark-toggle"],[class*="theme-toggle"],[class*="darkmode"],[class*="mode-switch"]');
      const applied = document.documentElement.classList.contains('dark') || document.documentElement.dataset.theme === 'dark';
      const btnText = Array.from(document.querySelectorAll('button')).some(b => /dark|theme|light mode/i.test(b.textContent||'') || /dark|theme/i.test(b.getAttribute('aria-label')||''));
      return !!(toggle || applied || btnText);
    });

    // ── CORE WIDGET FEATURES ─────────────────────────────
    r.features.hasCopyButton = await page.evaluate(() =>
      Array.from(document.querySelectorAll('button,[role="button"],a')).some(el =>
        /copy/i.test(el.textContent||'') || /copy/i.test(el.getAttribute('aria-label')||'')
      )
    );

    r.features.hasSwapButton = await page.evaluate(() => {
      const text = Array.from(document.querySelectorAll('button,[role="button"]')).some(el => {
        const t = (el.textContent||'').trim(); const a = el.getAttribute('aria-label')||'';
        return /swap|reverse|switch|flip/i.test(a) || ['⇄','⇆','↕','⇅','↔'].includes(t) || /swap|reverse/i.test(t);
      });
      return text;
    });

    r.features.hasLiveConvert = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script')).map(s=>s.textContent||'').join(' ');
      return scripts.includes("'input'") || scripts.includes('"input"') || scripts.includes('oninput') || scripts.includes('.addEventListener(') && scripts.includes('keyup');
    });

    r.features.hasUnitSearch = await page.evaluate(() =>
      Array.from(document.querySelectorAll('input')).some(el =>
        /search|filter|find unit/i.test(el.placeholder||'') || /search|filter/i.test(el.id||'') || /search|filter/i.test(el.name||'')
      )
    );

    // ── CONVERSION TABLE ─────────────────────────────────
    r.features.hasConversionTable = await page.evaluate(() => {
      const tables = document.querySelectorAll('table');
      return tables.length > 0;
    });

    // ── HISTORY / FAVORITES ───────────────────────────────
    r.features.hasHistory = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('history') || t.includes('recent conversion') || t.includes('last used');
    });

    r.features.hasFavorites = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      const el = document.querySelectorAll('[class*="favorite"],[class*="bookmark"],[aria-label*="favorite" i],[aria-label*="bookmark" i]');
      return t.includes('favorite') || t.includes('favourite') || t.includes('bookmark') || el.length > 0;
    });

    // ── FORMULA / EXPLANATION ────────────────────────────
    r.features.showsFormula = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('formula') || document.querySelector('.formula,[class*="formula"]') !== null;
    });

    r.features.showsExplanation = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('how to convert') || t.includes('how do you convert') || t.includes('to convert');
    });

    // ── BATCH ────────────────────────────────────────────
    r.features.hasBatchConversion = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('batch') || t.includes('multiple values') || t.includes('bulk conversion');
    });

    // ── EMBED / API ──────────────────────────────────────
    r.features.hasEmbed = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('embed') || t.includes('iframe') || t.includes('widget for your') || t.includes('api for developer');
    });

    r.features.hasAPI = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('api') && (t.includes('developer') || t.includes('json') || t.includes('endpoint'));
    });

    // ── CURRENCY / LIVE RATES ─────────────────────────────
    r.features.hasCurrency = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('currency') || t.includes('exchange rate') || t.includes('forex');
    });

    r.features.hasLiveCurrencyRates = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return (t.includes('live') || t.includes('real-time') || t.includes('real time') || t.includes('updated')) &&
             (t.includes('rate') || t.includes('currency') || t.includes('exchange'));
    });

    // ── LOCALE DETECTION ──────────────────────────────────
    r.features.hasLocaleDetect = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('metric') && t.includes('imperial') && (t.includes('auto') || t.includes('detect') || t.includes('region'));
    });

    // ── MULTI-LANGUAGE ───────────────────────────────────
    r.features.hasMultiLanguage = await page.evaluate(() => {
      const el = document.querySelector('[lang], select[id*="lang"], select[name*="lang"], [class*="language"], [id*="language"]');
      const t = document.body.textContent?.toLowerCase()||'';
      const hreflang = document.querySelector('link[hreflang]');
      return !!(el || hreflang || t.includes('select language'));
    });

    // ── UNIT COUNT ───────────────────────────────────────
    r.features.selectCount = await page.$$eval('select', es => es.length).catch(() => 0);

    // ── FAQ ──────────────────────────────────────────────
    r.features.hasFAQ = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('frequently asked') || t.includes('faq') || document.querySelector('[itemtype*="FAQPage"],[class*="faq"],[id*="faq"]') !== null;
    });

    // ── PRINT / PDF ──────────────────────────────────────
    r.features.hasPrint = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('print') || t.includes('pdf') || document.querySelector('[onclick*="print"],[class*="print-btn"]') !== null;
    });

    // ── SOCIAL SHARING ───────────────────────────────────
    r.features.hasSocialShare = await page.evaluate(() => {
      return !!document.querySelector('[class*="share"],[aria-label*="share" i],[data-action*="share"],[class*="social"]');
    });

    // ── KEYBOARD SHORTCUT ────────────────────────────────
    r.features.hasKeyboardShortcuts = await page.evaluate(() => {
      const t = document.body.textContent?.toLowerCase()||'';
      return t.includes('keyboard shortcut') || t.includes('press enter') || t.includes('hotkey');
    });

    // ── UNIT CATEGORIES DETECTED ─────────────────────────
    r.categories = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('nav a, .menu a, .sidebar a, [class*="categor"] a, [class*="nav-item"] a, ul li a'));
      const seen = new Set();
      return links.map(a => (a.textContent||'').trim()).filter(t => t.length > 1 && t.length < 40 && !seen.has(t) && seen.add(t)).slice(0,30);
    });

    // ── ACCESSIBILITY ────────────────────────────────────
    r.ui.labelCount      = await page.$$eval('label', es => es.length);
    r.ui.ariaLabelCount  = await page.$$eval('[aria-label]', es => es.length);
    r.ui.hasSkipNav      = !!(await page.$('a[href="#main"],a[href="#content"],[class*="skip-link"],[class*="skip-nav"]'));
    r.ui.hasStickyHeader = await page.evaluate(() => {
      const h = document.querySelector('header,[class*="header"],[id*="header"]');
      if (!h) return false;
      const s = window.getComputedStyle(h);
      return s.position === 'sticky' || s.position === 'fixed';
    });

    // ── CONTENT DEPTH ────────────────────────────────────
    r.content.wordCount         = await page.evaluate(() => (document.body.textContent||'').split(/\s+/).filter(w=>w.length>2).length);
    r.content.internalLinkCount = await page.$$eval('a[href^="/"],a[href^="./"]', es => es.length).catch(() => 0);
    r.content.hasFAQ            = r.features.hasFAQ;
    r.content.hasHowTo          = await page.evaluate(() => (document.body.textContent?.toLowerCase()||'').includes('how to convert'));

    // ── WHAT MAKES IT UNIQUE ─────────────────────────────
    // Grab body text snippets for analysis
    r.content.snippets = await page.evaluate(() => {
      const unique = [];
      ['[class*="unique"],[class*="feature"],[class*="about"],[class*="benefit"]'].forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          const t = el.textContent?.trim().slice(0,200);
          if (t && t.length > 20) unique.push(t);
        });
      });
      return unique.slice(0, 5);
    });

    process.stdout.write('✓\n');
  } catch (err) {
    r.errors.push(String(err).slice(0,200));
    process.stdout.write(`✗ ${err.message?.slice(0,50)}\n`);
  }

  return r;
}

async function main() {
  fs.mkdirSync('scripts/screenshots', { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    locale: 'en-US',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
  });

  const results = [];
  console.log('Scraping all 20 unit converter competitors...\n');

  for (const site of ALL_SITES) {
    const page = await context.newPage();
    // Block images/fonts to speed up
    await page.route('**/*.{png,jpg,jpeg,gif,svg,woff,woff2,ttf,eot}', r => r.abort());
    const result = await analyzeSite(page, site);
    results.push(result);
    await page.close();
    await new Promise(r => setTimeout(r, 1000));
  }

  await browser.close();

  fs.writeFileSync('scripts/all-competitor-data.json', JSON.stringify(results, null, 2));
  console.log('\n✓ Saved: scripts/all-competitor-data.json');

  // ── FEATURE MATRIX ───────────────────────────────────
  const featureDefs = [
    ['hasDarkMode',         'Dark Mode'],
    ['hasCopyButton',       'Copy to Clipboard'],
    ['hasSwapButton',       'Swap Button'],
    ['hasLiveConvert',      'Live Conversion'],
    ['hasUnitSearch',       'Unit Search/Filter'],
    ['hasFavorites',        'Favorites/Bookmarks'],
    ['hasHistory',          'Conversion History'],
    ['hasBatchConversion',  'Batch Conversion'],
    ['showsFormula',        'Shows Formula'],
    ['showsExplanation',    'How-to Explanation'],
    ['hasConversionTable',  'Full Conversion Table'],
    ['hasEmbed',            'Embeddable Widget'],
    ['hasAPI',              'Developer API'],
    ['hasCurrency',         'Currency Support'],
    ['hasLiveCurrencyRates','Live Currency Rates'],
    ['hasLocaleDetect',     'Locale Auto-detect'],
    ['hasMultiLanguage',    'Multi-language'],
    ['hasFAQ',              'FAQ Section'],
    ['hasPrint',            'Print/PDF'],
    ['hasSocialShare',      'Social Share'],
    ['hasKeyboardShortcuts','Keyboard Shortcuts'],
    ['hasAds',              'Has Ads'],
  ];

  console.log('\n══════════════════════════════════════════════════════════');
  console.log('FEATURE MATRIX — all 20 scraped sites');
  console.log('══════════════════════════════════════════════════════════');

  const countFor = key => results.filter(r => r.features[key]).length;
  const pct = key => `${Math.round(countFor(key)/results.length*100)}%`;

  console.log('\nFeature                    | Count | %     | Who has it');
  console.log('─'.repeat(80));
  for (const [key, label] of featureDefs) {
    const count = countFor(key);
    const who   = results.filter(r => r.features[key]).map(r => r.name.split('.')[0]).join(', ');
    console.log(`${label.padEnd(26)} | ${String(count).padEnd(5)} | ${pct(key).padEnd(5)} | ${who.slice(0,50)}`);
  }

  console.log('\nSEO gaps:');
  for (const r of results) {
    const schema = r.seo.schemaTypes?.join(',') || 'none';
    console.log(`  [${r.rank}] ${r.name.padEnd(26)} H1:${r.seo.h1Count} H2:${r.seo.h2Count} H3:${r.seo.h3Count} schema:[${schema}] words:${r.content.wordCount} inLinks:${r.content.internalLinkCount}`);
  }

  console.log('\nAds count:');
  for (const r of results) {
    if (r.features.adCount > 0) console.log(`  ${r.name}: ${r.features.adCount} ads`);
  }

  return results;
}

main().catch(console.error);
