(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{9669:function(e,t,n){e.exports=n(1609)},5448:function(e,t,n){"use strict";var r=n(4867),o=n(6026),i=n(4372),u=n(5327),a=n(4097),s=n(4109),c=n(7985),f=n(5061);e.exports=function(e){return new Promise((function(t,n){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"],(r.isBlob(l)||r.isFile(l))&&l.type&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",v=unescape(encodeURIComponent(e.auth.password))||"";d.Authorization="Basic "+btoa(h+":"+v)}var m=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),u(m,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,i),p=null}},p.onabort=function(){p&&(n(f("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(f("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||c(m))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),l||(l=null),p.send(l)}))}},1609:function(e,t,n){"use strict";var r=n(4867),o=n(1849),i=n(321),u=n(7185);function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var s=a(n(5655));s.Axios=i,s.create=function(e){return a(u(s.defaults,e))},s.Cancel=n(5263),s.CancelToken=n(4972),s.isCancel=n(6502),s.all=function(e){return Promise.all(e)},s.spread=n(8713),e.exports=s,e.exports.default=s},5263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4972:function(e,t,n){"use strict";var r=n(5263);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},6502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,n){"use strict";var r=n(4867),o=n(5327),i=n(782),u=n(3572),a=n(7185);function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=s},782:function(e,t,n){"use strict";var r=n(4867);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},4097:function(e,t,n){"use strict";var r=n(1793),o=n(7303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},5061:function(e,t,n){"use strict";var r=n(481);e.exports=function(e,t,n,o,i){var u=new Error(e);return r(u,t,n,o,i)}},3572:function(e,t,n){"use strict";var r=n(4867),o=n(8527),i=n(6502),u=n(5655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||u.adapter)(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},7185:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],u=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),r.forEach(i,c),r.forEach(u,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(void 0,t[o])})),r.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var f=o.concat(i).concat(u).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,c),n}},6026:function(e,t,n){"use strict";var r=n(5061);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},8527:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},5655:function(e,t,n){"use strict";var r=n(4155),o=n(4867),i=n(6016),u={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s={adapter:function(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof r&&"[object process]"===Object.prototype.toString.call(r))&&(e=n(5448)),e}(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){s.headers[e]=o.merge(u)})),e.exports=s},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},5327:function(e,t,n){"use strict";var r=n(4867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var u=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),u.push(o(t)+"="+o(e))})))})),i=u.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,u){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===u&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},7985:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},6016:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},4109:function(e,t,n){"use strict";var r=n(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,u={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(u[t]&&o.indexOf(t)>=0)return;u[t]="set-cookie"===t?(u[t]?u[t]:[]).concat([n]):u[t]?u[t]+", "+n:n}})),u):u}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4867:function(e,t,n){"use strict";var r=n(1849),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function u(e){return"undefined"===typeof e}function a(e){return null!==e&&"object"===typeof e}function s(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:a,isPlainObject:s,isUndefined:u,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:f,merge:function e(){var t={};function n(n,r){s(t[r])&&s(n)?t[r]=e(t[r],n):s(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),a=n(4651),s=n(7426);var c={};function f(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t,n=!1!==e.prefetch,o=a.useRouter(),l=i.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?u.resolveHref(o,e.as):a||i}}),[o,e.href,e.as]),d=l.href,p=l.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),x=r(w,2),E=x[0],R=x[1],C=i.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);i.default.useEffect((function(){var e=R&&n&&u.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=c[d+"%"+p+(t?"%"+t:"")];e&&!r&&f(o,d,p,{locale:t})}),[p,d,R,y,n,o]);var T={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:a}))}(e,o,d,p,v,m,g,y)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof y?y:o&&o.locale,S=o&&o.isLocaleDomain&&u.getDomainLocale(p,O,o&&o.locales,o&&o.domainLocales);T.href=S||u.addBasePath(u.addLocale(p,O,o&&o.defaultLocale))}return i.default.cloneElement(t,T)};t.default=l},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,s=o.useRef(),c=o.useState(!1),f=r(c,2),l=f[0],d=f[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,u=r.elements;return u.set(e,t),i.observe(e),function(){u.delete(e),i.unobserve(e),0===u.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!u&&!l){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=n(7294),i=n(3447),u="undefined"!==typeof IntersectionObserver;var a=new Map},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a,s=[],c=!1,f=-1;function l(){c&&a&&(c=!1,a.length?s=a.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=u(l);c=!0;for(var t=s.length;t;){for(a=s,s=[];++f<t;)a&&a[f].run();f=-1,t=s.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||c||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},821:function(e,t,n){"use strict";n.d(t,{ZP:function(){return W}});var r=n(7294);function o(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(t){i(t)}}function a(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var u,a=function(){},s=a(),c=Object,f=function(e){return e===s},l=function(e){return"function"==typeof e},d=function(e,t){return c.assign({},e,t)},p="undefined",h=function(){return typeof window!=p},v=new WeakMap,m=0,g=function(e){var t,n,r=typeof e,o=e&&e.constructor,i=o==Date;if(c(e)!==e||i||o==RegExp)t=i?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=v.get(e))return t;if(t=++m+"~",v.set(e,t),o==Array){for(t="@",n=0;n<e.length;n++)t+=g(e[n])+",";v.set(e,t)}if(o==c){t="#";for(var u=c.keys(e).sort();!f(n=u.pop());)f(e[n])||(t+=n+":"+g(e[n])+",");v.set(e,t)}}return t},y=!0,b=h(),w=typeof document!=p,x=b&&window.addEventListener?window.addEventListener.bind(window):a,E=w?document.addEventListener.bind(document):a,R=b&&window.removeEventListener?window.removeEventListener.bind(window):a,C=w?document.removeEventListener.bind(document):a,T={isOnline:function(){return y},isVisible:function(){var e=w&&document.visibilityState;return!!f(e)||"hidden"!==e}},O={initFocus:function(e){return E("visibilitychange",e),x("focus",e),function(){C("visibilitychange",e),R("focus",e)}},initReconnect:function(e){var t=function(){y=!0,e()},n=function(){y=!1};return x("online",t),x("offline",n),function(){R("online",t),R("offline",n)}}},S=!h()||"Deno"in window,L=S?r.useEffect:r.useLayoutEffect,k="undefined"!==typeof navigator&&navigator.connection,A=!S&&k&&(["slow-2g","2g"].includes(k.effectiveType)||k.saveData),j=function(e){if(l(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t,e?"$err$"+e:"",e?"$req$"+e:""]},N=new WeakMap,P=function(e,t,n,r,o,i){for(var u=N.get(e),a=u[0],s=u[1],c=u[4],f=u[5],l=a[t],d=s[t]||[],p=0;p<d.length;++p)d[p](n,r,o);return i&&(delete c[t],delete f[t],l&&l[0])?l[0](2).then((function(){return e.get(t)})):e.get(t)},U=0,B=function(){return++U},D=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,(function(){var t,n,r,o,u,a,c,f,d,p,h,v,m,g;return i(this,(function(i){switch(i.label){case 0:if(t=e[0],n=e[1],r=!1!==e[3],o=e[2],u=j(n),a=u[0],c=u[2],!a)return[2];if(f=N.get(t),d=f[2],p=f[3],e.length<3)return[2,P(t,a,t.get(a),t.get(c),s,r)];if(m=d[a]=B(),p[a]=0,l(o))try{o=o(t.get(a))}catch(y){v=y}return o&&l(o.then)?[4,o.catch((function(e){v=e}))]:[3,2];case 1:if(h=i.sent(),m!==d[a]){if(v)throw v;return[2,h]}return[3,3];case 2:h=o,i.label=3;case 3:return v||t.set(a,h),t.set(c,v),p[a]=B(),[4,P(t,a,h,v,s,r)];case 4:if(g=i.sent(),v)throw v;return[2,g]}}))}))},M=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},q=function(e,t){if(!N.has(e)){var n=d(O,t),r={},o=D.bind(s,e),i=a;if(N.set(e,[r,{},{},{},{},{},o]),!S){var u=n.initFocus(M.bind(s,r,0)),c=n.initReconnect(M.bind(s,r,1));i=function(){u&&u(),c&&c(),N.delete(e)}}return[e,o,i]}return[e,N.get(e)[6]]},I=q(new Map),F=I[0],V=I[1],_=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,t,n,r,o){if(T.isVisible()){var i=n.errorRetryCount,u=o.retryCount,a=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;!f(i)&&u>i||setTimeout(r,a,o)}},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:function(e,t){return g(e)==g(t)},isPaused:function(){return!1},cache:F,mutate:V,fallback:{}},T),H=function(e,t){var n=d(e,t);if(t){var r=e.use,o=e.fallback,i=t.use,u=t.fallback;r&&i&&(n.use=r.concat(i)),o&&u&&(n.fallback=d(o,u))}return n},z=(0,r.createContext)({}),$=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},J=function(){return d(_,(0,r.useContext)(z))},K=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},X={dedupe:!0},W=(c.defineProperty((function(e){var t=e.value,n=H((0,r.useContext)(z),t),o=t&&t.provider,i=(0,r.useState)((function(){return o?q(o(n.cache||F),t):s}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),L((function(){return i?i[2]:s}),[]),(0,r.createElement)(z.Provider,d(e,{value:n}))}),"default",{value:_}),u=function(e,t,n){var u=n.cache,a=n.compare,c=n.fallbackData,p=n.suspense,v=n.revalidateOnMount,m=n.refreshInterval,g=n.refreshWhenHidden,y=n.refreshWhenOffline,b=N.get(u),w=b[0],x=b[1],E=b[2],R=b[3],C=b[4],T=b[5],O=j(e),k=O[0],A=O[1],U=O[2],M=O[3],q=(0,r.useRef)(!1),I=(0,r.useRef)(!1),F=(0,r.useRef)(k),V=(0,r.useRef)(n),_=function(){return V.current},H=u.get(k),z=f(c)?n.fallback[k]:c,$=f(H)?z:H,J=u.get(U),W=function(){return f(v)?!_().isPaused()&&(p?!f($):f($)||n.revalidateIfStale):v},G=!(!k||!t)&&(!!u.get(M)||!q.current&&W()),Z=function(e,t){var n=(0,r.useState)({})[1],o=(0,r.useRef)(e),i=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),u=(0,r.useCallback)((function(e){var r=!1,u=o.current;for(var a in e){var s=a;u[s]!==e[s]&&(u[s]=e[s],i.current[s]&&(r=!0))}r&&!t.current&&n({})}),[]);return L((function(){o.current=e})),[o,i.current,u]}({data:$,error:J,isValidating:G},I),Q=Z[0],Y=Z[1],ee=Z[2],te=(0,r.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var r,o,c,l,d,p,h,v,m,g;return i(this,(function(i){switch(i.label){case 0:if(!k||!t||I.current||_().isPaused())return[2,!1];c=!0,l=e||{},d=f(C[k])||!l.dedupe,p=function(){return!I.current&&k===F.current&&q.current},h=function(){T[k]===o&&(delete C[k],delete T[k])},v={isValidating:!1},m=function(){u.set(M,!1),p()&&ee(v)},u.set(M,!0),ee({isValidating:!0}),i.label=1;case 1:return i.trys.push([1,3,,4]),d&&(P(u,k,Q.current.data,Q.current.error,!0),n.loadingTimeout&&!u.get(k)&&setTimeout((function(){c&&p()&&_().onLoadingSlow(k,n)}),n.loadingTimeout),T[k]=B(),C[k]=t.apply(void 0,A)),o=T[k],[4,C[k]];case 2:return r=i.sent(),d&&setTimeout(h,n.dedupingInterval),T[k]!==o?(d&&p()&&_().onDiscarded(k),[2,!1]):(u.set(U,s),v.error=s,!f(E[k])&&(o<=E[k]||o<=R[k]||0===R[k])?(m(),d&&p()&&_().onDiscarded(k),[2,!1]):(a(Q.current.data,r)?v.data=Q.current.data:v.data=r,a(u.get(k),r)||u.set(k,r),d&&p()&&_().onSuccess(r,k,n),[3,4]));case 3:return g=i.sent(),h(),_().isPaused()||(u.set(U,g),v.error=g,d&&p()&&(_().onError(g,k,n),n.shouldRetryOnError&&_().onErrorRetry(g,k,n,te,{retryCount:(l.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,m(),p()&&d&&P(u,k,v.data,v.error,!1),[2,!0]}}))}))}),[k]),ne=(0,r.useCallback)(D.bind(s,u,(function(){return F.current})),[]);if(L((function(){V.current=n})),L((function(){if(k){var e,t=q.current,n=te.bind(s,X),r=function(){return _().isVisible()&&_().isOnline()},o=0,i=K(k,x,(function(e,t,n){ee(d({error:t,isValidating:n},a(Q.current.data,e)?s:{data:e}))})),u=K(k,w,(function(e){if(0==e){var t=Date.now();_().revalidateOnFocus&&t>o&&r()&&(o=t+_().focusThrottleInterval,n())}else if(1==e)_().revalidateOnReconnect&&r()&&n();else if(2==e)return te()}));return I.current=!1,F.current=k,q.current=!0,t&&ee({data:$,error:J,isValidating:G}),W()&&(f($)||S?n():(e=n,h()?window.requestAnimationFrame(e):setTimeout(e,1))),function(){I.current=!0,i(),u()}}}),[k,te]),L((function(){var e;function t(){var t=l(m)?m($):m;t&&-1!==e&&(e=setTimeout(n,t))}function n(){Q.current.error||!g&&!_().isVisible()||!y&&!_().isOnline()?t():te(X).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[m,g,y,te]),(0,r.useDebugValue)($),p&&f($)&&k)throw f(J)?te(X):J;return{mutate:ne,get data(){return Y.data=!0,$},get error(){return Y.error=!0,J},get isValidating(){return Y.isValidating=!0,G}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=J(),r=$(e),o=r[0],i=r[1],a=r[2],s=H(n,a),c=u,f=s.use;if(f)for(var l=f.length;l-- >0;)c=f[l](c);return c(o,i||s.fetcher,s)})}}]);