if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(function(registration) {
    console.log("Service worker registered successfully!");
  }).catch(function(error) {
    console.log("Service worker failed to be registered with error: ", error);
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open("grandswagerWebsite");
      await cache.add(new Request("offline.html", { cache: "reload" }));
    })()
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open("grandswagerWebsite");
          const cachedResponse = await cache.match("offline.html");
          return cachedResponse;
        }
      })()
    );
  }
});