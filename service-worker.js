const CACHE_NAME = "prep-ai-cache-v6-remove-login-config";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/auth-ai-config.js",
  "/manifest.json",
  "/pwa-install.js",
  "/icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS).catch(() => null)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => {
    if(key !== CACHE_NAME) return caches.delete(key);
  }))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).then(response => {
      const copy = response.clone();
      if(event.request.url.startsWith(self.location.origin)){
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy).catch(() => null));
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || caches.match("/index.html")))
  );
});
