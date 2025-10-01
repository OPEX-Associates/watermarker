self.options = {
    "domain": "fenoofaussut.net",
    "zoneId": 175134
}
self.lary = ""
importScripts('https://fenoofaussut.net/act/files/service-worker.min.js?r=sw')

// Additional Monetag configuration for pop-under ads
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
