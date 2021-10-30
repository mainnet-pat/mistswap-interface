"use strict";
exports.id = 2503;
exports.ids = [2503];
exports.modules = {

/***/ 2503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Z)
});

// UNUSED EXPORTS: SWRConfig, mutate, unstable_serialize, useSWRConfig

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

;// CONCATENATED MODULE: ./node_modules/swr/dist/index.esm.js
function l(e,r,n,t){return new(n||(n=Promise))(function(i,u){function a(e){try{c(t.next(e))}catch(e){u(e)}}function o(e){try{c(t.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?i(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r)})).then(a,o)}c((t=t.apply(e,r||[])).next())})}function s(e,r){var n,t,i,u,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function o(u){return function(o){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(i=2&u[0]?t.return:u[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,u[1])).done)return i;switch(t=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,t=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(e,a)}catch(e){u=[6,e],t=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}}var d={}[0],v=function(e){return e===d},h=function(e){return"function"==typeof e},g=function(){},p=function(e,r){return Object.assign({},e,r)},y=!0,b="undefined"!=typeof window,w="undefined"!=typeof document,m=b&&window.addEventListener?window.addEventListener:g,O=w?document.addEventListener:g,V={isOnline:function(){return y},isVisible:function(){var e=w&&document.visibilityState;return!!v(e)||"hidden"!==e}},T={initFocus:function(e){O("visibilitychange",e),m("focus",e)},initReconnect:function(e){m("online",function(){y=!0,e()}),m("offline",function(){y=!1})}},k="undefined"==typeof window||"Deno"in window,R=k?null:window.requestAnimationFrame,S=R?function(e){return R(e)}:function(e){return setTimeout(e,1)},E=k?external_react_.useEffect:external_react_.useLayoutEffect,I="undefined"!=typeof navigator&&navigator.connection,x=!k&&I&&(["slow-2g","2g"].includes(I.effectiveType)||I.saveData),P=new WeakMap,F=0;function L(e){if(h(e))try{e=e()}catch(r){e=""}var r;return Array.isArray(e)?(r=e,e=function(e){if(!e.length)return"";for(var r="arg",n=0;n<e.length;++n){var t=e[n],i=d;null===t||"object"!=typeof t&&!h(t)?i=JSON.stringify(t):P.has(t)?i=P.get(t):(i=F,P.set(t,F++)),r+="$"+i}return r}(e)):r=[e=String(e||"")],[e,r,e?"$err$"+e:"",e?"$req$"+e:""]}var M=new WeakMap,$=function(e,r,n,t,i,u){void 0===u&&(u=!1);var a=M.get(e),o=a[0],c=a[1],f=o[r],l=c[r];if(l)for(var s=0;s<l.length;++s)l[s](n,t,i);return u&&f&&f[0]?f[0](2).then(function(){return e.get(r)}):e.get(r)},C=0,D=function(){return++C},W=function(e,r,n,t){return void 0===t&&(t=!0),l(void 0,void 0,void 0,function(){var i,u,a,o,c,f,l,g,p,y,b;return s(this,function(s){switch(s.label){case 0:if(i=L(r),u=i[0],a=i[2],!u)return[2];if(o=M.get(e),c=o[2],f=o[3],v(n))return[2,$(e,u,e.get(u),e.get(a),d,t)];if(p=c[u]=D(),f[u]=0,h(n))try{n=n(e.get(u))}catch(e){n=d,g=e}if(!n||!h(n.then))return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,n];case 2:return l=s.sent(),[3,4];case 3:return y=s.sent(),g=y,[3,4];case 4:if(p!==c[u]){if(g)throw g;return[2,l]}return[3,6];case 5:l=n,s.label=6;case 6:return v(l)||e.set(u,l),e.set(a,g),f[u]=D(),[4,$(e,u,l,g,d,t)];case 7:if(b=s.sent(),g)throw g;return[2,b]}})})};function j(e,r){for(var n in e)e[n][0]&&e[n][0](r)}function q(e,r){if(!M.has(e)){var n=p(T,r),t={},i=W.bind(d,e);return M.set(e,[t,{},{},{},{},{},i]),k||(n.initFocus(j.bind(d,t,0)),n.initReconnect(j.bind(d,t,1))),[e,i]}}var A=q(new Map),G=A[0],H=A[1],J=p({onLoadingSlow:g,onSuccess:g,onError:g,onErrorRetry:function(e,r,n,t,i){if(V.isVisible()){var u=n.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!v(u)&&a>u||setTimeout(t,o,i)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:dequal,isPaused:function(){return!1},cache:G,mutate:H,fallback:{}},V);function N(e,r){var n=p(e,r);if(!r)return n;var t=e.use,i=e.fallback,u=r.use,a=r.fallback;return t&&u&&(n.use=t.concat(u)),i&&a&&(n.fallback=p(i,a)),n}var z=(0,external_react_.createContext)({});function B(e){return h(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var K,Q=function(e,r,n){var t=r[e]||(r[e]=[]);return t.push(n),function(){var e=t.indexOf(n);e>=0&&(t[e]=t[t.length-1],t.pop())}},U={dedupe:!0},X=Object.defineProperty(function(e){var r=e.children,n=e.value,a=N((0,external_react_.useContext)(z),n),o=n&&n.provider,c=(0,external_react_.useState)(function(){return o?q(o(a.cache||G),n):d})[0];return c&&(a.cache=c[0],a.mutate=c[1]),(0,external_react_.createElement)(z.Provider,{value:a},r)},"default",{value:J}),Y=function(e){return L(e)[0]},Z=(K=function(e,r,n){var t=n.cache,u=n.compare,f=n.fallbackData,h=n.suspense,g=n.revalidateOnMount,y=n.refreshInterval,b=n.refreshWhenHidden,w=n.refreshWhenOffline,m=M.get(t),O=m[0],V=m[1],T=m[2],R=m[3],I=m[4],x=m[5],P=L(e),F=P[0],C=P[1],j=P[2],q=P[3],A=(0,external_react_.useRef)(!1),G=(0,external_react_.useRef)(!1),H=(0,external_react_.useRef)(F),J=(0,external_react_.useRef)(n),N=t.get(F),z=v(f)?n.fallback[F]:f,B=v(N)?z:N,K=t.get(j),X=function(){return v(g)?h?!A.current&&!v(B):v(B)||n.revalidateIfStale:g},Y=!(!F||!r)&&(!!t.get(q)||!A.current&&X()),Z=function(e,r){var n=(0,external_react_.useState)({})[1],t=(0,external_react_.useRef)(e),u=(0,external_react_.useRef)({data:!1,error:!1,isValidating:!1}),c=(0,external_react_.useCallback)(function(e){var i=!1,a=t.current;for(var o in e){var c=o;a[c]!==e[c]&&(a[c]=e[c],u.current[c]&&(i=!0))}i&&!r.current&&n({})},[]);return E(function(){t.current=e}),[t,u.current,c]}({data:B,error:K,isValidating:Y},G),_=Z[0],ee=Z[1],re=Z[2],ne=(0,external_react_.useCallback)(function(e){return l(void 0,void 0,void 0,function(){var i,a,o,c,f,l,h,g,p;return s(this,function(s){switch(s.label){case 0:if(!F||!r||G.current||J.current.isPaused())return[2,!1];o=!0,c=e||{},f=!v(I[F])&&c.dedupe,l=function(){return!G.current&&F===H.current&&A.current},h=function(){delete I[F],delete x[F]},s.label=1;case 1:return s.trys.push([1,6,,7]),t.set(q,!0),re({isValidating:!0}),f||$(t,F,_.current.data,_.current.error,!0),f?(a=x[F],[4,I[F]]):[3,3];case 2:return i=s.sent(),[3,5];case 3:return n.loadingTimeout&&!t.get(F)&&setTimeout(function(){o&&l()&&J.current.onLoadingSlow(F,n)},n.loadingTimeout),x[F]=a=D(),[4,I[F]=r.apply(r,C)];case 4:i=s.sent(),setTimeout(function(){x[F]===a&&h()},n.dedupingInterval),l()&&J.current.onSuccess(i,F,n),s.label=5;case 5:return x[F]!==a?[2,!1]:!v(T[F])&&(a<=T[F]||a<=R[F]||0===R[F])?(re({isValidating:!1}),[2,!1]):(t.set(j,d),t.set(q,!1),g={isValidating:!1},v(_.current.error)||(g.error=d),u(_.current.data,i)||(g.data=i),u(t.get(F),i)||t.set(F,i),re(g),f||$(t,F,i,g.error,!1),[3,7]);case 6:return p=s.sent(),h(),J.current.isPaused()?(re({isValidating:!1}),[2,!1]):(t.set(j,p),_.current.error!==p&&(re({isValidating:!1,error:p}),f||$(t,F,d,p,!1)),l()&&(J.current.onError(p,F,n),n.shouldRetryOnError&&J.current.onErrorRetry(p,F,n,ne,{retryCount:(c.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return o=!1,[2,!0]}})})},[F]),te=(0,external_react_.useCallback)(function(e,r){return W(t,H.current,e,r)},[]);if(E(function(){J.current=n}),E(function(){if(F){var e=A.current,r=ne.bind(d,U),n=function(){return J.current.isVisible()&&J.current.isOnline()},t=0,i=Q(F,V,function(e,r,n){re(p({error:r,isValidating:n},u(e,_.current.data)?null:{data:e}))}),a=Q(F,O,function(e){if(0===e){var i=Date.now();J.current.revalidateOnFocus&&i>t&&n()&&(t=i+J.current.focusThrottleInterval,r())}else if(1===e)J.current.revalidateOnReconnect&&n()&&r();else if(2===e)return ne()});return G.current=!1,H.current=F,e&&re({data:B,error:K,isValidating:Y}),(e||X())&&(v(B)||k?r():S(r)),A.current=!0,function(){G.current=!0,i(),a()}}},[F,ne]),E(function(){var e;function r(){y&&-1!==e&&(e=setTimeout(t,y))}function t(){_.current.error||!b&&!n.isVisible()||!w&&!n.isOnline()?r():ne(U).then(function(){return r()})}return r(),function(){e&&(clearTimeout(e),e=-1)}},[y,b,w,ne]),(0,external_react_.useDebugValue)(B),h&&v(B))throw v(K)?ne(U):K;return{mutate:te,get data(){return ee.data=!0,B},get error(){return ee.error=!0,K},get isValidating(){return ee.isValidating=!0,Y}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=B(e),i=n[0],u=n[1],a=n[2],o=p(J,(0,external_react_.useContext)(z)),c=N(o,a),f=K,l=c.use;if(l)for(var s=l.length;s-- >0;)f=l[s](f);return f(i,u||c.fetcher,c)}),_=function(){return p(J,t(z))};


/***/ })

};
;
//# sourceMappingURL=2503.js.map