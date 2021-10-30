"use strict";
exports.id = 6197;
exports.ids = [6197];
exports.modules = {

/***/ 6197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6148);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7735);
/* harmony import */ var _functions_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2556);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Fraction {
  static convert(sdk) {
    return new Fraction(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(sdk.numerator.toString()), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(sdk.denominator.toString()));
  }

  static from(numerator, denominator) {
    return new Fraction(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(numerator), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(denominator));
  }

  static parse(value) {
    return value === '' ? Fraction.NAN : (0,_functions_validate__WEBPACK_IMPORTED_MODULE_3__/* .isEmptyValue */ .O2)(value) ? Fraction.ZERO : new Fraction((0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .parseBalance */ .am)(value, 18), Fraction.BASE);
  }

  constructor(numerator, denominator) {
    _defineProperty(this, "numerator", void 0);

    _defineProperty(this, "denominator", void 0);

    this.numerator = numerator;
    this.denominator = denominator;
  }

  isZero() {
    return !this.isNaN() && this.numerator.isZero();
  }

  isNaN() {
    return this.denominator.isZero();
  }

  eq(fraction) {
    return this.numerator.mul(fraction.denominator).div(fraction.numerator).eq(this.denominator);
  }

  gt(fraction) {
    return this.numerator.mul(fraction.denominator).div(fraction.numerator).gt(this.denominator);
  }

  lt(fraction) {
    return this.numerator.mul(fraction.denominator).div(fraction.numerator).lt(this.denominator);
  }

  toString(maxFractions = 8) {
    if (this.isNaN()) return '';
    if (this.isZero()) return '0';
    let str = (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .formatBalance */ .az)(this.numerator.mul(Fraction.BASE).div(this.denominator), 18, maxFractions);
    if (str.endsWith('.0')) str = str.substring(0, str.length - 2);
    return str;
  }

  apply(value) {
    return this.denominator.isZero() ? _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero : this.numerator.mul(value).div(this.denominator);
  }

}

_defineProperty(Fraction, "BASE", _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(10).pow(18));

_defineProperty(Fraction, "NAN", new Fraction(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero, _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero));

_defineProperty(Fraction, "ZERO", new Fraction(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.Zero, _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.One));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fraction);

/***/ })

};
;
//# sourceMappingURL=6197.js.map