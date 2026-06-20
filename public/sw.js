// Service Worker — Unit Converter
const CACHE_NAME = 'uc-v2';

// Core shell assets to cache on install
const PRECACHE = [
  '/',
  '/convert/length',
  '/convert/weight',
  '/convert/temperature',
  '/convert/volume',
  '/convert/speed',
  '/convert/digital',
  '/convert/time',
  '/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Don't cache cross-origin requests (fonts, currency API)
  if (url.origin !== self.location.origin) return;

  // Network-first for HTML navigation — ensures users always get the latest page,
  // falling back to cache only when offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then(cached => cached || caches.match('/'))
        )
    );
    return;
  }

  // Cache-first for scripts and styles — Astro content-hashes these filenames,
  // so a cache hit is always fresh for the current build
  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        });
      })
    );
  }
});
