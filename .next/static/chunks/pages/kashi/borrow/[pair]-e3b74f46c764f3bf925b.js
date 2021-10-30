(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8359],{85103:function(e,s,t){"use strict";t(67294);var l=t(85893);function i(e){return(e=parseFloat(e))<100&&e>=90?"#ff3a31":e<90&&e>=80?"#f85815":e<80&&e>=70?"#ed7000":e<70&&e>=60?"#de8400":e<60&&e>=50?"#ce9700":e<50&&e>=40?"#bba700":e<40&&e>=30?"#a6b500":e<30&&e>=20?"#8fc21b":e<20&&e>=10?"#73ce42":e<10&&e>=0||0==e?"#4ed864":"#ff3a31"}function a(e){return(e=parseFloat(e))<10&&e>=0?"#ff3a31":e<20&&e>=10?"#f85815":e<30&&e>=20?"#ed7000":e<40&&e>=30?"#de8400":e<50&&e>=40?"#ce9700":e<60&&e>=50?"#bba700":e<70&&e>=60?"#a6b500":e<80&&e>=70?"#8fc21b":e<90&&e>=80?"#73ce42":e<100&&e>=90||e>=100?"#4ed864":"#ff3a31"}s.ZP=function(e){var s=e.percent,t=e.desc,n=void 0===t||t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{style:{display:"block",height:"0.5rem",width:"0.5rem",borderRadius:"9999px",marginLeft:"0.5rem",background:"".concat(n?i(s):a(s))}})})}},16109:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return A}});var l=t(15861),i=t(70885),a=t(87757),n=t.n(a),r=t(30259),d=t(33307),c=t(67294),o=t(38277),x=t(42212),h=t(38561),m=t(85103),u=t(9008),v=t(15579),f=(t(86197),t(39429)),j=(t(3830),t(11734)),g=t(5068),N=t(66311),y=t(93801),p=t(28269),b=t(90361),_=t(11163),w=t(73734),k=t(99123),I=t(39202),Z=t(22622),B=t(85893);function P(){var e,s,t,a,h=(0,_.useRouter)(),j=(0,b.mV)().i18n,g=(0,p.a)(),I=g.account,P=g.library,A=g.chainId,O=(0,d.c0)(h.query.pair),T=(0,w.dQ)(null===O||void 0===O?void 0:O.asset.address),F=(0,w.dQ)(null===O||void 0===O?void 0:O.collateral.address),R=(0,Z.Oo)(T,F),L=(0,i.Z)(R,2),S=(L[0],L[1],(0,d.BA)()),C=(0,k.h7)();(0,c.useCallback)((0,l.Z)(n().mark((function e(){var s,t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new f.Z(O,I,P,A),e.next=3,s.updateExchangeRate().cook();case 3:t=e.sent,C(t.tx,{summary:"Update ".concat(O.collateral.tokenInfo.symbol,"/").concat(O.asset.tokenInfo.symbol," exchange rate")});case 5:case"end":return e.stop()}}),e)}))),[I,C,A,P,O]);return O?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(u.default,{children:[(0,B.jsxs)("title",{children:[j._(j._("Borrow {0}-{1}",{0:null===O||void 0===O||null===(e=O.asset)||void 0===e?void 0:e.symbol,1:null===O||void 0===O||null===(s=O.collateral)||void 0===s?void 0:s.symbol}))," | Mist"]}),(0,B.jsx)("meta",{name:"description",content:"Borrow ".concat(null===O||void 0===O||null===(t=O.asset)||void 0===t?void 0:t.symbol," against ").concat(null===O||void 0===O||null===(a=O.collateral)||void 0===a?void 0:a.symbol," collateral on Kashi by Mist")},"description")]}),(0,B.jsxs)(x.Z,{className:"h-full bg-dark-900",header:(0,B.jsx)(x.Z.Header,{className:"border-b-8 bg-dark-pink border-pink",children:(0,B.jsxs)("div",{className:"flex items-center",children:[(0,B.jsx)("div",{className:"flex items-center mr-4 space-x-2",children:O&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(v.Z,{loader:y.H,height:48,width:48,src:O.asset.tokenInfo.logoURI,className:"block w-10 h-10 rounded-lg sm:w-12 sm:h-12",alt:O.asset.tokenInfo.symbol}),(0,B.jsx)(v.Z,{loader:y.H,height:48,width:48,src:O.collateral.tokenInfo.logoURI,className:"block w-10 h-10 rounded-lg sm:w-12 sm:h-12",alt:O.collateral.tokenInfo.symbol})]})}),(0,B.jsx)("div",{className:"flex items-center justify-between",children:(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{className:"text-3xl text-high-emphesis",children:j._(j._("Borrow {0}",{0:O.asset.tokenInfo.symbol}))}),(0,B.jsxs)("div",{className:"flex items-center",children:[(0,B.jsxs)("div",{className:"mr-1 text-sm text-secondary",children:[j._(j._("Collateral")),":"]}),(0,B.jsx)("div",{className:"mr-2 text-sm text-high-emphesis",children:O.collateral.tokenInfo.symbol}),(0,B.jsxs)("div",{className:"mr-1 text-sm text-secondary",children:[j._(j._("Oracle")),":"]}),(0,B.jsx)("div",{className:"text-sm text-high-emphesis",children:O.oracle.name})]})]})})]})}),children:[(0,B.jsxs)("div",{className:"flex justify-between mb-8",children:[(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:j._(j._("Collateral"))}),(0,B.jsxs)("div",{className:"text-2xl text-blue",children:[(0,o.uf)(O.userCollateralAmount.string)," ",O.collateral.tokenInfo.symbol]}),(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:(0,o.uf)(O.userCollateralAmount.usd,!0)})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:j._(j._("Borrowed"))}),(0,B.jsxs)("div",{className:"text-2xl text-pink",children:[(0,o.uf)(O.currentUserBorrowAmount.string)," ",O.asset.tokenInfo.symbol]}),(0,B.jsxs)("div",{className:"flex items-center text-lg text-high-emphesis",children:[(0,o.T3)(O.health.string),(0,B.jsx)(m.ZP,{percent:O.health.string})]})]}),(0,B.jsx)("div",{className:"text-right",children:(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:j._(j._("APR"))}),(0,B.jsx)("div",{className:"text-2xl text-high-emphesis",children:(0,o.T3)(O.interestPerYear.string)})]})})]}),(0,B.jsxs)(N.O.Group,{children:[(0,B.jsxs)(N.O.List,{className:"flex p-1 rounded bg-dark-800",children:[(0,B.jsx)(N.O,{className:function(e){var s=e.selected;return"".concat(s?"bg-dark-900 text-high-emphesis":""," flex items-center justify-center flex-1 px-3 py-4 text-lg rounded cursor-pointer select-none text-secondary hover:text-primary focus:outline-none")},children:j._(j._("Borrow"))}),(0,B.jsx)(N.O,{className:function(e){var s=e.selected;return"".concat(s?"bg-dark-900 text-high-emphesis":""," flex items-center justify-center flex-1 px-3 py-4 text-lg rounded cursor-pointer select-none text-secondary hover:text-primary focus:outline-none")},children:j._(j._("Repay"))})]}),(0,B.jsx)(N.O.Panel,{children:(0,B.jsx)(r.YN,{pair:O})}),(0,B.jsx)(N.O.Panel,{children:(0,B.jsx)(r.IJ,{pair:O})})]})]})]}):S&&S.blockTimeStamp.isZero()?null:h.push("/borrow")}P.Provider=d.ZP;P.Layout=function(e){var s=e.children,t=(0,b.mV)().i18n,l=(0,_.useRouter)(),a=(0,d.c0)(l.query.pair),n=(0,w.dQ)(null===a||void 0===a?void 0:a.asset.address),r=(0,w.dQ)(null===a||void 0===a?void 0:a.collateral.address),c=(0,Z.Oo)(n,r),m=(0,i.Z)(c,2),u=(m[0],m[1]),v=(0,I.oF)(n),f=(0,I.oF)(r);return a?(0,B.jsx)(j.Z,{left:(0,B.jsx)(x.Z,{className:"h-full bg-dark-900",backgroundImage:"/borrow-graphic.png",title:t._(t._("Add collateral in order to borrow assets")),description:t._(t._("Gain exposure to tokens without reducing your assets. Leverage will enable you to take short positions against assets and earn from downside movements."))}),right:(0,B.jsx)(x.Z,{className:"h-full bg-dark-900",children:(0,B.jsxs)("div",{className:"flex-col space-y-2",children:[(0,B.jsx)("div",{className:"flex justify-between",children:(0,B.jsx)("div",{className:"text-xl text-high-emphesis",children:t._(t._("Market"))})}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:t._(t._("APR"))}),(0,B.jsx)("div",{className:"flex items-center",children:(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:(0,o.T3)(null===a||void 0===a?void 0:a.currentInterestPerYear.string)})})]}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:t._(t._("LTV"))}),(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:"75%"})]}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:t._(t._("Total"))}),(0,B.jsxs)("div",{className:"text-lg text-high-emphesis",children:[(0,o.uf)(null===a||void 0===a?void 0:a.currentAllAssets.string)," ",null===a||void 0===a?void 0:a.asset.tokenInfo.symbol]})]}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:t._(t._("Available"))}),(0,B.jsx)("div",{className:"flex items-center",children:(0,B.jsxs)("div",{className:"text-lg text-high-emphesis",children:[(0,o.uf)(null===a||void 0===a?void 0:a.totalAssetAmount.string)," ",null===a||void 0===a?void 0:a.asset.tokenInfo.symbol]})})]}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:t._(t._("Borrowed"))}),(0,B.jsx)("div",{className:"flex items-center",children:(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:(0,o.T3)(null===a||void 0===a?void 0:a.utilization.string)})})]}),(0,B.jsx)("div",{className:"flex justify-between pt-3",children:(0,B.jsx)("div",{className:"text-xl text-high-emphesis",children:t._(t._("Oracle"))})}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:"Name"}),(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:null===a||void 0===a?void 0:a.oracle.name})]}),(0,B.jsx)("div",{className:"flex justify-between pt-3",children:(0,B.jsx)("div",{className:"text-xl text-high-emphesis",children:t._(t._("BentoBox"))})}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:t._(t._("{0} Strategy",{0:null===a||void 0===a?void 0:a.collateral.tokenInfo.symbol}))}),(0,B.jsxs)("div",{className:"flex flex-row text-lg text-high-emphesis",children:[t._(t._("None")),(0,B.jsx)(g.Z,{text:t._(t._("BentoBox strategies can create yield for your collateral tokens. This token does not yet have a strategy in the BentoBox."))})]})]}),a&&"SushiSwap"===a.oracle.name&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:"flex justify-between pt-3",children:(0,B.jsx)("div",{className:"text-xl text-high-emphesis",children:t._(t._("SLP"))})}),u?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:null===u||void 0===u?void 0:u.token0.symbol}),(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:null===u||void 0===u?void 0:u.reserve0.toSignificant(4)})]}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:null===u||void 0===u?void 0:u.token1.symbol}),(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:null===u||void 0===u?void 0:u.reserve1.toSignificant(4)})]}),(0,B.jsxs)("div",{className:"flex justify-between",children:[(0,B.jsx)("div",{className:"text-lg text-secondary",children:"TVL"}),(0,B.jsx)("div",{className:"text-lg text-high-emphesis",children:(0,o.uf)(null===u||void 0===u?void 0:u.reserve1.multiply(null===v||void 0===v?void 0:v.quotient).add(null===u||void 0===u?void 0:u.reserve1.multiply(null===f||void 0===f?void 0:f.quotient)).toSignificant(4),!0)})]})]}):(0,B.jsx)(h.Z,{className:"text-lg text-secondary",children:"Loading"})]})]})}),children:s}):null};var A=P},1519:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kashi/borrow/[pair]",function(){return t(16109)}])}},function(e){e.O(0,[5831,8976,5911,5509,6233,4212,1892,259,9774,2888,179],(function(){return s=1519,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
//# sourceMappingURL=[pair]-e3b74f46c764f3bf925b.js.map