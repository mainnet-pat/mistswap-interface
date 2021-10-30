"use strict";
exports.id = 7735;
exports.ids = [7735];
exports.modules = {

/***/ 5090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "US": () => (/* binding */ UNSUPPORTED_LIST_URLS),
/* harmony export */   "Lx": () => (/* binding */ DEFAULT_LIST_OF_LISTS),
/* harmony export */   "c8": () => (/* binding */ DEFAULT_ACTIVE_LIST_URLS)
/* harmony export */ });
const BA_LIST = 'https://raw.githubusercontent.com/The-Blockchain-Association/sec-notice-list/master/ba-sec-list.json'; // used to mark unsupported tokens, these are hosted lists of unsupported tokens

/**
 * @TODO add list from blockchain association
 */

const UNSUPPORTED_LIST_URLS = [BA_LIST];
const ZHESTO_LIST = 'https://raw.githubusercontent.com/zh/sep20tokens/main/smartbch.tokenlist.json'; // lower index == higher priority for token import

const DEFAULT_LIST_OF_LISTS = [ZHESTO_LIST, ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
]; // default lists to be 'active' aka searched across

const DEFAULT_ACTIVE_LIST_URLS = [ZHESTO_LIST];

/***/ }),

/***/ 8532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gN": () => (/* binding */ MERKLE_ROOT),
/* harmony export */   "AQ": () => (/* binding */ NetworkContextName),
/* harmony export */   "gv": () => (/* binding */ INITIAL_ALLOWED_SLIPPAGE),
/* harmony export */   "PY": () => (/* binding */ DEFAULT_DEADLINE_FROM_NOW),
/* harmony export */   "iV": () => (/* binding */ BIG_INT_ZERO),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Bz": () => (/* binding */ ALLOWED_PRICE_IMPACT_LOW),
/* harmony export */   "p9": () => (/* binding */ ALLOWED_PRICE_IMPACT_MEDIUM),
/* harmony export */   "Uf": () => (/* binding */ ALLOWED_PRICE_IMPACT_HIGH),
/* harmony export */   "EV": () => (/* binding */ PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN),
/* harmony export */   "lN": () => (/* binding */ BLOCKED_PRICE_IMPACT_NON_EXPERT),
/* harmony export */   "Ru": () => (/* binding */ BETTER_TRADE_LESS_HOPS_THRESHOLD),
/* harmony export */   "qN": () => (/* binding */ ZERO_PERCENT),
/* harmony export */   "yC": () => (/* binding */ ONE_HUNDRED_PERCENT),
/* harmony export */   "fi": () => (/* binding */ ANALYTICS_URL),
/* harmony export */   "rW": () => (/* binding */ EIP_1559_ACTIVATION_BLOCK)
/* harmony export */ });
/* unused harmony exports POOL_DENY, AVERAGE_BLOCK_TIME_IN_SECS, BIG_INT_SECONDS_IN_WEEK, BIPS_BASE, MIN_ETH, BLOCKED_ADDRESSES */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);

const POOL_DENY = (/* unused pure expression or super */ null && (['14', '29', '45', '30'])); // Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time

const AVERAGE_BLOCK_TIME_IN_SECS = 13;
const MERKLE_ROOT = 'https://raw.githubusercontent.com/sushiswap/sushi-vesting/master/merkle/week-19/merkle-10959148-11824101.json';
const NetworkContextName = 'NETWORK'; // default allowed slippage, in bips

const INITIAL_ALLOWED_SLIPPAGE = 50; // 30 minutes, denominated in seconds

const DEFAULT_DEADLINE_FROM_NOW = 60 * 30; // used for rewards deadlines

const BIG_INT_SECONDS_IN_WEEK = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(60 * 60 * 24 * 7);
const BIG_INT_ZERO = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(0); // one basis point

const ONE_BIPS = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(1), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(10000));
const BIPS_BASE = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(10000); // used for warning states

const ALLOWED_PRICE_IMPACT_LOW = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(100), BIPS_BASE); // 1%

const ALLOWED_PRICE_IMPACT_MEDIUM = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(300), BIPS_BASE); // 3%

const ALLOWED_PRICE_IMPACT_HIGH = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(500), BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute

const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(1000), BIPS_BASE); // 10%
// for non expert mode disable swaps above this

const BLOCKED_PRICE_IMPACT_NON_EXPERT = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(1500), BIPS_BASE); // 15%
// used to ensure the user doesn't send so much ETH so they end up with <.01

const MIN_ETH = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.exponentiate(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(10), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(16)); // .01 ETH

const BETTER_TRADE_LESS_HOPS_THRESHOLD = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(50), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(10000));
const ZERO_PERCENT = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent('0');
const ONE_HUNDRED_PERCENT = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent('1'); // SDN OFAC addresses

const BLOCKED_ADDRESSES = (/* unused pure expression or super */ null && (['0x7F367cC41522cE07553e823bf3be79A889DEbe1B', '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b', '0x901bb9583b24D97e995513C6778dc6888AB6870e', '0xA7e5d5A720f06526557c513402f2e6B5fA20b008']));
const ANALYTICS_URL = {// [ChainId.SMARTBCH]: 'https://analytics.mistswap.fi',
};
const EIP_1559_ACTIVATION_BLOCK = {};

/***/ }),

/***/ 4218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ toAmount),
/* harmony export */   "T": () => (/* binding */ toShare)
/* harmony export */ });
function toAmount(token, shares) {
  return shares.mulDiv(token.bentoAmount, token.bentoShare);
}
function toShare(token, amount) {
  return amount.mulDiv(token.bentoShare, token.bentoAmount);
}

/***/ }),

/***/ 2222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uN": () => (/* binding */ getContract),
  "TY": () => (/* binding */ getProviderOrSigner),
  "TC": () => (/* binding */ getSigner)
});

// UNUSED EXPORTS: getArcherRouterContract, getRouterAddress, getRouterContract

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: external "@ethersproject/constants"
var constants_ = __webpack_require__(6148);
;// CONCATENATED MODULE: ./src/constants/abis/archer-router.json
const archer_router_namespaceObject = [];
// EXTERNAL MODULE: external "@ethersproject/contracts"
var contracts_ = __webpack_require__(4440);
;// CONCATENATED MODULE: ./src/constants/abis/uniswap-v2-router-02.json
const uniswap_v2_router_02_namespaceObject = [];
// EXTERNAL MODULE: ./src/functions/validate.ts
var validate = __webpack_require__(2556);
;// CONCATENATED MODULE: ./src/functions/contract.ts
// NOTE: Try not to add anything to thie file, it's almost entirely refactored out.





 // account is not optional

function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
} // account is optional

function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
} // account is optional

function getContract(address, ABI, library, account) {
  if (!(0,validate/* isAddress */.UJ)(address) || address === constants_.AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new contracts_.Contract(address, ABI, getProviderOrSigner(library, account));
}
function getRouterAddress(chainId) {
  if (!chainId) {
    throw Error(`Undefined 'chainId' parameter '${chainId}'.`);
  }

  return ROUTER_ADDRESS[chainId];
} // account is optional

function getRouterContract(chainId, library, account) {
  return getContract(getRouterAddress(chainId), IUniswapV2Router02ABI, library, account);
}
function getArcherRouterContract(chainId, library, account) {
  return getContract('', ArcherSwapRouterABI, library, account);
}

/***/ }),

/***/ 7025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "il": () => (/* reexport */ contenthashToUri),
  "ie": () => (/* reexport */ uriToHttp)
});

// UNUSED EXPORTS: basisPointsToPercent

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
;// CONCATENATED MODULE: ./src/functions/convert/basisPointsToPercent.ts
 // converts a basis points value to a sdk percent

function basisPointsToPercent(num) {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000));
}
// EXTERNAL MODULE: external "multihashes"
var external_multihashes_ = __webpack_require__(6841);
// EXTERNAL MODULE: external "multicodec"
var external_multicodec_ = __webpack_require__(1980);
// EXTERNAL MODULE: external "cids"
var external_cids_ = __webpack_require__(4588);
var external_cids_default = /*#__PURE__*/__webpack_require__.n(external_cids_);
;// CONCATENATED MODULE: ./src/functions/convert/contenthashToUri.ts



function hexToUint8Array(hex) {
  hex = hex.startsWith('0x') ? hex.substr(2) : hex;
  if (hex.length % 2 !== 0) throw new Error('hex must have length that is multiple of 2');
  const arr = new Uint8Array(hex.length / 2);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(hex.substr(i * 2, 2), 16);
  }

  return arr;
}
const UTF_8_DECODER = new TextDecoder();
/**
 * Returns the URI representation of the content hash for supported codecs
 * @param contenthash to decode
 */

function contenthashToUri(contenthash) {
  const buff = hexToUint8Array(contenthash);
  const codec = (0,external_multicodec_.getCodec)(buff); // the typing is wrong for @types/multicodec

  switch (codec) {
    case 'ipfs-ns':
      {
        const data = (0,external_multicodec_.rmPrefix)(buff);
        const cid = new (external_cids_default())(data);
        return `ipfs://${(0,external_multihashes_.toB58String)(cid.multihash)}`;
      }

    case 'ipns-ns':
      {
        const data = (0,external_multicodec_.rmPrefix)(buff);
        const cid = new (external_cids_default())(data);
        const multihash = (0,external_multihashes_.decode)(cid.multihash);

        if (multihash.name === 'identity') {
          return `ipns://${UTF_8_DECODER.decode(multihash.digest).trim()}`;
        } else {
          return `ipns://${(0,external_multihashes_.toB58String)(cid.multihash)}`;
        }
      }

    default:
      throw new Error(`Unrecognized codec: ${codec}`);
  }
}
;// CONCATENATED MODULE: ./src/functions/convert/uriToHttp.ts
/**
 * Given a URI that may be ipfs, ipns, http, or https protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */
function uriToHttp(uri) {
  var _uri$match, _uri$match2;

  const protocol = uri.split(':')[0].toLowerCase();

  switch (protocol) {
    case 'https':
      return [uri];

    case 'http':
      return ['https' + uri.substr(4), uri];

    case 'ipfs':
      const hash = (_uri$match = uri.match(/^ipfs:(\/\/)?(.*)$/i)) === null || _uri$match === void 0 ? void 0 : _uri$match[2];
      return [`https://cloudflare-ipfs.com/ipfs/${hash}/`, `https://ipfs.io/ipfs/${hash}/`];

    case 'ipns':
      const name = (_uri$match2 = uri.match(/^ipns:(\/\/)?(.*)$/i)) === null || _uri$match2 === void 0 ? void 0 : _uri$match2[2];
      return [`https://cloudflare-ipfs.com/ipns/${name}/`, `https://ipfs.io/ipns/${name}/`];

    default:
      return [];
  }
}
;// CONCATENATED MODULE: ./src/functions/convert/index.ts




/***/ }),

/***/ 1368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getCurrency)
/* harmony export */ });
/* unused harmony export USD_CURRENCY */
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6148);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__);


// Pricing currency
// TODO: Check decimals and finish table
const USD_CURRENCY = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: {
    address: _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.FLEXUSD_ADDRESS[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH],
    decimals: 18
  }
};
function getCurrency(chainId) {
  return USD_CURRENCY[chainId] || {
    address: _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.AddressZero,
    decimals: 18
  };
}

/***/ }),

/***/ 7553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hh": () => (/* reexport */ currencyId),
  "iN": () => (/* reexport */ maxAmountSpend),
  "Bv": () => (/* reexport */ wrappedCurrency/* unwrappedToken */.B)
});

// UNUSED EXPORTS: USD_CURRENCY, getCurrency

;// CONCATENATED MODULE: ./src/functions/currency/currencyId.ts
function currencyId(currency) {
  if (currency.isNative) return 'BCH';
  if (currency.isToken) return currency.address;
  throw new Error('invalid currency');
} // export function currencyId(
//   currency: Currency,
//   chainId = ChainId.MAINNET
// ): string {
//   if (currency === Currency.getNativeCurrency(chainId))
//     return Currency.getNativeCurrencySymbol(chainId);
//   if (currency instanceof Token) return currency.address;
//   throw new Error("invalid currency");
// }
// EXTERNAL MODULE: ./src/functions/currency/getCurrency.ts
var getCurrency = __webpack_require__(1368);
// EXTERNAL MODULE: ./src/functions/currency/wrappedCurrency.ts
var wrappedCurrency = __webpack_require__(9229);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
;// CONCATENATED MODULE: ./src/functions/currency/maxAmountSpend.ts

const MIN_NATIVE_CURRENCY_FOR_GAS = sdk_.JSBI.exponentiate(sdk_.JSBI.BigInt(10), sdk_.JSBI.BigInt(16)); // .01 ETH

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */

function maxAmountSpend(currencyAmount) {
  if (!currencyAmount) return undefined;

  if (currencyAmount.currency.isNative) {
    if (sdk_.JSBI.greaterThan(currencyAmount.quotient, MIN_NATIVE_CURRENCY_FOR_GAS)) {
      return sdk_.CurrencyAmount.fromRawAmount(currencyAmount.currency, sdk_.JSBI.subtract(currencyAmount.quotient, MIN_NATIVE_CURRENCY_FOR_GAS));
    } else {
      return sdk_.CurrencyAmount.fromRawAmount(currencyAmount.currency, sdk_.JSBI.BigInt(0));
    }
  }

  return currencyAmount;
}
;// CONCATENATED MODULE: ./src/functions/currency/index.ts





/***/ }),

/***/ 9229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ unwrappedToken)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);

function unwrappedToken(currency) {
  if (currency.isNative) return currency; // if (formattedChainId && currency.equals(WBCH_EXTENDED[formattedChainId]))
  //   return ExtendedEther.onChain(currency.chainId)

  if (currency.chainId in _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId && currency.equals(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[currency.chainId])) return _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[currency.chainId];
  return currency;
}

/***/ }),

/***/ 1302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ resolveENSContentHash),
/* harmony export */   "y": () => (/* binding */ parseENSAddress)
/* harmony export */ });
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4440);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1101);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_hash__WEBPACK_IMPORTED_MODULE_1__);


const REGISTRAR_ABI = [{
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'resolver',
  outputs: [{
    name: 'resolverAddress',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}];
const REGISTRAR_ADDRESS = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';
const RESOLVER_ABI = [{
  constant: true,
  inputs: [{
    internalType: 'bytes32',
    name: 'node',
    type: 'bytes32'
  }],
  name: 'contenthash',
  outputs: [{
    internalType: 'bytes',
    name: '',
    type: 'bytes'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}]; // cache the resolver contracts since most of them are the public resolver

function resolverContract(resolverAddress, provider) {
  return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__.Contract(resolverAddress, RESOLVER_ABI, provider);
}
/**
 * Fetches and decodes the result of an ENS contenthash lookup on mainnet to a URI
 * @param ensName to resolve
 * @param provider provider to use to fetch the data
 */


async function resolveENSContentHash(ensName, provider) {
  const ensRegistrarContract = new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__.Contract(REGISTRAR_ADDRESS, REGISTRAR_ABI, provider);
  const hash = (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_1__.namehash)(ensName);
  const resolverAddress = await ensRegistrarContract.resolver(hash);
  return resolverContract(resolverAddress, provider).contenthash(hash);
}
const ENS_NAME_REGEX = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;
function parseENSAddress(ensAddress) {
  const match = ensAddress.match(ENS_NAME_REGEX);
  if (!match) return undefined;
  return {
    ensName: `${match[1].toLowerCase()}eth`,
    ensPath: match[4]
  };
}

/***/ }),

/***/ 8277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xn": () => (/* binding */ shortenAddress),
/* harmony export */   "T3": () => (/* binding */ formatPercent),
/* harmony export */   "uf": () => (/* binding */ formatNumber),
/* harmony export */   "nH": () => (/* binding */ formatNumberScale),
/* harmony export */   "hr": () => (/* binding */ escapeRegExp),
/* harmony export */   "az": () => (/* binding */ formatBalance),
/* harmony export */   "ZO": () => (/* binding */ formatCurrencyAmount),
/* harmony export */   "s4": () => (/* binding */ formatDateAgo)
/* harmony export */ });
/* unused harmony exports capitalize, formatK, shortenString, formatPrice */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(685);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3756);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7398);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_address__WEBPACK_IMPORTED_MODULE_3__);
// CONVENTION formatFoo -> string




const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const formatK = value => {
  return numeral__WEBPACK_IMPORTED_MODULE_2___default()(value).format('0.[00]a');
}; // shorten the checksummed version of the input address to have 0x + 4 characters at start and end

function shortenAddress(address, chars = 4) {
  try {
    const parsed = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_3__.getAddress)(address);
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
  } catch (error) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
} // shorten string to its maximum length using three dots

function shortenString(string, length) {
  if (!string) return '';
  if (length < 5) return string;
  if (string.length <= length) return string;
  return string.slice(0, 4) + '...' + string.slice(string.length - length + 5, string.length);
} // using a currency library here in case we want to add more in future

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
function formatPercent(percentString) {
  const percent = parseFloat(percentString);

  if (!percent || percent === Infinity || percent === 0) {
    return '0%';
  }

  if (percent < 0.0001 && percent > 0) {
    return '< 0.0001%';
  }

  if (percent < 0 && percent > -0.0001) {
    return '< 0.0001%';
  }

  const fixedPercent = percent.toFixed(2);

  if (fixedPercent === '0.00') {
    return '0%';
  }

  if (Number(fixedPercent) > 0) {
    if (Number(fixedPercent) > 100) {
      return `${percent === null || percent === void 0 ? void 0 : percent.toFixed(0).toLocaleString()}%`;
    } else {
      return `${fixedPercent}%`;
    }
  } else {
    return `${fixedPercent}%`;
  }
}
const formatNumber = (number, usd = false, scale = true, decimals = 0) => {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0.00' : '0';
  }

  const num = parseFloat(number);

  if (num > 500000000 && scale) {
    return (usd ? '$' : '') + formatK(num.toFixed(decimals));
  }

  if (num === 0) {
    if (usd) {
      return '$0.00';
    }

    return '0';
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001';
  }

  if (num > 1000 || num < -1000) {
    return (num > 1000 ? '' : '-') + (usd ? '$' : '') + Number(parseFloat(String(Math.abs(num))).toFixed(decimals)).toLocaleString();
  }

  if (usd) {
    if (num < 0.1) {
      return '$' + Number(parseFloat(String(num)).toFixed(4));
    } else {
      const usdString = priceFormatter.format(num);
      return '$' + usdString.slice(1, usdString.length);
    }
  }

  return parseFloat(String(num)).toPrecision(4);
};
function formatNumberScale(number, usd = false) {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0.00' : '0';
  }

  const num = parseFloat(number);
  const wholeNumberLength = String(Math.floor(num)).length;
  if (wholeNumberLength >= 13) return (usd ? '$' : '') + (num / Math.pow(10, 12)).toFixed(1) + 'T';
  if (wholeNumberLength >= 10) return (usd ? '$' : '') + (num / Math.pow(10, 9)).toFixed(1) + 'B';
  if (wholeNumberLength >= 7) return (usd ? '$' : '') + (num / Math.pow(10, 6)).toFixed(1) + 'M';
  if (wholeNumberLength >= 4) return (usd ? '$' : '') + (num / Math.pow(10, 3)).toFixed(1) + 'K';

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001';
  }

  return (usd ? '$' : '') + num.toFixed(2);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const formatBalance = (value, decimals = 18, maxFraction = 0) => {
  const formatted = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.formatUnits)(value, decimals);

  if (maxFraction > 0) {
    const split = formatted.split('.');

    if (split.length > 1) {
      return split[0] + '.' + split[1].substr(0, maxFraction);
    }
  }

  return formatted;
};
function formatCurrencyAmount(amount, sigFigs) {
  if (!amount) {
    return '-';
  }

  if (_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.equal(amount.quotient, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(0))) {
    return '0';
  }

  if (amount.divide(amount.decimalScale).lessThan(new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Fraction(1, 100000))) {
    return '<0.00001';
  }

  return amount.toSignificant(sigFigs);
}
function formatPrice(price, sigFigs) {
  if (!price) {
    return '-';
  }

  if (parseFloat(price.toFixed(sigFigs)) < 0.0001) {
    return '<0.0001';
  }

  return price.toSignificant(sigFigs);
}
function formatDateAgo(date) {
  const currentDate = new Date();
  const secondsAgo = Math.floor((currentDate.getTime() - date.getTime()) / 1000);
  if (secondsAgo < 60) return `${secondsAgo} Second${secondsAgo === 1 ? '' : 's'} Ago`;
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} Minute${secondsAgo / 120 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} Hour${secondsAgo / 7200 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 2592000) return `${Math.floor(secondsAgo / 86400)} Day${secondsAgo / 172800 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 31536000) return `${Math.floor(secondsAgo / 2592000)} Month${secondsAgo / 5184000 >= 1 ? 's' : ''} Ago`;
  return `${Math.floor(secondsAgo / 31536000)} Year${secondsAgo / 63072000 >= 1 ? 's' : ''} Ago`;
}

/***/ }),

/***/ 7735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hh": () => (/* reexport safe */ _currency__WEBPACK_IMPORTED_MODULE_1__.Hh),
/* harmony export */   "iN": () => (/* reexport safe */ _currency__WEBPACK_IMPORTED_MODULE_1__.iN),
/* harmony export */   "sN": () => (/* reexport safe */ _bentobox__WEBPACK_IMPORTED_MODULE_2__.s),
/* harmony export */   "hr": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.hr),
/* harmony export */   "az": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.az),
/* harmony export */   "ZO": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.ZO),
/* harmony export */   "s4": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.s4),
/* harmony export */   "uf": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.uf),
/* harmony export */   "nH": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.nH),
/* harmony export */   "T3": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.T3),
/* harmony export */   "Xn": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_5__.Xn),
/* harmony export */   "nj": () => (/* reexport safe */ _kashi__WEBPACK_IMPORTED_MODULE_6__.nj),
/* harmony export */   "am": () => (/* reexport safe */ _parse__WEBPACK_IMPORTED_MODULE_9__.a),
/* harmony export */   "eo": () => (/* reexport safe */ _parse__WEBPACK_IMPORTED_MODULE_9__.e),
/* harmony export */   "oX": () => (/* reexport safe */ _prices__WEBPACK_IMPORTED_MODULE_10__.oX),
/* harmony export */   "AK": () => (/* reexport safe */ _styling__WEBPACK_IMPORTED_MODULE_13__.A),
/* harmony export */   "UJ": () => (/* reexport safe */ _validate__WEBPACK_IMPORTED_MODULE_15__.UJ),
/* harmony export */   "Fr": () => (/* reexport safe */ _validate__WEBPACK_IMPORTED_MODULE_15__.Fr)
/* harmony export */ });
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7025);
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7553);
/* harmony import */ var _bentobox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4218);
/* harmony import */ var _ens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1302);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2222);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8277);
/* harmony import */ var _kashi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(834);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7284);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9247);
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7208);
/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1545);
/* harmony import */ var _rebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2271);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4162);
/* harmony import */ var _styling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1769);
/* harmony import */ var _trade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4113);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2556);



















/***/ }),

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mu": () => (/* binding */ accrue),
/* harmony export */   "zK": () => (/* binding */ accrueTotalAssetWithFee),
/* harmony export */   "FO": () => (/* binding */ interestAccrue),
/* harmony export */   "xM": () => (/* binding */ getUSDValue),
/* harmony export */   "Rm": () => (/* binding */ getUSDString),
/* harmony export */   "bi": () => (/* binding */ easyAmount),
/* harmony export */   "Ym": () => (/* binding */ takeFee),
/* harmony export */   "nj": () => (/* binding */ getFraction)
/* harmony export */ });
/* unused harmony export addBorrowFee */
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9247);
/* harmony import */ var _currency_getCurrency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1368);




function accrue(pair, amount, includePrincipal = false) {
  return amount.mul(pair.accrueInfo.interestPerSecond).mul(pair.elapsedSeconds).div((0,_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18)).add(includePrincipal ? amount : _math__WEBPACK_IMPORTED_MODULE_2__/* .ZERO */ .xE);
}
function accrueTotalAssetWithFee(pair) {
  const extraAmount = pair.totalBorrow.elastic.mul(pair.accrueInfo.interestPerSecond).mul(pair.elapsedSeconds.add('3600')) // Project an hour into the future
  .div((0,_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(18));
  const feeAmount = extraAmount.mul(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_FEE).div(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_FEE_DIVISOR); // % of interest paid goes to fee

  const feeFraction = feeAmount.mulDiv(pair.totalAsset.base, pair.currentAllAssets.value);
  return {
    elastic: pair.totalAsset.elastic,
    base: pair.totalAsset.base.add(feeFraction)
  };
}
function interestAccrue(pair, interest) {
  if (pair.totalBorrow.base.eq(0)) {
    return _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.STARTING_INTEREST_PER_YEAR;
  }

  if (pair.elapsedSeconds.lte(0)) {
    return interest;
  }

  let currentInterest = interest;

  if (pair.utilization.lt(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MINIMUM_TARGET_UTILIZATION)) {
    const underFactor = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MINIMUM_TARGET_UTILIZATION.sub(pair.utilization).mulDiv(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.FACTOR_PRECISION, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MINIMUM_TARGET_UTILIZATION);
    const scale = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.INTEREST_ELASTICITY.add(underFactor.mul(underFactor).mul(pair.elapsedSeconds));
    currentInterest = currentInterest.mul(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.INTEREST_ELASTICITY).div(scale);

    if (currentInterest.lt(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MINIMUM_INTEREST_PER_YEAR)) {
      currentInterest = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MINIMUM_INTEREST_PER_YEAR; // 0.25% APR minimum
    }
  } else if (pair.utilization.gt(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_TARGET_UTILIZATION)) {
    const overFactor = pair.utilization.sub(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_TARGET_UTILIZATION).mul(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.FACTOR_PRECISION.div(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.FULL_UTILIZATION_MINUS_MAX));
    const scale = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.INTEREST_ELASTICITY.add(overFactor.mul(overFactor).mul(pair.elapsedSeconds));
    currentInterest = currentInterest.mul(scale).div(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.INTEREST_ELASTICITY);

    if (currentInterest.gt(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_INTEREST_PER_YEAR)) {
      currentInterest = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_INTEREST_PER_YEAR; // 1000% APR maximum
    }
  }

  return currentInterest;
}
function getUSDValue(amount, token) {
  return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(amount).mul(token.usd).div((0,_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(token !== null && token !== void 0 && token.decimals ? token.decimals : token.tokenInfo.decimals));
}
function getUSDString(amount, token) {
  return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(amount).mul(token.usd).div((0,_math__WEBPACK_IMPORTED_MODULE_2__/* .e10 */ .TB)(token !== null && token !== void 0 && token.decimals ? token.decimals : token.tokenInfo.decimals)).toFixed((0,_currency_getCurrency__WEBPACK_IMPORTED_MODULE_3__/* .getCurrency */ .z)(token !== null && token !== void 0 && token.chainId ? token.chainId : token.tokenInfo.chainId).decimals);
}
function easyAmount(amount, token) {
  return {
    value: amount,
    string: amount.toFixed(token !== null && token !== void 0 && token.decimals ? token.decimals : token.tokenInfo.decimals),
    usdValue: getUSDValue(amount, token),
    usd: getUSDString(amount, token)
  };
}
function takeFee(amount) {
  return amount.mul(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(9)).div(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(10));
}
function addBorrowFee(amount) {
  return amount.mul(BigNumber.from(10005)).div(BigNumber.from(10000));
}
function getFraction({
  totalAssetBase,
  totalAssetElastic,
  totalBorrowElastic,
  token0: {
    totalSupplyBase,
    totalSupplyElastic
  }
}) {
  return totalAssetBase / (Number(totalAssetElastic) + totalBorrowElastic * totalSupplyBase / totalSupplyElastic);
}

/***/ }),

/***/ 7284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HJ": () => (/* binding */ getTokenList),
/* harmony export */   "MX": () => (/* binding */ sortByListPriority),
/* harmony export */   "ui": () => (/* binding */ listVersionLabel)
/* harmony export */ });
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7025);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7663);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_token_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5090);
/* harmony import */ var _ens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1302);
/* harmony import */ var _uniswap_token_lists_src_tokenlist_schema_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(475);





const tokenListValidator = new (ajv__WEBPACK_IMPORTED_MODULE_1___default())({
  allErrors: true
}).compile(_uniswap_token_lists_src_tokenlist_schema_json__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Contains the logic for resolving a list URL to a validated token list
 * @param listUrl list url
 * @param resolveENSContentHash resolves an ens name to a contenthash
 */

async function getTokenList(listUrl, resolveENSContentHash) {
  const parsedENS = (0,_ens__WEBPACK_IMPORTED_MODULE_3__/* .parseENSAddress */ .y)(listUrl);
  let urls;

  if (parsedENS) {
    var _parsedENS$ensPath;

    let contentHashUri;

    try {
      contentHashUri = await resolveENSContentHash(parsedENS.ensName);
    } catch (error) {
      console.debug(`Failed to resolve ENS name: ${parsedENS.ensName}`, error);
      throw new Error(`Failed to resolve ENS name: ${parsedENS.ensName}`);
    }

    let translatedUri;

    try {
      translatedUri = (0,_convert__WEBPACK_IMPORTED_MODULE_0__/* .contenthashToUri */ .il)(contentHashUri);
    } catch (error) {
      console.debug('Failed to translate contenthash to URI', contentHashUri);
      throw new Error(`Failed to translate contenthash to URI: ${contentHashUri}`);
    }

    urls = (0,_convert__WEBPACK_IMPORTED_MODULE_0__/* .uriToHttp */ .ie)(`${translatedUri}${(_parsedENS$ensPath = parsedENS.ensPath) !== null && _parsedENS$ensPath !== void 0 ? _parsedENS$ensPath : ''}`);
  } else {
    urls = (0,_convert__WEBPACK_IMPORTED_MODULE_0__/* .uriToHttp */ .ie)(listUrl);
  }

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const isLast = i === urls.length - 1;
    let response;

    try {
      response = await fetch(url);
    } catch (error) {
      console.debug('Failed to fetch list', listUrl, error);
      if (isLast) throw new Error(`Failed to download list ${listUrl}`);
      continue;
    }

    if (!response.ok) {
      if (isLast) throw new Error(`Failed to download list ${listUrl}`);
      continue;
    }

    const json = await response.json();

    if (!tokenListValidator(json)) {
      var _tokenListValidator$e, _tokenListValidator$e2;

      const validationErrors = (_tokenListValidator$e = (_tokenListValidator$e2 = tokenListValidator.errors) === null || _tokenListValidator$e2 === void 0 ? void 0 : _tokenListValidator$e2.reduce((memo, error) => {
        var _error$message;

        const add = `${error.dataPath} ${(_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : ''}`;
        return memo.length > 0 ? `${memo}; ${add}` : `${add}`;
      }, '')) !== null && _tokenListValidator$e !== void 0 ? _tokenListValidator$e : 'unknown error';
      throw new Error(`Token list failed validation: ${validationErrors}`);
    }

    return json;
  }

  throw new Error('Unrecognized list URL protocol.');
} // use ordering of default list of lists to assign priority

function sortByListPriority(urlA, urlB) {
  const first = _config_token_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.includes */ .Lx.includes(urlA) ? _config_token_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.indexOf */ .Lx.indexOf(urlA) : Number.MAX_SAFE_INTEGER;
  const second = _config_token_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.includes */ .Lx.includes(urlB) ? _config_token_lists__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LIST_OF_LISTS.indexOf */ .Lx.indexOf(urlB) : Number.MAX_SAFE_INTEGER; // need reverse order to make sure mapping includes top priority last

  if (first < second) return 1;else if (first > second) return -1;
  return 0;
}
function listVersionLabel(version) {
  return `v${version.major}.${version.minor}.${version.patch}`;
}

/***/ }),

/***/ 9247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xE": () => (/* binding */ ZERO),
/* harmony export */   "TB": () => (/* binding */ e10),
/* harmony export */   "LT": () => (/* binding */ minimum),
/* harmony export */   "gW": () => (/* binding */ maximum)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);

const ZERO = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from('0');
function e10(exponent) {
  return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from('10').pow(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(exponent));
}
function minimum(...values) {
  let lowest = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(values[0]);

  for (let i = 1; i < values.length; i++) {
    const value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(values[i]);

    if (value.lt(lowest)) {
      lowest = value;
    }
  }

  return lowest;
}
function maximum(...values) {
  let highest = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(values[0]);

  for (let i = 1; i < values.length; i++) {
    const value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(values[i]);

    if (value.gt(highest)) {
      highest = value;
    }
  }

  return highest;
}

/***/ }),

/***/ 7208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ parseBalance),
/* harmony export */   "e": () => (/* binding */ tryParseAmount)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(685);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);


function parseBalance(value, decimals = 18) {
  return (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.parseUnits)(value || '0', decimals);
} // try to parse a user entered amount for a given token

function tryParseAmount(value, currency) {
  if (!value || !currency) {
    return undefined;
  }

  try {
    const typedValueParsed = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.parseUnits)(value, currency.decimals).toString();

    if (typedValueParsed !== '0') {
      return _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(currency, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(typedValueParsed));
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.debug(`Failed to parse input amount: "${value}"`, error);
  } // necessary for all paths to return a value


  return undefined;
}

/***/ }),

/***/ 1545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GS": () => (/* binding */ computeRealizedLPFeePercent),
/* harmony export */   "oX": () => (/* binding */ warningSeverity)
/* harmony export */ });
/* unused harmony exports formatExecutionPrice, computeRealizedLPFeeAmount */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8532);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__);


const THIRTY_BIPS_FEE = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(30), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(10000));
const ONE_HUNDRED_PERCENT = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(10000), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(10000));
const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(THIRTY_BIPS_FEE);
const TWENTY_FIVE_BIPS_FEE = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(25), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(10000));
const FIVE_BIPS_FEE = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Percent(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(5), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.BigInt(10000));
function formatExecutionPrice(trade, inverted, chainId) {
  if (!trade) {
    return '';
  }

  return inverted ? `${trade.executionPrice.invert().toSignificant(6)} ${trade.inputAmount.currency.symbol} / ${trade.outputAmount.currency.symbol}` : `${trade.executionPrice.toSignificant(6)} ${trade.outputAmount.currency.symbol} / ${trade.inputAmount.currency.symbol}`;
} // computes realized lp fee as a percent

function computeRealizedLPFeePercent(trade) {
  let percent;

  if (trade instanceof _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Trade) {
    // for each hop in our trade, take away the x*y=k price impact from 0.3% fees
    // e.g. for 3 tokens/2 hops: 1 - ((1 - .03) * (1-.03))
    percent = ONE_HUNDRED_PERCENT.subtract(trade.route.pairs.reduce(currentFee => currentFee.multiply(INPUT_FRACTION_AFTER_FEE), ONE_HUNDRED_PERCENT));
  }

  return new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Percent(percent.numerator, percent.denominator);
} // computes price breakdown for the trade

function computeRealizedLPFeeAmount(trade) {
  if (trade) {
    const realizedLPFee = computeRealizedLPFeePercent(trade); // the amount of the input that accrues to LPs

    return CurrencyAmount.fromRawAmount(trade.inputAmount.currency, trade.inputAmount.multiply(realizedLPFee).quotient);
  }

  return undefined;
}
const IMPACT_TIERS = [_constants__WEBPACK_IMPORTED_MODULE_0__/* .BLOCKED_PRICE_IMPACT_NON_EXPERT */ .lN, _constants__WEBPACK_IMPORTED_MODULE_0__/* .ALLOWED_PRICE_IMPACT_HIGH */ .Uf, _constants__WEBPACK_IMPORTED_MODULE_0__/* .ALLOWED_PRICE_IMPACT_MEDIUM */ .p9, _constants__WEBPACK_IMPORTED_MODULE_0__/* .ALLOWED_PRICE_IMPACT_LOW */ .Bz];
function warningSeverity(priceImpact) {
  if (!priceImpact) return 4;
  let impact = IMPACT_TIERS.length;

  for (const impactLevel of IMPACT_TIERS) {
    if (impactLevel.lessThan(priceImpact)) return impact;
    impact--;
  }

  return 0;
}

/***/ }),

/***/ 2271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ toElastic)
/* harmony export */ });
/* unused harmony export rebase */
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);

function rebase(value, from, to) {
  return from ? value.mul(to).div(from) : BigNumber.from(0);
}
function toElastic(total, base, roundUp) {
  let elastic;

  if (total.base.eq(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(0))) {
    elastic = base;
  } else {
    elastic = base.mul(total.elastic).div(total.base);

    if (roundUp && elastic.mul(total.base).div(total.elastic).lt(base)) {
      elastic = elastic.add(1);
    }
  }

  return elastic;
}

/***/ }),

/***/ 4162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s1": () => (/* binding */ RetryableError),
/* harmony export */   "XD": () => (/* binding */ retry)
/* harmony export */ });
/* unused harmony export CancelledError */
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitRandom(min, max) {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */


class CancelledError extends Error {
  constructor() {
    super('Cancelled');

    _defineProperty(this, "isCancelledError", true);
  }

}
/**
 * Throw this error if the function should retry
 */

class RetryableError extends Error {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "isRetryableError", true);
  }

}

/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
function retry(fn, {
  n,
  minWait,
  maxWait
}) {
  let completed = false;
  let rejectCancelled;
  const promise = new Promise(async (resolve, reject) => {
    rejectCancelled = reject;

    while (true) {
      let result;

      try {
        result = await fn();

        if (!completed) {
          resolve(result);
          completed = true;
        }

        break;
      } catch (error) {
        if (completed) {
          break;
        }

        if (n <= 0 || !error.isRetryableError) {
          reject(error);
          completed = true;
          break;
        }

        n--;
      }

      await waitRandom(minWait, maxWait);
    }
  });
  return {
    promise,
    cancel: () => {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    }
  };
}

/***/ }),

/***/ 1769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/***/ }),

/***/ 4113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_B": () => (/* binding */ isTradeBetter),
/* harmony export */   "yC": () => (/* binding */ calculateGasMargin),
/* harmony export */   "o3": () => (/* binding */ getGasPrice),
/* harmony export */   "uc": () => (/* binding */ calculateSlippageAmount),
/* harmony export */   "Ld": () => (/* binding */ computeFiatValuePriceImpact)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8532);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__);


 // returns whether tradeB is better than tradeA by at least a threshold percentage amount

function isTradeBetter(tradeA, tradeB, minimumDelta = _constants__WEBPACK_IMPORTED_MODULE_1__/* .ZERO_PERCENT */ .qN) {
  if (tradeA && !tradeB) return false;
  if (tradeB && !tradeA) return true;
  if (!tradeA || !tradeB) return undefined;

  if (tradeA.tradeType !== tradeB.tradeType || !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) || !tradeB.outputAmount.currency.equals(tradeB.outputAmount.currency)) {
    throw new Error('Comparing incomparable trades');
  }

  if (minimumDelta.equalTo(_constants__WEBPACK_IMPORTED_MODULE_1__/* .ZERO_PERCENT */ .qN)) {
    return tradeA.executionPrice.lessThan(tradeB.executionPrice);
  } else {
    return tradeA.executionPrice.asFraction.multiply(minimumDelta.add(_constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_HUNDRED_PERCENT */ .yC)).lessThan(tradeB.executionPrice);
  }
} // add 20%

function calculateGasMargin(value) {
  return value.mul(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(10000 + 2000)).div(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(10000));
} // hardcoded for smartbch

function getGasPrice() {
  return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(1050000000);
}
const ONE = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Fraction(1, 1);
function calculateSlippageAmount(value, slippage) {
  if (slippage.lessThan(0) || slippage.greaterThan(ONE)) throw new Error('Unexpected slippage');
  return [value.multiply(ONE.subtract(slippage)).quotient, value.multiply(ONE.add(slippage)).quotient];
}
function computeFiatValuePriceImpact(fiatValueInput, fiatValueOutput) {
  if (!fiatValueOutput || !fiatValueInput) return undefined;
  if (!fiatValueInput.currency.equals(fiatValueOutput.currency)) return undefined;
  if (_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.equal(fiatValueInput.quotient, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(0))) return undefined;
  const pct = _constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_HUNDRED_PERCENT.subtract */ .yC.subtract(fiatValueOutput.divide(fiatValueInput));
  return new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Percent(pct.numerator, pct.denominator);
}

/***/ }),

/***/ 2556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fr": () => (/* binding */ isZero),
/* harmony export */   "O2": () => (/* binding */ isEmptyValue),
/* harmony export */   "UJ": () => (/* binding */ isAddress),
/* harmony export */   "wK": () => (/* binding */ isTokenOnList)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7398);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__);
// CONVENTION isFoo -> boolean


/**
 * Returns true if the string value is zero in hex
 * @param hexNumberString
 */

function isZero(hexNumberString) {
  return /^0x0*$/.test(hexNumberString);
}
const isEmptyValue = text => _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.isBigNumber(text) ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(text).isZero() : text === '' || text.replace(/0/g, '').replace(/\./, '') === ''; // returns the checksummed address if the address is valid, otherwise returns false

function isAddress(value) {
  try {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)(value);
  } catch {
    return false;
  }
}
function isTokenOnList(tokenAddressMap, token) {
  var _tokenAddressMap$toke;

  return Boolean((token === null || token === void 0 ? void 0 : token.isToken) && ((_tokenAddressMap$toke = tokenAddressMap[token.chainId]) === null || _tokenAddressMap$toke === void 0 ? void 0 : _tokenAddressMap$toke[token.address]));
}

/***/ })

};
;
//# sourceMappingURL=7735.js.map