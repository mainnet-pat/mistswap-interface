"use strict";
exports.id = 9202;
exports.ids = [9202];
exports.modules = {

/***/ 9202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aQ": () => (/* reexport */ hooks_useActiveWeb3React/* default */.Z),
  "rd": () => (/* reexport */ useColor/* useColor */.r),
  "TK": () => (/* reexport */ hooks_useFuse),
  "JY": () => (/* reexport */ hooks_useContract/* useLimitOrderContract */.JY),
  "Ti": () => (/* reexport */ hooks_useContract/* useRouterContract */.Ti),
  "cX": () => (/* reexport */ useSortableData/* default */.Z),
  "Z9": () => (/* reexport */ hooks_useContract/* useSushiContract */.Z9),
  "Ib": () => (/* reexport */ hooks_useContract/* useTokenContract */.Ib),
  "oF": () => (/* reexport */ useUSDCPrice/* default */.Z)
});

// UNUSED EXPORTS: ApprovalState, useApproveCallback, useApproveCallbackFromTrade, useArgentWalletDetectorContract, useBentoBox, useBentoBoxAllowance, useBentoBoxContract, useBoringHelperContract, useBytes32TokenContract, useChainlinkOracle, useCloneRewarderContract, useComplexRewarderContract, useContract, useEIP2612Contract, useENSRegistrarContract, useENSResolverContract, useFactoryContract, useLimitOrderHelperContract, useListColor, useMakerContract, useMasterChefContract, useMasterChefV2Contract, useMerkleDistributorContract, useMulticall2Contract, usePairContract, useSushiBarContract, useSushiRollContract, useTimelockContract, useWBCHContract

// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var hooks_useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: ./src/hooks/useApproveCallback.ts + 1 modules
var useApproveCallback = __webpack_require__(9952);
// EXTERNAL MODULE: ./src/hooks/useBentoBox.ts
var useBentoBox = __webpack_require__(8994);
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 21 modules
var hooks_useContract = __webpack_require__(6419);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
// EXTERNAL MODULE: ./src/constants/abis/erc20.json
var erc20 = __webpack_require__(9638);
// EXTERNAL MODULE: ./src/entities/Fraction.ts
var entities_Fraction = __webpack_require__(6197);
// EXTERNAL MODULE: external "@ethersproject/address"
var address_ = __webpack_require__(7398);
;// CONCATENATED MODULE: ./src/hooks/useBentoBoxAllowance.ts








const useAllowance = tokenAddress => {
  const {
    account
  } = useActiveWeb3React();
  const bentoBoxContract = useBentoBoxContract(true); // withSigner

  const tokenAddressChecksum = getAddress(tokenAddress);
  const tokenContract = useContract(tokenAddressChecksum ? tokenAddressChecksum : undefined, ERC20_ABI, true); // withSigner

  const {
    0: allowance,
    1: setAllowance
  } = useState('0');
  const fetchAllowance = useCallback(async () => {
    if (account) {
      try {
        const allowance = await (tokenContract === null || tokenContract === void 0 ? void 0 : tokenContract.allowance(account, bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.address));
        const formatted = Fraction.from(BigNumber.from(allowance), BigNumber.from(10).pow(18)).toString();
        setAllowance(formatted);
      } catch (error) {
        setAllowance('0');
        throw error;
      }
    }
  }, [account, bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.address, tokenContract]);
  useEffect(() => {
    if (account && bentoBoxContract && tokenContract) {
      fetchAllowance();
    }

    const refreshInterval = setInterval(fetchAllowance, 10000);
    return () => clearInterval(refreshInterval);
  }, [account, bentoBoxContract, fetchAllowance, tokenContract]);
  return allowance;
};

/* harmony default export */ const useBentoBoxAllowance = ((/* unused pure expression or super */ null && (useAllowance)));
// EXTERNAL MODULE: ./src/hooks/useColor.ts
var useColor = __webpack_require__(7648);
// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__(8673);
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);
;// CONCATENATED MODULE: ./src/hooks/useFuse.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function fuzzySearch({
  fuse,
  data,
  term
}) {
  const results = fuse.search(term);
  return term ? results.map(result => result.item) : data;
}

function useFuse({
  data,
  options
}) {
  const {
    0: term,
    1: setTerm
  } = (0,external_react_.useState)('');

  const fuseOptions = _objectSpread({}, options);

  const fuse = new (external_fuse_js_default())(data || [], fuseOptions);
  const result = fuzzySearch({
    fuse,
    data,
    term
  });

  const reset = () => setTerm('');

  return {
    result,
    search: setTerm,
    term,
    reset
  };
}

/* harmony default export */ const hooks_useFuse = (useFuse);
// EXTERNAL MODULE: ./src/hooks/useSortableData.ts
var useSortableData = __webpack_require__(9155);
// EXTERNAL MODULE: ./src/hooks/useUSDCPrice.ts
var useUSDCPrice = __webpack_require__(5517);
;// CONCATENATED MODULE: ./src/hooks/index.ts










/***/ }),

/***/ 9952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UK": () => (/* binding */ ApprovalState),
  "qL": () => (/* binding */ useApproveCallback),
  "re": () => (/* binding */ useApproveCallbackFromTrade)
});

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/state/transactions/hooks.tsx
var hooks = __webpack_require__(9123);
// EXTERNAL MODULE: external "@ethersproject/constants"
var constants_ = __webpack_require__(6148);
// EXTERNAL MODULE: ./src/functions/trade.ts
var trade = __webpack_require__(4113);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: ./src/state/multicall/hooks.ts
var multicall_hooks = __webpack_require__(879);
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 21 modules
var useContract = __webpack_require__(6419);
;// CONCATENATED MODULE: ./src/hooks/useTokenAllowance.ts




function useTokenAllowance(token, owner, spender) {
  const contract = (0,useContract/* useTokenContract */.Ib)(token === null || token === void 0 ? void 0 : token.address, false);
  const inputs = (0,external_react_.useMemo)(() => [owner, spender], [owner, spender]);
  const allowance = (0,multicall_hooks/* useSingleCallResult */.Wk)(contract, 'allowance', inputs).result;
  return (0,external_react_.useMemo)(() => token && allowance ? sdk_.CurrencyAmount.fromRawAmount(token, allowance.toString()) : undefined, [token, allowance]);
}
;// CONCATENATED MODULE: ./src/hooks/useApproveCallback.ts








let ApprovalState; // returns a variable indicating the state of the approval and a function which approves if necessary or early returns

(function (ApprovalState) {
  ApprovalState["UNKNOWN"] = "UNKNOWN";
  ApprovalState["NOT_APPROVED"] = "NOT_APPROVED";
  ApprovalState["PENDING"] = "PENDING";
  ApprovalState["APPROVED"] = "APPROVED";
})(ApprovalState || (ApprovalState = {}));

function useApproveCallback(amountToApprove, spender) {
  var _amountToApprove$curr;

  const {
    account
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const token = amountToApprove !== null && amountToApprove !== void 0 && (_amountToApprove$curr = amountToApprove.currency) !== null && _amountToApprove$curr !== void 0 && _amountToApprove$curr.isToken ? amountToApprove.currency : undefined;
  const currentAllowance = useTokenAllowance(token, account !== null && account !== void 0 ? account : undefined, spender);
  const pendingApproval = (0,hooks/* useHasPendingApproval */.wB)(token === null || token === void 0 ? void 0 : token.address, spender); // check the current approval status

  const approvalState = (0,external_react_.useMemo)(() => {
    if (!amountToApprove || !spender) return ApprovalState.UNKNOWN;
    if (amountToApprove.currency.isNative) return ApprovalState.APPROVED; // we might not have enough data to know whether or not we need to approve

    if (!currentAllowance) return ApprovalState.UNKNOWN; // amountToApprove will be defined if currentAllowance is

    return currentAllowance.lessThan(amountToApprove) ? pendingApproval ? ApprovalState.PENDING : ApprovalState.NOT_APPROVED : ApprovalState.APPROVED;
  }, [amountToApprove, currentAllowance, pendingApproval, spender]);
  const tokenContract = (0,useContract/* useTokenContract */.Ib)(token === null || token === void 0 ? void 0 : token.address);
  const addTransaction = (0,hooks/* useTransactionAdder */.h7)();
  const approve = (0,external_react_.useCallback)(async () => {
    console.log(approvalState);

    if (approvalState !== ApprovalState.NOT_APPROVED) {
      console.error('approve was called unnecessarily');
      return;
    }

    if (!token) {
      console.error('no token');
      return;
    }

    if (!tokenContract) {
      console.error('tokenContract is null');
      return;
    }

    if (!amountToApprove) {
      console.error('missing amount to approve');
      return;
    }

    if (!spender) {
      console.error('no spender');
      return;
    }

    let useExact = false;
    const estimatedGas = await tokenContract.estimateGas.approve(spender, constants_.MaxUint256).catch(() => {
      // general fallback for tokens who restrict approval amounts
      useExact = true;
      return tokenContract.estimateGas.approve(spender, amountToApprove.quotient.toString());
    });
    return tokenContract.approve(spender, useExact ? amountToApprove.quotient.toString() : constants_.MaxUint256, {
      gasLimit: (0,trade/* calculateGasMargin */.yC)(estimatedGas),
      gasPrice: (0,trade/* getGasPrice */.o3)()
    }).then(response => {
      var _amountToApprove$curr2;

      addTransaction(response, {
        summary: 'Approve ' + ((_amountToApprove$curr2 = amountToApprove.currency.symbol) !== null && _amountToApprove$curr2 !== void 0 ? _amountToApprove$curr2 : ''),
        approval: {
          tokenAddress: token.address,
          spender: spender
        }
      });
    }).catch(error => {
      console.debug('Failed to approve token', error);
      throw error;
    });
  }, [approvalState, token, tokenContract, amountToApprove, spender, addTransaction]);
  return [approvalState, approve];
} // wraps useApproveCallback in the context of a swap

function useApproveCallbackFromTrade(trade, allowedSlippage, doArcher = false) {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const amountToApprove = (0,external_react_.useMemo)(() => trade && trade.inputAmount.currency.isToken ? trade.maximumAmountIn(allowedSlippage) : undefined, [trade, allowedSlippage]);
  return useApproveCallback(amountToApprove, chainId ? trade instanceof sdk_.Trade ? !doArcher ? sdk_.ROUTER_ADDRESS[chainId] : undefined : undefined : undefined);
}

/***/ }),

/***/ 8994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7398);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_address__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6148);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8269);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6419);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _state_transactions_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9123);








function useBentoBox() {
  const {
    account,
    chainId
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* .useActiveWeb3React */ .a)();
  const addTransaction = (0,_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useTransactionAdder */ .h7)();
  const bentoBoxContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useBentoBoxContract */ .rO)();
  const deposit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async (tokenAddress, value) => {
    if (value && chainId) {
      try {
        const tokenAddressChecksum = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_0__.getAddress)(tokenAddress);

        if (tokenAddressChecksum === _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_2__.WNATIVE_ADDRESS[chainId]) {
          const tx = await (bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.deposit(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_1__.AddressZero, account, account, value, 0, {
            value
          }));
          return addTransaction(tx, {
            summary: 'Deposit to Bentobox'
          });
        } else {
          const tx = await (bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.deposit(tokenAddressChecksum, account, account, value, 0));
          return addTransaction(tx, {
            summary: 'Deposit to Bentobox'
          });
        }
      } catch (e) {
        console.error('bentobox deposit error:', e);
        return e;
      }
    }
  }, [account, addTransaction, bentoBoxContract, chainId]);
  const withdraw = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)( // todo: this should be updated with BigNumber as opposed to string
  async (tokenAddress, value) => {
    if (value && chainId) {
      try {
        const tokenAddressChecksum = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_0__.getAddress)(tokenAddress);
        const tx = await (bentoBoxContract === null || bentoBoxContract === void 0 ? void 0 : bentoBoxContract.withdraw(tokenAddressChecksum === _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_2__.WNATIVE_ADDRESS[chainId] ? '0x0000000000000000000000000000000000000000' : tokenAddressChecksum, account, account, value, 0));
        return addTransaction(tx, {
          summary: 'Withdraw from Bentobox'
        });
      } catch (e) {
        console.error('bentobox withdraw error:', e);
        return e;
      }
    }
  }, [account, addTransaction, bentoBoxContract, chainId]);
  return {
    deposit,
    withdraw
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBentoBox);

/***/ }),

/***/ 7648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useColor),
/* harmony export */   "d": () => (/* binding */ useListColor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_vibrant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wcag_contrast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6515);
/* harmony import */ var wcag_contrast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wcag_contrast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7158);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7025);






async function getColorFromToken(token) {
  const path = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${token.address}/logo.png`;
  return node_vibrant__WEBPACK_IMPORTED_MODULE_1___default().from(path).getPalette().then(palette => {
    if (palette !== null && palette !== void 0 && palette.Vibrant) {
      let detectedHex = palette.Vibrant.hex;
      let AAscore = (0,wcag_contrast__WEBPACK_IMPORTED_MODULE_2__.hex)(detectedHex, '#FFF');

      while (AAscore < 3) {
        detectedHex = (0,polished__WEBPACK_IMPORTED_MODULE_3__.shade)(0.005, detectedHex);
        AAscore = (0,wcag_contrast__WEBPACK_IMPORTED_MODULE_2__.hex)(detectedHex, '#FFF');
      }

      return detectedHex;
    }

    return null;
  }).catch(() => null);
}

async function getColorFromUriPath(uri) {
  const formattedPath = (0,_functions_convert__WEBPACK_IMPORTED_MODULE_4__/* .uriToHttp */ .ie)(uri)[0];
  return node_vibrant__WEBPACK_IMPORTED_MODULE_1___default().from(formattedPath).getPalette().then(palette => {
    if (palette !== null && palette !== void 0 && palette.Vibrant) {
      return palette.Vibrant.hex;
    }

    return null;
  }).catch(() => null);
}

function useColor(token) {
  const {
    0: color,
    1: setColor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('#0094ec');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    let stale = false;

    if (token) {
      getColorFromToken(token).then(tokenColor => {
        if (!stale && tokenColor !== null) {
          setColor(tokenColor);
        }
      });
    }

    return () => {
      stale = true;
      setColor('#0094ec');
    };
  }, [token]);
  return color;
}
function useListColor(listImageUri) {
  const {
    0: color,
    1: setColor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('#0094ec');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    let stale = false;

    if (listImageUri) {
      getColorFromUriPath(listImageUri).then(color => {
        if (!stale && color !== null) {
          setColor(color);
        }
      });
    }

    return () => {
      stale = true;
      setColor('#0094ec');
    };
  }, [listImageUri]);
  return color;
}

/***/ }),

/***/ 9155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__);



function getNested(theObject, path, separator = '.') {
  try {
    return path.replace('[', separator).replace(']', '').split(separator).reduce((obj, property) => {
      return obj[property];
    }, theObject);
  } catch (err) {
    return undefined;
  }
}

const useSortableData = (items, config = null) => {
  const {
    0: sortConfig,
    1: setSortConfig
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config);
  const sortedItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (items && items.length > 0) {
      const sortableItems = [...items];

      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          const aValue = getNested(a, sortConfig.key);
          const bValue = getNested(b, sortConfig.key);

          if (aValue instanceof _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber && bValue instanceof _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber) {
            if (aValue.lt(bValue)) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }

            if (aValue.gt(bValue)) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
          } else if (aValue === Infinity) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          } else if (bValue === Infinity) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          } else {
            if (aValue < bValue) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }

            if (aValue > bValue) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
          }

          return 0;
        });
      }

      return sortableItems;
    }

    return [];
  }, [items, sortConfig]);

  const requestSort = (key, direction = 'ascending') => {
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig && sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = 'ascending';
    }

    setSortConfig({
      key,
      direction
    });
  };

  return {
    items: sortedItems,
    requestSort,
    sortConfig
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSortableData);

/***/ }),

/***/ 5517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUSDCPrice),
/* harmony export */   "N": () => (/* binding */ useUSDCValue)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8269);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useV2Trades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5751);



 // import { wrappedCurrency } from "../functions/currency/wrappedCurrency";
// Stablecoin amounts used when calculating spot price for a given currency.
// The amount is large enough to filter low liquidity pairs.

const STABLECOIN_AMOUNT_OUT = {};
/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */

function useUSDCPrice(currency) {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* .useActiveWeb3React */ .a)();
  const amountOut = chainId ? STABLECOIN_AMOUNT_OUT[chainId] : undefined;
  const stablecoin = amountOut === null || amountOut === void 0 ? void 0 : amountOut.currency;
  const v2USDCTrade = (0,_useV2Trades__WEBPACK_IMPORTED_MODULE_3__/* .useV2TradeExactOut */ .k)(currency, amountOut, {
    maxHops: 3
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!currency || !stablecoin) {
      return undefined;
    } // handle usdc


    if (currency !== null && currency !== void 0 && currency.wrapped.equals(stablecoin)) {
      return new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Price(stablecoin, stablecoin, '1', '1');
    } // use v2 price if available


    if (v2USDCTrade) {
      const {
        numerator,
        denominator
      } = v2USDCTrade.route.midPrice;
      return new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Price(currency, stablecoin, denominator, numerator);
    }

    return undefined;
  }, [currency, stablecoin, v2USDCTrade]);
}
function useUSDCValue(currencyAmount) {
  const price = useUSDCPrice(currencyAmount === null || currencyAmount === void 0 ? void 0 : currencyAmount.currency);
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!price || !currencyAmount) return null;

    try {
      return price.quote(currencyAmount);
    } catch (error) {
      return null;
    }
  }, [currencyAmount, price]);
}

/***/ }),

/***/ 2622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_G": () => (/* binding */ PairState),
/* harmony export */   "OY": () => (/* binding */ useV2Pairs),
/* harmony export */   "Oo": () => (/* binding */ useV2Pair)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mistswapdex_core_abi_IUniswapV2Pair_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5243);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6124);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(879);





const PAIR_INTERFACE = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__.Interface(_mistswapdex_core_abi_IUniswapV2Pair_json__WEBPACK_IMPORTED_MODULE_1__);
let PairState;

(function (PairState) {
  PairState[PairState["LOADING"] = 0] = "LOADING";
  PairState[PairState["NOT_EXISTS"] = 1] = "NOT_EXISTS";
  PairState[PairState["EXISTS"] = 2] = "EXISTS";
  PairState[PairState["INVALID"] = 3] = "INVALID";
})(PairState || (PairState = {}));

function useV2Pairs(currencies) {
  const tokens = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => currencies.map(([currencyA, currencyB]) => [currencyA === null || currencyA === void 0 ? void 0 : currencyA.wrapped, currencyB === null || currencyB === void 0 ? void 0 : currencyB.wrapped]), [currencies]);
  const pairAddresses = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => tokens.map(([tokenA, tokenB]) => {
    return tokenA && tokenB && tokenA.chainId === tokenB.chainId && !tokenA.equals(tokenB) && _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.FACTORY_ADDRESS[tokenA.chainId] ? (0,_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.computePairAddress)({
      factoryAddress: _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.FACTORY_ADDRESS[tokenA.chainId],
      tokenA,
      tokenB
    }) : undefined;
  }), [tokens]);
  const results = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMultipleContractSingleData */ ._Y)(pairAddresses, PAIR_INTERFACE, 'getReserves');
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return results.map((result, i) => {
      const {
        result: reserves,
        loading
      } = result;
      const tokenA = tokens[i][0];
      const tokenB = tokens[i][1];
      if (loading) return [PairState.LOADING, null];
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null];
      if (!reserves) return [PairState.NOT_EXISTS, null];
      const {
        reserve0,
        reserve1
      } = reserves;
      const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
      return [PairState.EXISTS, new _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.Pair(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token0, reserve0.toString()), _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.CurrencyAmount.fromRawAmount(token1, reserve1.toString()))];
    });
  }, [results, tokens]);
}
function useV2Pair(tokenA, tokenB) {
  const inputs = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [[tokenA, tokenB]], [tokenA, tokenB]);
  return useV2Pairs(inputs)[0];
}

/***/ }),

/***/ 5751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ useV2TradeExactIn),
  "k": () => (/* binding */ useV2TradeExactOut)
});

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/hooks/useV2Pairs.ts
var useV2Pairs = __webpack_require__(2622);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8532);
// EXTERNAL MODULE: ./src/functions/trade.ts
var trade = __webpack_require__(4113);
// EXTERNAL MODULE: ./src/config/routing.ts
var routing = __webpack_require__(5857);
// EXTERNAL MODULE: external "lodash/flatMap"
var flatMap_ = __webpack_require__(3960);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap_);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/hooks/useAllCurrencyCombinations.ts




function useAllCurrencyCombinations(currencyA, currencyB) {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const [tokenA, tokenB] = chainId ? [currencyA === null || currencyA === void 0 ? void 0 : currencyA.wrapped, currencyB === null || currencyB === void 0 ? void 0 : currencyB.wrapped] : [undefined, undefined];
  const bases = (0,external_react_.useMemo)(() => {
    var _BASES_TO_CHECK_TRADE, _ADDITIONAL_BASES$cha, _ADDITIONAL_BASES$cha2, _ADDITIONAL_BASES$cha3, _ADDITIONAL_BASES$cha4;

    if (!chainId) return [];
    const common = (_BASES_TO_CHECK_TRADE = routing/* BASES_TO_CHECK_TRADES_AGAINST */.lM[chainId]) !== null && _BASES_TO_CHECK_TRADE !== void 0 ? _BASES_TO_CHECK_TRADE : [];
    const additionalA = tokenA ? (_ADDITIONAL_BASES$cha = (_ADDITIONAL_BASES$cha2 = routing/* ADDITIONAL_BASES */.ck[chainId]) === null || _ADDITIONAL_BASES$cha2 === void 0 ? void 0 : _ADDITIONAL_BASES$cha2[tokenA.address]) !== null && _ADDITIONAL_BASES$cha !== void 0 ? _ADDITIONAL_BASES$cha : [] : [];
    const additionalB = tokenB ? (_ADDITIONAL_BASES$cha3 = (_ADDITIONAL_BASES$cha4 = routing/* ADDITIONAL_BASES */.ck[chainId]) === null || _ADDITIONAL_BASES$cha4 === void 0 ? void 0 : _ADDITIONAL_BASES$cha4[tokenB.address]) !== null && _ADDITIONAL_BASES$cha3 !== void 0 ? _ADDITIONAL_BASES$cha3 : [] : [];
    return [...common, ...additionalA, ...additionalB];
  }, [chainId, tokenA, tokenB]);
  const basePairs = (0,external_react_.useMemo)(() => flatMap_default()(bases, base => bases.map(otherBase => [base, otherBase])), [bases]);
  return (0,external_react_.useMemo)(() => tokenA && tokenB ? [// the direct pair
  [tokenA, tokenB], // token A against all bases
  ...bases.map(base => [tokenA, base]), // token B against all bases
  ...bases.map(base => [tokenB, base]), // each base against all bases
  ...basePairs].filter(tokens => Boolean(tokens[0] && tokens[1])).filter(([t0, t1]) => t0.address !== t1.address).filter(([tokenA, tokenB]) => {
    if (!chainId) return true;
    const customBases = routing/* CUSTOM_BASES */.IP[chainId];
    const customBasesA = customBases === null || customBases === void 0 ? void 0 : customBases[tokenA.address];
    const customBasesB = customBases === null || customBases === void 0 ? void 0 : customBases[tokenB.address];
    if (!customBasesA && !customBasesB) return true;
    if (customBasesA && !customBasesA.find(base => tokenB.equals(base))) return false;
    if (customBasesB && !customBasesB.find(base => tokenA.equals(base))) return false;
    return true;
  }) : [], [tokenA, tokenB, bases, basePairs, chainId]);
}
;// CONCATENATED MODULE: ./src/hooks/useV2Trades.ts







function useAllCommonPairs(currencyA, currencyB) {
  const allCurrencyCombinations = useAllCurrencyCombinations(currencyA, currencyB);
  const allPairs = (0,useV2Pairs/* useV2Pairs */.OY)(allCurrencyCombinations); // only pass along valid pairs, non-duplicated pairs

  return (0,external_react_.useMemo)(() => Object.values(allPairs // filter out invalid pairs
  .filter(result => Boolean(result[0] === useV2Pairs/* PairState.EXISTS */._G.EXISTS && result[1])) // filter out duplicated pairs
  .reduce((memo, [, curr]) => {
    var _memo$curr$liquidityT;

    memo[curr.liquidityToken.address] = (_memo$curr$liquidityT = memo[curr.liquidityToken.address]) !== null && _memo$curr$liquidityT !== void 0 ? _memo$curr$liquidityT : curr;
    return memo;
  }, {})), [allPairs]);
}

const MAX_HOPS = 3;
/**
 * Returns the best trade for the exact amount of tokens in to the given token out
 */

function useV2TradeExactIn(currencyAmountIn, currencyOut, {
  maxHops = MAX_HOPS
} = {}) {
  const allowedPairs = useAllCommonPairs(currencyAmountIn === null || currencyAmountIn === void 0 ? void 0 : currencyAmountIn.currency, currencyOut);
  return (0,external_react_.useMemo)(() => {
    if (currencyAmountIn && currencyOut && allowedPairs.length > 0) {
      if (maxHops === 1) {
        let trade;

        try {
          var _Trade$bestTradeExact;

          trade = (_Trade$bestTradeExact = sdk_.Trade.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
            maxHops: 1,
            maxNumResults: 1
          })[0]) !== null && _Trade$bestTradeExact !== void 0 ? _Trade$bestTradeExact : null;
        } catch {
          trade = null;
        }

        return trade;
      } // search through trades with varying hops, find best trade out of them


      let bestTradeSoFar = null;

      for (let i = 1; i <= maxHops; i++) {
        let currentTrade;

        try {
          var _Trade$bestTradeExact2;

          currentTrade = (_Trade$bestTradeExact2 = sdk_.Trade.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
            maxHops: i,
            maxNumResults: 1
          })[0]) !== null && _Trade$bestTradeExact2 !== void 0 ? _Trade$bestTradeExact2 : null;
        } catch {
          currentTrade = null;
        } // if current trade is best yet, save it


        if ((0,trade/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
          bestTradeSoFar = currentTrade;
        }
      }

      return bestTradeSoFar;
    }

    return null;
  }, [allowedPairs, currencyAmountIn, currencyOut, maxHops]);
}
/**
 * Returns the best trade for the token in to the exact amount of token out
 */

function useV2TradeExactOut(currencyIn, currencyAmountOut, {
  maxHops = MAX_HOPS
} = {}) {
  const allowedPairs = useAllCommonPairs(currencyIn, currencyAmountOut === null || currencyAmountOut === void 0 ? void 0 : currencyAmountOut.currency);
  return (0,external_react_.useMemo)(() => {
    if (currencyIn && currencyAmountOut && allowedPairs.length > 0) {
      if (maxHops === 1) {
        var _Trade$bestTradeExact3;

        return (_Trade$bestTradeExact3 = sdk_.Trade.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
          maxHops: 1,
          maxNumResults: 1
        })[0]) !== null && _Trade$bestTradeExact3 !== void 0 ? _Trade$bestTradeExact3 : null;
      } // search through trades with varying hops, find best trade out of them


      let bestTradeSoFar = null;

      for (let i = 1; i <= maxHops; i++) {
        var _Trade$bestTradeExact4;

        const currentTrade = (_Trade$bestTradeExact4 = sdk_.Trade.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
          maxHops: i,
          maxNumResults: 1
        })[0]) !== null && _Trade$bestTradeExact4 !== void 0 ? _Trade$bestTradeExact4 : null;

        if ((0,trade/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
          bestTradeSoFar = currentTrade;
        }
      }

      return bestTradeSoFar;
    }

    return null;
  }, [currencyIn, currencyAmountOut, allowedPairs, maxHops]);
}

/***/ })

};
;
//# sourceMappingURL=9202.js.map