!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var i=o("l5bVx");(function(){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=void 0!==e&&"[object global]"==={}.toString.call(e);function o(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function a(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function u(e){var t,n=0<arguments.length&&void 0!==e?e:{},r=n.id,o=n.url,i=r||o;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(t=i,!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t)return"https://vimeo.com/".concat(i);if(a(i))return i.replace("http:","https:");if(r)throw new TypeError("“".concat(r,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var l=void 0!==Array.prototype.indexOf,c="undefined"!=typeof window&&void 0!==window.postMessage;if(!(r||l&&c))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var s,f,d,h,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function m(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(h(this,"_id","_WeakMap_"+g()+"."+g()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function p(e,n){if(!y(e)||!f.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+(void 0===e?"undefined":t(i)(e)))}function g(){return Math.random().toString().substring(2)}function y(e){return Object(e)===e}(s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:v).WeakMap||(f=Object.prototype.hasOwnProperty,d=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),h=function(e,t,n){d?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n},s.WeakMap=(h(m.prototype,"delete",(function(e){if(p(this,"delete"),!y(e))return!1;var t=e[this._id];return!(!t||t[0]!==e||(delete e[this._id],0))})),h(m.prototype,"get",(function(e){if(p(this,"get"),y(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),h(m.prototype,"has",(function(e){if(p(this,"has"),!y(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),h(m.prototype,"set",(function(e,t){if(p(this,"set"),!y(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:h(e,this._id,[e,t]),this})),h(m,"_polyfill",!0),m));var w,b,k,E,T,P=(b=w={exports:{}},T=function(){var e,n,r,o,a,u,l=Object.prototype.toString,c="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function s(e,t){this.fn=e,this.self=t,this.next=void 0}function f(e,t){r.add(e,t),n=n||c(r.drain)}function d(e){var n,r=void 0===e?"undefined":t(i)(e);return null==e||"object"!=r&&"function"!=r||(n=e.then),"function"==typeof n&&n}function h(){for(var e=0;e<this.chain.length;e++)!function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=d(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function v(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=d(e))?f((function(){var r=new g(n);try{t.call(e,(function(){v.apply(r,arguments)}),(function(){m.apply(r,arguments)}))}catch(e){m.call(r,e)}})):(n.msg=e,n.state=1,0<n.chain.length&&f(h,n))}catch(e){m.call(new g(n),e)}}}function m(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&f(h,t))}function p(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function g(e){this.def=e,this.triggered=!1}function y(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function w(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new y(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&f(h,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){v.call(t,e)}),(function(e){m.call(t,e)}))}catch(e){m.call(t,e)}}var b=e({},"constructor",w,(r={add:function(e,t){u=new s(e,t),a?a.next=u:o=u,a=u,u=void 0},drain:function(){var e=o;for(o=a=n=void 0;e;)e.fn.call(e.self),e=e.next}},!1));return e(w.prototype=b,"__NPO__",0,!1),e(w,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(w,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(w,"all",(function(e){var t=this;return"[object Array]"!=l.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;p(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(w,"race",(function(e){var t=this;return"[object Array]"!=l.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");p(t,e,(function(e,t){n(t)}),r)}))})),w},(E=v)[k="Promise"]=E[k]||T(),b.exports&&(b.exports=E[k]),w.exports),_=new WeakMap;function M(e,t,n){var r=_.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),_.set(e.element,r)}function N(e,t){return(_.get(e.element)||{})[t]||[]}function x(e,t,n){var r=_.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],_.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),_.set(e.element,r),r[t]&&0===r[t].length}function F(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function C(e,t,n){var r,o;e.element.contentWindow&&e.element.contentWindow.postMessage&&(r={method:t},void 0!==n&&(r.value=n),8<=(o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin))}function j(e,t){var n,r,o=[];(t=F(t)).event?("error"===t.event&&N(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),x(e,t.data.method,n)})),o=N(e,"event:".concat(t.event)),n=t.data):!t.method||(r=function(e,t){var n=N(e,t);if(n.length<1)return!1;var r=n.shift();return x(e,t,r),r}(e,t.method))&&(o.push(r),n=t.value),o.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var A=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function q(e,t){var n=1<arguments.length&&void 0!==t?t:{};return A.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return!r&&""!==r||(t[n]=""===r?1:r),t}),n)}function S(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function O(e,t,n){var r=1<arguments.length&&void 0!==t?t:{},o=2<arguments.length?n:void 0;return new Promise((function(t,n){if(!a(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var u in r)r.hasOwnProperty(u)&&(i+="&".concat(u,"=").concat(encodeURIComponent(r[u])));var l=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);l.open("GET",i,!0),l.onload=function(){if(404!==l.status)if(403!==l.status)try{var r=JSON.parse(l.responseText);if(403===r.domain_status_code)return S(r,o),void n(new Error("“".concat(e,"” is not embeddable.")));t(r)}catch(e){n(e)}else n(new Error("“".concat(e,"” is not embeddable.")));else n(new Error("“".concat(e,"” was not found.")))},l.onerror=function(){var e=l.status?" (".concat(l.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},l.send()}))}var R,V,I,L=new WeakMap,W=new WeakMap,z={},D=function(){function e(t){var n,r,o=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(1<t.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),n=t,!Boolean(n&&1===n.nodeType&&"nodeName"in n&&n.ownerDocument&&n.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"===t.nodeName||(r=t.querySelector("iframe"))&&(t=r),"IFRAME"===t.nodeName&&!a(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(L.has(t))return L.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var l,c=new P((function(e,n){var r;o._onMessage=function(t){if(a(t.origin)&&o.element.contentWindow===t.source){"*"===o.origin&&(o.origin=t.origin);var r=F(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void n(i)}var u=r&&"ready"===r.event,l=r&&"ping"===r.method;if(u||l)return o.element.setAttribute("data-ready","true"),void e();j(o,r)}},o._window.addEventListener("message",o._onMessage),"IFRAME"!==o.element.nodeName&&O(u(r=q(t,i)),r,t).then((function(e){var n,r,i,a=S(e,t);return o.element=a,o._originalElement=t,n=t,r=a,i=_.get(n),_.set(r,i),_.delete(n),L.set(o.element,o),e})).catch(n)}));return W.set(this,c),L.set(this.element,this),"IFRAME"===this.element.nodeName&&C(this,"ping"),z.isEnabled&&(l=function(){return z.exit()},this.fullscreenchangeHandler=function(){(z.isFullscreen?M:x)(o,"event:exitFullscreen",l),o.ready().then((function(){C(o,"fullscreenchange",z.isFullscreen)}))},z.on("fullscreenchange",this.fullscreenchangeHandler)),this}var t,r,i;return r=[{key:"callMethod",value:function(e,t){var n=this,r=1<arguments.length&&void 0!==t?t:{};return new P((function(t,o){return n.ready().then((function(){M(n,e,{resolve:t,reject:o}),C(n,e,r)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new P((function(n,r){return e=o(e,"get"),t.ready().then((function(){M(t,e,{resolve:n,reject:r}),C(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new P((function(r,i){if(e=o(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){M(n,e,{resolve:r,reject:i}),C(n,e,t)})).catch(i)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===N(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),M(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");x(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=W.get(this)||new P((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return P.resolve(e)}},{key:"addCuePoint",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};return this.callMethod("addCuePoint",{time:e,data:n})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return z.isEnabled?z.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return z.isEnabled?z.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return z.isEnabled?P.resolve(z.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new P((function(t){var n;W.delete(e),L.delete(e.element),e._originalElement&&(L.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode&&(e.element.removeAttribute("data-vimeo-initialized"),(n=e.element.querySelector("iframe"))&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))),e._window.removeEventListener("message",e._onMessage),z.isEnabled&&z.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n((t=e).prototype,r),i&&n(t,i),e}();r||(R=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),V={fullscreenchange:R.fullscreenchange,fullscreenerror:R.fullscreenerror},I={request:function(e){return new Promise((function(t,n){function r(){I.off("fullscreenchange",r),t()}I.on("fullscreenchange",r);var o=(e=e||document.documentElement)[R.requestFullscreen]();o instanceof Promise&&o.then(r).catch(n)}))},exit:function(){return new Promise((function(e,t){var n,r;I.isFullscreen?(n=function t(){I.off("fullscreenchange",t),e()},I.on("fullscreenchange",n),(r=document[R.exitFullscreen]())instanceof Promise&&r.then(n).catch(t)):e()}))},on:function(e,t){var n=V[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=V[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(I,{isFullscreen:{get:function(){return Boolean(document[R.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[R.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[R.fullscreenEnabled])}}}),z=I,function(e){function t(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}var n=0<arguments.length&&void 0!==e?e:document;[].slice.call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var n=q(e);O(u(n),n,e).then((function(t){return S(t,e)})).catch(t)}catch(e){t(e)}}))}(),function(e){var t=0<arguments.length&&void 0!==e?e:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",(function(e){if(a(e.origin)&&e.data&&"spacechange"===e.data.event)for(var n=t.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===e.source){n[r].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}})))}(),function(e){var t=0<arguments.length&&void 0!==e?e:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",(function(e){if(a(e.origin)){var n=F(e.data);if(n&&"ready"===n.event)for(var r,o=t.querySelectorAll("iframe"),i=0;i<o.length;i++){var u=o[i],l=u.contentWindow===e.source;r=u.src,/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(r)&&l&&new D(u).callMethod("appendVideoMetadata",window.location.href)}}})))}())})()}();
//# sourceMappingURL=02-video.2e333cd7.js.map
