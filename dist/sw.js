if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>n(e,l),o={module:{uri:l},exports:a,require:t};s[l]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-7cacf2e9"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/adminOrder.1abdf622.js",revision:null},{url:"assets/celllogo.493fcf2b.png",revision:null},{url:"assets/index.39b78aee.js",revision:null},{url:"assets/index.44feff85.css",revision:null},{url:"assets/index.5665c4ce.css",revision:null},{url:"assets/index.571efbf4.css",revision:null},{url:"assets/index.58a70ae7.js",revision:null},{url:"assets/index.5d65bb3a.js",revision:null},{url:"assets/index.636b2570.js",revision:null},{url:"assets/index.76d535a6.js",revision:null},{url:"assets/index.c14af777.js",revision:null},{url:"assets/index.dac4afd9.js",revision:null},{url:"assets/index.f8a40147.css",revision:null},{url:"assets/nofound.410b4309.svg",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"cellstore.svg",revision:"ac9474f9e5256d1e927d747be21865d3"},{url:"index.html",revision:"aa67e4c17fff1dd093bde636198d90c0"},{url:"playstore-icon.png",revision:"bd36892e3d1275950d2b29aa0d34567a"},{url:"vite.svg",revision:"e8a3497afd2cb29c4a6d5cd5b3edc451"},{url:"playstore-icon.png",revision:"bd36892e3d1275950d2b29aa0d34567a"},{url:"manifest.webmanifest",revision:"2c417c38ad2a6a4674fcc478f35d9ae5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.CacheFirst({cacheName:"react-bootstrap",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fdn2\.gsmarena\.com\/.*/i,new e.CacheFirst({cacheName:"gsm-arena-img",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
