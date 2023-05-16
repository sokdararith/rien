import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute, } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { NavigationRoute, registerRoute } from 'workbox-routing'

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

// to allow work offline
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('index.html'),
  { denylist: [/^\/backoffice/] },
))

self.skipWaiting()
clientsClaim()
