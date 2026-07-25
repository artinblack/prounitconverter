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

test.describe('Tools batch 2 — pages load & compute', () => {
  const slugs = [
    'css-unit-converter', 'data-transfer-time-calculator', 'percentage-calculator',
    'gpa-calculator', 'fraction-to-decimal-converter', 'scientific-notation-converter',
    'morse-code-translator', 'slug-generator',
  ];

  for (const s of slugs) {
    test(`${s} loads with h1 and no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
      await page.goto(`/tools/${s}`);
      await expect(page.locator('h1')).toBeVisible();
      expect(errors.filter(e => !/favicon|adsbygoogle|gtag|analytics/i.test(e))).toEqual([]);
    });
  }

  test('css unit: 32px → 2rem', async ({ page }) => {
    await page.goto('/tools/css-unit-converter');
    await page.fill('#css-px', '32');
    await expect(page.locator('#css-rem')).toHaveValue('2');
  });

  test('download time: 1 GB @ 8 Mbps → 16m 40s', async ({ page }) => {
    await page.goto('/tools/data-transfer-time-calculator');
    await page.fill('#dt-size', '1');
    await page.selectOption('#dt-size-unit', '1e9');
    await page.fill('#dt-speed', '8');
    await page.selectOption('#dt-speed-unit', 'mbps');
    await expect(page.locator('#dt-out')).toHaveText('16m 40s');
  });

  test('percentage: 20% of 150 = 30', async ({ page }) => {
    await page.goto('/tools/percentage-calculator');
    await expect(page.locator('#pc1-out')).toHaveText('30');
  });

  test('gpa: three A / 3-credit rows = 4.00', async ({ page }) => {
    await page.goto('/tools/gpa-calculator');
    await expect(page.locator('#gpa-out')).toHaveText('4.00');
  });

  test('fraction: 3/4 → 0.75', async ({ page }) => {
    await page.goto('/tools/fraction-to-decimal-converter');
    await expect(page.locator('#fd-out')).toHaveText('0.75');
  });

  test('scientific: 0.00042 → 4.2e-4', async ({ page }) => {
    await page.goto('/tools/scientific-notation-converter');
    await page.fill('#sn-input', '0.00042');
    await expect(page.locator('#sn-e')).toHaveText('4.2e-4');
  });

  test('morse: SOS → ... --- ...', async ({ page }) => {
    await page.goto('/tools/morse-code-translator');
    await page.fill('#mc-input', 'SOS');
    await expect(page.locator('#mc-output')).toHaveValue('... --- ...');
  });

  test('slug: "My First Blog Post!" → my-first-blog-post', async ({ page }) => {
    await page.goto('/tools/slug-generator');
    await page.fill('#sg-input', 'My First Blog Post!');
    await expect(page.locator('#sg-out')).toHaveText('my-first-blog-post');
  });
});
