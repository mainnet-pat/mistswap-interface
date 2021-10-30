"use strict";
exports.id = 9477;
exports.ids = [9477];
exports.modules = {

/***/ 7876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WJ": () => (/* binding */ Chef),
/* harmony export */   "FJ": () => (/* binding */ PairType)
/* harmony export */ });
/* unused harmony export Rewarder */
let Chef;

(function (Chef) {
  Chef[Chef["MASTERCHEF"] = 0] = "MASTERCHEF";
  Chef[Chef["MASTERCHEF_V2"] = 1] = "MASTERCHEF_V2";
})(Chef || (Chef = {}));

let Rewarder;

(function (Rewarder) {
  Rewarder[Rewarder["SIMPLE"] = 0] = "SIMPLE";
  Rewarder[Rewarder["COMPLEX"] = 1] = "COMPLEX";
  Rewarder[Rewarder["ALCX"] = 2] = "ALCX";
})(Rewarder || (Rewarder = {}));

let PairType;

(function (PairType) {
  PairType[PairType["SWAP"] = 0] = "SWAP";
  PairType[PairType["KASHI"] = 1] = "KASHI";
})(PairType || (PairType = {}));

/***/ }),

/***/ 9686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ GRAPH_HOST)
/* harmony export */ });
const THE_GRAPH = 'http://127.0.0.1:8000';
const GRAPH_HOST = {// [ChainId.SMARTBCH]: THE_GRAPH,
  // [ChainId.SMARTBCH_AMBER]: THE_GRAPH,
};

/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U8": () => (/* binding */ getPairs),
/* harmony export */   "BD": () => (/* binding */ getTokenSubset),
/* harmony export */   "lz": () => (/* binding */ getTokens),
/* harmony export */   "se": () => (/* binding */ getTokenDayData),
/* harmony export */   "$Z": () => (/* binding */ getNativePrice),
/* harmony export */   "o5": () => (/* binding */ getMaticPrice),
/* harmony export */   "c6": () => (/* binding */ getSushiPrice),
/* harmony export */   "ZZ": () => (/* binding */ getStakePrice),
/* harmony export */   "C$": () => (/* binding */ getLiquidityPositions),
/* harmony export */   "aR": () => (/* binding */ getDayData),
/* harmony export */   "y6": () => (/* binding */ getFactory),
/* harmony export */   "f1": () => (/* binding */ getTransactions),
/* harmony export */   "Cx": () => (/* binding */ getTokenPairs)
/* harmony export */ });
/* unused harmony exports EXCHANGE, exchange, getToken, getTokenPrices, getTokenPrice, getEthPrice, getYggPrice, getRulerPrice, getTruPrice, getCvxPrice, getAlcxPrice, getPicklePrice, getMphPrice, getOnePrice, getAvaxPrice, getBundle */
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4512);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9686);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6807);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const EXCHANGE = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH]: 'mistswapdex/exchange'
};
const exchange = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, query, variables = {}) => (0,___WEBPACK_IMPORTED_MODULE_3__/* .pager */ .hD)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .GRAPH_HOST */ .q[chainId]}/subgraphs/name/${EXCHANGE[chainId]}`, query, variables);
const getPairs = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables = undefined, query = _queries__WEBPACK_IMPORTED_MODULE_0__/* .pairsQuery */ .aS) => {
  const {
    pairs
  } = await exchange(chainId, query, variables);
  return pairs;
};
const getTokenSubset = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables) => {
  // console.log('getTokenSubset')
  const {
    tokens
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .tokenSubsetQuery */ .Zg, variables);
  return tokens;
};
const getTokens = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables) => {
  // console.log('getTokens')
  const {
    tokens
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .tokensQuery */ .zz, variables);
  return tokens;
};
const getToken = async (chainId = ChainId.SMARTBCH, query = tokenQuery, variables) => {
  // console.log('getTokens')
  const {
    token
  } = await exchange(chainId, query, variables);
  return token;
};
const getTokenDayData = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables) => {
  // console.log('getTokens')
  const {
    tokenDayDatas
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .tokenDayDatasQuery */ .KB, variables);
  return tokenDayDatas;
};
const getTokenPrices = async (chainId = ChainId.SMARTBCH, variables) => {
  // console.log('getTokenPrice')
  const {
    tokens
  } = await exchange(chainId, tokensQuery, variables);
  return tokens.map(token => token === null || token === void 0 ? void 0 : token.derivedETH);
};
const getTokenPrice = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, query, variables) => {
  // console.log('getTokenPrice')
  const nativePrice = await getNativePrice(chainId);
  const {
    token
  } = await exchange(chainId, query, variables);
  return (token === null || token === void 0 ? void 0 : token.derivedETH) * nativePrice;
};
const getNativePrice = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables = undefined) => {
  var _data$bundles$;

  // console.log('getEthPrice')
  const data = await getBundle(chainId, undefined, variables);
  return data === null || data === void 0 ? void 0 : (_data$bundles$ = data.bundles[0]) === null || _data$bundles$ === void 0 ? void 0 : _data$bundles$.ethPrice;
};
const getEthPrice = async (variables = undefined) => {
  return getNativePrice(ChainId.SMARTBCH, variables);
};
const getYggPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.SMARTBCH, tokenPriceQuery, _objectSpread({
    id: '0x25f8087ead173b73d6e8b84329989a8eea16cf73'
  }, variables));
};
const getRulerPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.SMARTBCH, tokenPriceQuery, _objectSpread({
    id: '0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8'
  }, variables));
};
const getTruPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.SMARTBCH, tokenPriceQuery, _objectSpread({
    id: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784'
  }, variables));
};
const getCvxPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.SMARTBCH, tokenPriceQuery, _objectSpread({
    id: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b'
  }, variables));
};
const getMaticPrice = async (variables = {}) => {
  console.log('getMaticPrice'); // return getTokenPrice(ChainId.MATIC, tokenPriceQuery, {
  //   id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  //   ...variables,
  // })
};
const getAlcxPrice = async (variables = {}) => {
  // console.log('getAlcxPrice')
  return getTokenPrice(ChainId.SMARTBCH, tokenPriceQuery, _objectSpread({
    id: '0xdbdb4d16eda451d0503b854cf79d55697f90c8df'
  }, variables));
};
const getPicklePrice = async (variables = {}) => {
  return getTokenPrice(ChainId.SMARTBCH, tokenPriceQuery, _objectSpread({
    id: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5'
  }, variables));
};
const getMphPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.SMARTBCH, tokenPriceQuery, _objectSpread({
    id: '0x8888801af4d980682e47f1a9036e589479e835c5'
  }, variables));
};
const getSushiPrice = async (variables = {}) => {
  // console.log('getSushiPrice')
  return getTokenPrice(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, _queries__WEBPACK_IMPORTED_MODULE_0__/* .tokenPriceQuery */ .qI, _objectSpread({
    id: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2'
  }, variables));
};
const getStakePrice = async (variables = {}) => {// return getTokenPrice(ChainId.XDAI, tokenPriceQuery, {
  //   id: '0xb7d311e2eb55f2f68a9440da38e7989210b9a05e',
  //   ...variables,
  // })
};
const getOnePrice = async (variables = undefined) => {// return getNativePrice(ChainId.HARMONY, variables)
};
const getAvaxPrice = async (variables = undefined) => {// return getNativePrice(ChainId.AVALANCHE, variables)
};
const getBundle = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, query = _queries__WEBPACK_IMPORTED_MODULE_0__/* .ethPriceQuery */ .B8, variables = {
  id: 1
}) => {
  return exchange(chainId, query, variables);
};
const getLiquidityPositions = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables) => {
  const {
    liquidityPositions
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .liquidityPositionsQuery */ .vy, variables);
  return liquidityPositions;
};
const getDayData = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables = undefined) => {
  const {
    dayDatas
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .dayDatasQuery */ .We, variables);
  return dayDatas;
};
const getFactory = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables = undefined) => {
  const {
    factories
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .factoryQuery */ .wY, variables);
  return factories[0];
};
const getTransactions = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables = undefined) => {
  const {
    swaps
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .transactionsQuery */ .ky, variables);
  return swaps;
};
const getTokenPairs = async (chainId = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_1__.ChainId.SMARTBCH, variables = undefined) => {
  const {
    pairs0,
    pairs1
  } = await exchange(chainId, _queries__WEBPACK_IMPORTED_MODULE_0__/* .tokenPairsQuery */ .A, variables);
  return pairs0 || pairs1 ? [...(pairs0 ? pairs0 : []), ...(pairs1 ? pairs1 : [])] : undefined;
};

/***/ }),

/***/ 6807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ey": () => (/* reexport */ getAverageBlockTime),
  "Qg": () => (/* reexport */ getBlock),
  "aR": () => (/* reexport */ exchange/* getDayData */.aR),
  "y6": () => (/* reexport */ exchange/* getFactory */.y6),
  "C$": () => (/* reexport */ exchange/* getLiquidityPositions */.C$),
  "$K": () => (/* reexport */ getMasterChefV1Farms),
  "vL": () => (/* reexport */ getMasterChefV1SushiPerBlock),
  "mB": () => (/* reexport */ getMasterChefV1TotalAllocPoint),
  "GR": () => (/* reexport */ getMasterChefV2Farms),
  "o5": () => (/* reexport */ exchange/* getMaticPrice */.o5),
  "$Z": () => (/* reexport */ exchange/* getNativePrice */.$Z),
  "U8": () => (/* reexport */ exchange/* getPairs */.U8),
  "ZZ": () => (/* reexport */ exchange/* getStakePrice */.ZZ),
  "c6": () => (/* reexport */ exchange/* getSushiPrice */.c6),
  "se": () => (/* reexport */ exchange/* getTokenDayData */.se),
  "Cx": () => (/* reexport */ exchange/* getTokenPairs */.Cx),
  "lz": () => (/* reexport */ exchange/* getTokens */.lz),
  "f1": () => (/* reexport */ exchange/* getTransactions */.f1),
  "hD": () => (/* binding */ pager)
});

// UNUSED EXPORTS: BLOCKS, EXCHANGE, MASTERCHEF_V1, MASTERCHEF_V2, exchange, fetcher, getAlcxPrice, getAvaxPrice, getBlocks, getBundle, getCvxPrice, getEthPrice, getMassBlocks, getMasterChefV1PairAddreses, getMasterChefV2PairAddreses, getMphPrice, getOnePrice, getPicklePrice, getRulerPrice, getToken, getTokenPrice, getTokenPrices, getTokenSubset, getTruPrice, getYggPrice, masterChefV1, masterChefV2, status

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(7435);
// EXTERNAL MODULE: ./src/services/graph/queries/index.ts + 4 modules
var queries = __webpack_require__(4512);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(3879);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/services/graph/constants/index.ts
var constants = __webpack_require__(9686);
;// CONCATENATED MODULE: ./src/services/graph/fetchers/blocks.ts





const BLOCKS = {};
const fetcher = async (chainId = sdk_.ChainId.SMARTBCH, query, variables = undefined) => {
  return (0,external_graphql_request_.request)(`${constants/* GRAPH_HOST */.q[chainId]}/subgraphs/name/${BLOCKS[chainId]}`, query, variables);
};
const getBlock = async (chainId = sdk_.ChainId.SMARTBCH, timestamp) => {
  var _blocks$;

  const {
    blocks
  } = await fetcher(chainId, queries/* blockQuery */.RW, timestamp ? {
    where: {
      timestamp_gt: timestamp - 600,
      timestamp_lt: timestamp
    }
  } : {});
  return Number(blocks === null || blocks === void 0 ? void 0 : (_blocks$ = blocks[0]) === null || _blocks$ === void 0 ? void 0 : _blocks$.number);
};
const getBlocks = async (chainId = sdk_.ChainId.SMARTBCH, start, end) => {
  const {
    blocks
  } = await fetcher(chainId, queries/* blocksQuery */.LG, {
    start,
    end
  });
  return blocks;
};
const getMassBlocks = async (chainId = ChainId.SMARTBCH, timestamps) => {
  const data = await fetcher(chainId, massBlocksQuery(timestamps));
  return Object.values(data).map(entry => ({
    number: Number(entry[0].number),
    timestamp: Number(entry[0].timestamp)
  }));
}; // Grabs the last 1000 (a sample statistical) blocks and averages
// the time difference between them

const getAverageBlockTime = async (chainId = sdk_.ChainId.SMARTBCH) => {
  // console.log('getAverageBlockTime')
  const now = (0,external_date_fns_.startOfHour)(Date.now());
  const start = (0,external_date_fns_.getUnixTime)((0,external_date_fns_.subHours)(now, 6));
  const end = (0,external_date_fns_.getUnixTime)(now);
  const blocks = await getBlocks(chainId, start, end);
  const averageBlockTime = blocks === null || blocks === void 0 ? void 0 : blocks.reduce((previousValue, currentValue, currentIndex) => {
    if (previousValue.timestamp) {
      const difference = previousValue.timestamp - currentValue.timestamp;
      previousValue.averageBlockTime = previousValue.averageBlockTime + difference;
    }

    previousValue.timestamp = currentValue.timestamp;

    if (currentIndex === blocks.length - 1) {
      return previousValue.averageBlockTime / blocks.length;
    }

    return previousValue;
  }, {
    timestamp: null,
    averageBlockTime: 0
  });
  return averageBlockTime;
};
// EXTERNAL MODULE: ./src/services/graph/fetchers/exchange.ts
var exchange = __webpack_require__(0);
;// CONCATENATED MODULE: ./src/services/graph/fetchers/masterchef.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MASTERCHEF_V2 = {
  [sdk_.ChainId.SMARTBCH]: 'sushiswap/master-chefv2'
};
const masterChefV2 = async (query, chainId = sdk_.ChainId.SMARTBCH, variables = undefined) => (0,external_graphql_request_.request)(`${constants/* GRAPH_HOST */.q[chainId]}/subgraphs/name/${MASTERCHEF_V2[chainId]}`, query, variables);
const MASTERCHEF_V1 = {
  [sdk_.ChainId.SMARTBCH]: 'sushiswap/master-chef'
};
const masterChefV1 = async (query, chainId = sdk_.ChainId.SMARTBCH, variables = undefined) => (0,external_graphql_request_.request)(`${constants/* GRAPH_HOST */.q[chainId]}/subgraphs/name/${MASTERCHEF_V1[chainId]}`, query, variables);
const getMasterChefV1TotalAllocPoint = async () => {
  const {
    masterChef: {
      totalAllocPoint
    }
  } = await masterChefV1(queries/* masterChefV1TotalAllocPointQuery */.ze);
  return totalAllocPoint;
};
const getMasterChefV1SushiPerBlock = async () => {
  const {
    masterChef: {
      sushiPerBlock
    }
  } = await masterChefV1(queries/* masterChefV1SushiPerBlockQuery */.r);
  return sushiPerBlock / 1e18;
};
const getMasterChefV1Farms = async (variables = undefined) => {
  const {
    pools
  } = await masterChefV1(queries/* poolsQuery */.N_, undefined, variables);
  return pools;
};
const getMasterChefV1PairAddreses = async () => {
  const {
    pools
  } = await masterChefV1(masterChefV1PairAddressesQuery);
  return pools;
};
const getMasterChefV2Farms = async (variables = undefined) => {
  const {
    pools
  } = await masterChefV2(queries/* poolsV2Query */.z3, undefined, variables);
  const tokens = await (0,exchange/* getTokenSubset */.BD)(sdk_.ChainId.SMARTBCH, {
    tokenAddresses: Array.from(pools.map(pool => pool.rewarder.rewardToken))
  });
  return pools.map(pool => _objectSpread(_objectSpread({}, pool), {}, {
    rewardToken: _objectSpread({}, tokens.find(token => token.id === pool.rewarder.rewardToken))
  }));
};
const getMasterChefV2PairAddreses = async () => {
  const {
    pools
  } = await masterChefV2(masterChefV2PairAddressesQuery);
  return pools;
};
;// CONCATENATED MODULE: ./src/services/graph/fetchers/status.ts



const status_status = async (chainId = ChainId.SMARTBCH, subgraphName) => request(`${GRAPH_HOST[chainId]}/index-node/graphql`, `
        indexingStatusForCurrentVersion(subgraphName: "${subgraphName}") {
            synced
            health
            fatalError {
              message
              block {
                number
                hash
              }
              handler
            }
            chains {
              chainHeadBlock {
                number
              }
              latestBlock {
                number
              }
            }
          }
        `);
;// CONCATENATED MODULE: ./src/services/graph/fetchers/index.ts
function fetchers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function fetchers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fetchers_ownKeys(Object(source), true).forEach(function (key) { fetchers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fetchers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetchers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function pager(endpoint, query, variables = {}) {
  if (endpoint.includes('undefined')) return {};
  let data = {};
  let skip = 0;
  let flag = true;

  while (flag) {
    flag = false;
    const req = await (0,external_graphql_request_.request)(endpoint, query, variables);
    Object.keys(req).forEach(key => {
      data[key] = data[key] ? [...data[key], ...req[key]] : req[key];
    });
    Object.values(req).forEach(entry => {
      if (entry.length === 1000) flag = true;
    });
    if (Object.keys(variables).includes('first')) break;
    skip += 1000;
    variables = fetchers_objectSpread(fetchers_objectSpread({}, variables), {}, {
      skip
    });
  }

  return data;
}





/***/ }),

/***/ 5777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rL": () => (/* binding */ useBlock),
/* harmony export */   "Te": () => (/* binding */ useAverageBlockTime)
/* harmony export */ });
/* unused harmony export useMassBlocks */
/* harmony import */ var _fetchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6807);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9202);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function useBlock({
  timestamp,
  daysAgo,
  chainId = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useActiveWeb3React */ .aQ)().chainId,
  shouldFetch = true
} = {}, swrConfig = undefined) {
  shouldFetch = shouldFetch && !!chainId;
  timestamp = timestamp ? String(timestamp).length !== 13 ? Number(timestamp) : Math.floor(Number(timestamp) / 1000) : undefined;
  timestamp = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => daysAgo ? Math.floor(Date.now() / 1000) - daysAgo * 86400 : timestamp, [daysAgo]);
  const {
    data
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(shouldFetch ? ['block', chainId, timestamp] : null, (_, chainId, timestamp) => (0,_fetchers__WEBPACK_IMPORTED_MODULE_0__/* .getBlock */ .Qg)(chainId, timestamp), swrConfig);
  return data;
}
function useMassBlocks(timestamps, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const {
    data
  } = useSWR(chainId ? ['massBlocks', chainId] : null, (_, chainId) => getMassBlocks(chainId, timestamps), swrConfig);
  return data;
}
function useAverageBlockTime(swrConfig = undefined) {
  const {
    chainId
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useActiveWeb3React */ .aQ)();
  const {
    data
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(chainId ? ['averageBlockTime', chainId] : null, (_, chainId) => (0,_fetchers__WEBPACK_IMPORTED_MODULE_0__/* .getAverageBlockTime */ .Ey)(chainId), swrConfig);
  return data;
}

/***/ }),

/***/ 9477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Te": () => (/* reexport */ blocks/* useAverageBlockTime */.Te),
  "P2": () => (/* reexport */ useBentoUserTokens),
  "rL": () => (/* reexport */ blocks/* useBlock */.rL),
  "Yg": () => (/* reexport */ useDayData),
  "rv": () => (/* reexport */ useFactory),
  "E2": () => (/* reexport */ useFarms),
  "Fp": () => (/* reexport */ useKashiPairs),
  "Qq": () => (/* reexport */ useLiquidityPositions),
  "av": () => (/* reexport */ useMasterChefV1SushiPerBlock),
  "M1": () => (/* reexport */ useMasterChefV1TotalAllocPoint),
  "ME": () => (/* reexport */ useMaticPrice),
  "k$": () => (/* reexport */ useNativePrice),
  "it": () => (/* reexport */ useStakePrice),
  "__": () => (/* reexport */ useSushiPairs),
  "W": () => (/* reexport */ useSushiPrice),
  "Ye": () => (/* reexport */ useTokenDayData),
  "w_": () => (/* reexport */ useTokenPairs),
  "rU": () => (/* reexport */ useTokens),
  "nC": () => (/* reexport */ useTransactions),
  "Em": () => (/* reexport */ useUserKashiPairs)
});

// UNUSED EXPORTS: BLOCKS, EXCHANGE, MASTERCHEF_V1, MASTERCHEF_V2, exchange, fetcher, getAlcxPrice, getAvaxPrice, getAverageBlockTime, getBlock, getBlocks, getBundle, getCvxPrice, getDayData, getEthPrice, getFactory, getLiquidityPositions, getMassBlocks, getMasterChefV1Farms, getMasterChefV1PairAddreses, getMasterChefV1SushiPerBlock, getMasterChefV1TotalAllocPoint, getMasterChefV2Farms, getMasterChefV2PairAddreses, getMaticPrice, getMphPrice, getNativePrice, getOnePrice, getPairs, getPicklePrice, getRulerPrice, getStakePrice, getSushiPrice, getToken, getTokenDayData, getTokenPairs, getTokenPrice, getTokenPrices, getTokenSubset, getTokens, getTransactions, getTruPrice, getYggPrice, masterChefV1, masterChefV2, pager, status, useAlcxPrice, useAvaxPrice, useBundle, useCvxPrice, useEthPrice, useFarmPairAddresses, useMassBlocks, useMasterChefV1Farms, useMasterChefV1PairAddresses, useMasterChefV2Farms, useMasterChefV2PairAddresses, useMphPrice, useOnePrice, usePicklePrice, useRulerPrice, useTruPrice, useYggPrice

// EXTERNAL MODULE: ./src/services/graph/fetchers/index.ts + 3 modules
var fetchers = __webpack_require__(6807);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/swr/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(2503);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/features/onsen/enum.ts
var onsen_enum = __webpack_require__(7876);
// EXTERNAL MODULE: external "lodash/concat"
var concat_ = __webpack_require__(7508);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat_);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var hooks_useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/services/graph/queries/bentobox.ts

const bentoTokenFieldsQuery = (external_graphql_tag_default())`
  fragment bentoTokenFields on Token {
    id
    # bentoBox
    name
    symbol
    decimals
    totalSupplyElastic
    totalSupplyBase
    block
    timestamp
  }
`;
const bentoUserTokensQuery = (external_graphql_tag_default())`
  query bentoUserTokens($user: String!, $skip: Int = 0, $first: Int = 1000, $block: Block_height) {
    userTokens(skip: $skip, first: $first, block: $block, where: { share_gt: 0, user: $user }) {
      token {
        ...bentoTokenFields
      }
      share
    }
  }
  ${bentoTokenFieldsQuery}
`;
const kashiPairFieldsQuery = (external_graphql_tag_default())`
  fragment kashiPairFields on KashiPair {
    id
    # bentoBox
    type
    masterContract
    owner
    feeTo
    name
    symbol
    oracle
    asset {
      ...bentoTokenFields
    }
    collateral {
      ...bentoTokenFields
    }
    exchangeRate
    totalAssetElastic
    totalAssetBase
    totalCollateralShare
    totalBorrowElastic
    totalBorrowBase
    interestPerSecond
    utilization
    feesEarnedFraction
    totalFeesEarnedFraction
    lastAccrued
    supplyAPR
    borrowAPR
    # transactions
    # users
    block
    timestamp
  }
  ${bentoTokenFieldsQuery}
`;
const kashiPairsQuery = (external_graphql_tag_default())`
  query kashiPairs(
    $skip: Int = 0
    $first: Int = 1000
    $where: KashiPair_filter
    $block: Block_height
    $orderBy: KashiPair_orderBy = "utilization"
    $orderDirection: OrderDirection! = "desc"
  ) {
    kashiPairs(
      skip: $skip
      first: $first
      where: $where
      block: $block
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...kashiPairFields
    }
  }
  ${kashiPairFieldsQuery}
`;
const kashiUserPairsQuery = (external_graphql_tag_default())`
  query kashiUserPairs($user: String!, $skip: Int = 0, $first: Int = 1000, $block: Block_height) {
    userKashiPairs(skip: $skip, first: $first, block: $block, where: { user: $user }) {
      assetFraction
      collateralShare
      borrowPart
      pair {
        ...kashiPairFields
      }
    }
  }
  ${kashiPairFieldsQuery}
`;
// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: ./src/services/graph/constants/index.ts
var constants = __webpack_require__(9686);
// EXTERNAL MODULE: ./src/services/graph/fetchers/exchange.ts
var exchange = __webpack_require__(0);
;// CONCATENATED MODULE: ./src/services/graph/fetchers/bentobox.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const BENTOBOX = {// [ChainId.MAINNET]: 'sushiswap/bentobox',
  // [ChainId.XDAI]: 'sushiswap/xdai-bentobox',
  // [ChainId.MATIC]: 'sushiswap/matic-bentobox',
  // [ChainId.FANTOM]: 'sushiswap/fantom-bentobox',
  // [ChainId.BSC]: 'sushiswap/bsc-bentobox',
  // [ChainId.ARBITRUM]: 'sushiswap/arbitrum-bentobox',
};
const fetcher = async (chainId = sdk_.ChainId.SMARTBCH, query, variables = undefined) => (0,fetchers/* pager */.hD)(`${constants/* GRAPH_HOST */.q[chainId]}/subgraphs/name/${BENTOBOX[chainId]}`, query, variables);
const getKashiPairs = async (chainId = sdk_.ChainId.SMARTBCH, variables = undefined) => {
  const {
    kashiPairs
  } = await fetcher(chainId, kashiPairsQuery, variables);
  const tokens = await (0,exchange/* getTokenSubset */.BD)(chainId, {
    tokenAddresses: Array.from(kashiPairs.reduce((previousValue, currentValue) => previousValue.add(currentValue.asset.id, currentValue.collateral.id), new Set() // use set to avoid duplicates
    ))
  });
  return kashiPairs.map(pair => _objectSpread(_objectSpread({}, pair), {}, {
    token0: _objectSpread(_objectSpread({}, pair.asset), tokens.find(token => token.id === pair.asset.id)),
    token1: _objectSpread(_objectSpread({}, pair.collateral), tokens.find(token => token.id === pair.collateral.id)),
    assetAmount: Math.floor(pair.totalAssetBase / (0,functions/* getFraction */.nj)(_objectSpread(_objectSpread({}, pair), {}, {
      token0: pair.asset
    }))).toString(),
    borrowedAmount: (0,functions/* toAmount */.sN)({
      bentoAmount: pair.totalBorrowElastic.toBigNumber(0),
      bentoShare: pair.totalBorrowBase.toBigNumber(0)
    }, pair.totalBorrowElastic.toBigNumber(0)).toString(),
    collateralAmount: (0,functions/* toAmount */.sN)({
      bentoAmount: pair.collateral.totalSupplyElastic.toBigNumber(0),
      bentoShare: pair.collateral.totalSupplyBase.toBigNumber(0)
    }, pair.totalCollateralShare.toBigNumber(0)).toString()
  }));
};
const getUserKashiPairs = async (chainId = sdk_.ChainId.SMARTBCH, variables) => {
  const {
    userKashiPairs
  } = await fetcher(chainId, kashiUserPairsQuery, variables);
  return userKashiPairs.map(userPair => _objectSpread(_objectSpread({}, userPair), {}, {
    assetAmount: Math.floor(userPair.assetFraction / (0,functions/* getFraction */.nj)(_objectSpread(_objectSpread({}, userPair.pair), {}, {
      token0: userPair.pair.asset
    }))).toString(),
    borrowedAmount: (0,functions/* toAmount */.sN)({
      bentoAmount: userPair.pair.totalBorrowElastic.toBigNumber(0),
      bentoShare: userPair.pair.totalBorrowBase.toBigNumber(0)
    }, userPair.borrowPart.toBigNumber(0)).toString(),
    collateralAmount: (0,functions/* toAmount */.sN)({
      bentoAmount: userPair.pair.collateral.totalSupplyElastic.toBigNumber(0),
      bentoShare: userPair.pair.collateral.totalSupplyBase.toBigNumber(0)
    }, userPair.collateralShare.toBigNumber(0)).toString()
  }));
};
const getBentoUserTokens = async (chainId = sdk_.ChainId.SMARTBCH, variables) => {
  const {
    userTokens
  } = await fetcher(chainId, bentoUserTokensQuery, variables);
  return userTokens.map(token => _objectSpread(_objectSpread({}, token.token), {}, {
    shares: token.share
  })).map(token => _objectSpread(_objectSpread({}, token), {}, {
    amount: (0,functions/* toAmount */.sN)({
      bentoAmount: token.totalSupplyElastic.toBigNumber(0),
      bentoShare: token.totalSupplyBase.toBigNumber(0)
    }, token.shares.toBigNumber(0)).toString()
  }));
};
// EXTERNAL MODULE: ./src/hooks/index.ts + 2 modules
var hooks = __webpack_require__(9202);
// EXTERNAL MODULE: ./src/services/graph/hooks/blocks.ts
var blocks = __webpack_require__(5777);
// EXTERNAL MODULE: ./src/functions/feature.ts
var feature = __webpack_require__(1986);
;// CONCATENATED MODULE: ./src/services/graph/hooks/bentobox.ts
function bentobox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bentobox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bentobox_ownKeys(Object(source), true).forEach(function (key) { bentobox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bentobox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bentobox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function useKashiPairs({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  user,
  subset
} = {}, swrConfig = undefined) {
  var _block;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block = block) !== null && _block !== void 0 ? _block : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch ? (0,feature/* featureEnabled */.vR)(feature/* Feature.KASHI */.L0.KASHI, chainId) : false;
  const variables = {
    block: block ? {
      number: block
    } : undefined,
    where: {
      user: user === null || user === void 0 ? void 0 : user.toLowerCase(),
      id_in: subset === null || subset === void 0 ? void 0 : subset.map(id => id.toLowerCase())
    }
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? () => ['kashiPairs', chainId, JSON.stringify(variables)] : null, (_, chainId) => getKashiPairs(chainId, variables), swrConfig);
  return data;
}
function useUserKashiPairs(variables = undefined, chainId = undefined, swrConfig = undefined) {
  var _chainId, _variables;

  const {
    chainId: chainIdSelected,
    account
  } = (0,hooks/* useActiveWeb3React */.aQ)();
  chainId = (_chainId = chainId) !== null && _chainId !== void 0 ? _chainId : chainIdSelected;
  const shouldFetch = chainId && account;
  variables = Object.keys((_variables = variables) !== null && _variables !== void 0 ? _variables : {}).includes('user') && account ? variables : account ? bentobox_objectSpread(bentobox_objectSpread({}, variables), {}, {
    user: account.toLowerCase()
  }) : '';
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['userKashiPairs', chainId, JSON.stringify(variables)] : null, () => getUserKashiPairs(chainId, variables), swrConfig);
  return data;
}
function useBentoUserTokens(variables = undefined, chainId = undefined, swrConfig = undefined) {
  var _chainId2, _variables2;

  const {
    chainId: chainIdSelected,
    account
  } = (0,hooks/* useActiveWeb3React */.aQ)();
  chainId = (_chainId2 = chainId) !== null && _chainId2 !== void 0 ? _chainId2 : chainIdSelected;
  const shouldFetch = chainId && account;
  variables = Object.keys((_variables2 = variables) !== null && _variables2 !== void 0 ? _variables2 : {}).includes('user') ? variables : account ? bentobox_objectSpread(bentobox_objectSpread({}, variables), {}, {
    user: account.toLowerCase()
  }) : '';
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['bentoUserTokens', chainId, JSON.stringify(variables)] : null, () => getBentoUserTokens(chainId, variables), swrConfig);
  return data;
}
// EXTERNAL MODULE: ./src/services/graph/queries/index.ts + 4 modules
var queries = __webpack_require__(4512);
;// CONCATENATED MODULE: ./src/services/graph/hooks/exchange.ts






function useFactory({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true
} = {}, swrConfig = undefined) {
  var _block;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block = block) !== null && _block !== void 0 ? _block : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    block: block ? {
      number: block
    } : undefined
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['factory', chainId, JSON.stringify(variables)] : null, () => (0,fetchers/* getFactory */.y6)(chainId, variables), swrConfig);
  return data;
}
function useNativePrice({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true
} = {}, swrConfig = undefined) {
  var _block2;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    chainId,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block2 = block) !== null && _block2 !== void 0 ? _block2 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    block: block ? {
      number: block
    } : undefined
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['nativePrice', chainId, JSON.stringify(variables)] : null, () => (0,fetchers/* getNativePrice */.$Z)(chainId, variables), swrConfig);
  return data;
}
function useEthPrice(variables = undefined, swrConfig = undefined) {
  const {
    data
  } = useSWR(['ethPrice', JSON.stringify(variables)], () => getEthPrice(variables), swrConfig);
  return data;
}
function useStakePrice(variables = undefined, swrConfig = undefined) {
  const {
    data
  } = (0,index_esm/* default */.ZP)(['stakePrice', JSON.stringify(variables)], () => (0,fetchers/* getStakePrice */.ZZ)(variables), swrConfig);
  return data;
}
function useOnePrice(variables = undefined, swrConfig = undefined) {
  const {
    data
  } = useSWR(['onePrice', JSON.stringify(variables)], () => getOnePrice(variables), swrConfig);
  return data;
}
function useYggPrice(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const {
    data
  } = useSWR(null, () => getYggPrice(), swrConfig);
  return data;
}
function useRulerPrice(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const {
    data
  } = useSWR(null, () => getRulerPrice(variables), swrConfig);
  return data;
}
function useTruPrice(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const {
    data
  } = useSWR(null, () => getTruPrice(), swrConfig);
  return data;
}
function useAlcxPrice(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const shouldFetch = false;
  const {
    data
  } = useSWR(shouldFetch ? ['aclxPrice', JSON.stringify(variables)] : null, () => getAlcxPrice(variables), swrConfig);
  return data;
}
function useCvxPrice(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const shouldFetch = false;
  const {
    data
  } = useSWR(shouldFetch ? ['cvxPrice', JSON.stringify(variables)] : null, () => getCvxPrice(variables), swrConfig);
  return data;
}
function usePicklePrice(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const {
    data
  } = useSWR(null, () => getPicklePrice(), swrConfig);
  return data;
}
function useMphPrice(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const {
    data
  } = useSWR(null, () => getMphPrice(), swrConfig);
  return data;
}
function useAvaxPrice(variables = undefined, swrConfig = undefined) {
  const {
    data
  } = useSWR(['avaxPrice', JSON.stringify(variables)], () => getAvaxPrice(variables), swrConfig);
  return data;
}
function useMaticPrice(variables = undefined, swrConfig = undefined) {
  const {
    data
  } = (0,index_esm/* default */.ZP)(['maticPrice', JSON.stringify(variables)], () => (0,fetchers/* getMaticPrice */.o5)(variables), swrConfig);
  return data;
}
function useSushiPrice(variables = undefined, swrConfig = undefined) {
  const {
    data
  } = (0,index_esm/* default */.ZP)(['sushiPrice', JSON.stringify(variables)], () => (0,fetchers/* getSushiPrice */.c6)(variables), swrConfig);
  return data;
}
function useBundle(variables = undefined, swrConfig = undefined) {
  const {
    chainId
  } = useActiveWeb3React();
  const {
    data
  } = useSWR(chainId ? [chainId, ethPriceQuery, JSON.stringify(variables)] : null, () => getBundle(), swrConfig);
  return data;
}
function useLiquidityPositions({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  user
} = {}, swrConfig = undefined) {
  var _block3;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    chainId,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block3 = block) !== null && _block3 !== void 0 ? _block3 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    block: block ? {
      number: block
    } : undefined,
    where: {
      user: user === null || user === void 0 ? void 0 : user.toLowerCase(),
      liquidityTokenBalance_gt: '0'
    }
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['liquidityPositions', chainId, JSON.stringify(variables)] : null, (_, chainId) => (0,fetchers/* getLiquidityPositions */.C$)(chainId, variables), swrConfig);
  return data;
}
function useSushiPairs({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  user,
  subset
} = {}, swrConfig = undefined) {
  var _block4;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block4 = block) !== null && _block4 !== void 0 ? _block4 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    block: block ? {
      number: block
    } : undefined,
    where: {
      user: user === null || user === void 0 ? void 0 : user.toLowerCase(),
      id_in: subset === null || subset === void 0 ? void 0 : subset.map(id => id.toLowerCase())
    }
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['sushiPairs', chainId, JSON.stringify(variables)] : null, (_, chainId) => (0,fetchers/* getPairs */.U8)(chainId, variables), swrConfig);
  return data;
}
function useTokens({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  subset
} = {}, swrConfig = undefined) {
  var _block5;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block5 = block) !== null && _block5 !== void 0 ? _block5 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    block: block ? {
      number: block
    } : undefined,
    where: {
      id_in: subset === null || subset === void 0 ? void 0 : subset.map(id => id.toLowerCase())
    }
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['tokens', chainId, JSON.stringify(variables)] : null, (_, chainId) => (0,fetchers/* getTokens */.lz)(chainId, variables), swrConfig);
  return data;
}
function useTokenDayData({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  token,
  first
}, swrConfig = undefined) {
  var _block6;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block6 = block) !== null && _block6 !== void 0 ? _block6 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    first: first,
    block: block ? {
      number: block
    } : undefined,
    where: {
      token: token === null || token === void 0 ? void 0 : token.toLowerCase()
    }
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['tokenDayDaya', chainId, JSON.stringify(variables)] : null, (_, chainId) => (0,fetchers/* getTokenDayData */.se)(chainId, variables), swrConfig);
  return data;
}
function useDayData({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  first
} = {}, swrConfig = undefined) {
  var _block7;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block7 = block) !== null && _block7 !== void 0 ? _block7 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    first: first,
    block: block ? {
      number: block
    } : undefined
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['dayData', chainId, JSON.stringify(variables)] : null, (_, chainId) => (0,fetchers/* getDayData */.aR)(chainId, variables), swrConfig);
  return data;
}
function useTransactions({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  first,
  pairs
}, swrConfig = undefined) {
  var _block8;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block8 = block) !== null && _block8 !== void 0 ? _block8 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    first: first,
    block: block ? {
      number: block
    } : undefined,
    where: {
      pair_in: pairs === null || pairs === void 0 ? void 0 : pairs.map(id => id.toLowerCase())
    }
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['transactions', chainId, JSON.stringify(variables)] : null, (_, chainId) => (0,fetchers/* getTransactions */.f1)(chainId, variables), swrConfig);
  return data;
}
function useTokenPairs({
  timestamp,
  block,
  chainId = (0,hooks/* useActiveWeb3React */.aQ)().chainId,
  shouldFetch = true,
  token
}, swrConfig = undefined) {
  var _block9;

  const blockFetched = (0,blocks/* useBlock */.rL)({
    timestamp,
    shouldFetch: shouldFetch && !!timestamp
  });
  block = (_block9 = block) !== null && _block9 !== void 0 ? _block9 : timestamp ? blockFetched : undefined;
  shouldFetch = shouldFetch && !!chainId;
  const variables = {
    id: token === null || token === void 0 ? void 0 : token.toLowerCase(),
    block: block ? {
      number: block
    } : undefined
  };
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['tokenPairs', chainId, JSON.stringify(variables)] : null, (_, chainId) => (0,fetchers/* getTokenPairs */.Cx)(chainId, variables), swrConfig);
  return data;
}
;// CONCATENATED MODULE: ./src/services/graph/hooks/index.ts
function hooks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function hooks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hooks_ownKeys(Object(source), true).forEach(function (key) { hooks_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hooks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hooks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function useMasterChefV1TotalAllocPoint(swrConfig = undefined) {
  const {
    chainId
  } = (0,hooks_useActiveWeb3React/* default */.Z)();
  const shouldFetch = chainId && chainId === sdk_.ChainId.SMARTBCH;
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? 'masterChefV1TotalAllocPoint' : null, () => (0,fetchers/* getMasterChefV1TotalAllocPoint */.mB)(), swrConfig);
  return data;
}
function useMasterChefV1SushiPerBlock(swrConfig = undefined) {
  const {
    chainId
  } = (0,hooks_useActiveWeb3React/* default */.Z)();
  const shouldFetch = chainId && chainId === sdk_.ChainId.SMARTBCH;
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? 'masterChefV1SushiPerBlock' : null, () => (0,fetchers/* getMasterChefV1SushiPerBlock */.vL)(), swrConfig);
  return data;
}
function useMasterChefV1Farms(variables = undefined, chainId = undefined, swrConfig = undefined) {
  var _chainId;

  chainId = (_chainId = chainId) !== null && _chainId !== void 0 ? _chainId : (0,hooks_useActiveWeb3React/* default */.Z)().chainId;
  const shouldFetch = chainId && chainId === sdk_.ChainId.SMARTBCH;
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? ['masterChefV1Farms', JSON.stringify(variables)] : null, () => (0,fetchers/* getMasterChefV1Farms */.$K)(variables), swrConfig);
  return (0,external_react_.useMemo)(() => {
    if (!data) return [];
    return data.map(data => hooks_objectSpread(hooks_objectSpread({}, data), {}, {
      chef: onsen_enum/* Chef.MASTERCHEF */.WJ.MASTERCHEF
    }));
  }, [data]);
}
function useMasterChefV2Farms(variables = undefined, chainId = undefined, swrConfig = undefined) {
  var _chainId2;

  chainId = (_chainId2 = chainId) !== null && _chainId2 !== void 0 ? _chainId2 : (0,hooks_useActiveWeb3React/* default */.Z)().chainId;
  const shouldFetch = chainId && chainId === sdk_.ChainId.SMARTBCH;
  const {
    data
  } = (0,index_esm/* default */.ZP)(shouldFetch ? 'masterChefV2Farms' : null, () => (0,fetchers/* getMasterChefV2Farms */.GR)(), swrConfig);
  return (0,external_react_.useMemo)(() => {
    if (!data) return [];
    return data.map(data => hooks_objectSpread(hooks_objectSpread({}, data), {}, {
      chef: onsen_enum/* Chef.MASTERCHEF_V2 */.WJ.MASTERCHEF_V2
    }));
  }, [data]);
}
function useFarms(variables = undefined, chainId = undefined, swrConfig = undefined) {
  const masterChefV1Farms = useMasterChefV1Farms(variables, chainId);
  const masterChefV2Farms = useMasterChefV2Farms(variables, chainId); // useEffect(() => {
  //   console.log('debug', { masterChefV1Farms, masterChefV2Farms})
  // }, [masterChefV1Farms, masterChefV2Farms])

  return (0,external_react_.useMemo)(() => concat_default()(masterChefV1Farms, masterChefV2Farms).filter(pool => pool && pool.pair), [masterChefV1Farms, masterChefV2Farms]);
}
function useMasterChefV1PairAddresses() {
  const {
    chainId
  } = useActiveWeb3React();
  const shouldFetch = chainId && chainId === ChainId.SMARTBCH;
  const {
    data
  } = useSWR(shouldFetch ? ['masterChefV1PairAddresses', chainId] : null, _ => getMasterChefV1PairAddreses());
  return useMemo(() => {
    if (!data) return [];
    return data.map(data => data.pair);
  }, [data]);
}
function useMasterChefV2PairAddresses() {
  const {
    chainId
  } = useActiveWeb3React();
  const shouldFetch = chainId && chainId === ChainId.SMARTBCH;
  const {
    data
  } = useSWR(shouldFetch ? ['masterChefV2PairAddresses', chainId] : null, _ => getMasterChefV2PairAddreses());
  return useMemo(() => {
    if (!data) return [];
    return data.map(data => data.pair);
  }, [data]);
}
function useFarmPairAddresses() {
  const masterChefV1PairAddresses = useMasterChefV1PairAddresses();
  const masterChefV2PairAddresses = useMasterChefV2PairAddresses();
  return useMemo(() => concat(masterChefV1PairAddresses, masterChefV2PairAddresses), [masterChefV1PairAddresses, masterChefV2PairAddresses]);
}
;// CONCATENATED MODULE: ./src/services/graph/index.ts



/***/ }),

/***/ 4512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RW": () => (/* reexport */ blockQuery),
  "LG": () => (/* reexport */ blocksQuery),
  "We": () => (/* reexport */ dayDatasQuery),
  "B8": () => (/* reexport */ ethPriceQuery),
  "wY": () => (/* reexport */ factoryQuery),
  "vy": () => (/* reexport */ liquidityPositionsQuery),
  "r": () => (/* reexport */ masterChefV1SushiPerBlockQuery),
  "ze": () => (/* reexport */ masterChefV1TotalAllocPointQuery),
  "aS": () => (/* reexport */ pairsQuery),
  "N_": () => (/* reexport */ poolsQuery),
  "z3": () => (/* reexport */ poolsV2Query),
  "KB": () => (/* reexport */ tokenDayDatasQuery),
  "A": () => (/* reexport */ tokenPairsQuery),
  "qI": () => (/* reexport */ tokenPriceQuery),
  "Zg": () => (/* reexport */ tokenSubsetQuery),
  "zz": () => (/* reexport */ tokensQuery),
  "ky": () => (/* reexport */ transactionsQuery)
});

// UNUSED EXPORTS: bundleFields, dayDataFieldsQuery, massBlocksQuery, masterChefV1PairAddressesQuery, masterChefV2PairAddressesQuery, pairCountQuery, pairDayDatasQuery, pairFieldsQuery, pairIdsQuery, pairQuery, pairsTimeTravelQuery, tokenFieldsQuery, tokenIdsQuery, tokenQuery, uniswapUserQuery, userIdsQuery

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/services/graph/queries/blocks.ts

const blockFieldsQuery = (external_graphql_tag_default())`
  fragment blockFields on Block {
    id
    number
    timestamp
  }
`;
const blockQuery = (external_graphql_tag_default())`
  query blockQuery($where: Block_filter) {
    blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: $where) {
      ...blockFields
    }
  }
  ${blockFieldsQuery}
`;
const blocksQuery = (external_graphql_tag_default())`
  query blocksQuery($first: Int! = 1000, $skip: Int! = 0, $start: Int!, $end: Int!) {
    blocks(
      first: $first
      skip: $skip
      orderBy: number
      orderDirection: desc
      where: { timestamp_gt: $start, timestamp_lt: $end }
    ) {
      ...blockFields
    }
  }
  ${blockFieldsQuery}
`;
const massBlocksQuery = timestamps => gql`
  {
    ${timestamps.map(timestamp => `
        block${timestamp}: blocks(first: 1, orderBy: timestamp, orderDirection: asc, where: { timestamp_gt: ${timestamp} }) {
            ...blockFields
        },
      `)},
  }
  ${blockFieldsQuery}
  `;
;// CONCATENATED MODULE: ./src/services/graph/queries/exchange.ts

const factoryQuery = (external_graphql_tag_default())`
  query factoryQuery($block: Block_height) {
    factories(first: 1, block: $block) {
      id
      volumeUSD
      liquidityUSD
    }
  }
`;
const userIdsQuery = (external_graphql_tag_default())`
  query userIdsQuery($first: Int! = 1000, $skip: Int! = 0) {
    users(first: $first, skip: $skip) {
      id
    }
  }
`;
const uniswapUserQuery = (external_graphql_tag_default())`
  query uniswapUserQuery($id: String!) {
    uniswapUser: user(id: $id) {
      id
      liquidityPositions {
        id
        liquidityTokenBalance
        # historicalSnapshots {
        #   id
        #   reserve0
        #   reserve1
        #   block
        #   timestamp
        #   liquidityTokenBalance
        #   liquidityTokenTotalSupply
        # }
      }
    }
  }
`;
const bundleFields = (external_graphql_tag_default())`
  fragment bundleFields on Bundle {
    id
    ethPrice
  }
`;
const ethPriceQuery = (external_graphql_tag_default())`
  query ethPriceQuery($id: Int! = 1, $block: Block_height) {
    bundles(id: $id, block: $block) {
      ...bundleFields
    }
  }
  ${bundleFields}
`;
const tokenPriceQuery = (external_graphql_tag_default())`
  query tokenPriceQuery($id: String!) {
    token(id: $id) {
      id
      derivedETH
    }
  }
`;
const dayDataFieldsQuery = (external_graphql_tag_default())`
  fragment dayDataFields on DayData {
    id
    date
    volumeETH
    volumeUSD
    untrackedVolume
    liquidityETH
    liquidityUSD
    txCount
  }
`; // Dashboard...

const dayDatasQuery = (external_graphql_tag_default())`
  query dayDatasQuery($first: Int! = 1000, $date: Int! = 0, $where: DayData_filter) {
    dayDatas(first: $first, orderBy: date, orderDirection: desc, where: $where) {
      ...dayDataFields
    }
  }
  ${dayDataFieldsQuery}
`; // Pairs...

const pairFieldsQuery = (external_graphql_tag_default())`
  fragment pairFields on Pair {
    id
    reserveUSD
    reserveETH
    volumeUSD
    untrackedVolumeUSD
    trackedReserveETH
    token0 {
      ...PairToken
    }
    token1 {
      ...PairToken
    }
    reserve0
    reserve1
    token0Price
    token1Price
    totalSupply
    txCount
    timestamp
  }
  fragment PairToken on Token {
    id
    name
    symbol
    totalSupply
    derivedETH
  }
`;
const pairQuery = (external_graphql_tag_default())`
  query pairQuery($id: String!, $block: Block_height) {
    pair(id: $id, block: $block) {
      ...pairFields
    }
  }
  ${pairFieldsQuery}
`;
const pairIdsQuery = (external_graphql_tag_default())`
  query pairIdsQuery($skip: Int) {
    pairs(first: 1000, skip: $skip) {
      id
    }
  }
`;
const pairCountQuery = (external_graphql_tag_default())`
  query pairCountQuery {
    uniswapFactories {
      pairCount
    }
  }
`;
const pairDayDatasQuery = (external_graphql_tag_default())`
  query pairDayDatasQuery($first: Int = 1000, $skip: Int, $date: Int = 0, $pairs: [Bytes]!) {
    pairDayDatas(
      first: $first
      skip: $skip
      orderBy: date
      orderDirection: desc
      where: { pair_in: $pairs, date_gt: $date }
    ) {
      date
      pair {
        id
      }
      token0 {
        derivedETH
      }
      token1 {
        derivedETH
      }
      reserveUSD
      volumeToken0
      volumeToken1
      volumeUSD
      txCount
    }
  }
`;
const liquidityPositionsQuery = (external_graphql_tag_default())`
  query liquidityPositionSubsetQuery($first: Int! = 1000, $skip: Int, $where: LiquidityPosition_filter) {
    liquidityPositions(first: $first, skip: $skip, where: $where) {
      id
      liquidityTokenBalance
      user {
        id
      }
      pair {
        id
      }
    }
  }
`;
const pairsQuery = (external_graphql_tag_default())`
  query pair(
    $skip: Int = 0
    $first: Int = 1000
    $where: Pair_filter
    $block: Block_height
    $orderBy: Pair_orderBy = "trackedReserveETH"
    $orderDirection: OrderDirection = "desc"
  ) {
    pairs(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      block: $block
      where: $where
    ) {
      ...pairFields
    }
  }
  ${pairFieldsQuery}
`;
const pairsTimeTravelQuery = (external_graphql_tag_default())`
  query pairsTimeTravelQuery($first: Int! = 1000, $pairAddresses: [Bytes]!, $block: Block_height!) {
    pairs(
      first: $first
      block: $block
      orderBy: trackedReserveETH
      orderDirection: desc
      where: { id_in: $pairAddresses }
    ) {
      id
      reserveUSD
      trackedReserveETH
      volumeUSD
      untrackedVolumeUSD
      txCount
    }
  }
`; // Tokens...

const tokenFieldsQuery = (external_graphql_tag_default())`
  fragment tokenFields on Token {
    id
    symbol
    name
    decimals
    totalSupply
    volume
    volumeUSD
    untrackedVolumeUSD
    txCount
    liquidity
    derivedETH
  }
`;
const tokenQuery = (external_graphql_tag_default())`
  query tokenQuery($id: String!, $block: Block_height) {
    token(id: $id, block: $block) {
      ...tokenFields
    }
  }
  ${tokenFieldsQuery}
`;
const tokenIdsQuery = (external_graphql_tag_default())`
  query tokenIdsQuery($skip: Int) {
    tokens(first: 1000, skip: $skip) {
      id
    }
  }
`;
const tokenDayDatasQuery = (external_graphql_tag_default())`
  query tokenDayDatasQuery($first: Int! = 1000, $skip: Int, $block: Block_height, $where: TokenDayData_filter) {
    tokenDayDatas(first: $first, skip: $skip, orderBy: date, orderDirection: desc, where: $where, block: $block) {
      id
      date
      token {
        id
      }
      volumeUSD
      liquidityUSD
      priceUSD
      txCount
    }
  }
`;
const tokenPairsQuery = (external_graphql_tag_default())`
  query tokenPairsQuery($id: String!, $skip: Int, $block: Block_height) {
    pairs0: pairs(
      first: 1000
      skip: $skip
      orderBy: reserveUSD
      orderDirection: desc
      where: { token0: $id }
      block: $block
    ) {
      ...pairFields
    }
    pairs1: pairs(
      first: 1000
      skip: $skip
      orderBy: reserveUSD
      orderDirection: desc
      where: { token1: $id }
      block: $block
    ) {
      ...pairFields
    }
  }
  ${pairFieldsQuery}
`;
const tokensQuery = (external_graphql_tag_default())`
  query tokensQuery($first: Int! = 1000, $skip: Int, $block: Block_height, $where: Token_filter) {
    tokens(first: $first, skip: $skip, orderBy: volumeUSD, orderDirection: desc, block: $block, where: $where) {
      ...tokenFields
      dayData(first: 7, orderBy: date, orderDirection: desc) {
        id
        priceUSD
        date
      }
    }
  }
  ${tokenFieldsQuery}
`;
const tokenSubsetQuery = (external_graphql_tag_default())`
  query tokenSubsetQuery(
    $first: Int! = 1000
    $skip: Int
    $tokenAddresses: [Bytes]!
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $block: Block_height
  ) {
    tokens(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { id_in: $tokenAddresses }
      block: $block
    ) {
      ...tokenFields
    }
  }
  ${tokenFieldsQuery}
`; // Transactions...

const transactionsQuery = (external_graphql_tag_default())`
  query transactionsQuery($first: Int! = 1000, $skip: Int, $block: Block_height, $where: Swap_filter) {
    swaps(orderBy: timestamp, orderDirection: desc, where: $where) {
      id
      timestamp
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      sender
      amount0In
      amount0Out
      amount1In
      amount1Out
      amountUSD
      to
    }
    mints(orderBy: timestamp, orderDirection: desc, where: $where) {
      id
      timestamp
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
      to
    }
    burns(orderBy: timestamp, orderDirection: desc, where: $where) {
      id
      timestamp
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
      to
    }
  }
`;
;// CONCATENATED MODULE: ./src/services/graph/queries/masterchef.ts

const poolsQuery = (external_graphql_tag_default())`
  query poolsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $block: Block_height
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      block: $block
      where: $where
    ) {
      id
      pair
      allocPoint
      lastRewardBlock
      accSushiPerShare
      balance
      userCount
      owner {
        id
        sushiPerBlock
        totalAllocPoint
      }
    }
  }
`;
const masterChefV1PairAddressesQuery = (external_graphql_tag_default())`
  query masterChefV1PairAddresses(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      id
      allocPoint
      accSushiPerShare
      pair {
        id
      }
    }
  }
`;
const masterChefV1TotalAllocPointQuery = (external_graphql_tag_default())`
  query masterChefV1TotalAllocPoint($id: String! = "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd") {
    masterChef(id: $id) {
      id
      totalAllocPoint
    }
  }
`;
const masterChefV1SushiPerBlockQuery = (external_graphql_tag_default())`
  query masterChefV1SushiPerBlock($id: String! = "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd") {
    masterChef(id: $id) {
      id
      sushiPerBlock
    }
  }
`;
;// CONCATENATED MODULE: ./src/services/graph/queries/masterchef-v2.ts

const poolsV2Query = (external_graphql_tag_default())`
  query poolsV2Query(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $block: Block_height
    $where: Pool_filter! = { allocPoint_gt: 0 }
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      block: $block
      where: $where
    ) {
      id
      pair
      allocPoint
      slpBalance
      masterChef {
        id
        totalAllocPoint
      }
      rewarder {
        id
        rewardToken
        rewardPerSecond
      }
    }
  }
`;
const masterChefV2PairAddressesQuery = (external_graphql_tag_default())`
  query masterChefV2PairAddresses(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $where: Pool_filter! = { allocPoint_gt: 0 }
  ) {
    pools(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      id
      allocPoint
      accSushiPerShare
      pair {
        id
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/services/graph/queries/index.ts





/***/ })

};
;
//# sourceMappingURL=9477.js.map