"use strict";
exports.id = 7816;
exports.ids = [7816];
exports.modules = {

/***/ 451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // modified from https://usehooks.com/useDebounce/

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

/***/ }),

/***/ 7816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useENSName)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7398);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_address__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1101);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_hash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6419);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7735);
/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(879);







/**
 * Does a reverse lookup for an address to find its ENS name.
 * Note this is not the same as looking up an ENS name to find an address.
 */

function useENSName(address) {
  var _resolverAddress$resu, _name$result$, _name$result;

  const debouncedAddress = (0,_useDebounce__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(address, 200);
  const ensNodeArgument = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    if (!debouncedAddress || !(0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_0__.isAddress)(debouncedAddress)) return [undefined];

    try {
      return debouncedAddress ? [(0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_1__.namehash)(`${debouncedAddress.toLowerCase().substr(2)}.addr.reverse`)] : [undefined];
    } catch (error) {
      return [undefined];
    }
  }, [debouncedAddress]);
  const registrarContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useENSRegistrarContract */ .zb)(false);
  const resolverAddress = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSingleCallResult */ .Wk)(registrarContract, 'resolver', ensNodeArgument);
  const resolverAddressResult = (_resolverAddress$resu = resolverAddress.result) === null || _resolverAddress$resu === void 0 ? void 0 : _resolverAddress$resu[0];
  const resolverContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useENSResolverContract */ .uU)(resolverAddressResult && !(0,_functions__WEBPACK_IMPORTED_MODULE_3__/* .isZero */ .Fr)(resolverAddressResult) ? resolverAddressResult : undefined, false);
  const name = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSingleCallResult */ .Wk)(resolverContract, 'name', ensNodeArgument);
  const changed = debouncedAddress !== address;
  return {
    ENSName: changed ? null : (_name$result$ = (_name$result = name.result) === null || _name$result === void 0 ? void 0 : _name$result[0]) !== null && _name$result$ !== void 0 ? _name$result$ : null,
    loading: changed || resolverAddress.loading || name.loading
  };
}

/***/ })

};
;
//# sourceMappingURL=7816.js.map