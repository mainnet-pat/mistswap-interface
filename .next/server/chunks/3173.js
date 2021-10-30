"use strict";
exports.id = 3173;
exports.ids = [3173];
exports.modules = {

/***/ 4596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DoubleCurrencyLogo)
/* harmony export */ });
/* harmony import */ var _CurrencyLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function DoubleCurrencyLogo({
  currency0,
  currency1,
  size = 16,
  className,
  logoClassName
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)('flex items-center space-x-2', className),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_CurrencyLogo__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      className: logoClassName,
      currency: currency0,
      size: size.toString() + 'px'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_CurrencyLogo__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      className: logoClassName,
      currency: currency1,
      size: size.toString() + 'px'
    })]
  });
}

/***/ }),

/***/ 4288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoCard)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7735);
/* harmony import */ var _ColoredNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function InfoCard({
  text,
  number,
  numberType = 'usd',
  percent
}) {
  function switchNumber() {
    switch (numberType) {
      case 'usd':
        return (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(number, true, false);

      case 'text':
        return number;

      case 'percent':
        return (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatPercent */ .T3)(number);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "w-full px-6 py-4 border rounded bg-dark-900 border-dark-700",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "whitespace-nowrap",
      children: text
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center space-x-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "text-2xl font-bold",
        children: switchNumber()
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ColoredNumber__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        number: percent,
        percent: true
      })]
    })]
  });
}

/***/ })

};
;
//# sourceMappingURL=3173.js.map