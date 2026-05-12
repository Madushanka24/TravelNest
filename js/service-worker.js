const CACHE_NAME = "travelnest-v1";

const urlsToCache = [

  "/",
  "/index.html",
  "/explorer.html",
  "/budget.html",
  "/generator.html",
  "/mood.html",
  "/feedback.html",

  "/css/style.css",
  "/css/responsive.css",
  "/css/animations.css",

  "/js/app.js",
  "/js/destinations.js",
  "/js/utils.js"

];



// INSTALL

self.addEventListener("install", (event) => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then((cache) => {

        return cache.addAll(urlsToCache);

      })

  );

});



// FETCH

self.addEventListener("fetch", (event) => {

  event.respondWith(

    caches.match(event.request)

      .then((response) => {

        return response || fetch(event.request);

      })

  );

});