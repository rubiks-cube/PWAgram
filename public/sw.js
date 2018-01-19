self.addEventListener('install',function(event){

	console.log('[Service Worker]Service Worker Installing...',event);
});

self.addEventListener('activate',function(event){

	console.log('[Service Worker]Service Worker Activating...',event);
	return self.clients.claim();//claim() method causes  pages' fetches to be controlled immediately by the service worker without next load
});

self.addEventListener('fetch',function(event){

//console.log('[Service Worker]Service Worker Fetching...',event);
event.respondWith(fetch(event.request));//overriding the response
});