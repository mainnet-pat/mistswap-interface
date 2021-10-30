"use strict";
exports.id = 3719;
exports.ids = [3719];
exports.modules = {

/***/ 9575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G7": () => (/* binding */ FLEXUSD),
/* harmony export */   "ad": () => (/* binding */ XMIST),
/* harmony export */   "yK": () => (/* binding */ MIST)
/* harmony export */ });
/* unused harmony exports WBCH_EXTENDED, BENSWAP_TOKENS */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const FLEXUSD = new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Token(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH, '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72', 18, 'flexUSD', 'flexUSD');
const XMIST = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Token(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.BAR_ADDRESS[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH], 18, 'xMIST', 'MistBar'),
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Token(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.BAR_ADDRESS[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER], 18, 'xMIST', 'MistBar')
};
const MIST = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Token(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.MIST_ADDRESS[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH], 18, 'MIST', 'MistToken'),
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Token(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.MIST_ADDRESS[_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER], 18, 'MIST', 'MistToken')
};
const WBCH_EXTENDED = _objectSpread({}, _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.WBCH);
// These are available for migrate
const BENSWAP_TOKENS = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: [],
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: [new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Token(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER, '0x842692f8A4D0743e942dF5D52155a037327d4f3f', 18, 'EBENS/BCH LP Token', 'EBEN-BCH')]
};

/***/ }),

/***/ 7219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dT": () => (/* binding */ addTransaction),
/* harmony export */   "fY": () => (/* binding */ clearAllTransactions),
/* harmony export */   "Aw": () => (/* binding */ finalizeTransaction),
/* harmony export */   "LN": () => (/* binding */ checkedTransaction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const addTransaction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('transactions/addTransaction');
const clearAllTransactions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('transactions/clearAllTransactions');
const finalizeTransaction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('transactions/finalizeTransaction');
const checkedTransaction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('transactions/checkedTransaction');

/***/ }),

/***/ 9123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h7": () => (/* binding */ useTransactionAdder),
/* harmony export */   "kf": () => (/* binding */ useAllTransactions),
/* harmony export */   "mH": () => (/* binding */ isTransactionRecent),
/* harmony export */   "wB": () => (/* binding */ useHasPendingApproval),
/* harmony export */   "bh": () => (/* binding */ useUserHasSubmittedClaim)
/* harmony export */ });
/* unused harmony export useIsTransactionPending */
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7219);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8269);




// helper that can take a ethers library transaction response and add it to the list of transactions
function useTransactionAdder() {
  const {
    chainId,
    account
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* .useActiveWeb3React */ .a)();
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .T)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((response, {
    summary,
    approval,
    claim,
    archer
  } = {}) => {
    if (!account) return;
    if (!chainId) return;
    const {
      hash
    } = response;

    if (!hash) {
      throw Error('No transaction hash found.');
    }

    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .addTransaction */ .dT)({
      hash,
      from: account,
      chainId,
      approval,
      summary,
      claim,
      archer
    }));
  }, [dispatch, chainId, account]);
} // returns all the transactions for the current chain

function useAllTransactions() {
  var _state$chainId;

  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* .useActiveWeb3React */ .a)();
  const state = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .C)(state => state.transactions);
  return chainId ? (_state$chainId = state[chainId]) !== null && _state$chainId !== void 0 ? _state$chainId : {} : {};
}
function useIsTransactionPending(transactionHash) {
  const transactions = useAllTransactions();
  if (!transactionHash || !transactions[transactionHash]) return false;
  return !transactions[transactionHash].receipt;
}
/**
 * Returns whether a transaction happened in the last day (86400 seconds * 1000 milliseconds / second)
 * @param tx to check for recency
 */

function isTransactionRecent(tx) {
  return new Date().getTime() - tx.addedTime < 86400000;
} // returns whether a token has a pending approval transaction

function useHasPendingApproval(tokenAddress, spender) {
  const allTransactions = useAllTransactions();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => typeof tokenAddress === 'string' && typeof spender === 'string' && Object.keys(allTransactions).some(hash => {
    const tx = allTransactions[hash];
    if (!tx) return false;

    if (tx.receipt) {
      return false;
    } else {
      const approval = tx.approval;
      if (!approval) return false;
      return approval.spender === spender && approval.tokenAddress === tokenAddress && isTransactionRecent(tx);
    }
  }), [allTransactions, spender, tokenAddress]);
} // watch for submissions to claim
// return null if not done loading, return undefined if not found

function useUserHasSubmittedClaim(account) {
  const allTransactions = useAllTransactions(); // get the txn if it has been submitted

  const claimTxn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const txnIndex = Object.keys(allTransactions).find(hash => {
      const tx = allTransactions[hash];
      return tx.claim && tx.claim.recipient === account;
    });
    return txnIndex && allTransactions[txnIndex] ? allTransactions[txnIndex] : undefined;
  }, [account, allTransactions]);
  return {
    claimSubmitted: Boolean(claimTxn),
    claimTxn
  };
}

/***/ })

};
;
//# sourceMappingURL=3719.js.map