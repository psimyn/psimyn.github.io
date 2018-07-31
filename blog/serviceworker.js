const version = 'v0.01'
const staticCacheName = `${version}-staticFiles`

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then(staticCache => {
      // add these files whenever, not required for activation
      // icons, font,s etc
      staticCache.addAll([

      ])
      // these are needed for sw to function
      return staticCache.addAll([
        'offline.html'
      ])
    })
  )
})

addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    caches.keys()
    .then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== staticCacheName) {
            return caches.delete(cacheName)
          }
        })
      )
    })
    .then(() => {
      // immediately takeover active tabs
      clients.claim()
    })
  )
})

addEventListener('fetch', function (fetchEvent) {
  console.log('blog worker is listening')

  const request = fetchEvent.request

  fetchEvent.respondWith(
    caches.match(request)
    .then(responseFromCache => {
      if (responseFromCache) {
        return responseFromCache
      }
      return fetch(request)
      .catch(error => {
        return  caches.match('offline.html')
      })
    })
  )
})
