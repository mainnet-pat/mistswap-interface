"use strict";
exports.id = 2319;
exports.ids = [2319];
exports.modules = {

/***/ 2319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AE": () => (/* binding */ useETHBalances),
/* harmony export */   "v2": () => (/* binding */ useTokenBalancesWithLoadingIndicator),
/* harmony export */   "Z": () => (/* binding */ useTokenBalances),
/* harmony export */   "mM": () => (/* binding */ useTokenBalance),
/* harmony export */   "K5": () => (/* binding */ useCurrencyBalances),
/* harmony export */   "_h": () => (/* binding */ useCurrencyBalance),
/* harmony export */   "uD": () => (/* binding */ useAllTokenBalances)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _multicall_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(879);
/* harmony import */ var _constants_abis_erc20_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9638);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6124);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2556);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8269);
/* harmony import */ var _hooks_Tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6269);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6419);









/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */

function useETHBalances(uncheckedAddresses) {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* .useActiveWeb3React */ .a)();
  const multicallContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_8__/* .useMulticall2Contract */ .JD)();
  const addresses = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => uncheckedAddresses ? uncheckedAddresses.map(_functions_validate__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .UJ).filter(a => a !== false).sort() : [], [uncheckedAddresses]);
  const results = (0,_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSingleContractMultipleData */ .es)(multicallContract, 'getEthBalance', addresses.map(address => [address]));
  return (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => addresses.reduce((memo, address, i) => {
    var _results$i, _results$i$result;

    const value = results === null || results === void 0 ? void 0 : (_results$i = results[i]) === null || _results$i === void 0 ? void 0 : (_results$i$result = _results$i.result) === null || _results$i$result === void 0 ? void 0 : _results$i$result[0];
    if (value && chainId) memo[address] = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.NATIVE[chainId], _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(value.toString()));
    return memo;
  }, {}), [addresses, chainId, results]);
}
/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */

function useTokenBalancesWithLoadingIndicator(address, tokens) {
  const validatedTokens = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    var _tokens$filter;

    return (_tokens$filter = tokens === null || tokens === void 0 ? void 0 : tokens.filter(t => (0,_functions_validate__WEBPACK_IMPORTED_MODULE_4__/* .isAddress */ .UJ)(t === null || t === void 0 ? void 0 : t.address) !== false)) !== null && _tokens$filter !== void 0 ? _tokens$filter : [];
  }, [tokens]);
  const validatedTokenAddresses = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => validatedTokens.map(vt => vt.address), [validatedTokens]);
  const ERC20Interface = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__.Interface(_constants_abis_erc20_json__WEBPACK_IMPORTED_MODULE_2__);
  const balances = (0,_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useMultipleContractSingleData */ ._Y)(validatedTokenAddresses, ERC20Interface, 'balanceOf', [address], undefined, 100000);
  const anyLoading = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => balances.some(callState => callState.loading), [balances]);
  return [(0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => address && validatedTokens.length > 0 ? validatedTokens.reduce((memo, token, i) => {
    var _balances$i, _balances$i$result;

    const value = balances === null || balances === void 0 ? void 0 : (_balances$i = balances[i]) === null || _balances$i === void 0 ? void 0 : (_balances$i$result = _balances$i.result) === null || _balances$i$result === void 0 ? void 0 : _balances$i$result[0];
    const amount = value ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(value.toString()) : undefined;

    if (amount) {
      memo[token.address] = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token, amount);
    }

    return memo;
  }, {}) : {}, [address, validatedTokens, balances]), anyLoading];
}
function useTokenBalances(address, tokens) {
  const balances = useTokenBalancesWithLoadingIndicator(address, tokens)[0];
  const memoizedBalances = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => JSON.stringify(balances), [balances]);
  return (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => balances, [memoizedBalances]);
} // get the balance for a single token/account combo

function useTokenBalance(account, token) {
  const tokenBalances = useTokenBalances(account, [token]);
  if (!token) return undefined;
  return tokenBalances[token.address];
}
function useCurrencyBalances(account, currencies) {
  const tokens = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    var _currencies$filter;

    return (_currencies$filter = currencies === null || currencies === void 0 ? void 0 : currencies.filter(currency => {
      var _currency$isToken;

      return (_currency$isToken = currency === null || currency === void 0 ? void 0 : currency.isToken) !== null && _currency$isToken !== void 0 ? _currency$isToken : false;
    })) !== null && _currencies$filter !== void 0 ? _currencies$filter : [];
  }, [currencies]);
  const tokenBalances = useTokenBalances(account, tokens);
  const containsETH = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    var _currencies$some;

    return (_currencies$some = currencies === null || currencies === void 0 ? void 0 : currencies.some(currency => currency === null || currency === void 0 ? void 0 : currency.isNative)) !== null && _currencies$some !== void 0 ? _currencies$some : false;
  }, [currencies]);
  const ethBalance = useETHBalances(containsETH ? [account] : []);
  return (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    var _currencies$map;

    return (_currencies$map = currencies === null || currencies === void 0 ? void 0 : currencies.map(currency => {
      if (!account || !currency) return undefined;
      if (currency.isToken) return tokenBalances[currency.address];
      if (currency.isNative) return ethBalance[account];
      return undefined;
    })) !== null && _currencies$map !== void 0 ? _currencies$map : [];
  }, [account, currencies, ethBalance, tokenBalances]);
}
function useCurrencyBalance(account, currency) {
  return useCurrencyBalances(account, [currency])[0];
} // mimics useAllBalances

function useAllTokenBalances() {
  const {
    account
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* .useActiveWeb3React */ .a)();
  const allTokens = (0,_hooks_Tokens__WEBPACK_IMPORTED_MODULE_6__/* .useAllTokens */ .e_)();
  const allTokensArray = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => Object.values(allTokens !== null && allTokens !== void 0 ? allTokens : {}), [allTokens]);
  const balances = useTokenBalances(account !== null && account !== void 0 ? account : undefined, allTokensArray);
  return balances !== null && balances !== void 0 ? balances : {};
} // TODO: Replace
// get the total owned, unclaimed, and unharvested UNI for account
// export function useAggregateUniBalance(): CurrencyAmount<Token> | undefined {
//   const { account, chainId } = useActiveWeb3React();
//   const uni = chainId ? UNI[chainId] : undefined;
//   const uniBalance: CurrencyAmount<Token> | undefined = useTokenBalance(
//     account ?? undefined,
//     uni
//   );
//   const uniUnclaimed: CurrencyAmount<Token> | undefined =
//     useUserUnclaimedAmount(account);
//   const uniUnHarvested: CurrencyAmount<Token> | undefined = useTotalUniEarned();
//   if (!uni) return undefined;
//   return CurrencyAmount.fromRawAmount(
//     uni,
//     JSBI.add(
//       JSBI.add(
//         uniBalance?.quotient ?? JSBI.BigInt(0),
//         uniUnclaimed?.quotient ?? JSBI.BigInt(0)
//       ),
//       uniUnHarvested?.quotient ?? JSBI.BigInt(0)
//     )
//   );
// }

/***/ })

};
;
//# sourceMappingURL=2319.js.map