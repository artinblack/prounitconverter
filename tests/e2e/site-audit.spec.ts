import { test, expect, type Page } from '@playwright/test';

// ─── helpers ──────────────────────────────────────────────────────────────────

async function gotoLength(page: Page) {
  await page.goto('/convert/length');
  await page.waitForSelector('.converter-widget');
}

// ─── 1. Navigation & Page Load ────────────────────────────────────────────────

test.describe('Navigation & Page Load', () => {
  test('homepage loads with hero heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main h1').first()).toContainText('Unit Converter');
  });

  test('category nav pills are visible on homepage', async ({ page }) => {
    await page.goto('/');
    const pills = page.locator('.nav-cat-pill');
    expect(await pills.count()).toBeGreaterThan(10);
  });

  test('/convert/length loads with converter widget', async ({ page }) => {
    await gotoLength(page);
    await expect(page.locator('.converter-widget')).toBeVisible();
  });

  test('/convert/ft-to-m unit pair page loads', async ({ page }) => {
    await page.goto('/convert/ft-to-m');
    await expect(page.locator('.converter-widget')).toBeVisible();
  });

  test('/glossary loads with unit index', async ({ page }) => {
    await page.goto('/glossary');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('main h1').first()).toBeVisible();
  });

  test('/glossary/m unit detail page loads', async ({ page }) => {
    await page.goto('/glossary/m');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('main h1').first()).toContainText('Meter');
  });

  test('/compare page loads', async ({ page }) => {
    await page.goto('/compare');
    await expect(page.locator('main')).toBeVisible();
  });

  test('/about page loads', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('main')).toBeVisible();
  });

  test('/contact page loads', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('main')).toBeVisible();
  });

  test('/privacy page loads', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page.locator('main')).toBeVisible();
  });

  test('/terms page loads', async ({ page }) => {
    await page.goto('/terms');
    await expect(page.locator('main')).toBeVisible();
  });

  test('/api documentation page loads', async ({ page }) => {
    await page.goto('/api');
    await expect(page.locator('main')).toBeVisible();
  });

  test('logo link navigates to homepage', async ({ page }) => {
    await gotoLength(page);
    await page.locator('.logo').click();
    // URL sync appends query params on arrival; check pathname only
    await page.waitForFunction(() => new URL(window.location.href).pathname === '/');
    expect(new URL(page.url()).pathname).toBe('/');
  });
});

// ─── 2. Converter Widget — Single Mode ────────────────────────────────────────

test.describe('Converter Widget — Single Mode', () => {
  test('default value of 1 produces a conversion result', async ({ page }) => {
    await gotoLength(page);
    const result = page.locator('.to-value');
    await expect(result).not.toHaveValue('');
  });

  test('changing input value updates the result', async ({ page }) => {
    await gotoLength(page);
    const input  = page.locator('.from-value');
    const result = page.locator('.to-value');

    await input.fill('100');
    await expect(result).not.toHaveValue('');
    const val100 = await result.inputValue();
    expect(Number(val100)).toBeGreaterThan(0);
  });

  test('swap button exchanges from/to units', async ({ page }) => {
    await gotoLength(page);
    const fromCombo = page.locator('.unit-combobox[data-for="from"] .unit-combobox-input');
    const toCombo   = page.locator('.unit-combobox[data-for="to"]   .unit-combobox-input');

    const fromBefore = await fromCombo.inputValue();
    const toBefore   = await toCombo.inputValue();

    await page.locator('.swap-btn').first().click();

    await expect(fromCombo).toHaveValue(toBefore);
    await expect(toCombo).toHaveValue(fromBefore);
  });

  test('reset button restores default value', async ({ page }) => {
    await gotoLength(page);
    const input = page.locator('.from-value');

    await input.fill('9999');
    await page.locator('.reset-btn').click();
    await expect(input).toHaveValue('1');
  });

  test('precision selector changes decimal places in result', async ({ page }) => {
    await gotoLength(page);
    const input    = page.locator('.from-value');
    const result   = page.locator('.to-value');
    const precision = page.locator('.precision-select');

    await input.fill('1');
    await precision.selectOption('8');
    const val8 = await result.inputValue();

    await precision.selectOption('2');
    const val2 = await result.inputValue();

    // 8-decimal result should be longer or equal to 2-decimal result
    expect(val8.length).toBeGreaterThanOrEqual(val2.length);
  });

  test('formula bar shows conversion formula', async ({ page }) => {
    await gotoLength(page);
    await page.locator('.from-value').fill('5');
    const formula = page.locator('.formula-text');
    await expect(formula).not.toHaveText('—');
  });

  test('copy button is visible and clickable', async ({ page }) => {
    await gotoLength(page);
    const copyBtn = page.locator('.copy-btn');
    await expect(copyBtn).toBeVisible();
    // Grant clipboard permission then click
    await page.context().grantPermissions(['clipboard-write']);
    await copyBtn.click();
    // Toast should appear
    await expect(page.locator('.toast')).toContainText('Copied');
  });

  test('share button is visible', async ({ page }) => {
    await gotoLength(page);
    await expect(page.locator('.share-btn')).toBeVisible();
  });
});

// ─── 3. Converter Widget — Batch Mode ─────────────────────────────────────────

test.describe('Converter Widget — Batch Mode', () => {
  test('clicking Batch tab reveals batch panel', async ({ page }) => {
    await gotoLength(page);
    await page.locator('[data-tab="batch"]').click();
    await expect(page.locator('#panel-batch')).toBeVisible();
    await expect(page.locator('#panel-single')).toBeHidden();
  });

  test('batch input produces results for multiple values', async ({ page }) => {
    await gotoLength(page);
    await page.locator('[data-tab="batch"]').click();

    const batchInput  = page.locator('.batch-input');
    const batchOutput = page.locator('.batch-output');

    await batchInput.fill('1\n10\n100');
    const output = await batchOutput.inputValue();
    expect(output.trim().split('\n')).toHaveLength(3);
  });

  test('batch clear button empties input and output', async ({ page }) => {
    await gotoLength(page);
    await page.locator('[data-tab="batch"]').click();
    await page.locator('.batch-input').fill('1\n2\n3');
    await page.locator('.batch-clear-btn').click();
    await expect(page.locator('.batch-input')).toHaveValue('');
    await expect(page.locator('.batch-output')).toHaveValue('');
  });

  test('switching back to Single tab hides batch panel', async ({ page }) => {
    await gotoLength(page);
    await page.locator('[data-tab="batch"]').click();
    await page.locator('[data-tab="single"]').click();
    await expect(page.locator('#panel-single')).toBeVisible();
    await expect(page.locator('#panel-batch')).toBeHidden();
  });
});

// ─── 4. Unit Combobox ──────────────────────────────────────────────────────────

test.describe('Unit Combobox', () => {
  test('clicking from-unit combobox opens the dropdown', async ({ page }) => {
    await gotoLength(page);
    const comboInput = page.locator('.unit-combobox[data-for="from"] .unit-combobox-input');
    await comboInput.click();
    await expect(page.locator('.unit-combobox[data-for="from"] .unit-combobox-list')).toBeVisible();
  });

  test('typing in combobox filters the unit list', async ({ page }) => {
    await gotoLength(page);
    const comboInput = page.locator('.unit-combobox[data-for="from"] .unit-combobox-input');
    await comboInput.click();

    const listBefore = page.locator('.unit-combobox[data-for="from"] .unit-combobox-list li:not([hidden])');
    const countBefore = await listBefore.count();

    await comboInput.fill('km');
    const countAfter = await listBefore.count();
    expect(countAfter).toBeLessThan(countBefore);
  });

  test('selecting a unit from dropdown updates the conversion', async ({ page }) => {
    await gotoLength(page);
    await page.locator('.from-value').fill('1');

    const resultBefore = await page.locator('.to-value').inputValue();

    // Open from combobox and pick "km"
    const comboInput = page.locator('.unit-combobox[data-for="from"] .unit-combobox-input');
    await comboInput.click();
    await page.locator('.unit-combobox[data-for="from"] li[data-unit-id="km"]').click();

    const resultAfter = await page.locator('.to-value').inputValue();
    expect(resultAfter).not.toEqual(resultBefore);
  });
});

// ─── 5. URL State ─────────────────────────────────────────────────────────────

test.describe('URL State', () => {
  test('query params pre-fill the converter', async ({ page }) => {
    await page.goto('/convert/length?from=m&to=ft&value=10');
    await page.waitForSelector('.converter-widget');

    const input = page.locator('.from-value');
    await expect(input).toHaveValue('10');

    const fromUnit = page.locator('.from-unit');
    await expect(fromUnit).toHaveValue('m');

    const toUnit = page.locator('.to-unit');
    await expect(toUnit).toHaveValue('ft');
  });

  test('changing value updates URL query params', async ({ page }) => {
    await gotoLength(page);
    await page.locator('.from-value').fill('42');
    // Wait for URL to reflect the new value (replaceState is async after input event)
    await page.waitForFunction(() => window.location.search.includes('value=42'));
    expect(page.url()).toContain('value=42');
  });
});

// ─── 6. Favorites ─────────────────────────────────────────────────────────────

test.describe('Favorites', () => {
  test('star button toggles to filled star when clicked', async ({ page }) => {
    await gotoLength(page);
    const favBtn = page.locator('.fav-btn');

    await expect(favBtn).toHaveText('☆');
    await favBtn.click();
    await expect(favBtn).toHaveText('★');
  });

  test('star button toggles back to empty when clicked again', async ({ page }) => {
    await gotoLength(page);
    const favBtn = page.locator('.fav-btn');
    await favBtn.click();
    await favBtn.click();
    await expect(favBtn).toHaveText('☆');
  });

  test('favorite persists in localStorage', async ({ page }) => {
    await gotoLength(page);
    await page.locator('.fav-btn').click();

    const favKeys = await page.evaluate(() =>
      Object.keys(localStorage).filter(k => k.startsWith('uc_fav_'))
    );
    expect(favKeys.length).toBeGreaterThan(0);
  });
});

// ─── 7. History ───────────────────────────────────────────────────────────────

test.describe('History', () => {
  test('history section is present in the widget', async ({ page }) => {
    await gotoLength(page);
    await expect(page.locator('.history-drawer')).toBeVisible();
  });

  test('performing a conversion saves an entry to history', async ({ page }) => {
    await gotoLength(page);
    const input = page.locator('.from-value');
    await input.fill('55');
    await input.press('Tab'); // triggers 'change' event which saves history

    // Open history drawer
    await page.locator('.history-toggle').click();
    const items = page.locator('.history-item');
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('clear history button removes all entries', async ({ page }) => {
    await gotoLength(page);
    const input = page.locator('.from-value');
    await input.fill('77');
    await input.press('Tab');

    await page.locator('.history-toggle').click();
    await page.locator('.history-clear-btn').click();
    await expect(page.locator('.history-item')).toHaveCount(0);
  });
});

// ─── 8. Keyboard Shortcuts ────────────────────────────────────────────────────

test.describe('Keyboard Shortcuts', () => {
  test('pressing S swaps units (when focus is not on an input)', async ({ page }) => {
    await gotoLength(page);
    const fromCombo = page.locator('.unit-combobox[data-for="from"] .unit-combobox-input');
    const toCombo   = page.locator('.unit-combobox[data-for="to"]   .unit-combobox-input');

    const fromBefore = await fromCombo.inputValue();
    const toBefore   = await toCombo.inputValue();

    // Focus body so shortcut fires
    await page.locator('body').click();
    await page.keyboard.press('s');

    await expect(fromCombo).toHaveValue(toBefore);
    await expect(toCombo).toHaveValue(fromBefore);
  });

  test('pressing Esc resets the converter', async ({ page }) => {
    await gotoLength(page);
    await page.locator('.from-value').fill('999');
    await page.locator('body').click();
    await page.keyboard.press('Escape');
    await expect(page.locator('.from-value')).toHaveValue('1');
  });

  test('pressing ? opens the keyboard shortcuts help modal', async ({ page }) => {
    await gotoLength(page);
    await page.locator('body').click();
    await page.keyboard.press('?');
    // The help dialog should appear
    await expect(page.locator('dialog[open]')).toBeVisible();
    await expect(page.locator('dialog[open]')).toContainText('Keyboard Shortcuts');
  });
});

// ─── 9. FAQ Accordion ─────────────────────────────────────────────────────────

test.describe('FAQ Accordion', () => {
  test('FAQ questions are present on the homepage', async ({ page }) => {
    await page.goto('/');
    const questions = page.locator('.faq-question');
    expect(await questions.count()).toBeGreaterThan(5);
  });

  test('clicking a FAQ question expands the answer', async ({ page }) => {
    await page.goto('/');
    const firstQuestion = page.locator('.faq-question').first();
    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
    const faqItem = page.locator('.faq-item').first();
    await expect(faqItem).toHaveClass(/open/);
  });

  test('clicking the same question again collapses it', async ({ page }) => {
    await page.goto('/');
    const firstQuestion = page.locator('.faq-question').first();
    await firstQuestion.click();
    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  });
});

// ─── 10. API Endpoints ────────────────────────────────────────────────────────

test.describe('API Endpoints', () => {
  test('GET /api/units.json returns valid JSON with categories', async ({ request }) => {
    const response = await request.get('/api/units.json');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('categories');
    expect(Array.isArray(body.categories)).toBe(true);
    expect(body.categories.length).toBeGreaterThan(10);
  });

  test('GET /api/convert/ft-to-m.json returns a numeric result', async ({ request }) => {
    const response = await request.get('/api/convert/ft-to-m.json');
    expect(response.status()).toBe(200);
    const body = await response.json();
    const hasNumericResult = typeof body.result === 'number' || typeof body.factor === 'number';
    expect(hasNumericResult).toBe(true);
  });
});

// ─── 11. Category Grid & Navigation ───────────────────────────────────────────

test.describe('Category Grid', () => {
  test('category cards are visible on homepage', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.category-card, [href^="/convert/"]').first();
    await expect(cards).toBeVisible();
  });

  test('clicking Length category navigates to /convert/length', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav-cat-pill[href="/convert/length"]').click();
    await expect(page).toHaveURL(/\/convert\/length/);
  });

  test('clicking Weight category navigates to /convert/weight', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav-cat-pill[href="/convert/weight"]').click();
    await expect(page).toHaveURL(/\/convert\/weight/);
  });

  test('clicking Temperature category navigates to /convert/temperature', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav-cat-pill[href="/convert/temperature"]').click();
    await expect(page).toHaveURL(/\/convert\/temperature/);
  });
});

// ─── 12. Theme Toggle ─────────────────────────────────────────────────────────

test.describe('Theme Toggle', () => {
  test('dark mode toggle button is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#theme-toggle')).toBeVisible();
  });

  test('clicking theme toggle switches to dark mode', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await page.locator('#theme-toggle').click();
    await expect(html).toHaveAttribute('data-theme', 'dark');
  });

  test('clicking theme toggle again reverts to light mode', async ({ page }) => {
    await page.goto('/');
    await page.locator('#theme-toggle').click();
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
});

// ─── 13. Header Quick Search ──────────────────────────────────────────────────

test.describe('Header Quick Search', () => {
  test('search input is visible in header', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.header-search-input')).toBeVisible();
  });

  test('searching "km to miles" navigates to length converter', async ({ page }) => {
    await page.goto('/');
    await page.locator('.header-search-input').fill('km to mi');
    await page.locator('.header-search-btn').click();
    await page.waitForURL(/convert\/(length|km-to-mi)/, { timeout: 10_000 });
    expect(page.url()).toMatch(/convert\/(length|km-to-mi)/);
  });
});

// ─── 14. Temperature Converter (formula-based) ────────────────────────────────

test.describe('Temperature Converter', () => {
  test('temperature page loads', async ({ page }) => {
    await page.goto('/convert/temperature');
    await expect(page.locator('.converter-widget')).toBeVisible();
  });

  test('0°C converts to 32°F', async ({ page }) => {
    await page.goto('/convert/temperature?from=c&to=f&value=0');
    await page.waitForSelector('.converter-widget');
    const result = page.locator('.to-value');
    await expect(result).toHaveValue('32');
  });

  test('100°C converts to 212°F', async ({ page }) => {
    await page.goto('/convert/temperature?from=c&to=f&value=100');
    await page.waitForSelector('.converter-widget');
    await expect(page.locator('.to-value')).toHaveValue('212');
  });
});

// ─── 15. Digital Storage Converter ────────────────────────────────────────────

test.describe('Digital Storage Converter', () => {
  test('digital storage page loads', async ({ page }) => {
    await page.goto('/convert/digital');
    await expect(page.locator('.converter-widget')).toBeVisible();
  });

  test('1 GB converts to a positive number of MB', async ({ page }) => {
    await page.goto('/convert/digital?from=GB&to=MB&value=1');
    await page.waitForSelector('.converter-widget');
    const result = await page.locator('.to-value').inputValue();
    expect(Number(result)).toBeGreaterThan(0);
  });
});
