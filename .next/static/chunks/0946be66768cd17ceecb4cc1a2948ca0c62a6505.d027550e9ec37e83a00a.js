(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var i,c=[],l=!1,f=-1;function p(){l&&i&&(l=!1,i.length?c=i.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=u(p);l=!0;for(var t=c.length;t;){for(i=c,c=[];++f<t;)i&&i[f].run();f=-1,t=c.length}i=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||u(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},AIAV:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},Dmg9:function(e,t,n){e.exports=n("ls82")},EJuK:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},NWRp:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,u=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(i){u=!0,o=i}finally{try{s||null==n.return||n.return()}finally{if(u)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},ODaL:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.setLogger=function(e={}){e.error&&(n.error=e.error);e.warn&&(n.warn=e.warn);e.debug&&(n.debug=e.debug)},t.proxyLogger=function(e=n,t){try{if("undefined"===typeof window)return e;const r={};for(const o in e)r[o]=(e,...r)=>{n[o](e,...r);const a=`${t}/_log`,s=new URLSearchParams({level:o,code:e,message:JSON.stringify(r.map((e=>e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:e)))});return navigator.sendBeacon?navigator.sendBeacon(a,s):fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:s})};return r}catch(r){return n}},t.default=void 0;const n={error(e,...t){console.error(`[next-auth][error][${e.toLowerCase()}]`,`\nhttps://next-auth.js.org/errors#${e.toLowerCase()}`,...t)},warn(e,...t){console.warn(`[next-auth][warn][${e.toLowerCase()}]`,`\nhttps://next-auth.js.org/warnings#${e.toLowerCase()}`,...t)},debug(t,...n){var r,o;null!==(r=e)&&void 0!==r&&null!==(o=r.env)&&void 0!==o&&o._NEXTAUTH_DEBUG&&console.log(`[next-auth][debug][${t.toLowerCase()}]`,...n)}};var r=n;t.default=r}).call(this,n("8oxB"))},RUKv:function(e,t){function n(e,t,n,r,o,a,s){try{var u=e[a](s),i=u.value}catch(c){return void n(c)}u.done?t(i):Promise.resolve(i).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var s=e.apply(t,r);function u(e){n(s,o,a,u,i,"next",e)}function i(e){n(s,o,a,u,i,"throw",e)}u(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},XJ4Q:function(e,t,n){"use strict";(function(e){var r=n("kxaz"),o=n("cJsI");Object.defineProperty(t,"__esModule",{value:!0}),t.useSession=y,t.session=t.getSession=w,t.csrfToken=t.getCsrfToken=_,t.providers=t.getProviders=T,t.signin=t.signIn=O,t.signout=t.signOut=L,t.options=t.setOptions=P,t.Provider=j,t.default=void 0;var a=r(n("Dmg9")),s=r(n("s3pi")),u=r(n("RUKv")),i=r(n("krhN")),c=n("q1tI"),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=a?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(r,s,u):r[s]=e[s]}r.default=e,n&&n.set(e,r);return r}(n("ODaL")),f=r(n("vFaK"));function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={baseUrl:(0,f.default)(e.env.NEXTAUTH_URL||e.env.VERCEL_URL).baseUrl,basePath:(0,f.default)(e.env.NEXTAUTH_URL).basePath,baseUrlServer:(0,f.default)(e.env.NEXTAUTH_URL_INTERNAL||e.env.NEXTAUTH_URL||e.env.VERCEL_URL).baseUrl,basePathServer:(0,f.default)(e.env.NEXTAUTH_URL_INTERNAL||e.env.NEXTAUTH_URL).basePath,keepAlive:0,clientMaxAge:0,_clientLastSync:0,_clientSyncTimer:null,_eventListenersAdded:!1,_clientSession:void 0,_getSession:function(){}},b=(0,l.proxyLogger)(l.default,h.basePath),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){"undefined"!==typeof window&&window.addEventListener("storage",function(){var n=(0,u.default)(a.default.mark((function n(r){var o;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.key===e){n.next=2;break}return n.abrupt("return");case 2:if("session"===(null===(o=JSON.parse(r.newValue))||void 0===o?void 0:o.event)&&null!==o&&void 0!==o&&o.data){n.next=5;break}return n.abrupt("return");case 5:t(o);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},post:function(t){"undefined"!==typeof localStorage&&localStorage.setItem(e,JSON.stringify(v(v({},t),{},{timestamp:N()})))}}}();"undefined"===typeof window||h._eventListenersAdded||(h._eventListenersAdded=!0,x.receive((function(){return h._getSession({event:"storage"})})),document.addEventListener("visibilitychange",(function(){!document.hidden&&h._getSession({event:"visibilitychange"})}),!1));var g=(0,c.createContext)();function y(e){var t=(0,c.useContext)(g);return t||function(e){var t=(0,c.useState)(e),n=(0,i.default)(t,2),r=n[0],o=n[1],s=(0,c.useState)(!r),l=(0,i.default)(s,2),f=l[0],p=l[1];return(0,c.useEffect)((function(){h._getSession=(0,u.default)(a.default.mark((function e(){var t,n,r,s,u,i,c,l,f,d,v=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=v.length>0&&void 0!==v[0]?v[0]:{},n=t.event,r=void 0===n?null:n,e.prev=1,s=null!==r,u="storage"===r,i=h.clientMaxAge,c=parseInt(h._clientLastSync),l=N(),f=h._clientSession,u||void 0===f){e.next=19;break}if(0!==i||!0===s){e.next=13;break}return e.abrupt("return");case 13:if(!(i>0&&null===f)){e.next=17;break}return e.abrupt("return");case 17:if(!(i>0&&l<c+i)){e.next=19;break}return e.abrupt("return");case 19:return void 0===f&&(h._clientSession=null),h._clientLastSync=N(),e.next=23,w({triggerEvent:!u});case 23:d=e.sent,h._clientSession=d,o(d),p(!1),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(1),b.error("CLIENT_USE_SESSION_ERROR",e.t0),p(!1);case 33:case"end":return e.stop()}}),e,null,[[1,29]])}))),h._getSession()})),[r,f]}(e)}function w(e){return m.apply(this,arguments)}function m(){return(m=(0,u.default)(a.default.mark((function e(t){var n,r;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("session",t);case 2:return r=e.sent,(null===(n=null===t||void 0===t?void 0:t.triggerEvent)||void 0===n||n)&&x.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return k.apply(this,arguments)}function k(){return(k=(0,u.default)(a.default.mark((function e(t){var n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("csrf",t);case 2:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===n;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=n.csrfToken;case 11:return e.abrupt("return",e.t2);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return S.apply(this,arguments)}function S(){return(S=(0,u.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("providers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return E.apply(this,arguments)}function E(){return(E=(0,u.default)(a.default.mark((function e(t){var n,r,o,s,u,i,c,l,f,p,d,b,x,g,y,w,m,k,S=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.length>1&&void 0!==S[1]?S[1]:{},r=S.length>2&&void 0!==S[2]?S[2]:{},o=n.callbackUrl,s=void 0===o?window.location.href:o,u=n.redirect,i=void 0===u||u,c=M(),e.next=6,T();case 6:if(l=e.sent){e.next=9;break}return e.abrupt("return",window.location.replace("".concat(c,"/error")));case 9:if(t in l){e.next=11;break}return e.abrupt("return",window.location.replace("".concat(c,"/signin?callbackUrl=").concat(encodeURIComponent(s))));case 11:return f="credentials"===l[t].type,p="email"===l[t].type,d=f||p,b=f?"".concat(c,"/callback/").concat(t):"".concat(c,"/signin/").concat(t),x="".concat(b,"?").concat(new URLSearchParams(r)),e.t0=fetch,e.t1=x,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=v,e.t5=v({},n),e.t6={},e.next=25,_();case 25:return e.t7=e.sent,e.t8=s,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return g=e.sent,e.next=36,g.json();case 36:if(y=e.sent,!i&&d){e.next=42;break}return m=null!==(w=y.url)&&void 0!==w?w:s,window.location.replace(m),m.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(k=new URL(y.url).searchParams.get("error"),!g.ok){e.next=46;break}return e.next=46,h._getSession({event:"storage"});case 46:return e.abrupt("return",{error:k,status:g.status,ok:g.ok,url:k?null:y.url});case 47:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return U.apply(this,arguments)}function U(){return(U=(0,u.default)(a.default.mark((function e(){var t,n,r,o,s,u,i,c,l,f,p,d=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:{},n=t.callbackUrl,r=void 0===n?window.location.href:n,o=t.redirect,s=void 0===o||o,u=M(),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=7,_();case 7:return e.t2=e.sent,e.t3=r,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),i={method:"post",headers:e.t0,body:e.t5},e.next=14,fetch("".concat(u,"/signout"),i);case 14:return c=e.sent,e.next=17,c.json();case 17:if(l=e.sent,x.post({event:"session",data:{trigger:"signout"}}),!s){e.next=24;break}return p=null!==(f=l.url)&&void 0!==f?f:r,window.location.replace(p),p.includes("#")&&window.location.reload(),e.abrupt("return");case 24:return e.next=26,h._getSession({event:"storage"});case 26:return e.abrupt("return",l);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseUrl,n=e.basePath,r=e.clientMaxAge,o=e.keepAlive;if(t&&(h.baseUrl=t),n&&(h.basePath=n),r&&(h.clientMaxAge=r),o){if(h.keepAlive=o,"undefined"===typeof window)return;null!==h._clientSyncTimer&&clearTimeout(h._clientSyncTimer),h._clientSyncTimer=setTimeout((0,u.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h._clientSession){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h._getSession({event:"timer"});case 4:case"end":return e.stop()}}),e)}))),1e3*o)}}function j(e){var t=e.children,n=e.session;return P(e.options),(0,c.createElement)(g.Provider,{value:y(n)},t)}function A(e){return R.apply(this,arguments)}function R(){return(R=(0,u.default)(a.default.mark((function e(t){var n,r,o,s,u,i,c,l,f=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},r=n.ctx,o=n.req,s=void 0===o?null===r||void 0===r?void 0:r.req:o,e.prev=1,e.next=4,M();case 4:return u=e.sent,i=s?{headers:{cookie:s.headers.cookie}}:{},e.next=8,fetch("".concat(u,"/").concat(t),i);case 8:return c=e.sent,e.next=11,c.json();case 11:if(l=e.sent,c.ok){e.next=14;break}throw l;case 14:return e.abrupt("return",Object.keys(l).length>0?l:null);case 17:return e.prev=17,e.t0=e.catch(1),b.error("CLIENT_FETCH_ERROR",t,e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}function M(){return"undefined"===typeof window?(e.env.NEXTAUTH_URL||b.warn("NEXTAUTH_URL","NEXTAUTH_URL environment variable not set"),"".concat(h.baseUrlServer).concat(h.basePathServer)):h.basePath}function N(){return Math.floor(Date.now()/1e3)}var C={getSession:w,getCsrfToken:_,getProviders:T,useSession:y,signIn:O,signOut:L,Provider:j,setOptions:P,options:P,session:w,providers:T,csrfToken:_,signin:O,signout:L};t.default=C}).call(this,n("8oxB"))},cJsI:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},dll0:function(e,t,n){var r=n("AIAV");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},krhN:function(e,t,n){var r=n("rME1"),o=n("NWRp"),a=n("dll0"),s=n("EJuK");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},kxaz:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},nGE6:function(e,t,n){e.exports=n("XJ4Q").default},rME1:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},s3pi:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},vFaK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t="http://localhost:3000",n="/api/auth";e||(e=`${t}/api/auth`);const r=e.startsWith("http:")?"http":"https";e=e.replace(/^https?:\/\//,"").replace(/\/$/,"");const[o,...a]=e.split("/"),s=o?`${r}://${o}`:t,u=a.length>0?`/${a.join("/")}`:n;return{baseUrl:s,basePath:u}}}}]);