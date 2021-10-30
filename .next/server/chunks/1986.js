"use strict";
exports.id = 1986;
exports.ids = [1986];
exports.modules = {

/***/ 1986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L0": () => (/* binding */ Feature),
/* harmony export */   "vR": () => (/* binding */ featureEnabled),
/* harmony export */   "x$": () => (/* binding */ chainsWithFeature)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);

let Feature;

(function (Feature) {
  Feature["AMM"] = "AMM";
  Feature["AMM_V2"] = "AMM V2";
  Feature["LIQUIDITY_MINING"] = "Liquidity Mining";
  Feature["BENTOBOX"] = "BentoBox";
  Feature["KASHI"] = "Kashi";
  Feature["MISO"] = "MISO";
  Feature["ANALYTICS"] = "Analytics";
  Feature["MIGRATE"] = "Migrate";
  Feature["STAKING"] = "Staking";
})(Feature || (Feature = {}));

const features = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: [Feature.AMM, Feature.LIQUIDITY_MINING, // Feature.MIGRATE,
  // Feature.ANALYTICS,
  Feature.STAKING],
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: [Feature.AMM, Feature.LIQUIDITY_MINING,
  /*
  Feature.MIGRATE,
  Feature.ANALYTICS,
  */
  Feature.STAKING]
};
function featureEnabled(feature, chainId) {
  var _features$chainId;

  return features === null || features === void 0 ? void 0 : (_features$chainId = features[chainId]) === null || _features$chainId === void 0 ? void 0 : _features$chainId.includes(feature);
}
function chainsWithFeature(feature) {
  return Object.keys(features).filter(chain => features[chain].includes(feature)).map(chain => _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId[chain]);
}

/***/ })

};
;
//# sourceMappingURL=1986.js.map