"use strict";

const CACHE_NAME = "explore-together-presentation-v1";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./learning-content.js",
  "./manifest.webmanifest",
  "./assets/icons/favicon.svg",
  "./assets/icons/guide.svg",
  "./assets/icons/icon-180.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((name) => name.startsWith("explore-together-") && name !== CACHE_NAME).map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request.mode === "navigate" ? "./index.html" : event.request, response.clone());
        }
        return response;
      })
      .catch(async (error) => {
        const cached = await caches.match(event.request.mode === "navigate" ? "./index.html" : event.request);
        if (cached) return cached;
        throw error;
      })
  );
});
