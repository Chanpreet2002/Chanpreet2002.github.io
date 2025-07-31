'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f719c7b288d7d024d767a6d383f14099",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/00/57783b59bcf97c7c7a0b9fb21d71c2adf94720": "6f99320e092e79e039d6528a55b04e14",
".git/objects/07/652946759641c202cb480b5f443a247fa1cce4": "6391a44b3c60b1277c6eaa2ec4733fcb",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/2b824e7f8fc946298bd5ff45e9346c6b734419": "16061407876d47ed5e35a686f951bec7",
".git/objects/20/a56a9f0592867c4955b3022364a682daeda39c": "bdad57e0d4943b84884469ede35d9394",
".git/objects/2a/4032424a84b51f6f70bf054eb0945702621ce9": "17b8f28b846965f8ea270b10f52e5266",
".git/objects/2d/56659e27b13175c48820ec3f0c188c5da2abd9": "a82813a5e2b0a00bc9dc3feef7726ca2",
".git/objects/34/3d9ed9da06139a0254b192aace2403cc6ce62a": "792be622cbd2ff1e0878ceffdaae8399",
".git/objects/3c/ab57987a6ff10c5639fad656fb0fc77ba569c9": "26615fc58a1a7634ff693cc4402cc869",
".git/objects/44/9e5d6e762e6ea8b0d7ffb9181343f991a0dc59": "378a2630b6519e92eb4487adbfb8d35f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/64/10692a2817e4840abeef329ff0fd14b3a0e1da": "4def848f2d319047ec9df35693114b42",
".git/objects/6c/ca642f923226a66a736f651392fdc75a18e815": "c2b27315d49fcfb5fd336a1ce150bb3d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/c11d94b3a0f146006058bc09aaa3ec6e15ccd6": "22ecaf7cc48527efd85e78a748ee4436",
".git/objects/7e/76d2b09785d2a72d5f362c31b906c3b777bb6c": "af141aa753c9893a3ce89243355e44d0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/3ed19c1c4a9bcc0c9a2abc1045c246f7e150b5": "839388e1c48c98a642ff0b0b81dd81ce",
".git/objects/8d/0b81186cb16553dedc21e8132deaf64624f9bd": "3c730e01c3987fe3abe13c7ba743ba95",
".git/objects/8f/e5ccbc30a627d324c1106890cd4bf5c2a4419b": "a25f39218d1da51a1763a8caa27d3855",
".git/objects/95/db171f5b6c264973a523741ec9b9f9e14acc95": "2ee4efdec3b81ba3789bc342a7450c82",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/ef78e23ef3c3690dcdf12e63ed4eba1b2a33bf": "84c3b222fb8269ab8a1a51c1a24f797d",
".git/objects/a0/01fcf81e889813c9f98aa0737d93cba3912282": "4536a455c767520b6b125a188b3879df",
".git/objects/b4/f58ffdce944c8f6a6539e7d12b58a332e01f2b": "d207a7e72cd81cc2fe6ea892f3069b08",
".git/objects/b6/1a1ed6548df8416d20af76e40637ce2f84f840": "f88ad2b5e38a28dc4449f55d7327c2b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cc/14917191f94a1b7b7a20fe584ad3b46d723000": "e82bd1490c4cd00161c94d9d7b8bca9c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/6cfabfb08bc2d3a5c7a3c7b2426787449479c9": "ebd07021dadcb514743c3afe0c153b20",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/baf260cc0087f25ed23ee13f31c02bee9f1da3": "7033fa63a84e5616ef00c047bc116c3b",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/688b06ff72f0ec786751b54e56dbd79f3a0465": "b3f8433b8490996cab7bc33b7b031401",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b143f778b1ee71f1c7c86e8db2fbef18b73f53": "5b3615073246cfec4fea3c1e8313df05",
".git/objects/f4/405e4907f0cb3167e1a593df34eeabfab4da7e": "2399abcf1cd819dacfa6e5192136f55c",
"assets/AssetManifest.bin": "401ba7e2100c86f05b73baf8d889ee07",
"assets/AssetManifest.bin.json": "255300b3a0f8047636e81386841195b4",
"assets/AssetManifest.json": "9c16ec2d52a6c7bbebebe97c3a439dd3",
"assets/assets/icons/blood_pressure.svg": "1f03a9c8a9cc9530af6196ad2ae4794a",
"assets/assets/icons/hemoglobin.svg": "2f9457fc40f2936d46fb5ee06e1e28d9",
"assets/assets/icons/sugar.svg": "5b42beca99ce9e1ea4c31dbbb8f303dc",
"assets/assets/images/hero_bg.jpg": "2b221e86bc788e26a15a32ed676c6f0c",
"assets/assets/images/hero_bg.png": "342ece97001dc023f0b17be752a196e6",
"assets/assets/images/logo.png": "9b8a6a6c2ea87a53a0e2b7fecb971872",
"assets/assets/images/rppg.png": "12676e74ad972dcb6c6295e38968eb53",
"assets/assets/images/technology_demo.jpg": "1d442a4e1f5e5ce7b2482f7831e037e1",
"assets/assets/images/user1.jpg": "602b7b437e4040c33f0f5060057c6f13",
"assets/assets/images/user2.jpg": "274f6c7d2671ed2575c07b5f74008700",
"assets/assets/images/user3.jpg": "561f7971c5fdf22351c11db6a2a07a79",
"assets/assets/images/user4.jpg": "571ecd9ced495b9fb153f21d29890400",
"assets/assets/images/user5.jpg": "1121ddf517575b4a1249721ede9db926",
"assets/assets/images/website_bg.png": "238a276b43422d2bb35e0b7f99f61703",
"assets/assets/images/workflow_demo.gif": "addec03a58ac3a9e53f3b1f0f6a9701e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "364f33cb19f3f8df7cc262851f3d2d37",
"assets/NOTICES": "b820bd2a5ed3e61dbe61dbac704e4f85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dfafb02d0333e05fe435f8c67be7b2f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "eb885505426d83f1d98e7b409ac98cb7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5707231ec13774dd6961a513d353538",
"/": "f5707231ec13774dd6961a513d353538",
"main.dart.js": "438523bdc8b12925941f3625c32916c6",
"manifest.json": "0af814acb98ac6d88ed193a2ebe7e1b3",
"version.json": "b3da3976447a0550107a949ece00dd22"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
