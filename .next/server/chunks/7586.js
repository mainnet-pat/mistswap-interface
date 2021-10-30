"use strict";
exports.id = 7586;
exports.ids = [7586,7898];
exports.modules = {

/***/ 5298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9337);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const CloseIcon = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_0__.X, _objectSpread({
  className: "cursor-pointer"
}, props));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseIcon);

/***/ }),

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2047);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const DoubleGlowShadow = ({
  children,
  className
}) => {
  if (react_device_detect__WEBPACK_IMPORTED_MODULE_0__.isMobile) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "shadow-swap",
      children: children
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)(className, 'relative w-full max-w-2xl'),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "absolute top-1/4 -left-10 bg-purple bottom-4 w-3/5 rounded-full z-0 filter blur-[150px]"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "absolute bottom-1/4 -right-10 bg-purple top-4 w-3/5 rounded-full z-0  filter blur-[150px]"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "relative filter drop-shadow",
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoubleGlowShadow);

/***/ }),

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

/***/ 7898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Input)
});

// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/hooks/useENS.ts
var useENS = __webpack_require__(1543);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Input/Address/index.tsx
const _excluded = ["value", "onUserInput", "placeholder", "className", "align", "fontSize"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const inputRegex = RegExp(`^\\d*$`); // match escaped "." characters via in a non-capturing group

const AddressInput = /*#__PURE__*/external_react_default().memo(_ref => {
  let {
    value,
    onUserInput,
    placeholder,
    className = 'flex w-full h-full p-3 font-bold rounded overflow-ellipsis recipient-address-input bg-dark-900 placeholder-low-emphesis',
    align,
    fontSize = '24px'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    address,
    loading
  } = (0,useENS/* default */.Z)(value);

  const enforcer = nextUserInput => {
    onUserInput(nextUserInput);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
      value: value,
      onChange: event => {
        enforcer(event.target.value.replace(/\s+/g, ''));
      } // universal input options
      ,
      inputMode: "text",
      title: "Wallet Address or ENS name",
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      placeholder: "Wallet Address or ENS name",
      pattern: "^(0x[a-fA-F0-9]{40})$" // text-specific options
      ,
      type: "text",
      className: (0,functions/* classNames */.AK)(align === 'right' && 'text-right', 'font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto', className),
      style: {
        fontSize
      }
    }, rest))
  });
});
AddressInput.displayName = 'AddressInput';
/* harmony default export */ const Address = (AddressInput); // const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
;// CONCATENATED MODULE: ./src/components/Input/Numeric/index.tsx
const Numeric_excluded = ["value", "onUserInput", "placeholder", "className"];

function Numeric_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Numeric_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Numeric_ownKeys(Object(source), true).forEach(function (key) { Numeric_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Numeric_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Numeric_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Numeric_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Numeric_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Numeric_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Numeric_inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group

const defaultClassName = 'w-0 p-0 text-2xl bg-transparent';
const Input = /*#__PURE__*/external_react_default().memo(_ref => {
  let {
    value,
    onUserInput,
    placeholder,
    className = defaultClassName
  } = _ref,
      rest = Numeric_objectWithoutProperties(_ref, Numeric_excluded);

  const enforcer = nextUserInput => {
    if (nextUserInput === '' || Numeric_inputRegex.test((0,functions/* escapeRegExp */.hr)(nextUserInput))) {
      onUserInput(nextUserInput);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("input", Numeric_objectSpread(Numeric_objectSpread({}, rest), {}, {
    value: value,
    onChange: event => {
      // replace commas with periods, because uniswap exclusively uses period as the decimal separator
      enforcer(event.target.value.replace(/,/g, '.'));
    } // universal input options
    ,
    inputMode: "decimal",
    title: "Token Amount",
    autoComplete: "off",
    autoCorrect: "off" // text-specific options
    ,
    type: "text",
    pattern: "^[0-9]*[.,]?[0-9]*$",
    placeholder: placeholder || '0.0',
    min: 0,
    minLength: 1,
    maxLength: 79,
    spellCheck: "false",
    className: (0,functions/* classNames */.AK)('relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary', className)
  }));
});
Input.displayName = 'NumericalInput';
/* harmony default export */ const Numeric = (Input); // const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
;// CONCATENATED MODULE: ./src/components/Input/Percent/index.tsx
const Percent_excluded = ["value", "onUserInput", "placeholder", "className", "align", "fontSize"];

function Percent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Percent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Percent_ownKeys(Object(source), true).forEach(function (key) { Percent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Percent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Percent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Percent_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Percent_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Percent_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Percent_inputRegex = RegExp(`^\\d*$`); // match escaped "." characters via in a non-capturing group

const Percent_Input = /*#__PURE__*/external_react_default().memo(_ref => {
  let {
    value,
    onUserInput,
    placeholder,
    className,
    align,
    fontSize = '24px'
  } = _ref,
      rest = Percent_objectWithoutProperties(_ref, Percent_excluded);

  const enforcer = nextUserInput => {
    if (nextUserInput === '' || Percent_inputRegex.test((0,functions/* escapeRegExp */.hr)(nextUserInput))) {
      if (Number(nextUserInput) <= 100) {
        onUserInput(nextUserInput);
      }
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("input", Percent_objectSpread({
      value: value,
      onChange: event => {
        // replace commas with periods, because uniswap exclusively uses period as the decimal separator
        enforcer(event.target.value.replace(/,/g, '.').replace(/%/g, ''));
      } // universal input options
      ,
      inputMode: "decimal",
      title: "Token Amount",
      autoComplete: "off",
      autoCorrect: "off" // text-specific options
      ,
      type: "text",
      pattern: "^[0-9]*$",
      placeholder: placeholder || '100',
      maxLength: 3,
      className: (0,functions/* classNames */.AK)(align === 'right' && 'text-right', 'relative font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto percent-translate', className),
      style: {
        fontSize
      }
    }, rest))
  });
});
Percent_Input.displayName = 'PercentInput';
/* harmony default export */ const Percent = (Percent_Input);
;// CONCATENATED MODULE: ./src/components/Input/index.tsx



const Input_Input = {
  Address: Address,
  Percent: Percent,
  Numeric: Numeric
};
/* harmony default export */ const components_Input = (Input_Input);

/***/ }),

/***/ 7144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3130);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const ModalHeader = ({
  title = undefined,
  onClose = undefined,
  className = '',
  onBack = undefined
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `flex items-center justify-between mb-4 ${className}`,
    children: [onBack && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .ChevronLeftIcon */ .wyc, {
      onClick: onBack,
      width: 24,
      height: 24,
      className: "cursor-pointer"
    }), title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      component: "h2",
      variant: "h3",
      className: "font-bold",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "flex items-center justify-center w-6 h-6 cursor-pointer text-primary hover:text-high-emphesis",
      onClick: onClose,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .XIcon */ .b0D, {
        width: 24,
        height: 24
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);

/***/ }),

/***/ 5990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SettingsTab)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/state/user/hooks.tsx
var hooks = __webpack_require__(181);
// EXTERNAL MODULE: ./src/state/application/hooks.ts
var application_hooks = __webpack_require__(4663);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
// EXTERNAL MODULE: ./src/state/application/actions.ts
var actions = __webpack_require__(434);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(7603);
// EXTERNAL MODULE: ./src/components/Modal/index.tsx
var Modal = __webpack_require__(1441);
// EXTERNAL MODULE: ./src/components/ModalHeader/index.tsx
var ModalHeader = __webpack_require__(7144);
// EXTERNAL MODULE: ./src/components/QuestionHelper/index.tsx
var QuestionHelper = __webpack_require__(5068);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Toggle/index.tsx





function Toggle({
  id,
  isActive,
  toggle
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Switch, {
    checked: isActive,
    onChange: toggle,
    className: (0,functions/* classNames */.AK)(isActive ? 'bg-blue' : 'bg-dark-800', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'),
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "sr-only",
      children: "Use setting"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: (0,functions/* classNames */.AK)(isActive ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-dark-900 shadow transform ring-0 transition ease-in-out duration-200'),
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (0,functions/* classNames */.AK)(isActive ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'),
        "aria-hidden": "true",
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          className: "w-3 h-3 text-low-emphesis",
          fill: "none",
          viewBox: "0 0 12 12",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (0,functions/* classNames */.AK)(isActive ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'),
        "aria-hidden": "true",
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          className: "w-3 h-3 text-high-emphesis",
          fill: "currentColor",
          viewBox: "0 0 12 12",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
          })
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8532);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/components/Typography/index.tsx
var Typography = __webpack_require__(3130);
// EXTERNAL MODULE: external "@lingui/react"
var external_lingui_react_ = __webpack_require__(2339);
;// CONCATENATED MODULE: ./src/components/TransactionSettings/index.tsx











var SlippageError;

(function (SlippageError) {
  SlippageError["InvalidInput"] = "InvalidInput";
  SlippageError["RiskyLow"] = "RiskyLow";
  SlippageError["RiskyHigh"] = "RiskyHigh";
})(SlippageError || (SlippageError = {}));

var DeadlineError;

(function (DeadlineError) {
  DeadlineError["InvalidInput"] = "InvalidInput";
})(DeadlineError || (DeadlineError = {}));

function TransactionSettings({
  placeholderSlippage
}) {
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const inputRef = (0,external_react_.useRef)();
  const userSlippageTolerance = (0,hooks/* useUserSlippageTolerance */.$2)();
  const setUserSlippageTolerance = (0,hooks/* useSetUserSlippageTolerance */.Ow)();
  const [deadline, setDeadline] = (0,hooks/* useUserTransactionTTL */.A6)();
  const {
    0: slippageInput,
    1: setSlippageInput
  } = (0,external_react_.useState)('');
  const {
    0: slippageError,
    1: setSlippageError
  } = (0,external_react_.useState)(false);
  const {
    0: deadlineInput,
    1: setDeadlineInput
  } = (0,external_react_.useState)('');
  const {
    0: deadlineError,
    1: setDeadlineError
  } = (0,external_react_.useState)(false);

  function parseSlippageInput(value) {
    // populate what the user typed and clear the error
    setSlippageInput(value);
    setSlippageError(false);

    if (value.length === 0) {
      setUserSlippageTolerance('auto');
    } else {
      const parsed = Math.floor(Number.parseFloat(value) * 100);

      if (!Number.isInteger(parsed) || parsed < 0 || parsed > 5000) {
        setUserSlippageTolerance('auto');

        if (value !== '.') {
          setSlippageError(SlippageError.InvalidInput);
        }
      } else {
        setUserSlippageTolerance(new sdk_.Percent(parsed, 10000));
      }
    }
  }

  const tooLow = userSlippageTolerance !== 'auto' && userSlippageTolerance.lessThan(new sdk_.Percent(5, 10000));
  const tooHigh = userSlippageTolerance !== 'auto' && userSlippageTolerance.greaterThan(new sdk_.Percent(1, 100));

  function parseCustomDeadline(value) {
    // populate what the user typed and clear the error
    setDeadlineInput(value);
    setDeadlineError(false);

    if (value.length === 0) {
      setDeadline(constants/* DEFAULT_DEADLINE_FROM_NOW */.PY);
    } else {
      try {
        const parsed = Math.floor(Number.parseFloat(value) * 60);

        if (!Number.isInteger(parsed) || parsed < 60 || parsed > 180 * 60) {
          setDeadlineError(DeadlineError.InvalidInput);
        } else {
          setDeadline(parsed);
        }
      } catch (error) {
        console.error(error);
        setDeadlineError(DeadlineError.InvalidInput);
      }
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid gap-4",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid gap-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "sm",
          className: "text-high-emphesis",
          children: i18n._(
          /*i18n*/
          i18n._("Slippage tolerance"))
        }), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
          text: i18n._(
          /*i18n*/
          i18n._("Your transaction will revert 23if the price changes unfavorably by more than this percentage."))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (0,functions/* classNames */.AK)(!!slippageError ? 'border-red' : tooLow || tooHigh ? 'border-yellow' : userSlippageTolerance !== 'auto' ? 'border-blue' : 'border-transparent', 'border p-2 rounded bg-dark-800'),
          tabIndex: -1,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between gap-1",
            children: [tooLow || tooHigh ? /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "hidden sm:inline text-yellow",
              role: "img",
              "aria-label": "warning",
              children: "\u26A0\uFE0F"
            }) : null, /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (0,functions/* classNames */.AK)(slippageError ? 'text-red' : '', 'bg-transparent placeholder-low-emphesis'),
              placeholder: placeholderSlippage === null || placeholderSlippage === void 0 ? void 0 : placeholderSlippage.toFixed(2),
              value: slippageInput.length > 0 ? slippageInput : userSlippageTolerance === 'auto' ? '' : userSlippageTolerance.toFixed(2),
              onChange: e => parseSlippageInput(e.target.value),
              onBlur: () => {
                setSlippageInput('');
                setSlippageError(false);
              },
              color: slippageError ? 'red' : ''
            }), "%"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          size: "sm",
          color: userSlippageTolerance === 'auto' ? 'blue' : 'gray',
          variant: userSlippageTolerance === 'auto' ? 'filled' : 'outlined',
          onClick: () => {
            parseSlippageInput('');
          },
          children: i18n._(
          /*i18n*/
          i18n._("Auto"))
        })]
      }), slippageError || tooLow || tooHigh ? /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        className: (0,functions/* classNames */.AK)(slippageError === SlippageError.InvalidInput ? 'text-red' : 'text-yellow', 'font-medium flex items-center space-x-2'),
        variant: "sm",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: slippageError === SlippageError.InvalidInput ? i18n._(
          /*i18n*/
          i18n._("Enter a valid slippage percentage")) : slippageError === SlippageError.RiskyLow ? i18n._(
          /*i18n*/
          i18n._("Your transaction may fail")) : i18n._(
          /*i18n*/
          i18n._("Your transaction may be frontrun"))
        })
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid gap-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "sm",
          className: "text-high-emphesis",
          children: i18n._(
          /*i18n*/
          i18n._("Transaction deadline"))
        }), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
          text: i18n._(
          /*i18n*/
          i18n._("Your transaction will revert if it is pending for more than this long."))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "p-2 rounded bg-dark-800 min-w-[82px] max-w-[102px]",
          style: {
            maxWidth: '40px',
            marginRight: '8px'
          },
          tabIndex: -1,
          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (0,functions/* classNames */.AK)(deadlineError ? 'text-red' : '', 'bg-transparent placeholder-low-emphesis'),
            placeholder: (constants/* DEFAULT_DEADLINE_FROM_NOW */.PY / 60).toString(),
            value: deadlineInput.length > 0 ? deadlineInput : deadline === constants/* DEFAULT_DEADLINE_FROM_NOW */.PY ? '' : (deadline / 60).toString(),
            onChange: e => parseCustomDeadline(e.target.value),
            onBlur: () => {
              setDeadlineInput('');
              setDeadlineError(false);
            },
            color: deadlineError ? 'red' : ''
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "sm",
          children: i18n._(
          /*i18n*/
          i18n._("minutes"))
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/hooks/index.ts + 2 modules
var src_hooks = __webpack_require__(9202);
// EXTERNAL MODULE: ./src/hooks/useOnClickOutside.tsx
var useOnClickOutside = __webpack_require__(525);
;// CONCATENATED MODULE: ./src/components/Settings/index.tsx

















function SettingsTab({
  placeholderSlippage
}) {
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const {
    chainId
  } = (0,src_hooks/* useActiveWeb3React */.aQ)();
  const node = (0,external_react_.useRef)(null);
  const open = (0,application_hooks/* useModalOpen */.oL)(actions/* ApplicationModal.SETTINGS */.Lk.SETTINGS);
  const toggle = (0,application_hooks/* useToggleSettingsMenu */.nU)();
  const [expertMode, toggleExpertMode] = (0,hooks/* useExpertModeManager */.DG)();
  const [singleHopOnly, setSingleHopOnly] = (0,hooks/* useUserSingleHopOnly */.RO)(); // show confirmation view before turning on

  const {
    0: showConfirmation,
    1: setShowConfirmation
  } = (0,external_react_.useState)(false);
  (0,useOnClickOutside/* useOnClickOutside */.t)(node, open ? toggle : undefined);
  const [ttl, setTtl] = (0,hooks/* useUserTransactionTTL */.A6)();
  const [userUseArcher, setUserUseArcher] = (0,hooks/* useUserArcherUseRelay */.AC)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative flex",
    ref: node,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center w-8 h-8 rounded cursor-pointer",
      onClick: toggle,
      id: "open-settings-dialog-button",
      children: /*#__PURE__*/jsx_runtime_.jsx(esm/* AdjustmentsIcon */.XgF, {
        className: "w-[26px] h-[26px] transform rotate-90"
      })
    }), open && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute top-14 right-0 z-50 -mr-2.5 min-w-20 md:m-w-22 md:-mr-5 bg-dark-900 border-2 border-dark-800 rounded w-80 shadow-lg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "p-4 space-y-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          weight: 700,
          className: "text-high-emphesis",
          children: i18n._(
          /*i18n*/
          i18n._("Transaction Settings"))
        }), /*#__PURE__*/jsx_runtime_.jsx(TransactionSettings, {
          placeholderSlippage: placeholderSlippage
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          className: "text-high-emphesis",
          weight: 700,
          children: i18n._(
          /*i18n*/
          i18n._("Interface Settings"))
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              variant: "sm",
              className: "text-primary",
              children: i18n._(
              /*i18n*/
              i18n._("Toggle Expert Mode"))
            }), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
              text: i18n._(
              /*i18n*/
              i18n._("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."))
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Toggle, {
            id: "toggle-expert-mode-button",
            isActive: expertMode,
            toggle: expertMode ? () => {
              toggleExpertMode();
              setShowConfirmation(false);
            } : () => {
              toggle();
              setShowConfirmation(true);
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              variant: "sm",
              className: "text-primary",
              children: i18n._(
              /*i18n*/
              i18n._("Disable Multihops"))
            }), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
              text: i18n._(
              /*i18n*/
              i18n._("Restricts swaps to direct pairs only."))
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Toggle, {
            id: "toggle-disable-multihop-button",
            isActive: singleHopOnly,
            toggle: () => singleHopOnly ? setSingleHopOnly(false) : setSingleHopOnly(true)
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
      isOpen: showConfirmation,
      onDismiss: () => setShowConfirmation(false),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
          title: i18n._(
          /*i18n*/
          i18n._("Are you sure?")),
          onClose: () => setShowConfirmation(false)
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "lg",
          children: i18n._(
          /*i18n*/
          i18n._("Expert mode turns off the confirm transaction prompt and allows high slippage trades\nthat often result in bad rates and lost funds."))
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "sm",
          className: "font-medium",
          children: i18n._(
          /*i18n*/
          i18n._("ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING."))
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          color: "red",
          size: "lg",
          onClick: () => {
            // if (window.prompt(i18n._(t`Please type the word "confirm" to enable expert mode.`)) === 'confirm') {
            //   toggleExpertMode()
            //   setShowConfirmation(false)
            // }
            toggleExpertMode();
            setShowConfirmation(false);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "lg",
            id: "confirm-expert-mode",
            children: i18n._(
            /*i18n*/
            i18n._("Turn On Expert Mode"))
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ 7473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Badge/index.tsx


const COLOR = {
  default: '',
  blue: 'bg-blue bg-opacity-20 outline-blue rounded text-xs text-blue px-2 py-1',
  pink: 'bg-pink bg-opacity-20 outline-pink rounded text-xs text-pink px-2 py-1',
  gradient: 'bg-gradient-to-r from-blue to-pink opacity-80 hover:opacity-100 bg-pink bg-opacity-20 outline-pink rounded text-base text-white px-2 py-1'
};
const SIZE = {
  default: 'text-xs',
  medium: 'text-sm',
  large: 'text-lg'
};

function Badge({
  color = 'default',
  size = 'default',
  children,
  className = ''
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${COLOR[color]} ${SIZE[size]} ${className}`,
    children: children
  });
}

/* harmony default export */ const components_Badge = (Badge);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
// EXTERNAL MODULE: ./src/components/NavLink/index.tsx
var NavLink = __webpack_require__(3233);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/hooks/index.ts + 2 modules
var hooks = __webpack_require__(9202);
// EXTERNAL MODULE: ./node_modules/swr/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(2503);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
// EXTERNAL MODULE: ./src/hooks/Tokens.ts
var Tokens = __webpack_require__(6269);
;// CONCATENATED MODULE: ./src/hooks/useLimitOrders.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const denominator = (decimals = 18) => sdk_.JSBI.exponentiate(sdk_.JSBI.BigInt(10), sdk_.JSBI.BigInt(decimals));

const viewUrl = `${sdk_.LAMBDA_URL}/orders/view`;

const viewFetcher = (url, account, chainId, pendingPage, page) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      address: account,
      chainId,
      page,
      pendingPage
    })
  }).then(r => r.json()).then(j => j.data);
};

const useLimitOrders = () => {
  const {
    account,
    chainId
  } = (0,hooks/* useActiveWeb3React */.aQ)();
  const limitOrderContract = (0,hooks/* useLimitOrderContract */.JY)();
  const tokens = (0,Tokens/* useAllTokens */.e_)();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    pending: {
      page: 1,
      maxPages: null,
      data: [],
      loading: true,
      totalOrders: 0
    },
    completed: {
      page: 1,
      maxPages: null,
      data: [],
      loading: true,
      totalOrders: 0
    }
  });
  const shouldFetch = (0,external_react_.useMemo)(() => viewUrl && account && chainId ? [viewUrl, account, chainId, state.pending.page, state.completed.page] : null, [account, chainId, state.completed.page, state.pending.page]);
  const {
    data: ordersData,
    mutate
  } = (0,index_esm/* default */.ZP)(shouldFetch, viewFetcher);
  const setPendingPage = (0,external_react_.useCallback)(page => {
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      pending: _objectSpread(_objectSpread({}, prevState.pending), {}, {
        page,
        loading: true
      })
    }));
  }, []);
  const setCompletedPage = (0,external_react_.useCallback)(page => {
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      completed: _objectSpread(_objectSpread({}, prevState.completed), {}, {
        page,
        loading: true
      })
    }));
  }, []);
  (0,external_react_.useEffect)(() => {
    if (!account || !chainId || !ordersData || !ordersData.pendingOrders || !ordersData.otherOrders || !Array.isArray(ordersData.pendingOrders.orders) || !Array.isArray(ordersData.otherOrders.orders)) return;

    const transform = async order => {
      const limitOrder = sdk_.LimitOrder.getLimitOrder(_objectSpread(_objectSpread({}, order), {}, {
        chainId: +order.chainId,
        tokenInDecimals: +order.tokenInDecimals,
        tokenOutDecimals: +order.tokenOutDecimals
      }));
      const tokenIn = limitOrder.amountIn.currency;
      const tokenOut = limitOrder.amountOut.currency;
      const openOrder = {
        tokenIn: tokens[tokenIn.address] || new sdk_.Token(chainId, tokenIn.address.toLowerCase(), tokenIn.decimals, tokenIn.symbol),
        tokenOut: tokens[tokenOut.address] || new sdk_.Token(chainId, tokenOut.address.toLowerCase(), tokenOut.decimals, tokenOut.symbol),
        limitOrder,
        filledPercent: order.filledAmount ? order.filledAmount.mul(bignumber_.BigNumber.from('100')).div(bignumber_.BigNumber.from(order.amountIn)).toString() : '0',
        status: order.status,
        rate: new sdk_.Percent(limitOrder.amountOut.quotient, denominator(tokenOut.decimals)).divide(new sdk_.Percent(limitOrder.amountIn.quotient, denominator(tokenIn.decimals))).divide(denominator(2)).toSignificant(6)
      };
      return openOrder;
    };

    (async () => {
      const openOrders = await Promise.all(ordersData.pendingOrders.orders.map(el => transform(el)));
      const completedOrders = await Promise.all(ordersData.otherOrders.orders.map(el => transform(el)));
      setState(prevState => ({
        pending: _objectSpread(_objectSpread({}, prevState.pending), {}, {
          data: openOrders,
          maxPages: ordersData.pendingOrders.pendingOrderMaxPage,
          loading: false,
          totalOrders: ordersData.pendingOrders.totalPendingOrders
        }),
        completed: _objectSpread(_objectSpread({}, prevState.completed), {}, {
          data: completedOrders,
          maxPages: ordersData.otherOrders.maxPage,
          loading: false,
          totalOrders: ordersData.otherOrders.totalOrders
        })
      }));
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [account, chainId, ordersData, limitOrderContract, setPendingPage, setCompletedPage]);
  return (0,external_react_.useMemo)(() => _objectSpread(_objectSpread({}, state), {}, {
    pending: _objectSpread(_objectSpread({}, state.pending), {}, {
      setPage: setPendingPage
    }),
    completed: _objectSpread(_objectSpread({}, state.completed), {}, {
      setPage: setCompletedPage
    }),
    mutate
  }), [mutate, setCompletedPage, setPendingPage, state]);
};

/* harmony default export */ const hooks_useLimitOrders = (useLimitOrders);
// EXTERNAL MODULE: external "@lingui/react"
var react_ = __webpack_require__(2339);
;// CONCATENATED MODULE: ./src/features/exchange-v1/limit-order/MyOrders.tsx









const MyOrders = () => {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    pending
  } = hooks_useLimitOrders();
  return /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
    href: "/open-order",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: "text-secondary hover:text-high-emphesis",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "md:flex hidden gap-3 items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: i18n._(
          /*i18n*/
          i18n._("My Orders"))
        }), /*#__PURE__*/jsx_runtime_.jsx(components_Badge, {
          color: "blue",
          children: pending.totalOrders
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex md:hidden text-primary",
        children: /*#__PURE__*/jsx_runtime_.jsx(esm/* ClipboardListIcon */.zTD, {
          className: "w-[26px] h-[26px]"
        })
      })]
    })
  });
};

/* harmony default export */ const limit_order_MyOrders = (MyOrders);
// EXTERNAL MODULE: ./src/components/Settings/index.tsx + 2 modules
var Settings = __webpack_require__(5990);
// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/features/trade/Header.tsx











const getQuery = (input, output) => {
  if (!input && !output) return;

  if (input && !output) {
    return {
      inputCurrency: input.address || 'BCH'
    };
  } else if (input && output) {
    return {
      inputCurrency: input.address,
      outputCurrency: output.address
    };
  }
};

const ExchangeHeader = ({
  input,
  output,
  allowedSlippage
}) => {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    chainId
  } = (0,hooks/* useActiveWeb3React */.aQ)();
  const router = (0,router_.useRouter)();
  const {
    0: animateWallet,
    1: setAnimateWallet
  } = (0,external_react_.useState)(false);
  const isRemove = router.asPath.startsWith('/remove');
  const isLimitOrder = router.asPath.startsWith('/limit-order');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center justify-between mb-4 space-x-3",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-2 rounded p-3px bg-dark-800 h-[46px]",
      children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
        activeClassName: "font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r from-opaque-blue to-opaque-pink hover:from-blue hover:to-pink",
        href: {
          pathname: '/swap',
          query: getQuery(input, output)
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis ",
          children: i18n._(
          /*i18n*/
          i18n._("Swap"))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
        activeClassName: "font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r from-opaque-blue to-opaque-pink hover:from-blue hover:to-pink",
        href: `/${!isRemove ? 'add' : 'remove'}${input ? `/${(0,functions/* currencyId */.Hh)(input)}` : ''}${output ? `/${(0,functions/* currencyId */.Hh)(output)}` : ''}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis",
          children: i18n._(
          /*i18n*/
          i18n._("Liquidity"))
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-flow-col gap-1",
        children: [isLimitOrder && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "items-center h-full w-full cursor-pointer hover:bg-dark-800 rounded px-3 py-1.5",
          children: /*#__PURE__*/jsx_runtime_.jsx(limit_order_MyOrders, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "relative flex items-center w-full h-full rounded hover:bg-dark-800",
          children: /*#__PURE__*/jsx_runtime_.jsx(Settings/* default */.Z, {
            placeholderSlippage: allowedSlippage
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const Header = (ExchangeHeader);

/***/ }),

/***/ 3302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getExplorerLink)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
 // Multichain Explorer

const builders = {
  smartscan: (chainName, data, type) => {
    const prefix = `https://smartscan.cash`;

    switch (type) {
      case 'transaction':
        return `${prefix}/tx/${data}`;

      default:
        return `${prefix}/${type}/${data}`;
    }
  }
};
const chains = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: {
    chainName: '',
    builder: builders.smartscan
  },
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: {
    chainName: 'amber',
    builder: builders.smartscan
  }
};
function getExplorerLink(chainId, data, type) {
  const chain = chains[chainId];
  return chain.builder(chain.chainName, data, type);
}

/***/ }),

/***/ 1543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useENS)
/* harmony export */ });
/* harmony import */ var _functions_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2556);
/* harmony import */ var _useENSAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9678);
/* harmony import */ var _useENSName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7816);



/**
 * Given a name or address, does a lookup to resolve to an address and name
 * @param nameOrAddress ENS name or address
 */

function useENS(nameOrAddress) {
  const validated = (0,_functions_validate__WEBPACK_IMPORTED_MODULE_0__/* .isAddress */ .UJ)(nameOrAddress);
  const reverseLookup = (0,_useENSName__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(validated ? validated : undefined);
  const lookup = (0,_useENSAddress__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(nameOrAddress);
  return {
    loading: reverseLookup.loading || lookup.loading,
    address: validated ? validated : lookup.address,
    name: reverseLookup.ENSName ? reverseLookup.ENSName : !validated && lookup.address ? nameOrAddress || null : null
  };
}

/***/ }),

/***/ 9678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useENSAddress)
/* harmony export */ });
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6419);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_hash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(879);






/**
 * Does a lookup for an ENS name to find its address.
 */

function useENSAddress(ensName) {
  var _resolverAddress$resu, _addr$result$, _addr$result;

  const debouncedName = (0,_useDebounce__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(ensName, 200);
  const ensNodeArgument = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    if (!debouncedName) return [undefined];

    try {
      return debouncedName ? [(0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_2__.namehash)(debouncedName)] : [undefined];
    } catch (error) {
      return [undefined];
    }
  }, [debouncedName]);
  const registrarContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useENSRegistrarContract */ .zb)(false);
  const resolverAddress = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSingleCallResult */ .Wk)(registrarContract, 'resolver', ensNodeArgument);
  const resolverAddressResult = (_resolverAddress$resu = resolverAddress.result) === null || _resolverAddress$resu === void 0 ? void 0 : _resolverAddress$resu[0];
  const resolverContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useENSResolverContract */ .uU)(resolverAddressResult && !(0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .isZero */ .Fr)(resolverAddressResult) ? resolverAddressResult : undefined, false);
  const addr = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSingleCallResult */ .Wk)(resolverContract, 'addr', ensNodeArgument);
  const changed = debouncedName !== ensName;
  return {
    address: changed ? null : (_addr$result$ = (_addr$result = addr.result) === null || _addr$result === void 0 ? void 0 : _addr$result[0]) !== null && _addr$result$ !== void 0 ? _addr$result$ : null,
    loading: changed || resolverAddress.loading || addr.loading
  };
}

/***/ }),

/***/ 4656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useTransactionDeadline)
});

// EXTERNAL MODULE: ./src/state/hooks.ts
var hooks = __webpack_require__(9268);
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 21 modules
var useContract = __webpack_require__(6419);
// EXTERNAL MODULE: ./src/state/multicall/hooks.ts
var multicall_hooks = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/hooks/useCurrentBlockTimestamp.ts

 // gets the current timestamp from the blockchain

function useCurrentBlockTimestamp() {
  var _useSingleCallResult, _useSingleCallResult$;

  const multicall = (0,useContract/* useMulticall2Contract */.JD)();
  return (_useSingleCallResult = (0,multicall_hooks/* useSingleCallResult */.Wk)(multicall, 'getCurrentBlockTimestamp')) === null || _useSingleCallResult === void 0 ? void 0 : (_useSingleCallResult$ = _useSingleCallResult.result) === null || _useSingleCallResult$ === void 0 ? void 0 : _useSingleCallResult$[0];
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/hooks/useTransactionDeadline.ts


 // combines the block timestamp with the user setting to give the deadline that should be used for any submitted transaction

function useTransactionDeadline() {
  const ttl = (0,hooks/* useAppSelector */.C)(state => state.user.userDeadline);
  const blockTimestamp = useCurrentBlockTimestamp(); // console.log({ ttl, blockTimestamp })

  return (0,external_react_.useMemo)(() => {
    if (blockTimestamp && ttl) return blockTimestamp.add(ttl);
    return undefined;
  }, [blockTimestamp, ttl]);
}

/***/ }),

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pM": () => (/* binding */ ConfirmationModalContent),
  "ht": () => (/* binding */ TransactionErrorContent),
  "ZP": () => (/* binding */ modals_TransactionConfirmationModal)
});

// UNUSED EXPORTS: ConfirmationPendingContent, TransactionSubmittedContent

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9337);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(7603);
// EXTERNAL MODULE: ./src/components/CloseIcon/index.tsx
var CloseIcon = __webpack_require__(5298);
// EXTERNAL MODULE: ./src/components/ExternalLink/index.tsx
var ExternalLink = __webpack_require__(3106);
// EXTERNAL MODULE: ./src/components/Image/index.tsx
var Image = __webpack_require__(5579);
// EXTERNAL MODULE: external "lottie-react"
var external_lottie_react_ = __webpack_require__(2409);
var external_lottie_react_default = /*#__PURE__*/__webpack_require__.n(external_lottie_react_);
// EXTERNAL MODULE: ./src/components/Modal/index.tsx
var Modal = __webpack_require__(1441);
// EXTERNAL MODULE: ./src/components/ModalHeader/index.tsx
var ModalHeader = __webpack_require__(7144);
// EXTERNAL MODULE: ./src/components/Row/index.tsx
var Row = __webpack_require__(7745);
// EXTERNAL MODULE: ./src/functions/explorer.ts
var explorer = __webpack_require__(3302);
;// CONCATENATED MODULE: ./src/animation/loading-rolling-circle.json
const loading_rolling_circle_namespaceObject = JSON.parse('{"v":"5.6.10","fr":24,"ip":0,"op":72,"w":500,"h":500,"nm":"339-loader-10","ddd":0,"assets":[{"id":"comp_0","layers":[]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Watermark","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":0,"k":0.292,"ix":2},"w":500,"h":500,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.886,0.886,0.886],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0,0.714,0.945],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":112,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"NULL 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.562],"y":[0.589]},"o":{"x":[0.195],"y":[0.225]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.8]},"o":{"x":[0.31],"y":[0.311]},"t":18,"s":[185.773]},{"i":{"x":[0.69],"y":[0.686]},"o":{"x":[0.167],"y":[0.198]},"t":36,"s":[359.73]},{"i":{"x":[0.805],"y":[0.774]},"o":{"x":[0.438],"y":[0.415]},"t":54,"s":[533.78]},{"t":72,"s":[720]}],"ix":10},"p":{"a":0,"k":[0,23.125,0],"ix":2},"a":{"a":0,"k":[0,23.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,33.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-1,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 2","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.21],"y":[0.543]},"o":{"x":[0.167],"y":[0.397]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.602]},"o":{"x":[0.79],"y":[0.46]},"t":18,"s":[90]},{"i":{"x":[0.21],"y":[0.539]},"o":{"x":[0.167],"y":[0.398]},"t":36,"s":[180]},{"i":{"x":[0.833],"y":[0.601]},"o":{"x":[0.79],"y":[0.462]},"t":54,"s":[270]},{"t":72,"s":[360]}],"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[46,46],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,23.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-1,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.21],"y":[0.543]},"o":{"x":[0.167],"y":[0.397]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.602]},"o":{"x":[0.79],"y":[0.46]},"t":18,"s":[90]},{"i":{"x":[0.21],"y":[0.539]},"o":{"x":[0.167],"y":[0.398]},"t":36,"s":[180]},{"i":{"x":[0.833],"y":[0.601]},"o":{"x":[0.79],"y":[0.462]},"t":54,"s":[270]},{"t":72,"s":[360]}],"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[430,430,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[100,100],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0}],"markers":[]}');
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
;// CONCATENATED MODULE: ./src/hooks/useAddTokenToMetaMask.ts


function useAddTokenToMetaMask(currencyToAdd) {
  const {
    chainId,
    library
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const token = currencyToAdd === null || currencyToAdd === void 0 ? void 0 : currencyToAdd.wrapped;
  const {
    0: success,
    1: setSuccess
  } = (0,external_react_.useState)();
  const addToken = (0,external_react_.useCallback)(() => {
    if (library && library.provider.isMetaMask && library.provider.request && token) {
      library.provider.request({
        method: 'wallet_watchAsset',
        params: {
          //@ts-ignore // need this for incorrect ethers provider type
          type: 'ERC20',
          options: {
            address: token.address,
            symbol: token.symbol,
            decimals: token.decimals,
            image: `https://raw.githubusercontent.com/mistswapdex/assets/master/blockchains/smartbch/assets/${token.address}/logo.png`
          }
        }
      }).then(success => {
        setSuccess(success);
      }).catch(() => setSuccess(false));
    } else {
      setSuccess(false);
    }
  }, [library, token]);
  return {
    addToken,
    success
  };
}
// EXTERNAL MODULE: external "@lingui/react"
var react_ = __webpack_require__(2339);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/modals/TransactionConfirmationModal/index.tsx

















const ConfirmationPendingContent = ({
  onDismiss,
  pendingText,
  pendingText2
}) => {
  const {
    i18n
  } = (0,react_.useLingui)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-end",
      children: /*#__PURE__*/jsx_runtime_.jsx(CloseIcon/* default */.Z, {
        onClick: onDismiss
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-24 pb-4 m-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_lottie_react_default()), {
        animationData: loading_rolling_circle_namespaceObject,
        autoplay: true,
        loop: true
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-center justify-center gap-3",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-xl font-bold text-high-emphesis",
        children: i18n._(
        /*i18n*/
        i18n._("Waiting for Confirmation"))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "font-bold",
        children: pendingText
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "font-bold",
        children: pendingText2
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-sm font-bold text-secondary",
        children: i18n._(
        /*i18n*/
        i18n._("Confirm this transaction in your wallet"))
      })]
    })]
  });
};
const TransactionSubmittedContent = ({
  onDismiss,
  chainId,
  hash,
  currencyToAdd
}) => {
  var _library$provider;

  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    library
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const {
    addToken,
    success
  } = useAddTokenToMetaMask(currencyToAdd);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-end",
      children: /*#__PURE__*/jsx_runtime_.jsx(CloseIcon/* default */.Z, {
        onClick: onDismiss
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-24 pb-4 m-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ArrowUpCircle, {
        strokeWidth: 0.5,
        size: 90,
        className: "text-blue"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-center justify-center gap-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-xl font-bold",
        children: i18n._(
        /*i18n*/
        i18n._("Transaction Submitted"))
      }), chainId && hash && /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
        href: (0,explorer/* getExplorerLink */.E)(chainId, hash, 'transaction'),
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-bold text-blue",
          children: "View on explorer"
        })
      }), currencyToAdd && (library === null || library === void 0 ? void 0 : (_library$provider = library.provider) === null || _library$provider === void 0 ? void 0 : _library$provider.isMetaMask) && /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
        color: "gradient",
        onClick: addToken,
        className: "w-auto mt-4",
        children: !success ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
          className: "mx-auto space-x-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: i18n._(
            /*i18n*/
            i18n._("Add {0} to MetaMask", {
              0: currencyToAdd.symbol
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            src: "/images/wallets/metamask.png",
            alt: i18n._(
            /*i18n*/
            i18n._("Add {0} to MetaMask", {
              0: currencyToAdd.symbol
            })),
            width: 24,
            height: 24,
            className: "ml-1"
          })]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
          children: [i18n._(
          /*i18n*/
          i18n._("Added")), " ", currencyToAdd.symbol]
        })
      })]
    })]
  });
};
const ConfirmationModalContent = ({
  title,
  bottomContent,
  onDismiss,
  topContent
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid gap-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
      title: title,
      onClose: onDismiss
    }), topContent(), bottomContent()]
  });
};
const TransactionErrorContent = ({
  message,
  onDismiss
}) => {
  const {
    i18n
  } = (0,react_.useLingui)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid gap-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-lg font-medium text-high-emphesis",
          children: i18n._(
          /*i18n*/
          i18n._("Error"))
        }), /*#__PURE__*/jsx_runtime_.jsx(CloseIcon/* default */.Z, {
          onClick: onDismiss
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-center gap-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.AlertTriangle, {
          className: "text-red",
          style: {
            strokeWidth: 1.5
          },
          size: 64
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-bold text-red",
          children: message
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
        color: "gradient",
        size: "lg",
        onClick: onDismiss,
        children: "Dismiss"
      })
    })]
  });
};

const TransactionConfirmationModal = ({
  isOpen,
  onDismiss,
  attemptingTxn,
  hash,
  pendingText,
  pendingText2,
  content,
  currencyToAdd
}) => {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  if (!chainId) return null; // confirmation screen

  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
    isOpen: isOpen,
    onDismiss: onDismiss,
    maxHeight: 90,
    children: attemptingTxn ? /*#__PURE__*/jsx_runtime_.jsx(ConfirmationPendingContent, {
      onDismiss: onDismiss,
      pendingText: pendingText,
      pendingText2: pendingText2
    }) : hash ? /*#__PURE__*/jsx_runtime_.jsx(TransactionSubmittedContent, {
      chainId: chainId,
      hash: hash,
      onDismiss: onDismiss,
      currencyToAdd: currencyToAdd
    }) : content()
  });
};

/* harmony default export */ const modals_TransactionConfirmationModal = (TransactionConfirmationModal);

/***/ })

};
;
//# sourceMappingURL=7586.js.map