/**
 * Capture marketing screenshots for tool directory submissions.
 * Run with: npx ts-node scripts/capture-screenshots.ts
 * (requires dev server running: npm run dev)
 *
 * Output: scripts/screenshots/marketing/
 */

import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'http://localhost:4321';
const OUT_DIR = path.join(import.meta.dirname ?? __dirname, 'screenshots', 'marketing');

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();

  // 1 — Desktop light mode
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    // pre-fill a conversion so the result is visible
    await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
    // pick Length category if a selector exists
    const catSelect = page.locator('[data-category-select], select[name="category"]').first();
    if (await catSelect.count()) await catSelect.selectOption({ label: 'Length' });
    const input = page.locator('input[type="number"], input[inputmode="decimal"]').first();
    if (await input.count()) { await input.fill('100'); await page.waitForTimeout(300); }
    await page.screenshot({ path: path.join(OUT_DIR, '1-desktop-light.png'), fullPage: false });
    await page.close();
  }

  // 2 — Desktop dark mode
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    // toggle dark mode via the theme button
    const themeBtn = page.locator('[aria-label*="dark"], [aria-label*="theme"], [data-theme-toggle]').first();
    if (await themeBtn.count()) await themeBtn.click();
    else await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
    await page.waitForTimeout(300);
    const input = page.locator('input[type="number"], input[inputmode="decimal"]').first();
    if (await input.count()) { await input.fill('100'); await page.waitForTimeout(300); }
    await page.screenshot({ path: path.join(OUT_DIR, '2-desktop-dark.png'), fullPage: false });
    await page.close();
  }

  // 3 — Mobile view
  {
    const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const input = page.locator('input[type="number"], input[inputmode="decimal"]').first();
    if (await input.count()) { await input.fill('100'); await page.waitForTimeout(300); }
    await page.screenshot({ path: path.join(OUT_DIR, '3-mobile.png'), fullPage: false });
    await page.close();
  }

  // 4 — Batch mode
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const batchTab = page.locator('[role="tab"]:has-text("Batch"), button:has-text("Batch")').first();
    if (await batchTab.count()) {
      await batchTab.click();
      await page.waitForTimeout(300);
      // fill a few rows
      const rows = page.locator('textarea, [data-batch-input]');
      if (await rows.count()) await rows.first().fill('10\n50\n100\n250');
      await page.waitForTimeout(400);
    }
    await page.screenshot({ path: path.join(OUT_DIR, '4-batch-mode.png'), fullPage: false });
    await page.close();
  }

  // 5 — Category selector open
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    // open category dropdown/combobox
    const catBtn = page.locator('[aria-label*="category"], [data-category-trigger], [aria-haspopup="listbox"]').first();
    if (await catBtn.count()) {
      await catBtn.click();
      await page.waitForTimeout(300);
    }
    await page.screenshot({ path: path.join(OUT_DIR, '5-categories-open.png'), fullPage: false });
    await page.close();
  }

  await browser.close();
  console.log(`Screenshots saved to: ${OUT_DIR}`);
}

main().catch(err => { console.error(err); process.exit(1); });
