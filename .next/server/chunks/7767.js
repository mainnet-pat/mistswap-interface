"use strict";
exports.id = 7767;
exports.ids = [7767];
exports.modules = {

/***/ 7767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zh": () => (/* binding */ useChefContract),
/* harmony export */   "Pc": () => (/* binding */ useUserInfo),
/* harmony export */   "K5": () => (/* binding */ usePendingSushi),
/* harmony export */   "$J": () => (/* binding */ usePositions),
/* harmony export */   "MQ": () => (/* binding */ useInfiniteScroll)
/* harmony export */ });
/* unused harmony exports useChefContracts, usePendingToken, useChefPositions */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7876);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(879);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6419);
/* harmony import */ var _config_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9575);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6148);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7508);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8269);
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6643);
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_zip__WEBPACK_IMPORTED_MODULE_9__);










function useChefContract(chef) {
  const masterChefContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useMasterChefContract */ .mi)();
  const masterChefV2Contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useMasterChefV2Contract */ .sd)();
  const contracts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => ({
    [_enum__WEBPACK_IMPORTED_MODULE_1__/* .Chef.MASTERCHEF */ .WJ.MASTERCHEF]: masterChefContract,
    [_enum__WEBPACK_IMPORTED_MODULE_1__/* .Chef.MASTERCHEF_V2 */ .WJ.MASTERCHEF_V2]: masterChefV2Contract
  }), [masterChefContract, masterChefV2Contract]);
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return contracts[chef];
  }, [contracts, chef]);
}
const CHEFS = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: [_enum__WEBPACK_IMPORTED_MODULE_1__/* .Chef.MASTERCHEF */ .WJ.MASTERCHEF, _enum__WEBPACK_IMPORTED_MODULE_1__/* .Chef.MASTERCHEF_V2 */ .WJ.MASTERCHEF_V2]
};
function useChefContracts(chefs) {
  const masterChefContract = useMasterChefContract();
  const masterChefV2Contract = useMasterChefV2Contract();
  const contracts = useMemo(() => ({
    [Chef.MASTERCHEF]: masterChefContract,
    [Chef.MASTERCHEF_V2]: masterChefV2Contract
  }), [masterChefContract, masterChefV2Contract]);
  return chefs.map(chef => contracts[chef]);
}
function useUserInfo(farm, token) {
  var _useSingleCallResult;

  const {
    account
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__/* .useActiveWeb3React */ .a)();
  const contract = useChefContract(farm.chef);
  const args = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!account) {
      return;
    }

    return [String(farm.id), String(account)];
  }, [farm, account]);
  const result = (_useSingleCallResult = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSingleCallResult */ .Wk)(args ? contract : null, 'userInfo', args)) === null || _useSingleCallResult === void 0 ? void 0 : _useSingleCallResult.result;
  const value = result === null || result === void 0 ? void 0 : result[0];
  const amount = value ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(value.toString()) : undefined;
  return amount ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token, amount) : undefined;
}
function usePendingSushi(farm) {
  var _useSingleCallResult2;

  const {
    account,
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__/* .useActiveWeb3React */ .a)();
  const contract = useChefContract(farm.chef);
  const args = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!account) {
      return;
    }

    return [String(farm.id), String(account)];
  }, [farm, account]);
  const result = (_useSingleCallResult2 = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSingleCallResult */ .Wk)(args ? contract : null, 'pendingSushi', args)) === null || _useSingleCallResult2 === void 0 ? void 0 : _useSingleCallResult2.result;
  const value = result === null || result === void 0 ? void 0 : result[0];
  const amount = value ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(value.toString()) : undefined;
  return amount ? _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(_config_tokens__WEBPACK_IMPORTED_MODULE_5__/* .MIST */ .yK[chainId], amount) : undefined;
}
function usePendingToken(farm, contract) {
  const {
    account
  } = useActiveWeb3React();
  const args = useMemo(() => {
    if (!account || !farm) {
      return;
    }

    return [String(farm.pid), String(account)];
  }, [farm, account]);
  const pendingTokens = useSingleContractMultipleData(args ? contract : null, 'pendingTokens', args.map(arg => [...arg, '0']));
  return useMemo(() => pendingTokens, [pendingTokens]);
}
function useChefPositions(contract, rewarder, chainId = undefined) {
  var _useSingleCallResult3, _useSingleCallResult4;

  const {
    account
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__/* .useActiveWeb3React */ .a)();
  const numberOfPools = (_useSingleCallResult3 = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSingleCallResult */ .Wk)(contract ? contract : null, 'poolLength', undefined, _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_2__/* .NEVER_RELOAD */ .DB)) === null || _useSingleCallResult3 === void 0 ? void 0 : (_useSingleCallResult4 = _useSingleCallResult3.result) === null || _useSingleCallResult4 === void 0 ? void 0 : _useSingleCallResult4[0];
  const args = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!account || !numberOfPools) {
      return;
    }

    return [...Array(numberOfPools.toNumber()).keys()].map(pid => [String(pid), String(account)]);
  }, [numberOfPools, account]);
  const pendingSushi = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSingleContractMultipleData */ .es)(args ? contract : null, 'pendingSushi', args);
  const userInfo = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSingleContractMultipleData */ .es)(args ? contract : null, 'userInfo', args); // const pendingTokens = useSingleContractMultipleData(
  //     rewarder,
  //     'pendingTokens',
  //     args.map((arg) => [...arg, '0'])
  // )

  const getChef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.MASTERCHEF_ADDRESS[chainId] === contract.address) {
      return _enum__WEBPACK_IMPORTED_MODULE_1__/* .Chef.MASTERCHEF */ .WJ.MASTERCHEF;
    } else if (_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.MASTERCHEF_V2_ADDRESS[chainId] === contract.address) {
      return _enum__WEBPACK_IMPORTED_MODULE_1__/* .Chef.MASTERCHEF_V2 */ .WJ.MASTERCHEF_V2;
    }
  }, [chainId, contract]);
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!pendingSushi || !userInfo) {
      return [];
    }

    return lodash_zip__WEBPACK_IMPORTED_MODULE_9___default()(pendingSushi, userInfo).map((data, i) => {
      var _data$0$result, _data$1$result;

      return {
        id: args[i][0],
        pendingSushi: ((_data$0$result = data[0].result) === null || _data$0$result === void 0 ? void 0 : _data$0$result[0]) || _ethersproject_constants__WEBPACK_IMPORTED_MODULE_6__.Zero,
        amount: ((_data$1$result = data[1].result) === null || _data$1$result === void 0 ? void 0 : _data$1$result[0]) || _ethersproject_constants__WEBPACK_IMPORTED_MODULE_6__.Zero,
        chef: getChef() // pendingTokens: data?.[2]?.result,

      };
    }).filter(({
      pendingSushi,
      amount
    }) => {
      return pendingSushi && !pendingSushi.isZero() || amount && !amount.isZero();
    });
  }, [args, getChef, pendingSushi, userInfo]);
}
function usePositions(chainId = undefined) {
  const [masterChefV1Positions, masterChefV2Positions] = [useChefPositions((0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useMasterChefContract */ .mi)(), undefined, chainId), useChefPositions((0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useMasterChefV2Contract */ .sd)(), undefined, chainId)];
  return lodash_concat__WEBPACK_IMPORTED_MODULE_7___default()(masterChefV1Positions, masterChefV2Positions);
}
/*
  Currently expensive to render farm list item. The infinite scroll is used to
  to minimize this impact. This hook pairs with it, keeping track of visible
  items and passes this to <InfiniteScroll> component.
*/

function useInfiniteScroll(items) {
  const {
    0: itemsDisplayed,
    1: setItemsDisplayed
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => setItemsDisplayed(10), [items.length]);
  return [itemsDisplayed, setItemsDisplayed];
}

/***/ })

};
;
//# sourceMappingURL=7767.js.map