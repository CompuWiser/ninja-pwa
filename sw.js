const staticCacheName = 'site-static';
const assets = [
  './',
  './index.html',
  './js/app.js',
  './js/ui.js',
  './css/styles.css',
  './img/dish.png',
  './img/icons/favicon.ico',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
  './manifest.json'
];

// install event
self.addEventListener('install', (evt) => {
  //console.log('service worker installed');

  evt.waitUntil(
    caches
      .open(staticCacheName)
      .then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
  );
});

// activate event
self.addEventListener('activate', (evt) => {
  console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', (evt) => {
  //console.log({ url: evt.request.url, method: evt.request.method });

  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => cacheRes || fetch(evt.request))
  );

});
