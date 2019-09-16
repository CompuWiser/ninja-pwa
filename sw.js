// install event
self.addEventListener('install', (evt) => {
  console.log('service worker installed');
});

// activate event
self.addEventListener('activate', (evt) => {
  console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', (evt) => {
  console.log({url: evt.request.url, method: evt.request.method});
});
