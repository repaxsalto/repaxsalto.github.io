// Service worker mínimo: permite instalar o Repasse Salto como aplicativo. Não guarda dados.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {});
