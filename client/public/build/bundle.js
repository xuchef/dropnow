var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function u(){return p(" ")}function d(){return p("")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function w(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function y(t,e,n){t.classList[n?"add":"remove"](e)}let b;function $(t){b=t}function x(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const _=[],k=[],C=[],E=[],R=Promise.resolve();let L=!1;function O(t){C.push(t)}let S=!1;const U=new Set;function A(){if(!S){S=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];$(e),P(e.$$)}for($(null),_.length=0;k.length;)k.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];U.has(e)||(U.add(e),e())}C.length=0}while(_.length);for(;E.length;)E.pop()();L=!1,S=!1,U.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const T=new Set;let j;function N(t,e){t&&t.i&&(T.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),j.c.push((()=>{T.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function I(t){t&&t.c()}function B(t,n,r,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:h}=t.$$;a&&a.m(n,r),s||O((()=>{const n=c.map(e).filter(i);l?l.push(...n):o(n),t.$$.on_mount=[]})),h.forEach(O)}function D(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(_.push(t),L||(L=!0,R.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,i,r,s,a,c,h,p=[-1]){const u=b;$(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(u?u.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||u.$$.root};h&&h(d.root);let f=!1;if(d.ctx=r?r(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),f&&H(e,t)),n})):[],d.update(),f=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();i.intro&&N(e.$$.fragment),B(e,i.target,i.anchor,i.customElement),A()}$(u)}class J{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var M,K,V=(M=function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=w,n=a,o=c,i=l,r=v,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],o=0,i=0,r="";null!=(e=s.exec(t));){var a=e[0],c=e[1],l=e.index;if(r+=t.slice(i,l),i=l+a.length,c)r+=c[1];else{r&&(n.push(r),r="");var h=e[2],u=e[3],d=e[4],f=e[5],g=e[6],m=e[7],v="+"===g||"*"===g,w="?"===g||"*"===g,y=h||"/",b=d||f||(m?".*":"[^"+y+"]+?");n.push({name:u||o++,prefix:h||"",delimiter:y,optional:w,repeat:v,pattern:p(b)})}}return i<t.length&&(r+=t.substr(i)),r&&n.push(r),n}function c(t){return l(a(t))}function l(e){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^"+e[o].pattern+"$"));return function(o){for(var i="",r=o||{},s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=r[a.name];if(null==l){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=encodeURIComponent(l[h]),!n[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');i+=(0===h?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(l),!n[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');i+=a.prefix+c}}else i+=a}return i}}function h(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function p(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function u(t,e){return t.keys=e,t}function d(t){return t.sensitive?"":"i"}function f(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return u(t,e)}function g(t,e,n){for(var o=[],i=0;i<t.length;i++)o.push(w(t[i],e,n).source);return u(new RegExp("(?:"+o.join("|")+")",d(n)),e)}function m(t,e,n){for(var o=a(t),i=v(o,n),r=0;r<o.length;r++)"string"!=typeof o[r]&&e.push(o[r]);return u(i,e)}function v(t,e){for(var n=(e=e||{}).strict,o=!1!==e.end,i="",r=t[t.length-1],s="string"==typeof r&&/\/$/.test(r),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=h(c);else{var l=h(c.prefix),p=c.pattern;c.repeat&&(p+="(?:"+l+p+")*"),i+=p=c.optional?l?"(?:"+l+"("+p+"))?":"("+p+")?":l+"("+p+")"}}return n||(i=(s?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=o?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+i,d(e))}function w(e,n,o){return t(n=n||[])?o||(o={}):(o=n,n=[]),e instanceof RegExp?f(e,n):t(e)?g(e,n,o):m(e,n,o)}e.parse=n,e.compile=o,e.tokensToFunction=i,e.tokensToRegExp=r;var y,b="undefined"!=typeof document,$="undefined"!=typeof window,x="undefined"!=typeof history,_="undefined"!=typeof process,k=b&&document.ontouchstart?"touchstart":"click",C=$&&!(!window.history.location&&!window.location);function E(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function R(){var t=new E;function e(){return L.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=R,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=U,e.Route=A,e}function L(t,e){if("function"==typeof t)return L.call(this,"*",t);if("function"==typeof e)for(var n=new A(t,null,this),o=1;o<arguments.length;++o)this.callbacks.push(n.middleware(arguments[o]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function O(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?C&&this._getBase()+n.location.hash.replace("#!",""):C&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,C&&(n.location.href=t.canonicalPath))}}function S(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function U(t,e,n){var o=this.page=n||L,i=o._window,r=o._hashbang,s=o._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(r?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+S(s));if(this.path=t.replace(c,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&i.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?o._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=o._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=o._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}function A(t,n,o){var i=this.page=o||P,r=n||{};r.strict=r.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],r)}E.prototype.configure=function(t){var e=t||{};this._window=e.window||$&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&$,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):$&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(k,this.clickHandler,!1):b&&n.document.removeEventListener(k,this.clickHandler,!1),this._hashbang&&$&&!x?n.addEventListener("hashchange",this._onpopstate,!1):$&&n.removeEventListener("hashchange",this._onpopstate,!1)},E.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},E.prototype._getBase=function(){var t=this._base;if(t)return t;var e=$&&this._window&&this._window.location;return $&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},E.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},E.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,C){var o=this._window.location;n=this._hashbang&&~o.hash.indexOf("#!")?o.hash.substr(2)+o.search:this._hashbang?o.search+o.hash:o.pathname+o.search+o.hash}this.replace(n,null,!0,e.dispatch)}},E.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(k,this.clickHandler,!1),$&&t.removeEventListener("popstate",this._onpopstate,!1),$&&t.removeEventListener("hashchange",this._onpopstate,!1)}},E.prototype.show=function(t,e,n,o){var i=new U(t,e,this),r=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,r),!1!==i.handled&&!1!==o&&i.pushState(),i},E.prototype.back=function(t,e){var n=this;if(this.len>0){var o=this._window;x&&o.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},E.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&L.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},E.prototype.replace=function(t,e,n,o){var i=new U(t,e,this),r=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==o&&this.dispatch(i,r),i},E.prototype.dispatch=function(t,e){var n=0,o=0,i=this;function r(){var t=i.exits[o++];if(!t)return s();t(e,r)}function s(){var e=i.callbacks[n++];if(t.path===i.current)return e?void e(t,s):O.call(i,t);t.handled=!1}e?r():s()},E.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new A(t,null,this),o=1;o<arguments.length;++o)this.exits.push(n.middleware(arguments[o]))},E.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var o=0;o<n.length;o++)if(n[o].nodeName&&"A"===n[o].nodeName.toUpperCase()&&n[o].href){e=n[o];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var i="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var r=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==r)&&!(r&&r.indexOf("mailto:")>-1)&&!(i?e.target.baseVal:e.target)&&(i||this.sameOrigin(e.href))){var s=i?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,_&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var a=s,c=this._getBase();0===s.indexOf(c)&&(s=s.substr(c.length)),this._hashbang&&(s=s.replace("#!","")),(!c||a!==s||C&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},E.prototype._onpopstate=(y=!1,$?(b&&"complete"===document.readyState?y=!0:window.addEventListener("load",(function(){setTimeout((function(){y=!0}),0)})),function(t){if(y){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(C){var o=e._window.location;e.show(o.pathname+o.search+o.hash,void 0,void 0,!1)}}}):function(){}),E.prototype._which=function(t){return null==(t=t||$&&this._window.event).which?t.button:t.which},E.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&C)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},E.prototype.sameOrigin=function(t){if(!t||!C)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},E.prototype._samePath=function(t){if(!C)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},E.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},U.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,x&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},U.prototype.save=function(){var t=this.page;x&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},A.prototype.middleware=function(t){var e=this;return function(n,o){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,o);o()}},A.prototype.match=function(t,e){var n=this.keys,o=t.indexOf("?"),i=~o?t.slice(0,o):t,r=this.regexp.exec(decodeURIComponent(i));if(!r)return!1;delete e[0];for(var s=1,a=r.length;s<a;++s){var c=n[s-1],l=this.page._decodeURLEncodedURIComponent(r[s]);void 0===l&&hasOwnProperty.call(e,c.name)||(e[c.name]=l)}return!0};var P=R(),T=P,j=P;return T.default=j,T}()},M(K={exports:{}},K.exports),K.exports);function G(e){let n,i,r,s,p,d,m,w;return{c(){n=h("main"),i=h("input"),r=u(),s=h("div"),p=h("div"),p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right svelte-uoaktl"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',g(i,"placeholder",e[2]),g(i,"spellcheck","false"),g(i,"class","svelte-uoaktl"),g(p,"class","input-btn svelte-uoaktl"),g(s,"class","btn-wrapper svelte-uoaktl"),g(n,"class","wrapper svelte-uoaktl"),g(n,"style",d=e[1]?"display:none;":""),y(n,"focused",e[3])},m(t,o){c(t,n,o),a(n,i),v(i,e[0]),a(n,r),a(n,s),a(s,p),m||(w=[f(i,"input",e[6]),f(i,"focus",e[7]),f(i,"blur",e[8]),f(p,"click",e[5])],m=!0)},p(t,[e]){4&e&&g(i,"placeholder",t[2]),1&e&&i.value!==t[0]&&v(i,t[0]),2&e&&d!==(d=t[1]?"display:none;":"")&&g(n,"style",d),8&e&&y(n,"focused",t[3])},i:t,o:t,d(t){t&&l(n),m=!1,o(w)}}}function W(t,e,n){let{hidden:o=!1}=e,{placeholder:i=""}=e,{value:r=""}=e,s=!1;const a=t=>{n(3,s=t)};return t.$$set=t=>{"hidden"in t&&n(1,o=t.hidden),"placeholder"in t&&n(2,i=t.placeholder),"value"in t&&n(0,r=t.value)},[r,o,i,s,a,function(e){x.call(this,t,e)},function(){r=this.value,n(0,r)},()=>{a(!0)},()=>a(!1)]}class Z extends J{constructor(t){super(),q(this,t,W,G,r,{hidden:1,placeholder:2,value:0})}}function F(t){let e,n,o,i,r,s,p;function d(e){t[2](e)}let f={placeholder:"Room ID"};return void 0!==t[0]&&(f.value=t[0]),r=new Z({props:f}),k.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(r,"value",d))),r.$on("click",t[1]),{c(){e=u(),n=h("section"),o=h("h1"),o.textContent="DropNow",i=u(),I(r.$$.fragment),document.title="DropNow",g(o,"class","svelte-anrdqc"),g(n,"class","svelte-anrdqc")},m(t,s){c(t,e,s),c(t,n,s),a(n,o),a(n,i),B(r,n,null),p=!0},p(t,[e]){const n={};!s&&1&e&&(s=!0,n.value=t[0],function(t){E.push(t)}((()=>s=!1))),r.$set(n)},i(t){p||(N(r.$$.fragment,t),p=!0)},o(t){z(r.$$.fragment,t),p=!1},d(t){t&&l(e),t&&l(n),D(r)}}}function Q(t,e,n){let o;return[o,()=>V.redirect(`/room/${o}`),function(t){o=t,n(0,o)}]}class X extends J{constructor(t){super(),q(this,t,Q,F,r,{})}}function Y(t){let e,n,o,i,r,p,d,m;const v=t[2].default,w=function(t,e,n,o){if(t){const i=s(t,e,n,o);return t[0](i)}}(v,t,t[1],null);return{c(){e=h("main"),n=h("p"),w&&w.c(),o=u(),i=h("div"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right svelte-1o2lh0h"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',g(i,"class","arrow svelte-1o2lh0h"),g(e,"class","wrapper svelte-1o2lh0h"),g(e,"style",r=t[0]?"display:none;":"")},m(r,s){c(r,e,s),a(e,n),w&&w.m(n,null),a(e,o),a(e,i),p=!0,d||(m=f(e,"click",t[3]),d=!0)},p(t,[n]){w&&w.p&&(!p||2&n)&&function(t,e,n,o,i,r){if(i){const a=s(e,n,o,r);t.p(a,i)}}(w,v,t,t[1],p?function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(v,t[1],n,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null),(!p||1&n&&r!==(r=t[0]?"display:none;":""))&&g(e,"style",r)},i(t){p||(N(w,t),p=!0)},o(t){z(w,t),p=!1},d(t){t&&l(e),w&&w.d(t),d=!1,m()}}}function tt(t,e,n){let{$$slots:o={},$$scope:i}=e,{hidden:r=!1}=e;return t.$$set=t=>{"hidden"in t&&n(0,r=t.hidden),"$$scope"in t&&n(1,i=t.$$scope)},[r,i,o,function(e){x.call(this,t,e)}]}class et extends J{constructor(t){super(),q(this,t,tt,Y,r,{hidden:0})}}class nt{async connect(t){let e;return this.ws=new WebSocket(t),await new Promise(((t,n)=>this.ws.onopen=()=>{this.status="connected",this.ws.onmessage=({data:n})=>{e=JSON.parse(n),t()}})),this.ws.onclose=()=>this.status="closed",this.ws.onmessage=({data:t})=>{const e=JSON.parse(t);this.onsignal(e)},console.log(e),e}send(t){var e;null===(e=this.ws)||void 0===e||e.send(JSON.stringify(t))}}class ot{constructor(t,e){this.signalChannel=t,this.polite=e;this.pc=new RTCPeerConnection({iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}]}),this.state={makingOffer:!1,ignoreOffer:!1,isSettingRemoteAnswerPending:!1},this.pc.onicecandidate=({candidate:t})=>this.signalChannel.send({type:"ice-candidate",data:t}),this.signalChannel.onsignal=async({type:t,data:e})=>{try{if("sdp"==t){let t=e;const n=!this.state.makingOffer&&("stable"==this.pc.signalingState||this.state.isSettingRemoteAnswerPending),o="offer"==t.type&&!n;if(this.state.ignoreOffer=!this.polite&&o,this.state.ignoreOffer)return;this.state.isSettingRemoteAnswerPending="answer"==t.type,await this.pc.setRemoteDescription(t),this.state.isSettingRemoteAnswerPending=!1,"offer"==t.type&&(await this.pc.setLocalDescription(),this.signalChannel.send({type:"sdp",data:this.pc.localDescription}))}else if("ice-candidate"==t){let t=e;try{await this.pc.addIceCandidate(t)}catch(t){if(!this.state.ignoreOffer)throw t}}}catch(t){console.error(t)}}}async negotiate(){try{this.state.makingOffer=!0,await this.pc.setLocalDescription(),this.signalChannel.send({type:"sdp",data:this.pc.localDescription})}catch(t){console.error(t)}finally{this.state.makingOffer=!1}this.pc.onnegotiationneeded=this.negotiate}}function it(t){let e;function n(t,e){return"connecting"==t[1]?st:rt}let o=n(t),i=o(t);return{c(){i.c(),e=d()},m(t,n){i.m(t,n),c(t,e,n)},p(t,r){o!==(o=n(t))&&(i.d(1),i=o(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&l(e)}}}function rt(t){let e;return{c(){e=h("p"),e.textContent="Waiting for peer."},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function st(t){let e;return{c(){e=h("p"),e.textContent="Connecting..."},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function at(t){let e;return{c(){e=p("Send")},m(t,n){c(t,e,n)},d(t){t&&l(e)}}}function ct(t){let e,n,o,i,r,s,d,v,y,b,$,x,_,k,C,E,R,L,O,S,U,A,P,T,j,H,q,J,M,K,V,G,W,Z="connected"!=t[1]&&it(t);return v=new et({props:{hidden:"connected"!==t[1],$$slots:{default:[at]},$$scope:{ctx:t}}}),v.$on("click",t[7]),{c(){e=h("main"),n=h("h1"),n.textContent=`Room ${t[6]}`,o=u(),Z&&Z.c(),i=u(),r=h("input"),d=u(),I(v.$$.fragment),y=u(),b=h("div"),$=h("progress"),x=p(t[4]),_=p("%"),k=u(),C=h("progress"),E=p(t[5]),R=p("%"),L=u(),O=h("a"),O.textContent="download",S=u(),U=h("div"),A=h("p"),A.textContent="ws",P=u(),T=h("span"),H=u(),q=h("p"),q.textContent="rtc",J=u(),M=h("span"),r.hidden=s="connected"!==t[1],g(r,"type","file"),$.value=t[4],g($,"max","1"),C.value=t[5],g(C,"max","1"),w(b,"display","connected"!==t[1]?"none":"flex"),w(b,"flex-direction","column"),O.hidden=!0,g(O,"href","/#"),g(T,"class",j="status-dot "+("connected"==t[0].status?"green":"red")+" svelte-zdajb3"),g(M,"class",K="status-dot "+("connected"==t[1]?"green":"connecting"==t[1]?"yellow":"red")+" svelte-zdajb3"),g(U,"id","status"),g(U,"class","svelte-zdajb3")},m(s,l){c(s,e,l),a(e,n),a(e,o),Z&&Z.m(e,null),a(e,i),a(e,r),a(e,d),B(v,e,null),a(e,y),a(e,b),a(b,$),a($,x),a($,_),a(b,k),a(b,C),a(C,E),a(C,R),a(e,L),a(e,O),t[10](O),c(s,S,l),c(s,U,l),a(U,A),a(U,P),a(U,T),a(U,H),a(U,q),a(U,J),a(U,M),V=!0,G||(W=f(r,"change",t[9]),G=!0)},p(t,[n]){"connected"!=t[1]?Z?Z.p(t,n):(Z=it(t),Z.c(),Z.m(e,i)):Z&&(Z.d(1),Z=null),(!V||2&n&&s!==(s="connected"!==t[1]))&&(r.hidden=s);const o={};2&n&&(o.hidden="connected"!==t[1]),131072&n&&(o.$$scope={dirty:n,ctx:t}),v.$set(o),(!V||16&n)&&m(x,t[4]),(!V||16&n)&&($.value=t[4]),(!V||32&n)&&m(E,t[5]),(!V||32&n)&&(C.value=t[5]),(!V||2&n)&&w(b,"display","connected"!==t[1]?"none":"flex"),(!V||1&n&&j!==(j="status-dot "+("connected"==t[0].status?"green":"red")+" svelte-zdajb3"))&&g(T,"class",j),(!V||2&n&&K!==(K="status-dot "+("connected"==t[1]?"green":"connecting"==t[1]?"yellow":"red")+" svelte-zdajb3"))&&g(M,"class",K)},i(t){V||(N(v.$$.fragment,t),V=!0)},o(t){z(v.$$.fragment,t),V=!1},d(n){n&&l(e),Z&&Z.d(),D(v),t[10](null),n&&l(S),n&&l(U),G=!1,W()}}}function lt(t,e,n){let{params:o}=e;const{id:i}=o;let r,s,a,c;(async()=>{const t=window.location.hostname+":3000";n(0,r=new nt);let e=await r.connect(`ws://${t}/ws/${i}`);n(0,r.ws.onerror=t=>console.log(t),r),s=new ot(r,null==e?void 0:e.polite),c=s.pc.createDataChannel("dataChan",{negotiated:!0,id:0,ordered:!0}),c.binaryType="arraybuffer";let o,l=[],h=0;c.onmessage=t=>{var e;if(console.log("recieved:",t.data),"string"==typeof t.data){let i=JSON.parse(t.data);if(void 0!==(null===(e=i)||void 0===e?void 0:e.filename))o=i,l=[],h=0,n(5,f=0);else{if(i.done){const t=new Blob(l,{type:o.mime});console.log("blob len",t.size),n(3,u.href=URL.createObjectURL(t),u),n(3,u.download=o.filename,u),u.click()}}}else h+=t.data.byteLength,console.log(h),l.push(t.data),0!=o.size&&(n(5,f=h/o.size),console.log(f))},s.pc.onconnectionstatechange=()=>{n(1,a=s.pc.connectionState),"connected"===s.pc.connectionState&&console.log("connected!")},s.pc.oniceconnectionstatechange=()=>{switch(s.pc.iceConnectionState){case"closed":case"failed":s.pc.restartIce()}},(null==e?void 0:e.has_pair)&&s.negotiate()})();let l=0;const h=async(t,e,o)=>{c.bufferedAmount>c.bufferedAmountLowThreshold&&await new Promise(((t,e)=>{c.onbufferedamountlow=()=>{c.onbufferedamountlow=null,t()}}));let i=await o.slice(t,e).arrayBuffer();c.send(i),l+=i.byteLength,n(4,d=l/o.size)};let p,u,d=0,f=0;return t.$$set=t=>{"params"in t&&n(8,o=t.params)},[r,a,p,u,d,f,i,async()=>{if(console.log("here"),"open"==(null==c?void 0:c.readyState)){console.log("here2");var t=p[0];l=0,n(4,d=0);let e={filename:t.name,size:t.size,mime:t.type};c.send(JSON.stringify(e));let o=0,i=0;for(;i+65536<=t.size;)i+=65536,await h(o,i,t),o=i;i=t.size,await h(o,i,t);let r={done:!0,error:!1};c.send(JSON.stringify(r))}},o,function(){p=this.files,n(2,p)},function(t){k[t?"unshift":"push"]((()=>{u=t,n(3,u)}))}]}class ht extends J{constructor(t){super(),q(this,t,lt,ct,r,{params:8})}}function pt(e){let n,o,i;return{c(){n=h("main"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left svelte-o463b0"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg> \n    <h1 class="svelte-o463b0">404</h1>',g(n,"class","svelte-o463b0")},m(t,r){c(t,n,r),o||(i=f(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&l(n),o=!1,i()}}}function ut(t){return[()=>V.redirect("/")]}class dt extends J{constructor(t){super(),q(this,t,ut,pt,r,{})}}function ft(t){let e,n,i,r;var s=t[0];function a(t){return{props:{params:t[1]}}}return s&&(n=new s(a(t))),{c(){e=u(),n&&I(n.$$.fragment),i=d(),document.title="DropNow"},m(t,o){c(t,e,o),n&&B(n,t,o),c(t,i,o),r=!0},p(t,[e]){const r={};if(2&e&&(r.params=t[1]),s!==(s=t[0])){if(n){j={r:0,c:[],p:j};const t=n;z(t.$$.fragment,1,0,(()=>{D(t,1)})),j.r||o(j.c),j=j.p}s?(n=new s(a(t)),I(n.$$.fragment),N(n.$$.fragment,1),B(n,i.parentNode,i)):n=null}else s&&n.$set(r)},i(t){r||(n&&N(n.$$.fragment,t),r=!0)},o(t){n&&z(n.$$.fragment,t),r=!1},d(t){t&&l(e),t&&l(i),n&&D(n,t)}}}function gt(t,e,n){let o,i;return V("/",(()=>n(0,o=X))),V("/room/:id",((t,e)=>{n(1,i=t.params),e()}),(()=>n(0,o=ht))),V("*",(()=>n(0,o=dt))),V.start(),[o,i]}return new class extends J{constructor(t){super(),q(this,t,gt,ft,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
