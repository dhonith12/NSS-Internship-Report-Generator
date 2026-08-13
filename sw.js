
    /* Service Worker: caches the whole app so it runs fast and fully offline
       after the site has loaded once. Cache-first for instant loading. */
    var CACHE_NAME = 'nss-report-cache-v1';
    var CACHE_URLS = [
      './',
      './index.html',
      './css/styles.css',
      './js/app.js',
      './js/pdfjs/html2canvas.min.js',
      './js/pdfjs/jspdf.umd.min.js',
      './js/pdfjs/pdf.min.js',
      './js/pdfjs/pdf.worker.min.js'
    ];

    self.addEventListener('install', function (e) {
      e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
          return Promise.all(CACHE_URLS.map(function (u) {
            return fetch(u).then(function (res) {
              if (res && res.ok) { return cache.put(u, res); }
              return undefined;
            }).catch(function () { return undefined; });
          }));
        }).then(function () { return self.skipWaiting(); })
      );
    });

    self.addEventListener('activate', function (e) {
      e.waitUntil(
        caches.keys().then(function (keys) {
          return Promise.all(keys.map(function (k) {
            if (k !== CACHE_NAME) { return caches.delete(k); }
            return undefined;
          }));
        }).then(function () { return self.clients.claim(); })
      );
    });

    self.addEventListener('fetch', function (e) {
      var req = e.request;
      if (req.method !== 'GET') { return; }
      var url = new URL(req.url);
      if (url.origin !== self.location.origin) { return; }
      e.respondWith(
        caches.match(req).then(function (cached) {
          if (cached) { return cached; }
          return fetch(req).then(function (res) {
            if (res && res.ok && res.type === 'basic') {
              var copy = res.clone();
              caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
            }
            return res;
          }).catch(function () {
            return caches.match('./index.html');
          });
        })
      );
    });
