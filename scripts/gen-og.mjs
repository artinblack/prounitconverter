// Generate per-tool Open Graph images (1200×630 PNG) into public/og/.
// Build-time only — uses Playwright (a dev dependency) to rasterize a
// branded HTML card. The published site stays fully static.
//
//   node scripts/gen-og.mjs
//
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync } from 'node:fs';
import { tools } from '../src/lib/tools.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '../public/og');
mkdirSync(OUT_DIR, { recursive: true });

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function card({ icon, name, tagline }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin: 0; box-sizing: border-box; }
    html, body { width: 1200px; height: 630px; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #5956f9 0%, #7c3aed 100%);
      display: flex; align-items: center; justify-content: center; padding: 64px;
    }
    .card {
      background: #ffffff; border-radius: 28px; width: 100%; height: 100%;
      padding: 72px; display: flex; flex-direction: column; justify-content: space-between;
      box-shadow: 0 30px 80px rgba(0,0,0,0.25);
    }
    .top { display: flex; align-items: center; gap: 16px; }
    .badge { display:flex; align-items:center; gap:12px; }
    .logo { width: 44px; height: 44px; border-radius: 12px; background: #5956f9;
      display:flex; align-items:center; justify-content:center; color:#fff; font-size:22px; font-weight:700; }
    .brand { font-size: 26px; font-weight: 600; color: #1a1a2e; letter-spacing: -0.5px; }
    .icon { font-size: 132px; line-height: 1; }
    .name { font-size: 74px; font-weight: 800; color: #12122b; letter-spacing: -1.5px; line-height: 1.05; }
    .tagline { font-size: 32px; color: #55556b; line-height: 1.35; max-width: 900px; }
    .foot { display:flex; align-items:center; justify-content:space-between; }
    .pill { font-size: 24px; color:#5956f9; font-weight:600; background:#eef0ff; padding:10px 22px; border-radius:999px; }
    .url { font-size: 26px; color:#8a8aa0; font-weight:500; }
  </style></head><body>
    <div class="card">
      <div class="top"><div class="badge"><div class="logo">⇄</div><div class="brand">prounitconverter.com</div></div></div>
      <div>
        <div class="icon">${esc(icon)}</div>
        <div class="name">${esc(name)}</div>
      </div>
      <div class="tagline">${esc(tagline)}</div>
      <div class="foot"><div class="pill">Free · No sign-up</div><div class="url">prounitconverter.com/tools</div></div>
    </div>
  </body></html>`;
}

const targets = [
  ...tools.map((t) => ({ slug: t.slug, icon: t.icon, name: t.name, tagline: t.tagline })),
  { slug: 'tools', icon: '🧰', name: 'Free Online Tools & Converters', tagline: 'Color, text, time, numbers and developer converters — fast, private, free.' },
];

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

for (const t of targets) {
  await page.setContent(card(t), { waitUntil: 'networkidle' });
  await page.screenshot({ path: resolve(OUT_DIR, `${t.slug}.png`), type: 'png' });
  console.log(`  ✓ og/${t.slug}.png`);
}

await browser.close();
console.log(`Generated ${targets.length} OG images in public/og/`);
