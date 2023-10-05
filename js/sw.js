const PRECACHE = 'precache-v0';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  'index.html',
  './',
  'css/style.css',
  'js/main.js',
  'images/hello-icon-128.png',
  'images/hello-icon-144.png',
  'images/hello-icon-152.png',
  'images/hello-icon-192.png',
  'images/hello-icon-196maskable.png',
  'images/hello-icon-256.png',
  'images/hello-icon-512.png',
  'favicon.ico',
  'sw.js'
];

//the install handler takes care of pre-caching resources we'll always need

self.addEventListener('install',function(event) {
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache){
      return chache.addAll(PRECACHE_URLS):
    })
  );
});

self.addEventListener('activate',event => {
  console.log('Service worker activating ...');
});

//the fetch handler serves responses for same-origin resources from a cache

self.addEventListener('fetch',function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});                   
