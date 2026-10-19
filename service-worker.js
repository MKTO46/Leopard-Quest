const CACHE='leopard-quest-v3-monochrome';
const ASSETS=['./','./index.html','./app.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('leopard-quest-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.open(CACHE).then(async c=>{try{const response=await fetch(e.request);if(response.ok)await c.put(e.request,response.clone());return response}catch(error){const cached=await c.match(e.request);if(cached)return cached;if(e.request.mode==='navigate')return c.match('./index.html');throw error}}))});
