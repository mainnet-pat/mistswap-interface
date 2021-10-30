"use strict";
exports.id = 7603;
exports.ids = [7603];
exports.modules = {

/***/ 7603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gn": () => (/* binding */ ButtonConfirmed),
/* harmony export */   "Kd": () => (/* binding */ ButtonError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "className", "color", "size", "variant"],
      _excluded2 = ["confirmed", "disabled"],
      _excluded3 = ["error", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SIZE = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-4 py-2 text-base',
  default: 'px-4 py-3 text-base',
  lg: 'px-6 py-4 text-base',
  none: 'p-0 text-base'
};
const FILLED = {
  default: 'bg-transparent opacity-80 hover:opacity-100',
  red: 'bg-red bg-opacity-80 w-full rounded text-high-emphesis hover:bg-opacity-100 disabled:bg-opacity-80',
  blue: 'bg-blue bg-opacity-80 w-full rounded text-high-emphesis hover:bg-opacity-100 disabled:bg-opacity-80',
  pink: 'bg-gradient-to-r from-pink to-opaque-pink w-full rounded text-high-emphesis opacity-80 hover:opacity-100 disabled:bg-opacity-80',
  gray: 'border rounded shadow-sm focus:ring-2 focus:ring-offset-2 bg-dark-700 bg-opacity-80 w-full text-primary border-dark-800 hover:bg-opacity-100 focus:ring-offset-dark-700 focus:ring-dark-800 disabled:bg-opacity-80',
  green: 'bg-green bg-opacity-80 w-full rounded text-high-emphesis hover:bg-opacity-100 disabled:bg-opacity-80',
  gradient: 'w-full text-high-emphesis bg-gradient-to-r from-blue to-pink opacity-80 hover:opacity-100 disabled:bg-opacity-80'
};
const OUTLINED = {
  default: 'bg-transparent opacity-80 hover:opacity-100',
  red: 'bg-red bg-opacity-20 outline-red rounded text-red hover:bg-opacity-40 disabled:bg-opacity-20',
  blue: 'bg-blue bg-opacity-20 outline-blue rounded text-blue hover:bg-opacity-40 disabled:bg-opacity-20',
  pink: 'bg-pink bg-opacity-20 outline-pink rounded text-pink hover:bg-opacity-40 disabled:bg-opacity-20',
  gray: 'bg-dark-700 bg-opacity-20 outline-gray rounded text-gray hover:bg-opacity-40 disabled:bg-opacity-20',
  green: 'bg-green bg-opacity-20 border border-green rounded text-green hover:bg-opacity-40 disabled:bg-opacity-20',
  gradient: 'border border-transparent border-gradient-r-blue-pink-dark-900 opacity-80 hover:opacity-100 disabled:bg-opacity-20'
};
const EMPTY = {
  default: 'flex bg-transparent justify-center items-center disabled:opacity-50 disabled:cursor-auto bg-opacity-80 hover:bg-opacity-100'
};
const LINK = {
  default: 'text-primary hover:text-high-emphesis focus:text-high-emphesis whitespace-nowrap focus:ring-0',
  blue: 'text-blue text-opacity-80 hover:text-opacity-100 focus:text-opacity-100 whitespace-nowrap focus:ring-0'
};
const VARIANT = {
  outlined: OUTLINED,
  filled: FILLED,
  empty: EMPTY,
  link: LINK
};

function Button(_ref) {
  let {
    children,
    className = undefined,
    color = 'default',
    size = 'default',
    variant = 'filled'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", _objectSpread(_objectSpread({
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)(VARIANT[variant][color], variant !== 'empty' && SIZE[size], 'rounded disabled:cursor-not-allowed focus:outline-none', // 'rounded focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed font-medium',
    className)
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
function ButtonConfirmed(_ref2) {
  let {
    confirmed,
    disabled
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  if (confirmed) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Button, _objectSpread({
      variant: "outlined",
      color: "green",
      size: "lg",
      className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)(disabled && 'cursor-not-allowed', 'border opacity-50'),
      disabled: disabled
    }, rest));
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Button, _objectSpread({
      color: disabled ? 'gray' : 'gradient',
      size: "lg",
      disabled: disabled
    }, rest));
  }
}
function ButtonError(_ref3) {
  let {
    error,
    disabled
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded3);

  if (error) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Button, _objectSpread({
      color: "red",
      size: "lg"
    }, rest));
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Button, _objectSpread({
      color: disabled ? 'gray' : 'gradient',
      disabled: disabled,
      size: "lg"
    }, rest));
  }
}

/***/ })

};
;
//# sourceMappingURL=7603.js.map