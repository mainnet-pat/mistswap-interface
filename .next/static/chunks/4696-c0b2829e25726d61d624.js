"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4696],{6654:function(e,r,n){n.d(r,{r:function(){return b}});var t=n(19642),i=n(67294),u=n(58529),o=n(57471),a=n(62659),c=n(79016),l=n(92506),s=n(87587),f=n(56637),d=n(60852),v=(0,i.createContext)(null);function p(){var e=(0,i.useContext)(v);if(null===e){var r=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,p),r}return e}var h=(0,i.createContext)(null);h.displayName="GroupContext";var g=i.Fragment;function b(e){var r=e.checked,n=e.onChange,s=(0,t.gK)(e,["checked","onChange"]),d="headlessui-switch-"+(0,l.M)(),v=(0,i.useContext)(h),p=(0,i.useRef)(null),g=(0,o.T)(p,null===v?null:v.setSwitch),b=(0,i.useCallback)((function(){return n(!r)}),[n,r]),y=(0,i.useCallback)((function(e){if((0,c.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),b()}),[b]),w=(0,i.useCallback)((function(e){e.key!==a.R.Tab&&e.preventDefault(),e.key===a.R.Space&&b()}),[b]),m=(0,i.useCallback)((function(e){return e.preventDefault()}),[]),k=(0,i.useMemo)((function(){return{checked:r}}),[r]),O={id:d,ref:g,role:"switch",type:(0,f.f)(e,p),tabIndex:0,"aria-checked":r,"aria-labelledby":null==v?void 0:v.labelledby,"aria-describedby":null==v?void 0:v.describedby,onClick:y,onKeyUp:w,onKeyPress:m};return(0,u.sY)({props:(0,t.gY)({},s,O),slot:k,defaultTag:"button",name:"Switch"})}b.Group=function(e){var r=(0,i.useState)(null),n=r[0],t=r[1],o=function(){var e=(0,i.useState)([]),r=e[0],n=e[1];return[r.length>0?r.join(" "):void 0,(0,i.useMemo)((function(){return function(e){var r=(0,i.useCallback)((function(e){return n((function(r){return[].concat(r,[e])})),function(){return n((function(r){var n=r.slice(),t=n.indexOf(e);return-1!==t&&n.splice(t,1),n}))}}),[]),t=(0,i.useMemo)((function(){return{register:r,slot:e.slot,name:e.name,props:e.props}}),[r,e.slot,e.name,e.props]);return i.createElement(v.Provider,{value:t},e.children)}}),[n])]}(),a=o[0],c=o[1],l=(0,s.f)(),f=l[0],d=l[1],p=(0,i.useMemo)((function(){return{switch:n,setSwitch:t,labelledby:a,describedby:f}}),[n,t,a,f]);return i.createElement(d,{name:"Switch.Description"},i.createElement(c,{name:"Switch.Label",props:{onClick:function(){n&&(n.click(),n.focus({preventScroll:!0}))}}},i.createElement(h.Provider,{value:p},(0,u.sY)({props:e,defaultTag:g,name:"Switch.Group"}))))},b.Label=function(e){var r=e.passive,n=void 0!==r&&r,i=(0,t.gK)(e,["passive"]),o=p(),a="headlessui-label-"+(0,l.M)();(0,d.e)((function(){return o.register(a)}),[a,o.register]);var c=(0,t.gY)({},o.props,{id:a}),s=(0,t.gY)({},i,c);return n&&delete s.onClick,(0,u.sY)({props:s,slot:o.slot||{},defaultTag:"label",name:o.name||"Label"})},b.Description=s.d},99548:function(e,r,n){var t=n(67294),i=n(45697),u=n.n(i);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=(0,t.forwardRef)((function(e,r){var n=e.color,i=void 0===n?"currentColor":n,u=e.size,c=void 0===u?24:u,l=a(e,["color","size"]);return t.createElement("svg",o({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("circle",{cx:"12",cy:"12",r:"10"}),t.createElement("polyline",{points:"16 12 12 8 8 12"}),t.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));c.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},c.displayName="ArrowUpCircle",r.Z=c},78268:function(e,r,n){var t=n(67294),i=n(45697),u=n.n(i);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=(0,t.forwardRef)((function(e,r){var n=e.color,i=void 0===n?"currentColor":n,u=e.size,c=void 0===u?24:u,l=a(e,["color","size"]);return t.createElement("svg",o({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}));c.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},c.displayName="X",r.Z=c},52503:function(e,r,n){n.d(r,{ZP:function(){return _}});var t=n(67294),i=Object.prototype.hasOwnProperty;function u(e,r,n,t){return new(n||(n=Promise))((function(i,u){function o(e){try{c(t.next(e))}catch(e){u(e)}}function a(e){try{c(t.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?i(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,a)}c((t=t.apply(e,r||[])).next())}))}function o(e,r){var n,t,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,t&&(i=2&u[0]?t.return:u[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,u[1])).done)return i;switch(t=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,t=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=r.call(e,o)}catch(e){u=[6,e],t=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var a={}[0],c=function(e){return e===a},l=function(e){return"function"==typeof e},s=function(){},f=function(e,r){return Object.assign({},e,r)},d=!0,v="undefined"!=typeof window,p="undefined"!=typeof document,h=v&&window.addEventListener?window.addEventListener:s,g=p?document.addEventListener:s,b={isOnline:function(){return d},isVisible:function(){var e=p&&document.visibilityState;return!!c(e)||"hidden"!==e}},y={initFocus:function(e){g("visibilitychange",e),h("focus",e)},initReconnect:function(e){h("online",(function(){d=!0,e()})),h("offline",(function(){d=!1}))}},w="undefined"==typeof window||"Deno"in window,m=w?null:window.requestAnimationFrame,k=m?function(e){return m(e)}:function(e){return setTimeout(e,1)},O=w?t.useEffect:t.useLayoutEffect,x="undefined"!=typeof navigator&&navigator.connection,E=!w&&x&&(["slow-2g","2g"].includes(x.effectiveType)||x.saveData),S=new WeakMap,C=0;function T(e){if(l(e))try{e=e()}catch(r){e=""}var r;return Array.isArray(e)?(r=e,e=function(e){if(!e.length)return"";for(var r="arg",n=0;n<e.length;++n){var t=e[n],i=a;null===t||"object"!=typeof t&&!l(t)?i=JSON.stringify(t):S.has(t)?i=S.get(t):(i=C,S.set(t,C++)),r+="$"+i}return r}(e)):r=[e=String(e||"")],[e,r,e?"$err$"+e:"",e?"$req$"+e:""]}var R=new WeakMap,j=function(e,r,n,t,i,u){void 0===u&&(u=!1);var o=R.get(e),a=o[0],c=o[1],l=a[r],s=c[r];if(s)for(var f=0;f<s.length;++f)s[f](n,t,i);return u&&l&&l[0]?l[0](2).then((function(){return e.get(r)})):e.get(r)},P=0,V=function(){return++P},L=function(e,r,n,t){return void 0===t&&(t=!0),u(void 0,void 0,void 0,(function(){var i,u,s,f,d,v,p,h,g,b,y;return o(this,(function(o){switch(o.label){case 0:if(i=T(r),u=i[0],s=i[2],!u)return[2];if(f=R.get(e),d=f[2],v=f[3],c(n))return[2,j(e,u,e.get(u),e.get(s),a,t)];if(g=d[u]=V(),v[u]=0,l(n))try{n=n(e.get(u))}catch(e){n=a,h=e}if(!n||!l(n.then))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,n];case 2:return p=o.sent(),[3,4];case 3:return b=o.sent(),h=b,[3,4];case 4:if(g!==d[u]){if(h)throw h;return[2,p]}return[3,6];case 5:p=n,o.label=6;case 6:return c(p)||e.set(u,p),e.set(s,h),v[u]=V(),[4,j(e,u,p,h,a,t)];case 7:if(y=o.sent(),h)throw h;return[2,y]}}))}))};function D(e,r){for(var n in e)e[n][0]&&e[n][0](r)}function I(e,r){if(!R.has(e)){var n=f(y,r),t={},i=L.bind(a,e);return R.set(e,[t,{},{},{},{},{},i]),w||(n.initFocus(D.bind(a,t,0)),n.initReconnect(D.bind(a,t,1))),[e,i]}}var M=I(new Map),Y=M[0],z=M[1],F=f({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:function(e,r,n,t,i){if(b.isVisible()){var u=n.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;!c(u)&&o>u||setTimeout(t,a,i)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:E?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:E?5e3:3e3,compare:function e(r,n){var t,u;if(r===n)return!0;if(r&&n&&(t=r.constructor)===n.constructor){if(t===Date)return r.getTime()===n.getTime();if(t===RegExp)return r.toString()===n.toString();if(t===Array){if((u=r.length)===n.length)for(;u--&&e(r[u],n[u]););return-1===u}if(!t||"object"===typeof r){for(t in u=0,r){if(i.call(r,t)&&++u&&!i.call(n,t))return!1;if(!(t in n)||!e(r[t],n[t]))return!1}return Object.keys(n).length===u}}return r!==r&&n!==n},isPaused:function(){return!1},cache:Y,mutate:z,fallback:{}},b);function N(e,r){var n=f(e,r);if(!r)return n;var t=e.use,i=e.fallback,u=r.use,o=r.fallback;return t&&u&&(n.use=t.concat(u)),i&&o&&(n.fallback=f(i,o)),n}var W=(0,t.createContext)({});function A(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var $,G=function(e,r,n){var t=r[e]||(r[e]=[]);return t.push(n),function(){var e=t.indexOf(n);e>=0&&(t[e]=t[t.length-1],t.pop())}},K={dedupe:!0},_=(Object.defineProperty((function(e){var r=e.children,n=e.value,i=N((0,t.useContext)(W),n),u=n&&n.provider,o=(0,t.useState)((function(){return u?I(u(i.cache||Y),n):a}))[0];return o&&(i.cache=o[0],i.mutate=o[1]),(0,t.createElement)(W.Provider,{value:i},r)}),"default",{value:F}),$=function(e,r,n){var i=n.cache,l=n.compare,s=n.fallbackData,d=n.suspense,v=n.revalidateOnMount,p=n.refreshInterval,h=n.refreshWhenHidden,g=n.refreshWhenOffline,b=R.get(i),y=b[0],m=b[1],x=b[2],E=b[3],S=b[4],C=b[5],P=T(e),D=P[0],I=P[1],M=P[2],Y=P[3],z=(0,t.useRef)(!1),F=(0,t.useRef)(!1),N=(0,t.useRef)(D),W=(0,t.useRef)(n),A=i.get(D),$=c(s)?n.fallback[D]:s,_=c(A)?$:A,Z=i.get(M),q=function(){return c(v)?d?!z.current&&!c(_):c(_)||n.revalidateIfStale:v},B=!(!D||!r)&&(!!i.get(Y)||!z.current&&q()),U=function(e,r){var n=(0,t.useState)({})[1],i=(0,t.useRef)(e),u=(0,t.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,t.useCallback)((function(e){var t=!1,o=i.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(t=!0))}t&&!r.current&&n({})}),[]);return O((function(){i.current=e})),[i,u.current,o]}({data:_,error:Z,isValidating:B},F),H=U[0],J=U[1],X=U[2],Q=(0,t.useCallback)((function(e){return u(void 0,void 0,void 0,(function(){var t,u,s,f,d,v,p,h,g;return o(this,(function(o){switch(o.label){case 0:if(!D||!r||F.current||W.current.isPaused())return[2,!1];s=!0,f=e||{},d=!c(S[D])&&f.dedupe,v=function(){return!F.current&&D===N.current&&z.current},p=function(){delete S[D],delete C[D]},o.label=1;case 1:return o.trys.push([1,6,,7]),i.set(Y,!0),X({isValidating:!0}),d||j(i,D,H.current.data,H.current.error,!0),d?(u=C[D],[4,S[D]]):[3,3];case 2:return t=o.sent(),[3,5];case 3:return n.loadingTimeout&&!i.get(D)&&setTimeout((function(){s&&v()&&W.current.onLoadingSlow(D,n)}),n.loadingTimeout),C[D]=u=V(),[4,S[D]=r.apply(r,I)];case 4:t=o.sent(),setTimeout((function(){C[D]===u&&p()}),n.dedupingInterval),v()&&W.current.onSuccess(t,D,n),o.label=5;case 5:return C[D]!==u?[2,!1]:!c(x[D])&&(u<=x[D]||u<=E[D]||0===E[D])?(X({isValidating:!1}),[2,!1]):(i.set(M,a),i.set(Y,!1),h={isValidating:!1},c(H.current.error)||(h.error=a),l(H.current.data,t)||(h.data=t),l(i.get(D),t)||i.set(D,t),X(h),d||j(i,D,t,h.error,!1),[3,7]);case 6:return g=o.sent(),p(),W.current.isPaused()?(X({isValidating:!1}),[2,!1]):(i.set(M,g),H.current.error!==g&&(X({isValidating:!1,error:g}),d||j(i,D,a,g,!1)),v()&&(W.current.onError(g,D,n),n.shouldRetryOnError&&W.current.onErrorRetry(g,D,n,Q,{retryCount:(f.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return s=!1,[2,!0]}}))}))}),[D]),ee=(0,t.useCallback)((function(e,r){return L(i,N.current,e,r)}),[]);if(O((function(){W.current=n})),O((function(){if(D){var e=z.current,r=Q.bind(a,K),n=function(){return W.current.isVisible()&&W.current.isOnline()},t=0,i=G(D,m,(function(e,r,n){X(f({error:r,isValidating:n},l(e,H.current.data)?null:{data:e}))})),u=G(D,y,(function(e){if(0===e){var i=Date.now();W.current.revalidateOnFocus&&i>t&&n()&&(t=i+W.current.focusThrottleInterval,r())}else if(1===e)W.current.revalidateOnReconnect&&n()&&r();else if(2===e)return Q()}));return F.current=!1,N.current=D,e&&X({data:_,error:Z,isValidating:B}),(e||q())&&(c(_)||w?r():k(r)),z.current=!0,function(){F.current=!0,i(),u()}}}),[D,Q]),O((function(){var e;function r(){p&&-1!==e&&(e=setTimeout(t,p))}function t(){H.current.error||!h&&!n.isVisible()||!g&&!n.isOnline()?r():Q(K).then((function(){return r()}))}return r(),function(){e&&(clearTimeout(e),e=-1)}}),[p,h,g,Q]),(0,t.useDebugValue)(_),d&&c(_))throw c(Z)?Q(K):Z;return{mutate:ee,get data(){return J.data=!0,_},get error(){return J.error=!0,Z},get isValidating(){return J.isValidating=!0,B}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=A(e),i=n[0],u=n[1],o=n[2],a=f(F,(0,t.useContext)(W)),c=N(a,o),l=$,s=c.use;if(s)for(var d=s.length;d-- >0;)l=s[d](l);return l(i,u||c.fetcher,c)})}}]);
//# sourceMappingURL=4696-c0b2829e25726d61d624.js.map