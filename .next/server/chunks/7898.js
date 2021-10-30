"use strict";
exports.id = 7898;
exports.ids = [7898];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=7898.js.map