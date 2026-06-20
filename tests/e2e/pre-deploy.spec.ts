import { test, expect } from '@playwright/test';

// ─── 1. All Categories Load ───────────────────────────────────────────────────

const ALL_CATEGORIES = [
  'length', 'weight', 'temperature', 'area', 'volume', 'speed',
  'digital', 'time', 'currency', 'angle', 'pressure', 'energy',
  'power', 'force', 'voltage', 'cooking', 'numbase',
] as const;

test.describe('All Categories Load', () => {
  for (const cat of ALL_CATEGORIES) {
    test(`/convert/${cat} renders converter widget`, async ({ page }) => {
      await page.goto(`/convert/${cat}`);
      await expect(page.locator('.converter-widget')).toBeVisible({ timeout: 15_000 });
    });
  }
});

// ─── 2. SEO Meta Tags ─────────────────────────────────────────────────────────

test.describe('SEO Meta Tags', () => {
  test('homepage has title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title.length).toBeGreaterThan(5);
  });

  test('homepage has meta description', async ({ page }) => {
    await page.goto('/');
    const desc = page.locator('meta[name="description"]');
    const content = await desc.getAttribute('content');
    expect(content?.length).toBeGreaterThan(20);
  });

  test('homepage has og:title and og:description', async ({ page }) => {
    await page.goto('/');
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDesc  = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogTitle?.length).toBeGreaterThan(5);
    expect(ogDesc?.length).toBeGreaterThan(10);
  });

  test('homepage has canonical link', async ({ page }) => {
    await page.goto('/');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical?.startsWith('http')).toBe(true);
  });

  test('/convert/length title contains "Length"', async ({ page }) => {
    await page.goto('/convert/length');
    const title = await page.title();
    expect(title.toLowerCase()).toContain('length');
  });

  test('/glossary has title and meta description', async ({ page }) => {
    await page.goto('/glossary');
    const title = await page.title();
    const desc  = await page.locator('meta[name="description"]').getAttribute('content');
    expect(title.length).toBeGreaterThan(5);
    expect(desc?.length).toBeGreaterThan(10);
  });
});

// ─── 3. Build Artifacts ───────────────────────────────────────────────────────

test.describe('Build Artifacts', () => {
  test('sitemap-index.xml is accessible', async ({ request }) => {
    const res = await request.get('/sitemap-index.xml');
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text.toLowerCase()).toContain('sitemap');
  });

  test('manifest.webmanifest is accessible and valid', async ({ request }) => {
    const res = await request.get('/manifest.webmanifest');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(typeof body.name).toBe('string');
    expect(Array.isArray(body.icons)).toBe(true);
    expect(body.icons.length).toBeGreaterThan(0);
  });

  test('service worker sw.js is accessible', async ({ request }) => {
    const res = await request.get('/sw.js');
    expect(res.status()).toBe(200);
  });

  test('favicon.ico is accessible', async ({ request }) => {
    const res = await request.get('/favicon.ico');
    expect(res.status()).toBe(200);
  });
});

// ─── 4. Mobile Viewport ───────────────────────────────────────────────────────

test.describe('Mobile Viewport', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('homepage loads on mobile — header and h1 visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main h1').first()).toBeVisible();
  });

  test('converter widget is functional on mobile', async ({ page }) => {
    await page.goto('/convert/length');
    await expect(page.locator('.converter-widget')).toBeVisible();
    await page.locator('.from-value').fill('5');
    const result = await page.locator('.to-value').inputValue();
    expect(Number(result)).toBeGreaterThan(0);
  });

  test('footer is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });
});

// ─── 5. Error Pages ───────────────────────────────────────────────────────────

test.describe('Error Pages', () => {
  test('nonexistent route returns 404 status', async ({ request }) => {
    const res = await request.get('/this-page-does-not-exist-xyz');
    expect(res.status()).toBe(404);
  });

  test('404 page body shows error content', async ({ page }) => {
    await page.goto('/this-page-does-not-exist-xyz', { waitUntil: 'load' });
    const bodyText = (await page.locator('body').textContent()) ?? '';
    expect(bodyText).toMatch(/404|not found/i);
  });
});

// ─── 6. Embed Widgets ─────────────────────────────────────────────────────────

test.describe('Embed Widgets', () => {
  test('/embed/length renders converter widget', async ({ page }) => {
    await page.goto('/embed/length');
    await expect(page.locator('.converter-widget')).toBeVisible({ timeout: 15_000 });
  });

  test('/embed/weight renders converter widget', async ({ page }) => {
    await page.goto('/embed/weight');
    await expect(page.locator('.converter-widget')).toBeVisible({ timeout: 15_000 });
  });
});

// ─── 7. Additional API Pairs ──────────────────────────────────────────────────

test.describe('Additional API Pairs', () => {
  const pairs = ['kg-to-lb', 'km-to-mi', 'c-to-f'] as const;

  for (const pair of pairs) {
    test(`GET /api/convert/${pair}.json returns numeric result`, async ({ request }) => {
      const res  = await request.get(`/api/convert/${pair}.json`);
      expect(res.status()).toBe(200);
      const body = await res.json();
      // factor present for linear pairs; temperature uses examples array instead
      const hasResult = typeof body.factor === 'number' ||
        (Array.isArray(body.examples) && typeof body.examples[0]?.output === 'number');
      expect(hasResult).toBe(true);
    });
  }
});

// ─── 8. Console Errors ────────────────────────────────────────────────────────

test.describe('Console Errors', () => {
  test('no critical JS errors on homepage', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForTimeout(1500);
    const critical = errors.filter(e =>
      !e.includes('favicon') &&
      !e.includes('net::ERR') &&
      !e.includes('Failed to fetch')
    );
    expect(critical).toHaveLength(0);
  });

  test('no critical JS errors on /convert/length', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/convert/length');
    await page.waitForTimeout(1500);
    const critical = errors.filter(e =>
      !e.includes('favicon') &&
      !e.includes('net::ERR') &&
      !e.includes('Failed to fetch')
    );
    expect(critical).toHaveLength(0);
  });
});
