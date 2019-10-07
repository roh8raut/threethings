
const filesToCache = [
  "./index.html",
  "./manifest.json",
  "./script.js",
  "./service-worker.js",
  "./style.css"
]

const staticCacheName = "assets-v1";

self.addEventListener("install", function(event){
  console.log("service worker reporting for duty!");
  event.waitUntil(
      caches.open(staticCacheName).then(function(cache){
          return cache.addAll(filesToCache);
      })
  )
})


self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});


self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});