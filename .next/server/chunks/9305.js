"use strict";
exports.id = 9305;
exports.ids = [9305];
exports.modules = {

/***/ 3106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["target", "href", "children", "rel", "className", "color", "startIcon", "endIcon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const COLOR = {
  default: 'text-primary hover:text-high-emphesis focus:text-high-emphesis',
  blue: 'text-blue opacity-80 hover:opacity-100 focus:opacity-100'
};

const ExternalLink = _ref => {
  let {
    target = '_blank',
    href,
    children,
    rel = 'noopener noreferrer',
    className = '',
    color = 'default',
    startIcon = undefined,
    endIcon = undefined
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    // don't prevent default, don't redirect if it's a new tab
    if (target === '_blank' || event.ctrlKey || event.metaKey) {} else {
      window.location.href = href;
    }
  }, [href, target]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", _objectSpread(_objectSpread({
    target: target,
    rel: rel,
    href: href,
    onClick: handleClick,
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('text-baseline whitespace-nowrap', COLOR[color], (startIcon || endIcon) && 'space-x-1 flex items-center justify-center', className)
  }, rest), {}, {
    children: [startIcon && startIcon, children, endIcon && endIcon]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalLink);

/***/ }),

/***/ 5068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3802);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3349);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const QuestionHelper = ({
  children,
  text
}) => {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const open = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setShow(true), [setShow]);
  const close = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setShow(false), [setShow]);

  if (children) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP, {
      text: text,
      show: show,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "flex items-center justify-center outline-none",
        onClick: open,
        onMouseEnter: open,
        onMouseLeave: close,
        children: children
      })
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
    className: "ml-1",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP, {
      text: text,
      show: show,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "flex items-center justify-center outline-none cursor-help hover:text-primary",
        onClick: open,
        onMouseEnter: open,
        onMouseLeave: close,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__/* .QuestionMarkCircleIcon */ .zqj, {
          width: 16,
          height: 16
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionHelper);

/***/ }),

/***/ 3349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ud": () => (/* binding */ MouseoverTooltip),
  "ZP": () => (/* binding */ Tooltip)
});

// UNUSED EXPORTS: MouseoverTooltipContent, TooltipContent

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/hooks/useInterval.ts
var useInterval = __webpack_require__(2269);
// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(7755);
// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Popover/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Popover_Popover({
  content,
  show,
  children,
  placement = 'auto'
}) {
  const {
    0: referenceElement,
    1: setReferenceElement
  } = (0,external_react_.useState)(null);
  const {
    0: popperElement,
    1: setPopperElement
  } = (0,external_react_.useState)(null);
  const {
    0: arrowElement,
    1: setArrowElement
  } = (0,external_react_.useState)(null);
  const {
    styles,
    update,
    attributes
  } = (0,external_react_popper_.usePopper)(referenceElement, popperElement, {
    placement,
    strategy: 'fixed',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [8, 8]
      }
    }, {
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }]
  });
  const updateCallback = (0,external_react_.useCallback)(() => {
    update && update();
  }, [update]);
  (0,useInterval/* default */.Z)(updateCallback, show ? 100 : null);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: setReferenceElement,
      children: children
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover.Panel, _objectSpread(_objectSpread({
      static: true,
      className: (0,functions/* classNames */.AK)(!show && 'hidden opacity-0', 'z-50 animate-fade'),
      ref: setPopperElement,
      style: styles.popper
    }, attributes.popper), {}, {
      children: [content, /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread({
        className: (0,functions/* classNames */.AK)('w-2 h-2 z-50'),
        ref: setArrowElement,
        style: styles.arrow
      }, attributes.arrow))]
    }))]
  });
}
;// CONCATENATED MODULE: ./src/components/Tooltip/index.tsx
const _excluded = ["text"],
      _excluded2 = (/* unused pure expression or super */ null && (["content"])),
      _excluded3 = ["children"],
      _excluded4 = (/* unused pure expression or super */ null && (["content", "children"]));

function Tooltip_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Tooltip_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tooltip_ownKeys(Object(source), true).forEach(function (key) { Tooltip_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tooltip_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Tooltip_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Tooltip(_ref) {
  let {
    text
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Popover_Popover, Tooltip_objectSpread({
    content: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-[228px] px-2 py-1 font-medium bg-dark-700 border border-gray-600 rounded text-sm",
      children: text
    })
  }, rest));
}
function TooltipContent(_ref2) {
  let {
    content
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/_jsx(Popover, Tooltip_objectSpread({
    content: /*#__PURE__*/_jsx("div", {
      className: "w-64 py-[0.6rem] px-4 break-words",
      children: content
    })
  }, rest));
}
function MouseoverTooltip(_ref3) {
  let {
    children
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded3);

  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const open = (0,external_react_.useCallback)(() => setShow(true), [setShow]);
  const close = (0,external_react_.useCallback)(() => setShow(false), [setShow]);
  return /*#__PURE__*/jsx_runtime_.jsx(Tooltip, Tooltip_objectSpread(Tooltip_objectSpread({}, rest), {}, {
    show: show,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      onMouseEnter: open,
      onMouseLeave: close,
      children: children
    })
  }));
}
function MouseoverTooltipContent(_ref4) {
  let {
    content,
    children
  } = _ref4,
      rest = _objectWithoutProperties(_ref4, _excluded4);

  const {
    0: show,
    1: setShow
  } = useState(false);
  const open = useCallback(() => setShow(true), [setShow]);
  const close = useCallback(() => setShow(false), [setShow]);
  return /*#__PURE__*/_jsx(TooltipContent, Tooltip_objectSpread(Tooltip_objectSpread({}, rest), {}, {
    show: show,
    content: content,
    children: /*#__PURE__*/_jsx("div", {
      style: {
        display: 'inline-block',
        lineHeight: 0,
        padding: '0.25rem'
      },
      onMouseEnter: open,
      onMouseLeave: close,
      children: children
    })
  }));
}

/***/ }),

/***/ 2269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useInterval)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInterval(callback, delay, leading = true) {
  const savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Remember the latest callback.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function tick() {
      const current = savedCallback.current;
      current && current();
    }

    if (delay !== null) {
      if (leading) tick();
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return undefined;
  }, [delay, leading]);
}

/***/ })

};
;
//# sourceMappingURL=9305.js.map