self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'https://helpernetwork.blogspot.com',
      'http://4.bp.blogspot.com/-iv5mn-sqnlA/YL8F5Ehq-6I/AAAAAAAABos/m3Yj-LLaVnceGBgVNy-E2stfLmkr8YPIgCK4BGAYYCw/s1600/ask.png',
      'https://raw.githubusercontent.com/3schools/quizgenerator/main/index.js',
      'https://raw.githubusercontent.com/3schools/quizgenerator/main/style.css',
      'http://4.bp.blogspot.com/-iv5mn-sqnlA/YL8F5Ehq-6I/AAAAAAAABos/m3Yj-LLaVnceGBgVNy-E2stfLmkr8YPIgCK4BGAYYCw/s1600/ask.png',
      'fox2.jpg',
      'fox3.jpg',
      'fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
