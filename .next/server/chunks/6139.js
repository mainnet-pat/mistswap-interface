"use strict";
exports.id = 6139;
exports.ids = [6139];
exports.modules = {

/***/ 9677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const backgrounds = {
  dashboard: '/analytics-background-dashboard.jpg',
  bar: '/analytics-background-bar.jpg',
  farms: '/analytics-background-farms.jpg',
  pool: `/formal-invitation.svg`,
  pools: '/analytics-background-pools.jpg',
  token: `/happy-intersection.svg`,
  tokens: '/analytics-background-tokens.jpg'
};
function Background({
  background,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "h-[200px] md:h-[151px] w-full relative bg-dark-900",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('absolute w-full h-full', !backgrounds[background].includes('svg') && 'bg-cover bg-center opacity-[0.15]'),
      style: {
        backgroundImage: `url('${backgrounds[background]}')`,
        WebkitMaskImage: `url('${backgrounds[background]}')`
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "absolute w-full py-8 px-14 z-1",
      children: children
    })]
  });
}

/***/ }),

/***/ 4593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColoredNumber)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function ColoredNumber({
  number,
  scaleNumber = true,
  percent = false,
  className = ''
}) {
  if (isNaN(number) || number === Infinity) number = 0;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(number >= 0 ? 'text-green' : 'text-red', 'font-normal', className),
      children: (number >= 0 ? '+' : '-') + (percent ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatPercent */ .T3)(number).replace('-', '') : scaleNumber ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatNumberScale */ .nH)(number, true).replace('-', '') : (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(number, true, false).replace('-', ''))
    })
  });
}

/***/ })

};
;
//# sourceMappingURL=6139.js.map