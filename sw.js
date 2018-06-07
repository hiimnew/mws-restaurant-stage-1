const CACHE_NAME = 'mws-restaurant-apps-v1';
const CACHE_FILES = [
  '/',
  '/css/styles.css',
  '/css/medium.css',
  '/restaurant.html',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js'
];


self.addEventListener('install', function(e) {
  console.log('Cache installing...');
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(CACHE_FILES);
      })
      .catch(e => {
        console.error('INSTALL FAILS', e);
      })
  );
});


self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request)
      .then(response => {
        // If it's in the cache return that response that matches with request
        if (response) return response;
        // If it's not in the cache search the web
        return fetch(e.request);
      })
      .catch(e => {
        console.error('FETCH FAILS', e);
      })
  )
});