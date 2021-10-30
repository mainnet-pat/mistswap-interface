exports.id = 3049;
exports.ids = [3049];
exports.modules = {

/***/ 9484:
/***/ (() => {

(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}).SENTRY_RELEASE={id:"296bcPju4354D3BZrS6B8"};

/***/ }),

/***/ 8771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(9297));

var _loadable = _interopRequireDefault(__webpack_require__(2307));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (false) {}

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8771)


/***/ }),

/***/ 2333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_in": () => (/* binding */ _in),
/* harmony export */   "af": () => (/* binding */ af),
/* harmony export */   "ak": () => (/* binding */ ak),
/* harmony export */   "am": () => (/* binding */ am),
/* harmony export */   "an": () => (/* binding */ an),
/* harmony export */   "ar": () => (/* binding */ ar),
/* harmony export */   "ars": () => (/* binding */ ars),
/* harmony export */   "as": () => (/* binding */ as),
/* harmony export */   "asa": () => (/* binding */ asa),
/* harmony export */   "ast": () => (/* binding */ ast),
/* harmony export */   "az": () => (/* binding */ az),
/* harmony export */   "be": () => (/* binding */ be),
/* harmony export */   "bem": () => (/* binding */ bem),
/* harmony export */   "bez": () => (/* binding */ bez),
/* harmony export */   "bg": () => (/* binding */ bg),
/* harmony export */   "bho": () => (/* binding */ bho),
/* harmony export */   "bm": () => (/* binding */ bm),
/* harmony export */   "bn": () => (/* binding */ bn),
/* harmony export */   "bo": () => (/* binding */ bo),
/* harmony export */   "br": () => (/* binding */ br),
/* harmony export */   "brx": () => (/* binding */ brx),
/* harmony export */   "bs": () => (/* binding */ bs),
/* harmony export */   "ca": () => (/* binding */ ca),
/* harmony export */   "ce": () => (/* binding */ ce),
/* harmony export */   "ceb": () => (/* binding */ ceb),
/* harmony export */   "cgg": () => (/* binding */ cgg),
/* harmony export */   "chr": () => (/* binding */ chr),
/* harmony export */   "ckb": () => (/* binding */ ckb),
/* harmony export */   "cs": () => (/* binding */ cs),
/* harmony export */   "cy": () => (/* binding */ cy),
/* harmony export */   "da": () => (/* binding */ da),
/* harmony export */   "de": () => (/* binding */ de),
/* harmony export */   "dsb": () => (/* binding */ dsb),
/* harmony export */   "dv": () => (/* binding */ dv),
/* harmony export */   "dz": () => (/* binding */ dz),
/* harmony export */   "ee": () => (/* binding */ ee),
/* harmony export */   "el": () => (/* binding */ el),
/* harmony export */   "en": () => (/* binding */ en),
/* harmony export */   "eo": () => (/* binding */ eo),
/* harmony export */   "es": () => (/* binding */ es),
/* harmony export */   "et": () => (/* binding */ et),
/* harmony export */   "eu": () => (/* binding */ eu),
/* harmony export */   "fa": () => (/* binding */ fa),
/* harmony export */   "ff": () => (/* binding */ ff),
/* harmony export */   "fi": () => (/* binding */ fi),
/* harmony export */   "fil": () => (/* binding */ fil),
/* harmony export */   "fo": () => (/* binding */ fo),
/* harmony export */   "fr": () => (/* binding */ fr),
/* harmony export */   "fur": () => (/* binding */ fur),
/* harmony export */   "fy": () => (/* binding */ fy),
/* harmony export */   "ga": () => (/* binding */ ga),
/* harmony export */   "gd": () => (/* binding */ gd),
/* harmony export */   "gl": () => (/* binding */ gl),
/* harmony export */   "gsw": () => (/* binding */ gsw),
/* harmony export */   "gu": () => (/* binding */ gu),
/* harmony export */   "guw": () => (/* binding */ guw),
/* harmony export */   "gv": () => (/* binding */ gv),
/* harmony export */   "ha": () => (/* binding */ ha),
/* harmony export */   "haw": () => (/* binding */ haw),
/* harmony export */   "he": () => (/* binding */ he),
/* harmony export */   "hi": () => (/* binding */ hi),
/* harmony export */   "hr": () => (/* binding */ hr),
/* harmony export */   "hsb": () => (/* binding */ hsb),
/* harmony export */   "hu": () => (/* binding */ hu),
/* harmony export */   "hy": () => (/* binding */ hy),
/* harmony export */   "ia": () => (/* binding */ ia),
/* harmony export */   "id": () => (/* binding */ id),
/* harmony export */   "ig": () => (/* binding */ ig),
/* harmony export */   "ii": () => (/* binding */ ii),
/* harmony export */   "io": () => (/* binding */ io),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "it": () => (/* binding */ it),
/* harmony export */   "iu": () => (/* binding */ iu),
/* harmony export */   "iw": () => (/* binding */ iw),
/* harmony export */   "ja": () => (/* binding */ ja),
/* harmony export */   "jbo": () => (/* binding */ jbo),
/* harmony export */   "jgo": () => (/* binding */ jgo),
/* harmony export */   "ji": () => (/* binding */ ji),
/* harmony export */   "jmc": () => (/* binding */ jmc),
/* harmony export */   "jv": () => (/* binding */ jv),
/* harmony export */   "jw": () => (/* binding */ jw),
/* harmony export */   "ka": () => (/* binding */ ka),
/* harmony export */   "kab": () => (/* binding */ kab),
/* harmony export */   "kaj": () => (/* binding */ kaj),
/* harmony export */   "kcg": () => (/* binding */ kcg),
/* harmony export */   "kde": () => (/* binding */ kde),
/* harmony export */   "kea": () => (/* binding */ kea),
/* harmony export */   "kk": () => (/* binding */ kk),
/* harmony export */   "kkj": () => (/* binding */ kkj),
/* harmony export */   "kl": () => (/* binding */ kl),
/* harmony export */   "km": () => (/* binding */ km),
/* harmony export */   "kn": () => (/* binding */ kn),
/* harmony export */   "ko": () => (/* binding */ ko),
/* harmony export */   "ks": () => (/* binding */ ks),
/* harmony export */   "ksb": () => (/* binding */ ksb),
/* harmony export */   "ksh": () => (/* binding */ ksh),
/* harmony export */   "ku": () => (/* binding */ ku),
/* harmony export */   "kw": () => (/* binding */ kw),
/* harmony export */   "ky": () => (/* binding */ ky),
/* harmony export */   "lag": () => (/* binding */ lag),
/* harmony export */   "lb": () => (/* binding */ lb),
/* harmony export */   "lg": () => (/* binding */ lg),
/* harmony export */   "lkt": () => (/* binding */ lkt),
/* harmony export */   "ln": () => (/* binding */ ln),
/* harmony export */   "lo": () => (/* binding */ lo),
/* harmony export */   "lt": () => (/* binding */ lt),
/* harmony export */   "lv": () => (/* binding */ lv),
/* harmony export */   "mas": () => (/* binding */ mas),
/* harmony export */   "mg": () => (/* binding */ mg),
/* harmony export */   "mgo": () => (/* binding */ mgo),
/* harmony export */   "mk": () => (/* binding */ mk),
/* harmony export */   "ml": () => (/* binding */ ml),
/* harmony export */   "mn": () => (/* binding */ mn),
/* harmony export */   "mo": () => (/* binding */ mo),
/* harmony export */   "mr": () => (/* binding */ mr),
/* harmony export */   "ms": () => (/* binding */ ms),
/* harmony export */   "mt": () => (/* binding */ mt),
/* harmony export */   "my": () => (/* binding */ my),
/* harmony export */   "nah": () => (/* binding */ nah),
/* harmony export */   "naq": () => (/* binding */ naq),
/* harmony export */   "nb": () => (/* binding */ nb),
/* harmony export */   "nd": () => (/* binding */ nd),
/* harmony export */   "ne": () => (/* binding */ ne),
/* harmony export */   "nl": () => (/* binding */ nl),
/* harmony export */   "nn": () => (/* binding */ nn),
/* harmony export */   "nnh": () => (/* binding */ nnh),
/* harmony export */   "no": () => (/* binding */ no),
/* harmony export */   "nqo": () => (/* binding */ nqo),
/* harmony export */   "nr": () => (/* binding */ nr),
/* harmony export */   "nso": () => (/* binding */ nso),
/* harmony export */   "ny": () => (/* binding */ ny),
/* harmony export */   "nyn": () => (/* binding */ nyn),
/* harmony export */   "om": () => (/* binding */ om),
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "os": () => (/* binding */ os),
/* harmony export */   "osa": () => (/* binding */ osa),
/* harmony export */   "pa": () => (/* binding */ pa),
/* harmony export */   "pap": () => (/* binding */ pap),
/* harmony export */   "pl": () => (/* binding */ pl),
/* harmony export */   "prg": () => (/* binding */ prg),
/* harmony export */   "ps": () => (/* binding */ ps),
/* harmony export */   "pt": () => (/* binding */ pt),
/* harmony export */   "pt_PT": () => (/* binding */ pt_PT),
/* harmony export */   "rm": () => (/* binding */ rm),
/* harmony export */   "ro": () => (/* binding */ ro),
/* harmony export */   "rof": () => (/* binding */ rof),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "ru": () => (/* binding */ ru),
/* harmony export */   "rwk": () => (/* binding */ rwk),
/* harmony export */   "sah": () => (/* binding */ sah),
/* harmony export */   "saq": () => (/* binding */ saq),
/* harmony export */   "sc": () => (/* binding */ sc),
/* harmony export */   "scn": () => (/* binding */ scn),
/* harmony export */   "sd": () => (/* binding */ sd),
/* harmony export */   "sdh": () => (/* binding */ sdh),
/* harmony export */   "se": () => (/* binding */ se),
/* harmony export */   "seh": () => (/* binding */ seh),
/* harmony export */   "ses": () => (/* binding */ ses),
/* harmony export */   "sg": () => (/* binding */ sg),
/* harmony export */   "sh": () => (/* binding */ sh),
/* harmony export */   "shi": () => (/* binding */ shi),
/* harmony export */   "si": () => (/* binding */ si),
/* harmony export */   "sk": () => (/* binding */ sk),
/* harmony export */   "sl": () => (/* binding */ sl),
/* harmony export */   "sma": () => (/* binding */ sma),
/* harmony export */   "smi": () => (/* binding */ smi),
/* harmony export */   "smj": () => (/* binding */ smj),
/* harmony export */   "smn": () => (/* binding */ smn),
/* harmony export */   "sms": () => (/* binding */ sms),
/* harmony export */   "sn": () => (/* binding */ sn),
/* harmony export */   "so": () => (/* binding */ so),
/* harmony export */   "sq": () => (/* binding */ sq),
/* harmony export */   "sr": () => (/* binding */ sr),
/* harmony export */   "ss": () => (/* binding */ ss),
/* harmony export */   "ssy": () => (/* binding */ ssy),
/* harmony export */   "st": () => (/* binding */ st),
/* harmony export */   "su": () => (/* binding */ su),
/* harmony export */   "sv": () => (/* binding */ sv),
/* harmony export */   "sw": () => (/* binding */ sw),
/* harmony export */   "syr": () => (/* binding */ syr),
/* harmony export */   "ta": () => (/* binding */ ta),
/* harmony export */   "te": () => (/* binding */ te),
/* harmony export */   "teo": () => (/* binding */ teo),
/* harmony export */   "th": () => (/* binding */ th),
/* harmony export */   "ti": () => (/* binding */ ti),
/* harmony export */   "tig": () => (/* binding */ tig),
/* harmony export */   "tk": () => (/* binding */ tk),
/* harmony export */   "tl": () => (/* binding */ tl),
/* harmony export */   "tn": () => (/* binding */ tn),
/* harmony export */   "to": () => (/* binding */ to),
/* harmony export */   "tr": () => (/* binding */ tr),
/* harmony export */   "ts": () => (/* binding */ ts),
/* harmony export */   "tzm": () => (/* binding */ tzm),
/* harmony export */   "ug": () => (/* binding */ ug),
/* harmony export */   "uk": () => (/* binding */ uk),
/* harmony export */   "ur": () => (/* binding */ ur),
/* harmony export */   "uz": () => (/* binding */ uz),
/* harmony export */   "ve": () => (/* binding */ ve),
/* harmony export */   "vi": () => (/* binding */ vi),
/* harmony export */   "vo": () => (/* binding */ vo),
/* harmony export */   "vun": () => (/* binding */ vun),
/* harmony export */   "wa": () => (/* binding */ wa),
/* harmony export */   "wae": () => (/* binding */ wae),
/* harmony export */   "wo": () => (/* binding */ wo),
/* harmony export */   "xh": () => (/* binding */ xh),
/* harmony export */   "xog": () => (/* binding */ xog),
/* harmony export */   "yi": () => (/* binding */ yi),
/* harmony export */   "yo": () => (/* binding */ yo),
/* harmony export */   "yue": () => (/* binding */ yue),
/* harmony export */   "zh": () => (/* binding */ zh),
/* harmony export */   "zu": () => (/* binding */ zu)
/* harmony export */ });
function a(n, ord) {
  if (ord) return 'other';
  return n == 1 ? 'one' : 'other';
}
function b(n, ord) {
  if (ord) return 'other';
  return (n == 0 || n == 1) ? 'one' : 'other';
}
function c(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return 'other';
  return n == 1 && v0 ? 'one' : 'other';
}
function d(n, ord) {
  return 'other';
}
function e(n, ord) {
  if (ord) return 'other';
  return n == 1 ? 'one'
    : n == 2 ? 'two'
    : 'other';
}

const _in = d;
const af = a;
const ak = b;
function am(n, ord) {
  if (ord) return 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}
const an = a;
function ar(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return n == 0 ? 'zero'
    : n == 1 ? 'one'
    : n == 2 ? 'two'
    : (n100 >= 3 && n100 <= 10) ? 'few'
    : (n100 >= 11 && n100 <= 99) ? 'many'
    : 'other';
}
function ars(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return n == 0 ? 'zero'
    : n == 1 ? 'one'
    : n == 2 ? 'two'
    : (n100 >= 3 && n100 <= 10) ? 'few'
    : (n100 >= 11 && n100 <= 99) ? 'many'
    : 'other';
}
function as(n, ord) {
  if (ord) return (n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10) ? 'one'
    : (n == 2 || n == 3) ? 'two'
    : n == 4 ? 'few'
    : n == 6 ? 'many'
    : 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}
const asa = a;
const ast = c;
function az(n, ord) {
  var s = String(n).split('.'), i = s[0], i10 = i.slice(-1), i100 = i.slice(-2), i1000 = i.slice(-3);
  if (ord) return (i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8) || (i100 == 20 || i100 == 50 || i100 == 70 || i100 == 80) ? 'one'
    : (i10 == 3 || i10 == 4) || (i1000 == 100 || i1000 == 200 || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700 || i1000 == 800 || i1000 == 900) ? 'few'
    : i == 0 || i10 == 6 || (i100 == 40 || i100 == 60 || i100 == 90) ? 'many'
    : 'other';
  return n == 1 ? 'one' : 'other';
}
function be(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return (n10 == 2 || n10 == 3) && n100 != 12 && n100 != 13 ? 'few' : 'other';
  return n10 == 1 && n100 != 11 ? 'one'
    : (n10 >= 2 && n10 <= 4) && (n100 < 12 || n100 > 14) ? 'few'
    : t0 && n10 == 0 || (n10 >= 5 && n10 <= 9) || (n100 >= 11 && n100 <= 14) ? 'many'
    : 'other';
}
const bem = a;
const bez = a;
const bg = a;
const bho = b;
const bm = d;
function bn(n, ord) {
  if (ord) return (n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10) ? 'one'
    : (n == 2 || n == 3) ? 'two'
    : n == 4 ? 'few'
    : n == 6 ? 'many'
    : 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}
const bo = d;
function br(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), n1000000 = t0 && s[0].slice(-6);
  if (ord) return 'other';
  return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one'
    : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two'
    : ((n10 == 3 || n10 == 4) || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few'
    : n != 0 && t0 && n1000000 == 0 ? 'many'
    : 'other';
}
const brx = a;
function bs(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one'
    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) || (f10 >= 2 && f10 <= 4) && (f100 < 12 || f100 > 14) ? 'few'
    : 'other';
}
function ca(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return (n == 1 || n == 3) ? 'one'
    : n == 2 ? 'two'
    : n == 4 ? 'few'
    : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}
const ce = a;
function ceb(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
  if (ord) return 'other';
  return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
}
const cgg = a;
const chr = a;
const ckb = a;
function cs(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1];
  if (ord) return 'other';
  return n == 1 && v0 ? 'one'
    : (i >= 2 && i <= 4) && v0 ? 'few'
    : !v0 ? 'many'
    : 'other';
}
function cy(n, ord) {
  if (ord) return (n == 0 || n == 7 || n == 8 || n == 9) ? 'zero'
    : n == 1 ? 'one'
    : n == 2 ? 'two'
    : (n == 3 || n == 4) ? 'few'
    : (n == 5 || n == 6) ? 'many'
    : 'other';
  return n == 0 ? 'zero'
    : n == 1 ? 'one'
    : n == 2 ? 'two'
    : n == 3 ? 'few'
    : n == 6 ? 'many'
    : 'other';
}
function da(n, ord) {
  var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n;
  if (ord) return 'other';
  return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
}
const de = c;
function dsb(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
  if (ord) return 'other';
  return v0 && i100 == 1 || f100 == 1 ? 'one'
    : v0 && i100 == 2 || f100 == 2 ? 'two'
    : v0 && (i100 == 3 || i100 == 4) || (f100 == 3 || f100 == 4) ? 'few'
    : 'other';
}
const dv = a;
const dz = d;
const ee = a;
const el = a;
function en(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return n10 == 1 && n100 != 11 ? 'one'
    : n10 == 2 && n100 != 12 ? 'two'
    : n10 == 3 && n100 != 13 ? 'few'
    : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}
const eo = a;
const es = a;
const et = c;
const eu = a;
function fa(n, ord) {
  if (ord) return 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}
function ff(n, ord) {
  if (ord) return 'other';
  return n >= 0 && n < 2 ? 'one' : 'other';
}
const fi = c;
function fil(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
  if (ord) return n == 1 ? 'one' : 'other';
  return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
}
const fo = a;
function fr(n, ord) {
  if (ord) return n == 1 ? 'one' : 'other';
  return n >= 0 && n < 2 ? 'one' : 'other';
}
const fur = a;
const fy = c;
function ga(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return n == 1 ? 'one' : 'other';
  return n == 1 ? 'one'
    : n == 2 ? 'two'
    : (t0 && n >= 3 && n <= 6) ? 'few'
    : (t0 && n >= 7 && n <= 10) ? 'many'
    : 'other';
}
function gd(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return (n == 1 || n == 11) ? 'one'
    : (n == 2 || n == 12) ? 'two'
    : (n == 3 || n == 13) ? 'few'
    : 'other';
  return (n == 1 || n == 11) ? 'one'
    : (n == 2 || n == 12) ? 'two'
    : ((t0 && n >= 3 && n <= 10) || (t0 && n >= 13 && n <= 19)) ? 'few'
    : 'other';
}
const gl = c;
const gsw = a;
function gu(n, ord) {
  if (ord) return n == 1 ? 'one'
    : (n == 2 || n == 3) ? 'two'
    : n == 4 ? 'few'
    : n == 6 ? 'many'
    : 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}
const guw = b;
function gv(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
  if (ord) return 'other';
  return v0 && i10 == 1 ? 'one'
    : v0 && i10 == 2 ? 'two'
    : v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60 || i100 == 80) ? 'few'
    : !v0 ? 'many'
    : 'other';
}
const ha = a;
const haw = a;
function he(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
  if (ord) return 'other';
  return n == 1 && v0 ? 'one'
    : i == 2 && v0 ? 'two'
    : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many'
    : 'other';
}
function hi(n, ord) {
  if (ord) return n == 1 ? 'one'
    : (n == 2 || n == 3) ? 'two'
    : n == 4 ? 'few'
    : n == 6 ? 'many'
    : 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}
function hr(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one'
    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) || (f10 >= 2 && f10 <= 4) && (f100 < 12 || f100 > 14) ? 'few'
    : 'other';
}
function hsb(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
  if (ord) return 'other';
  return v0 && i100 == 1 || f100 == 1 ? 'one'
    : v0 && i100 == 2 || f100 == 2 ? 'two'
    : v0 && (i100 == 3 || i100 == 4) || (f100 == 3 || f100 == 4) ? 'few'
    : 'other';
}
function hu(n, ord) {
  if (ord) return (n == 1 || n == 5) ? 'one' : 'other';
  return n == 1 ? 'one' : 'other';
}
function hy(n, ord) {
  if (ord) return n == 1 ? 'one' : 'other';
  return n >= 0 && n < 2 ? 'one' : 'other';
}
const ia = c;
const id = d;
const ig = d;
const ii = d;
const io = c;
function is(n, ord) {
  var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);
  if (ord) return 'other';
  return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';
}
function it(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return (n == 11 || n == 8 || n == 80 || n == 800) ? 'many' : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}
const iu = e;
function iw(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
  if (ord) return 'other';
  return n == 1 && v0 ? 'one'
    : i == 2 && v0 ? 'two'
    : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many'
    : 'other';
}
const ja = d;
const jbo = d;
const jgo = a;
const ji = c;
const jmc = a;
const jv = d;
const jw = d;
function ka(n, ord) {
  var s = String(n).split('.'), i = s[0], i100 = i.slice(-2);
  if (ord) return i == 1 ? 'one'
    : i == 0 || ((i100 >= 2 && i100 <= 20) || i100 == 40 || i100 == 60 || i100 == 80) ? 'many'
    : 'other';
  return n == 1 ? 'one' : 'other';
}
function kab(n, ord) {
  if (ord) return 'other';
  return n >= 0 && n < 2 ? 'one' : 'other';
}
const kaj = a;
const kcg = a;
const kde = d;
const kea = d;
function kk(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
  if (ord) return n10 == 6 || n10 == 9 || t0 && n10 == 0 && n != 0 ? 'many' : 'other';
  return n == 1 ? 'one' : 'other';
}
const kkj = a;
const kl = a;
const km = d;
function kn(n, ord) {
  if (ord) return 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}
const ko = d;
const ks = a;
const ksb = a;
function ksh(n, ord) {
  if (ord) return 'other';
  return n == 0 ? 'zero'
    : n == 1 ? 'one'
    : 'other';
}
const ku = a;
function kw(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2), n1000 = t0 && s[0].slice(-3), n100000 = t0 && s[0].slice(-5), n1000000 = t0 && s[0].slice(-6);
  if (ord) return (t0 && n >= 1 && n <= 4) || ((n100 >= 1 && n100 <= 4) || (n100 >= 21 && n100 <= 24) || (n100 >= 41 && n100 <= 44) || (n100 >= 61 && n100 <= 64) || (n100 >= 81 && n100 <= 84)) ? 'one'
    : n == 5 || n100 == 5 ? 'many'
    : 'other';
  return n == 0 ? 'zero'
    : n == 1 ? 'one'
    : (n100 == 2 || n100 == 22 || n100 == 42 || n100 == 62 || n100 == 82) || t0 && n1000 == 0 && ((n100000 >= 1000 && n100000 <= 20000) || n100000 == 40000 || n100000 == 60000 || n100000 == 80000) || n != 0 && n1000000 == 100000 ? 'two'
    : (n100 == 3 || n100 == 23 || n100 == 43 || n100 == 63 || n100 == 83) ? 'few'
    : n != 1 && (n100 == 1 || n100 == 21 || n100 == 41 || n100 == 61 || n100 == 81) ? 'many'
    : 'other';
}
const ky = a;
function lag(n, ord) {
  var s = String(n).split('.'), i = s[0];
  if (ord) return 'other';
  return n == 0 ? 'zero'
    : (i == 0 || i == 1) && n != 0 ? 'one'
    : 'other';
}
const lb = a;
const lg = a;
const lkt = d;
const ln = b;
function lo(n, ord) {
  if (ord) return n == 1 ? 'one' : 'other';
  return 'other';
}
function lt(n, ord) {
  var s = String(n).split('.'), f = s[1] || '', t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one'
    : (n10 >= 2 && n10 <= 9) && (n100 < 11 || n100 > 19) ? 'few'
    : f != 0 ? 'many'
    : 'other';
}
function lv(n, ord) {
  var s = String(n).split('.'), f = s[1] || '', v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
  if (ord) return 'other';
  return t0 && n10 == 0 || (n100 >= 11 && n100 <= 19) || v == 2 && (f100 >= 11 && f100 <= 19) ? 'zero'
    : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one'
    : 'other';
}
const mas = a;
const mg = b;
const mgo = a;
function mk(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return i10 == 1 && i100 != 11 ? 'one'
    : i10 == 2 && i100 != 12 ? 'two'
    : (i10 == 7 || i10 == 8) && i100 != 17 && i100 != 18 ? 'many'
    : 'other';
  return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
}
const ml = a;
const mn = a;
function mo(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
  if (ord) return n == 1 ? 'one' : 'other';
  return n == 1 && v0 ? 'one'
    : !v0 || n == 0 || (n100 >= 2 && n100 <= 19) ? 'few'
    : 'other';
}
function mr(n, ord) {
  if (ord) return n == 1 ? 'one'
    : (n == 2 || n == 3) ? 'two'
    : n == 4 ? 'few'
    : 'other';
  return n == 1 ? 'one' : 'other';
}
function ms(n, ord) {
  if (ord) return n == 1 ? 'one' : 'other';
  return 'other';
}
function mt(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return n == 1 ? 'one'
    : n == 0 || (n100 >= 2 && n100 <= 10) ? 'few'
    : (n100 >= 11 && n100 <= 19) ? 'many'
    : 'other';
}
const my = d;
const nah = a;
const naq = e;
const nb = a;
const nd = a;
function ne(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return (t0 && n >= 1 && n <= 4) ? 'one' : 'other';
  return n == 1 ? 'one' : 'other';
}
const nl = c;
const nn = a;
const nnh = a;
const no = a;
const nqo = d;
const nr = a;
const nso = b;
const ny = a;
const nyn = a;
const om = a;
function or(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return (n == 1 || n == 5 || (t0 && n >= 7 && n <= 9)) ? 'one'
    : (n == 2 || n == 3) ? 'two'
    : n == 4 ? 'few'
    : n == 6 ? 'many'
    : 'other';
  return n == 1 ? 'one' : 'other';
}
const os = a;
const osa = d;
const pa = b;
const pap = a;
function pl(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
  if (ord) return 'other';
  return n == 1 && v0 ? 'one'
    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? 'few'
    : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 12 && i100 <= 14) ? 'many'
    : 'other';
}
function prg(n, ord) {
  var s = String(n).split('.'), f = s[1] || '', v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
  if (ord) return 'other';
  return t0 && n10 == 0 || (n100 >= 11 && n100 <= 19) || v == 2 && (f100 >= 11 && f100 <= 19) ? 'zero'
    : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one'
    : 'other';
}
const ps = a;
function pt(n, ord) {
  var s = String(n).split('.'), i = s[0];
  if (ord) return 'other';
  return (i == 0 || i == 1) ? 'one' : 'other';
}
const pt_PT = c;
const rm = a;
function ro(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
  if (ord) return n == 1 ? 'one' : 'other';
  return n == 1 && v0 ? 'one'
    : !v0 || n == 0 || (n100 >= 2 && n100 <= 19) ? 'few'
    : 'other';
}
const rof = a;
const root = d;
function ru(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
  if (ord) return 'other';
  return v0 && i10 == 1 && i100 != 11 ? 'one'
    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? 'few'
    : v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 11 && i100 <= 14) ? 'many'
    : 'other';
}
const rwk = a;
const sah = d;
const saq = a;
function sc(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return (n == 11 || n == 8 || n == 80 || n == 800) ? 'many' : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}
function scn(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return (n == 11 || n == 8 || n == 80 || n == 800) ? 'many' : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}
const sd = a;
const sdh = a;
const se = e;
const seh = a;
const ses = d;
const sg = d;
function sh(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one'
    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) || (f10 >= 2 && f10 <= 4) && (f100 < 12 || f100 > 14) ? 'few'
    : 'other';
}
function shi(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return 'other';
  return n >= 0 && n <= 1 ? 'one'
    : (t0 && n >= 2 && n <= 10) ? 'few'
    : 'other';
}
function si(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '';
  if (ord) return 'other';
  return (n == 0 || n == 1) || i == 0 && f == 1 ? 'one' : 'other';
}
function sk(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1];
  if (ord) return 'other';
  return n == 1 && v0 ? 'one'
    : (i >= 2 && i <= 4) && v0 ? 'few'
    : !v0 ? 'many'
    : 'other';
}
function sl(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i100 = i.slice(-2);
  if (ord) return 'other';
  return v0 && i100 == 1 ? 'one'
    : v0 && i100 == 2 ? 'two'
    : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few'
    : 'other';
}
const sma = e;
const smi = e;
const smj = e;
const smn = e;
const sms = e;
const sn = a;
const so = a;
function sq(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return n == 1 ? 'one'
    : n10 == 4 && n100 != 14 ? 'many'
    : 'other';
  return n == 1 ? 'one' : 'other';
}
function sr(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one'
    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) || (f10 >= 2 && f10 <= 4) && (f100 < 12 || f100 > 14) ? 'few'
    : 'other';
}
const ss = a;
const ssy = a;
const st = a;
const su = d;
function sv(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? 'one' : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}
const sw = c;
const syr = a;
const ta = a;
const te = a;
const teo = a;
const th = d;
const ti = b;
const tig = a;
function tk(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
  if (ord) return (n10 == 6 || n10 == 9) || n == 10 ? 'few' : 'other';
  return n == 1 ? 'one' : 'other';
}
function tl(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
  if (ord) return n == 1 ? 'one' : 'other';
  return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
}
const tn = a;
const to = d;
const tr = a;
const ts = a;
function tzm(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return 'other';
  return (n == 0 || n == 1) || (t0 && n >= 11 && n <= 99) ? 'one' : 'other';
}
const ug = a;
function uk(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), i10 = i.slice(-1), i100 = i.slice(-2);
  if (ord) return n10 == 3 && n100 != 13 ? 'few' : 'other';
  return v0 && i10 == 1 && i100 != 11 ? 'one'
    : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? 'few'
    : v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 11 && i100 <= 14) ? 'many'
    : 'other';
}
const ur = c;
const uz = a;
const ve = a;
function vi(n, ord) {
  if (ord) return n == 1 ? 'one' : 'other';
  return 'other';
}
const vo = a;
const vun = a;
const wa = b;
const wae = a;
const wo = d;
const xh = a;
const xog = a;
const yi = c;
const yo = d;
const yue = d;
const zh = d;
function zu(n, ord) {
  if (ord) return 'other';
  return n >= 0 && n <= 1 ? 'one' : 'other';
}


/***/ })

};
;
//# sourceMappingURL=3049.js.map