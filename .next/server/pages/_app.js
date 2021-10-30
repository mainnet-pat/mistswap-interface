(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./de.json": [
		6893,
		6893
	],
	"./en.json": [
		7161,
		7161
	],
	"./es.json": [
		5454,
		5454
	],
	"./fa.json": [
		1438,
		1438
	],
	"./fr.json": [
		5877,
		5877
	],
	"./hi.json": [
		317,
		317
	],
	"./it.json": [
		7302,
		79
	],
	"./ja.json": [
		2815,
		2815
	],
	"./ko.json": [
		8199,
		8199
	],
	"./pt_BR.json": [
		7895,
		7895
	],
	"./ro.json": [
		7514,
		7514
	],
	"./ru.json": [
		9574,
		9574
	],
	"./vi.json": [
		3976,
		3976
	],
	"./zh_CN.json": [
		1655,
		1655
	],
	"./zh_TW.json": [
		7344,
		7344
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5356;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1955:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8300);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0 // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps

});

/***/ }),

/***/ 6659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Main = ({
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
  className: "flex flex-col items-center justify-start flex-grow w-full h-full",
  style: {
    height: 'max-content'
  },
  children: children
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ useFetchListCallback)
});

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/state/lists/actions.ts
var actions = __webpack_require__(3439);
// EXTERNAL MODULE: external "@ethersproject/providers"
var providers_ = __webpack_require__(6497);
// EXTERNAL MODULE: ./src/config/wallets.ts + 2 modules
var wallets = __webpack_require__(7491);
;// CONCATENATED MODULE: ./src/functions/getNetworkLibrary.ts


let networkLibrary;
function getNetworkLibrary() {
  var _networkLibrary;

  return networkLibrary = (_networkLibrary = networkLibrary) !== null && _networkLibrary !== void 0 ? _networkLibrary : new providers_.Web3Provider(wallets/* network.provider */.L5.provider);
}
// EXTERNAL MODULE: ./src/functions/list.ts
var list = __webpack_require__(7284);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./src/functions/ens.ts
var ens = __webpack_require__(1302);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./src/hooks/useFetchListCallback.ts









function useFetchListCallback() {
  const {
    chainId,
    library
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const ensResolver = (0,external_react_.useCallback)(ensName => {
    if (!library || chainId !== sdk_.ChainId.SMARTBCH) {
      if (chainId === sdk_.ChainId.SMARTBCH) {
        const networkLibrary = getNetworkLibrary();

        if (networkLibrary) {
          return (0,ens/* resolveENSContentHash */.N)(ensName, networkLibrary);
        }
      }

      throw new Error('Could not construct mainnet ENS resolver');
    }

    return (0,ens/* resolveENSContentHash */.N)(ensName, library);
  }, [chainId, library]); // note: prevent dispatch if using for list search or unsupported list

  return (0,external_react_.useCallback)(async (listUrl, sendDispatch = true) => {
    const requestId = (0,toolkit_.nanoid)();
    sendDispatch && dispatch(actions/* fetchTokenList.pending */.Dn.pending({
      requestId,
      url: listUrl
    }));
    return (0,list/* getTokenList */.HJ)(listUrl, ensResolver).then(tokenList => {
      sendDispatch && dispatch(actions/* fetchTokenList.fulfilled */.Dn.fulfilled({
        url: listUrl,
        tokenList,
        requestId
      }));
      return tokenList;
    }).catch(error => {
      console.debug(`Failed to get list at url ${listUrl}`, error);
      sendDispatch && dispatch(actions/* fetchTokenList.rejected */.Dn.rejected({
        url: listUrl,
        requestId,
        errorMessage: error.message
      }));
      throw error;
    });
  }, [dispatch, ensResolver]);
}

/***/ }),

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
// EXTERNAL MODULE: ./src/entities/Fraction.ts
var Fraction = __webpack_require__(6197);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@ethersproject/constants"
var constants_ = __webpack_require__(6148);
// EXTERNAL MODULE: external "@ethersproject/units"
var units_ = __webpack_require__(685);
;// CONCATENATED MODULE: ./src/bootstrap.ts
// Bootstrap...






if (false) {}

bignumber_.BigNumber.prototype.mulDiv = function (multiplier, divisor) {
  return bignumber_.BigNumber.from(divisor).gt(0) ? bignumber_.BigNumber.from(this).mul(multiplier).div(divisor) : constants_.Zero;
};

bignumber_.BigNumber.prototype.toFraction = function (decimals = 18) {
  return Fraction/* default.from */.Z.from(this, decimals ? bignumber_.BigNumber.from(10).pow(decimals) : constants_.Zero);
};

bignumber_.BigNumber.prototype.toFixed = function (decimals = 18, maxFractions = 8) {
  return this.toFraction(decimals, 10).toString(bignumber_.BigNumber.from(maxFractions).toNumber());
};

String.prototype.toBigNumber = function (decimals) {
  try {
    return (0,units_.parseUnits)(this, decimals);
  } catch (error) {
    console.debug(`Failed to parse input amount: "${this}"`, error);
  }

  return bignumber_.BigNumber.from(0);
};
// EXTERNAL MODULE: ./node_modules/make-plural/plurals.mjs
var plurals = __webpack_require__(2333);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
// EXTERNAL MODULE: ./src/state/application/actions.ts
var actions = __webpack_require__(434);
;// CONCATENATED MODULE: ./src/state/application/reducer.ts


const initialState = {
  blockNumber: {},
  popupList: [],
  openModal: null,
  kashiApprovalPending: ''
};
/* harmony default export */ const reducer = ((0,toolkit_.createReducer)(initialState, builder => builder.addCase(actions/* updateBlockNumber */.fG, (state, action) => {
  const {
    chainId,
    blockNumber
  } = action.payload;

  if (typeof state.blockNumber[chainId] !== 'number') {
    state.blockNumber[chainId] = blockNumber;
  } else {
    state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId]);
  }
}).addCase(actions/* setOpenModal */.i3, (state, action) => {
  state.openModal = action.payload;
}).addCase(actions/* addPopup */.i8, (state, {
  payload: {
    content,
    key,
    removeAfterMs = 15000
  }
}) => {
  state.popupList = (key ? state.popupList.filter(popup => popup.key !== key) : state.popupList).concat([{
    key: key || (0,toolkit_.nanoid)(),
    show: true,
    content,
    removeAfterMs
  }]);
}).addCase(actions/* removePopup */.hC, (state, {
  payload: {
    key
  }
}) => {
  state.popupList.forEach(p => {
    if (p.key === key) {
      p.show = false;
    }
  });
}).addCase(actions/* setKashiApprovalPending */.ZD, (state, action) => {
  state.kashiApprovalPending = action.payload;
})));
// EXTERNAL MODULE: ./src/state/burn/actions.ts
var burn_actions = __webpack_require__(9161);
;// CONCATENATED MODULE: ./src/state/burn/reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducer_initialState = {
  independentField: burn_actions/* Field.LIQUIDITY_PERCENT */.g.LIQUIDITY_PERCENT,
  typedValue: '0'
};
/* harmony default export */ const burn_reducer = ((0,toolkit_.createReducer)(reducer_initialState, builder => builder.addCase(burn_actions/* typeInput */.L, (state, {
  payload: {
    field,
    typedValue
  }
}) => {
  return _objectSpread(_objectSpread({}, state), {}, {
    independentField: field,
    typedValue
  });
})));
// EXTERNAL MODULE: ./src/state/create/actions.ts
var create_actions = __webpack_require__(3777);
;// CONCATENATED MODULE: ./src/state/create/reducer.ts
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const create_reducer_initialState = {
  independentField: create_actions/* Field.COLLATERAL */.gN.COLLATERAL,
  typedValue: '',
  [create_actions/* Field.COLLATERAL */.gN.COLLATERAL]: {
    currencyId: ''
  },
  [create_actions/* Field.ASSET */.gN.ASSET]: {
    currencyId: ''
  }
};
/* harmony default export */ const create_reducer = ((0,toolkit_.createReducer)(create_reducer_initialState, builder => builder.addCase(create_actions/* replaceCreateState */.m5, (state, {
  payload: {
    typedValue,
    field,
    collateralId,
    assetId
  }
}) => {
  return {
    [create_actions/* Field.COLLATERAL */.gN.COLLATERAL]: {
      currencyId: collateralId
    },
    [create_actions/* Field.ASSET */.gN.ASSET]: {
      currencyId: assetId
    },
    independentField: field,
    typedValue: typedValue
  };
}).addCase(create_actions/* selectCurrency */.j, (state, {
  payload: {
    currencyId,
    field
  }
}) => {
  const otherField = field === create_actions/* Field.COLLATERAL */.gN.COLLATERAL ? create_actions/* Field.ASSET */.gN.ASSET : create_actions/* Field.COLLATERAL */.gN.COLLATERAL;

  if (currencyId === state[otherField].currencyId) {
    // the case where we have to swap the order
    return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
      independentField: state.independentField === create_actions/* Field.COLLATERAL */.gN.COLLATERAL ? create_actions/* Field.ASSET */.gN.ASSET : create_actions/* Field.COLLATERAL */.gN.COLLATERAL,
      [field]: {
        currencyId: currencyId
      },
      [otherField]: {
        currencyId: state[field].currencyId
      }
    });
  } else {
    // the normal case
    return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
      [field]: {
        currencyId: currencyId
      }
    });
  }
}).addCase(create_actions/* switchCurrencies */.KS, state => {
  return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    independentField: state.independentField === create_actions/* Field.COLLATERAL */.gN.COLLATERAL ? create_actions/* Field.ASSET */.gN.ASSET : create_actions/* Field.COLLATERAL */.gN.COLLATERAL,
    [create_actions/* Field.COLLATERAL */.gN.COLLATERAL]: {
      currencyId: state[create_actions/* Field.ASSET */.gN.ASSET].currencyId
    },
    [create_actions/* Field.ASSET */.gN.ASSET]: {
      currencyId: state[create_actions/* Field.COLLATERAL */.gN.COLLATERAL].currencyId
    }
  });
}).addCase(create_actions/* typeInput */.LC, (state, {
  payload: {
    field,
    typedValue
  }
}) => {
  return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    independentField: field,
    typedValue
  });
})));
// EXTERNAL MODULE: ./src/state/limit-order/reducer.ts
var limit_order_reducer = __webpack_require__(3760);
// EXTERNAL MODULE: ./src/config/token-lists.ts
var token_lists = __webpack_require__(5090);
;// CONCATENATED MODULE: external "@uniswap/token-lists"
const token_lists_namespaceObject = require("@uniswap/token-lists");
// EXTERNAL MODULE: ./src/state/lists/actions.ts
var lists_actions = __webpack_require__(3439);
;// CONCATENATED MODULE: ./src/state/global/actions.ts
 // fired once when the app reloads but before the app renders
// allows any updates to be applied to store data loaded from localStorage

const updateVersion = (0,toolkit_.createAction)('global/updateVersion');
;// CONCATENATED MODULE: ./src/state/lists/reducer.ts
function lists_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function lists_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { lists_reducer_ownKeys(Object(source), true).forEach(function (key) { lists_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { lists_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function lists_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const NEW_LIST_STATE = {
  error: null,
  current: null,
  loadingRequestId: null,
  pendingUpdate: null
};
const lists_reducer_initialState = {
  lastInitializedDefaultListOfLists: token_lists/* DEFAULT_LIST_OF_LISTS */.Lx,
  byUrl: lists_reducer_objectSpread({}, token_lists/* DEFAULT_LIST_OF_LISTS.reduce */.Lx.reduce((memo, listUrl) => {
    memo[listUrl] = NEW_LIST_STATE;
    return memo;
  }, {})),
  activeListUrls: token_lists/* DEFAULT_ACTIVE_LIST_URLS */.c8
};
/* harmony default export */ const lists_reducer = ((0,toolkit_.createReducer)(lists_reducer_initialState, builder => builder.addCase(lists_actions/* fetchTokenList.pending */.Dn.pending, (state, {
  payload: {
    requestId,
    url
  }
}) => {
  state.byUrl[url] = lists_reducer_objectSpread(lists_reducer_objectSpread({
    current: null,
    pendingUpdate: null
  }, state.byUrl[url]), {}, {
    loadingRequestId: requestId,
    error: null
  });
}).addCase(lists_actions/* fetchTokenList.fulfilled */.Dn.fulfilled, (state, {
  payload: {
    requestId,
    tokenList,
    url
  }
}) => {
  var _state$byUrl$url, _state$byUrl$url2;

  const current = (_state$byUrl$url = state.byUrl[url]) === null || _state$byUrl$url === void 0 ? void 0 : _state$byUrl$url.current;
  const loadingRequestId = (_state$byUrl$url2 = state.byUrl[url]) === null || _state$byUrl$url2 === void 0 ? void 0 : _state$byUrl$url2.loadingRequestId; // no-op if update does nothing

  if (current) {
    const upgradeType = (0,token_lists_namespaceObject.getVersionUpgrade)(current.version, tokenList.version);
    if (upgradeType === token_lists_namespaceObject.VersionUpgrade.NONE) return;

    if (loadingRequestId === null || loadingRequestId === requestId) {
      state.byUrl[url] = lists_reducer_objectSpread(lists_reducer_objectSpread({}, state.byUrl[url]), {}, {
        loadingRequestId: null,
        error: null,
        current: current,
        pendingUpdate: tokenList
      });
    }
  } else {
    // activate if on default active
    if (token_lists/* DEFAULT_ACTIVE_LIST_URLS.includes */.c8.includes(url)) {
      var _state$activeListUrls;

      (_state$activeListUrls = state.activeListUrls) === null || _state$activeListUrls === void 0 ? void 0 : _state$activeListUrls.push(url);
    }

    state.byUrl[url] = lists_reducer_objectSpread(lists_reducer_objectSpread({}, state.byUrl[url]), {}, {
      loadingRequestId: null,
      error: null,
      current: tokenList,
      pendingUpdate: null
    });
  }
}).addCase(lists_actions/* fetchTokenList.rejected */.Dn.rejected, (state, {
  payload: {
    url,
    requestId,
    errorMessage
  }
}) => {
  var _state$byUrl$url3;

  if (((_state$byUrl$url3 = state.byUrl[url]) === null || _state$byUrl$url3 === void 0 ? void 0 : _state$byUrl$url3.loadingRequestId) !== requestId) {
    // no-op since it's not the latest request
    return;
  }

  state.byUrl[url] = lists_reducer_objectSpread(lists_reducer_objectSpread({}, state.byUrl[url]), {}, {
    loadingRequestId: null,
    error: errorMessage,
    current: null,
    pendingUpdate: null
  });
}).addCase(lists_actions/* addList */.$8, (state, {
  payload: url
}) => {
  if (!state.byUrl[url]) {
    state.byUrl[url] = NEW_LIST_STATE;
  }
}).addCase(lists_actions/* removeList */.J_, (state, {
  payload: url
}) => {
  if (state.byUrl[url]) {
    delete state.byUrl[url];
  } // remove list from active urls if needed


  if (state.activeListUrls && state.activeListUrls.includes(url)) {
    state.activeListUrls = state.activeListUrls.filter(u => u !== url);
  }
}).addCase(lists_actions/* enableList */.ic, (state, {
  payload: url
}) => {
  if (!state.byUrl[url]) {
    state.byUrl[url] = NEW_LIST_STATE;
  }

  if (state.activeListUrls && !state.activeListUrls.includes(url)) {
    state.activeListUrls.push(url);
  }

  if (!state.activeListUrls) {
    state.activeListUrls = [url];
  }
}).addCase(lists_actions/* disableList */.K$, (state, {
  payload: url
}) => {
  if (state.activeListUrls && state.activeListUrls.includes(url)) {
    state.activeListUrls = state.activeListUrls.filter(u => u !== url);
  }
}).addCase(lists_actions/* acceptListUpdate */.xJ, (state, {
  payload: url
}) => {
  var _state$byUrl$url4;

  if (!((_state$byUrl$url4 = state.byUrl[url]) !== null && _state$byUrl$url4 !== void 0 && _state$byUrl$url4.pendingUpdate)) {
    throw new Error('accept list update called without pending update');
  }

  state.byUrl[url] = lists_reducer_objectSpread(lists_reducer_objectSpread({}, state.byUrl[url]), {}, {
    pendingUpdate: null,
    current: state.byUrl[url].pendingUpdate
  });
}).addCase(updateVersion, state => {
  // state loaded from localStorage, but new lists have never been initialized
  if (!state.lastInitializedDefaultListOfLists) {
    state.byUrl = lists_reducer_initialState.byUrl;
    state.activeListUrls = lists_reducer_initialState.activeListUrls;
  } else if (state.lastInitializedDefaultListOfLists) {
    const lastInitializedSet = state.lastInitializedDefaultListOfLists.reduce((s, l) => s.add(l), new Set());
    const newListOfListsSet = token_lists/* DEFAULT_LIST_OF_LISTS.reduce */.Lx.reduce((s, l) => s.add(l), new Set());
    token_lists/* DEFAULT_LIST_OF_LISTS.forEach */.Lx.forEach(listUrl => {
      if (!lastInitializedSet.has(listUrl)) {
        state.byUrl[listUrl] = NEW_LIST_STATE;
      }
    });
    state.lastInitializedDefaultListOfLists.forEach(listUrl => {
      if (!newListOfListsSet.has(listUrl)) {
        delete state.byUrl[listUrl];
      }
    });
  }

  state.lastInitializedDefaultListOfLists = token_lists/* DEFAULT_LIST_OF_LISTS */.Lx; // if no active lists, activate defaults

  if (!state.activeListUrls) {
    state.activeListUrls = token_lists/* DEFAULT_ACTIVE_LIST_URLS */.c8; // for each list on default list, initialize if needed

    token_lists/* DEFAULT_ACTIVE_LIST_URLS.map */.c8.map(listUrl => {
      if (!state.byUrl[listUrl]) {
        state.byUrl[listUrl] = NEW_LIST_STATE;
      }

      return true;
    });
  }
})));
// EXTERNAL MODULE: ./src/state/mint/actions.ts
var mint_actions = __webpack_require__(3045);
;// CONCATENATED MODULE: ./src/state/mint/reducer.ts
function mint_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function mint_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mint_reducer_ownKeys(Object(source), true).forEach(function (key) { mint_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mint_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mint_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const mint_reducer_initialState = {
  independentField: mint_actions/* Field.CURRENCY_A */.gN.CURRENCY_A,
  typedValue: '',
  otherTypedValue: ''
};
/* harmony default export */ const mint_reducer = ((0,toolkit_.createReducer)(mint_reducer_initialState, builder => builder.addCase(mint_actions/* resetMintState */.dA, () => mint_reducer_initialState).addCase(mint_actions/* typeInput */.LC, (state, {
  payload: {
    field,
    typedValue,
    noLiquidity
  }
}) => {
  if (noLiquidity) {
    // they're typing into the field they've last typed in
    if (field === state.independentField) {
      return mint_reducer_objectSpread(mint_reducer_objectSpread({}, state), {}, {
        independentField: field,
        typedValue
      });
    } // they're typing into a new field, store the other value
    else {
      return mint_reducer_objectSpread(mint_reducer_objectSpread({}, state), {}, {
        independentField: field,
        typedValue,
        otherTypedValue: state.typedValue
      });
    }
  } else {
    return mint_reducer_objectSpread(mint_reducer_objectSpread({}, state), {}, {
      independentField: field,
      typedValue,
      otherTypedValue: ''
    });
  }
})));
// EXTERNAL MODULE: ./src/state/multicall/actions.ts
var multicall_actions = __webpack_require__(8995);
// EXTERNAL MODULE: ./src/state/multicall/utils.ts
var utils = __webpack_require__(7601);
;// CONCATENATED MODULE: ./src/state/multicall/reducer.ts



const multicall_reducer_initialState = {
  callResults: {}
};
/* harmony default export */ const multicall_reducer = ((0,toolkit_.createReducer)(multicall_reducer_initialState, builder => builder.addCase(multicall_actions/* addMulticallListeners */.Dd, (state, {
  payload: {
    calls,
    chainId,
    options: {
      blocksPerFetch
    }
  }
}) => {
  var _listeners$chainId;

  const listeners = state.callListeners ? state.callListeners : state.callListeners = {};
  listeners[chainId] = (_listeners$chainId = listeners[chainId]) !== null && _listeners$chainId !== void 0 ? _listeners$chainId : {};
  calls.forEach(call => {
    var _listeners$chainId$ca, _listeners$chainId$ca2;

    const callKey = (0,utils/* toCallKey */.k)(call);
    listeners[chainId][callKey] = (_listeners$chainId$ca = listeners[chainId][callKey]) !== null && _listeners$chainId$ca !== void 0 ? _listeners$chainId$ca : {};
    listeners[chainId][callKey][blocksPerFetch] = ((_listeners$chainId$ca2 = listeners[chainId][callKey][blocksPerFetch]) !== null && _listeners$chainId$ca2 !== void 0 ? _listeners$chainId$ca2 : 0) + 1;
  });
}).addCase(multicall_actions/* removeMulticallListeners */.$x, (state, {
  payload: {
    chainId,
    calls,
    options: {
      blocksPerFetch
    }
  }
}) => {
  const listeners = state.callListeners ? state.callListeners : state.callListeners = {};
  if (!listeners[chainId]) return;
  calls.forEach(call => {
    const callKey = (0,utils/* toCallKey */.k)(call);
    if (!listeners[chainId][callKey]) return;
    if (!listeners[chainId][callKey][blocksPerFetch]) return;

    if (listeners[chainId][callKey][blocksPerFetch] === 1) {
      delete listeners[chainId][callKey][blocksPerFetch];
    } else {
      listeners[chainId][callKey][blocksPerFetch]--;
    }
  });
}).addCase(multicall_actions/* fetchingMulticallResults */.nu, (state, {
  payload: {
    chainId,
    fetchingBlockNumber,
    calls
  }
}) => {
  var _state$callResults$ch;

  state.callResults[chainId] = (_state$callResults$ch = state.callResults[chainId]) !== null && _state$callResults$ch !== void 0 ? _state$callResults$ch : {};
  calls.forEach(call => {
    const callKey = (0,utils/* toCallKey */.k)(call);
    const current = state.callResults[chainId][callKey];

    if (!current) {
      state.callResults[chainId][callKey] = {
        fetchingBlockNumber
      };
    } else {
      var _current$fetchingBloc;

      if (((_current$fetchingBloc = current.fetchingBlockNumber) !== null && _current$fetchingBloc !== void 0 ? _current$fetchingBloc : 0) >= fetchingBlockNumber) return;
      state.callResults[chainId][callKey].fetchingBlockNumber = fetchingBlockNumber;
    }
  });
}).addCase(multicall_actions/* errorFetchingMulticallResults */.wC, (state, {
  payload: {
    fetchingBlockNumber,
    chainId,
    calls
  }
}) => {
  var _state$callResults$ch2;

  state.callResults[chainId] = (_state$callResults$ch2 = state.callResults[chainId]) !== null && _state$callResults$ch2 !== void 0 ? _state$callResults$ch2 : {};
  calls.forEach(call => {
    const callKey = (0,utils/* toCallKey */.k)(call);
    const current = state.callResults[chainId][callKey];
    if (!current) return; // only should be dispatched if we are already fetching

    if (current.fetchingBlockNumber === fetchingBlockNumber) {
      delete current.fetchingBlockNumber;
      current.data = null;
      current.blockNumber = fetchingBlockNumber;
    }
  });
}).addCase(multicall_actions/* updateMulticallResults */.zT, (state, {
  payload: {
    chainId,
    results,
    blockNumber
  }
}) => {
  var _state$callResults$ch3;

  state.callResults[chainId] = (_state$callResults$ch3 = state.callResults[chainId]) !== null && _state$callResults$ch3 !== void 0 ? _state$callResults$ch3 : {};
  Object.keys(results).forEach(callKey => {
    var _current$blockNumber;

    const current = state.callResults[chainId][callKey];
    if (((_current$blockNumber = current === null || current === void 0 ? void 0 : current.blockNumber) !== null && _current$blockNumber !== void 0 ? _current$blockNumber : 0) > blockNumber) return;
    state.callResults[chainId][callKey] = {
      data: results[callKey],
      blockNumber
    };
  });
})));
// EXTERNAL MODULE: ./src/state/swap/actions.ts
var swap_actions = __webpack_require__(4690);
;// CONCATENATED MODULE: ./src/state/swap/reducer.ts
function swap_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function swap_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { swap_reducer_ownKeys(Object(source), true).forEach(function (key) { swap_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { swap_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function swap_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const swap_reducer_initialState = {
  independentField: swap_actions/* Field.INPUT */.gN.INPUT,
  typedValue: '',
  [swap_actions/* Field.INPUT */.gN.INPUT]: {
    currencyId: ''
  },
  [swap_actions/* Field.OUTPUT */.gN.OUTPUT]: {
    currencyId: ''
  },
  recipient: null
};
/* harmony default export */ const swap_reducer = ((0,toolkit_.createReducer)(swap_reducer_initialState, builder => builder.addCase(swap_actions/* replaceSwapState */.mV, (state, {
  payload: {
    typedValue,
    recipient,
    field,
    inputCurrencyId,
    outputCurrencyId
  }
}) => {
  return {
    [swap_actions/* Field.INPUT */.gN.INPUT]: {
      currencyId: inputCurrencyId
    },
    [swap_actions/* Field.OUTPUT */.gN.OUTPUT]: {
      currencyId: outputCurrencyId
    },
    independentField: field,
    typedValue: typedValue,
    recipient
  };
}).addCase(swap_actions/* selectCurrency */.j, (state, {
  payload: {
    currencyId,
    field
  }
}) => {
  const otherField = field === swap_actions/* Field.INPUT */.gN.INPUT ? swap_actions/* Field.OUTPUT */.gN.OUTPUT : swap_actions/* Field.INPUT */.gN.INPUT; // console.log({ currencyId, other: state[otherField].currencyId, test: state[otherField].currencyId }, currencyId === state[otherField].currencyId)

  if (currencyId === state[otherField].currencyId) {
    // the case where we have to swap the order
    return swap_reducer_objectSpread(swap_reducer_objectSpread({}, state), {}, {
      independentField: state.independentField === swap_actions/* Field.INPUT */.gN.INPUT ? swap_actions/* Field.OUTPUT */.gN.OUTPUT : swap_actions/* Field.INPUT */.gN.INPUT,
      [field]: {
        currencyId: currencyId
      },
      [otherField]: {
        currencyId: state[field].currencyId
      }
    });
  } else {
    // the normal case
    return swap_reducer_objectSpread(swap_reducer_objectSpread({}, state), {}, {
      [field]: {
        currencyId: currencyId
      }
    });
  }
}).addCase(swap_actions/* switchCurrencies */.KS, state => {
  return swap_reducer_objectSpread(swap_reducer_objectSpread({}, state), {}, {
    independentField: state.independentField === swap_actions/* Field.INPUT */.gN.INPUT ? swap_actions/* Field.OUTPUT */.gN.OUTPUT : swap_actions/* Field.INPUT */.gN.INPUT,
    [swap_actions/* Field.INPUT */.gN.INPUT]: {
      currencyId: state[swap_actions/* Field.OUTPUT */.gN.OUTPUT].currencyId
    },
    [swap_actions/* Field.OUTPUT */.gN.OUTPUT]: {
      currencyId: state[swap_actions/* Field.INPUT */.gN.INPUT].currencyId
    }
  });
}).addCase(swap_actions/* typeInput */.LC, (state, {
  payload: {
    field,
    typedValue
  }
}) => {
  return swap_reducer_objectSpread(swap_reducer_objectSpread({}, state), {}, {
    independentField: field,
    typedValue
  });
}).addCase(swap_actions/* setRecipient */.He, (state, {
  payload: {
    recipient
  }
}) => {
  state.recipient = recipient;
})));
// EXTERNAL MODULE: ./src/state/transactions/actions.ts
var transactions_actions = __webpack_require__(7219);
;// CONCATENATED MODULE: ./src/state/transactions/reducer.ts



const now = () => new Date().getTime();

const transactions_reducer_initialState = {};
/* harmony default export */ const transactions_reducer = ((0,toolkit_.createReducer)(transactions_reducer_initialState, builder => builder.addCase(transactions_actions/* addTransaction */.dT, (transactions, {
  payload: {
    chainId,
    from,
    hash,
    approval,
    summary,
    claim,
    archer
  }
}) => {
  var _transactions$chainId, _transactions$chainId2;

  if ((_transactions$chainId = transactions[chainId]) !== null && _transactions$chainId !== void 0 && _transactions$chainId[hash]) {
    throw Error('Attempted to add existing transaction.');
  }

  const txs = (_transactions$chainId2 = transactions[chainId]) !== null && _transactions$chainId2 !== void 0 ? _transactions$chainId2 : {};
  txs[hash] = {
    hash,
    approval,
    summary,
    claim,
    from,
    addedTime: now(),
    archer
  };
  transactions[chainId] = txs;
}).addCase(transactions_actions/* clearAllTransactions */.fY, (transactions, {
  payload: {
    chainId
  }
}) => {
  if (!transactions[chainId]) return;
  transactions[chainId] = {};
}).addCase(transactions_actions/* checkedTransaction */.LN, (transactions, {
  payload: {
    chainId,
    hash,
    blockNumber
  }
}) => {
  var _transactions$chainId3;

  const tx = (_transactions$chainId3 = transactions[chainId]) === null || _transactions$chainId3 === void 0 ? void 0 : _transactions$chainId3[hash];

  if (!tx) {
    return;
  }

  if (!tx.lastCheckedBlockNumber) {
    tx.lastCheckedBlockNumber = blockNumber;
  } else {
    tx.lastCheckedBlockNumber = Math.max(blockNumber, tx.lastCheckedBlockNumber);
  }
}).addCase(transactions_actions/* finalizeTransaction */.Aw, (transactions, {
  payload: {
    hash,
    chainId,
    receipt
  }
}) => {
  var _transactions$chainId4;

  const tx = (_transactions$chainId4 = transactions[chainId]) === null || _transactions$chainId4 === void 0 ? void 0 : _transactions$chainId4[hash];

  if (!tx) {
    return;
  }

  tx.receipt = receipt;
  tx.confirmedTime = now();
})));
// EXTERNAL MODULE: ./src/config/archer.ts
var archer = __webpack_require__(423);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8532);
// EXTERNAL MODULE: ./src/state/user/actions.ts
var user_actions = __webpack_require__(8887);
;// CONCATENATED MODULE: ./src/state/user/reducer.ts






const currentTimestamp = () => new Date().getTime();

function pairKey(token0Address, token1Address) {
  return `${token0Address};${token1Address}`;
}

const user_reducer_initialState = {
  userDarkMode: null,
  userFarmFilter: 'all',
  matchesDarkMode: false,
  userExpertMode: false,
  userSingleHopOnly: false,
  userSlippageTolerance: constants/* INITIAL_ALLOWED_SLIPPAGE */.gv,
  userDeadline: constants/* DEFAULT_DEADLINE_FROM_NOW */.PY,
  tokens: {},
  pairs: {},
  timestamp: currentTimestamp(),
  URLWarningVisible: true,
  userArcherUseRelay: false,
  userArcherGasPrice: archer/* DEFAULT_ARCHER_GAS_PRICES.4.toString */.lW[4].toString(),
  userArcherETHTip: archer/* DEFAULT_ARCHER_ETH_TIP.toString */.wP.toString(),
  userArcherGasEstimate: archer/* DEFAULT_ARCHER_GAS_ESTIMATE.toString */.Rg.toString(),
  userArcherTipManualOverride: false
};
/* harmony default export */ const user_reducer = ((0,toolkit_.createReducer)(user_reducer_initialState, builder => builder.addCase(updateVersion, state => {
  // slippage isnt being tracked in local storage, reset to default
  // noinspection SuspiciousTypeOfGuard
  if (typeof state.userSlippageTolerance !== 'number') {
    state.userSlippageTolerance = constants/* INITIAL_ALLOWED_SLIPPAGE */.gv;
  } // deadline isnt being tracked in local storage, reset to default
  // noinspection SuspiciousTypeOfGuard


  if (typeof state.userDeadline !== 'number') {
    state.userDeadline = constants/* DEFAULT_DEADLINE_FROM_NOW */.PY;
  }

  state.lastUpdateVersionTimestamp = currentTimestamp();
}).addCase(user_actions/* updateUserDarkMode */.vP, (state, action) => {
  state.userDarkMode = action.payload.userDarkMode;
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* updateUserFarmFilter */.Fq, (state, action) => {
  state.userFarmFilter = action.payload.userFarmFilter;
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* updateMatchesDarkMode */._I, (state, action) => {
  state.matchesDarkMode = action.payload.matchesDarkMode;
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* updateUserExpertMode */.zv, (state, action) => {
  state.userExpertMode = action.payload.userExpertMode;
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* updateUserSlippageTolerance */.rQ, (state, action) => {
  state.userSlippageTolerance = action.payload.userSlippageTolerance;
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* updateUserDeadline */.gw, (state, action) => {
  state.userDeadline = action.payload.userDeadline;
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* updateUserSingleHopOnly */.fO, (state, action) => {
  state.userSingleHopOnly = action.payload.userSingleHopOnly;
}).addCase(user_actions/* addSerializedToken */.eg, (state, {
  payload: {
    serializedToken
  }
}) => {
  state.tokens[serializedToken.chainId] = state.tokens[serializedToken.chainId] || {};
  state.tokens[serializedToken.chainId][serializedToken.address] = serializedToken;
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* removeSerializedToken */.zQ, (state, {
  payload: {
    address,
    chainId
  }
}) => {
  state.tokens[chainId] = state.tokens[chainId] || {};
  delete state.tokens[chainId][address];
  state.timestamp = currentTimestamp();
}).addCase(user_actions/* addSerializedPair */.f9, (state, {
  payload: {
    serializedPair
  }
}) => {
  if (serializedPair.token0.chainId === serializedPair.token1.chainId && serializedPair.token0.address !== serializedPair.token1.address) {
    const chainId = serializedPair.token0.chainId;
    state.pairs[chainId] = state.pairs[chainId] || {};
    state.pairs[chainId][pairKey(serializedPair.token0.address, serializedPair.token1.address)] = serializedPair;
  }

  state.timestamp = currentTimestamp();
}).addCase(user_actions/* removeSerializedPair */.cd, (state, {
  payload: {
    chainId,
    tokenAAddress,
    tokenBAddress
  }
}) => {
  if (state.pairs[chainId]) {
    // just delete both keys if either exists
    delete state.pairs[chainId][pairKey(tokenAAddress, tokenBAddress)];
    delete state.pairs[chainId][pairKey(tokenBAddress, tokenAAddress)];
  }

  state.timestamp = currentTimestamp();
}).addCase(user_actions/* toggleURLWarning */.ZU, state => {
  state.URLWarningVisible = !state.URLWarningVisible;
}).addCase(user_actions/* updateUserArcherUseRelay */.WZ, (state, action) => {
  state.userArcherUseRelay = action.payload.userArcherUseRelay;
}).addCase(user_actions/* updateUserArcherGasPrice */.HI, (state, action) => {
  state.userArcherGasPrice = action.payload.userArcherGasPrice;
}).addCase(user_actions/* updateUserArcherETHTip */.Z_, (state, action) => {
  state.userArcherETHTip = action.payload.userArcherETHTip;
}).addCase(user_actions/* updateUserArcherGasEstimate */.N1, (state, action) => {
  state.userArcherGasEstimate = action.payload.userArcherGasEstimate;
}).addCase(user_actions/* updateUserArcherTipManualOverride */.NL, (state, action) => {
  state.userArcherTipManualOverride = action.payload.userArcherTipManualOverride;
})));
;// CONCATENATED MODULE: ./src/state/reducer.ts











const reducer_reducer = (0,toolkit_.combineReducers)({
  application: reducer,
  user: user_reducer,
  transactions: transactions_reducer,
  swap: swap_reducer,
  mint: mint_reducer,
  burn: burn_reducer,
  multicall: multicall_reducer,
  lists: lists_reducer,
  limitOrder: limit_order_reducer/* default */.Z,
  create: create_reducer
});
/* harmony default export */ const state_reducer = (reducer_reducer);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./src/state/index.ts
function state_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function state_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { state_ownKeys(Object(source), true).forEach(function (key) { state_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { state_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function state_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let store;
const PERSISTED_KEYS = ['user', 'transactions', 'lists'];
const persistConfig = {
  key: 'root',
  whitelist: PERSISTED_KEYS,
  storage: (storage_default()) // stateReconciler: false,

};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, state_reducer);

function makeStore(preloadedState = undefined) {
  return (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: {
        ignoredActions: [external_redux_persist_namespaceObject.FLUSH, external_redux_persist_namespaceObject.REHYDRATE, external_redux_persist_namespaceObject.PAUSE, external_redux_persist_namespaceObject.PERSIST, external_redux_persist_namespaceObject.PURGE, external_redux_persist_namespaceObject.REGISTER]
      }
    }),
    devTools: false,
    preloadedState
  });
}

const getOrCreateStore = (preloadedState = undefined) => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = makeStore(state_objectSpread(state_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
store = getOrCreateStore(); // export function useStore(preloadedState) {
//   const store = useMemo(() => getOrCreateStore(preloadedState), [preloadedState])
//   return store
// }

/* harmony default export */ const state = (store);
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: ./src/hooks/useDebounce.ts
var useDebounce = __webpack_require__(451);
;// CONCATENATED MODULE: ./src/hooks/useIsWindowVisible.ts

const VISIBILITY_STATE_SUPPORTED = typeof document !== 'undefined' && 'visibilityState' in document;

function isWindowVisible() {
  return !VISIBILITY_STATE_SUPPORTED || document.visibilityState !== 'hidden';
}
/**
 * Returns whether the window is currently visible to the user.
 */


function useIsWindowVisible() {
  const {
    0: focused,
    1: setFocused
  } = (0,external_react_.useState)(isWindowVisible());
  const listener = (0,external_react_.useCallback)(() => {
    setFocused(isWindowVisible());
  }, [setFocused]);
  (0,external_react_.useEffect)(() => {
    if (!VISIBILITY_STATE_SUPPORTED) return undefined;
    document.addEventListener('visibilitychange', listener);
    return () => {
      document.removeEventListener('visibilitychange', listener);
    };
  }, [listener]);
  return focused;
}
;// CONCATENATED MODULE: ./src/state/application/updater.ts






function Updater() {
  const {
    library,
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const windowVisible = useIsWindowVisible();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    chainId,
    blockNumber: null
  });
  const blockNumberCallback = (0,external_react_.useCallback)(blockNumber => {
    setState(state => {
      if (chainId === state.chainId) {
        if (typeof state.blockNumber !== 'number') return {
          chainId,
          blockNumber
        };
        return {
          chainId,
          blockNumber: Math.max(blockNumber, state.blockNumber)
        };
      }

      return state;
    });
  }, [chainId, setState]); // attach/detach listeners

  (0,external_react_.useEffect)(() => {
    if (!library || !chainId || !windowVisible) return undefined;
    setState({
      chainId,
      blockNumber: null
    });
    library.getBlockNumber().then(blockNumberCallback).catch(error => console.error(`Failed to get block number for chainId: ${chainId}`, error));
    library.on('block', blockNumberCallback);
    return () => {
      library.removeListener('block', blockNumberCallback);
    };
  }, [dispatch, chainId, library, blockNumberCallback, windowVisible]);
  const debouncedState = (0,useDebounce/* default */.Z)(state, 100);
  (0,external_react_.useEffect)(() => {
    if (!debouncedState.chainId || !debouncedState.blockNumber || !windowVisible) return;
    dispatch((0,actions/* updateBlockNumber */.fG)({
      chainId: debouncedState.chainId,
      blockNumber: debouncedState.blockNumber
    }));
  }, [windowVisible, dispatch, debouncedState.blockNumber, debouncedState.chainId]);
  return null;
}
// EXTERNAL MODULE: ./src/components/Footer/index.tsx + 1 modules
var Footer = __webpack_require__(5253);
// EXTERNAL MODULE: ./src/components/Header/index.tsx + 12 modules
var Header = __webpack_require__(1451);
// EXTERNAL MODULE: ./src/components/Main/index.tsx
var Main = __webpack_require__(6659);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Banner/index.tsx




const Banner = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "relative w-full bg-purple bg-opacity-20",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pr-16 sm:text-center sm:px-16",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "font-medium text-white",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "md:hidden",
          children: "We announced a new product!"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "hidden md:inline",
          children: "Big news! We're excited to announce a brand new product."
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "block sm:ml-2 sm:inline-block",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            className: "font-bold text-white underline",
            children: [' ', "Learn more ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              "aria-hidden": "true",
              children: "\u2192"
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:pt-1 sm:pr-2 sm:items-start",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "flex p-2 focus:outline-none",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: "Dismiss"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
          className: "w-6 h-6 text-white",
          "aria-hidden": "true"
        })]
      })
    })]
  })
});

/* harmony default export */ const components_Banner = (Banner);
// EXTERNAL MODULE: ./src/components/Popups/index.tsx + 2 modules
var Popups = __webpack_require__(1522);
;// CONCATENATED MODULE: ./src/layouts/Default/index.tsx








const Layout = ({
  children,
  banner = undefined
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "z-0 flex flex-col items-center w-full h-screen pb-16 lg:pb-0",
    children: [banner && /*#__PURE__*/jsx_runtime_.jsx(components_Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Main/* default */.Z, {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Popups/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
};

/* harmony default export */ const Default = (Layout);
// EXTERNAL MODULE: ./src/components/Dots/index.tsx
var Dots = __webpack_require__(8561);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@lingui/react"
var react_ = __webpack_require__(2339);
// EXTERNAL MODULE: ./src/state/lists/hooks.ts + 1 modules
var hooks = __webpack_require__(1909);
// EXTERNAL MODULE: ./src/state/hooks.ts
var state_hooks = __webpack_require__(9268);
// EXTERNAL MODULE: ./src/hooks/useFetchListCallback.ts + 1 modules
var useFetchListCallback = __webpack_require__(481);
// EXTERNAL MODULE: ./src/hooks/useInterval.ts
var useInterval = __webpack_require__(2269);
;// CONCATENATED MODULE: ./src/state/lists/updater.ts











function updater_Updater() {
  const {
    library
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const dispatch = (0,state_hooks/* useAppDispatch */.T)();
  const isWindowVisible = useIsWindowVisible(); // get all loaded lists, and the active urls

  const lists = (0,hooks/* useAllLists */.R0)();
  const activeListUrls = (0,hooks/* useActiveListUrls */.v0)();
  const fetchList = (0,useFetchListCallback/* useFetchListCallback */.j)();
  const fetchAllListsCallback = (0,external_react_.useCallback)(() => {
    if (!isWindowVisible) return;
    Object.keys(lists).forEach(url => fetchList(url).catch(error => console.debug('interval list fetching error', error)));
  }, [fetchList, isWindowVisible, lists]); // fetch all lists every 10 minutes, but only after we initialize library

  (0,useInterval/* default */.Z)(fetchAllListsCallback, library ? 1000 * 60 * 10 : null); // whenever a list is not loaded and not loading, try again to load it

  (0,external_react_.useEffect)(() => {
    Object.keys(lists).forEach(listUrl => {
      const list = lists[listUrl];

      if (!list.current && !list.loadingRequestId && !list.error) {
        fetchList(listUrl).catch(error => console.debug('list added fetching error', error));
      }
    });
  }, [dispatch, fetchList, library, lists]); // if any lists from unsupported lists are loaded, check them too (in case new updates since last visit)

  (0,external_react_.useEffect)(() => {
    token_lists/* UNSUPPORTED_LIST_URLS.forEach */.US.forEach(listUrl => {
      const list = lists[listUrl];

      if (!list || !list.current && !list.loadingRequestId && !list.error) {
        fetchList(listUrl).catch(error => console.debug('list added fetching error', error));
      }
    });
  }, [dispatch, fetchList, library, lists]); // automatically update lists if versions are minor/patch

  (0,external_react_.useEffect)(() => {
    Object.keys(lists).forEach(listUrl => {
      const list = lists[listUrl];

      if (list.current && list.pendingUpdate) {
        const bump = (0,token_lists_namespaceObject.getVersionUpgrade)(list.current.version, list.pendingUpdate.version);

        switch (bump) {
          case token_lists_namespaceObject.VersionUpgrade.NONE:
            throw new Error('unexpected no version bump');

          case token_lists_namespaceObject.VersionUpgrade.PATCH:
          case token_lists_namespaceObject.VersionUpgrade.MINOR:
            const min = (0,token_lists_namespaceObject.minVersionBump)(list.current.tokens, list.pendingUpdate.tokens); // automatically update minor/patch as long as bump matches the min update

            if (bump >= min) {
              dispatch((0,lists_actions/* acceptListUpdate */.xJ)(listUrl));
            } else {
              console.error(`List at url ${listUrl} could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR`);
            }

            break;
          // update any active or inactive lists

          case token_lists_namespaceObject.VersionUpgrade.MAJOR:
            dispatch((0,lists_actions/* acceptListUpdate */.xJ)(listUrl));
        }
      }
    });
  }, [dispatch, lists, activeListUrls]);
  return null;
}
// EXTERNAL MODULE: ./src/functions/retry.ts
var retry = __webpack_require__(4162);
;// CONCATENATED MODULE: ./src/functions/array/chunkArray.ts
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10000000; // conservative, hard-coded estimate of the current block gas limit

const DEFAULT_GAS_REQUIRED = 200000; // the default value for calls that don't specify gasRequired
// chunks array into chunks
// evenly distributes items among the chunks

function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
  const chunks = [];
  let currentChunk = [];
  let currentChunkCumulativeGas = 0;

  for (let i = 0; i < items.length; i++) {
    var _gasRequired;

    const item = items[i]; // calculate the gas required by the current item

    const gasRequired = (_gasRequired = item === null || item === void 0 ? void 0 : item.gasRequired) !== null && _gasRequired !== void 0 ? _gasRequired : DEFAULT_GAS_REQUIRED; // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
    // append the current item and increment the cumulative gas

    if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
      currentChunk.push(item);
      currentChunkCumulativeGas += gasRequired;
    } else {
      // otherwise, push the current chunk and create a new chunk
      chunks.push(currentChunk);
      currentChunk = [item];
      currentChunkCumulativeGas = gasRequired;
    }
  }

  if (currentChunk.length > 0) chunks.push(currentChunk);
  return chunks;
}
// EXTERNAL MODULE: ./src/functions/trade.ts
var trade = __webpack_require__(4113);
// EXTERNAL MODULE: ./src/state/application/hooks.ts
var application_hooks = __webpack_require__(4663);
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 21 modules
var useContract = __webpack_require__(6419);
;// CONCATENATED MODULE: ./src/state/multicall/updater.tsx











const updater_DEFAULT_GAS_REQUIRED = 1000000;
/**
 * Fetches a chunk of calls, enforcing a minimum block number constraint
 * @param multicall multicall contract to fetch against
 * @param chunk chunk of calls to make
 * @param minBlockNumber minimum block number of the result set
 */

async function fetchChunk(multicall, chunk, blockNumber) {
  console.debug('Fetching chunk', chunk, blockNumber);

  try {
    const {
      returnData
    } = await multicall.callStatic.tryBlockAndAggregate(false, chunk.map(obj => {
      var _obj$gasRequired;

      return {
        target: obj.address,
        callData: obj.callData,
        gasLimit: (_obj$gasRequired = obj.gasRequired) !== null && _obj$gasRequired !== void 0 ? _obj$gasRequired : 1000000,
        gasPrice: (0,trade/* getGasPrice */.o3)()
      };
    }), {
      blockTag: blockNumber
    });

    if (false) {}

    return returnData;
  } catch (error) {
    var _error$message;

    if (error.code === -32000 || ((_error$message = error.message) === null || _error$message === void 0 ? void 0 : _error$message.indexOf('header not found')) !== -1) {
      throw new retry/* RetryableError */.s1(`header not found for block number ${blockNumber}`);
    }

    console.error('Failed to fetch chunk', error);
    throw error;
  }
}
/**
 * From the current all listeners state, return each call key mapped to the
 * minimum number of blocks per fetch. This is how often each key must be fetched.
 * @param allListeners the all listeners state
 * @param chainId the current chain id
 */


function activeListeningKeys(allListeners, chainId) {
  if (!allListeners || !chainId) return {};
  const listeners = allListeners[chainId];
  if (!listeners) return {};
  return Object.keys(listeners).reduce((memo, callKey) => {
    const keyListeners = listeners[callKey];
    memo[callKey] = Object.keys(keyListeners).filter(key => {
      const blocksPerFetch = parseInt(key);
      if (blocksPerFetch <= 0) return false;
      return keyListeners[blocksPerFetch] > 0;
    }).reduce((previousMin, current) => {
      return Math.min(previousMin, parseInt(current));
    }, Infinity);
    return memo;
  }, {});
}
/**
 * Return the keys that need to be refetched
 * @param callResults current call result state
 * @param listeningKeys each call key mapped to how old the data can be in blocks
 * @param chainId the current chain id
 * @param latestBlockNumber the latest block number
 */

function outdatedListeningKeys(callResults, listeningKeys, chainId, latestBlockNumber) {
  if (!chainId || !latestBlockNumber) return [];
  const results = callResults[chainId]; // no results at all, load everything

  if (!results) return Object.keys(listeningKeys);
  return Object.keys(listeningKeys).filter(callKey => {
    const blocksPerFetch = listeningKeys[callKey];
    const data = callResults[chainId][callKey]; // no data, must fetch

    if (!data) return true;
    const minDataBlockNumber = latestBlockNumber - (blocksPerFetch - 1); // already fetching it for a recent enough block, don't refetch it

    if (data.fetchingBlockNumber && data.fetchingBlockNumber >= minDataBlockNumber) return false; // if data is older than minDataBlockNumber, fetch it

    return !data.blockNumber || data.blockNumber < minDataBlockNumber;
  });
}
function multicall_updater_Updater() {
  const dispatch = (0,state_hooks/* useAppDispatch */.T)();
  const state = (0,state_hooks/* useAppSelector */.C)(state => state.multicall); // wait for listeners to settle before triggering updates

  const debouncedListeners = (0,useDebounce/* default */.Z)(state.callListeners, 100);
  const latestBlockNumber = (0,application_hooks/* useBlockNumber */.Ov)();
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const multicall2Contract = (0,useContract/* useMulticall2Contract */.JD)();
  const cancellations = (0,external_react_.useRef)();
  const listeningKeys = (0,external_react_.useMemo)(() => {
    return activeListeningKeys(debouncedListeners, chainId);
  }, [debouncedListeners, chainId]);
  const unserializedOutdatedCallKeys = (0,external_react_.useMemo)(() => {
    return outdatedListeningKeys(state.callResults, listeningKeys, chainId, latestBlockNumber);
  }, [chainId, state.callResults, listeningKeys, latestBlockNumber]);
  const serializedOutdatedCallKeys = (0,external_react_.useMemo)(() => JSON.stringify(unserializedOutdatedCallKeys.sort()), [unserializedOutdatedCallKeys]);
  (0,external_react_.useEffect)(() => {
    if (!latestBlockNumber || !chainId || !multicall2Contract) return;
    const outdatedCallKeys = JSON.parse(serializedOutdatedCallKeys);
    if (outdatedCallKeys.length === 0) return;
    const calls = outdatedCallKeys.map(key => (0,utils/* parseCallKey */.g)(key));
    const chunkedCalls = chunkArray(calls);

    if (cancellations.current && cancellations.current.blockNumber !== latestBlockNumber) {
      cancellations.current.cancellations.forEach(c => c());
    }

    dispatch((0,multicall_actions/* fetchingMulticallResults */.nu)({
      calls,
      chainId,
      fetchingBlockNumber: latestBlockNumber
    }));
    cancellations.current = {
      blockNumber: latestBlockNumber,
      cancellations: chunkedCalls.map((chunk, index) => {
        const {
          cancel,
          promise
        } = (0,retry/* retry */.XD)(() => fetchChunk(multicall2Contract, chunk, latestBlockNumber), {
          n: Infinity,
          minWait: 1000,
          maxWait: 2500
        });
        promise.then(returnData => {
          // accumulates the length of all previous indices
          const firstCallKeyIndex = chunkedCalls.slice(0, index).reduce((memo, curr) => memo + curr.length, 0);
          const lastCallKeyIndex = firstCallKeyIndex + returnData.length;
          const slice = outdatedCallKeys.slice(firstCallKeyIndex, lastCallKeyIndex); // split the returned slice into errors and success

          const {
            erroredCalls,
            results
          } = slice.reduce((memo, callKey, i) => {
            if (returnData[i].success) {
              var _returnData$i$returnD;

              memo.results[callKey] = (_returnData$i$returnD = returnData[i].returnData) !== null && _returnData$i$returnD !== void 0 ? _returnData$i$returnD : null;
            } else {
              memo.erroredCalls.push((0,utils/* parseCallKey */.g)(callKey));
            }

            return memo;
          }, {
            erroredCalls: [],
            results: {}
          }); // dispatch any new results

          if (Object.keys(results).length > 0) dispatch((0,multicall_actions/* updateMulticallResults */.zT)({
            chainId,
            results,
            blockNumber: latestBlockNumber
          })); // dispatch any errored calls

          if (erroredCalls.length > 0) {
            console.debug('Calls errored in fetch', erroredCalls);
            dispatch((0,multicall_actions/* errorFetchingMulticallResults */.wC)({
              calls: erroredCalls,
              chainId,
              fetchingBlockNumber: latestBlockNumber
            }));
          }
        }).catch(error => {
          if (error.isCancelledError) {
            console.debug('Cancelled fetch for blockNumber', latestBlockNumber, chunk, chainId);
            return;
          }

          console.error('Failed to fetch multicall chunk', chunk, chainId, error);
          dispatch((0,multicall_actions/* errorFetchingMulticallResults */.wC)({
            calls: chunk,
            chainId,
            fetchingBlockNumber: latestBlockNumber
          }));
        });
        return cancel;
      })
    };
  }, [chainId, multicall2Contract, dispatch, serializedOutdatedCallKeys, latestBlockNumber]);
  return null;
}
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const integration_react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: ./src/state/transactions/updater.tsx







function shouldCheck(lastBlockNumber, tx) {
  if (tx.receipt) return false;
  if (!tx.lastCheckedBlockNumber) return true;
  const blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
  if (blocksSinceCheck < 1) return false;
  const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;

  if (minutesPending > 60) {
    // every 10 blocks if pending for longer than an hour
    return blocksSinceCheck > 9;
  } else if (minutesPending > 5) {
    // every 3 blocks if pending more than 5 minutes
    return blocksSinceCheck > 2;
  } else {
    // otherwise every block
    return true;
  }
}
const RETRY_OPTIONS_BY_CHAIN_ID = {};
const DEFAULT_RETRY_OPTIONS = {
  n: 3,
  minWait: 1000,
  maxWait: 3000
};
function transactions_updater_Updater() {
  const {
    chainId,
    library
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const lastBlockNumber = (0,application_hooks/* useBlockNumber */.Ov)();
  const dispatch = (0,state_hooks/* useAppDispatch */.T)();
  const state = (0,state_hooks/* useAppSelector */.C)(state => state.transactions);
  const transactions = (0,external_react_.useMemo)(() => {
    var _state$chainId;

    return chainId ? (_state$chainId = state[chainId]) !== null && _state$chainId !== void 0 ? _state$chainId : {} : {};
  }, [chainId, state]); // show popup on confirm

  const addPopup = (0,application_hooks/* useAddPopup */.i$)();
  const getReceipt = (0,external_react_.useCallback)(hash => {
    var _RETRY_OPTIONS_BY_CHA;

    if (!library || !chainId) throw new Error('No library or chainId');
    const retryOptions = (_RETRY_OPTIONS_BY_CHA = RETRY_OPTIONS_BY_CHAIN_ID[chainId]) !== null && _RETRY_OPTIONS_BY_CHA !== void 0 ? _RETRY_OPTIONS_BY_CHA : DEFAULT_RETRY_OPTIONS;
    return (0,retry/* retry */.XD)(() => library.getTransactionReceipt(hash).then(receipt => {
      if (receipt === null) {
        console.debug('Retrying for hash', hash);
        throw new retry/* RetryableError */.s1();
      }

      return receipt;
    }), retryOptions);
  }, [chainId, library]);
  (0,external_react_.useEffect)(() => {
    if (!chainId || !library || !lastBlockNumber) return;
    const cancels = Object.keys(transactions).filter(hash => shouldCheck(lastBlockNumber, transactions[hash])).map(hash => {
      const {
        promise,
        cancel
      } = getReceipt(hash);
      promise.then(receipt => {
        if (receipt) {
          var _transactions$hash;

          dispatch((0,transactions_actions/* finalizeTransaction */.Aw)({
            chainId,
            hash,
            receipt: {
              blockHash: receipt.blockHash,
              blockNumber: receipt.blockNumber,
              contractAddress: receipt.contractAddress,
              from: receipt.from,
              status: receipt.status,
              to: receipt.to,
              transactionHash: receipt.transactionHash,
              transactionIndex: receipt.transactionIndex
            }
          }));
          addPopup({
            txn: {
              hash,
              success: receipt.status === 1,
              summary: (_transactions$hash = transactions[hash]) === null || _transactions$hash === void 0 ? void 0 : _transactions$hash.summary
            }
          }, hash); // the receipt was fetched before the block, fast forward to that block to trigger balance updates

          if (receipt.blockNumber > lastBlockNumber) {
            dispatch((0,actions/* updateBlockNumber */.fG)({
              chainId,
              blockNumber: receipt.blockNumber
            }));
          }
        } else {
          dispatch((0,transactions_actions/* checkedTransaction */.LN)({
            chainId,
            hash,
            blockNumber: lastBlockNumber
          }));
        }
      }).catch(error => {
        if (!error.isCancelledError) {
          console.error(`Failed to check transaction hash: ${hash}`, error);
        }
      });
      return cancel;
    });
    return () => {
      cancels.forEach(cancel => cancel());
    };
  }, [chainId, library, transactions, lastBlockNumber, dispatch, addPopup, getReceipt]);
  return null;
}
;// CONCATENATED MODULE: ./src/state/user/updater.tsx



function user_updater_Updater() {
  const dispatch = (0,external_react_redux_.useDispatch)(); // keep dark mode in sync with the system

  (0,external_react_.useEffect)(() => {
    var _window;

    const darkHandler = match => {
      dispatch((0,user_actions/* updateMatchesDarkMode */._I)({
        matchesDarkMode: match.matches
      }));
    };

    const match = (_window = window) === null || _window === void 0 ? void 0 : _window.matchMedia('(prefers-color-scheme: dark)');
    dispatch((0,user_actions/* updateMatchesDarkMode */._I)({
      matchesDarkMode: match.matches
    }));

    if (match !== null && match !== void 0 && match.addListener) {
      match === null || match === void 0 ? void 0 : match.addListener(darkHandler);
    } else if (match !== null && match !== void 0 && match.addEventListener) {
      match === null || match === void 0 ? void 0 : match.addEventListener('change', darkHandler);
    }

    return () => {
      if (match !== null && match !== void 0 && match.removeListener) {
        match === null || match === void 0 ? void 0 : match.removeListener(darkHandler);
      } else if (match !== null && match !== void 0 && match.removeEventListener) {
        match === null || match === void 0 ? void 0 : match.removeEventListener('change', darkHandler);
      }
    };
  }, [dispatch]);
  return null;
}
// EXTERNAL MODULE: ./src/components/Loader/index.tsx
var Loader = __webpack_require__(4419);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/config/wallets.ts + 2 modules
var wallets = __webpack_require__(7491);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(417);
;// CONCATENATED MODULE: ./src/hooks/useEagerConnect.ts





function useEagerConnect() {
  const {
    activate,
    active
  } = (0,core_.useWeb3React)(); // specifically using useWeb3ReactCore because of what this hook does

  const {
    0: tried,
    1: setTried
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    wallets/* injected.isAuthorized */.Lj.isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(wallets/* injected */.Lj, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        if (external_react_device_detect_.isMobile && window.ethereum) {
          activate(wallets/* injected */.Lj, undefined, true).catch(() => {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  (0,external_react_.useEffect)(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);
  return tried;
}

/* harmony default export */ const hooks_useEagerConnect = (useEagerConnect);
;// CONCATENATED MODULE: ./src/hooks/useInactiveListener.ts



/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */

function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = (0,core_.useWeb3React)(); // specifically using useWeb3React because of what this hook does

  (0,external_react_.useEffect)(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        activate(wallets/* injected */.Lj, undefined, true).catch(error => {
          console.error('Failed to activate after chain changed', error);
        });
      };

      const handleAccountsChanged = accounts => {
        if (accounts.length > 0) {
          // eat errors
          activate(wallets/* injected */.Lj, undefined, true).catch(error => {
            console.error('Failed to activate after accounts changed', error);
          });
        }
      };

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }

    return undefined;
  }, [active, error, suppress, activate]);
}

/* harmony default export */ const hooks_useInactiveListener = (useInactiveListener);
;// CONCATENATED MODULE: ./src/components/Web3ReactManager/index.tsx












const GnosisManagerNoSSR = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 4640).then(__webpack_require__.bind(__webpack_require__, 4640)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4640)],
    modules: ["../components/Web3ReactManager/index.tsx -> " + './GnosisManager']
  }
});
function Web3ReactManager({
  children
}) {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    active
  } = (0,core_.useWeb3React)();
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork
  } = (0,core_.useWeb3React)(constants/* NetworkContextName */.AQ); // try to eagerly connect to an injected provider, if it exists and has granted access already

  const triedEager = hooks_useEagerConnect(); // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd

  (0,external_react_.useEffect)(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(wallets/* network */.L5);
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active]); // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists

  hooks_useInactiveListener(!triedEager); // handle delayed loader state

  const {
    0: showLoader,
    1: setShowLoader
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, []); // on page load, do nothing until we've tried to connect to the injected connector

  if (!triedEager) {
    return null;
  } // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error


  if (!active && networkError) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center h-80",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-secondary",
        children: i18n._(
        /*i18n*/
        i18n._("Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device"))
      })
    });
  } // if neither context is active, spin


  if (!active && !networkActive) {
    return showLoader ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center h-80",
      children: /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {})
    }) : null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GnosisManagerNoSSR, {}), children]
  });
}
// EXTERNAL MODULE: external "@ethersproject/providers"
var providers_ = __webpack_require__(6497);
;// CONCATENATED MODULE: ./src/functions/getLibrary.ts

const NETWORK_POLLING_INTERVALS = {};
function getLibrary(provider) {
  const library = new providers_.Web3Provider(provider, typeof provider.chainId === 'number' ? provider.chainId : typeof provider.chainId === 'string' ? parseInt(provider.chainId) : 'any');
  library.pollingInterval = 15000;
  library.detectNetwork().then(network => {
    const networkPollingInterval = NETWORK_POLLING_INTERVALS[network.chainId];

    if (networkPollingInterval) {
      console.debug('Setting polling interval', networkPollingInterval);
      library.pollingInterval = networkPollingInterval;
    }
  });
  return library;
}
// EXTERNAL MODULE: ./node_modules/@lingui/core/esm/index.js + 2 modules
var core_esm = __webpack_require__(1796);
;// CONCATENATED MODULE: external "@lingui/remote-loader"
const remote_loader_namespaceObject = require("@lingui/remote-loader");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























const Web3ProviderNetwork = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 272).then(__webpack_require__.bind(__webpack_require__, 272)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(272)],
    modules: ["_app.tsx -> " + '../components/Web3ProviderNetwork']
  }
}); // const Web3ReactManager = dynamic(() => import('../components/Web3ReactManager'), { ssr: false })

const sessionId = (0,toolkit_.nanoid)();

if (false) {}

function MyApp({
  Component,
  pageProps
}) {
  const {
    pathname,
    query,
    locale
  } = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    async function load(locale) {
      core_esm/* i18n.loadLocaleData */.ag.loadLocaleData(locale, {
        plurals: plurals[locale.split('_')[0]]
      });

      try {
        // Load messages from AWS, use q session param to get latest version from cache
        const resp = await fetch(`https://d3l928w2mi7nub.cloudfront.net/${locale}.json?q=${sessionId}`);
        const remoteMessages = await resp.json();
        const messages = (0,remote_loader_namespaceObject.remoteLoader)({
          messages: remoteMessages,
          format: 'minimal'
        });
        core_esm/* i18n.load */.ag.load(locale, messages);
      } catch {
        // Load fallback messages
        const {
          messages
        } = await __webpack_require__(5356)(`./${locale}.json`);
        core_esm/* i18n.load */.ag.load(locale, messages);
      }

      core_esm/* i18n.activate */.ag.activate(locale);
    }

    load(locale); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]); // Allows for conditionally setting a provider to be hoisted per page

  const Provider = Component.Provider || external_react_.Fragment; // Allows for conditionally setting a layout to be hoisted per page

  const Layout = Component.Layout || Default; // Allows for conditionally setting a guard to be hoisted per page

  const Guard = Component.Guard || external_react_.Fragment;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "MIST"
      }, "title"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Trade, launch, stake, farm, invest, automate, build on the premier DeFi platform of smartBCH"
      }, "description"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "application-name",
        content: "MIST App"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-title",
        content: "MIST App"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "format-detection",
        content: "telephone=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-config",
        content: "/browserconfig.xml"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-tap-highlight",
        content: "no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#F338C3"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "app"
      }, "twitter:card"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: "MIST App"
      }, "twitter:title"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:url",
        content: "https://app.mistswap.fi"
      }, "twitter:url"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: "Trade, launch, stake, farm, invest, automate, build on the premier DeFi platform of smartBCH"
      }, "twitter:description"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "https://app.mistswap.fi/icons/icon-192x192.png"
      }, "twitter:image"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:creator",
        content: "@mistswapdex"
      }, "twitter:creator"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }, "og:type"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "MIST App"
      }, "og:site_name"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://app.mistswap.fi"
      }, "og:url"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://app.mistswap.fi/apple-touch-icon.png"
      }, "og:image"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Trade, launch, stake, farm, invest, automate, build on the premier DeFi platform of smartBCH"
      }, "og:description")]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.I18nProvider, {
      i18n: core_esm/* i18n */.ag,
      forceRenderOnLocaleChange: false,
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/jsx_runtime_.jsx(Web3ProviderNetwork, {
          getLibrary: getLibrary,
          children: /*#__PURE__*/jsx_runtime_.jsx(Web3ReactManager, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
              store: state,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(integration_react_namespaceObject.PersistGate, {
                loading: /*#__PURE__*/jsx_runtime_.jsx(Dots/* default */.Z, {
                  children: "loading"
                }),
                persistor: persistor,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(updater_Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(user_updater_Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(transactions_updater_Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(multicall_updater_Updater, {})]
                }), /*#__PURE__*/jsx_runtime_.jsx(Provider, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
                    children: /*#__PURE__*/jsx_runtime_.jsx(Guard, {
                      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
                    })
                  })
                })]
              })
            })
          })
        })
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Field),
/* harmony export */   "L": () => (/* binding */ typeInput)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let Field;

(function (Field) {
  Field["LIQUIDITY_PERCENT"] = "LIQUIDITY_PERCENT";
  Field["LIQUIDITY"] = "LIQUIDITY";
  Field["CURRENCY_A"] = "CURRENCY_A";
  Field["CURRENCY_B"] = "CURRENCY_B";
})(Field || (Field = {}));

const typeInput = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('burn/typeInputBurn');

/***/ }),

/***/ 3777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gN": () => (/* binding */ Field),
/* harmony export */   "j": () => (/* binding */ selectCurrency),
/* harmony export */   "KS": () => (/* binding */ switchCurrencies),
/* harmony export */   "LC": () => (/* binding */ typeInput),
/* harmony export */   "m5": () => (/* binding */ replaceCreateState)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let Field;

(function (Field) {
  Field["COLLATERAL"] = "COLLATERAL";
  Field["ASSET"] = "ASSET";
})(Field || (Field = {}));

const selectCurrency = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('create/selectCurrency');
const switchCurrencies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('create/switchCurrencies');
const typeInput = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('create/typeInput');
const replaceCreateState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('create/replaceCreateState');

/***/ }),

/***/ 5331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gN": () => (/* binding */ Field),
/* harmony export */   "GJ": () => (/* binding */ setLimitPrice),
/* harmony export */   "tn": () => (/* binding */ setOrderExpiration),
/* harmony export */   "vV": () => (/* binding */ setFromBentoBalance),
/* harmony export */   "GX": () => (/* binding */ setLimitOrderApprovalPending),
/* harmony export */   "yz": () => (/* binding */ replaceLimitOrderState),
/* harmony export */   "j": () => (/* binding */ selectCurrency),
/* harmony export */   "KS": () => (/* binding */ switchCurrencies),
/* harmony export */   "LC": () => (/* binding */ typeInput),
/* harmony export */   "He": () => (/* binding */ setRecipient)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let Field;

(function (Field) {
  Field["INPUT"] = "INPUT";
  Field["OUTPUT"] = "OUTPUT";
})(Field || (Field = {}));

const setLimitPrice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/setLimitPrice');
const setOrderExpiration = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/setOrderExpiration');
const setFromBentoBalance = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/setFromBentoBalance');
const setLimitOrderApprovalPending = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/setLimitOrderApprovalPending');
const replaceLimitOrderState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/replaceLimitOrderState');
const selectCurrency = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/selectCurrency');
const switchCurrencies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/switchCurrencies');
const typeInput = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/typeInput');
const setRecipient = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('limit-order/setRecipient');

/***/ }),

/***/ 3760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ OrderExpiration),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let OrderExpiration;

(function (OrderExpiration) {
  OrderExpiration["never"] = "never";
  OrderExpiration["hour"] = "hour";
  OrderExpiration["day"] = "day";
  OrderExpiration["week"] = "week";
  OrderExpiration["month"] = "month";
})(OrderExpiration || (OrderExpiration = {}));

const initialState = {
  independentField: _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT,
  typedValue: '',
  limitPrice: '',
  [_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT]: {
    currencyId: ''
  },
  [_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.OUTPUT */ .gN.OUTPUT]: {
    currencyId: ''
  },
  recipient: null,
  fromBentoBalance: false,
  limitOrderApprovalPending: '',
  orderExpiration: {
    value: '',
    label: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, builder => builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .replaceLimitOrderState */ .yz, (state, {
  payload: {
    typedValue,
    recipient,
    independentField,
    inputCurrencyId,
    outputCurrencyId,
    fromBentoBalance,
    limitPrice,
    orderExpiration
  }
}) => ({
  [_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT]: {
    currencyId: inputCurrencyId
  },
  [_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.OUTPUT */ .gN.OUTPUT]: {
    currencyId: outputCurrencyId
  },
  independentField,
  typedValue: typedValue,
  recipient,
  fromBentoBalance,
  limitPrice,
  orderExpiration,
  limitOrderApprovalPending: state.limitOrderApprovalPending
})).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .setLimitPrice */ .GJ, (state, {
  payload: limitPrice
}) => {
  state.limitPrice = limitPrice;
}).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .setLimitOrderApprovalPending */ .GX, (state, {
  payload: limitOrderApprovalPending
}) => {
  state.limitOrderApprovalPending = limitOrderApprovalPending;
}).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .setOrderExpiration */ .tn, (state, {
  payload: orderExpiration
}) => {
  state.orderExpiration = orderExpiration;
}).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .setFromBentoBalance */ .vV, (state, {
  payload: fromBentoBalance
}) => {
  state.fromBentoBalance = fromBentoBalance;
}).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .selectCurrency */ .j, (state, {
  payload: {
    currencyId,
    field
  }
}) => {
  const otherField = field === _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT ? _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.OUTPUT */ .gN.OUTPUT : _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT;

  if (currencyId === state[otherField].currencyId) {
    // the case where we have to swap the order
    return _objectSpread(_objectSpread({}, state), {}, {
      independentField: state.independentField === _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT ? _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.OUTPUT */ .gN.OUTPUT : _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT,
      [field]: {
        currencyId: currencyId
      },
      [otherField]: {
        currencyId: state[field].currencyId
      }
    });
  } else {
    // the normal case
    return _objectSpread(_objectSpread({}, state), {}, {
      [field]: {
        currencyId: currencyId
      }
    });
  }
}).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .switchCurrencies */ .KS, state => {
  return _objectSpread(_objectSpread({}, state), {}, {
    limitPrice: +state.limitPrice > 0 ? (1 / +state.limitPrice).toString() : '0.0',
    independentField: state.independentField === _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT ? _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.OUTPUT */ .gN.OUTPUT : _actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT,
    [_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT]: {
      currencyId: state[_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.OUTPUT */ .gN.OUTPUT].currencyId
    },
    [_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.OUTPUT */ .gN.OUTPUT]: {
      currencyId: state[_actions__WEBPACK_IMPORTED_MODULE_1__/* .Field.INPUT */ .gN.INPUT].currencyId
    }
  });
}).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .typeInput */ .LC, (state, {
  payload: {
    field,
    typedValue
  }
}) => {
  return _objectSpread(_objectSpread({}, state), {}, {
    independentField: field,
    typedValue
  });
}).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__/* .setRecipient */ .He, (state, {
  payload: {
    recipient
  }
}) => {
  state.recipient = recipient;
})));

/***/ }),

/***/ 3439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dn": () => (/* binding */ fetchTokenList),
/* harmony export */   "$8": () => (/* binding */ addList),
/* harmony export */   "J_": () => (/* binding */ removeList),
/* harmony export */   "ic": () => (/* binding */ enableList),
/* harmony export */   "K$": () => (/* binding */ disableList),
/* harmony export */   "xJ": () => (/* binding */ acceptListUpdate)
/* harmony export */ });
/* unused harmony export rejectVersionUpdate */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const fetchTokenList = {
  pending: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/fetchTokenList/pending'),
  fulfilled: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/fetchTokenList/fulfilled'),
  rejected: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/fetchTokenList/rejected')
}; // add and remove from list options

const addList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/addList');
const removeList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/removeList'); // select which lists to search across from loaded lists

const enableList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/enableList');
const disableList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/disableList'); // versioning

const acceptListUpdate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/acceptListUpdate');
const rejectVersionUpdate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('lists/rejectVersionUpdate');

/***/ }),

/***/ 3045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gN": () => (/* binding */ Field),
/* harmony export */   "LC": () => (/* binding */ typeInput),
/* harmony export */   "dA": () => (/* binding */ resetMintState)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let Field;

(function (Field) {
  Field["CURRENCY_A"] = "CURRENCY_A";
  Field["CURRENCY_B"] = "CURRENCY_B";
})(Field || (Field = {}));

const typeInput = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('mint/typeInputMint');
const resetMintState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('mint/resetMintState');

/***/ }),

/***/ 4690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gN": () => (/* binding */ Field),
/* harmony export */   "j": () => (/* binding */ selectCurrency),
/* harmony export */   "KS": () => (/* binding */ switchCurrencies),
/* harmony export */   "LC": () => (/* binding */ typeInput),
/* harmony export */   "mV": () => (/* binding */ replaceSwapState),
/* harmony export */   "He": () => (/* binding */ setRecipient)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let Field;

(function (Field) {
  Field["INPUT"] = "INPUT";
  Field["OUTPUT"] = "OUTPUT";
})(Field || (Field = {}));

const selectCurrency = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('swap/selectCurrency');
const switchCurrencies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('swap/switchCurrencies');
const typeInput = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('swap/typeInput');
const replaceSwapState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('swap/replaceSwapState');
const setRecipient = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('swap/setRecipient');

/***/ }),

/***/ 6124:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 7398:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/address");

/***/ }),

/***/ 1446:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 4103:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 6148:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 4440:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 1101:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/hash");

/***/ }),

/***/ 6497:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 8890:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/strings");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/units");

/***/ }),

/***/ 255:
/***/ ((module) => {

"use strict";
module.exports = require("@gnosis.pm/safe-apps-web3-react");

/***/ }),

/***/ 4025:
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ 2339:
/***/ ((module) => {

"use strict";
module.exports = require("@lingui/react");

/***/ }),

/***/ 9652:
/***/ ((module) => {

"use strict";
module.exports = require("@mistswapdex/sdk");

/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 5008:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/abstract-connector");

/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ 1698:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/fortmatic-connector");

/***/ }),

/***/ 7290:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 9650:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ 7663:
/***/ ((module) => {

"use strict";
module.exports = require("ajv");

/***/ }),

/***/ 4588:
/***/ ((module) => {

"use strict";
module.exports = require("cids");

/***/ }),

/***/ 8760:
/***/ ((module) => {

"use strict";
module.exports = require("cookie-cutter");

/***/ }),

/***/ 8929:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 8099:
/***/ ((module) => {

"use strict";
module.exports = require("fortmatic");

/***/ }),

/***/ 8673:
/***/ ((module) => {

"use strict";
module.exports = require("fuse.js");

/***/ }),

/***/ 3960:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatMap");

/***/ }),

/***/ 9379:
/***/ ((module) => {

"use strict";
module.exports = require("messageformat-parser");

/***/ }),

/***/ 1980:
/***/ ((module) => {

"use strict";
module.exports = require("multicodec");

/***/ }),

/***/ 6841:
/***/ ((module) => {

"use strict";
module.exports = require("multihashes");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 2997:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 654:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9344:
/***/ ((module) => {

"use strict";
module.exports = require("node-vibrant");

/***/ }),

/***/ 3756:
/***/ ((module) => {

"use strict";
module.exports = require("numeral");

/***/ }),

/***/ 7158:
/***/ ((module) => {

"use strict";
module.exports = require("polished");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2047:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 9337:
/***/ ((module) => {

"use strict";
module.exports = require("react-feather");

/***/ }),

/***/ 7755:
/***/ ((module) => {

"use strict";
module.exports = require("react-popper");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 3289:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 4050:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-invariant");

/***/ }),

/***/ 6515:
/***/ ((module) => {

"use strict";
module.exports = require("wcag-contrast");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [475,7426,4054,1664,5675,5243,2059,6049,3802,1796,3049,7735,4939,3719,5857,6197,9202,4779,3233,1986,7603,3130,2319,7816,9305,1394,1441,4419,3746], () => (__webpack_exec__(9484), __webpack_exec__(1955), __webpack_exec__(2879)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=_app.js.map