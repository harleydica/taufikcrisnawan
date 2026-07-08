if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;((e.src = a), (e.onload = s), document.head.appendChild(e))
        } else ((e = a), importScripts(a), s())
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, c) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[i]) return
    let t = {}
    const r = (e) => a(e, i),
      o = { module: { uri: i }, exports: t, require: r }
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (c(...e), t))
  }
}
define(['./workbox-e9849328'], function (e) {
  'use strict'
  ;(importScripts('fallback-jrswK3apoQnSaTKPoBlt8.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/520-27ce70863393804a.js', revision: '27ce70863393804a' },
        { url: '/_next/static/chunks/571-dbf9f3cd6f13df91.js', revision: 'dbf9f3cd6f13df91' },
        { url: '/_next/static/chunks/579-5e535d6b70c81813.js', revision: '5e535d6b70c81813' },
        { url: '/_next/static/chunks/581-17288c80d862f1b5.js', revision: '17288c80d862f1b5' },
        { url: '/_next/static/chunks/599.cd9b10f7b775818a.js', revision: 'cd9b10f7b775818a' },
        { url: '/_next/static/chunks/623-e9f8119cb4d761bc.js', revision: 'e9f8119cb4d761bc' },
        { url: '/_next/static/chunks/662-9fdc8cca17fc363a.js', revision: '9fdc8cca17fc363a' },
        { url: '/_next/static/chunks/720-0c0fdd5a9f1fb805.js', revision: '0c0fdd5a9f1fb805' },
        { url: '/_next/static/chunks/7914b656-f03238bda540d355.js', revision: 'f03238bda540d355' },
        { url: '/_next/static/chunks/812-752b1b664dbb86ba.js', revision: '752b1b664dbb86ba' },
        { url: '/_next/static/chunks/843-d88c74a375b67888.js', revision: 'd88c74a375b67888' },
        { url: '/_next/static/chunks/874-abd631477b2d2348.js', revision: 'abd631477b2d2348' },
        { url: '/_next/static/chunks/954-1b6f24a4b4012540.js', revision: '1b6f24a4b4012540' },
        { url: '/_next/static/chunks/e7d9e399-e37e197d9356a4eb.js', revision: 'e37e197d9356a4eb' },
        { url: '/_next/static/chunks/framework-0cbe3b56a5f66701.js', revision: '0cbe3b56a5f66701' },
        { url: '/_next/static/chunks/main-6e1667fa33f27c72.js', revision: '6e1667fa33f27c72' },
        { url: '/_next/static/chunks/pages/404-42adf1ceb3a4350b.js', revision: '42adf1ceb3a4350b' },
        { url: '/_next/static/chunks/pages/_app-c5c99ca54a4cdcc4.js', revision: 'c5c99ca54a4cdcc4' },
        { url: '/_next/static/chunks/pages/_error-2d37d6bedced965b.js', revision: '2d37d6bedced965b' },
        { url: '/_next/static/chunks/pages/_offline-0c90194c8422c8c2.js', revision: '0c90194c8422c8c2' },
        { url: '/_next/static/chunks/pages/blog-5bf0d543b53897df.js', revision: '5bf0d543b53897df' },
        { url: '/_next/static/chunks/pages/blog/%5Bslug%5D-c1b882ed842705d8.js', revision: 'c1b882ed842705d8' },
        { url: '/_next/static/chunks/pages/certificate-1db0c2b7b5ea3468.js', revision: '1db0c2b7b5ea3468' },
        { url: '/_next/static/chunks/pages/guestbook-289c576ea2737de3.js', revision: '289c576ea2737de3' },
        { url: '/_next/static/chunks/pages/index-709ff577a4600aa6.js', revision: '709ff577a4600aa6' },
        { url: '/_next/static/chunks/pages/portfolio-4f4db82181219abf.js', revision: '4f4db82181219abf' },
        { url: '/_next/static/chunks/pages/portfolio/%5Bslug%5D-72a1cb1cf2d771eb.js', revision: '72a1cb1cf2d771eb' },
        { url: '/_next/static/chunks/pages/resume-541aff2ae8ee01d4.js', revision: '541aff2ae8ee01d4' },
        { url: '/_next/static/chunks/pages/tags-fca1af721008eaca.js', revision: 'fca1af721008eaca' },
        { url: '/_next/static/chunks/pages/toptracks-a4adbff0f42bc2a0.js', revision: 'a4adbff0f42bc2a0' },
        { url: '/_next/static/chunks/polyfills-42372ed130431b0a.js', revision: '846118c33b2c0e922d7b3a7676f81f6f' },
        { url: '/_next/static/chunks/webpack-bbe64fa8ff5ce2ae.js', revision: 'bbe64fa8ff5ce2ae' },
        { url: '/_next/static/css/40191ec121a53a46.css', revision: '40191ec121a53a46' },
        { url: '/_next/static/jrswK3apoQnSaTKPoBlt8/_buildManifest.js', revision: '82c6f72b159824f95afd863033f70964' },
        { url: '/_next/static/jrswK3apoQnSaTKPoBlt8/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_offline', revision: 'jrswK3apoQnSaTKPoBlt8' },
        { url: '/ads.txt', revision: '515bf1676f95bf32a5c851c072f83cd0' },
        { url: '/apple-touch-icon.png', revision: '5f07eabdecef4e75d617de394c5ca05a' },
        { url: '/blur.svg', revision: '430863afea54b142b39506cacddec9a5' },
        { url: '/browserconfig.xml', revision: '68c9044fa4a08749efb85bb2a4edaede' },
        { url: '/favicon.ico', revision: 'e2eb261ae31b532962da7980b4cb6cec' },
        { url: '/favicon.svg', revision: '8d48a2161a90bcaf33afa1069df873de' },
        { url: '/fonts/inter-var-latin.woff2', revision: '812b3dd29751112389e93387c4f7dd0a' },
        { url: '/icon-192x192.png', revision: 'c5a7ab0f3e662c2d6b37355e38e260fc' },
        { url: '/icon-256x256.png', revision: 'c22b14c9e7abefe70ae9b208a262a561' },
        { url: '/icon-384x384.png', revision: '743afdec4ca18b18e043e13ddb79dc25' },
        { url: '/icon-512x512.png', revision: 'a80c67f64c95bc602c3a982a3d7f9188' },
        { url: '/manifest.json', revision: '9f7239e2e498686fac6f99ec576335c6' },
        { url: '/mstile-150x150.png', revision: 'c1e5b575c03faf33b1a62da2b916224d' },
        { url: '/safari-pinned-tab.svg', revision: '3fd550c8b1f7a3c55c186c974c90e194' },
        { url: '/static/404.svg', revision: '160707598233c594020175ac51a9fa11' },
        { url: '/static/not-found.svg', revision: '516afdb1f3cd0cc503898e5508d9e992' },
        { url: '/static/tags-illustration.svg', revision: '29745d633124a43a52e18ce9894bb109' },
        { url: '/vercel.svg', revision: '26bf2d0adaf1028a4d4c6ee77005e819' }
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
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
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
    ))
})
