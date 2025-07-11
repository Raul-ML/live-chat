function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},r={},o=t.parcelRequire94c2;function i(e,t){void 0===t&&(t={});for(var n=function(e){for(var t=[],n=0;n<e.length;){var r=e[n];if("*"===r||"+"===r||"?"===r){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if("\\"===r){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if("{"===r){t.push({type:"OPEN",index:n,value:e[n++]});continue}if("}"===r){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(":"===r){for(var o="",i=n+1;i<e.length;){var a=e.charCodeAt(i);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a){o+=e[i++];continue}break}if(!o)throw TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:o}),n=i;continue}if("("===r){var s=1,c="",i=n+1;if("?"===e[i])throw TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<e.length;){if("\\"===e[i]){c+=e[i++]+e[i++];continue}if(")"===e[i]){if(0==--s){i++;break}}else if("("===e[i]&&(s++,"?"!==e[i+1]))throw TypeError("Capturing groups are not allowed at ".concat(i));c+=e[i++]}if(s)throw TypeError("Unbalanced pattern at ".concat(n));if(!c)throw TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:c}),n=i;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}(e),r=t.prefixes,o=void 0===r?"./":r,i=t.delimiter,a=void 0===i?"/#?":i,c=[],l=0,d=0,h="",p=function(e){if(d<n.length&&n[d].type===e)return n[d++].value},u=function(e){var t=p(e);if(void 0!==t)return t;var r=n[d],o=r.type,i=r.index;throw TypeError("Unexpected ".concat(o," at ").concat(i,", expected ").concat(e))},m=function(){for(var e,t="";e=p("CHAR")||p("ESCAPED_CHAR");)t+=e;return t},f=function(e){for(var t=0;t<a.length;t++){var n=a[t];if(e.indexOf(n)>-1)return!0}return!1},g=function(e){var t=c[c.length-1],n=e||(t&&"string"==typeof t?t:"");if(t&&!n)throw TypeError('Must have text between two parameters, missing text after "'.concat(t.name,'"'));return!n||f(n)?"[^".concat(s(a),"]+?"):"(?:(?!".concat(s(n),")[^").concat(s(a),"])+?")};d<n.length;){var v=p("CHAR"),x=p("NAME"),b=p("PATTERN");if(x||b){var w=v||"";-1===o.indexOf(w)&&(h+=w,w=""),h&&(c.push(h),h=""),c.push({name:x||l++,prefix:w,suffix:"",pattern:b||g(w),modifier:p("MODIFIER")||""});continue}var y=v||p("ESCAPED_CHAR");if(y){h+=y;continue}if(h&&(c.push(h),h=""),p("OPEN")){var w=m(),_=p("NAME")||"",E=p("PATTERN")||"",C=m();u("CLOSE"),c.push({name:_||(E?l++:""),pattern:_&&!E?g(w):E,prefix:w,suffix:C,modifier:p("MODIFIER")||""});continue}u("END")}return c}function a(e,t){void 0===t&&(t={});var n=c(t),r=t.encode,o=void 0===r?function(e){return e}:r,i=t.validate,a=void 0===i||i,s=e.map(function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),n)});return function(t){for(var n="",r=0;r<e.length;r++){var i=e[r];if("string"==typeof i){n+=i;continue}var c=t?t[i.name]:void 0,l="?"===i.modifier||"*"===i.modifier,d="*"===i.modifier||"+"===i.modifier;if(Array.isArray(c)){if(!d)throw TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(0===c.length){if(l)continue;throw TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var h=0;h<c.length;h++){var p=o(c[h],i);if(a&&!s[r].test(p))throw TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(p,'"'));n+=i.prefix+p+i.suffix}continue}if("string"==typeof c||"number"==typeof c){var p=o(String(c),i);if(a&&!s[r].test(p))throw TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(p,'"'));n+=i.prefix+p+i.suffix;continue}if(!l){var u=d?"an array":"a string";throw TypeError('Expected "'.concat(i.name,'" to be ').concat(u))}}return n}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function c(e){return e&&e.sensitive?"":"i"}function l(e){return"object"==typeof e&&!!e}function d(e){return"function"==typeof e}function h(e){return"string"==typeof e}function p(e=[]){return Array.isArray(e)?e:[e]}function u(e){return`[Vaadin.Router] ${e}`}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire94c2=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["inzCo","index.3c0cbc72.js","eRQEx","logo-bckg-removed.217b7931.png","bQSRt","person-icon.82649727.png","ax8AL","send-icon2.da343077.png"]'));class m extends Error{code;context;constructor(e){super(u(`Page not found (${e.pathname})`)),this.context=e,this.code=404}}const f=Symbol("NotFoundResult");function g(e){return(Array.isArray(e)?e[0]:e)??""}function v(e){return g(e?.path)}const x=new Map;function b(e){try{return decodeURIComponent(e)}catch{return e}}x.set("|false",{keys:[],pattern:/(?:)/u});var w=function(e,t,n=!1,r=[],o){let a=`${e}|${String(n)}`,l=g(t),d=x.get(a);if(!d){let t=[];d={keys:t,pattern:function e(t,n,r){var o;return t instanceof RegExp?function(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,o=n.exec(e.source);o;)t.push({name:o[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(e.source);return e}(t,n):Array.isArray(t)?(o=t.map(function(t){return e(t,n,r).source}),new RegExp("(?:".concat(o.join("|"),")"),c(r))):function(e,t,n){void 0===n&&(n={});for(var r=n.strict,o=void 0!==r&&r,i=n.start,a=n.end,l=n.encode,d=void 0===l?function(e){return e}:l,h=n.delimiter,p=n.endsWith,u="[".concat(s(void 0===p?"":p),"]|$"),m="[".concat(s(void 0===h?"/#?":h),"]"),f=void 0===i||i?"^":"",g=0;g<e.length;g++){var v=e[g];if("string"==typeof v)f+=s(d(v));else{var x=s(d(v.prefix)),b=s(d(v.suffix));if(v.pattern){if(t&&t.push(v),x||b){if("+"===v.modifier||"*"===v.modifier){var w="*"===v.modifier?"?":"";f+="(?:".concat(x,"((?:").concat(v.pattern,")(?:").concat(b).concat(x,"(?:").concat(v.pattern,"))*)").concat(b,")").concat(w)}else f+="(?:".concat(x,"(").concat(v.pattern,")").concat(b,")").concat(v.modifier)}else{if("+"===v.modifier||"*"===v.modifier)throw TypeError('Can not repeat "'.concat(v.name,'" without a prefix and suffix'));f+="(".concat(v.pattern,")").concat(v.modifier)}}else f+="(?:".concat(x).concat(b,")").concat(v.modifier)}}if(void 0===a||a)o||(f+="".concat(m,"?")),f+=n.endsWith?"(?=".concat(u,")"):"$";else{var y=e[e.length-1],_="string"==typeof y?m.indexOf(y[y.length-1])>-1:void 0===y;o||(f+="(?:".concat(m,"(?=").concat(u,"))?")),_||(f+="(?=".concat(m,"|").concat(u,")"))}return new RegExp(f,c(n))}(i(t,r),n,r)}(e,t,{end:n,strict:""===e})},x.set(a,d)}let h=d.pattern.exec(l);if(!h)return null;let p={...o};for(let e=1;e<h.length;e++){let t=d.keys[e-1],n=t.name,r=h[e];void 0===r&&Object.hasOwn(p,n)||("+"===t.modifier||"*"===t.modifier?p[n]=r?r.split(/[/?#]/u).map(b):[]:p[n]=r?b(r):r)}return{keys:[...r,...d.keys],params:p,path:h[0]}},y=function e(t,n,r,o,i){let a,s;let c=0,l=v(t);return l.startsWith("/")&&(r&&(l=l.substring(1)),r=!0),{next(d){var h;if(t===d)return{done:!0,value:void 0};t.__children??=Array.isArray(h=t.children)&&h.length>0?h:void 0;let p=t.__children??[],u=!t.__children&&!t.children;if(!a&&(a=w(l,n,u,o,i)))return{value:{keys:a.keys,params:a.params,path:a.path,route:t}};if(a&&p.length>0)for(;c<p.length;){if(!s){let o=p[c];o.parent=t;let i=a.path.length;i>0&&"/"===n.charAt(i)&&(i+=1),s=e(o,n.substring(i),r,a.keys,a.params)}let o=s.next(d);if(!o.done)return{done:!1,value:o.value};s=null,c+=1}return{done:!0,value:void 0}}}};function _(e){if(d(e.route.action))return e.route.action(e)}class E extends Error{code;context;constructor(e,t){let n=`Path '${e.pathname}' is not properly resolved due to an error.`,r=v(e.route);r&&(n+=` Resolution had failed on route: '${r}'`),super(n,t),this.code=t?.code,this.context=e}warn(){console.warn(this.message)}}class C{baseUrl;#e;errorHandler;resolveRoute;#t;constructor(e,{baseUrl:t="",context:n,errorHandler:r,resolveRoute:o=_}={}){if(Object(e)!==e)throw TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=r,this.resolveRoute=o,Array.isArray(e)?this.#t={__children:e,__synthetic:!0,action:()=>void 0,path:""}:this.#t={...e,parent:void 0},this.#e={...n,hash:"",next:async()=>f,params:{},pathname:"",resolver:this,route:this.#t,search:"",chain:[]}}get root(){return this.#t}get context(){return this.#e}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(e){let t=this,n={...this.#e,...h(e)?{pathname:e}:e,next:c},r=y(this.#t,this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),o=this.resolveRoute,i=null,a=null,s=n;async function c(e=!1,l=i?.value?.route,d){let h=null===d?i?.value?.route:void 0;if(i=a??r.next(h),a=null,!e&&(i.done||!function(e,t){let n=e;for(;n;)if((n=n.parent)===t)return!0;return!1}(i.value.route,l)))return a=i,f;if(i.done)throw new m(n);!function(e,t){let{path:n,route:r}=t;if(r&&!r.__synthetic){if(r.parent&&e.chain)for(let t=e.chain.length-1;t>=0&&e.chain[t].route!==r.parent;t--)e.chain.pop();e.chain?.push({path:n,route:r})}}(s={...n,params:i.value.params,route:i.value.route,chain:s.chain?.slice()},i.value);let p=await o(s);return null!=p&&p!==f?(s.result=p&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?p.result:p,t.#e=s,s):await c(e,l,p)}try{return await c(!0,this.#t)}catch(t){let e=t instanceof m?t:new E(s,{code:500,cause:t});if(this.errorHandler)return s.result=this.errorHandler(e),s;throw t}}setRoutes(e){this.#t.__children=[...p(e)]}__normalizePathname(e){if(!this.baseUrl)return e;let t=this.__effectiveBaseUrl,n=e.startsWith("/")?new URL(t).origin+e:`./${e}`,r=new URL(n,t).href;if(r.startsWith(t))return r.slice(t.length)}addRoutes(e){return this.#t.__children=[...this.#t.__children??[],...p(e)],this.getRoutes()}}function R(e,t){let n=e.get(t);if(n){if(n.length>1)throw Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n[0]}}var S=function(e,t={}){if(!(e instanceof C))throw TypeError("An instance of Resolver is expected");let n=new Map,r=new Map;return(o,s)=>{let c=R(r,o);if(!c&&(r.clear(),!function e(t,n,r,o){let i=n.name??o?.(n);if(i&&(t.has(i)?t.get(i)?.push(n):t.set(i,[n])),Array.isArray(r))for(let i of r)i.parent=n,e(t,i,i.__children??i.children,o)}(r,e.root,e.root.__children,t.cacheKeyProvider),!(c=R(r,o))))throw Error(`Route "${o}" not found`);let l=c.fullPath?n.get(c.fullPath):void 0;if(!l){let e=v(c),t=c.parent;for(;t;){let n=v(t);n&&(e=`${n.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`),t=t.parent}let r=i(e),o=Object.create(null);for(let e of r)h(e)||(o[e.name]=!0);l={keys:o,tokens:r},n.set(e,l),c.fullPath=e}let d=a(l.tokens,{encode:encodeURIComponent,...t})(s)||"/";if(t.stringifyQueryParams&&s){let e={};for(let[t,n]of Object.entries(s))t in l.keys||!n||(e[t]=n);let n=t.stringifyQueryParams(e);n&&(d+=n.startsWith("?")?n:`?${n}`)}return d}};const k=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,L=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function A(e,t){if("function"!=typeof e)return;let n=k.exec(e.toString());if(n)try{e=Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const I=function(e,t){if(window.Vaadin.developmentMode)return A(e,t)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{if(localStorage.getItem("vaadin.developmentmode.force"))return!0;if(!(["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0))return!1;if(L)return!(L&&Object.keys(L).map(e=>L[e]).filter(e=>e.productionMode).length>0);return!A(function(){return!0})}catch(e){return!1}}()),function(e=window.Vaadin??={}){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),I(function(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/});const T=e=>{let t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},O=(e,t)=>{let n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};async function j(e,t){return e.classList.add(t),await new Promise(n=>{if(T(e)){let r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),O(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}function $(e){if(!e||!h(e.path))throw Error(u('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!d(e.action)&&!Array.isArray(e.children)&&!d(e.children)&&!h(e.component)&&!h(e.redirect))throw Error(u(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(u(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function N(e){p(e).forEach(e=>$(e))}function H(e,t){let n=t.__effectiveBaseUrl;return n?new URL(e.replace(/^\//u,""),n).pathname:e}function M(e){return e.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function P({chain:e=[],hash:t="",params:n={},pathname:r="",redirectFrom:o,resolver:s,search:c=""},l){let d=e.map(e=>e.route);return{baseUrl:s?.baseUrl??"",getUrl:(t={})=>{var r;return s?H(a(i(M(e.map(e=>e.route)),void 0),r)({...n,...t}),s):""},hash:t,params:n,pathname:r,redirectFrom:o,route:l??(Array.isArray(d)?d.at(-1):void 0)??null,routes:d,search:c,searchParams:new URLSearchParams(c)}}function D(e,t){let n={...e.params};return{redirect:{from:e.pathname,params:n,pathname:t}}}function U(e,t,...n){if("function"==typeof e)return e.apply(t,n)}function F(e,t,...n){return r=>r&&l(r)&&("cancel"in r||"redirect"in r)?r:U(t?.[e],t,...n)}function B(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function z(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function q(e){if(e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target,n=e instanceof MouseEvent?e.composedPath():e.path??[];for(let e=0;e<n.length;e++){let r=n[e];if("nodeName"in r&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&t instanceof Node&&"a"!==z(t);)t=t.parentNode;if(!t||"a"!==z(t))return;let r=t;if(r.target&&"_self"!==r.target.toLowerCase()||r.hasAttribute("download")||r.hasAttribute("router-ignore")||r.pathname===window.location.pathname&&""!==r.hash||(r.origin||function(e){let{port:t,protocol:n}=e,r="http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host;return`${n}//${r}`}(r))!==window.location.origin)return;let{hash:o,pathname:i,search:a}=r;B("go",{hash:o,pathname:i,search:a})&&e instanceof MouseEvent&&(e.preventDefault(),"click"===e.type&&window.scrollTo(0,0))}function W(e){if("vaadin-router-ignore"===e.state)return;let{hash:t,pathname:n,search:r}=window.location;B("go",{hash:t,pathname:n,search:r})}let J=[];const V={CLICK:{activate(){window.document.addEventListener("click",q)},inactivate(){window.document.removeEventListener("click",q)}},POPSTATE:{activate(){window.addEventListener("popstate",W)},inactivate(){window.removeEventListener("popstate",W)}}};function K(e=[]){J.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),J=e}function Q(){return{cancel:!0}}const G={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",next:async()=>f};class X extends C{location=P({resolver:this});ready=Promise.resolve(this.location);#n=new WeakSet;#r=new WeakSet;#o=this.#i.bind(this);#a=0;#s;__previousContext;#c;#l=null;#d=null;constructor(e,t){let n=document.head.querySelector("base"),r=n?.getAttribute("href");super([],{baseUrl:r?new URL(r,document.URL).href.replace(/[^/]*$/u,""):void 0,...t,resolveRoute:async e=>await this.#h(e)}),K(Object.values(V)),this.setOutlet(e),this.subscribe()}async #h(e){let{route:t}=e;if(d(t.children)){let n=await t.children(function({next:e,...t}){return t}(e));d(t.children)||({children:n}=t),function(e,t){if(!Array.isArray(e)&&!l(e))throw Error(u(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));let n=p(e);n.forEach(e=>$(e)),t.__children=n}(n,t)}let n={component:e=>{let t=document.createElement(e);return this.#r.add(t),t},prevent:Q,redirect:t=>D(e,t)};return await Promise.resolve().then(async()=>{if(this.#p(e))return await U(t.action,t,e,n)}).then(e=>null!=e&&("object"==typeof e||"symbol"==typeof e)&&(e instanceof HTMLElement||e===f||l(e)&&"redirect"in e)?e:h(t.redirect)?n.redirect(t.redirect):void 0).then(e=>null!=e?e:h(t.component)?n.component(t.component):void 0)}setOutlet(e){e&&this.#u(e),this.#s=e}getOutlet(){return this.#s}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#c=void 0,N(e),super.setRoutes(e),t||this.#i(),await this.ready}addRoutes(e){return N(e),super.addRoutes(e)}async render(e,t=!1){this.#a+=1;let n=this.#a,r={...G,...h(e)?{hash:"",search:"",pathname:e}:e,__renderId:n};return this.ready=this.#m(r,t),await this.ready}async #m(e,t){let{__renderId:n}=e;try{let r=await this.resolve(e),o=await this.#f(r);if(!this.#p(o))return this.location;let i=this.__previousContext;if(o===i)return this.#g(i,!0),this.location;if(this.location=P(o),t&&this.#g(o,1===n),B("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.#v(o,i),this.__previousContext=o,this.location;this.#x(o,i);let a=this.#b(o);if(this.#w(o),this.#y(o,i),await a,this.#p(o))return this.#_(),this.__previousContext=o,this.location}catch(r){if(n===this.#a){for(let e of(t&&this.#g(this.context),this.#s?.children??[]))e.remove();throw this.location=P(Object.assign(e,{resolver:this})),B("error",{router:this,error:r,...e}),r}}return this.location}async #f(e,t=e){let n=await this.#E(t),r=n!==t?n:e,o=H(M(n.chain??[]),this)===n.pathname,i=async(e,t=e.route,n)=>{let r=await e.next(!1,t,n);if(null===r||r===f){if(o)return e;if(null!=t.parent)return await i(e,t.parent,r)}return r},a=await i(n);if(null==a||a===f)throw new m(r);return a!==n?await this.#f(r,a):await this.#C(n)}async #E(e){let{result:t}=e;if(t instanceof HTMLElement)return!function(e,t){if(t.location=P(e),e.chain){let n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}}(e,t),e;if(t&&"redirect"in t){let n=await this.#R(t.redirect,e.__redirectCount,e.__renderId);return await this.#E(n)}throw t instanceof Error?t:Error(u(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);let[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`))}async #C(e){return await this.#S(e).then(async t=>t===this.__previousContext||t===e?t:await this.#f(t))}async #S(e){let t=this.__previousContext??{},n=t.chain??[],r=e.chain??[],o=Promise.resolve(void 0),i=t=>D(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.#k(n[t].element,r[t].element);e.__divergedChainIndex++,t++);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex===r.length&&this.#k(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)o=this.#L(o,e,{prevent:Q},n[t]);for(let t=0;t<r.length;t++)o=this.#A(o,e,{prevent:Q,redirect:i},r[t]),n[t].element.location=P(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.#L(o,e,{prevent:Q},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=P(e,n[t].route)):(o=this.#A(o,e,{prevent:Q,redirect:i},r[t]),r[t].element&&(r[t].element.location=P(e,r[t].route)));return await o.then(async t=>{if(t&&l(t)){if("cancel"in t&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in t)return await this.#R(t.redirect,e.__redirectCount,e.__renderId)}return e})}async #L(e,t,n,r){let o=P(t),i=await e;if(this.#p(t)&&(i=F("onBeforeLeave",r.element,o,n,this)(i)),!(l(i)&&"redirect"in i))return i}async #A(e,t,n,r){let o=P(t,r.route),i=await e;if(this.#p(t))return F("onBeforeEnter",r.element,o,n,this)(i)}#k(e,t){return!!(e instanceof Element&&t instanceof Element)&&(this.#r.has(e)&&this.#r.has(t)?e.localName===t.localName:e===t)}#p(e){return e.__renderId===this.#a}async #R(e,t=0,n=0){if(t>256)throw Error(u(`Too many redirects when rendering ${e.from}`));return await this.resolve({...G,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:n})}#u(e=this.#s){if(!(e instanceof Element||e instanceof DocumentFragment))throw TypeError(u(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#g({pathname:e,search:t="",hash:n=""},r){(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n)&&(window.history[r?"replaceState":"pushState"](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"})))}#v(e,t){let n=this.#s;for(let r=0;r<(e.__divergedChainIndex??0);r++){let o=t?.chain?.[r].element;if(o){if(o.parentNode===n)e.chain[r].element=o,n=o;else break}}return n}#x(e,t){this.#u(),this.#I();let n=this.#v(e,t);this.#l=[],this.#d=Array.from(n?.children??[]).filter(t=>this.#n.has(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex??0;t<(e.chain?.length??0);t++){let o=e.chain[t].element;o&&(r?.appendChild(o),this.#n.add(o),r===n&&this.#l.push(o),r=o)}}#_(){if(this.#d)for(let e of this.#d)e.remove();this.#d=null,this.#l=null}#I(){if(this.#d&&this.#l){for(let e of this.#l)e.remove();this.#d=null,this.#l=null}}#y(e,t){if(t?.chain&&null!=e.__divergedChainIndex)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.#p(e);n--){let r=t.chain[n].element;if(r)try{let t=P(e);U(r.onAfterLeave,r,t,{},this)}finally{if(this.#d?.includes(r))for(let e of r.children)e.remove()}}}#w(e){if(e.chain&&null!=e.__divergedChainIndex)for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#p(e);t++){let n=e.chain[t].element;if(n){let r=P(e,e.chain[t].route);U(n.onAfterEnter,n,r,{},this)}}}async #b(e){let t;let n=this.#d?.[0],r=this.#l?.[0],o=[],{chain:i=[]}=e;for(let e=i.length-1;e>=0;e--)if(i[e].route.animate){t=i[e].route.animate;break}if(n&&r&&t){let e=l(t)&&t.leave?t.leave:"leaving",i=l(t)&&t.enter?t.enter:"entering";o.push(j(n,e)),o.push(j(r,i))}return await Promise.all(o),e}subscribe(){window.addEventListener("vaadin-router-go",this.#o)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#o)}#i(e){let{pathname:t,search:n,hash:r}=e instanceof CustomEvent?e.detail:window.location;h(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){K(e)}urlForName(e,t){return this.#c||(this.#c=S(this,{cacheKeyProvider:e=>"component"in e&&"string"==typeof e.component?e.component:void 0})),H(this.#c(e,t??void 0),this)}urlForPath(e,t){var n;return H(a(i(e,void 0),n)(t??void 0),this)}static go(e){let{pathname:t,search:n,hash:r}=h(e)?new URL(e,"http://a"):e;return B("go",{pathname:t,search:n,hash:r})}}var Y={};Y=new URL("logo-bckg-removed.217b7931.png",import.meta.url).toString();class Z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.render()}render(){let t=window.location.pathname.includes("/chat/");this.shadowRoot.innerHTML=`
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
            <img class="logo ${t?"chat-page":""} " src=${e(Y)} alt="logo image" style="width:150px; height:48px;">
        </div>
    </div>
    `}}customElements.define("header-comp",Z);class ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.container=document.createElement("div"),this.shadowRoot.appendChild(this.container),this.container.className="shadow",this.name=localStorage.getItem("name"),this.warning=""}firstVisit(){return null===this.name||void 0}containsBadWords(e){let t=e.toLowerCase();return["ass","nig","whore","dick","hole","bitch","pussy","69","suck","cock","sex","fuck","fagg","puta","puto","nazi","gil","polla","pene","verga","subnor","imbecil","foll","coñi","coño","vagin","choch","chucha","hdp","moro","null","undefined","raul","Raul","raúl","Raúl"].some(e=>t.includes(e))}connectedCallback(){this.render()}getNiceRandomColor(){let e=Math.floor(100*Math.random()+100),t=Math.floor(100*Math.random()+100),n=Math.floor(100*Math.random()+100);return`rgb(${e}, ${t}, ${n})`}render(){this.container.innerHTML=`
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
    ${this.firstVisit()?`<form class="form">
            <div class="label-input">
                <label class="enter_name">Enter your name</label>
            </div> 
            <div class="input-button">
                <input class="input_name" type="text" name="name" placeholder="Name">
                <button class="form_button">Start LiveChat</button>
            </div>
        </form>       
        <div class="badwords">`+this.warning+`</div>
        `:`<h2 class="subtitle">Welcome back    <span class="name">${this.name}</span>!</h2>    
        <button class="to-chatrooms">Start LiveChat</button>
        <button class="change-name">Change Name</button>
        </div>`}`;let e=this.container.querySelector(".form");e&&e?.addEventListener("submit",e=>{e.preventDefault();let t=e.target.elements.name.value.trim();this.containsBadWords(t)||""===t?(this.warning='<p class="warning">Please, use other words as a name.</p>',this.render()):(localStorage.setItem("name",t),localStorage.setItem("color",this.getNiceRandomColor()),this.name=t,X.go("/live-chat/chatrooms"))});let t=this.container.querySelector(".to-chatrooms");t&&t.addEventListener("click",e=>{e.preventDefault(),X.go("/chatrooms")});let n=this.container.querySelector(".change-name");n&&n?.addEventListener("click",e=>{e.preventDefault(),e.target,localStorage.removeItem("name"),this.name=null,this.render()})}}customElements.define("home-page",ee);var et={};et=new URL("person-icon.82649727.png",import.meta.url).toString();class en extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
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
                    <img src=${e(et)}>
                </div>
                <div class="pc2-count">
                    <h2 class="pc2-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${e(et)}>
                </div>
                <div class="pc3-count">
                    <h2 class="pc3-participants">-</h2>
                    <h2 class="pc-total">/10</h2>
                    <img src=${e(et)}>
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

    `;let t=this.querySelector(".back-home-button");t?.addEventListener("click",e=>{e.preventDefault(),e.target,X.go("/")})}}customElements.define("chatrooms-page",en);var er={};er=new URL("send-icon2.da343077.png",import.meta.url).toString();class eo extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){var t=window.location.pathname.split("/")[2];this.innerHTML=`
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
        <h2 class="id">ID: ${t}</h2>
        <div class="messages-container">
        </div>
        <button class="back-button">BACK </button>
        <form class="form-send-msg">
            <textarea  class="input-send-msg" type="text" placeholder="Write a message"></textarea>
            <button class="button-send-msg">
                <img class="img-send-msg" src="${e(er)}" >
            </button>
        </form>
    </div>

    `}}customElements.define("chats-page",eo);const ei=new X(document.querySelector(".root"));console.log("se ha iniciado el router."),ei.setRoutes([{path:"/live-chat/",component:"home-page"},{path:"/live-chat/chatrooms",component:"chatrooms-page"},{path:"/live-chat/chat/:id",component:"chats-page"}]);const ea="http://localhost:3000";function es(){fetch(ea+"/checkrooms",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:localStorage.getItem("name"),color:localStorage.getItem("color")})}).then(e=>e.json()).then(e=>{console.log(e)})}async function ec(e){let t=localStorage.getItem("name"),n=localStorage.getItem("color"),r=(await eh(e)).idFull;fetch(ea+"/chat/"+e+"/addparticipant",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,color:n,idShort:e,fullid:r})}).then(e=>e.json()).then(n=>{console.log("The room "+e+" added the participant:",t)})}async function el(){let e=localStorage.getItem("name"),t=window.location.pathname.split("/")[2],n=(await eh(t)).idFull;await fetch(ea+"/chat/"+t+"/removeparticipant",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,idShort:t,fullid:n})}),console.log("The room "+t+" removed the participant:",e),await ed(t)}async function ed(e){let t=await eh(e),n=t.chatroom.participants?Object.keys(t.chatroom.participants).length:0,r=t.idFull;1==n&&fetch(ea+"/chat/"+e+"/deletechatroom",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({idShort:e,fullid:r})}).then(e=>e.json()).then(t=>{console.log("The room "+e+" is deleted")})}async function eh(e){try{let t=await fetch(ea+"/chat/"+e,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Error en la solicitud");return await t.json()}catch(e){return console.log("ERROR at listening room"),null}}function ep(){eu("22338437"),eu("4f94d8d9"),eu("96479775")}async function eu(e){let t=await eh(e);t.idFull;let n=Object.keys(t.chatroom.participants).length-1;if("22338437"==e){let e=document.querySelector(".pc1-participants");e&&(e.textContent=JSON.stringify(n))}else if("4f94d8d9"==e){let e=document.querySelector(".pc2-participants");e&&(e.textContent=JSON.stringify(n))}else if("96479775"==e){let e=document.querySelector(".pc3-participants");e&&(e.textContent=JSON.stringify(n))}return n}async function em(e,t){let n=window.location.pathname.split("/")[2],r=Date.now(),o=localStorage.getItem("color"),i=(await eh(n)).idFull;fetch(ea+`/chat/${n}/writemessages`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({idShort:n,fullid:i,user:e,message:t,timestamp:r,color:o})}).then(e=>e.json()).then(e=>{console.log("The message has been written.")})}async function ef(e){let t=(await eh(e)).idFull;console.log("the username is:",localStorage.getItem("name"));let n=new EventSource(`${ea}/chat/${e}/listenmessages?fullid=${t}`);n.onmessage=e=>{let t=JSON.parse(e.data);null!=t.messages&&(console.log("Messages updated:",t.messages),function(e){let t=document.querySelector(".messages-container");t.innerHTML="";let n="",r=0;Object.entries(e).forEach(([e,o])=>{if("0"!=e){let e=document.createElement("div");if(e.classList.add("message"),o.username==localStorage.getItem("name")&&o.color==localStorage.getItem("color"))var i="admin";else var i="user";e.classList.add(`${i}`),e.textContent=o.message;let a=document.createElement("p");a.classList.add("user-msg"),a.classList.add(`${i}`);let s=o.color;null!=s&&(a.style.color=s),"user"==i&&n!=o.username&&(a.textContent=o.username),t.appendChild(a),t.appendChild(e),n=o.username,r+=1}}),t&&(t.scrollTop=t.scrollHeight)}(t.messages))},n.onerror=e=>{console.error("Error in the SSE:",e),n.close()}}const eg=window.location.pathname.split("/")[2];if(window.addEventListener("popstate",e=>{console.log("The URL changed to: ",window.location.pathname);let t=window.location.pathname.split("/")[2];window.location.pathname.startsWith("/chatrooms")&&(ep(),es(),setInterval(()=>{window.location.pathname.startsWith("/chatrooms")&&ep()},3e3)),window.location.pathname.startsWith("/chat/"+t)&&window.addEventListener("DOMContentLoaded",()=>{ec(t)}),window.location.pathname.startsWith("/chat/")&&ef(t)}),window.location.pathname.startsWith("/chatrooms")){let e=localStorage.getItem("name"),t=localStorage.getItem("color");e||t||X.go("/"),ep(),es(),setInterval(()=>{window.location.pathname.startsWith("/chatrooms")&&ep()},3e3)}if(window.location.pathname.startsWith("/chat/"+eg)){let e=localStorage.getItem("name"),t=localStorage.getItem("color");e||t||X.go("/"),window.addEventListener("DOMContentLoaded",()=>{ec(eg)})}document.addEventListener("submit",async e=>{if(e.target.classList.contains("form-send-msg")){e.preventDefault();let t=document.querySelector(".input-send-msg"),n=t.value;em(localStorage.getItem("name"),n),t.value=""}}),document.addEventListener("keydown",function(e){if(e.target.classList.contains("input-send-msg")){let t=document.querySelector(".input-send-msg"),n=t.value,r=localStorage.getItem("name");r&&"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),em(r,n),t.value="")}}),window.location.pathname.startsWith("/chat/")&&ef(eg),document.addEventListener("click",async e=>{let t=e.target;if(t.classList.contains("create_private"))e.preventDefault(),fetch(ea+"/createchat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:localStorage.getItem("name"),color:localStorage.getItem("color")})}).then(e=>e.json()).then(e=>{console.log("Room created with ID:",e.idShort),X.go("/chat/"+e.idShort)});else if(t.classList.contains("back-button"))e.preventDefault(),el(),X.go("/chatrooms");else if(t.classList.contains("public_chat_1")){e.preventDefault();let t=document.querySelector(".pc1-participants");if(t&&t.textContent){let e=parseInt(t.textContent,10);if(!isNaN(e)&&e<=10){let e="22338437";X.go("/chat/"+e),ec(e)}}}else if(t.classList.contains("public_chat_2")){e.preventDefault();let t=document.querySelector(".pc2-participants");if(t&&t.textContent){let e=parseInt(t.textContent,10);if(!isNaN(e)&&e<=10){let e="4f94d8d9";X.go("/chat/"+e),ec(e)}}}else if(t.classList.contains("public_chat_3")){e.preventDefault();let t=document.querySelector(".pc3-participants");if(t&&t.textContent){let e=parseInt(t.textContent,10);if(!isNaN(e)&&e<=10){let e="96479775";X.go("/chat/"+e),ec(e)}}}else if(t.classList.contains("join_private"))e.preventDefault(),document.querySelector(".popup-container").innerHTML=`
        <div class="popup-join">
            <h2 class="insert-id">Insert ChatRoom ID to join</h2>
            <form class="join-form">
                <input class="id-input" placeholder="ID: 12345678">
                <div class="id-miss-alert"></div>
                <button class="button-join-chat">Enter ChatRoom </button>
            </form>
            <button type="submit" class="close-x">x</button>
        </div>
        `;else if(t.classList.contains("close-x"))e.preventDefault(),document.querySelector(".popup-container").innerHTML="";else if(t.classList.contains("button-join-chat")){e.preventDefault();let t=document.querySelector(".id-input").value;if(8!=t.length)document.querySelector(".id-miss-alert").innerHTML='<p class="miss-alert-text">The ID must have 8 characters.</p>';else{let e=await eh(t),n=e?Object.keys(e.chatroom.participants).length-1:0;null!=e&&n<1?(console.log("you entered to the room with the idShort:",t),X.go("/chat/"+t),ec(t)):1==n?document.querySelector(".id-miss-alert").innerHTML='<p class="miss-alert-text">The room is full. Please try again later!</p>':document.querySelector(".id-miss-alert").innerHTML='<p class="miss-alert-text">The Chatroom does not exist!</p>'}}});
//# sourceMappingURL=index.3c0cbc72.js.map
