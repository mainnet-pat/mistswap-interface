"use strict";
exports.id = 1208;
exports.ids = [1208];
exports.modules = {

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getCurrencyLogoUrls */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5914);
/* harmony import */ var _state_lists_wrappedTokenInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2045);
/* harmony import */ var _hooks_useHttpLocations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3278);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["currency", "size", "style", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BLOCKCHAIN = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: 'smartbch',
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: 'amber'
};

function getCurrencySymbol(currency) {
  if (currency.symbol === 'WBCH') {
    return 'bch';
  }

  return currency.symbol.toLowerCase();
}

function getCurrencyLogoUrls(currency) {
  const urls = [];
  urls.push(`https://raw.githubusercontent.com/mistswapdex/icons/master/token/${getCurrencySymbol(currency)}.jpg`);

  if (currency.chainId in BLOCKCHAIN) {
    urls.push(`https://raw.githubusercontent.com/mistswapdex/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${currency.address}/logo.png`);
    urls.push(`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${currency.address}/logo.png`);
  }

  return urls;
}
const BitcoinCashLogo = 'https://raw.githubusercontent.com/mistswapdex/icons/master/token/bch.jpg';
const LOGO = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: BitcoinCashLogo,
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: BitcoinCashLogo
};
const unknown = 'https://raw.githubusercontent.com/mistswapdex/icons/master/token/unknown.png';

const CurrencyLogo = _ref => {
  let {
    currency,
    size = '24px',
    style,
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const uriLocations = (0,_hooks_useHttpLocations__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(currency instanceof _state_lists_wrappedTokenInfo__WEBPACK_IMPORTED_MODULE_3__/* .WrappedTokenInfo */ .D ? currency.logoURI || currency.tokenInfo.logoURI : undefined);
  const srcs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!currency) {
      return [unknown];
    }

    if (currency.isNative || currency.equals(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[currency.chainId])) {
      return [LOGO[currency.chainId], unknown];
    }

    if (currency.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)];

      if (currency instanceof _state_lists_wrappedTokenInfo__WEBPACK_IMPORTED_MODULE_3__/* .WrappedTokenInfo */ .D) {
        return [...uriLocations, ...defaultUrls, unknown];
      }

      return defaultUrls;
    }
  }, [currency, uriLocations]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({
    srcs: srcs,
    width: size,
    height: size,
    alt: currency === null || currency === void 0 ? void 0 : currency.symbol,
    className: className
  }, rest));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyLogo);

/***/ }),

/***/ 5914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5579);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["srcs", "width", "height", "style", "alt", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const BAD_SRCS = {};

/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */
const Logo = _ref => {
  let {
    srcs,
    width,
    height,
    style,
    alt = '',
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    1: refresh
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const src = srcs.find(src => !BAD_SRCS[src]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "rounded",
    style: _objectSpread({
      width,
      height
    }, style),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread({
      src: src || 'https://raw.githubusercontent.com/mistswapdex/icons/master/token/unknown.png',
      loader: () => src,
      onError: () => {
        if (src) BAD_SRCS[src] = true;
        refresh(i => i + 1);
      },
      width: width,
      height: height,
      alt: alt,
      layout: "fixed",
      className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)('rounded', className)
    }, rest))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ 3278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useHttpLocations)
});

// EXTERNAL MODULE: ./src/functions/convert/index.ts + 3 modules
var convert = __webpack_require__(7025);
// EXTERNAL MODULE: ./src/functions/ens.ts
var functions_ens = __webpack_require__(1302);
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 21 modules
var useContract = __webpack_require__(6419);
// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: external "@ethersproject/hash"
var hash_ = __webpack_require__(1101);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/state/multicall/hooks.ts
var hooks = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/hooks/useENSContentHash.ts





/**
 * Does a lookup for an ENS name to find its contenthash.
 */

function useENSContentHash(ensName) {
  var _resolverAddressResul, _contenthash$result$, _contenthash$result;

  const ensNodeArgument = (0,external_react_.useMemo)(() => {
    if (!ensName) return [undefined];

    try {
      return ensName ? [(0,hash_.namehash)(ensName)] : [undefined];
    } catch (error) {
      return [undefined];
    }
  }, [ensName]);
  const registrarContract = (0,useContract/* useENSRegistrarContract */.zb)(false);
  const resolverAddressResult = (0,hooks/* useSingleCallResult */.Wk)(registrarContract, 'resolver', ensNodeArgument);
  const resolverAddress = (_resolverAddressResul = resolverAddressResult.result) === null || _resolverAddressResul === void 0 ? void 0 : _resolverAddressResul[0];
  const resolverContract = (0,useContract/* useENSResolverContract */.uU)(resolverAddress && (0,functions/* isZero */.Fr)(resolverAddress) ? undefined : resolverAddress, false);
  const contenthash = (0,hooks/* useSingleCallResult */.Wk)(resolverContract, 'contenthash', ensNodeArgument);
  return {
    contenthash: (_contenthash$result$ = (_contenthash$result = contenthash.result) === null || _contenthash$result === void 0 ? void 0 : _contenthash$result[0]) !== null && _contenthash$result$ !== void 0 ? _contenthash$result$ : null,
    loading: resolverAddressResult.loading || contenthash.loading
  };
}
;// CONCATENATED MODULE: ./src/hooks/useHttpLocations.ts




function useHttpLocations(uri) {
  const ens = (0,external_react_.useMemo)(() => uri ? (0,functions_ens/* parseENSAddress */.y)(uri) : undefined, [uri]);
  const resolvedContentHash = useENSContentHash(ens === null || ens === void 0 ? void 0 : ens.ensName);
  return (0,external_react_.useMemo)(() => {
    if (ens) {
      return resolvedContentHash.contenthash ? (0,convert/* uriToHttp */.ie)((0,convert/* contenthashToUri */.il)(resolvedContentHash.contenthash)) : [];
    } else {
      return uri ? (0,convert/* uriToHttp */.ie)(uri) : [];
    }
  }, [ens, resolvedContentHash.contenthash, uri]);
}

/***/ })

};
;
//# sourceMappingURL=1208.js.map