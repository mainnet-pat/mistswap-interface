"use strict";
exports.id = 5948;
exports.ids = [5948,7898];
exports.modules = {

/***/ 2650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3802);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const TYPE = {
  information: {
    color: 'bg-purple bg-opacity-20 text-high-emphesis',
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
      width: "33",
      height: "33",
      className: "text-low-emphesis",
      viewBox: "0 0 33 33",
      xmlns: "http://www.w3.org/2000/svg",
      path: "currentColor",
      fill: "currentColor",
      "aria-hidden": "true",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
        d: "M16.5 0C7.40184 0 0 7.40184 0 16.5C0 25.5982 7.40184 33 16.5 33C25.5982 33 33 25.5982 33 16.5C33 7.40184 25.5982 0 16.5 0ZM16.5 25.9909C15.5747 25.9909 14.8245 25.2407 14.8245 24.3154C14.8245 23.39 15.5747 22.6398 16.5 22.6398C17.4253 22.6398 18.1755 23.39 18.1755 24.3154C18.1755 25.2407 17.4253 25.9909 16.5 25.9909ZM18.1755 17.3898C18.1755 18.3152 17.4253 19.0654 16.5 19.0654C15.5747 19.0654 14.8245 18.3152 14.8245 17.3898V8.56534C14.8245 7.63999 15.5747 6.8898 16.5 6.8898C17.4253 6.8898 18.1755 7.63999 18.1755 8.56534V17.3898Z",
        fill: "#575757"
      })
    })
  },
  warning: {
    color: 'bg-yellow bg-opacity-25 text-high-emphesis',
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
      className: "w-5 h-5 text-yellow",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
        fillRule: "evenodd",
        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
        clipRule: "evenodd"
      })
    })
  },
  error: {
    color: 'bg-red bg-opacity-25 text-high-emphesis',
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
      className: "w-5 h-5 text-red",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
        clipRule: "evenodd"
      })
    })
  }
};
function Alert({
  title,
  message,
  type = 'warning',
  className = '',
  showIcon = false,
  dismissable = true
}) {
  // TODO: Persist this...
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    color,
    icon
  } = TYPE[type];
  return message && show ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)('block relative w-full rounded text-sm p-4', show && 'pr-10', color, className),
    children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "mb-1 text-2xl font-medium",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex items-center",
      children: [showIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "flex-shrink-0",
        children: icon
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: !showIcon ? 'ml-0' : 'ml-3',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          className: "text-base",
          children: message
        })
      })]
    }), dismissable && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "absolute top-2 right-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
        type: "button",
        onClick: () => setShow(!show),
        className: "inline-flex opacity-80 hover:opacity-100 focused:opacity-100 rounded p-1.5 text-primary hover:text-high-emphesis focus:text-high-emphesis focus:outline-none focus:ring focus:ring-offset focus:ring-offset-purple focus:ring-purple",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: "sr-only",
          children: "Dismiss"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__/* .XIcon */ .b0D, {
          className: "w-5 h-5",
          "aria-hidden": "true"
        })]
      })
    })]
  }) : null;
}

/***/ }),

/***/ 2212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1769);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);






function Header({
  className,
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: (0,_functions_styling__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)('flex items-center rounded-t px-4 sm:px-8 py-4 sm:py-6', className),
    children: children
  });
}

function Card({
  header = undefined,
  footer = undefined,
  backgroundImage = '',
  title = '',
  description = '',
  children,
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `relative ${className}`,
    style: {
      borderRadius: '10px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center bottom'
    },
    children: [header && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "px-2 py-4 sm:p-8",
      children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "mb-4 text-2xl text-high-emphesis",
        children: title
      }), description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "text-base text-secondary",
        children: description
      }), children]
    }), footer && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: footer
    })]
  });
}

Card.Header = Header;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

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

/***/ 6659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Main = ({
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
  className: "flex flex-col items-center justify-start flex-grow w-full h-full",
  style: {
    height: 'max-content'
  },
  children: children
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

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

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ CHAINLINK_PRICE_FEED_MAP)
/* harmony export */ });
const CHAINLINK_PRICE_FEED_MAP = {};

/***/ }),

/***/ 9429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ KashiCooker),
  "D": () => (/* binding */ signMasterContractApproval)
});

// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/functions/contract.ts + 2 modules
var contract = __webpack_require__(2222);
// EXTERNAL MODULE: external "@ethersproject/constants"
var constants_ = __webpack_require__(6148);
// EXTERNAL MODULE: external "@ethersproject/contracts"
var contracts_ = __webpack_require__(4440);
;// CONCATENATED MODULE: ./src/constants/abis/kashipair.json
const kashipair_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract IBentoBoxV1","name":"bentoBox_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"accruedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeFraction","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"rate","type":"uint64"},{"indexed":false,"internalType":"uint256","name":"utilization","type":"uint256"}],"name":"LogAccrue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fraction","type":"uint256"}],"name":"LogAddAsset","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"}],"name":"LogAddCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"part","type":"uint256"}],"name":"LogBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"}],"name":"LogExchangeRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newFeeTo","type":"address"}],"name":"LogFeeTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fraction","type":"uint256"}],"name":"LogRemoveAsset","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"}],"name":"LogRemoveCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"part","type":"uint256"}],"name":"LogRepay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"feeTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"feesEarnedFraction","type":"uint256"}],"name":"LogWithdrawFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accrue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"accrueInfo","outputs":[{"internalType":"uint64","name":"interestPerSecond","type":"uint64"},{"internalType":"uint64","name":"lastAccrued","type":"uint64"},{"internalType":"uint128","name":"feesEarnedFraction","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"skim","type":"bool"},{"internalType":"uint256","name":"share","type":"uint256"}],"name":"addAsset","outputs":[{"internalType":"uint256","name":"fraction","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"skim","type":"bool"},{"internalType":"uint256","name":"share","type":"uint256"}],"name":"addCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"asset","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bentoBox","outputs":[{"internalType":"contract IBentoBoxV1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"part","type":"uint256"},{"internalType":"uint256","name":"share","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collateral","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"actions","type":"uint8[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"datas","type":"bytes[]"}],"name":"cook","outputs":[{"internalType":"uint256","name":"value1","type":"uint256"},{"internalType":"uint256","name":"value2","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"init","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256[]","name":"maxBorrowParts","type":"uint256[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"contract ISwapper","name":"swapper","type":"address"},{"internalType":"bool","name":"open","type":"bool"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterContract","outputs":[{"internalType":"contract KashiPairMediumRiskV1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"fraction","type":"uint256"}],"name":"removeAsset","outputs":[{"internalType":"uint256","name":"share","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"}],"name":"removeCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"skim","type":"bool"},{"internalType":"uint256","name":"part","type":"uint256"}],"name":"repay","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeTo","type":"address"}],"name":"setFeeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISwapper","name":"swapper","type":"address"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setSwapper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISwapper","name":"","type":"address"}],"name":"swappers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAsset","outputs":[{"internalType":"uint128","name":"elastic","type":"uint128"},{"internalType":"uint128","name":"base","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBorrow","outputs":[{"internalType":"uint128","name":"elastic","type":"uint128"},{"internalType":"uint128","name":"base","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCollateralShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"bool","name":"direct","type":"bool"},{"internalType":"bool","name":"renounce","type":"bool"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateExchangeRate","outputs":[{"internalType":"bool","name":"updated","type":"bool"},{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userBorrowPart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userCollateralShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ./src/functions/math.ts
var math = __webpack_require__(9247);
// EXTERNAL MODULE: external "@ethersproject/abi"
var abi_ = __webpack_require__(6124);
// EXTERNAL MODULE: ./src/functions/rebase.ts
var rebase = __webpack_require__(2271);
// EXTERNAL MODULE: ./src/functions/bentobox.ts
var bentobox = __webpack_require__(4218);
;// CONCATENATED MODULE: ./src/entities/KashiCooker.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











async function signMasterContractApproval(bentoBoxContract, masterContract, user, library, approved, chainId) {
  const warning = approved ? 'Give FULL access to funds in (and approved to) BentoBox?' : 'Revoke access to BentoBox?';
  const nonce = await (bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.nonces(user));
  const message = {
    warning,
    user,
    masterContract,
    approved,
    nonce
  };
  const typedData = {
    types: {
      SetMasterContractApproval: [{
        name: 'warning',
        type: 'string'
      }, {
        name: 'user',
        type: 'address'
      }, {
        name: 'masterContract',
        type: 'address'
      }, {
        name: 'approved',
        type: 'bool'
      }, {
        name: 'nonce',
        type: 'uint256'
      }]
    },
    primaryType: 'SetMasterContractApproval',
    domain: {
      name: 'BentoBox V1',
      chainId: chainId,
      verifyingContract: bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.address
    },
    message: message
  };
  const signer = (0,contract/* getSigner */.TC)(library, user);
  return signer._signTypedData(typedData.domain, typedData.types, typedData.message);
}
var Action;

(function (Action) {
  Action[Action["ADD_ASSET"] = 1] = "ADD_ASSET";
  Action[Action["REPAY"] = 2] = "REPAY";
  Action[Action["REMOVE_ASSET"] = 3] = "REMOVE_ASSET";
  Action[Action["REMOVE_COLLATERAL"] = 4] = "REMOVE_COLLATERAL";
  Action[Action["BORROW"] = 5] = "BORROW";
  Action[Action["GET_REPAY_SHARE"] = 6] = "GET_REPAY_SHARE";
  Action[Action["GET_REPAY_PART"] = 7] = "GET_REPAY_PART";
  Action[Action["ACCRUE"] = 8] = "ACCRUE";
  Action[Action["ADD_COLLATERAL"] = 10] = "ADD_COLLATERAL";
  Action[Action["UPDATE_EXCHANGE_RATE"] = 11] = "UPDATE_EXCHANGE_RATE";
  Action[Action["BENTO_DEPOSIT"] = 20] = "BENTO_DEPOSIT";
  Action[Action["BENTO_WITHDRAW"] = 21] = "BENTO_WITHDRAW";
  Action[Action["BENTO_TRANSFER"] = 22] = "BENTO_TRANSFER";
  Action[Action["BENTO_TRANSFER_MULTIPLE"] = 23] = "BENTO_TRANSFER_MULTIPLE";
  Action[Action["BENTO_SETAPPROVAL"] = 24] = "BENTO_SETAPPROVAL";
  Action[Action["CALL"] = 30] = "CALL";
})(Action || (Action = {}));

class KashiCooker {
  constructor(pair, account, library, chainId) {
    _defineProperty(this, "pair", void 0);

    _defineProperty(this, "account", void 0);

    _defineProperty(this, "library", void 0);

    _defineProperty(this, "chainId", void 0);

    _defineProperty(this, "actions", void 0);

    _defineProperty(this, "values", void 0);

    _defineProperty(this, "datas", void 0);

    this.pair = pair;
    this.account = account || constants_.AddressZero;
    this.library = library;
    this.chainId = chainId || 1;
    this.actions = [];
    this.values = [];
    this.datas = [];
  }

  add(action, data, value = 0) {
    this.actions.push(action);
    this.datas.push(data);
    this.values.push(bignumber_.BigNumber.from(value));
  }

  approve(permit) {
    if (permit) {
      this.add(Action.BENTO_SETAPPROVAL, abi_.defaultAbiCoder.encode(['address', 'address', 'bool', 'uint8', 'bytes32', 'bytes32'], [permit.account, permit.masterContract, true, permit.v, permit.r, permit.s]));
    }
  }

  updateExchangeRate(mustUpdate = false, minRate = math/* ZERO */.xE, maxRate = math/* ZERO */.xE) {
    this.add(Action.UPDATE_EXCHANGE_RATE, abi_.defaultAbiCoder.encode(['bool', 'uint256', 'uint256'], [mustUpdate, minRate, maxRate]));
    return this;
  }

  bentoDepositCollateral(amount) {
    const useNative = this.pair.collateral.address === sdk_.WNATIVE[this.chainId].address;
    this.add(Action.BENTO_DEPOSIT, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.collateral.address, this.account, amount, 0]), useNative ? amount : math/* ZERO */.xE);
    return this;
  }

  bentoWithdrawCollateral(amount, share) {
    const useNative = this.pair.collateral.address === sdk_.WNATIVE[this.chainId].address;
    this.add(Action.BENTO_WITHDRAW, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.collateral.address, this.account, amount, share]), useNative ? amount : math/* ZERO */.xE);
    return this;
  }

  bentoTransferCollateral(share, toAddress) {
    this.add(Action.BENTO_TRANSFER, abi_.defaultAbiCoder.encode(['address', 'address', 'int256'], [this.pair.collateral.address, toAddress, share]));
    return this;
  }

  repayShare(part) {
    this.add(Action.GET_REPAY_SHARE, abi_.defaultAbiCoder.encode(['int256'], [part]));
    return this;
  }

  addCollateral(amount, fromBento) {
    let share;

    if (fromBento) {
      share = amount.lt(0) ? amount : (0,bentobox/* toShare */.T)(this.pair.collateral, amount);
    } else {
      const useNative = this.pair.collateral.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.BENTO_DEPOSIT, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.collateral.address, this.account, amount, 0]), useNative ? amount : math/* ZERO */.xE);
      share = bignumber_.BigNumber.from(-2);
    }

    this.add(Action.ADD_COLLATERAL, abi_.defaultAbiCoder.encode(['int256', 'address', 'bool'], [share, this.account, false]));
    return this;
  }

  addAsset(amount, fromBento) {
    let share;

    if (fromBento) {
      share = (0,bentobox/* toShare */.T)(this.pair.asset, amount);
    } else {
      const useNative = this.pair.asset.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.BENTO_DEPOSIT, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.asset.address, this.account, amount, 0]), useNative ? amount : math/* ZERO */.xE);
      share = bignumber_.BigNumber.from(-2);
    }

    this.add(Action.ADD_ASSET, abi_.defaultAbiCoder.encode(['int256', 'address', 'bool'], [share, this.account, false]));
    return this;
  }

  removeAsset(fraction, toBento) {
    this.add(Action.REMOVE_ASSET, abi_.defaultAbiCoder.encode(['int256', 'address'], [fraction, this.account]));

    if (!toBento) {
      const useNative = this.pair.asset.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.BENTO_WITHDRAW, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.asset.address, this.account, 0, -1]));
    }

    return this;
  }

  removeCollateral(share, toBento) {
    this.add(Action.REMOVE_COLLATERAL, abi_.defaultAbiCoder.encode(['int256', 'address'], [share, this.account]));

    if (!toBento) {
      const useNative = this.pair.collateral.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.BENTO_WITHDRAW, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.collateral.address, this.account, 0, share]));
    }

    return this;
  }

  removeCollateralFraction(fraction, toBento) {
    this.add(Action.REMOVE_COLLATERAL, abi_.defaultAbiCoder.encode(['int256', 'address'], [fraction, this.account]));

    if (!toBento) {
      const useNative = this.pair.collateral.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.BENTO_WITHDRAW, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.collateral.address, this.account, 0, -1]));
    }

    return this;
  }

  borrow(amount, toBento, toAddress = '') {
    this.add(Action.BORROW, abi_.defaultAbiCoder.encode(['int256', 'address'], [amount, toAddress && toBento ? toAddress : this.account]));

    if (!toBento) {
      const useNative = this.pair.asset.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.BENTO_WITHDRAW, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.asset.address, toAddress || this.account, amount, 0]));
    }

    return this;
  }

  repay(amount, fromBento) {
    if (!fromBento) {
      const useNative = this.pair.asset.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.BENTO_DEPOSIT, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.asset.address, this.account, amount, 0]), useNative ? amount : math/* ZERO */.xE);
    }

    this.add(Action.GET_REPAY_PART, abi_.defaultAbiCoder.encode(['int256'], [fromBento ? amount : -1]));
    this.add(Action.REPAY, abi_.defaultAbiCoder.encode(['int256', 'address', 'bool'], [-1, this.account, false]));
    return this;
  }

  repayPart(part, fromBento) {
    if (!fromBento) {
      const useNative = this.pair.asset.address === sdk_.WNATIVE[this.chainId].address;
      this.add(Action.GET_REPAY_SHARE, abi_.defaultAbiCoder.encode(['int256'], [part]));
      this.add(Action.BENTO_DEPOSIT, abi_.defaultAbiCoder.encode(['address', 'address', 'int256', 'int256'], [useNative ? constants_.AddressZero : this.pair.asset.address, this.account, 0, -1]), // TODO: Put some warning in the UI or not allow repaying ETH directly from wallet, because this can't be pre-calculated
      useNative ? (0,bentobox/* toShare */.T)(this.pair.asset, (0,rebase/* toElastic */.N)(this.pair.totalBorrow, part, true)).mul(1001).div(1000) : math/* ZERO */.xE);
    }

    this.add(Action.REPAY, abi_.defaultAbiCoder.encode(['int256', 'address', 'bool'], [part, this.account, false]));
    return this;
  }

  action(address, value, data, useValue1, useValue2, returnValues) {
    this.add(Action.CALL, abi_.defaultAbiCoder.encode(['address', 'bytes', 'bool', 'bool', 'uint8'], [address, data, useValue1, useValue2, returnValues]), value);
  }

  async cook() {
    if (!this.library) {
      return {
        success: false
      };
    }

    const kashiPairCloneContract = new contracts_.Contract(this.pair.address, kashipair_namespaceObject, (0,contract/* getProviderOrSigner */.TY)(this.library, this.account));

    try {
      return {
        success: true,
        tx: await kashiPairCloneContract.cook(this.actions, this.values, this.datas, {
          value: this.values.reduce((a, b) => a.add(b), math/* ZERO */.xE)
        })
      };
    } catch (error) {
      console.error('KashiCooker Error: ', error);
      return {
        success: false,
        error: error
      };
    }
  }

}

/***/ }),

/***/ 3830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uw": () => (/* binding */ getOracle)
/* harmony export */ });
/* unused harmony exports AbstractOracle, SushiSwapTWAP0Oracle, SushiSwapTWAP1Oracle, ChainlinkOracle */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6148);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_oracles_chainlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4705);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6124);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9247);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AbstractOracle {
  constructor(pair, chainId, tokens) {
    _defineProperty(this, "address", '');

    _defineProperty(this, "name", 'None');

    _defineProperty(this, "data", '');

    _defineProperty(this, "warning", '');

    _defineProperty(this, "error", '');

    _defineProperty(this, "chainId", _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH);

    _defineProperty(this, "pair", void 0);

    _defineProperty(this, "tokens", void 0);

    _defineProperty(this, "valid", false);

    this.address = pair.oracle;
    this.data = pair.oracleData;
    this.pair = pair;
    this.chainId = chainId;
    this.tokens = tokens;
  }

}
class SushiSwapTWAP0Oracle extends (/* unused pure expression or super */ null && (AbstractOracle)) {
  constructor(pair, chainId, tokens) {
    super(pair, chainId, tokens);
    this.name = 'SushiSwap';
  }

}
class SushiSwapTWAP1Oracle extends (/* unused pure expression or super */ null && (AbstractOracle)) {
  constructor(pair, chainId, tokens) {
    super(pair, chainId, tokens);
    this.name = 'SushiSwap';
  }

}
class ChainlinkOracle extends AbstractOracle {
  constructor(pair, chainId, tokens) {
    super(pair, chainId, tokens);
    this.name = 'Chainlink';
    this.valid = this.validate();
  }

  validate() {
    const mapping = _config_oracles_chainlink__WEBPACK_IMPORTED_MODULE_2__/* .CHAINLINK_PRICE_FEED_MAP */ .k[this.chainId];

    if (!mapping) {
      return false;
    }

    const params = _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__.defaultAbiCoder.decode(['address', 'address', 'uint256'], this.data);
    let decimals = 54;
    let from = '';
    let to = '';

    if (params[0] !== _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.AddressZero) {
      if (!mapping[params[0]]) {
        this.error = 'One of the Chainlink oracles used is not configured in this UI.';
        return false;
      } else {
        decimals -= 18 - mapping[params[0]].decimals;
        from = mapping[params[0]].from;
        to = mapping[params[0]].to;
      }
    }

    if (params[1] !== _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.AddressZero) {
      if (!mapping[params[1]]) {
        this.error = 'One of the Chainlink oracles used is not configured in this UI.';
        return false;
      } else {
        decimals -= mapping[params[1]].decimals;

        if (!to) {
          from = mapping[params[1]].to;
          to = mapping[params[1]].from;
        } else if (to === mapping[params[1]].to) {
          to = mapping[params[1]].from;
        } else {
          this.error = "The Chainlink oracles used don't match up with eachother. If 2 oracles are used, they should have a common token, such as WBTC/ETH and LINK/ETH, where ETH is the common link.";
          return false;
        }
      }
    }

    if (from === this.pair.assetAddress && to === this.pair.collateralAddress && this.tokens[this.pair.collateralAddress] && this.tokens[this.pair.assetAddress]) {
      const needed = this.tokens[this.pair.collateralAddress].decimals + 18 - this.tokens[this.pair.assetAddress].decimals;
      const divider = (0,_functions_math__WEBPACK_IMPORTED_MODULE_4__/* .e10 */ .TB)(decimals - needed);

      if (!divider.eq(params[2])) {
        this.error = 'The divider parameter is misconfigured for this oracle, which leads to rates that are order(s) of magnitude wrong.';
        return false;
      } else {
        return true;
      }
    } else {
      this.error = "The Chainlink oracles configured don't match the pair tokens.";
      return false;
    }
  }

}

function lowerEqual(value1, value2) {
  return value1.toLowerCase() === value2.toLowerCase();
}

function getOracle(pair, chainId, tokens) {
  // if (lowerEqual(pair.oracle, CHAINLINK_ORACLE_ADDRESS[chainId])) {
  if (lowerEqual(pair.oracle, "")) {
    return new ChainlinkOracle(pair, chainId, tokens);
  }
}

/***/ }),

/***/ 8464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormattedPriceImpact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_prices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1545);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SEVERITY = {
  0: 'text-green',
  1: 'text-high-emphesis',
  2: 'text-yellow',
  3: 'text-red',
  4: 'text-red'
};
function FormattedPriceImpact({
  priceImpact
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: `text-sm font-bold ${SEVERITY[(0,_functions_prices__WEBPACK_IMPORTED_MODULE_1__/* .warningSeverity */ .oX)(priceImpact)]}`,
    children: priceImpact ? `${priceImpact.multiply(-1).toFixed(2)}%` : '-'
  });
}

/***/ }),

/***/ 7470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6049);
/* harmony import */ var _functions_currency_wrappedCurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9229);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const SwapRoute = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({
  trade
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "flex flex-wrap items-center justify-end",
    children: trade.route.path.map((token, i, path) => {
      const isLastItem = i === path.length - 1;
      const currency = (0,_functions_currency_wrappedCurrency__WEBPACK_IMPORTED_MODULE_2__/* .unwrappedToken */ .B)(token);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "flex space-x-2 flex-end",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-sm font-bold text-high-emphesis",
            children: currency.symbol
          })
        }), isLastItem ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__/* .ChevronRightIcon */ .XCv, {
          width: 12,
          height: 12
        })]
      }, i);
    })
  });
});
SwapRoute.displayName = 'SwapRoute';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwapRoute);

/***/ }),

/***/ 3307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BA": () => (/* binding */ useKashiInfo),
/* harmony export */   "Fp": () => (/* binding */ useKashiPairs),
/* harmony export */   "c0": () => (/* binding */ useKashiPair),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports KashiContext, rpcToObj, KashiProvider */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9247);
/* harmony import */ var _functions_kashi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(834);
/* harmony import */ var _functions_bentobox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4218);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6419);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _entities_Fraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _sushiswap_sushi_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(506);
/* harmony import */ var _sushiswap_sushi_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sushiswap_sushi_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6124);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7398);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_address__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _entities_Oracle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3830);
/* harmony import */ var _functions_rebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2271);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8269);
/* harmony import */ var _hooks_Tokens__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6269);
/* harmony import */ var _state_application_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4663);
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4751);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















var ActionType;

(function (ActionType) {
  ActionType["UPDATE"] = "UPDATE";
  ActionType["SYNC"] = "SYNC";
})(ActionType || (ActionType = {}));

const initialState = {
  info: {
    ethBalance: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    sushiBalance: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    sushiBarBalance: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    xsushiBalance: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    xsushiSupply: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    sushiBarAllowance: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    factories: [],
    ethRate: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    sushiRate: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    btcRate: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    pendingSushi: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    blockTimeStamp: _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE,
    masterContractApproved: []
  },
  pairs: []
};
const KashiContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  state: initialState,
  dispatch: () => null
});

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SYNC:
      return _objectSpread({}, state);

    case ActionType.UPDATE:
      const {
        info,
        pairs
      } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        info,
        pairs
      });

    default:
      return state;
  }
};

async function getPairs(bentoBoxContract, chainId) {
  let logs = [];
  let success = false;
  const masterAddress = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.KASHI_ADDRESS[chainId]; // if (chainId !== ChainId.BSC && chainId !== ChainId.MATIC) {

  logs = await bentoBoxContract.queryFilter(bentoBoxContract.filters.LogDeploy(masterAddress));
  success = true; // }

  if (!success) {
    logs = (await _sushiswap_sushi_data__WEBPACK_IMPORTED_MODULE_7__.bentobox.clones({
      masterAddress,
      chainId
    })).map(clone => {
      return {
        args: {
          masterContract: masterAddress,
          cloneAddress: clone.address,
          data: clone.data
        }
      };
    });
  }

  return logs.map(log => {
    var _log$args, _log$args2, _log$args3;

    const deployParams = _ethersproject_abi__WEBPACK_IMPORTED_MODULE_8__.defaultAbiCoder.decode(['address', 'address', 'address', 'bytes'], (_log$args = log.args) === null || _log$args === void 0 ? void 0 : _log$args.data);
    return {
      masterContract: (_log$args2 = log.args) === null || _log$args2 === void 0 ? void 0 : _log$args2.masterContract,
      address: (_log$args3 = log.args) === null || _log$args3 === void 0 ? void 0 : _log$args3.cloneAddress,
      collateralAddress: deployParams[0],
      assetAddress: deployParams[1],
      oracle: deployParams[2],
      oracleData: deployParams[3]
    };
  });
}

class Tokens extends Array {
  add(address) {
    if (!this[address]) {
      this[address] = {
        address: address
      };
    }

    return this[address];
  }

}

function rpcToObj(rpc_obj, obj) {
  if (rpc_obj instanceof _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__.BigNumber) {
    return rpc_obj;
  }

  if (!obj) {
    obj = {};
  }

  if (typeof rpc_obj === 'object') {
    if (Object.keys(rpc_obj).length && isNaN(Number(Object.keys(rpc_obj)[Object.keys(rpc_obj).length - 1]))) {
      for (const i in rpc_obj) {
        if (isNaN(Number(i))) {
          obj[i] = rpcToObj(rpc_obj[i]);
        }
      }

      return obj;
    }

    return rpc_obj.map(item => rpcToObj(item));
  }

  return rpc_obj;
}
function KashiProvider({
  children
}) {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
  const blockNumber = (0,_state_application_hooks__WEBPACK_IMPORTED_MODULE_14__/* .useBlockNumber */ .Ov)();
  const {
    account,
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_12__/* .useActiveWeb3React */ .a)();
  const wnative = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE_ADDRESS[chainId];
  const currency = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.FLEXUSD_ADDRESS[chainId];
  const boringHelperContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useBoringHelperContract */ .HW)();
  const bentoBoxContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useBentoBoxContract */ .rO)();
  const tokens = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_13__/* .useAllTokens */ .e_)(); // const info = useSingleCallResult(boringHelperContract, 'getUIInfo', [
  //   account,
  //   [],
  //   USDC[chainId].address,
  //   [KASHI_ADDRESS[chainId]],
  // ])?.result?.[0]
  // console.log({ info })

  const updatePairs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    console.log('update pairs');

    if (!account || !chainId || ![
      /*ChainId.MAINNET, ChainId.KOVAN, ChainId.BSC, ChainId.MATIC, ChainId.XDAI, ChainId.ARBITRUM*/
    ].includes(chainId)) {
      return;
    }

    if (boringHelperContract && bentoBoxContract) {
      // // console.log('READY TO RUMBLE')
      const info = rpcToObj(await boringHelperContract.getUIInfo(account, [], currency, [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.KASHI_ADDRESS[chainId]])); // Get the deployed pairs from the logs and decode

      const logPairs = await getPairs(bentoBoxContract, chainId); // console.log({ logPairs })
      // Filter all pairs by supported oracles and verify the oracle setup

      const invalidOracles = [];
      const allPairAddresses = logPairs.filter(pair => {
        const oracle = (0,_entities_Oracle__WEBPACK_IMPORTED_MODULE_10__/* .getOracle */ .uw)(pair, chainId, tokens);

        if (!oracle.valid) {
          // console.log(pair, oracle.valid, oracle.error)
          invalidOracles.push({
            pair,
            error: oracle.error
          });
        }

        return oracle.valid;
      }).map(pair => pair.address);
      console.log('invalidOracles', invalidOracles); // Get full info on all the verified pairs

      const pairs = rpcToObj(await boringHelperContract.pollKashiPairs(account, allPairAddresses)); // Get a list of all tokens in the pairs

      const pairTokens = new Tokens();
      pairTokens.add(currency);
      pairs.forEach((pair, i) => {
        pair.address = allPairAddresses[i];
        pair.collateral = pairTokens.add(pair.collateral);
        pair.asset = pairTokens.add(pair.asset);
      }); // Get balances, bentobox info and allowences for the tokens

      const pairAddresses = Object.values(pairTokens).map(token => token.address);
      const balances = rpcToObj(await boringHelperContract.getBalances(account, pairAddresses));
      const missingTokens = [];
      balances.forEach((balance, i) => {
        if (tokens[balance.token]) {
          Object.assign(pairTokens[balance.token], tokens[balance.token]);
        } else {
          missingTokens.push(balance.token);
        }

        Object.assign(pairTokens[balance.token], balance);
      }); // For any tokens that are not on the defaultTokenList, retrieve name, symbol, decimals, etc.

      if (missingTokens.length) {
        console.log('missing tokens length', missingTokens.length); // TODO
      } // Calculate the USD price for each token


      Object.values(pairTokens).forEach(token => {
        token.symbol = token.address === wnative ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId].symbol : token.tokenInfo.symbol;
        token.usd = (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(token.tokenInfo.decimals).mulDiv(pairTokens[currency].rate, token.rate);
      });
      dispatch({
        type: ActionType.UPDATE,
        payload: {
          info,
          pairs: pairs.filter(pair => pair.asset !== pair.collateral).map((pair, i) => {
            pair.elapsedSeconds = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(Date.now()).div('1000').sub(pair.accrueInfo.lastAccrued); // Interest per year at last accrue, this will apply during the next accrue

            pair.interestPerYear = pair.accrueInfo.interestPerSecond.mul('60').mul('60').mul('24').mul('365'); // The total collateral in the market (stable, doesn't accrue)

            pair.totalCollateralAmount = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)((0,_functions_bentobox__WEBPACK_IMPORTED_MODULE_17__/* .toAmount */ .s)(pair.collateral, pair.totalCollateralShare), pair.collateral); // The total assets unborrowed in the market (stable, doesn't accrue)

            pair.totalAssetAmount = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)((0,_functions_bentobox__WEBPACK_IMPORTED_MODULE_17__/* .toAmount */ .s)(pair.asset, pair.totalAsset.elastic), pair.asset); // The total assets borrowed in the market right now

            pair.currentBorrowAmount = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)((0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .accrue */ .Mu)(pair, pair.totalBorrow.elastic, true), pair.asset); // The total amount of assets, both borrowed and still available right now

            pair.currentAllAssets = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.totalAssetAmount.value.add(pair.currentBorrowAmount.value), pair.asset);
            pair.marketHealth = pair.totalCollateralAmount.value.mulDiv((0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18), (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .maximum */ .gW)(pair.currentExchangeRate, pair.oracleExchangeRate, pair.spotExchangeRate)).mulDiv((0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18), pair.currentBorrowAmount.value);
            pair.currentTotalAsset = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .accrueTotalAssetWithFee */ .zK)(pair);
            pair.currentAllAssetShares = (0,_functions_bentobox__WEBPACK_IMPORTED_MODULE_17__/* .toShare */ .T)(pair.asset, pair.currentAllAssets.value); // Maximum amount of assets available for withdrawal or borrow

            pair.maxAssetAvailable = (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .minimum */ .LT)(pair.totalAsset.elastic.mulDiv(pair.currentAllAssets.value, pair.currentAllAssetShares), (0,_functions_bentobox__WEBPACK_IMPORTED_MODULE_17__/* .toAmount */ .s)(pair.asset, (0,_functions_rebase__WEBPACK_IMPORTED_MODULE_11__/* .toElastic */ .N)(pair.currentTotalAsset, pair.totalAsset.base.sub(1000), false)));
            pair.maxAssetAvailableFraction = pair.maxAssetAvailable.mulDiv(pair.currentTotalAsset.base, pair.currentAllAssets.value); // The percentage of assets that is borrowed out right now

            pair.utilization = (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18).mulDiv(pair.currentBorrowAmount.value, pair.currentAllAssets.value); // Interest per year received by lenders as of now

            pair.supplyAPR = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .takeFee */ .Ym)(pair.interestPerYear.mulDiv(pair.utilization, (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18))); // Interest payable by borrowers per year as of now

            pair.currentInterestPerYear = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .interestAccrue */ .FO)(pair, pair.interestPerYear); // Interest per year received by lenders as of now

            pair.currentSupplyAPR = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .takeFee */ .Ym)(pair.currentInterestPerYear.mulDiv(pair.utilization, (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18))); // The user's amount of collateral (stable, doesn't accrue)

            pair.userCollateralAmount = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)((0,_functions_bentobox__WEBPACK_IMPORTED_MODULE_17__/* .toAmount */ .s)(pair.collateral, pair.userCollateralShare), pair.collateral); // The user's amount of assets (stable, doesn't accrue)

            pair.currentUserAssetAmount = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.userAssetFraction.mulDiv(pair.currentAllAssets.value, pair.totalAsset.base), pair.asset); // The user's amount borrowed right now

            pair.currentUserBorrowAmount = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.userBorrowPart.mulDiv(pair.currentBorrowAmount.value, pair.totalBorrow.base), pair.asset); // The user's amount of assets that are currently lent

            pair.currentUserLentAmount = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.userAssetFraction.mulDiv(pair.currentBorrowAmount.value, pair.totalAsset.base), pair.asset); // Value of protocol fees

            pair.feesEarned = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.accrueInfo.feesEarnedFraction.mulDiv(pair.currentAllAssets.value, pair.totalAsset.base), pair.asset); // The user's maximum borrowable amount based on the collateral provided, using all three oracle values

            pair.maxBorrowable = {
              oracle: pair.userCollateralAmount.value.mulDiv((0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(16).mul('75'), pair.oracleExchangeRate),
              spot: pair.userCollateralAmount.value.mulDiv((0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(16).mul('75'), pair.spotExchangeRate),
              stored: pair.userCollateralAmount.value.mulDiv((0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(16).mul('75'), pair.currentExchangeRate)
            };
            pair.maxBorrowable.minimum = (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .minimum */ .LT)(pair.maxBorrowable.oracle, pair.maxBorrowable.spot, pair.maxBorrowable.stored);
            pair.maxBorrowable.safe = pair.maxBorrowable.minimum.mulDiv('95', '100').sub(pair.currentUserBorrowAmount.value);
            pair.maxBorrowable.possible = (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .minimum */ .LT)(pair.maxBorrowable.safe, pair.maxAssetAvailable);
            pair.safeMaxRemovable = _functions_math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE;
            pair.health = pair.currentUserBorrowAmount.value.mulDiv((0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18), pair.maxBorrowable.minimum);
            pair.netWorth = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .getUSDValue */ .xM)(pair.currentUserAssetAmount.value.sub(pair.currentUserBorrowAmount.value), pair.asset).add((0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .getUSDValue */ .xM)(pair.userCollateralAmount.value, pair.collateral));
            pair.search = pair.asset.tokenInfo.symbol + '/' + pair.collateral.tokenInfo.symbol;
            pair.oracle = (0,_entities_Oracle__WEBPACK_IMPORTED_MODULE_10__/* .getOracle */ .uw)(pair, chainId, tokens);
            pair.interestPerYear = {
              value: pair.interestPerYear,
              string: pair.interestPerYear.toFixed(16)
            };
            pair.supplyAPR = {
              value: pair.supplyAPR,
              string: _entities_Fraction__WEBPACK_IMPORTED_MODULE_6__/* .default.from */ .Z.from(pair.supplyAPR, (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(16)).toString()
            };
            pair.currentSupplyAPR = {
              value: pair.currentSupplyAPR,
              string: _entities_Fraction__WEBPACK_IMPORTED_MODULE_6__/* .default.from */ .Z.from(pair.currentSupplyAPR, (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(16)).toString()
            };
            pair.currentInterestPerYear = {
              value: pair.currentInterestPerYear,
              string: _entities_Fraction__WEBPACK_IMPORTED_MODULE_6__/* .default.from */ .Z.from(pair.currentInterestPerYear, _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(10).pow(16)).toString()
            };
            pair.utilization = {
              value: pair.utilization,
              string: _entities_Fraction__WEBPACK_IMPORTED_MODULE_6__/* .default.from */ .Z.from(pair.utilization, _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(10).pow(16)).toString()
            };
            pair.health = {
              value: pair.health,
              string: _entities_Fraction__WEBPACK_IMPORTED_MODULE_6__/* .default.from */ .Z.from(pair.health, (0,_functions_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(16))
            };
            pair.maxBorrowable = {
              oracle: (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.maxBorrowable.oracle, pair.asset),
              spot: (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.maxBorrowable.spot, pair.asset),
              stored: (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.maxBorrowable.stored, pair.asset),
              minimum: (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.maxBorrowable.minimum, pair.asset),
              safe: (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.maxBorrowable.safe, pair.asset),
              possible: (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.maxBorrowable.possible, pair.asset)
            };
            pair.safeMaxRemovable = (0,_functions_kashi__WEBPACK_IMPORTED_MODULE_3__/* .easyAmount */ .bi)(pair.safeMaxRemovable, pair.collateral);
            return pair;
          })
        }
      });
    }
  }, [account, chainId, boringHelperContract, bentoBoxContract, currency, tokens, wnative]);
  const previousBlockNumber = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)(blockNumber);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    blockNumber !== previousBlockNumber && updatePairs();
  }, [blockNumber, previousBlockNumber, updatePairs]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(KashiContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
}
function useKashiInfo() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(KashiContext);

  if (context === undefined) {
    throw new Error('useKashiInfo must be used within a KashiProvider');
  }

  return context.state.info;
}
function useKashiPairs() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(KashiContext);

  if (context === undefined) {
    throw new Error('useKashiPairs must be used within a KashiProvider');
  }

  return context.state.pairs;
}
function useKashiPair(address) {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(KashiContext);

  if (context === undefined) {
    throw new Error('useKashiPair must be used within a KashiProvider');
  }

  return context.state.pairs.find(pair => {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_9__.getAddress)(pair.address) === (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_9__.getAddress)(address);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KashiProvider);

/***/ }),

/***/ 259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YN": () => (/* reexport */ Borrow),
  "z5": () => (/* reexport */ Deposit),
  "IJ": () => (/* reexport */ Repay),
  "ed": () => (/* reexport */ LendWithdrawAction)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Checkbox/index.tsx
const _excluded = ["color", "set", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const COLOR = {
  pink: 'checked:bg-pink checked:border-transparent focus:ring-pink',
  blue: 'checked:bg-blue checked:border-transparent focus:ring-blue'
};

function Checkbox_Checkbox(_ref) {
  let {
    color,
    set,
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
    type: "checkbox",
    onChange: event => set(event.target.checked),
    className: `appearance-none h-5 w-5 rounded-sm bg-dark-700 border-transparent disabled:bg-dark-1000 disabled:border-dark-800 ${COLOR[color]} ${className}`
  }, rest));
}

/* harmony default export */ const components_Checkbox = (Checkbox_Checkbox);
// EXTERNAL MODULE: ./src/components/QuestionHelper/index.tsx
var QuestionHelper = __webpack_require__(5068);
// EXTERNAL MODULE: ./src/components/Settings/index.tsx + 2 modules
var Settings = __webpack_require__(5990);
// EXTERNAL MODULE: ./src/hooks/useSwapSlippageTollerence.ts
var useSwapSlippageTollerence = __webpack_require__(1381);
;// CONCATENATED MODULE: ./src/features/kashi/Checkbox.tsx







function ExchangeRateCheckBox({
  color,
  pair,
  updateOracle,
  setUpdateOracle,
  desiredDirection
}) {
  const displayUpdateOracle = pair.currentExchangeRate.gt(0) ? updateOracle : true;
  const show = displayUpdateOracle || desiredDirection === 'up' ? pair.oracleExchangeRate.lt(pair.currentExchangeRate) : pair.oracleExchangeRate.gt(pair.currentExchangeRate);
  return show && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center mb-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Checkbox, {
      color: color,
      checked: displayUpdateOracle,
      disabled: pair.currentExchangeRate.isZero(),
      set: setUpdateOracle
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ml-2 mr-1 text-primary",
      children: "Update exchange rate from the oracle"
    }), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
      text: pair.currentExchangeRate.gt(0) ? 'The exchange rate from the oracle is only updated when needed. When the price in Kashi is different from the oracle, this may reduce the amount you can borrow. Updating the exchange rate from the oracle may increase your borrow limit.' : 'The exchange rate has not been updated from the oracle yet in this market. If you borrow, it will be updated.'
    })]
  });
}
function SwapCheckbox({
  title,
  color,
  swap,
  setSwap,
  help,
  trade
}) {
  const allowedSlippage = (0,useSwapSlippageTollerence/* default */.Z)(trade);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center justify-between mb-4",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Checkbox, {
        color: color,
        checked: swap,
        set: setSwap
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ml-2 mr-1 text-primary",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
        text: help
      })]
    }), swap && /*#__PURE__*/jsx_runtime_.jsx(Settings/* default */.Z, {
      placeholderSlippage: allowedSlippage
    })]
  });
}
/* harmony default export */ const kashi_Checkbox = ((/* unused pure expression or super */ null && (Checkbox)));
// EXTERNAL MODULE: ./src/hooks/useApproveCallback.ts + 1 modules
var useApproveCallback = __webpack_require__(9952);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/entities/KashiCooker.ts + 1 modules
var KashiCooker = __webpack_require__(9429);
// EXTERNAL MODULE: ./src/state/application/actions.ts
var actions = __webpack_require__(434);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 21 modules
var useContract = __webpack_require__(6419);
// EXTERNAL MODULE: ./src/state/bentobox/hooks.ts + 1 modules
var hooks = __webpack_require__(6430);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/state/application/hooks.ts
var application_hooks = __webpack_require__(4663);
// EXTERNAL MODULE: ./src/state/transactions/hooks.tsx
var transactions_hooks = __webpack_require__(9123);
// EXTERNAL MODULE: external "@ethersproject/constants"
var constants_ = __webpack_require__(6148);
// EXTERNAL MODULE: external "@ethersproject/bytes"
var bytes_ = __webpack_require__(4103);
;// CONCATENATED MODULE: ./src/hooks/useKashiApproveCallback.ts












let BentoApprovalState;

(function (BentoApprovalState) {
  BentoApprovalState[BentoApprovalState["UNKNOWN"] = 0] = "UNKNOWN";
  BentoApprovalState[BentoApprovalState["NOT_APPROVED"] = 1] = "NOT_APPROVED";
  BentoApprovalState[BentoApprovalState["PENDING"] = 2] = "PENDING";
  BentoApprovalState[BentoApprovalState["FAILED"] = 3] = "FAILED";
  BentoApprovalState[BentoApprovalState["APPROVED"] = 4] = "APPROVED";
})(BentoApprovalState || (BentoApprovalState = {}));

let BentoApproveOutcome;

(function (BentoApproveOutcome) {
  BentoApproveOutcome[BentoApproveOutcome["SUCCESS"] = 0] = "SUCCESS";
  BentoApproveOutcome[BentoApproveOutcome["REJECTED"] = 1] = "REJECTED";
  BentoApproveOutcome[BentoApproveOutcome["FAILED"] = 2] = "FAILED";
  BentoApproveOutcome[BentoApproveOutcome["NOT_READY"] = 3] = "NOT_READY";
})(BentoApproveOutcome || (BentoApproveOutcome = {}));

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
function useKashiApproveCallback() {
  const {
    account,
    library,
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: approveKashiFallback,
    1: setApproveKashiFallback
  } = (0,external_react_.useState)(false);
  const {
    0: kashiPermit,
    1: setKashiPermit
  } = (0,external_react_.useState)(undefined);
  (0,external_react_.useEffect)(() => {
    setKashiPermit(undefined);
  }, [account, chainId]);
  const masterContract = chainId && sdk_.KASHI_ADDRESS[chainId];
  const pendingApproval = (0,application_hooks/* useKashiApprovalPending */.Fw)();
  const currentAllowed = (0,hooks/* useBentoMasterContractAllowed */.B2)(masterContract, account || constants_.AddressZero);
  const addTransaction = (0,transactions_hooks/* useTransactionAdder */.h7)(); // check the current approval status

  const approvalState = (0,external_react_.useMemo)(() => {
    if (!masterContract) return BentoApprovalState.UNKNOWN;
    if (!currentAllowed && pendingApproval) return BentoApprovalState.PENDING;
    return currentAllowed ? BentoApprovalState.APPROVED : BentoApprovalState.NOT_APPROVED;
  }, [masterContract, currentAllowed, pendingApproval]);
  const bentoBoxContract = (0,useContract/* useBentoBoxContract */.rO)();
  const approve = (0,external_react_.useCallback)(async () => {
    if (approvalState !== BentoApprovalState.NOT_APPROVED) {
      console.error('approve was called unnecessarily');
      return {
        outcome: BentoApproveOutcome.NOT_READY
      };
    }

    if (!masterContract) {
      console.error('no token');
      return {
        outcome: BentoApproveOutcome.NOT_READY
      };
    }

    if (!bentoBoxContract) {
      console.error('no bentobox contract');
      return {
        outcome: BentoApproveOutcome.NOT_READY
      };
    }

    if (!account) {
      console.error('no account');
      return {
        outcome: BentoApproveOutcome.NOT_READY
      };
    }

    if (!library) {
      console.error('no library');
      return {
        outcome: BentoApproveOutcome.NOT_READY
      };
    }

    try {
      const signature = await (0,KashiCooker/* signMasterContractApproval */.D)(bentoBoxContract, masterContract, account, library, true, chainId);
      const {
        v,
        r,
        s
      } = (0,bytes_.splitSignature)(signature);
      return {
        outcome: BentoApproveOutcome.SUCCESS,
        permit: {
          account,
          masterContract,
          v,
          r,
          s
        }
      };
    } catch (e) {
      return {
        outcome: e.code === 4001 ? BentoApproveOutcome.REJECTED : BentoApproveOutcome.FAILED
      };
    }
  }, [approvalState, account, library, chainId, bentoBoxContract, masterContract]);

  const onApprove = async function () {
    if (!approveKashiFallback) {
      const result = await approve();

      if (result.outcome === BentoApproveOutcome.SUCCESS) {
        setKashiPermit(result.permit);
      } else if (result.outcome === BentoApproveOutcome.FAILED) {
        setApproveKashiFallback(true);
      }
    } else {
      const tx = await (bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.setMasterContractApproval(account, masterContract, true, 0, constants_.HashZero, constants_.HashZero));
      dispatch((0,actions/* setKashiApprovalPending */.ZD)('Approve Kashi'));
      await tx.wait();
      dispatch((0,actions/* setKashiApprovalPending */.ZD)(''));
    }
  };

  const onCook = async function (pair, execute) {
    const cooker = new KashiCooker/* default */.Z(pair, account, library, chainId);
    let summary;

    if (approvalState === BentoApprovalState.NOT_APPROVED && kashiPermit) {
      cooker.approve(kashiPermit);
      summary = 'Approve Kashi and ' + (await execute(cooker));
    } else {
      summary = await execute(cooker);
    }

    const result = await cooker.cook();

    if (result.success) {
      addTransaction(result.tx, {
        summary
      });
      setKashiPermit(undefined);
      await result.tx.wait();
    }
  };

  return [approvalState, approveKashiFallback, kashiPermit, onApprove, onCook];
}

/* harmony default export */ const hooks_useKashiApproveCallback = (useKashiApproveCallback);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(2650);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(7603);
// EXTERNAL MODULE: ./src/components/Dots/index.tsx
var Dots = __webpack_require__(8561);
// EXTERNAL MODULE: ./src/functions/parse.ts
var parse = __webpack_require__(7208);
// EXTERNAL MODULE: external "@lingui/react"
var react_ = __webpack_require__(2339);
;// CONCATENATED MODULE: ./src/features/kashi/Button.tsx













function KashiApproveButton({
  content,
  color
}) {
  const {
    i18n
  } = (0,react_.useLingui)();
  const [kashiApprovalState, approveKashiFallback, kashiPermit, onApprove, onCook] = hooks_useKashiApproveCallback();
  const showApprove = (kashiApprovalState === BentoApprovalState.NOT_APPROVED || kashiApprovalState === BentoApprovalState.PENDING) && !kashiPermit;
  const showChildren = kashiApprovalState === BentoApprovalState.APPROVED || kashiPermit;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [approveKashiFallback && /*#__PURE__*/jsx_runtime_.jsx(Alert/* default */.Z, {
      message: i18n._(
      /*i18n*/
      i18n._("Something went wrong during signing of the approval. This is expected for hardware wallets, such as Trezor and Ledger. Click again and the fallback method will be used")),
      className: "mb-4"
    }), showApprove && /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
      color: color,
      onClick: onApprove,
      className: "mb-4",
      children: i18n._(
      /*i18n*/
      i18n._("Approve Kashi"))
    }), showChildren && /*#__PURE__*/external_react_default().cloneElement(content(onCook), {
      color
    })]
  });
}
function TokenApproveButton({
  children,
  value,
  token,
  needed,
  color
}) {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const [approvalState, approve] = (0,useApproveCallback/* useApproveCallback */.qL)((0,parse/* tryParseAmount */.e)(value, token), chainId && sdk_.BENTOBOX_ADDRESS[chainId]);
  const showApprove = chainId && token && token.address !== sdk_.WNATIVE_ADDRESS[chainId] && needed && value && (approvalState === useApproveCallback/* ApprovalState.NOT_APPROVED */.UK.NOT_APPROVED || approvalState === useApproveCallback/* ApprovalState.PENDING */.UK.PENDING);
  return showApprove ? /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
    color: color,
    onClick: approve,
    className: "mb-4",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dots/* default */.Z, {
      children: [i18n._(
      /*i18n*/
      i18n._("Approve")), " ", token.symbol]
    })
  }) : /*#__PURE__*/external_react_default().cloneElement(children, {
    color
  });
}
;// CONCATENATED MODULE: ./src/entities/Warnings.ts
function Warnings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Warning {
  constructor(active, message, breaking = false, or) {
    Warnings_defineProperty(this, "active", false);

    Warnings_defineProperty(this, "message", '');

    Warnings_defineProperty(this, "breaking", false);

    Warnings_defineProperty(this, "or", undefined);

    this.active = active;
    this.message = message;
    this.breaking = breaking;
    this.or = or;
  }

}
class Warnings extends Array {
  _add(warning) {
    if (warning.active) {
      this.push(warning);
    } else {
      if (warning.or) {
        this._add(warning.or);
      }
    }
  }

  add(active, message, breaking = false, or) {
    this._add(new Warning(active, message, breaking, or));

    return this;
  }

  addWarning(active, message, or) {
    this._add(new Warning(active, message, false, or));

    return this;
  }

  addError(active, message, or) {
    this._add(new Warning(active, message, true, or));

    return this;
  }

  get broken() {
    return this.some(warning => warning.breaking);
  }

}
// EXTERNAL MODULE: ./src/functions/math.ts
var math = __webpack_require__(9247);
// EXTERNAL MODULE: ./src/functions/prices.ts
var prices = __webpack_require__(1545);
// EXTERNAL MODULE: ./src/state/user/hooks.tsx
var user_hooks = __webpack_require__(181);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9337);
// EXTERNAL MODULE: ./src/components/Input/index.tsx + 3 modules
var Input = __webpack_require__(7898);
// EXTERNAL MODULE: ./src/functions/format.ts
var format = __webpack_require__(8277);
;// CONCATENATED MODULE: ./src/features/kashi/SmartNumberInput.tsx








function SmartNumberInput({
  color = 'blue',
  token,
  value,
  setValue,
  useBentoTitleDirection = 'down',
  useBentoTitle = '',
  useBento,
  setUseBento,
  maxTitle = 'Max',
  max,
  pinMax = false,
  setPinMax,
  showMax = false,
  disabled = false,
  switchDisabled = false
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-between my-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center text-base text-secondary",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: useBentoTitleDirection == 'down' ? /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ArrowDownRight, {
            size: "1rem",
            style: {
              display: 'inline'
            }
          }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ArrowUpRight, {
            size: "1rem",
            style: {
              display: 'inline'
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "mx-2",
          children: useBentoTitle
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
            variant: "outlined",
            size: "xs",
            color: color,
            className: 'disabled:cursor-not-allowed focus:ring focus:ring-' + color,
            onClick: () => {
              setUseBento(!useBento);
            },
            disabled: switchDisabled,
            children: useBento ? 'BentoBox' : 'Wallet'
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-base text-right text-secondary",
        style: {
          display: 'inline',
          cursor: 'pointer'
        },
        children: [maxTitle, " ", (0,format/* formatNumber */.uf)(max.toFixed(token.tokenInfo.decimals))]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative flex items-center w-full mb-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default.Numeric */.Z.Numeric, {
        className: 'w-full p-3 bg-dark-700 rounded disabled:cursor-not-allowed disabled:bg-dark-1000 disabled:ring disabled:ring-dark-800 focus:ring focus:ring-' + color,
        value: value,
        onUserInput: setValue,
        onFocus: () => {
          if (pinMax) {
            setValue('');
          }

          if (setPinMax) {
            setPinMax(false);
          }
        },
        disabled: disabled
      }), showMax && max.gt(0) && /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
        variant: "outlined",
        size: "xs",
        color: color,
        onClick: () => {
          if (setPinMax) {
            setPinMax(true);
          } else {
            setValue(max.toFixed(token.tokenInfo.decimals));
          }
        },
        className: 'absolute right-4 focus:ring focus:ring-' + color,
        children: "MAX"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/features/exchange-v1/swap/FormattedPriceImpact.tsx
var FormattedPriceImpact = __webpack_require__(8464);
// EXTERNAL MODULE: ./src/features/exchange-v1/swap/SwapRoute.tsx
var SwapRoute = __webpack_require__(7470);
;// CONCATENATED MODULE: ./src/features/kashi/TradeReview.tsx










function TradeReview({
  trade,
  allowedSlippage
}) {
  var _ref, _trade$minimumAmountO;

  const {
    i18n
  } = (0,react_.useLingui)();
  const showRoute = Boolean(trade && trade.route.path.length > 2);
  const {
    realizedLPFee,
    priceImpact
  } = (0,external_react_.useMemo)(() => {
    if (!trade) return {
      realizedLPFee: undefined,
      priceImpact: undefined
    };
    const realizedLpFeePercent = (0,prices/* computeRealizedLPFeePercent */.GS)(trade);
    const realizedLPFee = trade.inputAmount.multiply(realizedLpFeePercent);
    const priceImpact = trade.priceImpact.subtract(realizedLpFeePercent);
    return {
      priceImpact,
      realizedLPFee
    };
  }, [trade]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-xl text-high-emphesis",
      children: "Swap Review"
    }), trade ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "py-4 mb-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-lg text-secondary",
          children: [i18n._(
          /*i18n*/
          i18n._("Minimum received")), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
            text: i18n._(
            /*i18n*/
            i18n._("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-lg",
          children: (_ref = `${(_trade$minimumAmountO = trade.minimumAmountOut(allowedSlippage)) === null || _trade$minimumAmountO === void 0 ? void 0 : _trade$minimumAmountO.toSignificant(4)} ${trade.outputAmount.currency.symbol}`) !== null && _ref !== void 0 ? _ref : '-'
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-lg text-secondary",
          children: [i18n._(
          /*i18n*/
          i18n._("Price Impact")), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
            text: i18n._(
            /*i18n*/
            i18n._("The difference between the market price and estimated price due to trade size."))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-lg",
          children: /*#__PURE__*/jsx_runtime_.jsx(FormattedPriceImpact/* default */.Z, {
            priceImpact: priceImpact
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-lg text-secondary",
          children: ["Liquidity Provider Fee", /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
            text: i18n._(
            /*i18n*/
            i18n._("A portion of each trade (0.25%) goes to liquidity providers as a protocol incentive."))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-lg",
          children: realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.symbol}` : '-'
        })]
      }), showRoute && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-lg text-secondary",
          children: [i18n._(
          /*i18n*/
          i18n._("Route")), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
            text: i18n._(
            /*i18n*/
            i18n._("Routing through these tokens resulted in the best price for your trade."))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-lg",
          children: /*#__PURE__*/jsx_runtime_.jsx(SwapRoute/* default */.Z, {
            trade: trade
          })
        })]
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-4 text-lg text-secondary",
      children: i18n._(
      /*i18n*/
      i18n._("No liquidity found to do swap"))
    })]
  });
}

/* harmony default export */ const kashi_TradeReview = (TradeReview);
// EXTERNAL MODULE: ./src/functions/kashi.ts
var kashi = __webpack_require__(834);
;// CONCATENATED MODULE: ./src/entities/TransactionReview.ts


let Direction;

(function (Direction) {
  Direction[Direction["DOWN"] = -1] = "DOWN";
  Direction[Direction["FLAT"] = 0] = "FLAT";
  Direction[Direction["UP"] = 1] = "UP";
})(Direction || (Direction = {}));

class TransactionReview extends Array {
  add(name, from, to, direction) {
    this.push({
      name: name,
      from: from,
      to: to,
      direction: direction
    });
    return this;
  }

  addTokenAmount(name, from, to, token) {
    this.add(name, (0,format/* formatNumber */.uf)(from.toFixed(token.tokenInfo.decimals)) + ' ' + token.tokenInfo.symbol, (0,format/* formatNumber */.uf)(to.toFixed(token.tokenInfo.decimals)) + ' ' + token.tokenInfo.symbol, from.eq(to) ? Direction.FLAT : from.lt(to) ? Direction.UP : Direction.DOWN);
    return this;
  }

  addUSD(name, from, to, token) {
    this.add(name, (0,format/* formatNumber */.uf)((0,kashi/* getUSDString */.Rm)(from, token), true), (0,format/* formatNumber */.uf)((0,kashi/* getUSDString */.Rm)(to, token), true), from.eq(to) ? Direction.FLAT : from.lt(to) ? Direction.UP : Direction.DOWN);
    return this;
  }

  addPercentage(name, from, to) {
    this.add(name, (0,format/* formatPercent */.T3)(from.toFixed(16)), (0,format/* formatPercent */.T3)(to.toFixed(16)), from.eq(to) ? Direction.FLAT : from.lt(to) ? Direction.UP : Direction.DOWN);
    return this;
  }

  addRate(name, from, to, pair) {
    this.add(name, (0,format/* formatNumber */.uf)(from.toFixed(18 + pair.collateral.tokenInfo.decimals - pair.asset.tokenInfo.decimals)), (0,format/* formatNumber */.uf)(to.toFixed(18 + pair.collateral.tokenInfo.decimals - pair.asset.tokenInfo.decimals)), from.eq(to) ? Direction.FLAT : from.lt(to) ? Direction.UP : Direction.DOWN);
    return this;
  }

}
;// CONCATENATED MODULE: ./src/features/kashi/TransactionReview.tsx







function TransactionReviewView({
  transactionReview
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: transactionReview && transactionReview.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "py-4 mb-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-xl text-high-emphesis",
        children: "Transaction Review"
      }), transactionReview.map((line, i) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-lg text-secondary",
            children: [line.name, ":"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-lg",
            children: [line.from, line.direction === Direction.FLAT ? /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ArrowRight, {
              size: "1rem",
              style: {
                display: 'inline',
                marginRight: '6px',
                marginLeft: '6px'
              }
            }) : line.direction === Direction.UP ? /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ArrowUpRight, {
              size: "1rem",
              style: {
                display: 'inline',
                marginRight: '6px',
                marginLeft: '6px'
              }
            }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ArrowDownRight, {
              size: "1rem",
              style: {
                display: 'inline',
                marginRight: '6px',
                marginLeft: '6px'
              }
            }), line.to]
          })]
        }, i);
      })]
    })
  });
}

/* harmony default export */ const kashi_TransactionReview = (TransactionReviewView);
;// CONCATENATED MODULE: ./src/features/kashi/WarningsList.tsx





function WarningsList({
  warnings
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: warnings.map((warning, i) => /*#__PURE__*/jsx_runtime_.jsx(Alert/* default */.Z, {
      type: warning.breaking ? 'error' : 'warning',
      message: warning.message,
      className: "mb-4"
    }, i))
  });
}

/* harmony default export */ const kashi_WarningsList = (WarningsList);
// EXTERNAL MODULE: ./src/hooks/Tokens.ts
var Tokens = __webpack_require__(6269);
// EXTERNAL MODULE: ./src/features/kashi/context/index.tsx
var context = __webpack_require__(3307);
// EXTERNAL MODULE: ./src/hooks/useV2Trades.ts + 1 modules
var useV2Trades = __webpack_require__(5751);
;// CONCATENATED MODULE: ./src/features/kashi/Borrow.tsx























const DEFAULT_BORROW_SLIPPAGE_TOLERANCE = new sdk_.Percent(50, 10000);
function Borrow({
  pair
}) {
  const {
    account,
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const info = (0,context/* useKashiInfo */.BA)(); // State

  const {
    0: useBentoCollateral,
    1: setUseBentoCollateral
  } = (0,external_react_.useState)(pair.collateral.bentoBalance.gt(0));
  const {
    0: useBentoBorrow,
    1: setUseBentoBorrow
  } = (0,external_react_.useState)(true);
  const {
    0: collateralValue,
    1: setCollateralValue
  } = (0,external_react_.useState)('');
  const {
    0: borrowValue,
    1: setBorrowValue
  } = (0,external_react_.useState)('');
  const {
    0: swapBorrowValue,
    1: setSwapBorrowValue
  } = (0,external_react_.useState)('');
  const {
    0: updateOracle,
    1: setUpdateOracle
  } = (0,external_react_.useState)(false);
  const {
    0: swap,
    1: setSwap
  } = (0,external_react_.useState)(false);
  const assetToken = (0,Tokens/* useCurrency */.U8)(pair.asset.address) || undefined;
  const collateralToken = (0,Tokens/* useCurrency */.U8)(pair.collateral.address) || undefined; // Calculated

  const assetNative = sdk_.WNATIVE[chainId || 1].address === pair.collateral.address;
  const collateralBalance = useBentoCollateral ? pair.collateral.bentoBalance : assetNative ? info === null || info === void 0 ? void 0 : info.ethBalance : pair.collateral.balance;
  const displayUpdateOracle = pair.currentExchangeRate.gt(0) ? updateOracle : true; // Swap
  // const [allowedSlippage] = useUserSlippageTolerance(); // 10 = 0.1%

  const allowedSlippage = (0,user_hooks/* useUserSlippageToleranceWithDefault */.eq)(DEFAULT_BORROW_SLIPPAGE_TOLERANCE); // custom from users

  const parsedAmount = (0,parse/* tryParseAmount */.e)(borrowValue, assetToken);
  const foundTrade = (0,useV2Trades/* useV2TradeExactIn */.w)(parsedAmount, collateralToken);
  const {
    realizedLPFee,
    priceImpact
  } = (0,external_react_.useMemo)(() => {
    if (!foundTrade) return {
      realizedLPFee: undefined,
      priceImpact: undefined
    };
    const realizedLpFeePercent = (0,prices/* computeRealizedLPFeePercent */.GS)(foundTrade);
    const realizedLPFee = foundTrade.inputAmount.multiply(realizedLpFeePercent);
    const priceImpact = foundTrade.priceImpact.subtract(realizedLpFeePercent);
    return {
      priceImpact,
      realizedLPFee
    };
  }, [foundTrade]);
  const extraCollateral = swap && foundTrade ? bignumber_.BigNumber.from(foundTrade.minimumAmountOut(allowedSlippage).quotient.toString()) : math/* ZERO */.xE; // const extraCollateral = swap
  //   ? computeSlippageAdjustedAmounts(foundTrade, allowedSlippage)
  //       [Field.OUTPUT]?.toFixed(pair.collateral.tokenInfo.decimals)
  //       .toBigNumber(pair.collateral.tokenInfo.decimals) || ZERO
  //   : ZERO;

  const swapCollateral = collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals);
  const nextUserCollateralValue = pair.userCollateralAmount.value.add(collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals)).add(extraCollateral); // Calculate max borrow

  const nextMaxBorrowableOracle = nextUserCollateralValue.mulDiv((0,math/* e10 */.TB)(16).mul('75'), pair.oracleExchangeRate);
  const nextMaxBorrowableSpot = nextUserCollateralValue.mulDiv((0,math/* e10 */.TB)(16).mul('75'), pair.spotExchangeRate);
  const nextMaxBorrowableStored = nextUserCollateralValue.mulDiv((0,math/* e10 */.TB)(16).mul('75'), displayUpdateOracle ? pair.oracleExchangeRate : pair.currentExchangeRate);
  const nextMaxBorrowMinimum = (0,math/* minimum */.LT)(nextMaxBorrowableOracle, nextMaxBorrowableSpot, nextMaxBorrowableStored);
  const nextMaxBorrowSafe = nextMaxBorrowMinimum.mulDiv('95', '100').sub(pair.currentUserBorrowAmount.value);
  const nextMaxBorrowPossible = (0,math/* maximum */.gW)((0,math/* minimum */.LT)(nextMaxBorrowSafe, pair.maxAssetAvailable), math/* ZERO */.xE);
  const maxBorrow = nextMaxBorrowPossible.toFixed(pair.asset.tokenInfo.decimals);
  const nextBorrowValue = pair.currentUserBorrowAmount.value.add(borrowValue.toBigNumber(pair.asset.tokenInfo.decimals));
  const nextHealth = nextBorrowValue.mulDiv('1000000000000000000', nextMaxBorrowMinimum);
  const collateralValueSet = !collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals).isZero();
  const borrowValueSet = !borrowValue.toBigNumber(pair.asset.tokenInfo.decimals).isZero();
  const trade = swap && borrowValueSet ? foundTrade : undefined;
  const [isExpertMode] = (0,user_hooks/* useExpertModeManager */.DG)(); // const { priceImpactWithoutFee } = computeTradePriceBreakdown(trade);

  const priceImpactSeverity = (0,prices/* warningSeverity */.oX)(priceImpact);
  const borrowAmount = borrowValue.toBigNumber(pair.asset.tokenInfo.decimals);
  const collateralWarnings = new Warnings();
  collateralWarnings.add(collateralBalance === null || collateralBalance === void 0 ? void 0 : collateralBalance.lt(collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals)), `Please make sure your ${useBentoCollateral ? 'BentoBox' : 'wallet'} balance is sufficient to deposit and then try again.`, true);
  const borrowWarnings = new Warnings().add(nextMaxBorrowMinimum.lt(pair.currentUserBorrowAmount.value), 'You have surpassed your borrow limit and may be liquidated at any moment. Repay now or add collateral!', true, new Warning(nextMaxBorrowSafe.lt(0), 'You have surpassed your borrow limit and assets are at a high risk of liquidation.', true, new Warning(borrowValue.length > 0 && borrowAmount.gt(nextMaxBorrowMinimum.sub(pair.currentUserBorrowAmount.value)), "You don't have enough collateral to borrow this amount.", true, new Warning(borrowValue.length > 0 && borrowAmount.gt(nextMaxBorrowSafe), 'You will surpass your borrow limit and assets will be at a high risk of liquidation.', false)))).add(borrowValue.length > 0 && pair.maxAssetAvailable.lt(borrowValue.toBigNumber(pair.asset.tokenInfo.decimals)), 'Not enough liquidity in this pair.', true); // console.log('Oracle Discrepancy', {
  //     name: pair.asset.tokenInfo.symbol + '-' + pair.collateral.tokenInfo.symbol,
  //     borrowValueSet: borrowValueSet,
  //     displayUpdateOracle: displayUpdateOracle,
  //     currentExchangeRate: pair.currentExchangeRate.toFixed(
  //         pair.asset.tokenInfo.decimals
  //     ),
  //     oracleExchangeRate: pair.oracleExchangeRate.toFixed(
  //         pair.asset.tokenInfo.decimals
  //     ),
  //     diff:
  //         pair.currentExchangeRate.toFixed(pair.asset.tokenInfo.decimals) /
  //         pair.oracleExchangeRate.toFixed(pair.asset.tokenInfo.decimals),
  // })

  const transactionReview = new TransactionReview();

  if ((collateralValue || borrowValue) && !collateralWarnings.broken && (!borrowWarnings.broken || !borrowValue)) {
    if (collateralValueSet) {
      transactionReview.addTokenAmount('Collateral', pair.userCollateralAmount.value, nextUserCollateralValue, pair.collateral);
      transactionReview.addUSD('Collateral USD', pair.userCollateralAmount.value, nextUserCollateralValue, pair.collateral);
    }

    if (borrowValueSet) {
      transactionReview.addTokenAmount('Borrowed', pair.currentUserBorrowAmount.value, nextBorrowValue, pair.asset);
      transactionReview.addUSD('Borrowed USD', pair.currentUserBorrowAmount.value, nextBorrowValue, pair.asset);
    }

    if (displayUpdateOracle) {
      transactionReview.addRate('Exchange Rate', pair.currentExchangeRate, pair.oracleExchangeRate, pair);
    }

    transactionReview.addTokenAmount('Borrow Limit', pair.maxBorrowable.safe.value, nextMaxBorrowSafe.sub(borrowValue.toBigNumber(pair.asset.tokenInfo.decimals)), pair.asset);
    transactionReview.addPercentage('Limit Used', pair.health.value, nextHealth);
    transactionReview.addPercentage('Borrow APR', pair.interestPerYear.value, pair.currentInterestPerYear.value);
  }

  let actionName = 'Nothing to do';

  if (collateralValueSet) {
    if (borrowValueSet) {
      actionName = trade ? 'Borrow, swap and add collateral' : 'Add collateral and borrow';
    } else {
      actionName = 'Add collateral';
    }
  } else if (borrowValueSet) {
    actionName = trade ? 'Borrow, swap and add as collateral' : 'Borrow';
  }

  if (swap && priceImpactSeverity > 3 && !isExpertMode) {
    actionName = 'Price Impact High';
  } else if (swap && priceImpactSeverity > 2) {
    actionName = actionName + ' anyway';
  }

  const actionDisabled = collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals).lte(0) && borrowValue.toBigNumber(pair.asset.tokenInfo.decimals).lte(0) || collateralWarnings.broken || borrowValue.length > 0 && borrowWarnings.broken || swap && priceImpactSeverity > 3 && !isExpertMode || pair.userCollateralAmount.value.isZero() && !collateralValueSet; // Handlers

  async function onExecute(cooker) {
    let summary = '';
    /*
    if (borrowValueSet) {
      if (displayUpdateOracle) {
        cooker.updateExchangeRate(true, ZERO, ZERO)
      }
       if (swap && !useBentoCollateral) {
        cooker.bentoDepositCollateral(collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals))
      }
       cooker.borrow(
        borrowValue.toBigNumber(pair.asset.tokenInfo.decimals),
        swap || useBentoBorrow,
        swap ? SUSHISWAP_MULTISWAPPER_ADDRESS[chainId || 1] : ''
      )
    }
    if (borrowValueSet && trade) {
      const path = trade.route.path.map((token) => token.address) || []
      if (path.length > 4) {
        throw 'Path too long'
      }
       console.log('debug', [
        pair.asset.address,
        pair.collateral.address,
        extraCollateral,
        path.length > 2 ? path[1] : AddressZero,
        path.length > 3 ? path[2] : AddressZero,
        account,
        toShare(pair.collateral, collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals)),
        borrowValue.toBigNumber(pair.asset.tokenInfo.decimals),
      ])
       const data = defaultAbiCoder.encode(
        ['address', 'address', 'uint256', 'address', 'address', 'address', 'uint256'],
        [
          pair.asset.address,
          pair.collateral.address,
          extraCollateral,
          path.length > 2 ? path[1] : AddressZero,
          path.length > 3 ? path[2] : AddressZero,
          account,
          toShare(pair.collateral, collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals)),
        ]
      )
       cooker.action(
        SUSHISWAP_MULTISWAPPER_ADDRESS[chainId || 1],
        ZERO,
        hexConcat([hexlify('0x3087d742'), data]),
        false,
        true,
        1
      )
    }
    if (collateralValueSet) {
      cooker.addCollateral(
        swap ? BigNumber.from(-1) : collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals),
        useBentoCollateral || swap
      )
    }
     if (collateralValueSet) {
      if (borrowValueSet) {
        summary = trade ? 'Borrow, swap and add collateral' : 'Add collateral and borrow'
      } else {
        summary = 'Add collateral'
      }
    } else if (borrowValueSet) {
      summary = trade ? 'Borrow, swap and add as collateral' : 'Borrow'
    }
    */

    return summary;
  }

  function onMultiply(multiplier) {
    const multipliedCollateral = swapCollateral.add(swapCollateral.mulDiv(multiplier.toBigNumber(pair.collateral.tokenInfo.decimals), '1'.toBigNumber(pair.collateral.tokenInfo.decimals)));
    const multipliedBorrow = multipliedCollateral.mulDiv((0,math/* e10 */.TB)(16).mul('75'), pair.currentExchangeRate); // console.log({
    //     original: swapCollateral.toFixed(pair.collateral.tokenInfo.decimals),
    //     multiplied: swapCollateral
    //         .add(
    //             swapCollateral.mulDiv(
    //                 multiplier.toBigNumber(pair.collateral.tokenInfo.decimals),
    //                 '1'.toBigNumber(pair.collateral.tokenInfo.decimals)
    //             )
    //         )
    //         .toFixed(pair.collateral.tokenInfo.decimals),
    //     borrow: multipliedBorrow.toFixed(pair.asset.tokenInfo.decimals),
    // })
    // console.log('multipliedBorrow:', multipliedBorrow)

    setBorrowValue(multipliedBorrow.toFixed(pair.asset.tokenInfo.decimals));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-6 mb-4 text-3xl text-high-emphesis",
      children: ["Borrow ", pair.asset.tokenInfo.symbol]
    }), /*#__PURE__*/jsx_runtime_.jsx(SmartNumberInput, {
      color: "pink",
      token: pair.collateral,
      value: collateralValue,
      setValue: setCollateralValue,
      useBentoTitleDirection: "down",
      useBentoTitle: `Add ${pair.collateral.tokenInfo.symbol} collateral from`,
      useBento: useBentoCollateral,
      setUseBento: setUseBentoCollateral,
      maxTitle: "Balance",
      max: collateralBalance,
      showMax: true
    }), /*#__PURE__*/jsx_runtime_.jsx(SmartNumberInput, {
      color: "pink",
      token: pair.asset,
      value: borrowValue,
      setValue: setBorrowValue,
      useBentoTitleDirection: "up",
      useBentoTitle: `Borrow ${pair.asset.tokenInfo.symbol} to`,
      useBento: useBentoBorrow,
      setUseBento: setUseBentoBorrow,
      maxTitle: "Max",
      max: nextMaxBorrowPossible
    }), collateralValueSet && /*#__PURE__*/jsx_runtime_.jsx(SwapCheckbox, {
      trade: trade,
      color: "pink",
      swap: swap,
      setSwap: setSwap,
      title: `Swap borrowed ${pair.asset.tokenInfo.symbol} for ${pair.collateral.tokenInfo.symbol} collateral`,
      help: "Swapping your borrowed tokens for collateral allows for opening long/short positions with leverage in a single transaction."
    }), borrowValueSet && /*#__PURE__*/jsx_runtime_.jsx(ExchangeRateCheckBox, {
      color: "pink",
      pair: pair,
      updateOracle: updateOracle,
      setUpdateOracle: setUpdateOracle,
      desiredDirection: "up"
    }), collateralValueSet && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-4",
        children: ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2.0'].map((multipler, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.ZP, {
          variant: "outlined",
          size: "xs",
          color: "pink",
          onClick: () => {
            onMultiply(multipler);
            setSwap(true);
          },
          className: "mr-4 text-md focus:ring-pink",
          children: [multipler, "x"]
        }, i))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(kashi_WarningsList, {
      warnings: collateralWarnings
    }), /*#__PURE__*/jsx_runtime_.jsx(kashi_WarningsList, {
      warnings: borrowWarnings
    }), swap && trade && /*#__PURE__*/jsx_runtime_.jsx(kashi_TradeReview, {
      trade: trade,
      allowedSlippage: allowedSlippage
    }), (collateralValueSet || borrowValueSet && !pair.userCollateralAmount.value.isZero() || swap && (priceImpactSeverity < 3 || isExpertMode)) && /*#__PURE__*/jsx_runtime_.jsx(kashi_TransactionReview, {
      transactionReview: transactionReview
    }), /*#__PURE__*/jsx_runtime_.jsx(KashiApproveButton, {
      color: "pink",
      content: onCook => /*#__PURE__*/jsx_runtime_.jsx(TokenApproveButton, {
        value: collateralValue,
        token: collateralToken,
        needed: !useBentoCollateral,
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          onClick: () => onCook(pair, onExecute),
          disabled: actionDisabled,
          children: actionName
        })
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/functions/bentobox.ts
var bentobox = __webpack_require__(4218);
;// CONCATENATED MODULE: ./src/features/kashi/Repay.tsx
























const DEFAULT_KASHI_REPAY_SLIPPAGE_TOLERANCE = new sdk_.Percent(5, 100);
function Repay({
  pair
}) {
  const {
    account,
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const info = (0,context/* useKashiInfo */.BA)(); // State

  const {
    0: useBentoRepay,
    1: setUseBentoRepay
  } = (0,external_react_.useState)(pair.asset.bentoBalance.gt(0));
  const {
    0: useBentoRemove,
    1: setUseBentoRemoveCollateral
  } = (0,external_react_.useState)(true);
  const {
    0: repayValue,
    1: setRepayAssetValue
  } = (0,external_react_.useState)('');
  const {
    0: removeValue,
    1: setRemoveCollateralValue
  } = (0,external_react_.useState)('');
  const {
    0: pinRemoveMax,
    1: setPinRemoveMax
  } = (0,external_react_.useState)(false);
  const {
    0: pinRepayMax,
    1: setPinRepayMax
  } = (0,external_react_.useState)(false);
  const {
    0: updateOracle,
    1: setUpdateOracle
  } = (0,external_react_.useState)(false);
  const {
    0: swap,
    1: setSwap
  } = (0,external_react_.useState)(false);
  const assetToken = (0,Tokens/* useCurrency */.U8)(pair.asset.address) || undefined;
  const collateralToken = (0,Tokens/* useCurrency */.U8)(pair.collateral.address) || undefined; // Calculated

  const assetNative = sdk_.WNATIVE[chainId || 1].address === pair.asset.address;
  const balance = useBentoRepay ? (0,bentobox/* toAmount */.s)(pair.asset, pair.asset.bentoBalance) : assetNative ? info === null || info === void 0 ? void 0 : info.ethBalance : pair.asset.balance;
  const displayUpdateOracle = pair.currentExchangeRate.gt(0) ? updateOracle : true;
  const displayRepayValue = pinRepayMax ? (0,math/* minimum */.LT)(pair.currentUserBorrowAmount.value, balance).toFixed(pair.asset.tokenInfo.decimals) : repayValue;
  const nextUserBorrowAmount = pair.currentUserBorrowAmount.value.sub(displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals));
  const nextMinCollateralOracle = nextUserBorrowAmount.mulDiv(pair.oracleExchangeRate, (0,math/* e10 */.TB)(16).mul('75'));
  const nextMinCollateralSpot = nextUserBorrowAmount.mulDiv(pair.spotExchangeRate, (0,math/* e10 */.TB)(16).mul('75'));
  const nextMinCollateralStored = nextUserBorrowAmount.mulDiv(displayUpdateOracle ? pair.oracleExchangeRate : pair.currentExchangeRate, (0,math/* e10 */.TB)(16).mul('75'));
  const nextMinCollateralMinimum = (0,math/* maximum */.gW)(nextMinCollateralOracle, nextMinCollateralSpot, nextMinCollateralStored);
  const nextMaxRemoveCollateral = (0,math/* maximum */.gW)(pair.userCollateralAmount.value.sub(nextMinCollateralMinimum.mul(100).div(95)), math/* ZERO */.xE);
  const maxRemoveCollateral = nextMaxRemoveCollateral.toFixed(pair.collateral.tokenInfo.decimals);
  const displayRemoveValue = pinRemoveMax ? maxRemoveCollateral : removeValue; // Swap
  // const [allowedSlippage] = useUserSlippageTolerance(); // 10 = 0.1%

  const allowedSlippage = (0,user_hooks/* useUserSlippageToleranceWithDefault */.eq)(DEFAULT_KASHI_REPAY_SLIPPAGE_TOLERANCE);
  const parsedAmount = (0,parse/* tryParseAmount */.e)(pair.currentUserBorrowAmount.string, assetToken);
  const trade = (0,useV2Trades/* useV2TradeExactOut */.k)(collateralToken, parsedAmount) || undefined;
  const {
    realizedLPFee,
    priceImpact
  } = (0,external_react_.useMemo)(() => {
    if (!trade) return {
      realizedLPFee: undefined,
      priceImpact: undefined
    };
    const realizedLpFeePercent = (0,prices/* computeRealizedLPFeePercent */.GS)(trade);
    const realizedLPFee = trade.inputAmount.multiply(realizedLpFeePercent);
    const priceImpact = trade.priceImpact.subtract(realizedLpFeePercent);
    return {
      priceImpact,
      realizedLPFee
    };
  }, [trade]); // const maxAmountIn = swap
  //   ? computeSlippageAdjustedAmounts(foundTrade, allowedSlippage)
  //       [Field.INPUT]?.toFixed(pair.collateral.tokenInfo.decimals)
  //       .toBigNumber(pair.collateral.tokenInfo.decimals) || ZERO
  //   : ZERO;

  const maxAmountIn = swap && trade ? trade.maximumAmountIn(allowedSlippage).toFixed(pair.collateral.tokenInfo.decimals).toBigNumber(pair.collateral.tokenInfo.decimals) : math/* ZERO */.xE; // const nextUserCollateralValue = pair.userCollateralAmount.value.add(collateralValue.toBigNumber(pair.collateral.tokenInfo.decimals)).add(extraCollateral)

  const nextUserCollateralAmount = pair.userCollateralAmount.value.sub(displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals));
  const nextMaxBorrowableOracle = nextUserCollateralAmount.mulDiv((0,math/* e10 */.TB)(16).mul('75'), pair.oracleExchangeRate);
  const nextMaxBorrowableSpot = nextUserCollateralAmount.mulDiv((0,math/* e10 */.TB)(16).mul('75'), pair.spotExchangeRate);
  const nextMaxBorrowableStored = nextUserCollateralAmount.mulDiv((0,math/* e10 */.TB)(16).mul('75'), displayUpdateOracle ? pair.oracleExchangeRate : pair.currentExchangeRate);
  const nextMaxBorrowMinimum = (0,math/* minimum */.LT)(nextMaxBorrowableOracle, nextMaxBorrowableSpot, nextMaxBorrowableStored);
  const nextMaxBorrowSafe = nextMaxBorrowMinimum.mulDiv('95', '100').sub(pair.currentUserBorrowAmount.value);
  const nextMaxBorrowPossible = (0,math/* maximum */.gW)((0,math/* minimum */.LT)(nextMaxBorrowSafe, pair.maxAssetAvailable), math/* ZERO */.xE);
  const nextHealth = pair.currentUserBorrowAmount.value.sub(displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals)).mulDiv(bignumber_.BigNumber.from('1000000000000000000'), nextMaxBorrowMinimum);
  const transactionReview = new TransactionReview();

  if (displayRepayValue || displayRemoveValue) {
    transactionReview.addTokenAmount('Borrow Limit', pair.maxBorrowable.safe.value, nextMaxBorrowSafe.add(displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals)), pair.asset);
    transactionReview.addPercentage('Health', pair.health.value, nextHealth);
  }

  const warnings = new Warnings().addError(assetNative && !useBentoRepay && pinRepayMax, `You cannot MAX repay ${pair.asset.tokenInfo.symbol} directly from your wallet. Please deposit your ${pair.asset.tokenInfo.symbol} into the BentoBox first, then repay. Because your debt is slowly accrueing interest we can't predict how much it will be once your transaction gets mined.`).addError(displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals).gt(pair.userCollateralAmount.value), 'You have insufficient collateral. Please enter a smaller amount or repay more.').addError(displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals).gt(pair.currentUserBorrowAmount.value), "You can't repay more than you owe. To fully repay, please click the 'max' button.", new Warning(balance === null || balance === void 0 ? void 0 : balance.lt(displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals)), `Please make sure your ${useBentoRepay ? 'BentoBox' : 'wallet'} balance is sufficient to repay and then try again.`, true)).addError(displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals).gt((0,math/* maximum */.gW)(pair.userCollateralAmount.value.sub(nextMinCollateralMinimum), math/* ZERO */.xE)), 'Removing this much collateral would put you into insolvency.', new Warning(displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals).gt(nextMaxRemoveCollateral), 'Removing this much collateral would put you very close to insolvency.'));
  const removeValueSet = !displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals).isZero() || pinRemoveMax && pair.userCollateralShare.gt(math/* ZERO */.xE);
  const repayValueSet = !displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals).isZero(); // const trade = swap ? foundTrade : undefined;
  // const trade = swap && removeValueSet ? foundTrade : undefined

  const [isExpertMode] = (0,user_hooks/* useExpertModeManager */.DG)(); // const { priceImpactWithoutFee } = computeTradePriceBreakdown(trade);

  const priceImpactSeverity = (0,prices/* warningSeverity */.oX)(priceImpact);
  let actionName = 'Nothing to do';

  if (removeValueSet) {
    if (repayValueSet) {
      actionName = 'Repay and remove collateral';
    } else {
      actionName = 'Remove collateral';
    }
  } else if (repayValueSet) {
    actionName = 'Repay';
  } else if (swap) {
    actionName = 'Automatic repay';
  } // const actionDisabled = false


  const actionDisabled = !swap && !trade && displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals).lte(0) && displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals).lte(0) && (!pinRemoveMax || pair.userCollateralShare.isZero()) || warnings.some(warning => warning.breaking);

  function resetRepayState() {
    setPinRepayMax(false);
    setPinRemoveMax(false);
    setRemoveCollateralValue('');
    setRepayAssetValue('');
  } // Handlers


  async function onExecute(cooker) {
    let summary = '';
    /*
    if (swap && trade) {
      const share = toShare(pair.collateral, pair.userCollateralAmount.value)
       cooker.removeCollateral(pair.userCollateralShare, true)
      cooker.bentoTransferCollateral(pair.userCollateralShare, SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS[chainId || 1])
      cooker.repayShare(pair.userBorrowPart)
       const path = trade.route.path.map((token) => token.address) || []
       console.log('debug', [
        pair.collateral.address,
        pair.asset.address,
        maxAmountIn,
        path.length > 2 ? path[1] : AddressZero,
        path.length > 3 ? path[2] : AddressZero,
        account,
        pair.userCollateralShare,
      ])
       const data = defaultAbiCoder.encode(
        ['address', 'address', 'uint256', 'address', 'address', 'address', 'uint256'],
        [
          pair.collateral.address,
          pair.asset.address,
          maxAmountIn,
          path.length > 2 ? path[1] : AddressZero,
          path.length > 3 ? path[2] : AddressZero,
          account,
          pair.userCollateralShare,
        ]
      )
       cooker.action(
        SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS[chainId || 1],
        ZERO,
        hexConcat([hexlify('0x3087d742'), data]),
        true,
        false,
        1
      )
       cooker.repayPart(pair.userBorrowPart, true)
       if (!useBentoRemove) {
        cooker.bentoWithdrawCollateral(ZERO, BigNumber.from(-1))
      }
       summary = 'Repay All'
    } else {
      if (pinRepayMax && pair.userBorrowPart.gt(0) && balance.gte(pair.currentUserBorrowAmount.value)) {
        cooker.repayPart(pair.userBorrowPart, useBentoRepay)
        summary = 'Repay Max'
      } else if (displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals).gt(0)) {
        cooker.repay(displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals), useBentoRepay)
        summary = 'Repay'
      }
      if (
        displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals).gt(0) ||
        (pinRemoveMax && pair.userCollateralShare.gt(0))
      ) {
        const share =
          pinRemoveMax &&
          (nextUserBorrowAmount.isZero() ||
            (pinRepayMax && pair.userBorrowPart.gt(0) && balance.gte(pair.currentUserBorrowAmount.value)))
            ? pair.userCollateralShare
            : toShare(pair.collateral, displayRemoveValue.toBigNumber(pair.collateral.tokenInfo.decimals))
         cooker.removeCollateral(share, useBentoRemove)
        summary += (summary ? ' and ' : '') + 'Remove Collateral'
      }
    }
     resetRepayState()
     */

    return summary;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-6 mb-4 text-3xl text-high-emphesis",
      children: ["Repay ", pair.asset.tokenInfo.symbol]
    }), /*#__PURE__*/jsx_runtime_.jsx(SmartNumberInput, {
      color: "pink",
      token: pair.asset,
      value: displayRepayValue,
      setValue: setRepayAssetValue,
      useBentoTitleDirection: "down",
      useBentoTitle: `Repay ${pair.asset.tokenInfo.symbol} from`,
      useBento: useBentoRepay,
      setUseBento: setUseBentoRepay,
      maxTitle: "Balance",
      max: balance,
      pinMax: pinRepayMax,
      setPinMax: setPinRepayMax,
      showMax: !swap && !pair.currentUserBorrowAmount.value.isZero(),
      disabled: swap || pair.currentUserBorrowAmount.value.isZero(),
      switchDisabled: swap || pair.currentUserBorrowAmount.value.isZero()
    }), /*#__PURE__*/jsx_runtime_.jsx(SmartNumberInput, {
      color: "pink",
      token: pair.collateral,
      value: displayRemoveValue,
      setValue: setRemoveCollateralValue,
      useBentoTitleDirection: "up",
      useBentoTitle: `Remove ${pair.collateral.tokenInfo.symbol} to`,
      useBento: useBentoRemove,
      setUseBento: setUseBentoRemoveCollateral,
      max: nextMaxRemoveCollateral,
      pinMax: pinRemoveMax,
      setPinMax: setPinRemoveMax,
      showMax: pair.currentUserBorrowAmount.value.eq(displayRepayValue.toBigNumber(pair.asset.tokenInfo.decimals)) || pair.currentUserBorrowAmount.value.isZero(),
      disabled: swap || pair.userCollateralAmount.value.isZero(),
      switchDisabled: pair.userCollateralAmount.value.isZero()
    }), !pair.currentUserBorrowAmount.value.isZero() && /*#__PURE__*/jsx_runtime_.jsx(SwapCheckbox, {
      trade: trade,
      color: "pink",
      swap: swap,
      setSwap: value => {
        resetRepayState();
        setSwap(value);
      },
      title: `Swap ${pair.collateral.tokenInfo.symbol} collateral for ${pair.asset.tokenInfo.symbol} and repay`,
      help: "Swapping your removed collateral tokens and repay allows for reducing your borrow by using your collateral and/or to unwind leveraged positions."
    }), removeValueSet && /*#__PURE__*/jsx_runtime_.jsx(ExchangeRateCheckBox, {
      color: "pink",
      pair: pair,
      updateOracle: updateOracle,
      setUpdateOracle: setUpdateOracle,
      desiredDirection: "up"
    }), /*#__PURE__*/jsx_runtime_.jsx(kashi_WarningsList, {
      warnings: warnings
    }), swap && trade && /*#__PURE__*/jsx_runtime_.jsx(kashi_TradeReview, {
      trade: trade,
      allowedSlippage: allowedSlippage
    }), swap && (priceImpactSeverity < 3 || isExpertMode) && /*#__PURE__*/jsx_runtime_.jsx(kashi_TransactionReview, {
      transactionReview: transactionReview
    }), /*#__PURE__*/jsx_runtime_.jsx(KashiApproveButton, {
      color: "pink",
      content: onCook => /*#__PURE__*/jsx_runtime_.jsx(TokenApproveButton, {
        value: displayRepayValue,
        token: assetToken,
        needed: !useBentoRepay,
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          onClick: () => onCook(pair, onExecute),
          disabled: actionDisabled,
          children: actionName
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/features/kashi/Deposit.tsx


















function Deposit({
  pair
}) {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const assetToken = (0,Tokens/* useCurrency */.U8)(pair.asset.address) || undefined;
  const {
    i18n
  } = (0,react_.useLingui)(); // State

  const {
    0: useBento,
    1: setUseBento
  } = (0,external_react_.useState)(pair.asset.bentoBalance.gt(0));
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('');
  const info = (0,context/* useKashiInfo */.BA)(); // Calculated

  const assetNative = sdk_.WNATIVE[chainId || 1].address === pair.asset.address;
  const balance = useBento ? pair.asset.bentoBalance : assetNative ? info === null || info === void 0 ? void 0 : info.ethBalance : pair.asset.balance;
  const max = useBento ? pair.asset.bentoBalance : assetNative ? info === null || info === void 0 ? void 0 : info.ethBalance : pair.asset.balance;
  const warnings = new Warnings();
  warnings.add(balance === null || balance === void 0 ? void 0 : balance.lt(value.toBigNumber(pair.asset.tokenInfo.decimals)), i18n._(
  /*i18n*/
  i18n._("Please make sure your {0} balance is sufficient to deposit and then try again.", {
    0: useBento ? 'BentoBox' : 'wallet'
  })), true);
  const transactionReview = new TransactionReview();

  if (value && !warnings.broken) {
    const amount = value.toBigNumber(pair.asset.tokenInfo.decimals);
    const newUserAssetAmount = pair.currentUserAssetAmount.value.add(amount);
    transactionReview.addTokenAmount(i18n._(
    /*i18n*/
    i18n._("Balance")), pair.currentUserAssetAmount.value, newUserAssetAmount, pair.asset);
    transactionReview.addUSD(i18n._(
    /*i18n*/
    i18n._("Balance USD")), pair.currentUserAssetAmount.value, newUserAssetAmount, pair.asset);
    const newUtilization = (0,math/* e10 */.TB)(18).mulDiv(pair.currentBorrowAmount.value, pair.currentAllAssets.value.add(amount));
    transactionReview.addPercentage(i18n._(
    /*i18n*/
    i18n._("Borrowed")), pair.utilization.value, newUtilization);

    if (pair.currentExchangeRate.isZero()) {
      transactionReview.add('Exchange Rate', (0,format/* formatNumber */.uf)(pair.currentExchangeRate.toFixed(18 + pair.collateral.tokenInfo.decimals - pair.asset.tokenInfo.decimals)), (0,format/* formatNumber */.uf)(pair.oracleExchangeRate.toFixed(18 + pair.collateral.tokenInfo.decimals - pair.asset.tokenInfo.decimals)), Direction.UP);
    }

    transactionReview.addPercentage(i18n._(
    /*i18n*/
    i18n._("Supply APR")), pair.supplyAPR.value, pair.currentSupplyAPR.value);
  } // Handlers


  async function onExecute(cooker) {
    if (pair.currentExchangeRate.isZero()) {
      cooker.updateExchangeRate(false, math/* ZERO */.xE, math/* ZERO */.xE);
    }

    cooker.addAsset(value.toBigNumber(pair.asset.tokenInfo.decimals), useBento);
    return `${i18n._(
    /*i18n*/
    i18n._("Deposit"))} ${pair.asset.tokenInfo.symbol}`;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-6 text-3xl text-high-emphesis",
      children: ["Deposit ", pair.asset.tokenInfo.symbol]
    }), /*#__PURE__*/jsx_runtime_.jsx(SmartNumberInput, {
      color: "blue",
      token: pair.asset,
      value: value,
      setValue: setValue,
      useBentoTitleDirection: "down",
      useBentoTitle: "from",
      useBento: useBento,
      setUseBento: setUseBento,
      maxTitle: "Balance",
      max: max,
      showMax: true
    }), /*#__PURE__*/jsx_runtime_.jsx(kashi_WarningsList, {
      warnings: warnings
    }), /*#__PURE__*/jsx_runtime_.jsx(kashi_TransactionReview, {
      transactionReview: transactionReview
    }), /*#__PURE__*/jsx_runtime_.jsx(KashiApproveButton, {
      color: "blue",
      content: onCook => /*#__PURE__*/jsx_runtime_.jsx(TokenApproveButton, {
        value: value,
        token: assetToken,
        needed: !useBento,
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          onClick: () => onCook(pair, onExecute),
          disabled: value.toBigNumber(pair.asset.tokenInfo.decimals).lte(0) || warnings.broken,
          children: i18n._(
          /*i18n*/
          i18n._("Deposit"))
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/features/kashi/Withdraw.tsx
















function LendWithdrawAction({
  pair
}) {
  const {
    account
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const pendingApprovalMessage = (0,application_hooks/* useKashiApprovalPending */.Fw)();
  const {
    i18n
  } = (0,react_.useLingui)(); // State

  const {
    0: useBento,
    1: setUseBento
  } = (0,external_react_.useState)(pair.asset.bentoBalance.gt(0));
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('');
  const {
    0: pinMax,
    1: setPinMax
  } = (0,external_react_.useState)(false);
  const [kashiApprovalState, approveKashiFallback, kashiPermit, onApprove, onCook] = hooks_useKashiApproveCallback(); // Calculated

  const max = (0,math/* minimum */.LT)(pair.maxAssetAvailable, pair.currentUserAssetAmount.value);
  const displayValue = pinMax ? max.toFixed(pair.asset.tokenInfo.decimals) : value;
  const fraction = pinMax ? (0,math/* minimum */.LT)(pair.userAssetFraction, pair.maxAssetAvailableFraction) : value.toBigNumber(pair.asset.tokenInfo.decimals).mulDiv(pair.currentTotalAsset.base, pair.currentAllAssets.value);
  const warnings = new Warnings().add(pair.currentUserAssetAmount.value.lt(value.toBigNumber(pair.asset.tokenInfo.decimals)), i18n._(
  /*i18n*/
  i18n._("Please make sure your {0} balance is sufficient to withdraw and then try again.", {
    0: useBento ? 'BentoBox' : 'wallet'
  })), true).add(pair.maxAssetAvailableFraction.lt(fraction), i18n._(
  /*i18n*/
  i18n._("The isn't enough liquidity available at the moment to withdraw this amount. Please try withdrawing less or later.")), true);
  const transactionReview = new TransactionReview();

  if (displayValue && !warnings.broken) {
    const amount = displayValue.toBigNumber(pair.asset.tokenInfo.decimals);
    const newUserAssetAmount = pair.currentUserAssetAmount.value.sub(amount);
    transactionReview.addTokenAmount(i18n._(
    /*i18n*/
    i18n._("Balance")), pair.currentUserAssetAmount.value, newUserAssetAmount, pair.asset);
    transactionReview.addUSD(i18n._(
    /*i18n*/
    i18n._("Balance USD")), pair.currentUserAssetAmount.value, newUserAssetAmount, pair.asset);
    const newUtilization = (0,math/* e10 */.TB)(18).mulDiv(pair.currentBorrowAmount.value, pair.currentAllAssets.value.sub(amount));
    transactionReview.addPercentage(i18n._(
    /*i18n*/
    i18n._("Borrowed")), pair.utilization.value, newUtilization);
  } // Handlers


  async function onExecute(cooker) {
    const fraction = pinMax ? (0,math/* minimum */.LT)(pair.userAssetFraction, pair.maxAssetAvailableFraction) : value.toBigNumber(pair.asset.tokenInfo.decimals).mulDiv(pair.currentTotalAsset.base, pair.currentAllAssets.value);
    cooker.removeAsset(fraction, useBento);
    return `${i18n._(
    /*i18n*/
    i18n._("Withdraw"))} ${pair.asset.tokenInfo.symbol}`;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-6 text-3xl text-high-emphesis",
      children: [i18n._(
      /*i18n*/
      i18n._("Withdraw")), " ", pair.asset.tokenInfo.symbol]
    }), /*#__PURE__*/jsx_runtime_.jsx(SmartNumberInput, {
      color: "blue",
      token: pair.asset,
      value: displayValue,
      setValue: setValue,
      useBentoTitleDirection: "up",
      useBentoTitle: "to",
      useBento: useBento,
      setUseBento: setUseBento,
      max: max,
      pinMax: pinMax,
      setPinMax: setPinMax,
      showMax: true
    }), /*#__PURE__*/jsx_runtime_.jsx(kashi_WarningsList, {
      warnings: warnings
    }), /*#__PURE__*/jsx_runtime_.jsx(kashi_TransactionReview, {
      transactionReview: transactionReview
    }), /*#__PURE__*/jsx_runtime_.jsx(KashiApproveButton, {
      color: "blue",
      content: onCook => /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
        onClick: () => onCook(pair, onExecute),
        disabled: displayValue.toBigNumber(pair.asset.tokenInfo.decimals).lte(0) || warnings.broken,
        children: i18n._(
        /*i18n*/
        i18n._("Withdraw"))
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/features/kashi/index.ts





/***/ }),

/***/ 3801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ cloudinaryLoader)
/* harmony export */ });
const normalize = src => {
  return src[0] === '/' ? src.slice(1) : src;
};

const cloudinaryLoader = ({
  src,
  width,
  style
}) => {
  return `https://res.cloudinary.com/dnz2bkszg/image/fetch/f_auto,w_${width}/${normalize(src)}`;
};

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

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useOnClickOutside)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnClickOutside(node, handler) {
  const handlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handlerRef.current = handler;
  }, [handler]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = e => {
      var _node$current$contain, _node$current;

      if ((_node$current$contain = (_node$current = node.current) === null || _node$current === void 0 ? void 0 : _node$current.contains(e.target)) !== null && _node$current$contain !== void 0 ? _node$current$contain : false) {
        return;
      }

      if (handlerRef.current) handlerRef.current();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [node]);
}

/***/ }),

/***/ 1381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useSwapSlippageTolerance)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(181);



const V2_SWAP_DEFAULT_SLIPPAGE = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(50, 10000); // .50%

const ONE_TENTHS_PERCENT = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(10, 10000); // .10%

function useSwapSlippageTolerance(trade) {
  const defaultSlippageTolerance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!trade) return ONE_TENTHS_PERCENT;
    return V2_SWAP_DEFAULT_SLIPPAGE;
  }, [trade]);
  return (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useUserSlippageToleranceWithDefault */ .eq)(defaultSlippageTolerance);
}

/***/ }),

/***/ 1734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./src/components/Container/index.tsx
var Container = __webpack_require__(3981);
// EXTERNAL MODULE: ./src/components/Footer/index.tsx + 1 modules
var Footer = __webpack_require__(5253);
// EXTERNAL MODULE: ./src/components/Header/index.tsx + 12 modules
var Header = __webpack_require__(1451);
// EXTERNAL MODULE: ./src/components/Image/index.tsx
var Image = __webpack_require__(5579);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Main/index.tsx
var Main = __webpack_require__(6659);
// EXTERNAL MODULE: ./src/components/NavLink/index.tsx
var NavLink = __webpack_require__(3233);
// EXTERNAL MODULE: ./src/components/Popups/index.tsx + 2 modules
var Popups = __webpack_require__(1522);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./public/kashi-logo.png
/* harmony default export */ const kashi_logo = ({"src":"/_next/static/image/public/kashi-logo.62f59b2e457064a93dda7212b580fa26.png","height":465,"width":1819,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEWO0+uQ1OyS2/Cf4vVjweBzx+Ryw99ft9KVoV0CAAAACHRSTlNVTZ+HJT1BY+aNFMcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVAiZY2BmYmFhZGRkZWBmYmdlYGBgAwABngAtcL+7IAAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/layouts/Kashi/index.tsx













function Layout({
  left = undefined,
  children = undefined,
  right = undefined
}) {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "z-0 flex flex-col items-start w-full h-screen",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Main/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        className: "px-4 py-4 md:py-8 lg:py-12",
        maxWidth: "7xl",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `mb-2 grid grid-cols-12 gap-4`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex justify-center col-span-12 xl:col-span-3 lg:justify-start",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/borrow",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "flex justify-center xl:justify-start xl:mx-8",
                children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                  src: kashi_logo,
                  alt: "Kashi",
                  height: 64,
                  width: 250
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex items-end col-span-12 xl:col-span-9",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
              className: "flex items-center justify-between w-full",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  href: "/lend",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: 'pl-4 pr-2 sm:pl-8 sm:pr-4 flex items-center font-medium ' + (router.pathname.startsWith('/lend') ? 'text-high-emphesis' : 'text-secondary hover:text-primary'),
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-base whitespace-nowrap",
                      children: "Lend"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  href: "/borrow",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: 'px-2 sm:px-4 flex items-center font-medium ' + (router.pathname.startsWith('/borrow') ? 'text-high-emphesis' : 'text-secondary hover:text-primary'),
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-base whitespace-nowrap",
                      children: "Borrow"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  href: "/kashi/create",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: 'px-2 sm:px-4 flex items-center font-medium ' + (router.pathname.startsWith('/kashi/create') ? 'text-high-emphesis' : 'text-secondary hover:text-primary'),
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-base whitespace-nowrap",
                      children: "Create"
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex pr-2 sm:pr-4",
                children: /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  href: "/balances",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `px-2 sm:px-4 flex justify-end items-center font-medium ${router.pathname === '/balances' ? 'text-high-emphesis' : 'text-secondary hover:text-primary'}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "mr-2 fill-current",
                      width: 24,
                      height: 24,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 355.24 205.5",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M350.43,97c-8.7-20-28.9-43.7-56.7-63.5S237.13,2,215.43.2c-1.2-.1-2.4-.2-3.5-.2H76.53c-13,0-23,4-28.4,11.7L4.63,72.3c-6.3,8.8-6.1,21.7.2,36.2,8.7,20,29,43.7,56.7,63.5s56.7,31.5,78.4,33.3c1.7.1,3.3.2,4.9.2h135.5c12.1-.4,21.5-4.3,26.8-11.6l43.4-60.6C356.93,124.3,356.73,111.5,350.43,97ZM209.93,7.4c1.6,0,3.2.1,4.9.2,20.7,1.7,48.2,13,74.6,31.9,4.3,3.1,11.8,9.7,15.7,12.9H188.43l-45-45ZM41.06,40.25c0-1.12-.15-2.24-.15-3.36a1.67,1.67,0,0,1,1.58-1.74,1.62,1.62,0,0,1,1.74,1.61,23.39,23.39,0,0,0,.15,3.11A1.52,1.52,0,0,1,43,41.62,1.68,1.68,0,0,1,41.06,40.25Zm53.15,71.67a1.74,1.74,0,0,1-2.37.13C72.54,95.5,48.5,72,42.33,47a1.77,1.77,0,0,1,1.27-2,1.83,1.83,0,0,1,2,1.24c6,24.39,29.58,47.16,48.41,63.46A1.7,1.7,0,0,1,94.21,111.92ZM173,146.77a1.5,1.5,0,0,1-1.89,1.24c-2.22-.37-4.27-1-6.49-1.49a1.58,1.58,0,0,1-1.11-2.12,1.52,1.52,0,0,1,2.06-1.12l6.17,1.49A1.7,1.7,0,0,1,173,146.77ZM200.51,150c-6.49,1.12-14.4.75-22.94-.62a1.63,1.63,0,0,1-1.42-1.87,1.68,1.68,0,0,1,1.9-1.37c8.22,1.37,15.66,1.75,22,.63a1.67,1.67,0,0,1,1.9,1.36A1.62,1.62,0,0,1,200.51,150Zm-11.78-12.6c-1.6,0-3.1-.1-4.7-.2-20.8-1.7-48.3-13-74.7-31.9s-45.8-41.4-54.2-60.5c-4.9-11.3-5.9-21.4-1.2-28.4l.3-.4c4.1-5.8,11.6-8.4,21.2-8.6h57.5l130,130Zm155.8-8.7-.3.4c-4.2,5.6-11.7,8.1-21.1,8.2h-49.7l-77.9-77.9h117.7c15.8,14.6,24.4,26.8,30.3,40.5C348.63,111.5,349.63,121.8,344.53,128.7Z"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-base whitespace-nowrap",
                      children: "BentoBox"
                    })]
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `grid grid-cols-12 gap-4 min-h-1/2`,
          children: [left && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `hidden xl:block xl:col-span-3`,
            style: {
              maxHeight: '40rem'
            },
            children: left
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `col-span-12 ${right ? 'lg:col-span-8 xl:col-span-6' : 'xl:col-span-9'}`,
            style: {
              minHeight: '40rem'
            },
            children: children
          }), right && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-span-12 lg:col-span-4 xl:col-span-3",
            style: {
              maxHeight: '40rem'
            },
            children: right
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Popups/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
}

/***/ }),

/***/ 6430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "id": () => (/* binding */ useBentoBalances),
  "B2": () => (/* binding */ useBentoMasterContractAllowed)
});

// UNUSED EXPORTS: useBentoBalance

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 21 modules
var hooks_useContract = __webpack_require__(6419);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
// EXTERNAL MODULE: ./src/constants/abis/erc20.json
var erc20 = __webpack_require__(9638);
// EXTERNAL MODULE: ./src/functions/math.ts
var math = __webpack_require__(9247);
// EXTERNAL MODULE: ./src/functions/kashi.ts
var kashi = __webpack_require__(834);
// EXTERNAL MODULE: external "@ethersproject/address"
var address_ = __webpack_require__(7398);
// EXTERNAL MODULE: ./src/functions/bentobox.ts
var bentobox = __webpack_require__(4218);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var hooks_useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: ./src/hooks/Tokens.ts
var Tokens = __webpack_require__(6269);
// EXTERNAL MODULE: ./src/state/multicall/hooks.ts
var hooks = __webpack_require__(879);
// EXTERNAL MODULE: ./src/state/transactions/hooks.tsx
var transactions_hooks = __webpack_require__(9123);
;// CONCATENATED MODULE: ./src/hooks/useTransactionStatus.ts



// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a, b) {
  return b.addedTime - a.addedTime;
}

const useTransactionStatus_useTransactionStatus = () => {
  const {
    0: pendingTXStatus,
    1: setPendingTXStatus
  } = useState(false); // Determine if change in transactions, if so, run query again

  const allTransactions = useAllTransactions();
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);
  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash);
  const hasPendingTransactions = !!pending.length;
  useEffect(() => {
    setPendingTXStatus(hasPendingTransactions);
  }, [hasPendingTransactions]);
  return pendingTXStatus;
};

/* harmony default export */ const hooks_useTransactionStatus = ((/* unused pure expression or super */ null && (useTransactionStatus_useTransactionStatus)));
;// CONCATENATED MODULE: ./src/state/bentobox/hooks.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function useBentoBalances() {
  const {
    chainId,
    account
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  const boringHelperContract = (0,hooks_useContract/* useBoringHelperContract */.HW)();
  const tokens = (0,Tokens/* useAllTokens */.e_)();
  const weth = sdk_.WNATIVE_ADDRESS[chainId];
  const tokenAddresses = Object.keys(tokens);
  const balanceData = (0,hooks/* useSingleCallResult */.Wk)(boringHelperContract, 'getBalances', [account, tokenAddresses]);
  const uiData = (0,hooks/* useSingleCallResult */.Wk)(boringHelperContract, 'getUIInfo', [account, [], sdk_.FLEXUSD_ADDRESS[chainId], [sdk_.KASHI_ADDRESS[chainId]]]); // IERC20 token = addresses[i];
  // balances[i].totalSupply = token.totalSupply();
  // balances[i].token = token;
  // balances[i].balance = token.balanceOf(who);
  // balances[i].bentoAllowance = token.allowance(who, address(bentoBox));
  // balances[i].nonce = token.nonces(who);
  // balances[i].bentoBalance = bentoBox.balanceOf(token, who);
  // (balances[i].bentoAmount, balances[i].bentoShare) = bentoBox.totals(token);
  // balances[i].rate = getETHRate(token);

  return (0,external_react_.useMemo)(() => {
    if (uiData.loading || balanceData.loading || uiData.error || balanceData.error || !uiData.result || !balanceData.result) return [];
    return tokenAddresses.map((key, i) => {
      const token = tokens[key];
      const usd = (0,math/* e10 */.TB)(token.decimals).mulDiv(uiData.result[0].ethRate, balanceData.result[0][i].rate);

      const full = _objectSpread(_objectSpread(_objectSpread({}, token), balanceData.result[0][i]), {}, {
        usd
      });

      return _objectSpread(_objectSpread({}, token), {}, {
        usd,
        address: token.address,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        balance: token.address === weth ? uiData.result[0].ethBalance : balanceData.result[0][i].balance,
        bentoBalance: balanceData.result[0][i].bentoBalance,
        wallet: (0,kashi/* easyAmount */.bi)(token.address === weth ? uiData.result[0].ethBalance : balanceData.result[0][i].balance, full),
        bento: (0,kashi/* easyAmount */.bi)((0,bentobox/* toAmount */.s)(full, balanceData.result[0][i].bentoBalance), full)
      });
    }).filter(token => token.balance.gt('0') || token.bentoBalance.gt('0'));
  }, [uiData.loading, uiData.error, uiData.result, balanceData.loading, balanceData.error, balanceData.result, tokenAddresses, tokens, weth]);
}
function useBentoBalance(tokenAddress) {
  const {
    account
  } = useActiveWeb3React();
  const boringHelperContract = useBoringHelperContract();
  const bentoBoxContract = useBentoBoxContract();
  const tokenAddressChecksum = getAddress(tokenAddress);
  const tokenContract = useContract(tokenAddressChecksum ? tokenAddressChecksum : undefined, ERC20_ABI);
  const currentTransactionStatus = useTransactionStatus();
  const {
    0: balance,
    1: setBalance
  } = useState(); // const balanceData = useSingleCallResult(boringHelperContract, 'getBalances', [account, tokenAddresses])

  const fetchBentoBalance = useCallback(async () => {
    const balances = await (boringHelperContract === null || boringHelperContract === void 0 ? void 0 : boringHelperContract.getBalances(account, [tokenAddressChecksum]));
    const decimals = await (tokenContract === null || tokenContract === void 0 ? void 0 : tokenContract.decimals());
    const amount = BigNumber.from(balances[0].bentoShare).isZero() ? BigNumber.from(0) : BigNumber.from(balances[0].bentoBalance).mul(BigNumber.from(balances[0].bentoAmount)).div(BigNumber.from(balances[0].bentoShare));
    setBalance({
      value: amount,
      decimals: decimals
    });
  }, [account, tokenAddressChecksum, tokenContract, boringHelperContract]);
  useEffect(() => {
    if (account && bentoBoxContract && boringHelperContract && tokenContract) {
      fetchBentoBalance();
    }
  }, [account, bentoBoxContract, currentTransactionStatus, fetchBentoBalance, tokenContract, boringHelperContract]);
  return balance;
}
function useBentoMasterContractAllowed(masterContract, user) {
  const contract = (0,hooks_useContract/* useBentoBoxContract */.rO)();
  const inputs = (0,external_react_.useMemo)(() => [masterContract, user], [masterContract, user]);
  const allowed = (0,hooks/* useSingleCallResult */.Wk)(contract, 'masterContractApproved', inputs).result;
  return (0,external_react_.useMemo)(() => allowed ? allowed[0] : undefined, [allowed]);
}

/***/ })

};
;
//# sourceMappingURL=5948.js.map