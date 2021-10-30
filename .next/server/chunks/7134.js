"use strict";
exports.id = 7134;
exports.ids = [7134];
exports.modules = {

/***/ 1898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tz": () => (/* binding */ AutoColumn),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Column, ColumnCenter */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "className"],
      _excluded2 = (/* unused pure expression or super */ null && (["children"])),
      _excluded3 = ["children", "className", "gap", "justify", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Column = _ref => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", _objectSpread(_objectSpread({
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('flex flex-col justify-center', className)
  }, rest), {}, {
    children: children
  }));
};
const ColumnCenter = _ref2 => {
  let {
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/_jsx(Column, _objectSpread(_objectSpread({
    className: "items-center w-full"
  }, rest), {}, {
    children: children
  }));
};
const AutoColumn = _ref3 => {
  let {
    children,
    className,
    gap,
    justify,
    style
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", _objectSpread(_objectSpread({
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('grid', className),
    style: _objectSpread({
      gridRowGap: gap === 'sm' && '8px' || gap === 'md' && '12px' || gap === 'lg' && '24px' || gap,
      justifyItems: justify && justify
    }, style)
  }, rest), {}, {
    children: children
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Column);

/***/ }),

/***/ 8003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ListLogo)
/* harmony export */ });
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useHttpLocations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3278);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ListLogo({
  logoURI,
  style,
  size = '24px',
  alt
}) {
  const srcs = (0,_hooks_useHttpLocations__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(logoURI);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    alt: alt,
    width: size,
    height: size,
    srcs: srcs,
    style: style
  });
}

/***/ }),

/***/ 7745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m0": () => (/* binding */ RowBetween),
/* harmony export */   "BA": () => (/* binding */ AutoRow),
/* harmony export */   "DA": () => (/* binding */ RowFixed)
/* harmony export */ });
/* unused harmony exports Row, RowFlat */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children", "className", "width", "align", "justify", "padding", "border", "borderRadius"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Row = _ref => {
  let {
    children,
    className,
    width,
    align,
    justify,
    padding,
    border,
    borderRadius
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", _objectSpread(_objectSpread({
    className: (0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('w-full flex p-0', className),
    style: {
      width,
      alignItems: align,
      justifyContent: justify,
      padding,
      border,
      borderRadius
    }
  }, rest), {}, {
    children: children
  }));
};
const RowBetween = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Row).withConfig({
  displayName: "Row__RowBetween",
  componentId: "sc-zdbul8-0"
})(["justify-content:space-between;"]);
const RowFlat = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Row__RowFlat",
  componentId: "sc-zdbul8-1"
})(["display:flex;align-items:flex-end;"]);
const AutoRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Row).withConfig({
  displayName: "Row__AutoRow",
  componentId: "sc-zdbul8-2"
})(["flex-wrap:wrap;margin:", ";justify-content:", ";& > *{margin:", " !important;}"], ({
  gap
}) => gap && `-${gap}`, ({
  justify
}) => justify && justify, ({
  gap
}) => gap);
const RowFixed = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Row).withConfig({
  displayName: "Row__RowFixed",
  componentId: "sc-zdbul8-3"
})(["width:fit-content;margin:", ";"], ({
  gap
}) => gap && `-${gap}`);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Row)));

/***/ }),

/***/ 481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useOnClickOutside)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnClickOutside(node, handler) {
  const handlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handlerRef.current = handler;
  }, [handler]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = e => {
      var _node$current$contain, _node$current;

      if ((_node$current$contain = (_node$current = node.current) === null || _node$current === void 0 ? void 0 : _node$current.contains(e.target)) !== null && _node$current$contain !== void 0 ? _node$current$contain : false) {
        return;
      }

      if (handlerRef.current) handlerRef.current();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [node]);
}

/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useToggle(initialState = false) {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
  const toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setState(state => !state), []);
  return [state, toggle];
}

/***/ }),

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchModal_CurrencySearchModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/modals/SearchModal/CurrencyModalView.ts
var CurrencyModalView;

(function (CurrencyModalView) {
  CurrencyModalView[CurrencyModalView["search"] = 0] = "search";
  CurrencyModalView[CurrencyModalView["manage"] = 1] = "manage";
  CurrencyModalView[CurrencyModalView["importToken"] = 2] = "importToken";
  CurrencyModalView[CurrencyModalView["importList"] = 3] = "importList";
})(CurrencyModalView || (CurrencyModalView = {}));

/* harmony default export */ const SearchModal_CurrencyModalView = (CurrencyModalView);
// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/functions/filtering.ts
var filtering = __webpack_require__(5899);
// EXTERNAL MODULE: ./src/hooks/Tokens.ts
var Tokens = __webpack_require__(6269);
// EXTERNAL MODULE: external "react-virtualized-auto-sizer"
var external_react_virtualized_auto_sizer_ = __webpack_require__(242);
var external_react_virtualized_auto_sizer_default = /*#__PURE__*/__webpack_require__.n(external_react_virtualized_auto_sizer_);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(7603);
// EXTERNAL MODULE: ./node_modules/@sushiswap/chainlink-whitelist/dist/sushiswap-chainlink.whitelist.json
var sushiswap_chainlink_whitelist = __webpack_require__(7608);
// EXTERNAL MODULE: ./src/components/Column/index.tsx
var Column = __webpack_require__(1898);
// EXTERNAL MODULE: ./src/config/routing.ts
var routing = __webpack_require__(5857);
// EXTERNAL MODULE: ./src/components/CurrencyLogo/index.tsx
var CurrencyLogo = __webpack_require__(1208);
// EXTERNAL MODULE: ./src/components/QuestionHelper/index.tsx
var QuestionHelper = __webpack_require__(5068);
// EXTERNAL MODULE: external "@lingui/react"
var react_ = __webpack_require__(2339);
// EXTERNAL MODULE: ./src/components/Typography/index.tsx
var Typography = __webpack_require__(3130);
// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/modals/SearchModal/CommonBases.tsx










function CommonBases({
  chainId,
  onSelect,
  selectedCurrency
}) {
  var _COMMON_BASES$chainId;

  const {
    i18n
  } = (0,react_.useLingui)();
  const bases = typeof chainId !== 'undefined' ? (_COMMON_BASES$chainId = routing/* COMMON_BASES */.gP[chainId]) !== null && _COMMON_BASES$chainId !== void 0 ? _COMMON_BASES$chainId : [] : [];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col space-y-2",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-row",
      children: [i18n._(
      /*i18n*/
      i18n._("Common bases")), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
        text: i18n._(
        /*i18n*/
        i18n._("These tokens are commonly paired with other tokens."))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-wrap",
      children: bases.map(currency => {
        const isSelected = selectedCurrency === null || selectedCurrency === void 0 ? void 0 : selectedCurrency.equals(currency);
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.ZP, {
          variant: "empty",
          type: "button",
          onClick: () => !isSelected && onSelect(currency),
          disabled: isSelected,
          className: "flex items-center p-2 m-1 space-x-2 rounded bg-dark-800 hover:bg-dark-700 disabled:bg-dark-1000 disabled:cursor-not-allowed",
          children: [/*#__PURE__*/jsx_runtime_.jsx(CurrencyLogo/* default */.Z, {
            currency: currency
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "sm",
            className: "font-semibold",
            children: currency.symbol
          })]
        }, (0,functions/* currencyId */.Hh)(currency));
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Row/index.tsx
var Row = __webpack_require__(7745);
// EXTERNAL MODULE: external "react-window"
var external_react_window_ = __webpack_require__(6460);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9337);
// EXTERNAL MODULE: ./src/components/ListLogo/index.tsx
var ListLogo = __webpack_require__(8003);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/state/lists/wrappedTokenInfo.ts
var wrappedTokenInfo = __webpack_require__(2045);
;// CONCATENATED MODULE: ./src/modals/SearchModal/ImportRow.tsx












const TokenSection = external_styled_components_default().div.withConfig({
  displayName: "ImportRow__TokenSection",
  componentId: "sc-1502xpn-0"
})(["padding:4px 20px;height:56px;display:grid;grid-template-columns:auto minmax(auto,1fr) auto;grid-gap:16px;align-items:center;opacity:", ";"], ({
  dim
}) => dim ? '0.4' : '1');
const CheckIcon = external_styled_components_default()(external_react_feather_.CheckCircle).withConfig({
  displayName: "ImportRow__CheckIcon",
  componentId: "sc-1502xpn-1"
})(["height:16px;width:16px;margin-right:6px;"]);
const NameOverflow = external_styled_components_default().div.withConfig({
  displayName: "ImportRow__NameOverflow",
  componentId: "sc-1502xpn-2"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-overflow:ellipsis;max-width:140px;font-size:12px;"]);
function ImportRow({
  token,
  style,
  dim,
  showImportView,
  setImportToken
}) {
  // check if already active on list or local storage tokens
  const isAdded = (0,Tokens/* useIsUserAddedToken */.EH)(token);
  const isActive = (0,Tokens/* useIsTokenActive */.ZN)(token);
  const list = token instanceof wrappedTokenInfo/* WrappedTokenInfo */.D ? token.list : undefined;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TokenSection, {
    style: style,
    children: [/*#__PURE__*/jsx_runtime_.jsx(CurrencyLogo/* default */.Z, {
      currency: token,
      size: '24px',
      style: {
        opacity: dim ? '0.6' : '1'
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column/* AutoColumn */.Tz, {
      gap: "4px",
      style: {
        opacity: dim ? '0.6' : '1'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* AutoRow */.BA, {
        align: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-semibold",
          children: token.symbol
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ml-2 font-light",
          children: /*#__PURE__*/jsx_runtime_.jsx(NameOverflow, {
            title: token.name,
            children: token.name
          })
        })]
      }), list && list.logoURI && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
        align: "center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mr-1 text-sm",
          children: ["via ", list.name]
        }), /*#__PURE__*/jsx_runtime_.jsx(ListLogo/* default */.Z, {
          logoURI: list.logoURI,
          size: "12px"
        })]
      })]
    }), !isActive && !isAdded ? /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
      color: "gradient",
      size: "xs",
      style: {
        width: 'fit-content',
        padding: '6px 12px'
      },
      onClick: () => {
        setImportToken && setImportToken(token);
        showImportView();
      },
      children: "Import"
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
      style: {
        minWidth: 'fit-content'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(CheckIcon, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-green",
        children: "Active"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Loader/index.tsx
var Loader = __webpack_require__(4419);
;// CONCATENATED MODULE: ./src/modals/SearchModal/styleds.tsx



const ModalInfo = external_styled_components_default().div.withConfig({
  displayName: "styleds__ModalInfo",
  componentId: "sc-1qalsey-0"
})(["align-items:center;padding:1rem 1rem;margin:0.25rem 0.5rem;justify-content:center;flex:1;user-select:none;"]);
const TextDot = external_styled_components_default().div.withConfig({
  displayName: "styleds__TextDot",
  componentId: "sc-1qalsey-1"
})(["height:3px;width:3px;border-radius:50%;"]);
const FadedSpan = external_styled_components_default()(Row/* RowFixed */.DA).withConfig({
  displayName: "styleds__FadedSpan",
  componentId: "sc-1qalsey-2"
})(["font-size:14px;"]);
const Checkbox = external_styled_components_default().input.withConfig({
  displayName: "styleds__Checkbox",
  componentId: "sc-1qalsey-3"
})(["height:20px;margin:0;"]);
const PaddedColumn = external_styled_components_default()(Column/* AutoColumn */.Tz).withConfig({
  displayName: "styleds__PaddedColumn",
  componentId: "sc-1qalsey-4"
})(["padding:20px;"]);
const MenuItem = external_styled_components_default()(Row/* RowBetween */.m0).withConfig({
  displayName: "styleds__MenuItem",
  componentId: "sc-1qalsey-5"
})(["padding:4px 20px;height:56px;display:grid;grid-template-columns:auto minmax(auto,1fr) auto minmax(0,72px);grid-gap:16px;cursor:", ";pointer-events:", ";:hover{}opacity:", ";"], ({
  disabled
}) => !disabled && 'pointer', ({
  disabled
}) => disabled && 'none', ({
  disabled,
  selected
}) => disabled || selected ? 0.5 : 1);
const SearchInput = external_styled_components_default().input.withConfig({
  displayName: "styleds__SearchInput",
  componentId: "sc-1qalsey-6"
})(["position:relative;display:flex;padding:16px;align-items:center;width:100%;white-space:nowrap;background:none;border:none;outline:none;border-radius:10px;-webkit-appearance:none;font-size:18px;::placeholder{}transition:border 100ms;:focus{outline:none;}"]);
const Separator = external_styled_components_default().div.withConfig({
  displayName: "styleds__Separator",
  componentId: "sc-1qalsey-7"
})(["width:100%;height:1px;"]);
const SeparatorDark = external_styled_components_default().div.withConfig({
  displayName: "styleds__SeparatorDark",
  componentId: "sc-1qalsey-8"
})(["width:100%;height:1px;"]);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx + 1 modules
var Tooltip = __webpack_require__(3349);
// EXTERNAL MODULE: ./src/functions/validate.ts
var validate = __webpack_require__(2556);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: ./src/state/lists/hooks.ts + 1 modules
var hooks = __webpack_require__(1909);
// EXTERNAL MODULE: ./src/state/wallet/hooks.ts
var wallet_hooks = __webpack_require__(2319);
;// CONCATENATED MODULE: ./src/modals/SearchModal/CurrencyList.tsx






















function currencyKey(currency) {
  return currency.isToken ? currency.address : 'BCH';
}

const Tag = external_styled_components_default().div.withConfig({
  displayName: "CurrencyList__Tag",
  componentId: "sc-1txrst7-0"
})(["background-color:", ";font-size:14px;border-radius:4px;padding:0.25rem 0.3rem 0.25rem 0.3rem;max-width:6rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;justify-self:flex-end;margin-right:4px;"], ({
  theme
}) => theme.bg3);
const FixedContentRow = external_styled_components_default().div.withConfig({
  displayName: "CurrencyList__FixedContentRow",
  componentId: "sc-1txrst7-1"
})(["padding:4px 20px;height:56px;display:grid;grid-gap:16px;align-items:center;"]);

function Balance({
  balance
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "whitespace-nowrap overflow-hidden max-w-[5rem] overflow-ellipsis",
    title: balance.toExact(),
    children: balance.toSignificant(4)
  });
}

const TagContainer = external_styled_components_default().div.withConfig({
  displayName: "CurrencyList__TagContainer",
  componentId: "sc-1txrst7-2"
})(["display:flex;justify-content:flex-end;"]);
const TokenListLogoWrapper = external_styled_components_default().img.withConfig({
  displayName: "CurrencyList__TokenListLogoWrapper",
  componentId: "sc-1txrst7-3"
})(["height:20px;"]);

function TokenTags({
  currency
}) {
  if (!(currency instanceof wrappedTokenInfo/* WrappedTokenInfo */.D)) {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {});
  }

  const tags = currency.tags;
  if (!tags || tags.length === 0) return /*#__PURE__*/jsx_runtime_.jsx("span", {});
  const tag = tags[0];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TagContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Tooltip/* MouseoverTooltip */.ud, {
      text: tag.description,
      children: /*#__PURE__*/jsx_runtime_.jsx(Tag, {
        children: tag.name
      }, tag.id)
    }), tags.length > 1 ? /*#__PURE__*/jsx_runtime_.jsx(Tooltip/* MouseoverTooltip */.ud, {
      text: tags.slice(1).map(({
        name,
        description
      }) => `${name}: ${description}`).join('; \n'),
      children: /*#__PURE__*/jsx_runtime_.jsx(Tag, {
        children: "..."
      })
    }) : null]
  });
}

function CurrencyRow({
  currency,
  onSelect,
  isSelected,
  otherSelected,
  style
}) {
  const {
    account,
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const key = currencyKey(currency);
  const selectedTokenList = (0,hooks/* useCombinedActiveList */.z0)();
  const isOnSelectedList = (0,validate/* isTokenOnList */.wK)(selectedTokenList, currency.isToken ? currency : undefined);
  const customAdded = (0,Tokens/* useIsUserAddedToken */.EH)(currency);
  const balance = (0,wallet_hooks/* useCurrencyBalance */._h)(account !== null && account !== void 0 ? account : undefined, currency); // only show add or remove buttons if not on selected list

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuItem, {
    id: `token-item-${key}`,
    style: style,
    className: `hover:bg-dark-800 rounded`,
    onClick: () => isSelected ? null : onSelect(),
    disabled: isSelected,
    selected: otherSelected,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(CurrencyLogo/* default */.Z, {
        currency: currency,
        size: 32
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column/* default */.ZP, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        title: currency.name,
        className: "text-sm font-medium",
        children: currency.symbol
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-sm font-thin truncate",
        children: [currency.name, " ", !isOnSelectedList && customAdded && '• Added by user']
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TokenTags, {
      currency: currency
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-end",
      children: balance ? /*#__PURE__*/jsx_runtime_.jsx(Balance, {
        balance: balance
      }) : account ? /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {}) : null
    })]
  });
}

const BREAK_LINE = 'BREAK';

function isBreakLine(x) {
  return x === BREAK_LINE;
}

function BreakLineComponent({
  style
}) {
  const {
    i18n
  } = (0,react_.useLingui)();
  return /*#__PURE__*/jsx_runtime_.jsx(FixedContentRow, {
    style: style,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowBetween */.m0, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TokenListLogoWrapper, {
          src: "/tokenlist.svg"
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "sm",
          className: "ml-3",
          children: i18n._(
          /*i18n*/
          i18n._("Expanded results from inactive Token Lists"))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
        text: i18n._(
        /*i18n*/
        i18n._("Tokens from inactive lists. Import specific tokens below or\nclick Manage to activate more lists."))
      })]
    })
  });
}

function CurrencyList({
  height,
  currencies,
  otherListTokens,
  selectedCurrency,
  onCurrencySelect,
  otherCurrency,
  fixedListRef,
  showImportView,
  setImportToken
}) {
  const itemData = (0,external_react_.useMemo)(() => {
    if (otherListTokens && (otherListTokens === null || otherListTokens === void 0 ? void 0 : otherListTokens.length) > 0) {
      return [...currencies, BREAK_LINE, ...otherListTokens];
    }

    return currencies;
  }, [currencies, otherListTokens]);
  const Row = (0,external_react_.useCallback)(function TokenRow({
    data,
    index,
    style
  }) {
    const row = data[index];

    if (isBreakLine(row)) {
      return /*#__PURE__*/jsx_runtime_.jsx(BreakLineComponent, {
        style: style
      });
    }

    const currency = row;
    const isSelected = Boolean(currency && selectedCurrency && selectedCurrency.equals(currency));
    const otherSelected = Boolean(currency && otherCurrency && otherCurrency.equals(currency));

    const handleSelect = () => currency && onCurrencySelect(currency);

    const token = currency === null || currency === void 0 ? void 0 : currency.wrapped;
    const showImport = index > currencies.length;

    if (showImport && token) {
      return /*#__PURE__*/jsx_runtime_.jsx(ImportRow, {
        style: style,
        token: token,
        showImportView: showImportView,
        setImportToken: setImportToken,
        dim: true
      });
    } else if (currency) {
      return /*#__PURE__*/jsx_runtime_.jsx(CurrencyRow, {
        style: style,
        currency: currency,
        isSelected: isSelected,
        onSelect: handleSelect,
        otherSelected: otherSelected
      });
    } else {
      return null;
    }
  }, [currencies.length, onCurrencySelect, otherCurrency, selectedCurrency, setImportToken, showImportView]);
  const itemKey = (0,external_react_.useCallback)((index, data) => {
    const currency = data[index];
    if (isBreakLine(currency)) return BREAK_LINE;
    return currencyKey(currency);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_window_.FixedSizeList, {
    height: height,
    ref: fixedListRef,
    width: "100%",
    itemData: itemData,
    itemCount: itemData.length,
    itemSize: 56,
    itemKey: itemKey,
    children: Row
  });
}
// EXTERNAL MODULE: ./src/components/ModalHeader/index.tsx
var ModalHeader = __webpack_require__(7144);
// EXTERNAL MODULE: ./src/hooks/useDebounce.ts
var useDebounce = __webpack_require__(451);
// EXTERNAL MODULE: ./src/hooks/useOnClickOutside.tsx
var useOnClickOutside = __webpack_require__(525);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__(796);
;// CONCATENATED MODULE: ./src/modals/SearchModal/sorting.ts

 // compare two token amounts with highest one coming first

function balanceComparator(balanceA, balanceB) {
  if (balanceA && balanceB) {
    return balanceA.greaterThan(balanceB) ? -1 : balanceA.equalTo(balanceB) ? 0 : 1;
  } else if (balanceA && balanceA.greaterThan('0')) {
    return -1;
  } else if (balanceB && balanceB.greaterThan('0')) {
    return 1;
  }

  return 0;
}

function getTokenComparator(balances) {
  return function sortTokens(tokenA, tokenB) {
    // -1 = a is first
    // 1 = b is first
    // sort by balances
    const balanceA = balances[tokenA.address];
    const balanceB = balances[tokenB.address];
    const balanceComp = balanceComparator(balanceA, balanceB);
    if (balanceComp !== 0) return balanceComp;

    if (tokenA.symbol && tokenB.symbol) {
      // sort by symbol
      return tokenA.symbol.toLowerCase() < tokenB.symbol.toLowerCase() ? -1 : 1;
    } else {
      return tokenA.symbol ? -1 : tokenB.symbol ? -1 : 0;
    }
  };
}

function useTokenComparator(inverted) {
  const balances = (0,wallet_hooks/* useAllTokenBalances */.uD)();
  const comparator = (0,external_react_.useMemo)(() => getTokenComparator(balances !== null && balances !== void 0 ? balances : {}), [balances]);
  return (0,external_react_.useMemo)(() => {
    if (inverted) {
      return (tokenA, tokenB) => comparator(tokenA, tokenB) * -1;
    } else {
      return comparator;
    }
  }, [inverted, comparator]);
}
;// CONCATENATED MODULE: ./src/modals/SearchModal/CurrencySearch.tsx






















function CurrencySearch({
  selectedCurrency,
  onCurrencySelect,
  otherSelectedCurrency,
  showCommonBases,
  onDismiss,
  isOpen,
  showManageView,
  showImportView,
  setImportToken,
  currencyList,
  includeNativeCurrency = true,
  allowManageTokenList = true
}) {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)(); // refs for fixed size lists

  const fixedList = (0,external_react_.useRef)();
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,external_react_.useState)('');
  const debouncedQuery = (0,useDebounce/* default */.Z)(searchQuery, 200);
  const {
    0: invertSearchOrder
  } = (0,external_react_.useState)(false);
  let allTokens = (0,Tokens/* useAllTokens */.e_)();
  const router = (0,router_.useRouter)();

  if (router.asPath.startsWith('/kashi/create')) {
    allTokens = Object.keys(allTokens).reduce((obj, key) => {
      if (sushiswap_chainlink_whitelist[chainId].find(address => address === key)) obj[key] = allTokens[key];
      return obj;
    }, {});
  }

  if (currencyList) {
    allTokens = Object.keys(allTokens).reduce((obj, key) => {
      if (currencyList.includes(key)) obj[key] = allTokens[key];
      return obj;
    }, {});
  } // if they input an address, use it


  const isAddressSearch = (0,validate/* isAddress */.UJ)(debouncedQuery);
  const searchToken = (0,Tokens/* useToken */.dQ)(debouncedQuery);
  const searchTokenIsAdded = (0,Tokens/* useIsUserAddedToken */.EH)(searchToken);
  const tokenComparator = useTokenComparator(invertSearchOrder);
  const filteredTokens = (0,external_react_.useMemo)(() => {
    return (0,filtering/* filterTokens */.ls)(Object.values(allTokens), debouncedQuery);
  }, [allTokens, debouncedQuery]);
  const sortedTokens = (0,external_react_.useMemo)(() => {
    return filteredTokens.sort(tokenComparator);
  }, [filteredTokens, tokenComparator]);
  const filteredSortedTokens = (0,filtering/* useSortedTokensByQuery */.T2)(sortedTokens, debouncedQuery); // const ether = useMemo(() => chainId && ExtendedEther.onChain(chainId), [chainId])

  const ether = (0,external_react_.useMemo)(() => chainId && sdk_.NATIVE[chainId], [chainId]);
  const filteredSortedTokensWithETH = (0,external_react_.useMemo)(() => {
    const s = debouncedQuery.toLowerCase().trim();

    if (s === '' || s === 'b' || s === 'bc' || s === 'bch') {
      return ether ? [ether, ...filteredSortedTokens] : filteredSortedTokens;
    }

    return filteredSortedTokens;
  }, [debouncedQuery, ether, filteredSortedTokens]);
  const handleCurrencySelect = (0,external_react_.useCallback)(currency => {
    onCurrencySelect(currency);
    onDismiss();
  }, [onDismiss, onCurrencySelect]); // clear the input on open

  (0,external_react_.useEffect)(() => {
    if (isOpen) setSearchQuery('');
  }, [isOpen]); // manage focus on modal show

  const inputRef = (0,external_react_.useRef)();
  const handleInput = (0,external_react_.useCallback)(event => {
    var _fixedList$current;

    const input = event.target.value;
    const checksummedInput = (0,validate/* isAddress */.UJ)(input);
    setSearchQuery(checksummedInput || input);
    (_fixedList$current = fixedList.current) === null || _fixedList$current === void 0 ? void 0 : _fixedList$current.scrollTo(0);
  }, []);
  const handleEnter = (0,external_react_.useCallback)(e => {
    if (e.key === 'Enter') {
      const s = debouncedQuery.toLowerCase().trim();

      if (s === 'bch' && ether) {
        handleCurrencySelect(ether);
      } else if (filteredSortedTokensWithETH.length > 0) {
        var _filteredSortedTokens;

        if (((_filteredSortedTokens = filteredSortedTokensWithETH[0].symbol) === null || _filteredSortedTokens === void 0 ? void 0 : _filteredSortedTokens.toLowerCase()) === debouncedQuery.trim().toLowerCase() || filteredSortedTokensWithETH.length === 1) {
          handleCurrencySelect(filteredSortedTokensWithETH[0]);
        }
      }
    }
  }, [debouncedQuery, ether, filteredSortedTokensWithETH, handleCurrencySelect]); // menu ui

  const [open, toggle] = (0,useToggle/* default */.Z)(false);
  const node = (0,external_react_.useRef)();
  (0,useOnClickOutside/* useOnClickOutside */.t)(node, open ? toggle : undefined); // if no results on main list, show option to expand into inactive

  const filteredInactiveTokens = (0,Tokens/* useSearchInactiveTokenLists */.S5)(filteredTokens.length === 0 || debouncedQuery.length > 2 && !isAddressSearch ? debouncedQuery : undefined);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col max-h-[inherit]",
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
      className: "h-full",
      onClose: onDismiss,
      title: "Select a token"
    }), !currencyList && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-0 mb-3 sm:mt-3 sm:mb-8",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        id: "token-search-input",
        placeholder: i18n._(
        /*i18n*/
        i18n._("Search name or paste address")),
        autoComplete: "off",
        value: searchQuery,
        ref: inputRef,
        onChange: handleInput,
        onKeyDown: handleEnter,
        className: "w-full bg-transparent border border-dark-700 focus:border-transparent focus:border-gradient-r-blue-pink-dark-900 rounded placeholder-secondary focus:placeholder-primary font-bold text-base px-6 py-3.5"
      })
    }), showCommonBases && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-4",
      children: /*#__PURE__*/jsx_runtime_.jsx(CommonBases, {
        chainId: chainId,
        onSelect: handleCurrencySelect,
        selectedCurrency: selectedCurrency
      })
    }), searchToken && !searchTokenIsAdded ? /*#__PURE__*/jsx_runtime_.jsx(Column/* default */.ZP, {
      style: {
        padding: '20px 0',
        height: '100%'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(ImportRow, {
        token: searchToken,
        showImportView: showImportView,
        setImportToken: setImportToken
      })
    }) : (filteredSortedTokens === null || filteredSortedTokens === void 0 ? void 0 : filteredSortedTokens.length) > 0 || (filteredInactiveTokens === null || filteredInactiveTokens === void 0 ? void 0 : filteredInactiveTokens.length) > 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "h-screen",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_virtualized_auto_sizer_default()), {
        disableWidth: true,
        children: ({
          height
        }) => /*#__PURE__*/jsx_runtime_.jsx(CurrencyList, {
          height: height,
          currencies: includeNativeCurrency ? filteredSortedTokensWithETH : filteredSortedTokens,
          otherListTokens: filteredInactiveTokens,
          onCurrencySelect: handleCurrencySelect,
          otherCurrency: otherSelectedCurrency,
          selectedCurrency: selectedCurrency,
          fixedListRef: fixedList,
          showImportView: showImportView,
          setImportToken: setImportToken
        })
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx(Column/* default */.ZP, {
      style: {
        padding: '20px',
        height: '100%'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-8 text-center",
        children: i18n._(
        /*i18n*/
        i18n._("No results found"))
      })
    }), allowManageTokenList && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-3",
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
        id: "list-token-manage-button",
        onClick: showManageView,
        color: "gray",
        children: i18n._(
        /*i18n*/
        i18n._("Manage Token Lists"))
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/state/lists/actions.ts
var actions = __webpack_require__(3439);
// EXTERNAL MODULE: ./src/components/ExternalLink/index.tsx
var ExternalLink = __webpack_require__(3106);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/hooks/useFetchListCallback.ts + 1 modules
var useFetchListCallback = __webpack_require__(481);
;// CONCATENATED MODULE: ./src/modals/SearchModal/ImportList.tsx

















function ImportList({
  listURL,
  list,
  setModalView,
  onDismiss
}) {
  var _lists$listURL;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    i18n
  } = (0,react_.useLingui)(); // user must accept

  const {
    0: confirmed,
    1: setConfirmed
  } = (0,external_react_.useState)(false);
  const lists = (0,hooks/* useAllLists */.R0)();
  const fetchList = (0,useFetchListCallback/* useFetchListCallback */.j)(); // monitor is list is loading

  const adding = Boolean((_lists$listURL = lists[listURL]) === null || _lists$listURL === void 0 ? void 0 : _lists$listURL.loadingRequestId);
  const {
    0: addError,
    1: setAddError
  } = (0,external_react_.useState)(null);
  const handleAddList = (0,external_react_.useCallback)(() => {
    if (adding) return;
    setAddError(null);
    fetchList(listURL).then(() => {
      // turn list on
      dispatch((0,actions/* enableList */.ic)(listURL)); // go back to lists

      setModalView(SearchModal_CurrencyModalView.manage);
    }).catch(error => {
      setAddError(error.message);
      dispatch((0,actions/* removeList */.J_)(listURL));
    });
  }, [adding, dispatch, fetchList, listURL, setModalView]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
      onClose: onDismiss,
      title: i18n._(
      /*i18n*/
      i18n._("Import List")),
      onBack: () => setModalView(SearchModal_CurrencyModalView.manage)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "px-1 space-y-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row items-center px-4",
        children: [list.logoURI && /*#__PURE__*/jsx_runtime_.jsx(ListLogo/* default */.Z, {
          logoURI: list.logoURI,
          size: "50px"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column/* AutoColumn */.Tz, {
          gap: "sm",
          style: {
            marginLeft: '20px'
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "mr-1.5 font-semibold",
              children: list.name
            }), /*#__PURE__*/jsx_runtime_.jsx(TextDot, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ml-1.5",
              children: [list.tokens.length, " tokens"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
            className: "overflow-hidden",
            href: `https://tokenlists.org/token-list?url=${listURL}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "overflow-hidden font-sm text-blue overflow-ellipsis whitespace-nowrap",
              children: listURL
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "space-y-2",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col items-center justify-center text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.AlertTriangle, {
            className: "text-red",
            stroke: "currentColor",
            size: 32
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-lg font-medium text-red",
            children: "Import at your own risk "
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col mb-3 space-y-4 text-center whitespace-pre-line",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "font-semibold text-red",
            children: "By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one."
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "font-semibold text-red",
            children: "If you purchase a token from this list, you may not be able to sell it back."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row justify-center cursor-pointer",
          onClick: () => setConfirmed(!confirmed),
          children: [/*#__PURE__*/jsx_runtime_.jsx(Checkbox, {
            name: "confirmed",
            type: "checkbox",
            checked: confirmed,
            onChange: () => setConfirmed(!confirmed)
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-red ml-2.5 font-medium",
            children: "I understand"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          color: "gradient",
          size: "default",
          style: {
            padding: '10px 1rem'
          },
          className: "w-full",
          disabled: !confirmed,
          onClick: handleAddList,
          children: "Import"
        })]
      }), addError ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        title: addError,
        style: {
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        },
        className: "text-red",
        children: addError
      }) : null]
    })]
  });
}

/* harmony default export */ const SearchModal_ImportList = (ImportList);
// EXTERNAL MODULE: ./src/modals/SearchModal/ImportToken.tsx
var ImportToken = __webpack_require__(5805);
;// CONCATENATED MODULE: ./src/components/Toggle/ListToggle.tsx



function ListToggle({
  id,
  isActive,
  bgColor,
  toggle
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: id,
    className: `${isActive ? 'bg-dark-700 text-high-emphesis' : 'bg-dark-800 text-primary'} rounded-full flex items-center outline-none cursor-pointer border-none py-1 px-3 space-x-3`,
    onClick: toggle,
    children: [isActive && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "my-1.5 font-semibold",
      children: "ON"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `rounded-full w-5 h-5 ${!isActive && 'bg-dark-700'}`,
      style: {
        backgroundColor: isActive && bgColor
      }
    }), !isActive && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "my-1.5 font-semibold",
      children: "OFF"
    })]
  });
}
// EXTERNAL MODULE: ./src/config/token-lists.ts
var token_lists = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/functions/list.ts
var functions_list = __webpack_require__(7284);
// EXTERNAL MODULE: ./src/functions/ens.ts
var ens = __webpack_require__(1302);
// EXTERNAL MODULE: ./src/functions/convert/index.ts + 3 modules
var convert = __webpack_require__(7025);
// EXTERNAL MODULE: ./src/hooks/useColor.ts
var useColor = __webpack_require__(7648);
// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(7755);
// EXTERNAL MODULE: external "@headlessui/react"
var external_headlessui_react_ = __webpack_require__(4025);
;// CONCATENATED MODULE: ./src/modals/SearchModal/ManageLists.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function listUrlRowHTMLId(listUrl) {
  return `list-row-${listUrl.replace(/\./g, '-')}`;
}

const ListRow = /*#__PURE__*/(0,external_react_.memo)(({
  listUrl
}) => {
  const listsByUrl = (0,external_react_redux_.useSelector)(state => state.lists.byUrl);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    current: list,
    pendingUpdate: pending
  } = listsByUrl[listUrl];
  const listColor = (0,useColor/* useListColor */.d)(list === null || list === void 0 ? void 0 : list.logoURI);
  const isActive = (0,hooks/* useIsListActive */.EF)(listUrl);
  const {
    0: referenceElement,
    1: setReferenceElement
  } = (0,external_react_.useState)();
  const {
    0: popperElement,
    1: setPopperElement
  } = (0,external_react_.useState)();
  const {
    styles,
    attributes
  } = (0,external_react_popper_.usePopper)(referenceElement, popperElement, {
    placement: 'right'
  });
  const handleAcceptListUpdate = (0,external_react_.useCallback)(() => {
    if (!pending) return;
    dispatch((0,actions/* acceptListUpdate */.xJ)(listUrl));
  }, [dispatch, listUrl, pending]);
  const handleRemoveList = (0,external_react_.useCallback)(() => {
    if (window.prompt(`Please confirm you would like to remove this list by typing REMOVE`) === `REMOVE`) {
      dispatch((0,actions/* removeList */.J_)(listUrl));
    }
  }, [dispatch, listUrl]);
  const handleEnableList = (0,external_react_.useCallback)(() => {
    dispatch((0,actions/* enableList */.ic)(listUrl));
  }, [dispatch, listUrl]);
  const handleDisableList = (0,external_react_.useCallback)(() => {
    dispatch((0,actions/* disableList */.K$)(listUrl));
  }, [dispatch, listUrl]);
  if (!list) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: listUrlRowHTMLId(listUrl),
    style: isActive ? {
      backgroundColor: listColor
    } : {},
    className: (0,functions/* classNames */.AK)(isActive ? 'text-high-emphesis' : 'text-primary bg-dark-700', 'rounded flex flex-row p-4'),
    children: [list.logoURI ? /*#__PURE__*/jsx_runtime_.jsx(ListLogo/* default */.Z, {
      size: "40px",
      logoURI: list.logoURI,
      alt: `${list.name} list logo`
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: '24px',
        height: '24px'
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "justify-center flex-auto ml-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (0,functions/* classNames */.AK)(isActive && 'text-white', 'overflow-hidden overflow-ellipsis font-semibold'),
          children: list.name
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "relative flex flex-row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (0,functions/* classNames */.AK)(isActive && 'text-white', 'text-xs'),
          children: [list.tokens.length, " tokens"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_headlessui_react_.Popover, {
          className: "flex items-center justify-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Popover.Button, {
            ref: setReferenceElement,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.Settings, {
              size: 12,
              className: "ml-1 stroke-current"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_headlessui_react_.Popover.Panel, _objectSpread(_objectSpread({
            className: "z-20 flex flex-col p-4 space-y-2 bg-black border border-white rounded bg-opacity-80 backdrop-blur whitespace-nowrap",
            ref: setPopperElement,
            style: styles.popper
          }, attributes.popper), {}, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: list && (0,functions_list/* listVersionLabel */.ui)(list.version)
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
              href: `https://tokenlists.org/token-list?url=${listUrl}`,
              children: "View list"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "hover:text-high-emphesis text-primary",
              onClick: handleRemoveList,
              disabled: Object.keys(listsByUrl).length === 1,
              children: "Remove list"
            }), pending && /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "hover:text-high-emphesis text-primary",
              onClick: handleAcceptListUpdate,
              children: "Update list"
            })]
          }))]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ListToggle, {
      isActive: isActive,
      bgColor: listColor,
      toggle: () => {
        isActive ? handleDisableList() : handleEnableList();
      }
    })]
  }, listUrl);
});

function ManageLists({
  height,
  setModalView,
  setImportList,
  setListUrl
}) {
  const {
    0: listUrlInput,
    1: setListUrlInput
  } = (0,external_react_.useState)('');
  const lists = (0,hooks/* useAllLists */.R0)(); // sort by active but only if not visible

  const activeListUrls = (0,hooks/* useActiveListUrls */.v0)();
  const {
    0: activeCopy,
    1: setActiveCopy
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    if (!activeCopy && activeListUrls) {
      setActiveCopy(activeListUrls);
    }
  }, [activeCopy, activeListUrls]);
  const handleInput = (0,external_react_.useCallback)(e => {
    setListUrlInput(e.target.value);
  }, []);
  const fetchList = (0,useFetchListCallback/* useFetchListCallback */.j)();
  const validUrl = (0,external_react_.useMemo)(() => {
    return (0,convert/* uriToHttp */.ie)(listUrlInput).length > 0 || Boolean((0,ens/* parseENSAddress */.y)(listUrlInput));
  }, [listUrlInput]);
  const sortedLists = (0,external_react_.useMemo)(() => {
    const listUrls = Object.keys(lists);
    return listUrls.filter(listUrl => {
      // only show loaded lists, hide unsupported lists
      return Boolean(lists[listUrl].current) && !token_lists/* UNSUPPORTED_LIST_URLS.includes */.US.includes(listUrl);
    }).sort((u1, u2) => {
      const {
        current: l1
      } = lists[u1];
      const {
        current: l2
      } = lists[u2]; // first filter on active lists

      if (activeCopy !== null && activeCopy !== void 0 && activeCopy.includes(u1) && !(activeCopy !== null && activeCopy !== void 0 && activeCopy.includes(u2))) {
        return -1;
      }

      if (!(activeCopy !== null && activeCopy !== void 0 && activeCopy.includes(u1)) && activeCopy !== null && activeCopy !== void 0 && activeCopy.includes(u2)) {
        return 1;
      }

      if (l1 && l2) {
        return l1.name.toLowerCase() < l2.name.toLowerCase() ? -1 : l1.name.toLowerCase() === l2.name.toLowerCase() ? 0 : 1;
      }

      if (l1) return -1;
      if (l2) return 1;
      return 0;
    });
  }, [lists, activeCopy]); // temporary fetched list for import flow

  const {
    0: tempList,
    1: setTempList
  } = (0,external_react_.useState)();
  const {
    0: addError,
    1: setAddError
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    async function fetchTempList() {
      fetchList(listUrlInput, false).then(list => setTempList(list)).catch(() => setAddError('Error importing list'));
    } // if valid url, fetch details for card


    if (validUrl) {
      fetchTempList();
    } else {
      setTempList(undefined);
      listUrlInput !== '' && setAddError('Enter valid list location');
    } // reset error


    if (listUrlInput === '') {
      setAddError(undefined);
    }
  }, [fetchList, listUrlInput, validUrl]); // check if list is already imported

  const isImported = Object.keys(lists).includes(listUrlInput); // set list values and have parent modal switch to import list view

  const handleImport = (0,external_react_.useCallback)(() => {
    if (!tempList) return;
    setImportList(tempList);
    setModalView(SearchModal_CurrencyModalView.importList);
    setListUrl(listUrlInput);
  }, [listUrlInput, setImportList, setListUrl, setModalView, tempList]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      height: `${height}px`
    },
    className: "flex flex-col space-y-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      id: "list-add-input",
      type: "text",
      placeholder: "https:// or ipfs:// or ENS name",
      className: "mt-4 w-full bg-dark-900 border border-dark-800 focus:border-transparent focus:border-gradient-r-blue-pink-dark-900 rounded placeholder-secondary focus:placeholder-primary font-bold text-base px-6 py-3.5 appearance-none",
      value: listUrlInput,
      onChange: handleInput,
      title: "List URI",
      autoComplete: "off",
      autoCorrect: "off"
    }), addError ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      title: addError,
      className: "overflow-hidden text-red text-ellipsis",
      children: addError
    }) : null, tempList && /*#__PURE__*/jsx_runtime_.jsx(PaddedColumn, {
      style: {
        paddingTop: 0
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowBetween */.m0, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
          children: [tempList.logoURI && /*#__PURE__*/jsx_runtime_.jsx(ListLogo/* default */.Z, {
            logoURI: tempList.logoURI,
            size: "40px"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column/* AutoColumn */.Tz, {
            gap: "4px",
            style: {
              marginLeft: '20px'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "font-semibold",
              children: tempList.name
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-xs",
              children: [tempList.tokens.length, " tokens"]
            })]
          })]
        }), isImported ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.CheckCircle, {
            className: "w-4 h-4 mr-2.5"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Loaded"
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          color: "gradient",
          style: {
            width: 'fit-content',
            padding: '6px 8px',
            fontSize: '14px'
          },
          onClick: handleImport,
          children: "Import"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col h-full p-2 space-y-4 overflow-y-auto",
      children: sortedLists.map(listUrl => /*#__PURE__*/jsx_runtime_.jsx(ListRow, {
        listUrl: listUrl
      }, listUrl))
    })]
  });
}

/* harmony default export */ const SearchModal_ManageLists = (ManageLists);
// EXTERNAL MODULE: ./src/state/user/hooks.tsx
var user_hooks = __webpack_require__(181);
;// CONCATENATED MODULE: ./src/components/ExternalLinkIcon/index.tsx
const _excluded = ["target", "href", "rel"];

function ExternalLinkIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ExternalLinkIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ExternalLinkIcon_ownKeys(Object(source), true).forEach(function (key) { ExternalLinkIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ExternalLinkIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ExternalLinkIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ExternalLinkIcon(_ref) {
  let {
    target = '_blank',
    href,
    rel = 'noopener noreferrer'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const handleClick = (0,external_react_.useCallback)(event => {
    // don't prevent default, don't redirect if it's a new tab
    if (target === '_blank' || event.ctrlKey || event.metaKey) {} else {
      window.location.href = href;
    }
  }, [href, target]);
  return /*#__PURE__*/jsx_runtime_.jsx("a", ExternalLinkIcon_objectSpread(ExternalLinkIcon_objectSpread({
    className: "flex items-center justify-center hover:opacity-70",
    target: target,
    rel: rel,
    href: href,
    onClick: handleClick
  }, rest), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ExternalLink, {
      className: "h-4 w-[18px] ml-2.5"
    })
  }));
}
// EXTERNAL MODULE: ./src/functions/explorer.ts
var explorer = __webpack_require__(3302);
;// CONCATENATED MODULE: ./src/modals/SearchModal/ManageTokens.tsx
















function ManageTokens({
  setModalView,
  setImportToken
}) {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,external_react_.useState)(''); // manage focus on modal show

  const inputRef = (0,external_react_.useRef)();
  const handleInput = (0,external_react_.useCallback)(event => {
    const input = event.target.value;
    const checksummedInput = (0,validate/* isAddress */.UJ)(input);
    setSearchQuery(checksummedInput || input);
  }, []); // if they input an address, use it

  const isAddressSearch = (0,validate/* isAddress */.UJ)(searchQuery);
  const searchToken = (0,Tokens/* useToken */.dQ)(searchQuery); // all tokens for local lisr

  const userAddedTokens = (0,user_hooks/* useUserAddedTokens */.em)();
  const removeToken = (0,user_hooks/* useRemoveUserAddedToken */.QG)();
  const handleRemoveAll = (0,external_react_.useCallback)(() => {
    if (chainId && userAddedTokens) {
      userAddedTokens.map(token => {
        return removeToken(chainId, token.address);
      });
    }
  }, [removeToken, userAddedTokens, chainId]);
  const tokenList = (0,external_react_.useMemo)(() => {
    return chainId && userAddedTokens.map(token => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowBetween */.m0, {
      width: "100%",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
        align: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(CurrencyLogo/* default */.Z, {
          currency: token,
          size: '20px'
        }), /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
          href: (0,explorer/* getExplorerLink */.E)(chainId, token.address, 'address'),
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ml-2.5 font-semibold",
            children: token.symbol
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row/* RowFixed */.DA, {
        align: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex items-center justify-center w-4 h-4 cursor-pointer hover:opacity-70",
          onClick: () => removeToken(chainId, token.address),
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.Trash, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(ExternalLinkIcon, {
          href: (0,explorer/* getExplorerLink */.E)(chainId, token.address, 'address')
        })]
      })]
    }, token.address));
  }, [userAddedTokens, chainId, removeToken]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative flex-1 w-full h-full mt-4 space-y-4 overflow-y-hidden",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-3",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        id: "token-search-input",
        type: "text",
        placeholder: '0x0000',
        className: "w-full bg-dark-900 border border-dark-800 focus:border-transparent focus:border-gradient-r-blue-pink-dark-900 rounded placeholder-secondary focus:placeholder-primary font-bold text-base px-6 py-3.5 appearance-none",
        value: searchQuery,
        autoComplete: "off",
        onChange: handleInput,
        ref: inputRef,
        autoCorrect: "off"
      }), searchQuery !== '' && !isAddressSearch && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-red",
        children: "Enter valid token address"
      }), searchToken && /*#__PURE__*/jsx_runtime_.jsx(ImportRow, {
        token: searchToken,
        showImportView: () => setModalView(SearchModal_CurrencyModalView.importToken),
        setImportToken: setImportToken,
        style: {
          height: 'fit-content'
        }
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-semibold",
          children: [userAddedTokens === null || userAddedTokens === void 0 ? void 0 : userAddedTokens.length, " Custom ", userAddedTokens.length === 1 ? 'Token' : 'Tokens']
        }), userAddedTokens.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: handleRemoveAll,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hover:opacity-70",
            children: "Clear all"
          })
        })]
      }), tokenList]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute bottom-0 p-3 text-sm",
      children: "Tip: Custom tokens are stored locally in your browser"
    })]
  });
}

/* harmony default export */ const SearchModal_ManageTokens = (ManageTokens);
;// CONCATENATED MODULE: ./src/modals/SearchModal/Manage.tsx











function Manage({
  onDismiss,
  setModalView,
  setImportList,
  setImportToken,
  setListUrl
}) {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    0: tabIndex,
    1: setTabIndex
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col max-h-[inherit]",
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
      onClose: onDismiss,
      title: i18n._(
      /*i18n*/
      i18n._("Manage")),
      onBack: () => setModalView(SearchModal_CurrencyModalView.search)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex p-1 rounded bg-dark-800",
      children: [i18n._(
      /*i18n*/
      i18n._("Lists")), i18n._(
      /*i18n*/
      i18n._("Tokens"))].map((title, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (0,functions/* classNames */.AK)(tabIndex === i && 'bg-dark-900 text-high-emphesis', 'flex items-center justify-center flex-1 px-1 py-2 text-lg rounded cursor-pointer select-none text-secondary hover:text-primary focus:outline-none'),
        onClick: () => setTabIndex(i),
        children: title
      }))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "h-screen",
      children: [tabIndex === 0 && /*#__PURE__*/jsx_runtime_.jsx((external_react_virtualized_auto_sizer_default()), {
        disableWidth: true,
        children: ({
          height
        }) => /*#__PURE__*/jsx_runtime_.jsx(SearchModal_ManageLists, {
          height: height,
          setModalView: setModalView,
          setImportList: setImportList,
          setListUrl: setListUrl
        })
      }), tabIndex === 1 && /*#__PURE__*/jsx_runtime_.jsx(SearchModal_ManageTokens, {
        setModalView: setModalView,
        setImportToken: setImportToken
      })]
    })]
  });
}

/* harmony default export */ const SearchModal_Manage = (Manage);
// EXTERNAL MODULE: ./src/components/Modal/index.tsx
var Modal = __webpack_require__(1441);
;// CONCATENATED MODULE: ./src/hooks/useLast.ts

/**
 * Returns the last value of type T that passes a filter function
 * @param value changing value
 * @param filterFn function that determines whether a given value should be considered for the last value
 */

function useLast(value, filterFn) {
  const {
    0: last,
    1: setLast
  } = (0,external_react_.useState)(filterFn && filterFn(value) ? value : undefined);
  (0,external_react_.useEffect)(() => {
    setLast(last => {
      const shouldUse = filterFn ? filterFn(value) : true;
      if (shouldUse) return value;
      return last;
    });
  }, [filterFn, value]);
  return last;
}

function isDefined(x) {
  return x !== null && x !== undefined;
}
/**
 * Returns the last truthy value of type T
 * @param value changing value
 */


function useLastTruthy(value) {
  return useLast(value, isDefined);
}
// EXTERNAL MODULE: ./src/hooks/usePrevious.ts
var usePrevious = __webpack_require__(4751);
;// CONCATENATED MODULE: ./src/modals/SearchModal/CurrencySearchModal.tsx












function CurrencySearchModal({
  isOpen,
  onDismiss,
  onCurrencySelect,
  selectedCurrency,
  otherSelectedCurrency,
  currencyList,
  showCommonBases = false,
  includeNativeCurrency = true,
  allowManageTokenList = true
}) {
  const {
    0: modalView,
    1: setModalView
  } = (0,external_react_.useState)(SearchModal_CurrencyModalView.manage);
  const lastOpen = useLast(isOpen);
  (0,external_react_.useEffect)(() => {
    if (isOpen && !lastOpen) {
      setModalView(SearchModal_CurrencyModalView.search);
    }
  }, [isOpen, lastOpen]);
  const handleCurrencySelect = (0,external_react_.useCallback)(currency => {
    onCurrencySelect(currency);
    onDismiss();
  }, [onDismiss, onCurrencySelect]); // for token import view

  const prevView = (0,usePrevious/* default */.Z)(modalView); // used for import token flow

  const {
    0: importToken,
    1: setImportToken
  } = (0,external_react_.useState)(); // used for import list

  const {
    0: importList,
    1: setImportList
  } = (0,external_react_.useState)();
  const {
    0: listURL,
    1: setListUrl
  } = (0,external_react_.useState)(); // change min height if not searching

  const minHeight = modalView === SearchModal_CurrencyModalView.importToken || modalView === SearchModal_CurrencyModalView.importList ? 40 : 75;
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
    isOpen: isOpen,
    onDismiss: onDismiss,
    maxHeight: 75,
    minHeight: minHeight,
    padding: 1,
    children: modalView === SearchModal_CurrencyModalView.search ? /*#__PURE__*/jsx_runtime_.jsx(CurrencySearch, {
      isOpen: isOpen,
      onDismiss: onDismiss,
      onCurrencySelect: handleCurrencySelect,
      selectedCurrency: selectedCurrency,
      otherSelectedCurrency: otherSelectedCurrency,
      showCommonBases: showCommonBases,
      showImportView: () => setModalView(SearchModal_CurrencyModalView.importToken),
      setImportToken: setImportToken,
      showManageView: () => setModalView(SearchModal_CurrencyModalView.manage),
      currencyList: currencyList,
      includeNativeCurrency: includeNativeCurrency,
      allowManageTokenList: allowManageTokenList
    }) : modalView === SearchModal_CurrencyModalView.importToken && importToken ? /*#__PURE__*/jsx_runtime_.jsx(ImportToken/* ImportToken */.W, {
      tokens: [importToken],
      onDismiss: onDismiss,
      list: importToken instanceof wrappedTokenInfo/* WrappedTokenInfo */.D ? importToken.list : undefined,
      onBack: () => setModalView(prevView && prevView !== SearchModal_CurrencyModalView.importToken ? prevView : SearchModal_CurrencyModalView.search),
      handleCurrencySelect: handleCurrencySelect
    }) : modalView === SearchModal_CurrencyModalView.importList && importList && listURL ? /*#__PURE__*/jsx_runtime_.jsx(SearchModal_ImportList, {
      list: importList,
      listURL: listURL,
      onDismiss: onDismiss,
      setModalView: setModalView
    }) : modalView === SearchModal_CurrencyModalView.manage ? /*#__PURE__*/jsx_runtime_.jsx(SearchModal_Manage, {
      onDismiss: onDismiss,
      setModalView: setModalView,
      setImportToken: setImportToken,
      setImportList: setImportList,
      setListUrl: setListUrl
    }) : ''
  });
}

CurrencySearchModal.whyDidYouRender = true;
/* harmony default export */ const SearchModal_CurrencySearchModal = (CurrencySearchModal);

/***/ }),

/***/ 5805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ ImportToken)
/* harmony export */ });
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7745);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9337);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1898);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7603);
/* harmony import */ var _components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1208);
/* harmony import */ var _components_ExternalLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3106);
/* harmony import */ var _components_ListLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8003);
/* harmony import */ var _components_ModalHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7144);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3130);
/* harmony import */ var _functions_explorer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3302);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7735);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8269);
/* harmony import */ var _state_user_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(181);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2339);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);

















function ImportToken({
  tokens,
  list,
  onBack,
  onDismiss,
  handleCurrencySelect
}) {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_12__/* .useActiveWeb3React */ .a)();
  const {
    i18n
  } = (0,_lingui_react__WEBPACK_IMPORTED_MODULE_14__.useLingui)();
  const addToken = (0,_state_user_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useAddUserToken */ ._E)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "relative w-full space-y-3 overflow-auto",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_ModalHeader__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      onBack: onBack,
      onClose: onDismiss,
      title: `Import ${
      /*i18n*/
      i18n._("{0, plural, one {Token} many {Tokens}}", {
        0: tokens.length
      })}`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      className: "text-center",
      children: i18n._(
      /*i18n*/
      i18n._("This token doesn't appear on the active token list(s). Make sure this is the token that you want to trade."))
    }), tokens.map(token => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: ".token-warning-container rounded p-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Column__WEBPACK_IMPORTED_MODULE_2__/* .AutoColumn */ .Tz, {
          gap: "10px",
          justify: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            currency: token,
            size: '32px'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Column__WEBPACK_IMPORTED_MODULE_2__/* .AutoColumn */ .Tz, {
            gap: "4px",
            justify: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
              className: "mx-2 text-xl font-medium text-high-emphesis",
              children: token.symbol
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
              className: "text-sm font-light text-secondary",
              children: token.name
            })]
          }), chainId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_ExternalLink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            href: (0,_functions_explorer__WEBPACK_IMPORTED_MODULE_10__/* .getExplorerLink */ .E)(chainId, token.address, 'address'),
            children: (0,_functions__WEBPACK_IMPORTED_MODULE_11__/* .shortenAddress */ .Xn)(token.address)
          }), list !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Row__WEBPACK_IMPORTED_MODULE_0__/* .RowFixed */ .DA, {
            align: "center",
            children: [list.logoURI && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_ListLogo__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
              logoURI: list.logoURI,
              size: "16px"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "ml-2 text-sm text-secondary",
              children: ["via ", list.name]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Row__WEBPACK_IMPORTED_MODULE_0__/* .RowFixed */ .DA, {
              align: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.AlertTriangle, {
                className: "stroke-current text-red",
                size: 24
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                className: "ml-1 text-xs font-semibold text-red",
                children: "Unknown Source"
              })]
            })
          })]
        })
      }, 'import' + token.address);
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
      color: "gradient",
      onClick: () => {
        tokens.map(token => addToken(token));
        handleCurrencySelect && handleCurrencySelect(tokens[0]);
      },
      className: ".token-dismiss-button",
      children: i18n._(
      /*i18n*/
      i18n._("Import"))
    })]
  });
}

/***/ }),

/***/ 3439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 134:
/***/ ((module) => {

module.exports = JSON.parse('{"v":"5.7.4","fr":25,"ip":0,"op":37,"w":500,"h":500,"nm":"297-coin-ETH-outline","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Warstwa 15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[248.925,248.925,0],"ix":2,"l":2},"a":{"a":0,"k":[4,3.5,0],"ix":1,"l":2},"s":{"a":0,"k":[1760.993,1760.993,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[-4.214,0],[0,-4.214],[4.214,0],[0,4.214]],"o":[[4.214,0],[0,4.214],[-4.214,0],[0,-4.214]],"v":[[4,-4.13],[11.63,3.5],[4,11.13],[-3.63,3.5]],"c":true}]},{"t":74.715,"s":[{"i":[[0,0],[0,-4.244],[0,0],[0,4.244]],"o":[[0,0],[0,4.244],[0,0],[0,-4.244]],"v":[[4.001,-4.197],[4.001,3.487],[4.001,11.171],[4,3.487]],"c":true}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,-4.244],[0,0],[0,4.244]],"o":[[0,0],[0,4.244],[0,0],[0,-4.244]],"v":[[1.841,-4.182],[1.77,3.492],[1.769,11.176],[1.769,3.492]],"c":true}]},{"t":99.0409415072456,"s":[{"i":[[-4.214,0],[0,-4.214],[4.214,0],[0,4.214]],"o":[[4.214,0],[0,4.214],[-4.214,0],[0,-4.214]],"v":[[4,-4.13],[11.63,3.5],[4,11.13],[-3.63,3.5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Oval","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":49.5204336947456,"op":99.4752571587434,"st":49.5204336947456,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Warstwa 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[248.925,248.925,0],"ix":2,"l":2},"a":{"a":0,"k":[4,3.5,0],"ix":1,"l":2},"s":{"a":0,"k":[1760.993,1760.993,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[-5.799,0],[0,-5.799],[5.799,0],[0,5.799]],"o":[[5.799,0],[0,5.799],[-5.799,0],[0,-5.799]],"v":[[4,-7],[14.5,3.5],[4,14],[-6.5,3.5]],"c":true}]},{"t":74.715,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[4,-7],[4,3.5],[4,14],[4,3.5]],"c":true}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[1.841,-7.017],[1.841,3.483],[1.841,13.983],[1.841,3.483]],"c":true}]},{"t":99.0409415072456,"s":[{"i":[[-5.784,0],[0,-5.799],[5.784,0],[0,5.799]],"o":[[5.784,0],[0,5.799],[-5.784,0],[0,-5.799]],"v":[[3.964,-7],[14.437,3.5],[3.964,14],[-6.509,3.5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Oval","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":49.5204336947456,"op":99.4752571587434,"st":49.5204336947456,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Warstwa 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[248.925,248.925,0],"ix":2,"l":2},"a":{"a":0,"k":[4,3.5,0],"ix":1,"l":2},"s":{"a":0,"k":[1760.993,1760.993,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[3.966,-6.973]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[1.842,-6.991]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[1.842,-6.991]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[4.002,-6.991]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[4,13.973]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[1.877,13.973]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[1.877,13.973]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[4.036,13.973]],"c":false}]}],"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-3.342,10.986],[-3.414,10.986]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,10.986],[1.841,10.986]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,10.986],[1.841,10.986]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[11.234,10.986],[11.27,10.986]],"c":false}]}],"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-5.573,7.783],[-5.573,7.783]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,7.783],[1.841,7.783]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,7.783],[1.841,7.783]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[13.465,7.783],[13.501,7.783]],"c":false}]}],"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.401,4.94],[-6.437,4.94]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,4.94],[1.841,4.94]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,4.94],[1.841,4.94]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[14.293,4.94],[14.329,4.94]],"c":false}]}],"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.455,2.06],[-6.383,2.06]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,2.06],[1.841,2.06]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,2.06],[1.841,2.06]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[14.293,2.06],[14.329,2.06]],"c":false}]}],"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-5.591,-0.783],[-5.627,-0.783]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-0.783],[1.841,-0.783]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-0.783],[1.841,-0.783]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[13.465,-0.783],[13.501,-0.783]],"c":false}]}],"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-3.18,-4.13],[-3.18,-4.13]],"c":false}]},{"t":74.715,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-4.13],[1.841,-4.13]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-4.13],[1.841,-4.13]],"c":false}]},{"t":99.0409415072456,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[11.054,-4.13],[11.09,-4.13]],"c":false}]}],"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":10,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49.52,"s":[{"i":[[-5.799,0],[0,-5.799],[5.799,0],[0,5.799]],"o":[[5.799,0],[0,5.799],[-5.799,0],[0,-5.799]],"v":[[4,-7],[14.5,3.5],[4,14],[-6.5,3.5]],"c":true}]},{"t":74.715,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[1.841,-7],[1.841,3.5],[1.841,14],[1.841,3.5]],"c":true}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75.149,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[4,-7],[4,3.5],[4,14],[4,3.5]],"c":true}]},{"t":99.0409415072456,"s":[{"i":[[5.794,0],[0,-5.799],[-5.794,0],[0,5.799]],"o":[[-5.794,0],[0,5.799],[5.794,0],[0,-5.799]],"v":[[3.946,-7],[-6.545,3.5],[3.946,14],[14.437,3.5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":50,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Oval","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":49.5204336947456,"op":99.4752571587434,"st":49.5204336947456,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Warstwa 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[248.925,248.925,0],"ix":2,"l":2},"a":{"a":0,"k":[4,3.5,0],"ix":1,"l":2},"s":{"a":0,"k":[1760.993,1760.993,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[-5.799,0],[0,-5.799],[5.799,0],[0,5.799]],"o":[[5.799,0],[0,5.799],[-5.799,0],[0,-5.799]],"v":[[4,-7],[14.5,3.5],[4,14],[-6.5,3.5]],"c":true}]},{"t":25.194,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[4,-7],[4,3.5],[4,14],[4,3.5]],"c":true}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[1.841,-7.017],[1.841,3.483],[1.841,13.983],[1.841,3.483]],"c":true}]},{"t":49.5205078125,"s":[{"i":[[-5.784,0],[0,-5.799],[5.784,0],[0,5.799]],"o":[[5.784,0],[0,5.799],[-5.784,0],[0,-5.799]],"v":[[3.964,-7],[14.437,3.5],[3.964,14],[-6.509,3.5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Oval","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":49.9548234639978,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Warstwa 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[248.925,248.925,0],"ix":2,"l":2},"a":{"a":0,"k":[4,3.5,0],"ix":1,"l":2},"s":{"a":0,"k":[1760.993,1760.993,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[3.966,-6.973]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[1.842,-6.991]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[1.842,-6.991]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.016,-6.991],[4.002,-6.991]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[4,13.973]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[1.877,13.973]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[1.877,13.973]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.014,13.973],[4.036,13.973]],"c":false}]}],"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-3.342,10.986],[-3.414,10.986]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,10.986],[1.841,10.986]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,10.986],[1.841,10.986]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[11.234,10.986],[11.27,10.986]],"c":false}]}],"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-5.573,7.783],[-5.573,7.783]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,7.783],[1.841,7.783]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,7.783],[1.841,7.783]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[13.465,7.783],[13.501,7.783]],"c":false}]}],"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.401,4.94],[-6.437,4.94]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,4.94],[1.841,4.94]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,4.94],[1.841,4.94]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[14.293,4.94],[14.329,4.94]],"c":false}]}],"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.455,2.06],[-6.383,2.06]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,2.06],[1.841,2.06]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,2.06],[1.841,2.06]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[14.293,2.06],[14.329,2.06]],"c":false}]}],"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-5.591,-0.783],[-5.627,-0.783]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-0.783],[1.841,-0.783]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-0.783],[1.841,-0.783]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[13.465,-0.783],[13.501,-0.783]],"c":false}]}],"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-3.18,-4.13],[-3.18,-4.13]],"c":false}]},{"t":25.194,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-4.13],[1.841,-4.13]],"c":false}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[3.964,-4.13],[1.841,-4.13]],"c":false}]},{"t":49.5205078125,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[11.054,-4.13],[11.09,-4.13]],"c":false}]}],"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":10,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[-5.799,0],[0,-5.799],[5.799,0],[0,5.799]],"o":[[5.799,0],[0,5.799],[-5.799,0],[0,-5.799]],"v":[[4,-7],[14.5,3.5],[4,14],[-6.5,3.5]],"c":true}]},{"t":25.194,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[1.841,-7],[1.841,3.5],[1.841,14],[1.841,3.5]],"c":true}],"h":1},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,-5.799],[0,0],[0,5.799]],"o":[[0,0],[0,5.799],[0,0],[0,-5.799]],"v":[[4,-7],[4,3.5],[4,14],[4,3.5]],"c":true}]},{"t":49.5205078125,"s":[{"i":[[5.794,0],[0,-5.799],[-5.794,0],[0,5.799]],"o":[[-5.794,0],[0,5.799],[5.794,0],[0,-5.799]],"v":[[3.946,-7],[-6.545,3.5],[3.946,14],[14.437,3.5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":50,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Oval","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":49.9548234639978,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Warstwa 13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[248.925,248.925,0],"ix":2,"l":2},"a":{"a":0,"k":[4,3.5,0],"ix":1,"l":2},"s":{"a":0,"k":[1760.993,1760.993,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[-4.214,0],[0,-4.214],[4.214,0],[0,4.214]],"o":[[4.214,0],[0,4.214],[-4.214,0],[0,-4.214]],"v":[[4,-4.13],[11.63,3.5],[4,11.13],[-3.63,3.5]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25.629,"s":[{"i":[[0,0],[0,-4.244],[0,0],[0,4.244]],"o":[[0,0],[0,4.244],[0,0],[0,-4.244]],"v":[[1.841,-4.202],[1.841,3.483],[1.841,11.168],[1.841,3.483]],"c":true}]},{"t":49.5205078125,"s":[{"i":[[-4.214,0],[0,-4.214],[4.214,0],[0,4.214]],"o":[[4.214,0],[0,4.214],[-4.214,0],[0,-4.214]],"v":[[4,-4.13],[11.63,3.5],[4,11.13],[-3.63,3.5]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.039215686275,0.658823529412,0.545098039216,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(1 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Oval","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":49.9548234639978,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"ETH","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[242,250,0],"to":[1.333,0,0],"ti":[-1.335,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":99,"s":[250,250,0],"to":[0.007,0.016,0],"ti":[-0.001,0,0]},{"t":125,"s":[250.008,250,0]}],"ix":2,"l":2},"a":{"a":0,"k":[250,250,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[0,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":99,"s":[100,100,100]},{"t":125,"s":[0,100,100]}],"ix":6,"l":2}},"ao":0,"w":500,"h":500,"ip":75,"op":126,"st":75,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"ETH","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[242,250,0],"to":[1.333,0,0],"ti":[-1.335,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49,"s":[250,250,0],"to":[0.007,0.016,0],"ti":[-0.001,0,0]},{"t":75,"s":[250.008,250,0]}],"ix":2,"l":2},"a":{"a":0,"k":[250,250,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":25,"s":[0,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":49,"s":[100,100,100]},{"t":75,"s":[0,100,100]}],"ix":6,"l":2}},"ao":0,"w":500,"h":500,"ip":25,"op":76,"st":25,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"ETH","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[250,250,0],"to":[-1.333,0,0],"ti":[1.333,0,0]},{"t":25,"s":[242,250,0]}],"ix":2,"l":2},"a":{"a":0,"k":[250,250,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"t":25,"s":[0,100,100]}],"ix":6,"l":2}},"ao":0,"w":500,"h":500,"ip":0,"op":25,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":3,"nm":"NULL","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"l":2},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":0,"k":[340,340,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":99,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[59.833,59.667,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[70,70,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-19.333,0],[0.167,6.833],[18.5,0]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0,-36.833],[-19.5,0],[0.167,36.667],[18.667,-0.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.03137254902,0.658823529412,0.541176470588,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(8 / 100, comp(\'297-coin-ETH-outline\').layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"02092020","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-105,15,0],"ix":2,"l":2},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"02092020002","np":3,"mn":"ADBE Checkbox Control","ix":1,"en":1,"ef":[{"ty":7,"nm":"Checkbox","mn":"ADBE Checkbox Control-0001","ix":1,"v":{"a":0,"k":0,"ix":1}}]}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"lordicon.com Outlines","cl":"com","sr":1,"ks":{"o":{"a":0,"k":20,"ix":11,"x":"var $bm_rt;\\nvar checkbox = thisComp.layer(\'02092020\').effect(\'02092020002\')(\'Checkbox\');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[249.934,481.369,0],"ix":2,"l":2},"a":{"a":0,"k":[79.934,0.369,0],"ix":1,"l":2},"s":{"a":0,"k":[265.159,265.159,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],"c":true},"ix":2},"nm":"l","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],"o":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],"v":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],"o":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],"v":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"r","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],"o":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],"v":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],"o":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],"v":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"d","np":5,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],"c":true},"ix":2},"nm":"i","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"i","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],"c":true},"ix":2},"nm":"n","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"n","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],"c":true},"ix":2},"nm":".","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":".","np":3,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],"c":true},"ix":2},"nm":"m","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"m","np":3,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false}],"ip":1.04166666666667,"op":10.4166666666667,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.494,0.494,0.494],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.745,0.745,0.745],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":112,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"NULL","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');","l":2},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];","l":2}},"ao":0,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"Coin-ot","parent":4,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[250,250,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.13],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":36,"s":[3.939]}],"ix":2},"w":500,"h":500,"ip":0,"op":125,"st":0,"bm":0}],"markers":[]}');

/***/ })

};
;
//# sourceMappingURL=7134.js.map