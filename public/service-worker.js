importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "a4e2271d19eb1f6f93a15e1b7a4e74dd"
  },
  {
    "url": "favicon.ico",
    "revision": "2cab47d9e04d664d93c8d91aec59e812"
  },
  {
    "url": "help/index.html",
    "revision": "db9da5c14763213aef4b61cfed6e034b"
  },
  {
    "url": "index.html",
    "revision": "06f313d7a22626aa9cd26037facd448e"
  },
  {
    "url": "manifest.json",
    "revision": "e224e03f0509ded132de377986406018"
  },
  {
    "url": "offline.html",
    "revision": "0556e117187e3659c7eebe4730dd6594"
  },
  {
    "url": "src/css/app.css",
    "revision": "ffed0d57e450481d115a3e1eaccfe002"
  },
  {
    "url": "src/css/feed.css",
    "revision": "65754f2fbf58456a87da0cc0952b0d8e"
  },
  {
    "url": "src/css/help.css",
    "revision": "81922f16d60bd845fd801a889e6acbd7"
  },
  {
    "url": "src/images/icons/app-icon-144x144.png",
    "revision": "83011e228238e66949f0aa0f28f128ef"
  },
  {
    "url": "src/images/icons/app-icon-192x192.png",
    "revision": "f927cb7f94b4104142dd6e65dcb600c1"
  },
  {
    "url": "src/images/icons/app-icon-256x256.png",
    "revision": "86c18ed2761e15cd082afb9a86f9093d"
  },
  {
    "url": "src/images/icons/app-icon-384x384.png",
    "revision": "fbb29bd136322381cc69165fd094ac41"
  },
  {
    "url": "src/images/icons/app-icon-48x48.png",
    "revision": "45eb5bd6e938c31cb371481b4719eb14"
  },
  {
    "url": "src/images/icons/app-icon-512x512.png",
    "revision": "d42d62ccce4170072b28e4ae03a8d8d6"
  },
  {
    "url": "src/images/icons/app-icon-96x96.png",
    "revision": "56420472b13ab9ea107f3b6046b0a824"
  },
  {
    "url": "src/images/icons/apple-icon-114x114.png",
    "revision": "74061872747d33e4e9f202bdefef8f03"
  },
  {
    "url": "src/images/icons/apple-icon-120x120.png",
    "revision": "abd1cfb1a51ebe8cddbb9ada65cde578"
  },
  {
    "url": "src/images/icons/apple-icon-144x144.png",
    "revision": "b4b4f7ced5a981dcd18cb2dc9c2b215a"
  },
  {
    "url": "src/images/icons/apple-icon-152x152.png",
    "revision": "841f96b69f9f74931d925afb3f64a9c2"
  },
  {
    "url": "src/images/icons/apple-icon-180x180.png",
    "revision": "2e5e6e6f2685236ab6b0c59b0faebab5"
  },
  {
    "url": "src/images/icons/apple-icon-57x57.png",
    "revision": "cc93af251fd66d09b099e90bfc0427a8"
  },
  {
    "url": "src/images/icons/apple-icon-60x60.png",
    "revision": "18b745d372987b94d72febb4d7b3fd70"
  },
  {
    "url": "src/images/icons/apple-icon-72x72.png",
    "revision": "b650bbe358908a2b217a0087011266b5"
  },
  {
    "url": "src/images/icons/apple-icon-76x76.png",
    "revision": "bf10706510089815f7bacee1f438291c"
  },
  {
    "url": "src/images/main-image-lg.jpg",
    "revision": "31b19bffae4ea13ca0f2178ddb639403"
  },
  {
    "url": "src/images/main-image-sm.jpg",
    "revision": "c6bb733c2f39c60e3c139f814d2d14bb"
  },
  {
    "url": "src/images/main-image.jpg",
    "revision": "5c66d091b0dc200e8e89e56c589821fb"
  },
  {
    "url": "src/images/sf-boat.jpg",
    "revision": "0f282d64b0fb306daf12050e812d6a19"
  },
  {
    "url": "src/js/app.js",
    "revision": "ea921aa63fc5500c85761c45e6e95112"
  },
  {
    "url": "src/js/feed.js",
    "revision": "8382dae9cc5218af2fa3807a07b2d3e9"
  },
  {
    "url": "src/js/fetch.js",
    "revision": "a368dece9f9a713eea5f20964679bf1e"
  },
  {
    "url": "src/js/idb.js",
    "revision": "edfbee0bb03a5947b5a680c980ecdc9f"
  },
  {
    "url": "src/js/material.min.js",
    "revision": "e68511951f1285c5cbf4aa510e8a2faf"
  },
  {
    "url": "src/js/promise.js",
    "revision": "b824449b966ea6229ca6d31b53abfcc1"
  },
  {
    "url": "src/js/utility.js",
    "revision": "b599f9f0cd42f41d49c89bb9d15bcb71"
  },
  {
    "url": "sw.js",
    "revision": "750db5504e4e6f1069d7eefba93175d2"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
