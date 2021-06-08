self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'index.html',
      'fox-icon.png',
      'https://raw.githubusercontent.com/3schools/quizgenerator/main/index.js',
      'https://raw.githubusercontent.com/3schools/quizgenerator/main/style.css',
      'https://github.com/3schools/quizgenerator/blob/78c451731486f5a5c374a94649e780759757d0c2/fox1.jpg',
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
