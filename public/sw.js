if (!self.define) {
  let e,
    s = {}
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (c, n) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[i]) return
    let t = {}
    const r = (e) => a(e, i),
      o = { module: { uri: i }, exports: t, require: r }
    s[i] = Promise.all(c.map((e) => o[e] || r(e))).then((e) => (n(...e), t))
  }
}
define(['./workbox-e9849328'], function (e) {
  'use strict'
  importScripts('fallback-EortYSfSOECOJeuQDaNWo.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/EortYSfSOECOJeuQDaNWo/_buildManifest.js', revision: 'c1c5b34c7e760bd573401873873da549' },
        { url: '/_next/static/EortYSfSOECOJeuQDaNWo/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/111-c7943b44541d7da2.js', revision: 'c7943b44541d7da2' },
        { url: '/_next/static/chunks/142-3fcf64e8c4a31dec.js', revision: '3fcf64e8c4a31dec' },
        { url: '/_next/static/chunks/183.dc6c50cd1703574a.js', revision: 'dc6c50cd1703574a' },
        { url: '/_next/static/chunks/402-ec8e8eccf6935bd0.js', revision: 'ec8e8eccf6935bd0' },
        { url: '/_next/static/chunks/477-8a651d46bf4fa120.js', revision: '8a651d46bf4fa120' },
        { url: '/_next/static/chunks/4d5f64cc-635cac1725ca49c8.js', revision: '635cac1725ca49c8' },
        { url: '/_next/static/chunks/504-9a6aabe4b80241a5.js', revision: '9a6aabe4b80241a5' },
        { url: '/_next/static/chunks/581-8202a19523e83414.js', revision: '8202a19523e83414' },
        { url: '/_next/static/chunks/655-647bce5b4407d4f7.js', revision: '647bce5b4407d4f7' },
        { url: '/_next/static/chunks/6b8ca423-5cf6370bb67c4f51.js', revision: '5cf6370bb67c4f51' },
        { url: '/_next/static/chunks/751-b6ab58a5f39058f8.js', revision: 'b6ab58a5f39058f8' },
        { url: '/_next/static/chunks/767-54aa5090c79d3ae4.js', revision: '54aa5090c79d3ae4' },
        { url: '/_next/static/chunks/807-896845aac388e244.js', revision: '896845aac388e244' },
        { url: '/_next/static/chunks/818.34f88101bfeafcf7.js', revision: '34f88101bfeafcf7' },
        { url: '/_next/static/chunks/882-e37394745bcc3c8f.js', revision: 'e37394745bcc3c8f' },
        { url: '/_next/static/chunks/framework-0cbe3b56a5f66701.js', revision: '0cbe3b56a5f66701' },
        { url: '/_next/static/chunks/main-9a03e5a4c0376420.js', revision: '9a03e5a4c0376420' },
        { url: '/_next/static/chunks/pages/404-a184aab164b94641.js', revision: 'a184aab164b94641' },
        { url: '/_next/static/chunks/pages/_app-21920d64193489ce.js', revision: '21920d64193489ce' },
        { url: '/_next/static/chunks/pages/_error-7f2abe307ad0d2b0.js', revision: '7f2abe307ad0d2b0' },
        { url: '/_next/static/chunks/pages/_offline-c1736f3448d605b1.js', revision: 'c1736f3448d605b1' },
        { url: '/_next/static/chunks/pages/blog-56ee4510775dfdea.js', revision: '56ee4510775dfdea' },
        { url: '/_next/static/chunks/pages/blog/%5Bslug%5D-c8da1d1075f4785d.js', revision: 'c8da1d1075f4785d' },
        { url: '/_next/static/chunks/pages/certificate-3923d400f8faf948.js', revision: '3923d400f8faf948' },
        { url: '/_next/static/chunks/pages/guestbook-ae821ae16d3c5d46.js', revision: 'ae821ae16d3c5d46' },
        { url: '/_next/static/chunks/pages/index-e37c09f0c3d0485f.js', revision: 'e37c09f0c3d0485f' },
        { url: '/_next/static/chunks/pages/portfolio-92d9bbaa8c85bb82.js', revision: '92d9bbaa8c85bb82' },
        { url: '/_next/static/chunks/pages/portfolio/%5Bslug%5D-ff767b8dbe68742c.js', revision: 'ff767b8dbe68742c' },
        { url: '/_next/static/chunks/pages/resume-037146e4866a0409.js', revision: '037146e4866a0409' },
        { url: '/_next/static/chunks/pages/tags-2ad67fc4f76f749d.js', revision: '2ad67fc4f76f749d' },
        { url: '/_next/static/chunks/pages/toptracks-c3888779edaf9b91.js', revision: 'c3888779edaf9b91' },
        { url: '/_next/static/chunks/polyfills-42372ed130431b0a.js', revision: '846118c33b2c0e922d7b3a7676f81f6f' },
        { url: '/_next/static/chunks/webpack-78e0ab0eb9480e9c.js', revision: '78e0ab0eb9480e9c' },
        { url: '/_next/static/css/e56a325ed1e6c908.css', revision: 'e56a325ed1e6c908' },
        { url: '/_offline', revision: 'EortYSfSOECOJeuQDaNWo' },
        { url: '/ads.txt', revision: '515bf1676f95bf32a5c851c072f83cd0' },
        { url: '/apple-touch-icon.png', revision: '5f07eabdecef4e75d617de394c5ca05a' },
        { url: '/blur.svg', revision: '3af1932958eb25a7fe835cc909926309' },
        { url: '/browserconfig.xml', revision: 'a493ba0aa0b8ec8068d786d7248bb92c' },
        { url: '/favicon.ico', revision: 'e2eb261ae31b532962da7980b4cb6cec' },
        { url: '/favicon.svg', revision: '8d48a2161a90bcaf33afa1069df873de' },
        { url: '/fonts/inter-var-latin.woff2', revision: '812b3dd29751112389e93387c4f7dd0a' },
        { url: '/icon-192x192.png', revision: 'c5a7ab0f3e662c2d6b37355e38e260fc' },
        { url: '/icon-256x256.png', revision: 'c22b14c9e7abefe70ae9b208a262a561' },
        { url: '/icon-384x384.png', revision: '743afdec4ca18b18e043e13ddb79dc25' },
        { url: '/icon-512x512.png', revision: 'a80c67f64c95bc602c3a982a3d7f9188' },
        { url: '/manifest.json', revision: '17bbbe488482e396d6dc23bbf3e10057' },
        { url: '/mstile-150x150.png', revision: 'c1e5b575c03faf33b1a62da2b916224d' },
        { url: '/robots.txt', revision: '651cfc3060833a320bb35b9d7c6ed498' },
        { url: '/safari-pinned-tab.svg', revision: '522620a00fc8a66d21e917b6eea2d07f' },
        { url: '/sitemap-0.xml', revision: 'df7aea80b0652a2e4aba41697334f0db' },
        { url: '/sitemap.xml', revision: 'd3b8b7e473101269c23adc0fd8e57963' },
        { url: '/static/404.svg', revision: '160707598233c594020175ac51a9fa11' },
        { url: '/static/not-found.svg', revision: '516afdb1f3cd0cc503898e5508d9e992' },
        { url: '/static/tags-illustration.svg', revision: '29745d633124a43a52e18ce9894bb109' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: c }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    )
})
