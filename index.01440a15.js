// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJ1LQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "abe7572201440a15";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1Mbvr":[function(require,module,exports,__globalThis) {
var _index = require("../pages/homepage/index");
var _index1 = require("../pages/chatselection/index");
var _index2 = require("../pages/chat/index");
var _router = require("@vaadin/router");
var _apiTs = require("./api.ts");
const listurl = window.location.pathname.split("/");
const idShort = listurl[listurl.length - 1];
// const initURL='/live-chat'
const initURL = '';
window.addEventListener('popstate', (event)=>{
    console.log('The URL changed to: ', window.location.pathname);
    const listurl = window.location.pathname.split("/");
    const idShort = listurl[listurl.length - 1];
    if (window.location.pathname.startsWith(initURL + "/chatrooms")) {
        (0, _apiTs.publicParticipantsLoad)();
        (0, _apiTs.checkRooms)();
        setInterval(()=>{
            if (window.location.pathname.startsWith(initURL + "/chatrooms")) (0, _apiTs.publicParticipantsLoad)();
        }, 3000);
    }
    if (window.location.pathname.startsWith(initURL + "/chat/" + idShort)) window.addEventListener("DOMContentLoaded", ()=>{
        (0, _apiTs.addParticipant)(idShort);
    });
    if (window.location.pathname.startsWith(initURL + "/chat/")) (0, _apiTs.listenMessages)(idShort);
});
if (window.location.pathname.startsWith(initURL + "/chatrooms")) {
    const name = localStorage.getItem("name");
    const color = localStorage.getItem("color");
    if (!name && !color) (0, _router.Router).go("/");
    (0, _apiTs.publicParticipantsLoad)();
    (0, _apiTs.checkRooms)();
    setInterval(()=>{
        if (window.location.pathname.startsWith(initURL + "/chatrooms")) (0, _apiTs.publicParticipantsLoad)();
    }, 3000);
}
if (window.location.pathname.startsWith(initURL + "/chat/" + idShort)) {
    const name = localStorage.getItem("name");
    const color = localStorage.getItem("color");
    if (!name && !color) (0, _router.Router).go("/");
    window.addEventListener("DOMContentLoaded", ()=>{
        (0, _apiTs.addParticipant)(idShort);
    });
}
document.addEventListener("submit", async (event)=>{
    const target = event.target;
    if (target.classList.contains("form-send-msg")) {
        event.preventDefault();
        const inputEl = document.querySelector(".input-send-msg");
        const inputValue = inputEl.value;
        const username = localStorage.getItem("name");
        (0, _apiTs.writeMessages)(username, inputValue);
        inputEl.value = "";
    }
});
document.addEventListener("keydown", function(e) {
    const target = e.target;
    if (target.classList.contains("input-send-msg")) {
        const textarea = document.querySelector(".input-send-msg");
        const inputValue = textarea.value;
        const username = localStorage.getItem("name");
        if (username && e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            (0, _apiTs.writeMessages)(username, inputValue);
            textarea.value = "";
        }
    }
});
if (window.location.pathname.startsWith(initURL + "/chat/")) (0, _apiTs.listenMessages)(idShort);
document.addEventListener("click", async (event)=>{
    const target = event.target;
    if (target.classList.contains("create_private")) {
        event.preventDefault();
        (0, _apiTs.createChatroom)();
    } else if (target.classList.contains("back-button")) {
        event.preventDefault();
        (0, _apiTs.removeParticipant)();
        (0, _router.Router).go(initURL + "/chatrooms");
    } else if (target.classList.contains("public_chat_1")) {
        event.preventDefault();
        const participantsText = document.querySelector(".pc1-participants");
        if (participantsText && participantsText.textContent) {
            const participantsCount = parseInt(participantsText.textContent, 10);
            if (!isNaN(participantsCount) && participantsCount <= 10) {
                const idShort = "22338437";
                (0, _router.Router).go(initURL + "/chat/" + idShort);
                (0, _apiTs.addParticipant)(idShort);
            }
        }
    } else if (target.classList.contains("public_chat_2")) {
        event.preventDefault();
        const participantsText = document.querySelector(".pc2-participants");
        if (participantsText && participantsText.textContent) {
            const participantsCount = parseInt(participantsText.textContent, 10);
            if (!isNaN(participantsCount) && participantsCount <= 10) {
                const idShort = "4f94d8d9";
                (0, _router.Router).go(initURL + "/chat/" + idShort);
                (0, _apiTs.addParticipant)(idShort);
            }
        }
    } else if (target.classList.contains("public_chat_3")) {
        event.preventDefault();
        const participantsText = document.querySelector(".pc3-participants");
        if (participantsText && participantsText.textContent) {
            const participantsCount = parseInt(participantsText.textContent, 10);
            if (!isNaN(participantsCount) && participantsCount <= 10) {
                const idShort = "96479775";
                (0, _router.Router).go(initURL + "/chat/" + idShort);
                (0, _apiTs.addParticipant)(idShort);
            }
        }
    } else if (target.classList.contains("join_private")) {
        event.preventDefault();
        const popupJoinEl = document.querySelector(".popup-container");
        popupJoinEl.innerHTML = `
        <div class="popup-join">
            <h2 class="insert-id">Insert ChatRoom ID to join</h2>
            <form class="join-form">
                <input class="id-input" placeholder="ID: 12345678">
                <div class="id-miss-alert"></div>
                <button class="button-join-chat">Enter ChatRoom </button>
            </form>
            <button type="submit" class="close-x">x</button>
        </div>
        `;
    } else if (target.classList.contains("close-x")) {
        event.preventDefault();
        const popupJoinEl = document.querySelector(".popup-container");
        popupJoinEl.innerHTML = ``;
    } else if (target.classList.contains("button-join-chat")) {
        event.preventDefault();
        const inputElement = document.querySelector(".id-input");
        const idShort = inputElement.value;
        if (idShort.length != 8) {
            const alertEl = document.querySelector(".id-miss-alert");
            alertEl.innerHTML = `<p class="miss-alert-text">The ID must have 8 characters.</p>`;
        } else {
            const test = await (0, _apiTs.listenRoom)(idShort);
            const numPart = test ? Object.keys(test.chatroom.participants).length - 1 : 0;
            if (test != null && numPart < 1) {
                // The room exists and it is not full
                console.log("you entered to the room with the idShort:", idShort);
                (0, _router.Router).go(initURL + "/chat/" + idShort);
                (0, _apiTs.addParticipant)(idShort);
            } else if (numPart == 1) {
                const alertEl = document.querySelector(".id-miss-alert");
                alertEl.innerHTML = `<p class="miss-alert-text">The room is full. Please try again later!</p>`;
            } else {
                const alertEl = document.querySelector(".id-miss-alert");
                alertEl.innerHTML = `<p class="miss-alert-text">The Chatroom does not exist!</p>`;
            }
        }
    }
});

},{"../pages/homepage/index":"cFkfu","../pages/chatselection/index":"dn9HR","../pages/chat/index":"j5R60","@vaadin/router":"edqZL","./api.ts":"hLlcE"}],"cFkfu":[function(require,module,exports,__globalThis) {
var _router = require("@vaadin/router");
var _headerTs = require("../../components/header.ts");
class HomePage extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        this.container = document.createElement("div");
        this.shadowRoot.appendChild(this.container);
        this.container.className = "shadow";
        this.name = localStorage.getItem("name");
        this.warning = ``;
    }
    firstVisit() {
        return this.name === null || undefined;
    }
    containsBadWords(text) {
        const badWords = [
            "ass",
            "nig",
            "whore",
            "dick",
            "hole",
            "bitch",
            "pussy",
            "69",
            "suck",
            "cock",
            "sex",
            "fuck",
            "fagg",
            "puta",
            "puto",
            "nazi",
            "gil",
            "polla",
            "pene",
            "verga",
            "subnor",
            "imbecil",
            "foll",
            "co\xf1i",
            "co\xf1o",
            "vagin",
            "choch",
            "chucha",
            "hdp",
            "moro",
            "null",
            "undefined",
            "raul",
            "Raul",
            "ra\xfal",
            "Ra\xfal"
        ];
        const textLower = text.toLowerCase();
        return badWords.some((word)=>textLower.includes(word));
    }
    connectedCallback() {
        // the router needs to add empty component, so we insert HTML in connectedCallback() that executes after putting the element in the DOM.
        this.render();
    }
    getNiceRandomColor() {
        const min = 100;
        const max = 200;
        const r = Math.floor(Math.random() * (max - min) + min);
        const g = Math.floor(Math.random() * (max - min) + min);
        const b = Math.floor(Math.random() * (max - min) + min);
        return `rgb(${r}, ${g}, ${b})`;
    }
    render() {
        this.container.innerHTML = `
    <style>
    .homepage-body{
        height:100vh;
        width: 100vw;
        background:linear-gradient(to bottom,rgba(114, 232, 222, 0.87) , rgb(12, 129, 74,0.3));
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header-comp{
        margin-bottom:100px;
    }
    h1, h2, p{
        margin: 0;
        color: white;
    }
    div.titles{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
        padding-bottom:30px;
    }
    
    @media (width>600px){
        div.titles{
            flex-direction:row;
        }
    }

    h1{
        font-size:40px;
        -webkit-text-stroke: 0.1px rgb(0,0,0,0.5);
    } 

    @media(width>980px){
        h1{
            font-size:60px;
        }
    }

    div.label-input{
        display:flex;
        justify-content:center;
        margin-bottom:15px;
    }

    label{
        font-size:20px;
        font-weight:bold;
    
    }
    input{
        width:35vW;
        height:30px;
        padding-left:20px;
        border-radius:50px;
    }

    button{
        color:rgb(0,0,0,0.7);
        background-color: rgba(43, 180, 198, 0.62);
        border-radius:50px;
        border:solid 2px rgb(255,255,255,0.5);
        margin-left:5px;
        font-weight:bold;
        font-size:16px;
        height:50px;
        width:180px;
        font-family: "McLaren";

    }

    @media(width<600px){
        .input-button{
            flex-direction:column;
        }
        input{
            width:200px;
        }
    }
    @media(width>980px){
        label{
            font-size:30px;
            margin-bottom:20px;
        }
        input{
            width:400px;
            height:30px;
        }
        button{
            font-size:22px;
            height:55px;
            width:220px;
        }
        
    }

    h2{
        display:flex;
        gap:10px;

    }
    span.name{
        background-color:white;
        color: rgb(39, 160, 176);
        padding-right:10px;
        padding-left:10px;
        // font-style: oblique;
        border-radius:50px;
    }
    form{
        width:100vw;
    }
    .input-button{
        display:flex;
        gap:20px;
        justify-content:center;
        align-items:center;
    }
    div.badwords{
        height:100px;
        width:100vw;
        display:flex;
        justify-content:center;
        padding-top:30px;
    }

    p.warning{
        color: #EA253D;
        opacity:0.7;
        font-size:20px;
        font-weight:bold;
    }
    
    @media(width>980px){
        p.warning{
            font-size:30px;
        }
    }

    .to-chatrooms{
        margin-top:20px;
        color-background:;
    }
    
    .change-name{
        margin-top:20px;
    }

    </style>


    <div class="homepage-body">
    <header-comp></header-comp>
        <div class="titles">
            <h1 class="main_title-welcome">Welcome to </h1>
            <h1 class="main_title-livechat"> Raul's LiveChat</h1>
        </div>
    ${this.firstVisit() ? `<form class="form">
            <div class="label-input">
                <label class="enter_name">Enter your name</label>
            </div> 
            <div class="input-button">
                <input class="input_name" type="text" name="name" placeholder="Name">
                <button class="form_button">Start LiveChat</button>
            </div>
        </form>       
        <div class="badwords">` + this.warning + `</div>
        ` : `<h2 class="subtitle">Welcome back    <span class="name">${this.name}</span>!</h2>    
        <button class="to-chatrooms">Start LiveChat</button>
        <button class="change-name">Change Name</button>
        </div>`}`;
        //set the form 
        const formEl = this.container.querySelector(".form");
        if (formEl) formEl?.addEventListener("submit", (e)=>{
            e.preventDefault();
            const target = e.target;
            const nameInput = target.elements.name.value.trim();
            if (this.containsBadWords(nameInput) || nameInput === "") {
                this.warning = `<p class="warning">Please, use other words as a name.</p>`;
                this.render();
            } else {
                localStorage.setItem("name", nameInput);
                localStorage.setItem("color", this.getNiceRandomColor());
                this.name = nameInput;
                (0, _router.Router).go("/live-chat/chatrooms");
            }
        });
        //button to chatrooms
        const divToChat = this.container.querySelector(".to-chatrooms");
        if (divToChat) divToChat.addEventListener("click", (e)=>{
            e.preventDefault();
            (0, _router.Router).go("/live-chat/chatrooms");
        });
        //button change name
        const buttonDeleteEl = this.container.querySelector(".change-name");
        if (buttonDeleteEl) buttonDeleteEl?.addEventListener("click", (e)=>{
            e.preventDefault();
            const target = e.target;
            localStorage.removeItem("name");
            this.name = null;
            this.render();
        });
    }
}
customElements.define("home-page", HomePage);

},{"@vaadin/router":"edqZL","../../components/header.ts":"h4YWK"}],"edqZL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "amend", ()=>(0, _utilsJs.amend));
parcelHelpers.export(exports, "copyContextWithoutNext", ()=>(0, _utilsJs.copyContextWithoutNext));
parcelHelpers.export(exports, "createLocation", ()=>(0, _utilsJs.createLocation));
parcelHelpers.export(exports, "createRedirect", ()=>(0, _utilsJs.createRedirect));
parcelHelpers.export(exports, "getMatchedPath", ()=>(0, _utilsJs.getMatchedPath));
parcelHelpers.export(exports, "getPathnameForRouter", ()=>(0, _utilsJs.getPathnameForRouter));
parcelHelpers.export(exports, "maybeCall", ()=>(0, _utilsJs.maybeCall));
parcelHelpers.export(exports, "processNewChildren", ()=>(0, _utilsJs.processNewChildren));
parcelHelpers.export(exports, "renderElement", ()=>(0, _utilsJs.renderElement));
var _routerJs = require("./router.js");
parcelHelpers.exportAll(_routerJs, exports);
var _utilsJs = require("./utils.js");

},{"./router.js":"6fym4","./utils.js":"B7B3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fym4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>Router);
var _pathToRegexp = require("path-to-regexp");
var _generateUrlsJs = require("./resolver/generateUrls.js");
var _generateUrlsJsDefault = parcelHelpers.interopDefault(_generateUrlsJs);
var _resolverJs = require("./resolver/resolver.js");
var _resolverJsDefault = parcelHelpers.interopDefault(_resolverJs);
var _routerConfigJs = require("./router-config.js");
var _utilsJs = require("./resolver/utils.js");
var _animateJs = require("./transitions/animate.js");
var _animateJsDefault = parcelHelpers.interopDefault(_animateJs);
var _navigationJs = require("./triggers/navigation.js");
var _utilsJs1 = require("./utils.js");
const MAX_REDIRECT_COUNT = 256;
function prevent() {
    return {
        cancel: true
    };
}
const rootContext = {
    __renderId: -1,
    params: {},
    route: {
        __synthetic: true,
        children: [],
        path: "",
        action () {
            return void 0;
        }
    },
    pathname: "",
    // eslint-disable-next-line @typescript-eslint/require-await
    async next () {
        return 0, _utilsJs.notFoundResult;
    }
};
class Router extends (0, _resolverJsDefault.default) {
    /**
   * Contains read-only information about the current router location:
   * pathname, active routes, parameters. See the
   * [Location type declaration](#/classes/RouterLocation)
   * for more details.
   */ location = (0, _utilsJs1.createLocation)({
        resolver: this
    });
    /**
   * A promise that is settled after the current render cycle completes. If
   * there is no render cycle in progress the promise is immediately settled
   * with the last render cycle result.
   */ ready = Promise.resolve(this.location);
    #addedByRouter = /* @__PURE__ */ new WeakSet();
    #createdByRouter = /* @__PURE__ */ new WeakSet();
    #navigationEventHandler = this.#onNavigationEvent.bind(this);
    #lastStartedRenderId = 0;
    #outlet;
    __previousContext;
    #urlForName;
    #appearingContent = null;
    #disappearingContent = null;
    /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param outlet - a container to render the resolved route
   * @param options - an optional object with options
   */ constructor(outlet, options){
        const baseElement = document.head.querySelector("base");
        const baseHref = baseElement?.getAttribute("href");
        super([], {
            baseUrl: baseHref ? new URL(baseHref, document.URL).href.replace(/[^/]*$/u, "") : void 0,
            ...options,
            resolveRoute: async (context)=>await this.#resolveRoute(context)
        });
        (0, _navigationJs.setNavigationTriggers)(Object.values((0, _navigationJs.DEFAULT_TRIGGERS)));
        this.setOutlet(outlet);
        this.subscribe();
    }
    async #resolveRoute(context) {
        const { route } = context;
        if ((0, _utilsJs.isFunction)(route.children)) {
            let children = await route.children((0, _utilsJs1.copyContextWithoutNext)(context));
            if (!(0, _utilsJs.isFunction)(route.children)) ({ children } = route);
            (0, _utilsJs1.processNewChildren)(children, route);
        }
        const commands = {
            component: (component)=>{
                const element = document.createElement(component);
                this.#createdByRouter.add(element);
                return element;
            },
            prevent,
            redirect: (path)=>(0, _utilsJs1.createRedirect)(context, path)
        };
        return await Promise.resolve().then(async ()=>{
            if (this.#isLatestRender(context)) return await (0, _utilsJs1.maybeCall)(route.action, route, context, commands);
        }).then((result)=>{
            if (result != null && (typeof result === "object" || typeof result === "symbol")) {
                if (result instanceof HTMLElement || result === (0, _utilsJs.notFoundResult) || (0, _utilsJs.isObject)(result) && "redirect" in result) return result;
            }
            if ((0, _utilsJs.isString)(route.redirect)) return commands.redirect(route.redirect);
        }).then((result)=>{
            if (result != null) return result;
            if ((0, _utilsJs.isString)(route.component)) return commands.component(route.component);
        });
    }
    /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * @remarks
   * This method is automatically invoked first time when creating a new Router
   * instance.
   *
   * @param outlet - the DOM node where the content for the current route is
   * inserted.
   */ setOutlet(outlet) {
        if (outlet) this.#ensureOutlet(outlet);
        this.#outlet = outlet;
    }
    /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @returns the current router outlet (or `undefined`)
   */ getOutlet() {
        return this.#outlet;
    }
    /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths).
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the
   * callback through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow
   * function because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in
   * row.
   *
   * @param routes - a single route or an array of those
   * @param skipRender - configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   */ // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async setRoutes(routes, skipRender = false) {
        this.__previousContext = void 0;
        this.#urlForName = void 0;
        (0, _utilsJs1.ensureRoutes)(routes);
        super.setRoutes(routes);
        if (!skipRender) this.#onNavigationEvent();
        return await this.ready;
    }
    addRoutes(routes) {
        (0, _utilsJs1.ensureRoutes)(routes);
        return super.addRoutes(routes);
    }
    /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Element | DocumentFragment after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param pathnameOrContext - the pathname to render or a context object with
   * a `pathname` property, optional `search` and `hash` properties, and other
   * properties to pass to the resolver.
   * @param shouldUpdateHistory - update browser history with the rendered
   * location
   */ async render(pathnameOrContext, shouldUpdateHistory = false) {
        this.#lastStartedRenderId += 1;
        const renderId = this.#lastStartedRenderId;
        const context = {
            ...rootContext,
            ...(0, _utilsJs.isString)(pathnameOrContext) ? {
                hash: "",
                search: "",
                pathname: pathnameOrContext
            } : pathnameOrContext,
            __renderId: renderId
        };
        this.ready = this.#doRender(context, shouldUpdateHistory);
        return await this.ready;
    }
    async #doRender(context, shouldUpdateHistory) {
        const { __renderId: renderId } = context;
        try {
            const ctx = await this.resolve(context);
            const contextWithChain = await this.#fullyResolveChain(ctx);
            if (!this.#isLatestRender(contextWithChain)) return this.location;
            const previousContext = this.__previousContext;
            if (contextWithChain === previousContext) {
                this.#updateBrowserHistory(previousContext, true);
                return this.location;
            }
            this.location = (0, _utilsJs1.createLocation)(contextWithChain);
            if (shouldUpdateHistory) this.#updateBrowserHistory(contextWithChain, renderId === 1);
            (0, _utilsJs1.fireRouterEvent)("location-changed", {
                router: this,
                location: this.location
            });
            if (contextWithChain.__skipAttach) {
                this.#copyUnchangedElements(contextWithChain, previousContext);
                this.__previousContext = contextWithChain;
                return this.location;
            }
            this.#addAppearingContent(contextWithChain, previousContext);
            const animationDone = this.#animateIfNeeded(contextWithChain);
            this.#runOnAfterEnterCallbacks(contextWithChain);
            this.#runOnAfterLeaveCallbacks(contextWithChain, previousContext);
            await animationDone;
            if (this.#isLatestRender(contextWithChain)) {
                this.#removeDisappearingContent();
                this.__previousContext = contextWithChain;
                return this.location;
            }
        } catch (error) {
            if (renderId === this.#lastStartedRenderId) {
                if (shouldUpdateHistory) this.#updateBrowserHistory(this.context);
                for (const child of this.#outlet?.children ?? [])child.remove();
                this.location = (0, _utilsJs1.createLocation)(Object.assign(context, {
                    resolver: this
                }));
                (0, _utilsJs1.fireRouterEvent)("error", {
                    router: this,
                    error,
                    ...context
                });
                throw error;
            }
        }
        return this.location;
    }
    // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
    // It would contain a 'redirect' route or the first 'component' route that
    // matched the pathname. There might be more child 'component' routes to be
    // resolved and added into the chain. This method would find and add them.
    // `contextBeforeRedirects` is the context containing such a child component
    // route. It's only necessary when this method is called recursively (otherwise
    // it's the same as the 'top of the chain' context).
    //
    // Apart from building the chain of child components, this method would also
    // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
    // and 'redirect' callback results.
    async #fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
        const contextAfterRedirects = await this.#findComponentContextAfterAllRedirects(contextBeforeRedirects);
        const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
        const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
        const matchedPath = (0, _utilsJs1.getPathnameForRouter)((0, _utilsJs1.getMatchedPath)(contextAfterRedirects.chain ?? []), this);
        const isFound = matchedPath === contextAfterRedirects.pathname;
        const findNextContextIfAny = async (context, parent = context.route, prevResult)=>{
            const nextContext2 = await context.next(false, parent, prevResult);
            if (nextContext2 === null || nextContext2 === (0, _utilsJs.notFoundResult)) {
                if (isFound) return context;
                else if (parent.parent != null) return await findNextContextIfAny(context, parent.parent, nextContext2);
                return nextContext2;
            }
            return nextContext2;
        };
        const nextContext = await findNextContextIfAny(contextAfterRedirects);
        if (nextContext == null || nextContext === (0, _utilsJs.notFoundResult)) throw (0, _utilsJs.getNotFoundError)(topOfTheChainContextAfterRedirects);
        return nextContext !== contextAfterRedirects ? await this.#fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : await this.#amendWithOnBeforeCallbacks(contextAfterRedirects);
    }
    async #findComponentContextAfterAllRedirects(context) {
        const { result } = context;
        if (result instanceof HTMLElement) {
            (0, _utilsJs1.renderElement)(context, result);
            return context;
        } else if (result && "redirect" in result) {
            const ctx = await this.#redirect(result.redirect, context.__redirectCount, context.__renderId);
            return await this.#findComponentContextAfterAllRedirects(ctx);
        }
        throw result instanceof Error ? result : new Error((0, _utilsJs.log)(`Invalid route resolution result for path "${context.pathname}". Expected redirect object or HTML element, but got: "${(0, _utilsJs1.logValue)(result)}". Double check the action return value for the route.`));
    }
    async #amendWithOnBeforeCallbacks(contextWithFullChain) {
        return await this.#runOnBeforeCallbacks(contextWithFullChain).then(async (amendedContext)=>{
            if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) return amendedContext;
            return await this.#fullyResolveChain(amendedContext);
        });
    }
    async #runOnBeforeCallbacks(newContext) {
        const previousContext = this.__previousContext ?? {};
        const previousChain = previousContext.chain ?? [];
        const newChain = newContext.chain ?? [];
        let callbacks = Promise.resolve(void 0);
        const redirect = (pathname)=>(0, _utilsJs1.createRedirect)(newContext, pathname);
        newContext.__divergedChainIndex = 0;
        newContext.__skipAttach = false;
        if (previousChain.length) {
            for(let i = 0; i < Math.min(previousChain.length, newChain.length); newContext.__divergedChainIndex++, i++){
                if (previousChain[i].route !== newChain[i].route || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element || !this.#isReusableElement(previousChain[i].element, newChain[i].element)) break;
            }
            newContext.__skipAttach = newChain.length === previousChain.length && newContext.__divergedChainIndex === newChain.length && // Same element
            this.#isReusableElement(newContext.result, previousContext.result);
            if (newContext.__skipAttach) {
                for(let i = newChain.length - 1; i >= 0; i--)callbacks = this.#runOnBeforeLeaveCallbacks(callbacks, newContext, {
                    prevent
                }, previousChain[i]);
                for(let i = 0; i < newChain.length; i++){
                    callbacks = this.#runOnBeforeEnterCallbacks(callbacks, newContext, {
                        prevent,
                        redirect
                    }, newChain[i]);
                    previousChain[i].element.location = (0, _utilsJs1.createLocation)(newContext, previousChain[i].route);
                }
            } else for(let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--)callbacks = this.#runOnBeforeLeaveCallbacks(callbacks, newContext, {
                prevent
            }, previousChain[i]);
        }
        if (!newContext.__skipAttach) for(let i = 0; i < newChain.length; i++){
            if (i < newContext.__divergedChainIndex) {
                if (i < previousChain.length && previousChain[i].element) previousChain[i].element.location = (0, _utilsJs1.createLocation)(newContext, previousChain[i].route);
            } else {
                callbacks = this.#runOnBeforeEnterCallbacks(callbacks, newContext, {
                    prevent,
                    redirect
                }, newChain[i]);
                if (newChain[i].element) newChain[i].element.location = (0, _utilsJs1.createLocation)(newContext, newChain[i].route);
            }
        }
        return await callbacks.then(async (amendmentResult)=>{
            if (amendmentResult && (0, _utilsJs.isObject)(amendmentResult)) {
                if ("cancel" in amendmentResult && this.__previousContext) {
                    this.__previousContext.__renderId = newContext.__renderId;
                    return this.__previousContext;
                }
                if ("redirect" in amendmentResult) return await this.#redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
            }
            return newContext;
        });
    }
    async #runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
        const location = (0, _utilsJs1.createLocation)(newContext);
        let result = await callbacks;
        if (this.#isLatestRender(newContext)) {
            const beforeLeaveFunction = (0, _utilsJs1.amend)("onBeforeLeave", chainElement.element, location, commands, this);
            result = beforeLeaveFunction(result);
        }
        if (!((0, _utilsJs.isObject)(result) && "redirect" in result)) return result;
    }
    async #runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
        const location = (0, _utilsJs1.createLocation)(newContext, chainElement.route);
        const result = await callbacks;
        if (this.#isLatestRender(newContext)) {
            const beforeEnterFunction = (0, _utilsJs1.amend)("onBeforeEnter", chainElement.element, location, commands, this);
            return beforeEnterFunction(result);
        }
    }
    #isReusableElement(element, otherElement) {
        if (element instanceof Element && otherElement instanceof Element) return this.#createdByRouter.has(element) && this.#createdByRouter.has(otherElement) ? element.localName === otherElement.localName : element === otherElement;
        return false;
    }
    #isLatestRender(context) {
        return context.__renderId === this.#lastStartedRenderId;
    }
    async #redirect(redirectData, counter = 0, renderId = 0) {
        if (counter > MAX_REDIRECT_COUNT) throw new Error((0, _utilsJs.log)(`Too many redirects when rendering ${redirectData.from}`));
        return await this.resolve({
            ...rootContext,
            pathname: this.urlForPath(redirectData.pathname, redirectData.params),
            redirectFrom: redirectData.from,
            __redirectCount: counter + 1,
            __renderId: renderId
        });
    }
    #ensureOutlet(outlet = this.#outlet) {
        if (!(outlet instanceof Element || outlet instanceof DocumentFragment)) throw new TypeError((0, _utilsJs.log)(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${outlet})`));
    }
    // eslint-disable-next-line @typescript-eslint/class-methods-use-this
    #updateBrowserHistory({ pathname, search = "", hash = "" }, replace) {
        if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
            const changeState = replace ? "replaceState" : "pushState";
            window.history[changeState](null, document.title, pathname + search + hash);
            window.dispatchEvent(new PopStateEvent("popstate", {
                state: "vaadin-router-ignore"
            }));
        }
    }
    #copyUnchangedElements(context, previousContext) {
        let deepestCommonParent = this.#outlet;
        for(let i = 0; i < (context.__divergedChainIndex ?? 0); i++){
            const unchangedElement = previousContext?.chain?.[i].element;
            if (unchangedElement) {
                if (unchangedElement.parentNode === deepestCommonParent) {
                    context.chain[i].element = unchangedElement;
                    deepestCommonParent = unchangedElement;
                } else break;
            }
        }
        return deepestCommonParent;
    }
    #addAppearingContent(context, previousContext) {
        this.#ensureOutlet();
        this.#removeAppearingContent();
        const deepestCommonParent = this.#copyUnchangedElements(context, previousContext);
        this.#appearingContent = [];
        this.#disappearingContent = Array.from(deepestCommonParent?.children ?? []).filter(// Only remove layout content that was added by router
        (e)=>this.#addedByRouter.has(e) && // Do not remove the result element to avoid flickering
            e !== context.result);
        let parentElement = deepestCommonParent;
        for(let i = context.__divergedChainIndex ?? 0; i < (context.chain?.length ?? 0); i++){
            const elementToAdd = context.chain[i].element;
            if (elementToAdd) {
                parentElement?.appendChild(elementToAdd);
                this.#addedByRouter.add(elementToAdd);
                if (parentElement === deepestCommonParent) this.#appearingContent.push(elementToAdd);
                parentElement = elementToAdd;
            }
        }
    }
    #removeDisappearingContent() {
        if (this.#disappearingContent) for (const element of this.#disappearingContent)element.remove();
        this.#disappearingContent = null;
        this.#appearingContent = null;
    }
    #removeAppearingContent() {
        if (this.#disappearingContent && this.#appearingContent) {
            for (const element of this.#appearingContent)element.remove();
            this.#disappearingContent = null;
            this.#appearingContent = null;
        }
    }
    #runOnAfterLeaveCallbacks(currentContext, targetContext) {
        if (!targetContext?.chain || currentContext.__divergedChainIndex == null) return;
        for(let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--){
            if (!this.#isLatestRender(currentContext)) break;
            const currentComponent = targetContext.chain[i].element;
            if (!currentComponent) continue;
            try {
                const location = (0, _utilsJs1.createLocation)(currentContext);
                (0, _utilsJs1.maybeCall)(currentComponent.onAfterLeave, currentComponent, location, {}, this);
            } finally{
                if (this.#disappearingContent?.includes(currentComponent)) for (const child of currentComponent.children)child.remove();
            }
        }
    }
    #runOnAfterEnterCallbacks(currentContext) {
        if (!currentContext.chain || currentContext.__divergedChainIndex == null) return;
        for(let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++){
            if (!this.#isLatestRender(currentContext)) break;
            const currentComponent = currentContext.chain[i].element;
            if (currentComponent) {
                const location = (0, _utilsJs1.createLocation)(currentContext, currentContext.chain[i].route);
                (0, _utilsJs1.maybeCall)(currentComponent.onAfterEnter, currentComponent, location, {}, this);
            }
        }
    }
    async #animateIfNeeded(context) {
        const from = this.#disappearingContent?.[0];
        const to = this.#appearingContent?.[0];
        const promises = [];
        const { chain = [] } = context;
        let config;
        for(let i = chain.length - 1; i >= 0; i--)if (chain[i].route.animate) {
            config = chain[i].route.animate;
            break;
        }
        if (from && to && config) {
            const leave = (0, _utilsJs.isObject)(config) && config.leave ? config.leave : "leaving";
            const enter = (0, _utilsJs.isObject)(config) && config.enter ? config.enter : "entering";
            promises.push((0, _animateJsDefault.default)(from, leave));
            promises.push((0, _animateJsDefault.default)(to, enter));
        }
        await Promise.all(promises);
        return context;
    }
    /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */ subscribe() {
        window.addEventListener("vaadin-router-go", this.#navigationEventHandler);
    }
    /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */ unsubscribe() {
        window.removeEventListener("vaadin-router-go", this.#navigationEventHandler);
    }
    #onNavigationEvent(event) {
        const { pathname, search, hash } = event instanceof CustomEvent ? event.detail : window.location;
        if ((0, _utilsJs.isString)(this.__normalizePathname(pathname))) {
            if (event?.preventDefault) event.preventDefault();
            this.render({
                pathname,
                search,
                hash
            }, true);
        }
    }
    /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param triggers - navigation triggers
   */ static setTriggers(...triggers) {
        (0, _navigationJs.setNavigationTriggers)(triggers);
    }
    /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @param name - The route name or the route’s `component` name.
   * @param params - Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   */ urlForName(name, params) {
        if (!this.#urlForName) this.#urlForName = (0, _generateUrlsJsDefault.default)(this, {
            cacheKeyProvider (route) {
                return "component" in route && typeof route.component === "string" ? route.component : void 0;
            }
        });
        return (0, _utilsJs1.getPathnameForRouter)(this.#urlForName(name, params ?? void 0), this);
    }
    /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param path - String route path declared in [express.js
   * syntax](https://expressjs.com/en/guide/routing.html#route-paths).
   * @param params - Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   */ urlForPath(path, params) {
        return (0, _utilsJs1.getPathnameForRouter)((0, _pathToRegexp.compile)(path)(params ?? void 0), this);
    }
    /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param path - A new in-app path string, or an URL-like object with
   * `pathname` string property, and optional `search` and `hash` string
   * properties.
   */ static go(path) {
        const { pathname, search, hash } = (0, _utilsJs.isString)(path) ? new URL(path, "http://a") : path;
        return (0, _utilsJs1.fireRouterEvent)("go", {
            pathname,
            search,
            hash
        });
    }
}

},{"path-to-regexp":"kNO2h","./resolver/generateUrls.js":"9D0Ai","./resolver/resolver.js":"jZue6","./router-config.js":"kb4qB","./resolver/utils.js":"9GONv","./transitions/animate.js":"2hgEX","./triggers/navigation.js":"dJjb9","./utils.js":"B7B3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNO2h":[function(require,module,exports,__globalThis) {
/**
 * Tokenize input string.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse a string for the raw tokens.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Compile a string to a template function for the path.
 */ parcelHelpers.export(exports, "compile", ()=>compile);
/**
 * Expose a method for transforming tokens into the path function.
 */ parcelHelpers.export(exports, "tokensToFunction", ()=>tokensToFunction);
/**
 * Create path match function from `path-to-regexp` spec.
 */ parcelHelpers.export(exports, "match", ()=>match);
/**
 * Create a path match function from `path-to-regexp` output.
 */ parcelHelpers.export(exports, "regexpToFunction", ()=>regexpToFunction);
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ parcelHelpers.export(exports, "tokensToRegexp", ()=>tokensToRegexp);
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ parcelHelpers.export(exports, "pathToRegexp", ()=>pathToRegexp);
function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError("Capturing groups are not allowed at ".concat(j));
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function parse(str, options) {
    if (options === void 0) options = {};
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function() {
        var result = "";
        var value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    var isSafe = function(value) {
        for(var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++){
            var char = delimiter_1[_i];
            if (value.indexOf(char) > -1) return true;
        }
        return false;
    };
    var safePattern = function(prefix) {
        var prev = result[result.length - 1];
        var prevText = prefix || (prev && typeof prev === "string" ? prev : "");
        if (prev && !prevText) throw new TypeError("Must have text between two parameters, missing text after \"".concat(prev.name, "\""));
        if (!prevText || isSafe(prevText)) return "[^".concat(escapeString(delimiter), "]+?");
        return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || safePattern(prefix),
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
    if (options === void 0) options = {};
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
    if (options === void 0) options = {};
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        };
        for(var i = 1; i < m.length; i++)_loop_1(i);
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) options = {};
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") route += escapeString(encode(token));
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    } else route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                } else {
                    if (token.modifier === "+" || token.modifier === "*") throw new TypeError("Can not repeat \"".concat(token.name, "\" without a prefix and suffix"));
                    route += "(".concat(token.pattern, ")").concat(token.modifier);
                }
            } else route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
        }
    }
    if (end) {
        if (!strict) route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        if (!isEndDelimited) route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
    return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9D0Ai":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>generateUrls_default);
var _pathToRegexp = require("path-to-regexp");
var _resolverJs = require("./resolver.js");
var _resolverJsDefault = parcelHelpers.interopDefault(_resolverJs);
var _utilsJs = require("./utils.js");
function cacheRoutes(routesByName, route, routes, cacheKeyProvider) {
    const name = route.name ?? cacheKeyProvider?.(route);
    if (name) {
        if (routesByName.has(name)) routesByName.get(name)?.push(route);
        else routesByName.set(name, [
            route
        ]);
    }
    if (Array.isArray(routes)) for (const childRoute of routes){
        childRoute.parent = route;
        cacheRoutes(routesByName, childRoute, childRoute.__children ?? childRoute.children, cacheKeyProvider);
    }
}
function getRouteByName(routesByName, routeName) {
    const routes = routesByName.get(routeName);
    if (routes) {
        if (routes.length > 1) throw new Error(`Duplicate route with name "${routeName}". Try seting unique 'name' route properties.`);
        return routes[0];
    }
    return void 0;
}
function generateUrls(resolver, options = {}) {
    if (!(resolver instanceof (0, _resolverJsDefault.default))) throw new TypeError("An instance of Resolver is expected");
    const cache = /* @__PURE__ */ new Map();
    const routesByName = /* @__PURE__ */ new Map();
    return (routeName, params)=>{
        let route = getRouteByName(routesByName, routeName);
        if (!route) {
            routesByName.clear();
            cacheRoutes(routesByName, resolver.root, resolver.root.__children, options.cacheKeyProvider);
            route = getRouteByName(routesByName, routeName);
            if (!route) throw new Error(`Route "${routeName}" not found`);
        }
        let cached = route.fullPath ? cache.get(route.fullPath) : void 0;
        if (!cached) {
            let fullPath = (0, _utilsJs.getRoutePath)(route);
            let rt = route.parent;
            while(rt){
                const path = (0, _utilsJs.getRoutePath)(rt);
                if (path) fullPath = `${path.replace(/\/$/u, "")}/${fullPath.replace(/^\//u, "")}`;
                rt = rt.parent;
            }
            const tokens = (0, _pathToRegexp.parse)(fullPath);
            const keys = /* @__PURE__ */ Object.create(null);
            for (const item of tokens)if (!(0, _utilsJs.isString)(item)) keys[item.name] = true;
            cached = {
                keys,
                tokens
            };
            cache.set(fullPath, cached);
            route.fullPath = fullPath;
        }
        const toPath = (0, _pathToRegexp.tokensToFunction)(cached.tokens, {
            encode: encodeURIComponent,
            ...options
        });
        let url = toPath(params) || "/";
        if (options.stringifyQueryParams && params) {
            const queryParams = {};
            for (const [key, value] of Object.entries(params))if (!(key in cached.keys) && value) queryParams[key] = value;
            const query = options.stringifyQueryParams(queryParams);
            if (query) url += query.startsWith("?") ? query : `?${query}`;
        }
        return url;
    };
}
var generateUrls_default = generateUrls;

},{"path-to-regexp":"kNO2h","./resolver.js":"jZue6","./utils.js":"9GONv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZue6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResolutionError", ()=>ResolutionError);
parcelHelpers.export(exports, "default", ()=>Resolver);
var _matchRouteJs = require("./matchRoute.js");
var _matchRouteJsDefault = parcelHelpers.interopDefault(_matchRouteJs);
var _resolveRouteJs = require("./resolveRoute.js");
var _resolveRouteJsDefault = parcelHelpers.interopDefault(_resolveRouteJs);
var _utilsJs = require("./utils.js");
function isDescendantRoute(route, maybeParent) {
    let _route = route;
    while(_route){
        _route = _route.parent;
        if (_route === maybeParent) return true;
    }
    return false;
}
function isRouteContext(value) {
    return !!value && typeof value === "object" && "next" in value && "params" in value && "result" in value && "route" in value;
}
class ResolutionError extends Error {
    code;
    context;
    constructor(context, options){
        let errorMessage = `Path '${context.pathname}' is not properly resolved due to an error.`;
        const routePath = (0, _utilsJs.getRoutePath)(context.route);
        if (routePath) errorMessage += ` Resolution had failed on route: '${routePath}'`;
        super(errorMessage, options);
        this.code = options?.code;
        this.context = context;
    }
    warn() {
        console.warn(this.message);
    }
}
function updateChainForRoute(context, match) {
    const { path, route } = match;
    if (route && !route.__synthetic) {
        const item = {
            path,
            route
        };
        if (route.parent && context.chain) for(let i = context.chain.length - 1; i >= 0; i--){
            if (context.chain[i].route === route.parent) break;
            context.chain.pop();
        }
        context.chain?.push(item);
    }
}
class Resolver {
    /**
   * The base URL for all routes in the router instance. By default,
   * if the base element exists in the `<head>`, vaadin-router
   * takes the `<base href>` attribute value, resolved against the current
   * `document.URL`.
   */ baseUrl;
    #context;
    errorHandler;
    resolveRoute;
    #root;
    constructor(routes, { baseUrl = "", context, errorHandler, resolveRoute = (0, _resolveRouteJsDefault.default) } = {}){
        if (Object(routes) !== routes) throw new TypeError("Invalid routes");
        this.baseUrl = baseUrl;
        this.errorHandler = errorHandler;
        this.resolveRoute = resolveRoute;
        if (Array.isArray(routes)) this.#root = {
            __children: routes,
            __synthetic: true,
            action: ()=>void 0,
            path: ""
        };
        else this.#root = {
            ...routes,
            parent: void 0
        };
        this.#context = {
            ...context,
            hash: "",
            // eslint-disable-next-line @typescript-eslint/require-await
            async next () {
                return 0, _utilsJs.notFoundResult;
            },
            params: {},
            pathname: "",
            resolver: this,
            route: this.#root,
            search: "",
            chain: []
        };
    }
    get root() {
        return this.#root;
    }
    get context() {
        return this.#context;
    }
    /**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */ get __effectiveBaseUrl() {
        return this.baseUrl ? new URL(this.baseUrl, document.baseURI || document.URL).href.replace(/[^/]*$/u, "") : "";
    }
    /**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @public
   */ getRoutes() {
        return [
            ...this.#root.__children ?? []
        ];
    }
    /**
   * Removes all existing routes from the routing config.
   *
   * @public
   */ removeRoutes() {
        this.#root.__children = [];
    }
    /**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param pathnameOrContext - the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   */ async resolve(pathnameOrContext) {
        const self = this;
        const context = {
            ...this.#context,
            ...(0, _utilsJs.isString)(pathnameOrContext) ? {
                pathname: pathnameOrContext
            } : pathnameOrContext,
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            next
        };
        const match = (0, _matchRouteJsDefault.default)(this.#root, this.__normalizePathname(context.pathname) ?? context.pathname, !!this.baseUrl);
        const resolve = this.resolveRoute;
        let matches = null;
        let nextMatches = null;
        let currentContext = context;
        async function next(resume = false, parent = matches?.value?.route, prevResult) {
            const routeToSkip = prevResult === null ? matches?.value?.route : void 0;
            matches = nextMatches ?? match.next(routeToSkip);
            nextMatches = null;
            if (!resume) {
                if (!!matches.done || !isDescendantRoute(matches.value.route, parent)) {
                    nextMatches = matches;
                    return 0, _utilsJs.notFoundResult;
                }
            }
            if (matches.done) throw (0, _utilsJs.getNotFoundError)(context);
            currentContext = {
                ...context,
                params: matches.value.params,
                route: matches.value.route,
                chain: currentContext.chain?.slice()
            };
            updateChainForRoute(currentContext, matches.value);
            const resolution = await resolve(currentContext);
            if (resolution !== null && resolution !== void 0 && resolution !== (0, _utilsJs.notFoundResult)) {
                currentContext.result = isRouteContext(resolution) ? resolution.result : resolution;
                self.#context = currentContext;
                return currentContext;
            }
            return await next(resume, parent, resolution);
        }
        try {
            return await next(true, this.#root);
        } catch (error) {
            const _error = error instanceof (0, _utilsJs.NotFoundError) ? error : new ResolutionError(currentContext, {
                code: 500,
                cause: error
            });
            if (this.errorHandler) {
                currentContext.result = this.errorHandler(_error);
                return currentContext;
            }
            throw error;
        }
    }
    /**
   * Sets the routing config (replacing the existing one).
   *
   * @param routes - a single route or an array of those
   *    (the array is shallow copied)
   */ setRoutes(routes) {
        this.#root.__children = [
            ...(0, _utilsJs.toArray)(routes)
        ];
    }
    /**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */ __normalizePathname(pathname) {
        if (!this.baseUrl) return pathname;
        const base = this.__effectiveBaseUrl;
        const url = pathname.startsWith("/") ? new URL(base).origin + pathname : `./${pathname}`;
        const normalizedUrl = new URL(url, base).href;
        if (normalizedUrl.startsWith(base)) return normalizedUrl.slice(base.length);
        return void 0;
    }
    /**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param routes - a single route or an array of those
   *    (the array is shallow copied)
   */ addRoutes(routes) {
        this.#root.__children = [
            ...this.#root.__children ?? [],
            ...(0, _utilsJs.toArray)(routes)
        ];
        return this.getRoutes();
    }
}

},{"./matchRoute.js":"91A5l","./resolveRoute.js":"emz62","./utils.js":"9GONv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91A5l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>matchRoute_default);
var _matchPathJs = require("./matchPath.js");
var _matchPathJsDefault = parcelHelpers.interopDefault(_matchPathJs);
var _utilsJs = require("./utils.js");
function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
    let match;
    let childMatches;
    let childIndex = 0;
    let routepath = (0, _utilsJs.getRoutePath)(route);
    if (routepath.startsWith("/")) {
        if (ignoreLeadingSlash) routepath = routepath.substring(1);
        ignoreLeadingSlash = true;
    }
    return {
        next (routeToSkip) {
            if (route === routeToSkip) return {
                done: true,
                value: void 0
            };
            route.__children ??= (0, _utilsJs.unwrapChildren)(route.children);
            const children = route.__children ?? [];
            const exact = !route.__children && !route.children;
            if (!match) {
                match = (0, _matchPathJsDefault.default)(routepath, pathname, exact, parentKeys, parentParams);
                if (match) return {
                    value: {
                        keys: match.keys,
                        params: match.params,
                        path: match.path,
                        route
                    }
                };
            }
            if (match && children.length > 0) while(childIndex < children.length){
                if (!childMatches) {
                    const childRoute = children[childIndex];
                    childRoute.parent = route;
                    let matchedLength = match.path.length;
                    if (matchedLength > 0 && pathname.charAt(matchedLength) === "/") matchedLength += 1;
                    childMatches = matchRoute(childRoute, pathname.substring(matchedLength), ignoreLeadingSlash, match.keys, match.params);
                }
                const childMatch = childMatches.next(routeToSkip);
                if (!childMatch.done) return {
                    done: false,
                    value: childMatch.value
                };
                childMatches = null;
                childIndex += 1;
            }
            return {
                done: true,
                value: void 0
            };
        }
    };
}
var matchRoute_default = matchRoute;

},{"./matchPath.js":"9EjpZ","./utils.js":"9GONv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9EjpZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>matchPath_default);
var _pathToRegexp = require("path-to-regexp");
var _utilsJs = require("./utils.js");
const cache = /* @__PURE__ */ new Map();
cache.set("|false", {
    keys: [],
    pattern: /(?:)/u
});
function decodeParam(val) {
    try {
        return decodeURIComponent(val);
    } catch  {
        return val;
    }
}
function matchPath(routePath, path, exact = false, parentKeys = [], parentParams) {
    const cacheKey = `${routePath}|${String(exact)}`;
    const _path = (0, _utilsJs.resolvePath)(path);
    let regexp = cache.get(cacheKey);
    if (!regexp) {
        const keys = [];
        regexp = {
            keys,
            pattern: (0, _pathToRegexp.pathToRegexp)(routePath, keys, {
                end: exact,
                strict: routePath === ""
            })
        };
        cache.set(cacheKey, regexp);
    }
    const m = regexp.pattern.exec(_path);
    if (!m) return null;
    const params = {
        ...parentParams
    };
    for(let i = 1; i < m.length; i++){
        const key = regexp.keys[i - 1];
        const prop = key.name;
        const value = m[i];
        if (value !== void 0 || !Object.hasOwn(params, prop)) {
            if (key.modifier === "+" || key.modifier === "*") params[prop] = value ? value.split(/[/?#]/u).map(decodeParam) : [];
            else params[prop] = value ? decodeParam(value) : value;
        }
    }
    return {
        keys: [
            ...parentKeys,
            ...regexp.keys
        ],
        params,
        path: m[0]
    };
}
var matchPath_default = matchPath;

},{"path-to-regexp":"kNO2h","./utils.js":"9GONv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9GONv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFoundError", ()=>NotFoundError);
parcelHelpers.export(exports, "getNotFoundError", ()=>getNotFoundError);
parcelHelpers.export(exports, "getRoutePath", ()=>getRoutePath);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "notFoundResult", ()=>notFoundResult);
parcelHelpers.export(exports, "resolvePath", ()=>resolvePath);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "unwrapChildren", ()=>unwrapChildren);
function isObject(o) {
    return typeof o === "object" && !!o;
}
function isFunction(f) {
    return typeof f === "function";
}
function isString(s) {
    return typeof s === "string";
}
function toArray(value = []) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function log(msg) {
    return `[Vaadin.Router] ${msg}`;
}
class NotFoundError extends Error {
    code;
    context;
    constructor(context){
        super(log(`Page not found (${context.pathname})`));
        this.context = context;
        this.code = 404;
    }
}
const notFoundResult = Symbol("NotFoundResult");
function getNotFoundError(context) {
    return new NotFoundError(context);
}
function resolvePath(path) {
    return (Array.isArray(path) ? path[0] : path) ?? "";
}
function getRoutePath(route) {
    return resolvePath(route?.path);
}
function unwrapChildren(children) {
    return Array.isArray(children) && children.length > 0 ? children : void 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emz62":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>resolveRoute);
var _utilsJs = require("./utils.js");
function resolveRoute(context) {
    if ((0, _utilsJs.isFunction)(context.route.action)) return context.route.action(context);
    return void 0;
}

},{"./utils.js":"9GONv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kb4qB":[function(require,module,exports,__globalThis) {
var _routerMetaJs = require("./router-meta.js");

},{"./router-meta.js":"1g2Kb"}],"1g2Kb":[function(require,module,exports,__globalThis) {
var _vaadinUsageStatisticsJs = require("@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js");
function __REGISTER__(feature, vaadinObj = window.Vaadin ??= {}) {
    vaadinObj.registrations ??= [];
    vaadinObj.registrations.push({
        is: feature ? `${"@vaadin/router"}/${feature}` : "@vaadin/router",
        version: "2.0.0"
    });
}
__REGISTER__();
(0, _vaadinUsageStatisticsJs.usageStatistics)();

},{"@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":"8c4e8"}],"8c4e8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vaadinUsageStatisticsCollectJs = require("./vaadin-usage-statistics-collect.js");
parcelHelpers.exportAll(_vaadinUsageStatisticsCollectJs, exports);

},{"./vaadin-usage-statistics-collect.js":"iBUS5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBUS5":[function(require,module,exports,__globalThis) {
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */ /*

This script gathers usage statistics from the application running in development mode.

Statistics gathering is automatically disabled and excluded from production builds.

For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.

*/ /*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "usageStatistics", ()=>usageStatistics);
var _vaadinDevelopmentModeDetectorJs = require("@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js");
function maybeGatherAndSendStats() {
/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/ }
const usageStatistics = function() {
    if (typeof (0, _vaadinDevelopmentModeDetectorJs.runIfDevelopmentMode) === 'function') return (0, _vaadinDevelopmentModeDetectorJs.runIfDevelopmentMode)(maybeGatherAndSendStats);
};

},{"@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js":"fSKSa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSKSa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "runIfDevelopmentMode", ()=>runIfDevelopmentMode);
const DEV_MODE_CODE_REGEXP = /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function isMinified() {
    function test() {
        /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/ return true;
    }
    return uncommentAndRun(test);
}
function isDevelopmentMode() {
    try {
        if (isForcedDevelopmentMode()) return true;
        if (!isLocalhost()) return false;
        if (FlowClients) return !isFlowProductionMode();
        return !isMinified();
    } catch (e) {
        // Some error in this code, assume production so no further actions will be taken
        return false;
    }
}
function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
}
function isLocalhost() {
    return [
        "localhost",
        "127.0.0.1"
    ].indexOf(window.location.hostname) >= 0;
}
function isFlowProductionMode() {
    if (FlowClients) {
        const productionModeApps = Object.keys(FlowClients).map((key)=>FlowClients[key]).filter((client)=>client.productionMode);
        if (productionModeApps.length > 0) return true;
    }
    return false;
}
function uncommentAndRun(callback, args) {
    if (typeof callback !== 'function') return;
    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
    } catch (e) {
        // eat the exception
        console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
    return callback(args);
}
// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window['Vaadin'] = window['Vaadin'] || {};
const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) return uncommentAndRun(callback, args);
};
if (window.Vaadin.developmentMode === undefined) window.Vaadin.developmentMode = isDevelopmentMode();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hgEX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>animate_default);
const willAnimate = (elem)=>{
    const name = getComputedStyle(elem).getPropertyValue("animation-name");
    return name && name !== "none";
};
const waitForAnimation = (elem, cb)=>{
    const listener = ()=>{
        elem.removeEventListener("animationend", listener);
        cb();
    };
    elem.addEventListener("animationend", listener);
};
async function animate(elem, className) {
    elem.classList.add(className);
    return await new Promise((resolve)=>{
        if (willAnimate(elem)) {
            const rect = elem.getBoundingClientRect();
            const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
            elem.setAttribute("style", `position: absolute; ${size}`);
            waitForAnimation(elem, ()=>{
                elem.classList.remove(className);
                elem.removeAttribute("style");
                resolve();
            });
        } else {
            elem.classList.remove(className);
            resolve();
        }
    });
}
var animate_default = animate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJjb9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_TRIGGERS", ()=>DEFAULT_TRIGGERS);
parcelHelpers.export(exports, "setNavigationTriggers", ()=>setNavigationTriggers);
var _clickJs = require("./click.js");
var _clickJsDefault = parcelHelpers.interopDefault(_clickJs);
var _popstateJs = require("./popstate.js");
var _popstateJsDefault = parcelHelpers.interopDefault(_popstateJs);
let triggers = [];
const DEFAULT_TRIGGERS = {
    CLICK: (0, _clickJsDefault.default),
    POPSTATE: (0, _popstateJsDefault.default)
};
function setNavigationTriggers(newTriggers = []) {
    triggers.forEach((trigger)=>trigger.inactivate());
    newTriggers.forEach((trigger)=>trigger.activate());
    triggers = newTriggers;
}

},{"./click.js":"eG1V4","./popstate.js":"592zj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eG1V4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>click_default);
var _utilsJs = require("../utils.js");
function getAnchorOrigin(anchor) {
    const { port, protocol } = anchor;
    const defaultHttp = protocol === "http:" && port === "80";
    const defaultHttps = protocol === "https:" && port === "443";
    const host = defaultHttp || defaultHttps ? anchor.hostname : anchor.host;
    return `${protocol}//${host}`;
}
function getNormalizedNodeName(e) {
    if (!(e instanceof Element)) return void 0;
    return e.nodeName.toLowerCase();
}
function vaadinRouterGlobalClickHandler(event) {
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
    let anchorCandidate = event.target;
    const path = event instanceof MouseEvent ? event.composedPath() : event.path ?? [];
    for(let i = 0; i < path.length; i++){
        const target = path[i];
        if ("nodeName" in target && target.nodeName.toLowerCase() === "a") {
            anchorCandidate = target;
            break;
        }
    }
    while(anchorCandidate && anchorCandidate instanceof Node && getNormalizedNodeName(anchorCandidate) !== "a")anchorCandidate = anchorCandidate.parentNode;
    if (!anchorCandidate || getNormalizedNodeName(anchorCandidate) !== "a") return;
    const anchor = anchorCandidate;
    if (anchor.target && anchor.target.toLowerCase() !== "_self") return;
    if (anchor.hasAttribute("download")) return;
    if (anchor.hasAttribute("router-ignore")) return;
    if (anchor.pathname === window.location.pathname && anchor.hash !== "") return;
    const origin = anchor.origin || getAnchorOrigin(anchor);
    if (origin !== window.location.origin) return;
    const { hash, pathname, search } = anchor;
    if ((0, _utilsJs.fireRouterEvent)("go", {
        hash,
        pathname,
        search
    }) && event instanceof MouseEvent) {
        event.preventDefault();
        if (event.type === "click") window.scrollTo(0, 0);
    }
}
const CLICK = {
    activate () {
        window.document.addEventListener("click", vaadinRouterGlobalClickHandler);
    },
    inactivate () {
        window.document.removeEventListener("click", vaadinRouterGlobalClickHandler);
    }
};
var click_default = CLICK;

},{"../utils.js":"B7B3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"B7B3i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "amend", ()=>amend);
parcelHelpers.export(exports, "copyContextWithoutNext", ()=>copyContextWithoutNext);
parcelHelpers.export(exports, "createLocation", ()=>createLocation);
parcelHelpers.export(exports, "createRedirect", ()=>createRedirect);
parcelHelpers.export(exports, "ensureRoute", ()=>ensureRoute);
parcelHelpers.export(exports, "ensureRoutes", ()=>ensureRoutes);
parcelHelpers.export(exports, "fireRouterEvent", ()=>fireRouterEvent);
parcelHelpers.export(exports, "getMatchedPath", ()=>getMatchedPath);
parcelHelpers.export(exports, "getPathnameForRouter", ()=>getPathnameForRouter);
parcelHelpers.export(exports, "getRoutePath", ()=>getRoutePath);
parcelHelpers.export(exports, "logValue", ()=>logValue);
parcelHelpers.export(exports, "maybeCall", ()=>maybeCall);
parcelHelpers.export(exports, "processNewChildren", ()=>processNewChildren);
parcelHelpers.export(exports, "renderElement", ()=>renderElement);
var _pathToRegexp = require("path-to-regexp");
var _utilsJs = require("./resolver/utils.js");
function ensureRoute(route) {
    if (!route || !(0, _utilsJs.isString)(route.path)) throw new Error((0, _utilsJs.log)(`Expected route config to be an object with a "path" string property, or an array of such objects`));
    if (!(0, _utilsJs.isFunction)(route.action) && !Array.isArray(route.children) && !(0, _utilsJs.isFunction)(route.children) && !(0, _utilsJs.isString)(route.component) && !(0, _utilsJs.isString)(route.redirect)) throw new Error((0, _utilsJs.log)(`Expected route config "${route.path}" to include either "component, redirect" or "action" function but none found.`));
    if (route.redirect) [
        "bundle",
        "component"
    ].forEach((overriddenProp)=>{
        if (overriddenProp in route) console.warn((0, _utilsJs.log)(`Route config "${String(route.path)}" has both "redirect" and "${overriddenProp}" properties, and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`));
    });
}
function ensureRoutes(routes) {
    (0, _utilsJs.toArray)(routes).forEach((route)=>ensureRoute(route));
}
function copyContextWithoutNext({ next: _, ...context }) {
    return context;
}
function getPathnameForRouter(pathname, router) {
    const base = router.__effectiveBaseUrl;
    return base ? new URL(pathname.replace(/^\//u, ""), base).pathname : pathname;
}
function getMatchedPath(pathItems) {
    return pathItems.map((pathItem)=>pathItem.path).reduce((a, b)=>{
        if (b.length) return `${a.replace(/\/$/u, "")}/${b.replace(/^\//u, "")}`;
        return a;
    }, "");
}
function getRoutePath(chain) {
    return getMatchedPath(chain.map((chainItem)=>chainItem.route));
}
function createLocation({ chain = [], hash = "", params = {}, pathname = "", redirectFrom, resolver, search = "" }, route) {
    const routes = chain.map((item)=>item.route);
    return {
        baseUrl: resolver?.baseUrl ?? "",
        getUrl: (userParams = {})=>resolver ? getPathnameForRouter((0, _pathToRegexp.compile)(getRoutePath(chain))({
                ...params,
                ...userParams
            }), resolver) : "",
        hash,
        params,
        pathname,
        redirectFrom,
        route: route ?? (Array.isArray(routes) ? routes.at(-1) : void 0) ?? null,
        routes,
        search,
        searchParams: new URLSearchParams(search)
    };
}
function createRedirect(context, pathname) {
    const params = {
        ...context.params
    };
    return {
        redirect: {
            from: context.pathname,
            params,
            pathname
        }
    };
}
function renderElement(context, element) {
    element.location = createLocation(context);
    if (context.chain) {
        const index = context.chain.map((item)=>item.route).indexOf(context.route);
        context.chain[index].element = element;
    }
    return element;
}
function maybeCall(callback, thisArg, ...args) {
    if (typeof callback === "function") return callback.apply(thisArg, args);
    return void 0;
}
function amend(fn, obj, ...args) {
    return (result)=>{
        if (result && (0, _utilsJs.isObject)(result) && ("cancel" in result || "redirect" in result)) return result;
        return maybeCall(obj?.[fn], obj, ...args);
    };
}
function processNewChildren(newChildren, route) {
    if (!Array.isArray(newChildren) && !(0, _utilsJs.isObject)(newChildren)) throw new Error((0, _utilsJs.log)(`Incorrect "children" value for the route ${String(route.path)}: expected array or object, but got ${String(newChildren)}`));
    const children = (0, _utilsJs.toArray)(newChildren);
    children.forEach((child)=>ensureRoute(child));
    route.__children = children;
}
function fireRouterEvent(type, detail) {
    return !window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`, {
        cancelable: type === "go",
        detail
    }));
}
function logValue(value) {
    if (typeof value !== "object") return String(value);
    const [stringType = "Unknown"] = / (.*)\]$/u.exec(String(value)) ?? [];
    if (stringType === "Object" || stringType === "Array") return `${stringType} ${JSON.stringify(value)}`;
    return stringType;
}

},{"path-to-regexp":"kNO2h","./resolver/utils.js":"9GONv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"592zj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>popstate_default);
var _utilsJs = require("../utils.js");
function vaadinRouterGlobalPopstateHandler(event) {
    if (event.state === "vaadin-router-ignore") return;
    const { hash, pathname, search } = window.location;
    (0, _utilsJs.fireRouterEvent)("go", {
        hash,
        pathname,
        search
    });
}
const POPSTATE = {
    activate () {
        window.addEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    },
    inactivate () {
        window.removeEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    }
};
var popstate_default = POPSTATE;

},{"../utils.js":"B7B3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4YWK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _logoBckgRemovedPng = require("../logo-bckg-removed.png");
var _logoBckgRemovedPngDefault = parcelHelpers.interopDefault(_logoBckgRemovedPng);
class ChatHeader extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const isChatPage = window.location.pathname.includes("/chat/");
        this.shadowRoot.innerHTML = `
    <style>
    div.header{
        width:100vw;
        margin:0;
        padding:0;
        background: linear-gradient(to bottom,rgb(39, 160, 176),rgba(12, 129, 74, 0.1));
        height:80px;
        display:flex;
        align-items:center;
        border-bottom: solid rgb(0,0,0,0.1) 1px
    }
    
    img.logo{
        width:150px; 
        height:48px; 
        margin-left:20px;
    }
    @media(width<600px){
        img.chat-page{
            margin-left:80px;
        }
    
    }
    </style>

    <div class="header">
        <div class="logo-img">
            <img class="logo ${isChatPage ? "chat-page" : ""} " src=${0, _logoBckgRemovedPngDefault.default} alt="logo image" style="width:150px; height:48px;">
        </div>
    </div>
    `;
    }
}
customElements.define("header-comp", ChatHeader);

},{"../logo-bckg-removed.png":"80hQl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80hQl":[function(require,module,exports,__globalThis) {
module.exports = require("3d9521c1d0001d6").getBundleURL('eL2qL') + "logo-bckg-removed.2387797d.png" + "?" + Date.now();

},{"3d9521c1d0001d6":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"dn9HR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _router = require("@vaadin/router");
var _personIconPng = require("../../person-icon.png");
var _personIconPngDefault = parcelHelpers.interopDefault(_personIconPng);
class Chatrooms extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
    <style>
    
    .private-buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:10px;
        padding-top: 5px;
        width:80vw;
    }

    .public-buttons{
            
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 5px;
        width:80vw;
    }
    .pc-counts{
        display:flex;
        flex-direction:column;
        gap:30px;   
    }
    @media(width>980px){
        .pc-counts{
            gap:22px;   
        }
    }
    .chatselection-body{
        height:100vh;
        width: 100vw;
        background:linear-gradient(to bottom,rgba(114, 232, 222, 0.87) , rgb(12, 129, 74,0.3));
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        margin-top: 60px;
        color: rgb(255, 255, 255);
        text-align: center;
        -webkit-text-stroke: 0.1px rgb(0,0,0,0.5);
    }

    h3{
        margin-top: 8px;
        color: white;
        text-align: center;
        font-size: 25px;

    }

    @media(width>980px){
        .chatselection-body{
            
        }
        h1{
            font-size:40px;
            margin-top:30px;
        }
        h3{
            font-size:30px;
        }
    }


    button{
        min-width:unset;
        height:50px;
        width:180px;
        color:rgb(0,0,0,0.7);
        background-color: rgba(43, 180, 198, 0.62);
        border-radius:50px;
        border:solid 2px rgb(255,255,255,0.5);
        font-weight: bold;
        font-size: 18px;
        flex-shrink: 0;
    }
    @media(width>980px){
        button{
            font-size:22px;
            height:55px;
            width:220px;
        }
    }
    .back-home-button{
        position:absolute;
        margin-top:110px;
        left:20px;
        min-width:unset;
        width:60px;
        height:30px;
        background-color: rgba(43, 180, 198, 0.62);
        color:rgb(0,0,0,0.7);
        border-radius:50px;
        border:solid 0.5px rgb(255,255,255,0.1);
        font-weight: bold;
        font-size:13px;
    }
    h2.pc-total, h2.pc1-participants, h2.pc2-participants, h2.pc3-participants{
        text-align:right;
        color:grey;
        min-width:14px;
        font-size:14px;
        margin:0;
        padding:0;
        }
    @media(width>980px){
        h2.pc-total, h2.pc1-participants, h2.pc2-participants, h2.pc3-participants{
            min-width:30px;
            font-size:24px;
        }
    }
    div.pc1-count, div.pc2-count, div.pc3-count{
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;
        width:100%;
        margin:0;
        padding:0;
    }

    div.popup-container{
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        z-index:100;
        top:200px;
        width:260px;
    }
    @media(width>600px){
        div.popup-container{
            width:50%;
        
        }
    }
    div.popup-join{
        display:flex;
        flex-direction:column;
        width:100%;
        height:100%;
        border:solid 5px rgb(112, 211, 211);
        border-radius:20px;
        gap:20px;
        background: linear-gradient(to bottom,rgba(60, 200, 220),rgb(12, 129, 140));
    }
    h2.insert-id{
        margin:20px 20px 0 20px;
        padding:0;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
    }
    .join-form{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;
    }
    .id-input{
        width:70%;
        // max-width:500px;
        height:30px;
        border-radius:5px;
        padding-left:15px;
    }

    .button-join-chat{
        background-color:rgba(114, 232, 222, 0.87);
        margin-bottom:20px;

    }
    @media(width<415px){
        .button-join-chat{
            background-color:rgba(114, 232, 222, 0.87);
            margin-bottom:20px;
        }
    }      

    button.close-x{
        all:unset;
        position: absolute; 
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        border: none;
        border-radius:10px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        line-height: 30px; 
        cursor: pointer;    
    }

    button.close-x:hover {
        color:white;
    }
    .miss-alert-text{
        color:#EA253D;
        opacity:0.8;
        font-size:20px;
        font-weight:bold;
    }
    .public_chat_1, .public_chat_2, .public_chat_3{
        margin-left:47px;
    }
    @media(width>980px){
        .public_chat_1, .public_chat_2, .public_chat_3{
            margin-left:99px;
        }
    }
    
    .create_private, .join_private{
        margin-left:99px;
        margin-right:100px;
    }

    img{
        min-width:10px; 
        height:10px;
        margin-left:5px;
    }
    @media(width>980px){
        img{
            min-width:20px; 
            height:20px;
            margin-left:10px;
        }
    }
    </style>


    <button class="back-home-button">BACK </button>
    <div class="chatselection-body">
        <header-comp></header-comp>
        <h1 class="select_chat">Select a Chatroom</h1>
        <h3 class="public_title">Public</h3>
        <div class="public-buttons">
            <div class="pc-buttons">
                <div class="pc1-button">
                    <button class="public_chat_1">Chatroom 1</button>
                </div>
                <div class="pc2-button">
                    <button class="public_chat_2">Chatroom 2</button>
                </div>
                <div class="pc3-button">
                    <button class="public_chat_3">Chatroom 3</button>
                </div>
            </div>
            <div class="pc-counts">
                <div class="pc1-count">
                    <h2 class="pc1-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${0, _personIconPngDefault.default}>
                </div>
                <div class="pc2-count">
                    <h2 class="pc2-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${0, _personIconPngDefault.default}>
                </div>
                <div class="pc3-count">
                    <h2 class="pc3-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${0, _personIconPngDefault.default}>
                </div>
            </div>
        </div>
        <h3 class="private-title">Private</h3>
        <div class="private-buttons">
            <button class="create_private">Create Chatroom</button>
            <button class="join_private">Join Chatroom</button>
        </div>
        <div class="popup-container"></div>
    </div>

    `;
        const backbuttonEl = this.querySelector(".back-home-button");
        backbuttonEl?.addEventListener("click", (e)=>{
            e.preventDefault();
            const target = e.target;
            (0, _router.Router).go("/live-chat/");
        });
    }
}
customElements.define("chatrooms-page", Chatrooms);

},{"@vaadin/router":"edqZL","../../person-icon.png":"8r41A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8r41A":[function(require,module,exports,__globalThis) {
module.exports = require("97c0eb8b22ab9811").getBundleURL('eL2qL') + "person-icon.6448733c.png" + "?" + Date.now();

},{"97c0eb8b22ab9811":"lgJ39"}],"j5R60":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _sendIcon2Png = require("../../send-icon2.png");
var _sendIcon2PngDefault = parcelHelpers.interopDefault(_sendIcon2Png);
class ChatPage extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var idShort = window.location.pathname.split("/")[2];
        this.innerHTML = `
    <style>
        
    .chats-body{
        height:100vh;
        width: 100vw;
        background-color:rgba(114, 232, 222, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .back-button{
        position:absolute;
        margin-top:110px;
        left:20px;
        min-width:unset;
        width:60px;
        height:30px;
        background-color: rgba(43, 180, 198);
        color:rgb(0,0,0,0.7);
        border-radius:50px;
        border:solid 0.5px rgb(255,255,255,0.1);
        font-weight: bold;
        z-index:1000;
    }
    
    @media(width<600px){
        button.back-button{
            margin-top:25px;
            color:rgb(255,255,255);
        }
    }


    form.form-send-msg{
        display:flex;
        justify-content:center;
        position:absolute;
        bottom:20px;
        width:95vw;
        max-width:1800px;
        height:50px;
        gap:5px;
        padding-left:10px;
    }



    textarea.input-send-msg{
        flex-grow:1;
        height:45px;
        border-radius:50px;
        padding: 10px 3vw;
        margin-top:5px;
        max-width:1000px;
        overflow-y: auto;
        resize:none;
        white-space: pre-wrap;
        overflow-wrap: break-word;
    }

    button.button-send-msg{
        width:50px; 
        height:100%;
        border:none;
        background-color: transparent;
        cursor:pointer;
        bottom:30px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
        
    img.img-send-msg{
        width: 40px;
        height: 40px;
        max-width: 50px ;
        max-height: 50px ;
        object-fit: contain;
        display: block;
    }

    h2.id{
        position:absolute;
        top:30px;
        right:5vw;
        min-width:100px;
        margin:0;
        padding:0;
        color: rgba(0, 140, 160);
        font-size:20px;
    }

    
    @media(width<600px){
        h2.id{
            font-size:14px;
            padding-left:10px;
        }
    }
        
    .messages-container{
        // border:solid 3px black;
        flex-grow:1;
        overflow-y:auto;
        width:70vw;
        max-width:900px;
        margin-bottom: 75px;
        display:flex;
        flex-direction:column;
    }
    .message{
        padding: 8px;
        border-radius: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        width: fit-content;
        height: fit-content;
        max-width: 80%;
        word-wrap: break-word;
        background:rgb(227, 253, 233);
        align-self: flex-end;
    }
    .message.user {
        background: #e3f2fd;
        align-self: flex-start;
    }

    .user-msg.admin{
        background:none;
        font-weight: bold;
        align-self: flex-end;
    }
    .user-msg{
        background:none;
        font-weight: bold;
        align-self: flex-start;
        padding-left:20px;
        padding-top:10px;
    }

    </style>

    <div class="chats-body">
        <header-comp></header-comp>
        <h2 class="id">ID: ${idShort}</h2>
        <div class="messages-container">
        </div>
        <button class="back-button">BACK </button>
        <form class="form-send-msg">
            <textarea  class="input-send-msg" type="text" placeholder="Write a message"></textarea>
            <button class="button-send-msg">
                <img class="img-send-msg" src="${0, _sendIcon2PngDefault.default}" >
            </button>
        </form>
    </div>

    `;
    }
}
customElements.define("chats-page", ChatPage);

},{"../../send-icon2.png":"609Oq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"609Oq":[function(require,module,exports,__globalThis) {
module.exports = require("2c9f1fae7252de3c").getBundleURL('eL2qL') + "send-icon2.edc4bab5.png" + "?" + Date.now();

},{"2c9f1fae7252de3c":"lgJ39"}],"hLlcE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "listenRoom", ()=>listenRoom);
parcelHelpers.export(exports, "createChatroom", ()=>createChatroom);
parcelHelpers.export(exports, "writeMessages", ()=>writeMessages);
parcelHelpers.export(exports, "removeParticipant", ()=>removeParticipant);
parcelHelpers.export(exports, "addParticipant", ()=>addParticipant);
parcelHelpers.export(exports, "listenToParticipants", ()=>listenToParticipants);
parcelHelpers.export(exports, "publicParticipantsLoad", ()=>publicParticipantsLoad);
parcelHelpers.export(exports, "checkAndDeleteChatroom", ()=>checkAndDeleteChatroom);
parcelHelpers.export(exports, "listenMessages", ()=>listenMessages);
parcelHelpers.export(exports, "getAllUsers", ()=>getAllUsers);
parcelHelpers.export(exports, "checkRooms", ()=>checkRooms);
var _router = require("@vaadin/router");
var _routerTs = require("../router.ts");
// import {rtdb} from "../backend/db.ts"
// const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = "https://backend-live-chat.onrender.com";
// Check rooms and messages to delete
function checkRooms() {
    const username = localStorage.getItem("name");
    const color = localStorage.getItem("color");
    fetch(API_BASE_URL + "/checkrooms", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            color: color
        })
    }).then((res)=>res.json()).then((data)=>{
        console.log(data);
    });
}
// Get all users
function getAllUsers() {
    const username = localStorage.getItem("name");
    fetch(API_BASE_URL + "/getusers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res)=>res.json()).then((data)=>{
        console.log("All users in chats are:", data);
    });
}
// Create a chatroom
function createChatroom() {
    const username = localStorage.getItem("name");
    const color = localStorage.getItem("color");
    fetch(API_BASE_URL + "/createchat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            color: color
        })
    }).then((res)=>res.json()).then((data)=>{
        console.log("Room created with ID:", data.idShort);
        (0, _router.Router).go("/chat/" + data.idShort);
    });
}
// Add a participant to the db
async function addParticipant(idShort) {
    const username = localStorage.getItem("name");
    const color = localStorage.getItem("color");
    const data = await listenRoom(idShort);
    const fullid = data.idFull;
    fetch(API_BASE_URL + "/chat/" + idShort + "/addparticipant", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            color: color,
            idShort: idShort,
            fullid: fullid
        })
    }).then((res)=>res.json()).then((data)=>{
        console.log("The room " + idShort + " added the participant:", username);
    });
}
// Remove a participant from the db
async function removeParticipant() {
    const username = localStorage.getItem("name");
    const idShort = window.location.pathname.split("/")[2];
    const data = await listenRoom(idShort);
    const fullid = data.idFull;
    await fetch(API_BASE_URL + "/chat/" + idShort + "/removeparticipant", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            idShort: idShort,
            fullid: fullid
        })
    });
    console.log("The room " + idShort + " removed the participant:", username);
    await checkAndDeleteChatroom(idShort);
}
// Delete empty room
async function checkAndDeleteChatroom(idShort) {
    const dataRoom = await listenRoom(idShort);
    const numPart = dataRoom.chatroom.participants ? Object.keys(dataRoom.chatroom.participants).length : 0;
    const fullid = dataRoom.idFull;
    if (numPart == 1) fetch(API_BASE_URL + "/chat/" + idShort + "/deletechatroom", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idShort: idShort,
            fullid: fullid
        })
    }).then((res)=>res.json()).then((data)=>{
        console.log("The room " + idShort + " is deleted");
    });
}
// Listen changes in a specific room
async function listenRoom(idShort) {
    try {
        const response = await fetch(API_BASE_URL + "/chat/" + idShort, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error("Error en la solicitud");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ERROR at listening room");
        return null;
    }
}
function publicParticipantsLoad() {
    listenToParticipants("22338437");
    listenToParticipants("4f94d8d9");
    listenToParticipants("96479775");
}
// Listen to change in participant numbers 
async function listenToParticipants(idShort) {
    const roomData = await listenRoom(idShort);
    const fullid = roomData.idFull;
    const numPart = Object.keys(roomData.chatroom.participants).length - 1;
    if (idShort == "22338437") {
        const counterEl = document.querySelector(".pc1-participants");
        if (counterEl) counterEl.textContent = JSON.stringify(numPart);
    } else if (idShort == "4f94d8d9") {
        const counterEl = document.querySelector(".pc2-participants");
        if (counterEl) counterEl.textContent = JSON.stringify(numPart);
    } else if (idShort == "96479775") {
        const counterEl = document.querySelector(".pc3-participants");
        if (counterEl) counterEl.textContent = JSON.stringify(numPart);
    }
    return numPart;
}
// Write messages in the database
async function writeMessages(user, message) {
    const idShort = window.location.pathname.split("/")[2];
    const time = Date.now();
    const color = localStorage.getItem("color");
    const roomData = await listenRoom(idShort);
    const fullid = roomData.idFull;
    fetch(API_BASE_URL + `/chat/${idShort}/writemessages`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idShort: idShort,
            fullid: fullid,
            user: user,
            message: message,
            timestamp: time,
            color: color
        })
    }).then((res)=>res.json()).then((data)=>{
        console.log("The message has been written.");
    });
}
// Listen messages on change
async function listenMessages(idShort) {
    const roomData = await listenRoom(idShort);
    const fullid = roomData.idFull;
    const username = localStorage.getItem("name");
    console.log("the username is:", username);
    const eventSource = new EventSource(`${API_BASE_URL}/chat/${idShort}/listenmessages?fullid=${fullid}`);
    eventSource.onmessage = (event)=>{
        const data = JSON.parse(event.data);
        if (data.messages != null) {
            console.log("Messages updated:", data.messages);
            renderMessages(data.messages);
        }
    };
    eventSource.onerror = (error)=>{
        console.error("Error in the SSE:", error);
        eventSource.close();
    };
}
function renderMessages(messages) {
    const container = document.querySelector(".messages-container");
    container.innerHTML = "";
    let previousUserMsg = "";
    let n = 0;
    Object.entries(messages).forEach(([idTime, msgData])=>{
        if (idTime != "0") {
            const messageEl = document.createElement("div");
            messageEl.classList.add("message");
            if (msgData.username == localStorage.getItem("name") && msgData.color == localStorage.getItem("color")) var userAdmin = "admin";
            else var userAdmin = "user";
            messageEl.classList.add(`${userAdmin}`);
            messageEl.textContent = msgData.message;
            const userEl = document.createElement("p");
            userEl.classList.add("user-msg");
            userEl.classList.add(`${userAdmin}`);
            const colorUser = msgData.color;
            if (colorUser != null) userEl.style.color = colorUser;
            if (userAdmin == "user" && previousUserMsg != msgData.username) userEl.textContent = msgData.username;
            container.appendChild(userEl);
            container.appendChild(messageEl);
            previousUserMsg = msgData.username;
            n += 1;
        }
    });
    if (container) container.scrollTop = container.scrollHeight;
}

},{"@vaadin/router":"edqZL","../router.ts":"4QFWt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QFWt":[function(require,module,exports,__globalThis) {
var _router = require("@vaadin/router");
var _indexTs = require("./pages/chatselection/index.ts");
var _indexTs1 = require("./pages/homepage/index.ts");
var _indexTs2 = require("./pages/chat/index.ts");
const initURL = '';
const router = new (0, _router.Router)(document.querySelector(".root"), {
    baseUrl: initURL
});
console.log("se ha iniciado el router.");
console.log("la abse url del router es: ", router.baseUrl);
router.setRoutes([
    {
        path: '/',
        component: 'home-page'
    },
    {
        path: '/chatrooms',
        component: 'chatrooms-page'
    },
    {
        path: '/chat/:id',
        component: 'chats-page'
    }
]);

},{"@vaadin/router":"edqZL","./pages/chatselection/index.ts":"dn9HR","./pages/homepage/index.ts":"cFkfu","./pages/chat/index.ts":"j5R60"}]},["iJ1LQ","1Mbvr"], "1Mbvr", "parcelRequire94c2")

//# sourceMappingURL=index.01440a15.js.map
