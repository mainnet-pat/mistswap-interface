exports.id = 1796;
exports.ids = [1796];
exports.modules = {

/***/ 7228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2858:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1506:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 4575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 3913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9754:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(9489);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 3884:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 521:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 6479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(7316);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 7316:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(8).default;

var assertThisInitialized = __webpack_require__(1506);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9489:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 3038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(2858);

var iterableToArrayLimit = __webpack_require__(3884);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableRest = __webpack_require__(521);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ag": () => (/* binding */ esm_i18n)
});

// UNUSED EXPORTS: I18n, formats, setupI18n

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(2205);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8585);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9754);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(3038);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(6479);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
;// CONCATENATED MODULE: ./node_modules/@lingui/core/esm/core.production.min.js
var i=function(e){return"string"==typeof e},s=function(e){return"function"==typeof e},u=new Map,c=new Map;function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(n){if(i(n)&&(n=new Date(n)),r){var a=v(e,t),o=c.get(a);if(o)return o.format(n);var l=new Intl.DateTimeFormat(e,t);return c.set(a,l),l.format(n)}var s=new Intl.DateTimeFormat(e,t);return s.format(n)}}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(n){if(r){var a=v(e,t),o=u.get(a);if(o)return o.format(n);var l=new Intl.NumberFormat(e,t);return u.set(a,l),l.format(n)}var i=new Intl.NumberFormat(e,t);return i.format(n)}}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Array.isArray(e)?e.sort().join("-"):e;return"".concat(r,"-").concat(JSON.stringify(t))}var m=Object.freeze({__proto__:null,date:f,number:h});function g(e){var t=e.locale,r=e.locales,n=e.values,a=e.formats,o=e.localeData,u=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{plurals:void 0},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t=t||e;var a=r.plurals,o=function(e){return i(e)?n[e]||{style:e}:e},u=function(e,r){return function(n){var a=s(r)?r(n):r,o=Array.isArray(a)?a:[a],l=h(t)(e);return o.map((function(e){return i(e)?e.replace("#",l):e}))}};return a||console.error("Plurals for locale ".concat(e," aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback.")),{plural:function(e,t){var r=t.offset,n=void 0===r?0:r,o=objectWithoutProperties_default()(t,["offset"]),i=o[e]||o[null==a?void 0:a(e-n)]||o.other;return u(e-n,i)},selectordinal:function(e,t){var r=t.offset,n=void 0===r?0:r,o=objectWithoutProperties_default()(t,["offset"]),i=o[e]||o[null==a?void 0:a(e-n,!0)]||o.other;return u(e-n,i)},select:function(e,t){return t[e]||t.other},number:function(e,r){return h(t,o(r))(e)},date:function(e,r){return f(t,o(r))(e)},undefined:function(e){return e}}}(t,r,o,a);return function e(t,r,a){var o=n[t],l=u[r](o,a),i=s(l)?l(e):l;return Array.isArray(i)?i.join(""):i}}function d(e,t,r,n){return function(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=g({locale:t,locales:r,localeData:n,formats:l,values:a}),u=function e(t){return Array.isArray(t)?t.reduce((function(t,r){if(i(r))return t+r;var n=slicedToArray_default()(r,3),a=n[0],l=n[1],u=n[2],c={};null==u||i(u)?c=u:Object.keys(u).forEach((function(t){c[t]=e(u[t])}));var f=s(a,l,c);return null==f?t:t+f}),""):t},c=u(e);return i(c)&&/\\u[a-fA-F0-9]{4}/g.test(c)?JSON.parse('"'.concat(c.trim(),'"')):i(c)?c.trim():c}}var p=function(){function r(){classCallCheck_default()(this,r),this._events={}}return createClass_default()(r,[{key:"on",value:function(e,t){var r=this;return this._hasEvent(e)||(this._events[e]=[]),this._events[e].push(t),function(){return r.removeListener(e,t)}}},{key:"removeListener",value:function(e,t){if(this._hasEvent(e)){var r=this._events[e].indexOf(t);~r&&this._events[e].splice(r,1)}}},{key:"emit",value:function(e){for(var t=this,r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];this._hasEvent(e)&&this._events[e].map((function(e){return e.apply(t,n)}))}},{key:"_hasEvent",value:function(e){return Array.isArray(this._events[e])}}]),r}();function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=getPrototypeOf_default()(e);if(t){var l=getPrototypeOf_default()(this).constructor;r=Reflect.construct(o,arguments,l)}else r=o.apply(this,arguments);return possibleConstructorReturn_default()(this,r)}}var _=function(n){inherits_default()(o,n);var a=y(o);function o(t){var r;return classCallCheck_default()(this,o),r=a.call(this),r._messages={},r._localeData={},null!=t.missing&&(r._missing=t.missing),null!=t.messages&&r.load(t.messages),null!=t.localeData&&r.loadLocaleData(t.localeData),null==t.locale&&null==t.locales||r.activate(t.locale,t.locales),r}return createClass_default()(o,[{key:"_loadLocaleData",value:function(e,t){null==this._localeData[e]?this._localeData[e]=t:Object.assign(this._localeData[e],t)}},{key:"loadLocaleData",value:function(e,t){var r=this;null!=t?this._loadLocaleData(e,t):Object.keys(e).forEach((function(t){return r._loadLocaleData(t,e[t])})),this.emit("change")}},{key:"_load",value:function(e,t){null==this._messages[e]?this._messages[e]=t:Object.assign(this._messages[e],t)}},{key:"load",value:function(e,t){var r=this;null!=t?this._load(e,t):Object.keys(e).forEach((function(t){return r._load(t,e[t])})),this.emit("change")}},{key:"activate",value:function(e,t){this._locale=e,this._locales=t,this.emit("change")}},{key:"_",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.message,a=r.formats;i(e)||(t=e.values||t,n=e.message,e=e.id);var o=this.messages[e]||n||e,l=this._missing;return l&&!this.messages[e]?s(l)?l(this.locale,e):l:(this.messages[e]||this.emit("missing",{id:e,locale:this._locale}),i(o)&&/\\u[a-fA-F0-9]{4}/g.test(o)?JSON.parse('"'.concat(o,'"')):i(o)?o:d(o,this.locale,this.locales,this.localeData)(t,a))}},{key:"date",value:function(e,t){return f(this.locales||this.locale,t)(e)}},{key:"number",value:function(e,t){return h(this.locales||this.locale,t)(e)}},{key:"locale",get:function(){return this._locale}},{key:"locales",get:function(){return this._locales}},{key:"messages",get:function(){var e;return null!==(e=this._messages[this._locale])&&void 0!==e?e:{}}},{key:"localeData",get:function(){var e;return null!==(e=this._localeData[this._locale])&&void 0!==e?e:{}}}]),o}(p);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new _(e)}var D=b();
//# sourceMappingURL=core.production.min.js.map

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: external "messageformat-parser"
var external_messageformat_parser_ = __webpack_require__(9379);
;// CONCATENATED MODULE: ./node_modules/@lingui/core/esm/core.development.js










var isString = function isString(s) {
  return typeof s === "string";
};
var isFunction = function isFunction(f) {
  return typeof f === "function";
};

/** Memoized cache */

var numberFormats = new Map();
var dateFormats = new Map();
function date(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (isString(value)) value = new Date(value);

    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = dateFormats.get(key);

      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }

      var _formatter = new Intl.DateTimeFormat(locales, format);

      dateFormats.set(key, _formatter);
      return _formatter.format(value);
    }

    var formatter = new Intl.DateTimeFormat(locales, format);
    return formatter.format(value);
  };
}
function number(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = numberFormats.get(key);

      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }

      var _formatter2 = new Intl.NumberFormat(locales, format);

      numberFormats.set(key, _formatter2);
      return _formatter2.format(value);
    }

    var formatter = new Intl.NumberFormat(locales, format);
    return formatter.format(value);
  };
}
/** Memoize helpers */

function cacheKey(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var localeKey = Array.isArray(locales) ? locales.sort().join('-') : locales;
  return "".concat(localeKey, "-").concat(JSON.stringify(options));
}

var formats = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date,
  number: number
});

var defaultFormats = function defaultFormats(locale, locales) {
  var localeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    plurals: undefined
  };
  var formats = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  locales = locales || locale;
  var plurals = localeData.plurals;

  var style = function style(format) {
    return isString(format) ? formats[format] || {
      style: format
    } : format;
  };

  var replaceOctothorpe = function replaceOctothorpe(value, message) {
    return function (ctx) {
      var msg = isFunction(message) ? message(ctx) : message;
      var norm = Array.isArray(msg) ? msg : [msg];

      var valueStr = number(locales)(value);

      return norm.map(function (m) {
        return isString(m) ? m.replace("#", valueStr) : m;
      });
    };
  };

  if (!plurals) {
    console.error("Plurals for locale ".concat(locale, " aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback."));
  }

  return {
    plural: function plural(value, _ref) {
      var _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          rules = objectWithoutProperties_default()(_ref, ["offset"]);

      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    selectordinal: function selectordinal(value, _ref2) {
      var _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          rules = objectWithoutProperties_default()(_ref2, ["offset"]);

      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset, true)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    select: function select(value, rules) {
      return rules[value] || rules.other;
    },
    number: function number$1(value, format) {
      return number(locales, style(format))(value);
    },
    date: function date$1(value, format) {
      return date(locales, style(format))(value);
    },
    undefined: function undefined$1(value) {
      return value;
    }
  };
}; // Params -> CTX

/**
 * Creates a context object, which formats ICU MessageFormat arguments based on
 * argument type.
 *
 * @param locale     - Locale of message
 * @param locales      - Locales to be used when formatting the numbers or dates
 * @param values       - Parameters for variable interpolation
 * @param localeData - Locale data (e.g: plurals)
 * @param formats - Custom format styles
 * @returns {function(string, string, any)}
 */


function context(_ref3) {
  var locale = _ref3.locale,
      locales = _ref3.locales,
      values = _ref3.values,
      formats = _ref3.formats,
      localeData = _ref3.localeData;
  var formatters = defaultFormats(locale, locales, localeData, formats);

  var ctx = function ctx(name, type, format) {
    var value = values[name];
    var formatted = formatters[type](value, format);
    var message = isFunction(formatted) ? formatted(ctx) : formatted;
    return Array.isArray(message) ? message.join("") : message;
  };

  return ctx;
}

function interpolate(translation, locale, locales, localeData) {
  return function (values) {
    var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ctx = context({
      locale: locale,
      locales: locales,
      localeData: localeData,
      formats: formats,
      values: values
    });

    var formatMessage = function formatMessage(message) {
      if (!Array.isArray(message)) return message;
      return message.reduce(function (message, token) {
        if (isString(token)) return message + token;

        var _token = slicedToArray_default()(token, 3),
            name = _token[0],
            type = _token[1],
            format = _token[2];

        var interpolatedFormat = {};

        if (format != null && !isString(format)) {
          Object.keys(format).forEach(function (key) {
            interpolatedFormat[key] = formatMessage(format[key]);
          });
        } else {
          interpolatedFormat = format;
        }

        var value = ctx(name, type, interpolatedFormat);
        if (value == null) return message;
        return message + value;
      }, "");
    };

    var result = formatMessage(translation);
    if (isString(result) && /\\u[a-fA-F0-9]{4}/g.test(result)) return JSON.parse("\"".concat(result.trim(), "\""));
    if (isString(result)) return result.trim();
    return result;
  };
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function processTokens(tokens) {
  if (!tokens.filter(function (token) {
    return !isString(token);
  }).length) {
    return tokens.join("");
  }

  return tokens.map(function (token) {
    if (isString(token)) {
      return token; // # in plural case
    } else if (token.type === "octothorpe") {
      return "#"; // simple argument
    } else if (token.type === "argument") {
      return [token.arg]; // argument with custom format (date, number)
    } else if (token.type === "function") {
      var _param = token.param && token.param.tokens[0];

      var param = typeof _param === "string" ? _param.trim() : _param;
      return [token.arg, token.key, param].filter(Boolean);
    }

    var offset = token.offset ? parseInt(token.offset) : undefined; // complex argument with cases

    var formatProps = {};
    token.cases.forEach(function (item) {
      formatProps[item.key] = processTokens(item.tokens);
    });
    return [token.arg, token.type, _objectSpread({
      offset: offset
    }, formatProps)];
  });
} // Message -> (Params -> String)


function compile(message) {
  try {
    return processTokens((0,external_messageformat_parser_.parse)(message));
  } catch (e) {
    console.error("Message cannot be parsed due to syntax errors: ".concat(message));
    return message;
  }
}

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    classCallCheck_default()(this, EventEmitter);

    this._events = {};
  }

  createClass_default()(EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      var _this = this;

      if (!this._hasEvent(event)) this._events[event] = [];

      this._events[event].push(listener);

      return function () {
        return _this.removeListener(event, listener);
      };
    }
  }, {
    key: "removeListener",
    value: function removeListener(event, listener) {
      if (!this._hasEvent(event)) return;

      var index = this._events[event].indexOf(listener);

      if (~index) this._events[event].splice(index, 1);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this2 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!this._hasEvent(event)) return;

      this._events[event].map(function (listener) {
        return listener.apply(_this2, args);
      });
    }
  }, {
    key: "_hasEvent",
    value: function _hasEvent(event) {
      return Array.isArray(this._events[event]);
    }
  }]);

  return EventEmitter;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var I18n = /*#__PURE__*/function (_EventEmitter) {
  inherits_default()(I18n, _EventEmitter);

  var _super = _createSuper(I18n);

  function I18n(params) {
    var _this;

    classCallCheck_default()(this, I18n);

    _this = _super.call(this);
    _this._messages = {};
    _this._localeData = {};
    if (params.missing != null) _this._missing = params.missing;
    if (params.messages != null) _this.load(params.messages);
    if (params.localeData != null) _this.loadLocaleData(params.localeData);

    if (params.locale != null || params.locales != null) {
      _this.activate(params.locale, params.locales);
    }

    return _this;
  }

  createClass_default()(I18n, [{
    key: "_loadLocaleData",
    value: function _loadLocaleData(locale, localeData) {
      if (this._localeData[locale] == null) {
        this._localeData[locale] = localeData;
      } else {
        Object.assign(this._localeData[locale], localeData);
      }
    }
  }, {
    key: "loadLocaleData",
    value: function loadLocaleData(localeOrAllData, localeData) {
      var _this2 = this;

      if (localeData != null) {
        // loadLocaleData('en', enLocaleData)
        // Loading locale data for a single locale.
        this._loadLocaleData(localeOrAllData, localeData);
      } else {
        // loadLocaleData(allLocaleData)
        // Loading all locale data at once.
        Object.keys(localeOrAllData).forEach(function (locale) {
          return _this2._loadLocaleData(locale, localeOrAllData[locale]);
        });
      }

      this.emit("change");
    }
  }, {
    key: "_load",
    value: function _load(locale, messages) {
      if (this._messages[locale] == null) {
        this._messages[locale] = messages;
      } else {
        Object.assign(this._messages[locale], messages);
      }
    }
  }, {
    key: "load",
    value: function load(localeOrMessages, messages) {
      var _this3 = this;

      if (messages != null) {
        // load('en', catalog)
        // Loading a catalog for a single locale.
        this._load(localeOrMessages, messages);
      } else {
        // load(catalogs)
        // Loading several locales at once.
        Object.keys(localeOrMessages).forEach(function (locale) {
          return _this3._load(locale, localeOrMessages[locale]);
        });
      }

      this.emit("change");
    }
  }, {
    key: "activate",
    value: function activate(locale, locales) {
      {
        if (!this._messages[locale]) {
          console.warn("Messages for locale \"".concat(locale, "\" not loaded."));
        }

        if (!this._localeData[locale]) {
          console.warn("Locale data for locale \"".concat(locale, "\" not loaded. Plurals won't work correctly."));
        }
      }

      this._locale = locale;
      this._locales = locales;
      this.emit("change");
    } // method for translation and formatting

  }, {
    key: "_",
    value: function _(id) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          message = _ref.message,
          formats = _ref.formats;

      if (!isString(id)) {
        values = id.values || values;
        message = id.message;
        id = id.id;
      }

      var translation = this.messages[id] || message || id; // replace missing messages with custom message for debugging

      var missing = this._missing;

      if (missing && !this.messages[id]) {
        return isFunction(missing) ? missing(this.locale, id) : missing;
      }

      if (!this.messages[id]) {
        this.emit("missing", {
          id: id,
          locale: this._locale
        });
      }

      {
        translation = isString(translation) ? compile(translation) : translation;
      } // hack for parsing unicode values inside a string to get parsed in react native environments


      if (isString(translation) && /\\u[a-fA-F0-9]{4}/g.test(translation)) return JSON.parse("\"".concat(translation, "\""));
      if (isString(translation)) return translation;
      return interpolate(translation, this.locale, this.locales, this.localeData)(values, formats);
    }
  }, {
    key: "date",
    value: function date$1(value, format) {
      return date(this.locales || this.locale, format)(value);
    }
  }, {
    key: "number",
    value: function number$1(value, format) {
      return number(this.locales || this.locale, format)(value);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    }
  }, {
    key: "locales",
    get: function get() {
      return this._locales;
    }
  }, {
    key: "messages",
    get: function get() {
      var _this$_messages$this$;

      return (_this$_messages$this$ = this._messages[this._locale]) !== null && _this$_messages$this$ !== void 0 ? _this$_messages$this$ : {};
    }
  }, {
    key: "localeData",
    get: function get() {
      var _this$_localeData$thi;

      return (_this$_localeData$thi = this._localeData[this._locale]) !== null && _this$_localeData$thi !== void 0 ? _this$_localeData$thi : {};
    }
  }]);

  return I18n;
}(EventEmitter);

function setupI18n() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new I18n(params);
}

var i18n = setupI18n();


//# sourceMappingURL=core.development.js.map

;// CONCATENATED MODULE: ./node_modules/@lingui/core/esm/index.js




const esm_i18n =  true ? D : 0;
const esm_setupI18n = (/* unused pure expression or super */ null && ( true ? setupI18nProd : 0));
const esm_formats = (/* unused pure expression or super */ null && ( true ? formatsProd : 0));
const esm_I18n = (/* unused pure expression or super */ null && ( true ? I18nProd : 0));

/***/ })

};
;
//# sourceMappingURL=1796.js.map