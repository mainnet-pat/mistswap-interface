"use strict";
exports.id = 5857;
exports.ids = [5857];
exports.modules = {

/***/ 5857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lM": () => (/* binding */ BASES_TO_CHECK_TRADES_AGAINST),
/* harmony export */   "ck": () => (/* binding */ ADDITIONAL_BASES),
/* harmony export */   "IP": () => (/* binding */ CUSTOM_BASES),
/* harmony export */   "gP": () => (/* binding */ COMMON_BASES),
/* harmony export */   "xu": () => (/* binding */ BASES_TO_TRACK_LIQUIDITY_FOR),
/* harmony export */   "Q8": () => (/* binding */ PINNED_PAIRS)
/* harmony export */ });
/* harmony import */ var _config_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9575);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // a list of tokens by chain


// List of all mirror's assets addresses.
// Last pulled from : https://whitelist.mirror.finance/eth/tokenlists.json
// TODO: Generate this programmatically ?
const MIRROR_ADDITIONAL_BASES = {}; // TODO: SDK should have two maps, WETH map and WNATIVE map.

const WRAPPED_NATIVE_ONLY = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.WNATIVE[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]],
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]: [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.WNATIVE[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]]
}; // used to construct intermediary pairs for trading

const BASES_TO_CHECK_TRADES_AGAINST = _objectSpread(_objectSpread({}, WRAPPED_NATIVE_ONLY), {}, {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: [...WRAPPED_NATIVE_ONLY[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH], _config_tokens__WEBPACK_IMPORTED_MODULE_0__/* .FLEXUSD */ .G7],
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]: [...WRAPPED_NATIVE_ONLY[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]]
});
const ADDITIONAL_BASES = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: _objectSpread({}, MIRROR_ADDITIONAL_BASES)
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */

const CUSTOM_BASES = {};
/**
 * Shows up in the currency select for swap and add liquidity
 */

const COMMON_BASES = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: [...WRAPPED_NATIVE_ONLY[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH], _config_tokens__WEBPACK_IMPORTED_MODULE_0__/* .FLEXUSD */ .G7, _config_tokens__WEBPACK_IMPORTED_MODULE_0__/* .MIST */ .yK[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]],
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]: [...WRAPPED_NATIVE_ONLY[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER], _config_tokens__WEBPACK_IMPORTED_MODULE_0__/* .MIST */ .yK[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]]
}; // used to construct the list of all pairs we consider by default in the frontend

const BASES_TO_TRACK_LIQUIDITY_FOR = _objectSpread(_objectSpread({}, WRAPPED_NATIVE_ONLY), {}, {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: [...WRAPPED_NATIVE_ONLY[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH], _config_tokens__WEBPACK_IMPORTED_MODULE_0__/* .FLEXUSD */ .G7],
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]: [...WRAPPED_NATIVE_ONLY[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]]
});
const PINNED_PAIRS = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: [[_config_tokens__WEBPACK_IMPORTED_MODULE_0__/* .MIST */ .yK[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH], _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.WNATIVE[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]]],
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]: [[_config_tokens__WEBPACK_IMPORTED_MODULE_0__/* .MIST */ .yK[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER], _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.WNATIVE[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH_AMBER]]]
};

/***/ })

};
;
//# sourceMappingURL=5857.js.map