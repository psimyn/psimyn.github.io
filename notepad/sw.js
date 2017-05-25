/* eslint-env browser, serviceworker */
importScripts('workbox-sw.prod.v1.0.1.js')

const workboxSW = new self.WorkboxSW()

// these are filled in by WorkboxPlugin in webpack.prod.conf.js
workboxSW.precache([
  {
    "url": "static/css/app.e3c0a8f0c961383dc79775778523da08.css",
    "revision": "52a308ba51def785bf26ecaee9155c37"
  },
  {
    "url": "static/js/app.e219946040efb20821b0.js",
    "revision": "4378fc0b8ff3ace6a6da3e463596e428"
  },
  {
    "url": "static/js/manifest.6cc436bc37be824702f9.js",
    "revision": "b90bbaaaa8a166b86ff7de32f4c822a0"
  },
  {
    "url": "static/js/vendor.b73e983c194c35e7dbd0.js",
    "revision": "5770f73f475423fc03046d4267217608"
  }
])

workboxSW.router.registerRoute(
  /\/($|#.*)/,
  workboxSW.strategies.networkFirst()
)
