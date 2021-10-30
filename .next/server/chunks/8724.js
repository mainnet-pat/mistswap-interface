"use strict";
exports.id = 8724;
exports.ids = [8724];
exports.modules = {

/***/ 4193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3233);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Sidebar = ({
  items
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "mt-4 space-y-4",
    children: items.map((item, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_NavLink__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      href: item.href,
      activeClassName: "font-bold text-high-emphesis bg-dark-800",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        className: "flex items-center px-1 py-3 border-transparent rounded hover:bg-dark-900",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "ml-5",
          children: item.text
        })
      })
    }, i))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ 8724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnalyticsContainer)
/* harmony export */ });
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3981);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4193);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function AnalyticsContainer({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("title", {
        children: "MISTswap Liquidity Pair (MLP) Analytics | Mist"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("meta", {
        name: "description",
        content: "MISTswap Liquidity Pair (SLP) Analytics by Mist"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      id: "analytics",
      maxWidth: "full",
      className: "grid h-full grid-flow-col grid-cols-10 px-4 mx-auto gap-9",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "sticky top-0 hidden lg:block md:col-span-2 3xl:col-start-2 3xl:col-span-1",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          items: [{
            text: 'Dashboard',
            href: '/analytics/dashboard'
          }, {
            text: 'xMist',
            href: '/analytics/xMIST'
          }, {
            text: 'Farms',
            href: '/analytics/farms'
          }, {
            text: 'Pairs',
            href: '/analytics/pairs'
          }, {
            text: 'Tokens',
            href: '/analytics/tokens'
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "col-span-10 lg:border-l lg:col-span-8 3xl:col-span-7 border-dark-700",
        children: children
      })]
    })]
  });
}

/***/ })

};
;
//# sourceMappingURL=8724.js.map