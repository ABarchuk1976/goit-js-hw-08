!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,n){t&&u(e.prototype,t);n&&u(e,n);return e};var c=void 0!==t&&"[object global]"==={}.toString.call(t);function l(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function s(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function f(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function d(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function h(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(f(r))return"https://vimeo.com/".concat(r);if(d(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var m=void 0!==Array.prototype.indexOf,p="undefined"!=typeof window&&void 0!==window.postMessage;if(!(c||m&&p))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var g=o("l5bVx");
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */!function(t){"use strict";if(!t.WeakMap){var n=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),o=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};t.WeakMap=function(){function t(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(o(this,"_id",a("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(t,r){if(!i(t)||!n.call(t,"_id"))throw new TypeError(r+" method called on incompatible receiver "+(void 0===t?"undefined":e(g)(t)))}function a(e){return e+"_"+u()+"."+u()}function u(){return Math.random().toString().substring(2)}return o(t.prototype,"delete",(function(e){if(r(this,"delete"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),o(t.prototype,"get",(function(e){if(r(this,"get"),i(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),o(t.prototype,"has",(function(e){if(r(this,"has"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),o(t.prototype,"set",(function(e,t){if(r(this,"set"),!i(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?(n[1]=t,this):(o(e,this._id,[e,t]),this)})),o(t,"_polyfill",!0),t}()}function i(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:void 0);var y,w,b,k={};g=o("l5bVx");
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
b=function(){"use strict";var t,n,r,o=Object.prototype.toString,i="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function a(e,t){r.add(e,t),n||(n=i(r.drain))}function u(t){var n,r=void 0===t?"undefined":e(g)(t);return null==t||"object"!=r&&"function"!=r||(n=t.then),"function"==typeof n&&n}function c(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function s(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?a((function(){var r=new h(n);try{t.call(e,(function(){s.apply(r,arguments)}),(function(){f.apply(r,arguments)}))}catch(e){f.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(c,n))}catch(e){f.call(new h(n),e)}}}function f(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(c,t))}function d(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function h(e){this.def=e,this.triggered=!1}function v(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function m(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new v(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&a(c,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){s.call(t,e)}),(function(e){f.call(t,e)}))}catch(e){f.call(t,e)}}r=function(){var e,t,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(n,i){r=new o(n,i),t?t.next=r:e=r,t=r,r=void 0},drain:function(){var r=e;for(e=t=n=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=t({},"constructor",m,!1);return m.prototype=p,t(p,"__NPO__",0,!1),t(m,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),t(m,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),t(m,"all",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;d(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),t(m,"race",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");d(t,e,(function(e,t){n(t)}),r)}))})),m},(w=void 0!==t?t:void 0)[y="Promise"]=w[y]||b(),k?k=w[y]:"function"==typeof define&&define.amd&&define((function(){return w[y]}));var E=new WeakMap;function T(e,t,n){var r=E.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),E.set(e.element,r)}function _(e,t){return(E.get(e.element)||{})[t]||[]}function P(e,t,n){var r=E.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],E.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),E.set(e.element,r),r[t]&&0===r[t].length}function M(e,t){var n=_(e,t);if(n.length<1)return!1;var r=n.shift();return P(e,t,r),r}function N(e,t){var n=E.get(e);E.set(t,n),E.delete(e)}function F(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function x(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function C(e,t){var n,r=[];if((t=F(t)).event){if("error"===t.event)_(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),P(e,t.data.method,n)}));r=_(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=M(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var j=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return j.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function q(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!d(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return q(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}var O,I,V,R=new WeakMap,L=new WeakMap,W={},z=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this;if(e(i)(this,t),window.jQuery&&n instanceof jQuery&&(n.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),n=n[0]),"undefined"!=typeof document&&"string"==typeof n&&(n=document.getElementById(n)),!s(n))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==n.nodeName){var a=n.querySelector("iframe");a&&(n=a)}if("IFRAME"===n.nodeName&&!d(n.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(R.has(n))return R.get(n);this._window=n.ownerDocument.defaultView,this.element=n,this.origin="*";var u=new(e(k))((function(e,t){var i=o;if(o._onMessage=function(n){if(d(n.origin)&&i.element.contentWindow===n.source){"*"===i.origin&&(i.origin=n.origin);var r=F(n.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var o=new Error(r.data.message);return o.name=r.data.name,void t(o)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return i.element.setAttribute("data-ready","true"),void e();C(i,r)}},o._window.addEventListener("message",o._onMessage),"IFRAME"!==o.element.nodeName){var a=o,u=S(n,r);A(v(u),u,n).then((function(e){var t=q(e,n);return a.element=t,a._originalElement=n,N(n,t),R.set(a.element,a),e})).catch(t)}}));if(L.set(this,u),R.set(this.element,this),"IFRAME"===this.element.nodeName&&x(this,"ping"),W.isEnabled){var c=this,l=function(){return W.exit()};this.fullscreenchangeHandler=function(){var e=c;W.isFullscreen?T(c,"event:exitFullscreen",l):P(c,"event:exitFullscreen",l),c.ready().then((function(){x(e,"fullscreenchange",W.isFullscreen)}))},W.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return e(a)(t,[{key:"callMethod",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this;return new(e(k))((function(e,o){var i=r;return r.ready().then((function(){T(i,t,{resolve:e,reject:o}),x(i,t,n)})).catch(o)}))}},{key:"get",value:function(t){var n=this;return new(e(k))((function(e,r){var o=n;return t=l(t,"get"),n.ready().then((function(){T(o,t,{resolve:e,reject:r}),x(o,t)})).catch(r)}))}},{key:"set",value:function(t,n){var r=this;return new(e(k))((function(e,o){var i=r;if(t=l(t,"set"),null==n)throw new TypeError("There must be a value to set.");return r.ready().then((function(){T(i,t,{resolve:e,reject:o}),x(i,t,n)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===_(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),T(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");P(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var t=L.get(this)||new(e(k))((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return e(k).resolve(t)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return W.isEnabled?W.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return W.isEnabled?W.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return W.isEnabled?e(k).resolve(W.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new(e(k))((function(e){if(L.delete(t),R.delete(t.element),t._originalElement&&(R.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&"IFRAME"===t.element.nodeName&&t.element.parentNode&&(t.element.parentNode.parentNode&&t._originalElement&&t._originalElement!==t.element.parentNode?t.element.parentNode.parentNode.removeChild(t.element.parentNode):t.element.parentNode.removeChild(t.element)),t.element&&"DIV"===t.element.nodeName&&t.element.parentNode){t.element.removeAttribute("data-vimeo-initialized");var n=t.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&t._originalElement&&t._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}t._window.removeEventListener("message",t._onMessage),W.isEnabled&&W.off("fullscreenchange",t.fullscreenchangeHandler),e()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),t}();c||(O=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),I={fullscreenchange:O.fullscreenchange,fullscreenerror:O.fullscreenerror},V={request:function(e){return new Promise((function(t,n){var r=function(){V.off("fullscreenchange",r),t()};V.on("fullscreenchange",r);var o=(e=e||document.documentElement)[O.requestFullscreen]();o instanceof Promise&&o.then(r).catch(n)}))},exit:function(){return new Promise((function(e,t){if(V.isFullscreen){var n=function(){V.off("fullscreenchange",n),e()};V.on("fullscreenchange",n);var r=document[O.exitFullscreen]();r instanceof Promise&&r.then(n).catch(t)}else e()}))},on:function(e,t){var n=I[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=I[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(V,{isFullscreen:{get:function(){return Boolean(document[O.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[O.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[O.fullscreenEnabled])}}}),W=V,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=S(e);A(v(t),t,e).then((function(t){return q(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(d(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(d(t.origin)){var n=F(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;h(i.src)&&a&&new D(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}());var D=z,U=document.querySelector("#vimeo-player"),H=new D(U),B="seconds";H.on("pause",(function(){H.getCurrentTime().then((function(e){try{localStorage.setItem(B,String(e))}catch(e){console.error("Помилка збереження даних: ",e.message)}}));var e=localStorage.getItem(B);console.log("In localStorage: ",Number(e))})),H.on("play",(function(){var e=0;try{var t=localStorage.getItem(B);console.log(t),null!==t&&(e=Number(t))}catch(e){console.error("Помилка завантаження даних: ",e.message)}H.setCurrentTime(e).then((function(t){e}))}))}();
//# sourceMappingURL=02-video.82a1de53.js.map
