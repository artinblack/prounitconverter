import { test, expect } from '@playwright/test';

test.describe('Tools — pages load & compute', () => {
  const slugs = [
    'text-case-converter', 'color-converter', 'aspect-ratio-converter',
    'roman-numeral-converter', 'number-to-words-converter', 'unix-timestamp-converter',
    'time-zone-converter', 'base64-converter', 'text-to-binary-converter',
  ];

  test('hub lists all tools', async ({ page }) => {
    await page.goto('/tools');
    for (const s of slugs) {
      await expect(page.locator(`a[href="/tools/${s}"]`).first()).toBeVisible();
    }
  });

  for (const s of slugs) {
    test(`${s} loads with h1 and no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
      await page.goto(`/tools/${s}`);
      await expect(page.locator('h1')).toBeVisible();
      expect(errors.filter(e => !/favicon|adsbygoogle|gtag|analytics/i.test(e))).toEqual([]);
    });
  }

  test('color: FF0000 → rgb(255, 0, 0)', async ({ page }) => {
    await page.goto('/tools/color-converter');
    await page.fill('#cc-hex', '#FF0000');
    await expect(page.locator('#out-rgb')).toHaveText('rgb(255, 0, 0)');
  });

  test('roman: 2024 → MMXXIV', async ({ page }) => {
    await page.goto('/tools/roman-numeral-converter');
    await page.fill('#rn-input', '2024');
    await expect(page.locator('#rn-out')).toHaveText('MMXXIV');
  });

  test('text case: uppercase works', async ({ page }) => {
    await page.goto('/tools/text-case-converter');
    await page.fill('#tc-input', 'hello world');
    await page.click('[data-case="upper"]');
    await expect(page.locator('#tc-output')).toHaveValue('HELLO WORLD');
  });

  test('base64: encode round-trips', async ({ page }) => {
    await page.goto('/tools/base64-converter');
    await page.fill('#b64-input', 'Hello');
    await expect(page.locator('#b64-output')).toHaveValue('SGVsbG8=');
  });

  test('binary: Hi → 01001000 01101001', async ({ page }) => {
    await page.goto('/tools/text-to-binary-converter');
    await page.fill('#tb-input', 'Hi');
    await expect(page.locator('#tb-output')).toHaveValue('01001000 01101001');
  });

  test('aspect ratio: 1920x1080 → 16:9', async ({ page }) => {
    await page.goto('/tools/aspect-ratio-converter');
    await page.fill('#ar-w', '1920');
    await page.fill('#ar-h', '1080');
    await expect(page.locator('#ar-ratio')).toHaveText('16:9');
  });

  test('number to words: 1234 → words', async ({ page }) => {
    await page.goto('/tools/number-to-words-converter');
    await page.fill('#nw-input', '1234');
    await expect(page.locator('#nw-out')).toHaveValue('One thousand two hundred thirty-four');
  });

  test('unix timestamp: 1700000000 decodes to 2023 UTC', async ({ page }) => {
    await page.goto('/tools/unix-timestamp-converter');
    await page.fill('#ts-epoch', '1700000000');
    await expect(page.locator('#ts-utc')).toContainText('2023');
  });
});
