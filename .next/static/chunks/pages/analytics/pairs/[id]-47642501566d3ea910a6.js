(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9913],{51208:function(e,t,n){"use strict";var o,i,r=n(42982),s=n(44925),l=n(4942),c=n(57754),d=n(67294),a=n(15914),u=n(32045),v=n(53278),h=n(85893),m=["currency","size","style","className"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var p=(o={},(0,l.Z)(o,c.a_.SMARTBCH,"smartbch"),(0,l.Z)(o,c.a_.SMARTBCH_AMBER,"amber"),o);var x="https://raw.githubusercontent.com/mistswapdex/icons/master/token/bch.jpg",b=(i={},(0,l.Z)(i,c.a_.SMARTBCH,x),(0,l.Z)(i,c.a_.SMARTBCH_AMBER,x),i),g="https://raw.githubusercontent.com/mistswapdex/icons/master/token/unknown.png";t.Z=function(e){var t=e.currency,n=e.size,o=void 0===n?"24px":n,i=(e.style,e.className),x=void 0===i?"":i,j=(0,s.Z)(e,m),y=(0,v.Z)(t instanceof u.D?t.logoURI||t.tokenInfo.logoURI:void 0),w=(0,d.useMemo)((function(){if(!t)return[g];if(t.isNative||t.equals(c.FX[t.chainId]))return[b[t.chainId],g];if(t.isToken){var e=(0,r.Z)(function(e){var t=[];return t.push("https://raw.githubusercontent.com/mistswapdex/icons/master/token/".concat(function(e){return"WBCH"===e.symbol?"bch":e.symbol.toLowerCase()}(e),".jpg")),e.chainId in p&&(t.push("https://raw.githubusercontent.com/mistswapdex/assets/master/blockchains/".concat(p[e.chainId],"/assets/").concat(e.address,"/logo.png")),t.push("https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/".concat(p[e.chainId],"/assets/").concat(e.address,"/logo.png"))),t}(t));return t instanceof u.D?[].concat((0,r.Z)(y),(0,r.Z)(e),[g]):e}}),[t,y]);return(0,h.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({srcs:w,width:o,height:o,alt:null===t||void 0===t?void 0:t.symbol,className:x},j))}},15579:function(e,t,n){"use strict";var o=n(4942),i=n(44925),r=n(25675),s=n(85893),l=["src","width","height","layout","loader","style"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t,n,o,c=e.src,a=e.width,u=void 0===a?void 0:a,v=e.height,h=void 0===v?void 0:v,m=e.layout,f=void 0===m?void 0:m,p=(e.loader,e.style,(0,i.Z)(e,l)),x=parseInt(String(h),10)>=40&&parseInt(String(u),10)>=40;return(0,s.jsx)("div",{style:{width:u,height:h},className:"overflow-hidden rounded",children:x?(0,s.jsx)(r.default,d({loader:function(){return c},src:c,width:u,height:h,layout:f,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((n=u,o=h,t='\n<svg width="'.concat(n,'" height="').concat(o,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(n,'" height="').concat(o,'" fill="#333" />\n  <rect id="r" width="').concat(n,'" height="').concat(o,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(n,'" to="').concat(n,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(t)))},p)):(0,s.jsx)(r.default,d({loader:function(){return c},src:c,width:u,height:h,layout:f,placeholder:"empty"},p))})}},15914:function(e,t,n){"use strict";var o=n(4942),i=n(44925),r=n(67294),s=n(15579),l=n(97735),c=n(85893),d=["srcs","width","height","style","alt","className"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={};t.Z=function(e){var t=e.srcs,n=e.width,o=e.height,a=e.style,h=e.alt,m=void 0===h?"":h,f=e.className,p=(0,i.Z)(e,d),x=(0,r.useState)(0)[1],b=t.find((function(e){return!v[e]}));return(0,c.jsx)("div",{className:"rounded",style:u({width:n,height:o},a),children:(0,c.jsx)(s.Z,u({src:b||"https://raw.githubusercontent.com/mistswapdex/icons/master/token/unknown.png",loader:function(){return b},onError:function(){b&&(v[b]=!0),x((function(e){return e+1}))},width:n,height:o,alt:m,layout:"fixed",className:(0,l.AK)("rounded",f)},p))})}},14593:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(97735),i=n(85893);function r(e){var t=e.number,n=e.scaleNumber,r=void 0===n||n,s=e.percent,l=void 0!==s&&s,c=e.className,d=void 0===c?"":c;return(isNaN(t)||t===1/0)&&(t=0),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:(0,o.AK)(t>=0?"text-green":"text-red","font-normal",d),children:(t>=0?"+":"-")+(l?(0,o.T3)(t).replace("-",""):r?(0,o.nH)(t,!0).replace("-",""):(0,o.uf)(t,!0,!1).replace("-",""))})})}},53278:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(97025),i=n(31302),r=n(16979),s=n(97735),l=n(6253),c=n(67294),d=n(30879);function a(e){var t=(0,c.useMemo)((function(){return e?(0,i.y)(e):void 0}),[e]),n=function(e){var t,n,o,i=(0,c.useMemo)((function(){if(!e)return[void 0];try{return e?[(0,l.V)(e)]:[void 0]}catch(t){return[void 0]}}),[e]),a=(0,r.zb)(!1),u=(0,d.Wk)(a,"resolver",i),v=null===(t=u.result)||void 0===t?void 0:t[0],h=(0,r.uU)(v&&(0,s.Fr)(v)?void 0:v,!1),m=(0,d.Wk)(h,"contenthash",i);return{contenthash:null!==(n=null===(o=m.result)||void 0===o?void 0:o[0])&&void 0!==n?n:null,loading:u.loading||m.loading}}(null===t||void 0===t?void 0:t.ensName);return(0,c.useMemo)((function(){return t?n.contenthash?(0,o.ie)((0,o.il)(n.contenthash)):[]:e?(0,o.ie)(e):[]}),[t,n.contenthash,e])}},309:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var o=n(4942),i=n(70885),r=n(67294),s=n(18724),l=n(11163),c=n(74596),d=n(99477),a=n(73734),u=n(96486),v=n(51208),h=n(97735),m=n(84624),f=n(85893),p={liquidity:{header:"Liquidity",getData:function(e,t,n,o){return{figure:null===e||void 0===e?void 0:e.reserveUSD,change:(null===e||void 0===e?void 0:e.reserveUSD)/(null===t||void 0===t?void 0:t.reserveUSD)*100-100,chart:null===o||void 0===o?void 0:o.sort((function(e,t){return e.date-t.date})).map((function(e,t){return{x:t,y:Number(e.liquidityUSD)}}))}}},volume:{header:"Volume",getData:function(e,t,n,o){return{figure:(null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD),change:((null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD))/((null===t||void 0===t?void 0:t.volumeUSD)-(null===n||void 0===n?void 0:n.volumeUSD))*100-100,chart:null===o||void 0===o?void 0:o.sort((function(e,t){return e.date-t.date})).map((function(e,t){return{x:t,y:Number(e.volumeUSD)}}))}}}};function x(e){var t,n,o,i=(0,r.useState)("1M"),s=i[0],l=i[1],c=p[e.type],a=(0,d.rL)({daysAgo:1}),u=(0,d.rL)({daysAgo:2}),v=null===(t=(0,d.__)({subset:[e.pair],shouldFetch:!!e.pair}))||void 0===t?void 0:t[0],h=null===(n=(0,d.__)({subset:[e.pair],block:a,shouldFetch:!!e.pair&&!!a}))||void 0===n?void 0:n[0],x=null===(o=(0,d.__)({subset:[e.pair],block:u,shouldFetch:!!e.pair&&!!u}))||void 0===o?void 0:o[0],b=(0,d.Yg)({first:"1W"===s?7:"1M"===s?30:void 0}),g=(0,r.useMemo)((function(){return c.getData(v,h,x,b)}),[v,h,x,b]);return(0,f.jsx)(m.Z,{header:c.header,subheader:e.name,figure:g.figure,change:g.change,chart:g.chart,currentTimespan:s,timespans:["1W","1M","ALL"],setTimespan:l})}var b=n(54288),g=n(59046),j=n(41664),y=n(63555),w=n(19677),k=n(33016),O=n(76049),N=n(63802),D=n(39202),P=n(33302);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(){var e,t,n,o,m,p,Z,_,M,U,A,E,C,T,I,L,H,R,F,q,z,B,W,G=(0,l.useRouter)(),X=G.query.id.toLowerCase(),V=(0,D.aQ)().chainId,K=(0,k.Z)(),Q=(0,i.Z)(K,2),Y=Q[0],$=Q[1],J=(0,d.rL)({daysAgo:1}),ee=(0,d.rL)({daysAgo:2}),te=null===(e=(0,d.__)({subset:[X]}))||void 0===e?void 0:e[0],ne=null===(t=(0,d.__)({subset:[X],block:J,shouldFetch:!!J}))||void 0===t?void 0:t[0],oe=null===(n=(0,d.__)({subset:[X],block:ee,shouldFetch:!!ee}))||void 0===n?void 0:n[0],ie=(0,d.k$)(),re=(0,d.nC)({pairs:[X]}),se=(0,r.useMemo)((function(){return null===re||void 0===re?void 0:re.map((function(e){var t={value:e.amountUSD,address:e.to,time:new Date(1e3*Number(e.timestamp))};return"0"===e.amount0In?S({symbols:{incoming:e.pair.token1.symbol,outgoing:e.pair.token0.symbol},incomingAmt:"".concat((0,h.uf)(e.amount1In)," ").concat(e.pair.token1.symbol),outgoingAmt:"".concat((0,h.uf)(e.amount0Out)," ").concat(e.pair.token0.symbol)},t):S({symbols:{incoming:e.pair.token0.symbol,outgoing:e.pair.token1.symbol},incomingAmt:"".concat((0,h.uf)(e.amount0In)," ").concat(e.pair.token0.symbol),outgoingAmt:"".concat((0,h.uf)(e.amount1Out)," ").concat(e.pair.token1.symbol)},t)}))}),[re]),le=(0,a.U8)(null===te||void 0===te||null===(o=te.token0)||void 0===o?void 0:o.id),ce=(0,a.U8)(null===te||void 0===te||null===(m=te.token1)||void 0===m?void 0:m.id),de=(0,r.useMemo)((function(){return(null===te||void 0===te?void 0:te.reserveUSD)/(null===ne||void 0===ne?void 0:ne.reserveUSD)*100-100}),[te,ne]),ae=(0,r.useMemo)((function(){return(null===te||void 0===te?void 0:te.volumeUSD)-(null===ne||void 0===ne?void 0:ne.volumeUSD)}),[te,ne]),ue=(0,r.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne.volumeUSD)-(null===oe||void 0===oe?void 0:oe.volumeUSD)}),[ne,oe]),ve=(0,r.useMemo)((function(){return ae/ue*100-100}),[ae,ue]),he=(0,r.useMemo)((function(){return(null===te||void 0===te?void 0:te.txCount)-(null===ne||void 0===ne?void 0:ne.txCount)}),[te,ne]),me=(0,r.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne.txCount)-(null===oe||void 0===oe?void 0:oe.txCount)}),[ne,oe]),fe=(0,r.useMemo)((function(){return he/me*100-100}),[he,me]),pe=(0,r.useMemo)((function(){return ae/he}),[ae,he]),xe=(0,r.useMemo)((function(){return ue/me}),[ue,me]),be=(0,r.useMemo)((function(){return pe/xe*100-100}),[pe,xe]),ge=(0,r.useMemo)((function(){return ae/(null===te||void 0===te?void 0:te.reserveUSD)*100}),[ae,te]),je=(0,r.useMemo)((function(){return ue/(null===ne||void 0===ne?void 0:ne.reserveUSD)*100}),[ue,ne]),ye=(0,r.useMemo)((function(){return ge/je*100-100}),[ge,je]);return(0,f.jsxs)(s.Z,{children:[(0,f.jsxs)("div",{className:"relative h-8",children:[(0,f.jsx)("div",{className:"absolute w-full h-full bg-gradient-to-r from-blue to-pink opacity-5"}),(0,f.jsxs)("div",{className:"absolute flex items-center w-full p-2 lg:pl-14",children:[(0,f.jsxs)("div",{className:"text-xs font-medium text-secondary",children:[(0,f.jsx)(j.default,{href:"/analytics/dashboard",children:"Analytics"}),"\xa0",">","\xa0",(0,f.jsx)(j.default,{href:"/analytics/pairs",children:"Pairs"}),"\xa0","> ","\xa0"]}),(0,f.jsxs)("div",{className:"text-xs font-bold text-high-emphesis",children:[null===te||void 0===te||null===(p=te.token0)||void 0===p?void 0:p.symbol,"-",null===te||void 0===te||null===(Z=te.token1)||void 0===Z?void 0:Z.symbol]})]})]}),(0,f.jsx)(w.Z,{background:"pool",children:(0,f.jsxs)("div",{className:"items-center -mt-4 space-y-6",children:[(0,f.jsxs)("button",{onClick:function(){return G.back()},className:"text-sm text-blue",children:["<"," Go Back"]}),(0,f.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,f.jsx)(c.Z,{className:"-space-x-3",logoClassName:"rounded-full",currency0:le,currency1:ce,size:54}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"text-lg font-bold text-high-emphesis",children:[null===te||void 0===te||null===(_=te.token0)||void 0===_?void 0:_.symbol,"-",null===te||void 0===te||null===(M=te.token1)||void 0===M?void 0:M.symbol]}),(0,f.jsx)("div",{className:"text-xs text-secondary",children:"Sushi Liquidity Pool"})]}),(0,f.jsxs)("div",{className:"rounded-3xl text-sm bg-[#414a6c] py-px px-2 flex items-center space-x-1",children:[(0,f.jsx)("div",{children:(0,h.Xn)(X)}),(0,f.jsx)("div",{className:"cursor-pointer",onClick:function(){return $(X)},children:Y?(0,f.jsx)(N.nQG,{height:16}):(0,f.jsx)(O.NAN,{height:16,className:"scale-x-[-1]"})})]})]})]})}),(0,f.jsxs)("div",{className:"pt-4 space-y-4 lg:px-14",children:[(0,f.jsxs)("div",{className:"relative h-12",children:[(0,f.jsxs)("div",{className:"absolute w-full h-full",children:[(0,f.jsx)("div",{className:"h-1/3"}),(0,f.jsx)("div",{className:"opacity-50 w-[210px] h-1/3 bg-gradient-to-r from-blue to-pink"})]}),(0,f.jsx)("div",{className:"absolute text-3xl font-bold text-high-emphesis",children:"Pool Overview"})]}),(0,f.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,f.jsx)(x,{type:"liquidity",name:"".concat(null===te||void 0===te||null===(U=te.token0)||void 0===U?void 0:U.symbol,"-").concat(null===te||void 0===te||null===(A=te.token1)||void 0===A?void 0:A.symbol),pair:X}),(0,f.jsx)(x,{type:"volume",name:"".concat(null===te||void 0===te||null===(E=te.token0)||void 0===E?void 0:E.symbol,"-").concat(null===te||void 0===te||null===(C=te.token1)||void 0===C?void 0:C.symbol),pair:X})]}),(0,f.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:(0,u.times)(2).map((function(e){var t,n,o,i;return(0,f.jsxs)("div",{className:"w-full p-6 space-y-2 border rounded bg-dark-900 border-dark-700",children:[(0,f.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,f.jsx)(v.Z,{size:32,currency:[le,ce][e]}),(0,f.jsx)("div",{className:"text-2xl font-bold",children:(0,h.uf)([null===te||void 0===te?void 0:te.reserve0,null===te||void 0===te?void 0:te.reserve1][e])}),(0,f.jsx)("div",{className:"text-lg text-secondary",children:null===(t=[null===te||void 0===te?void 0:te.token0,null===te||void 0===te?void 0:te.token1][e])||void 0===t?void 0:t.symbol})]}),(0,f.jsxs)("div",{className:"font-bold",children:["1 ",null===(n=[null===te||void 0===te?void 0:te.token0,null===te||void 0===te?void 0:te.token1][e])||void 0===n?void 0:n.symbol," = ",(0,h.uf)([null===te||void 0===te?void 0:te.token1Price,null===te||void 0===te?void 0:te.token0Price][e])," ",null===(o=[null===te||void 0===te?void 0:te.token1,null===te||void 0===te?void 0:te.token0][e])||void 0===o?void 0:o.symbol," (",(0,h.uf)((null===(i=[null===te||void 0===te?void 0:te.token1,null===te||void 0===te?void 0:te.token0][e])||void 0===i?void 0:i.derivedETH)*ie,!0),")"]})]},e)}))}),(0,f.jsxs)("div",{className:"flex flex-row justify-between flex-grow space-x-4 overflow-x-auto",children:[(0,f.jsx)(b.Z,{text:"Liquidity (24h)",number:null===te||void 0===te?void 0:te.reserveUSD,percent:de}),(0,f.jsx)(b.Z,{text:"Volume (24h)",number:ae,percent:ve}),(0,f.jsx)(b.Z,{text:"Fees (24h)",number:.003*ae,percent:ve})]}),(0,f.jsxs)("div",{className:"flex flex-row justify-between flex-grow space-x-4 overflow-x-auto",children:[(0,f.jsx)(b.Z,{text:"Tx (24h)",number:isNaN(he)?"":he,numberType:"text",percent:fe}),(0,f.jsx)(b.Z,{text:"Avg. Trade (24h)",number:pe,percent:be}),(0,f.jsx)(b.Z,{text:"Utilisation (24h)",number:ge,numberType:"percent",percent:ye})]}),(0,f.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Information"}),(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:"px-4 text-sm leading-48px text-high-emphesis",children:(0,f.jsxs)("table",{className:"w-full table-fixed",children:[(0,f.jsx)("thead",{className:"border-b border-gray-900",children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[null===te||void 0===te||null===(T=te.token0)||void 0===T?void 0:T.symbol,"-",null===te||void 0===te||null===(I=te.token1)||void 0===I?void 0:I.symbol," Address"]}),(0,f.jsxs)("td",{children:[null===te||void 0===te||null===(L=te.token0)||void 0===L?void 0:L.symbol," Address"]}),(0,f.jsxs)("td",{children:[null===te||void 0===te||null===(H=te.token1)||void 0===H?void 0:H.symbol," Address"]})]})}),(0,f.jsx)("tbody",{className:"border-b border-gray-900 ",children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"flex items-center justify-center w-11/12 space-x-1",children:[(0,f.jsx)(j.default,{href:"/analytics/tokens/".concat(null===te||void 0===te?void 0:te.id),passHref:!0,children:(0,f.jsx)("div",{className:"overflow-hidden cursor-pointer overflow-ellipsis whitespace-nowrap",children:null===te||void 0===te?void 0:te.id})}),(0,f.jsx)("a",{href:(0,P.E)(V,null===te||void 0===te?void 0:te.id,"token"),target:"_blank",rel:"noreferrer",children:(0,f.jsx)(g.Z,{size:16})})]})}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"flex items-center w-11/12 space-x-1",children:[(0,f.jsx)(j.default,{href:"/analytics/tokens/".concat(null===te||void 0===te||null===(R=te.token0)||void 0===R?void 0:R.id),passHref:!0,children:(0,f.jsx)("div",{className:"overflow-hidden cursor-pointer overflow-ellipsis whitespace-nowrap text-purple",children:null===te||void 0===te||null===(F=te.token0)||void 0===F?void 0:F.id})}),(0,f.jsx)("a",{href:(0,P.E)(V,null===te||void 0===te||null===(q=te.token0)||void 0===q?void 0:q.id,"token"),target:"_blank",rel:"noreferrer",children:(0,f.jsx)(g.Z,{size:16})})]})}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"flex items-center w-11/12 space-x-1",children:[(0,f.jsx)(j.default,{href:"/analytics/tokens/".concat(null===te||void 0===te||null===(z=te.token1)||void 0===z?void 0:z.id),passHref:!0,children:(0,f.jsx)("div",{className:"overflow-hidden cursor-pointer overflow-ellipsis whitespace-nowrap text-purple",children:null===te||void 0===te||null===(B=te.token1)||void 0===B?void 0:B.id})}),(0,f.jsx)("a",{href:(0,P.E)(V,null===te||void 0===te||null===(W=te.token1)||void 0===W?void 0:W.id,"token"),target:"_blank",rel:"noreferrer",children:(0,f.jsx)(g.Z,{size:16})})]})})]})})]})})}),(0,f.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Transactions"}),(0,f.jsx)("div",{className:"px-4",children:(0,f.jsx)(y.Z,{transactions:se})})]})]})}},37303:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/pairs/[id]",function(){return n(309)}])}},function(e){e.O(0,[3662,8976,2172,9521,8767,1502,7495,9774,2888,179],(function(){return t=37303,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=[id]-47642501566d3ea910a6.js.map