"use strict";
exports.id = 4779;
exports.ids = [4779];
exports.modules = {

/***/ 5899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ki": () => (/* binding */ createTokenFilterFunction),
/* harmony export */   "ls": () => (/* binding */ filterTokens),
/* harmony export */   "T2": () => (/* binding */ useSortedTokensByQuery)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2556);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const alwaysTrue = () => true;
/**
 * Create a filter function to apply to a token for whether it matches a particular search query
 * @param search the search query to apply to the token
 */


function createTokenFilterFunction(search) {
  const searchingAddress = (0,_validate__WEBPACK_IMPORTED_MODULE_0__/* .isAddress */ .UJ)(search);

  if (searchingAddress) {
    const lower = searchingAddress.toLowerCase();
    return t => 'isToken' in t ? searchingAddress === t.address : lower === t.address.toLowerCase();
  }

  const lowerSearchParts = search.toLowerCase().split(/\s+/).filter(s => s.length > 0);
  if (lowerSearchParts.length === 0) return alwaysTrue;

  const matchesSearch = s => {
    const sParts = s.toLowerCase().split(/\s+/).filter(s => s.length > 0);
    return lowerSearchParts.every(p => p.length === 0 || sParts.some(sp => sp.startsWith(p) || sp.endsWith(p)));
  };

  return ({
    name,
    symbol
  }) => Boolean(symbol && matchesSearch(symbol) || name && matchesSearch(name));
}
function filterTokens(tokens, search) {
  return tokens.filter(createTokenFilterFunction(search));
}
function useSortedTokensByQuery(tokens, searchQuery) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!tokens) {
      return [];
    }

    const symbolMatch = searchQuery.toLowerCase().split(/\s+/).filter(s => s.length > 0);

    if (symbolMatch.length > 1) {
      return tokens;
    }

    const exactMatches = [];
    const symbolSubtrings = [];
    const rest = []; // sort tokens by exact match -> subtring on symbol match -> rest

    tokens.map(token => {
      var _token$symbol, _token$symbol2;

      if (((_token$symbol = token.symbol) === null || _token$symbol === void 0 ? void 0 : _token$symbol.toLowerCase()) === symbolMatch[0]) {
        return exactMatches.push(token);
      } else if ((_token$symbol2 = token.symbol) !== null && _token$symbol2 !== void 0 && _token$symbol2.toLowerCase().startsWith(searchQuery.toLowerCase().trim())) {
        return symbolSubtrings.push(token);
      } else {
        return rest.push(token);
      }
    });
    return [...exactMatches, ...symbolSubtrings, ...rest];
  }, [tokens, searchQuery]);
}

/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e_": () => (/* binding */ useAllTokens),
/* harmony export */   "l6": () => (/* binding */ useUnsupportedTokens),
/* harmony export */   "S5": () => (/* binding */ useSearchInactiveTokenLists),
/* harmony export */   "ZN": () => (/* binding */ useIsTokenActive),
/* harmony export */   "EH": () => (/* binding */ useIsUserAddedToken),
/* harmony export */   "dQ": () => (/* binding */ useToken),
/* harmony export */   "U8": () => (/* binding */ useCurrency)
/* harmony export */ });
/* unused harmony export useTokens */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(879);
/* harmony import */ var _state_lists_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1909);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6419);
/* harmony import */ var _state_lists_wrappedTokenInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2045);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4103);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_filtering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5899);
/* harmony import */ var _functions_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2556);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8890);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_strings__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8269);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(181);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // reduce token map into standard address <-> Token mapping, optionally include user added tokens

function useTokensFromMap(tokenMap, includeUserAdded) {
  const {
    chainId
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__/* .useActiveWeb3React */ .a)();
  const userAddedTokens = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useUserAddedTokens */ .em)();
  return (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(() => {
    if (!chainId) return {};

    if (typeof tokenMap[chainId] === 'undefined') {
      return {};
    } // reduce to just tokens


    const mapWithoutUrls = Object.keys(tokenMap[chainId]).reduce((newMap, address) => {
      newMap[address] = tokenMap[chainId][address].token;
      return newMap;
    }, {});

    if (includeUserAdded) {
      return userAddedTokens // reduce into all ALL_TOKENS filtered by the current chain
      .reduce((tokenMap, token) => {
        tokenMap[token.address] = token;
        return tokenMap;
      }, // must make a copy because reduce modifies the map, and we do not
      // want to make a copy in every iteration
      _objectSpread({}, mapWithoutUrls));
    }

    return mapWithoutUrls;
  }, [chainId, userAddedTokens, tokenMap, includeUserAdded]);
}

function useAllTokens() {
  const allTokens = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCombinedActiveList */ .z0)();
  return useTokensFromMap(allTokens, true);
}
function useTokens() {
  const allTokens = useCombinedActiveList();
  return useTokensFromMap(allTokens, false);
}
function useUnsupportedTokens() {
  const unsupportedTokensMap = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useUnsupportedTokenList */ .Rx)();
  return useTokensFromMap(unsupportedTokensMap, false);
}
function useSearchInactiveTokenLists(search, minResults = 10) {
  const lists = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAllLists */ .R0)();
  const inactiveUrls = (0,_state_lists_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useInactiveListUrls */ .eu)();
  const {
    chainId
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__/* .useActiveWeb3React */ .a)();
  const activeTokens = useAllTokens();
  return (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(() => {
    if (!search || search.trim().length === 0) return [];
    const tokenFilter = (0,_functions_filtering__WEBPACK_IMPORTED_MODULE_6__/* .createTokenFilterFunction */ .Ki)(search);
    const result = [];
    const addressSet = {};

    for (const url of inactiveUrls) {
      const list = lists[url].current;
      if (!list) continue;

      for (const tokenInfo of list.tokens) {
        if (tokenInfo.chainId === chainId && tokenFilter(tokenInfo)) {
          const wrapped = new _state_lists_wrappedTokenInfo__WEBPACK_IMPORTED_MODULE_4__/* .WrappedTokenInfo */ .D(tokenInfo, list);

          if (!(wrapped.address in activeTokens) && !addressSet[wrapped.address]) {
            addressSet[wrapped.address] = true;
            result.push(wrapped);
            if (result.length >= minResults) return result;
          }
        }
      }
    }

    return result;
  }, [activeTokens, chainId, inactiveUrls, lists, minResults, search]);
}
function useIsTokenActive(token) {
  const activeTokens = useAllTokens();

  if (!activeTokens || !token) {
    return false;
  }

  return !!activeTokens[token.address];
} // Check if currency is included in custom list from user storage

function useIsUserAddedToken(currency) {
  const userAddedTokens = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useUserAddedTokens */ .em)();

  if (!currency) {
    return false;
  }

  return !!userAddedTokens.find(token => currency.equals(token));
} // parse a name or symbol from a token response

const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/;

function parseStringOrBytes32(str, bytes32, defaultValue) {
  return str && str.length > 0 ? str : // need to check for proper bytes string and valid terminator
  bytes32 && BYTES32_REGEX.test(bytes32) && (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.arrayify)(bytes32)[31] === 0 ? (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_8__.parseBytes32String)(bytes32) : defaultValue;
} // undefined if invalid or does not exist
// null if loading
// otherwise returns the token


function useToken(tokenAddress) {
  const {
    chainId
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__/* .useActiveWeb3React */ .a)();
  const tokens = useAllTokens();
  const address = (0,_functions_validate__WEBPACK_IMPORTED_MODULE_7__/* .isAddress */ .UJ)(tokenAddress);
  const tokenContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useTokenContract */ .Ib)(address ? address : undefined, false);
  const tokenContractBytes32 = (0,_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useBytes32TokenContract */ .gs)(address ? address : undefined, false);
  const token = address ? tokens[address] : undefined;
  const tokenName = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContract, 'name', undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .NEVER_RELOAD */ .DB);
  const tokenNameBytes32 = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContractBytes32, 'name', undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .NEVER_RELOAD */ .DB);
  const symbol = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContract, 'symbol', undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .NEVER_RELOAD */ .DB);
  const symbolBytes32 = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContractBytes32, 'symbol', undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .NEVER_RELOAD */ .DB);
  const decimals = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSingleCallResult */ .Wk)(token ? undefined : tokenContract, 'decimals', undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .NEVER_RELOAD */ .DB);
  return (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(() => {
    if (token) return token;
    if (!chainId || !address) return undefined;
    if (decimals.loading || symbol.loading || tokenName.loading) return null;

    if (decimals.result) {
      var _symbol$result, _symbolBytes32$result, _tokenName$result, _tokenNameBytes32$res;

      return new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Token(chainId, address, decimals.result[0], parseStringOrBytes32((_symbol$result = symbol.result) === null || _symbol$result === void 0 ? void 0 : _symbol$result[0], (_symbolBytes32$result = symbolBytes32.result) === null || _symbolBytes32$result === void 0 ? void 0 : _symbolBytes32$result[0], 'UNKNOWN'), parseStringOrBytes32((_tokenName$result = tokenName.result) === null || _tokenName$result === void 0 ? void 0 : _tokenName$result[0], (_tokenNameBytes32$res = tokenNameBytes32.result) === null || _tokenNameBytes32$res === void 0 ? void 0 : _tokenNameBytes32$res[0], 'Unknown Token'));
    }

    return undefined;
  }, [address, chainId, decimals.loading, decimals.result, symbol.loading, symbol.result, symbolBytes32.result, token, tokenName.loading, tokenName.result, tokenNameBytes32.result]);
}
function useCurrency(currencyId) {
  var _currencyId, _wnative$address, _currencyId2;

  const {
    chainId
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_9__/* .useActiveWeb3React */ .a)();
  const useNative = ((_currencyId = currencyId) === null || _currencyId === void 0 ? void 0 : _currencyId.toUpperCase()) === 'BCH';

  if (useNative) {
    currencyId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE_ADDRESS[chainId];
  }

  const token = useToken(useNative ? undefined : currencyId); // const extendedEther = useMemo(() => (chainId ? ExtendedEther.onChain(chainId) : undefined), [chainId])
  // const weth = chainId ? WBCH_EXTENDED[chainId] : undefined

  const native = (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(() => chainId ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId] : undefined, [chainId]);
  if (useNative) return native;
  const wnative = chainId ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.WNATIVE[chainId] : undefined;
  if ((wnative === null || wnative === void 0 ? void 0 : (_wnative$address = wnative.address) === null || _wnative$address === void 0 ? void 0 : _wnative$address.toLowerCase()) === ((_currencyId2 = currencyId) === null || _currencyId2 === void 0 ? void 0 : _currencyId2.toLowerCase())) return wnative;
  return token;
}

/***/ }),

/***/ 1909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v0": () => (/* binding */ useActiveListUrls),
  "R0": () => (/* binding */ useAllLists),
  "z0": () => (/* binding */ useCombinedActiveList),
  "eu": () => (/* binding */ useInactiveListUrls),
  "EF": () => (/* binding */ useIsListActive),
  "Rx": () => (/* binding */ useUnsupportedTokenList)
});

// UNUSED EXPORTS: listToTokenMap

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./node_modules/@mistswapdex/default-token-list/build/mistswap-default.tokenlist.json
var mistswap_default_tokenlist = __webpack_require__(2059);
// EXTERNAL MODULE: ./src/config/token-lists.ts
var token_lists = __webpack_require__(5090);
;// CONCATENATED MODULE: ./src/constants/token-lists/mistswap-v2-unsupported.tokenlist.json
const mistswap_v2_unsupported_tokenlist_namespaceObject = JSON.parse('{"name":"MistSwap V2 Unsupported List","timestamp":"2021-10-27T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["uniswap","unsupported"],"tokens":[]}');
// EXTERNAL MODULE: ./src/state/lists/wrappedTokenInfo.ts
var wrappedTokenInfo = __webpack_require__(2045);
// EXTERNAL MODULE: ./src/functions/list.ts
var list = __webpack_require__(7284);
// EXTERNAL MODULE: ./src/state/hooks.ts
var hooks = __webpack_require__(9268);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/state/lists/hooks.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const listCache = typeof WeakMap !== 'undefined' ? new WeakMap() : null;
function listToTokenMap(list) {
  const result = listCache === null || listCache === void 0 ? void 0 : listCache.get(list);
  if (result) return result;
  const map = list.tokens.reduce((tokenMap, tokenInfo) => {
    var _tokenMap$token$chain;

    const token = new wrappedTokenInfo/* WrappedTokenInfo */.D(tokenInfo, list);

    if (((_tokenMap$token$chain = tokenMap[token.chainId]) === null || _tokenMap$token$chain === void 0 ? void 0 : _tokenMap$token$chain[token.address]) !== undefined) {
      console.error(new Error(`Duplicate token! ${token.address}`));
      return tokenMap;
    }

    return _objectSpread(_objectSpread({}, tokenMap), {}, {
      [token.chainId]: _objectSpread(_objectSpread({}, tokenMap[token.chainId]), {}, {
        [token.address]: {
          token,
          list
        }
      })
    });
  }, {});
  listCache === null || listCache === void 0 ? void 0 : listCache.set(list, map);
  return map;
}
const TRANSFORMED_DEFAULT_TOKEN_LIST = listToTokenMap(mistswap_default_tokenlist);
function useAllLists() {
  return (0,hooks/* useAppSelector */.C)(state => state.lists.byUrl);
}

function combineMaps(map1, map2) {
  return {
    [sdk_.ChainId.SMARTBCH]: _objectSpread(_objectSpread({}, map1[sdk_.ChainId.SMARTBCH]), map2[sdk_.ChainId.SMARTBCH]),
    [sdk_.ChainId.SMARTBCH_AMBER]: _objectSpread(_objectSpread({}, map1[sdk_.ChainId.SMARTBCH_AMBER]), map2[sdk_.ChainId.SMARTBCH_AMBER])
  };
} // merge tokens contained within lists from urls


function useCombinedTokenMapFromUrls(urls) {
  const lists = useAllLists();
  return (0,external_react_.useMemo)(() => {
    if (!urls) return {};
    return urls.slice() // sort by priority so top priority goes last
    .sort(list/* sortByListPriority */.MX).reduce((allTokens, currentUrl) => {
      var _lists$currentUrl;

      const current = (_lists$currentUrl = lists[currentUrl]) === null || _lists$currentUrl === void 0 ? void 0 : _lists$currentUrl.current;
      if (!current) return allTokens;

      try {
        return combineMaps(allTokens, listToTokenMap(current));
      } catch (error) {
        console.error('Could not show token list due to error', error);
        return allTokens;
      }
    }, {});
  }, [lists, urls]);
} // filter out unsupported lists


function useActiveListUrls() {
  var _useAppSelector;

  return (_useAppSelector = (0,hooks/* useAppSelector */.C)(state => state.lists.activeListUrls)) === null || _useAppSelector === void 0 ? void 0 : _useAppSelector.filter(url => !token_lists/* UNSUPPORTED_LIST_URLS.includes */.US.includes(url));
}
function useInactiveListUrls() {
  const lists = useAllLists();
  const allActiveListUrls = useActiveListUrls();
  return Object.keys(lists).filter(url => !(allActiveListUrls !== null && allActiveListUrls !== void 0 && allActiveListUrls.includes(url)) && !token_lists/* UNSUPPORTED_LIST_URLS.includes */.US.includes(url));
} // get all the tokens from active lists, combine with local default tokens

function useCombinedActiveList() {
  const activeListUrls = useActiveListUrls();
  const activeTokens = useCombinedTokenMapFromUrls(activeListUrls);
  return combineMaps(activeTokens, TRANSFORMED_DEFAULT_TOKEN_LIST);
} // list of tokens not supported on interface, used to show warnings and prevent swaps and adds

function useUnsupportedTokenList() {
  // get hard coded unsupported tokens
  const localUnsupportedListMap = listToTokenMap(mistswap_v2_unsupported_tokenlist_namespaceObject); // get any loaded unsupported tokens

  const loadedUnsupportedListMap = useCombinedTokenMapFromUrls(token_lists/* UNSUPPORTED_LIST_URLS */.US); // format into one token address map

  return (0,external_react_.useMemo)(() => combineMaps(localUnsupportedListMap, loadedUnsupportedListMap), [localUnsupportedListMap, loadedUnsupportedListMap]);
}
function useIsListActive(url) {
  const activeListUrls = useActiveListUrls();
  return Boolean(activeListUrls === null || activeListUrls === void 0 ? void 0 : activeListUrls.includes(url));
}

/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ WrappedTokenInfo)
/* harmony export */ });
/* harmony import */ var _functions_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2556);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Token instances created from token info on a token list.
 */
class WrappedTokenInfo {
  constructor(tokenInfo, list) {
    _defineProperty(this, "isNative", false);

    _defineProperty(this, "isToken", true);

    _defineProperty(this, "list", void 0);

    _defineProperty(this, "tokenInfo", void 0);

    _defineProperty(this, "_checksummedAddress", null);

    _defineProperty(this, "_tags", null);

    this.tokenInfo = tokenInfo;
    this.list = list;
  }

  get address() {
    if (this._checksummedAddress) return this._checksummedAddress;
    const checksummedAddress = (0,_functions_validate__WEBPACK_IMPORTED_MODULE_0__/* .isAddress */ .UJ)(this.tokenInfo.address);
    if (!checksummedAddress) throw new Error(`Invalid token address: ${this.tokenInfo.address}`);
    return this._checksummedAddress = checksummedAddress;
  }

  get chainId() {
    return this.tokenInfo.chainId;
  }

  get decimals() {
    return this.tokenInfo.decimals;
  }

  get name() {
    return this.tokenInfo.name;
  }

  get symbol() {
    return this.tokenInfo.symbol;
  }

  get logoURI() {
    return this.tokenInfo.logoURI;
  }

  get tags() {
    if (this._tags !== null) return this._tags;
    if (!this.tokenInfo.tags) return this._tags = [];
    const listTags = this.list.tags;
    if (!listTags) return this._tags = [];
    return this._tags = this.tokenInfo.tags.map(tagId => {
      return _objectSpread(_objectSpread({}, listTags[tagId]), {}, {
        id: tagId
      });
    });
  }

  equals(other) {
    return other.chainId === this.chainId && other.isToken && other.address.toLowerCase() === this.address.toLowerCase();
  }

  sortsBefore(other) {
    if (this.equals(other)) throw new Error('Addresses should not be equal');
    return this.address.toLowerCase() < other.address.toLowerCase();
  }

  get wrapped() {
    return this;
  }

}

/***/ }),

/***/ 8887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_I": () => (/* binding */ updateMatchesDarkMode),
/* harmony export */   "vP": () => (/* binding */ updateUserDarkMode),
/* harmony export */   "Fq": () => (/* binding */ updateUserFarmFilter),
/* harmony export */   "zv": () => (/* binding */ updateUserExpertMode),
/* harmony export */   "fO": () => (/* binding */ updateUserSingleHopOnly),
/* harmony export */   "rQ": () => (/* binding */ updateUserSlippageTolerance),
/* harmony export */   "gw": () => (/* binding */ updateUserDeadline),
/* harmony export */   "eg": () => (/* binding */ addSerializedToken),
/* harmony export */   "zQ": () => (/* binding */ removeSerializedToken),
/* harmony export */   "f9": () => (/* binding */ addSerializedPair),
/* harmony export */   "cd": () => (/* binding */ removeSerializedPair),
/* harmony export */   "ZU": () => (/* binding */ toggleURLWarning),
/* harmony export */   "WZ": () => (/* binding */ updateUserArcherUseRelay),
/* harmony export */   "HI": () => (/* binding */ updateUserArcherGasPrice),
/* harmony export */   "Z_": () => (/* binding */ updateUserArcherETHTip),
/* harmony export */   "N1": () => (/* binding */ updateUserArcherGasEstimate),
/* harmony export */   "NL": () => (/* binding */ updateUserArcherTipManualOverride)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const updateMatchesDarkMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateMatchesDarkMode');
const updateUserDarkMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserDarkMode');
const updateUserFarmFilter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserFarmFilter');
const updateUserExpertMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserExpertMode');
const updateUserSingleHopOnly = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserSingleHopOnly');
const updateUserSlippageTolerance = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserSlippageTolerance');
const updateUserDeadline = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserDeadline');
const addSerializedToken = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/addSerializedToken');
const removeSerializedToken = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/removeSerializedToken');
const addSerializedPair = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/addSerializedPair');
const removeSerializedPair = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/removeSerializedPair');
const toggleURLWarning = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('app/toggleURLWarning');
const updateUserArcherUseRelay = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserArcherUseRelay');
const updateUserArcherGasPrice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserArcherGasPrice');
const updateUserArcherETHTip = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserArcherETHTip');
const updateUserArcherGasEstimate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserArcherGasEstimate');
const updateUserArcherTipManualOverride = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('user/updateUserArcherTipManualOverride');

/***/ }),

/***/ 181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h6": () => (/* binding */ getFarmFilter),
/* harmony export */   "zq": () => (/* binding */ useUpdateFarmFilter),
/* harmony export */   "DG": () => (/* binding */ useExpertModeManager),
/* harmony export */   "RO": () => (/* binding */ useUserSingleHopOnly),
/* harmony export */   "Ow": () => (/* binding */ useSetUserSlippageTolerance),
/* harmony export */   "$2": () => (/* binding */ useUserSlippageTolerance),
/* harmony export */   "A6": () => (/* binding */ useUserTransactionTTL),
/* harmony export */   "_E": () => (/* binding */ useAddUserToken),
/* harmony export */   "QG": () => (/* binding */ useRemoveUserAddedToken),
/* harmony export */   "em": () => (/* binding */ useUserAddedTokens),
/* harmony export */   "uB": () => (/* binding */ usePairAdder),
/* harmony export */   "wm": () => (/* binding */ useURLWarningVisible),
/* harmony export */   "Ce": () => (/* binding */ toV2LiquidityToken),
/* harmony export */   "B3": () => (/* binding */ useTrackedTokenPairs),
/* harmony export */   "AC": () => (/* binding */ useUserArcherUseRelay),
/* harmony export */   "Yq": () => (/* binding */ useUserArcherGasPrice),
/* harmony export */   "bg": () => (/* binding */ useUserArcherETHTip),
/* harmony export */   "uK": () => (/* binding */ useUserArcherGasEstimate),
/* harmony export */   "j8": () => (/* binding */ useUserArcherTipManualOverride),
/* harmony export */   "eq": () => (/* binding */ useUserSlippageToleranceWithDefault)
/* harmony export */ });
/* unused harmony exports useIsDarkMode, useDarkModeManager, useIsExpertMode, useURLWarningToggle */
/* harmony import */ var _config_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5857);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8887);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3960);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8269);
/* harmony import */ var _hooks_Tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6269);










function serializeToken(token) {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name
  };
}

function deserializeToken(serializedToken) {
  return new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Token(serializedToken.chainId, serializedToken.address, serializedToken.decimals, serializedToken.symbol, serializedToken.name);
}

function useIsDarkMode() {
  const {
    userDarkMode,
    matchesDarkMode
  } = useAppSelector(({
    user: {
      matchesDarkMode,
      userDarkMode
    }
  }) => ({
    userDarkMode,
    matchesDarkMode
  }), shallowEqual);
  return userDarkMode === null ? matchesDarkMode : userDarkMode;
}
function useDarkModeManager() {
  const dispatch = useAppDispatch();
  const darkMode = useIsDarkMode();
  const toggleSetDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode({
      userDarkMode: !darkMode
    }));
  }, [darkMode, dispatch]);
  return [darkMode, toggleSetDarkMode];
}
function getFarmFilter() {
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(state => state.user.userFarmFilter);
}
function useUpdateFarmFilter() {
  // const dispatch = useAppDispatch()
  // dispatch(updateUserFarmFilter({ userFarmFilter: filter }))
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(filter => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserFarmFilter */ .Fq)({
      userFarmFilter: filter
    }));
  }, [dispatch]);
}
function useIsExpertMode() {
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(state => state.user.userExpertMode);
}
function useExpertModeManager() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  const expertMode = useIsExpertMode();
  const toggleSetExpertMode = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserExpertMode */ .zv)({
      userExpertMode: !expertMode
    }));
  }, [expertMode, dispatch]);
  return [expertMode, toggleSetExpertMode];
}
function useUserSingleHopOnly() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  const singleHopOnly = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(state => state.user.userSingleHopOnly);
  const setSingleHopOnly = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(newSingleHopOnly => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserSingleHopOnly */ .fO)({
      userSingleHopOnly: newSingleHopOnly
    }));
  }, [dispatch]);
  return [singleHopOnly, setSingleHopOnly];
}
function useSetUserSlippageTolerance() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(userSlippageTolerance => {
    let value;

    try {
      value = userSlippageTolerance === 'auto' ? 'auto' : _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.JSBI.toNumber(userSlippageTolerance.multiply(10000).quotient);
    } catch (error) {
      value = 'auto';
    }

    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserSlippageTolerance */ .rQ)({
      userSlippageTolerance: value
    }));
  }, [dispatch]);
}
/**
 * Return the user's slippage tolerance, from the redux store, and a function to update the slippage tolerance
 */

function useUserSlippageTolerance() {
  const userSlippageTolerance = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(state => {
    return state.user.userSlippageTolerance;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => userSlippageTolerance === 'auto' ? 'auto' : new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Percent(userSlippageTolerance, 10000), [userSlippageTolerance]);
}
function useUserTransactionTTL() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const userDeadline = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    return state.user.userDeadline;
  });
  const setUserDeadline = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(userDeadline => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserDeadline */ .gw)({
      userDeadline
    }));
  }, [dispatch]);
  return [userDeadline, setUserDeadline];
}
function useAddUserToken() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(token => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .addSerializedToken */ .eg)({
      serializedToken: serializeToken(token)
    }));
  }, [dispatch]);
}
function useRemoveUserAddedToken() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((chainId, address) => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .removeSerializedToken */ .zQ)({
      chainId,
      address
    }));
  }, [dispatch]);
}
function useUserAddedTokens() {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__/* .useActiveWeb3React */ .a)();
  const serializedTokensMap = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(({
    user: {
      tokens
    }
  }) => tokens);
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    var _serializedTokensMap$;

    if (!chainId) return [];
    return Object.values((_serializedTokensMap$ = serializedTokensMap === null || serializedTokensMap === void 0 ? void 0 : serializedTokensMap[chainId]) !== null && _serializedTokensMap$ !== void 0 ? _serializedTokensMap$ : {}).map(deserializeToken);
  }, [serializedTokensMap, chainId]);
}

function serializePair(pair) {
  return {
    token0: serializeToken(pair.token0),
    token1: serializeToken(pair.token1)
  };
}

function usePairAdder() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(pair => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .addSerializedPair */ .f9)({
      serializedPair: serializePair(pair)
    }));
  }, [dispatch]);
}
function useURLWarningVisible() {
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(state => state.user.URLWarningVisible);
}
function useURLWarningToggle() {
  const dispatch = useAppDispatch();
  return useCallback(() => dispatch(toggleURLWarning()), [dispatch]);
}
/**
 * Given two tokens return the liquidity token that represents its liquidity shares
 * @param tokenA one of the two tokens
 * @param tokenB the other token
 */

function toV2LiquidityToken([tokenA, tokenB]) {
  if (tokenA.chainId !== tokenB.chainId) throw new Error('Not matching chain IDs');
  if (tokenA.equals(tokenB)) throw new Error('Tokens cannot be equal');
  if (!_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.FACTORY_ADDRESS[tokenA.chainId]) throw new Error('No V2 factory address on this chain');
  return new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.Token(tokenA.chainId, (0,_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.computePairAddress)({
    factoryAddress: _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.FACTORY_ADDRESS[tokenA.chainId],
    tokenA,
    tokenB
  }), 18, 'UNI-V2', 'Uniswap V2');
}
/**
 * Returns all the pairs of tokens that are tracked by the user for the current chain ID.
 */

function useTrackedTokenPairs() {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_7__/* .useActiveWeb3React */ .a)();
  const tokens = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_8__/* .useAllTokens */ .e_)(); // pinned pairs

  const pinnedPairs = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    var _PINNED_PAIRS$chainId;

    return chainId ? (_PINNED_PAIRS$chainId = _config_routing__WEBPACK_IMPORTED_MODULE_0__/* .PINNED_PAIRS */ .Q8[chainId]) !== null && _PINNED_PAIRS$chainId !== void 0 ? _PINNED_PAIRS$chainId : [] : [];
  }, [chainId]); // pairs for every token against every base

  const generatedPairs = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => chainId ? lodash_flatMap__WEBPACK_IMPORTED_MODULE_6___default()(Object.keys(tokens), tokenAddress => {
    var _BASES_TO_TRACK_LIQUI;

    const token = tokens[tokenAddress]; // for each token on the current chain,

    return (// loop though all bases on the current chain
      ((_BASES_TO_TRACK_LIQUI = _config_routing__WEBPACK_IMPORTED_MODULE_0__/* .BASES_TO_TRACK_LIQUIDITY_FOR */ .xu[chainId]) !== null && _BASES_TO_TRACK_LIQUI !== void 0 ? _BASES_TO_TRACK_LIQUI : []).map(base => {
        if (base.address === token.address) {
          return null;
        } else {
          return [base, token];
        }
      }).filter(p => p !== null)
    );
  }) : [], [tokens, chainId]); // pairs saved by users

  const savedSerializedPairs = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(({
    user: {
      pairs
    }
  }) => pairs);
  const userPairs = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    if (!chainId || !savedSerializedPairs) return [];
    const forChain = savedSerializedPairs[chainId];
    if (!forChain) return [];
    return Object.keys(forChain).map(pairId => {
      return [deserializeToken(forChain[pairId].token0), deserializeToken(forChain[pairId].token1)];
    });
  }, [savedSerializedPairs, chainId]);
  const combinedList = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => userPairs.concat(generatedPairs).concat(pinnedPairs), [generatedPairs, pinnedPairs, userPairs]);
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    // dedupes pairs of tokens in the combined list
    const keyed = combinedList.reduce((memo, [tokenA, tokenB]) => {
      const sorted = tokenA.sortsBefore(tokenB);
      const key = sorted ? `${tokenA.address}:${tokenB.address}` : `${tokenB.address}:${tokenA.address}`;
      if (memo[key]) return memo;
      memo[key] = sorted ? [tokenA, tokenB] : [tokenB, tokenA];
      return memo;
    }, {});
    return Object.keys(keyed).map(key => keyed[key]);
  }, [combinedList]);
}
function useUserArcherUseRelay() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  const useRelay = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user.userArcherUseRelay);
  const setUseRelay = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(newUseRelay => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserArcherUseRelay */ .WZ)({
      userArcherUseRelay: newUseRelay
    }));
  }, [dispatch]);
  return [useRelay, setUseRelay];
}
function useUserArcherGasPrice() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  const userGasPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    return state.user.userArcherGasPrice;
  });
  const setUserGasPrice = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(newGasPrice => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserArcherGasPrice */ .HI)({
      userArcherGasPrice: newGasPrice
    }));
  }, [dispatch]);
  return [userGasPrice, setUserGasPrice];
}
function useUserArcherETHTip() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  const userETHTip = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    return state.user.userArcherETHTip;
  });
  const setUserETHTip = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(newETHTip => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserArcherETHTip */ .Z_)({
      userArcherETHTip: newETHTip
    }));
  }, [dispatch]);
  return [userETHTip, setUserETHTip];
}
function useUserArcherGasEstimate() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  const userGasEstimate = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    return state.user.userArcherGasEstimate;
  });
  const setUserGasEstimate = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(newGasEstimate => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserArcherGasEstimate */ .N1)({
      userArcherGasEstimate: newGasEstimate
    }));
  }, [dispatch]);
  return [userGasEstimate, setUserGasEstimate];
}
function useUserArcherTipManualOverride() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
  const userTipManualOverride = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    return state.user.userArcherTipManualOverride;
  });
  const setUserTipManualOverride = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(newManualOverride => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateUserArcherTipManualOverride */ .NL)({
      userArcherTipManualOverride: newManualOverride
    }));
  }, [dispatch]);
  return [userTipManualOverride, setUserTipManualOverride];
}
/**
 * Same as above but replaces the auto with a default value
 * @param defaultSlippageTolerance the default value to replace auto with
 */

function useUserSlippageToleranceWithDefault(defaultSlippageTolerance) {
  const allowedSlippage = useUserSlippageTolerance();
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => allowedSlippage === 'auto' ? defaultSlippageTolerance : allowedSlippage, [allowedSlippage, defaultSlippageTolerance]);
}

/***/ })

};
;
//# sourceMappingURL=4779.js.map