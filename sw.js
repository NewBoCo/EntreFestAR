const cacheName = "entrefest-ar-cache";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

if (workbox) {
	console.log("got workbox");
} else {
	console.log("didn't get workbox");
}

workbox.routing.registerRoute(
	/\.js$/,
	new workbox.strategies.NetworkFirst({
		cacheName: cacheName + "-js",
		networkTimeoutSeconds: 5
	})
);

workbox.routing.registerRoute(
	/\.html$/,
	new workbox.strategies.NetworkFirst({
		cacheName: cacheName + "-html",
		networkTimeoutSeconds: 5
	})
);

workbox.routing.registerRoute(
	/\.glb$/,
	new workbox.strategies.NetworkFirst({
		cacheName: cacheName + "-models",
		networkTimeoutSeconds: 5
	})
);

workbox.routing.registerRoute(
	/\.png$/,
	new workbox.strategies.NetworkFirst({
		cacheName: cacheName + "-images",
		networkTimeoutSeconds: 5
	})
);

workbox.precaching.precacheAndRoute([
	{url: "./index.html"},
	{url: "./manifest.json"},
	{url: "./sw.js"}
]);
