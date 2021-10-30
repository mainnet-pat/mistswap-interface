"use strict";
(() => {
var exports = {};
exports.id = 7703;
exports.ids = [7703];
exports.modules = {

/***/ 7269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Status),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3981);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3130);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2503);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const getChains = (url = 'https://chainid.network/chains.json') => fetch(url).then(res => res.json());

function Status({
  fallbackData
}) {
  const res = (0,swr__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)('https://chainid.network/chains.json', getChains, {
    fallbackData
  });
  const {
    data
  } = res;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    id: "chains-page",
    className: "py-4 space-y-6 md:py-8 lg:py-12",
    maxWidth: "6xl",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("title", {
        children: "Chains | Mist"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
        name: "description",
        content: "Chains..."
      }, "description")]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "w-full max-w-6xl mx-auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        component: "h1",
        variant: "h1",
        className: "w-full mb-4",
        children: "Chains"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "grid items-start justify-start grid-cols-2 gap-3 mx-auto ",
        children: data.map((chain, key) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "h-full p-1 rounded bg-dark-900 text-primary",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("pre", {
              className: "h-full p-4 rounded bg-dark-1000",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("code", {
                children: JSON.stringify(chain, null, 2)
              })
            })
          }, key);
        })
      })]
    })]
  });
}
async function getStaticProps() {
  return {
    props: {
      fallbackData: await getChains()
    }
  };
}

/***/ }),

/***/ 7398:
/***/ ((module) => {

module.exports = require("@ethersproject/address");

/***/ }),

/***/ 1446:
/***/ ((module) => {

module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 6148:
/***/ ((module) => {

module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 4440:
/***/ ((module) => {

module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 1101:
/***/ ((module) => {

module.exports = require("@ethersproject/hash");

/***/ }),

/***/ 685:
/***/ ((module) => {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ 9652:
/***/ ((module) => {

module.exports = require("@mistswapdex/sdk");

/***/ }),

/***/ 7663:
/***/ ((module) => {

module.exports = require("ajv");

/***/ }),

/***/ 4588:
/***/ ((module) => {

module.exports = require("cids");

/***/ }),

/***/ 1980:
/***/ ((module) => {

module.exports = require("multicodec");

/***/ }),

/***/ 6841:
/***/ ((module) => {

module.exports = require("multihashes");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3756:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [475,2503,7735,3981,3130], () => (__webpack_exec__(7269)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=chains.js.map