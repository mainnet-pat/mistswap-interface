"use strict";
exports.id = 3746;
exports.ids = [3746];
exports.modules = {

/***/ 8561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Dots)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Dots({
  children = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {}),
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "106137454",
      children: [".dots.jsx-106137454::after{content:'.';}"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      className: "jsx-106137454" + " " + ((0,_functions__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('after:inline-block dots after:animate-ellipsis after:w-4 after:text-left', className) || ""),
      children: children
    })]
  });
}

/***/ }),

/***/ 5253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8532);
// EXTERNAL MODULE: ./src/components/ExternalLink/index.tsx
var ExternalLink = __webpack_require__(3106);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/functions/explorer.ts
var explorer = __webpack_require__(3302);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: ./src/state/application/hooks.ts
var hooks = __webpack_require__(4663);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Polling/index.tsx







function Polling() {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const blockNumber = (0,hooks/* useBlockNumber */.Ov)();
  const {
    0: isMounted,
    1: setIsMounted
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    const timer1 = setTimeout(() => setIsMounted(true), 1000); // this will clear Timeout when component unmount like in willComponentUnmount

    return () => {
      setIsMounted(false);
      clearTimeout(timer1);
    };
  }, [blockNumber] // useEffect will run only one time
  // if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );
  return /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
    href: chainId && blockNumber ? (0,explorer/* getExplorerLink */.E)(chainId, blockNumber.toString(), 'block') : '',
    className: `${!isMounted ? 'text-high-emphesis' : 'text-low-emphesis'}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `flex items-center space-x-2`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: blockNumber
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: `h-6 w-6 ${!isMounted ? 'animate-spin' : ''}`,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "@lingui/react"
var react_ = __webpack_require__(2339);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx








const Footer = () => {
  const {
    chainId
  } = (0,useActiveWeb3React/* default */.Z)();
  const {
    i18n
  } = (0,react_.useLingui)();
  return (
    /*#__PURE__*/
    // <footer className="absolute bottom-0 flex items-center justify-between w-screen h-20 p-4 mx-auto text-center text-low-emphesis">
    jsx_runtime_.jsx("footer", {
      className: "flex-shrink-0 w-full",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between h-20 px-4",
        children: [chainId && chainId in constants/* ANALYTICS_URL */.fi && /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
          id: `analytics-nav-link`,
          href: constants/* ANALYTICS_URL */.fi[chainId] || 'https://analytics.mistswap.fi',
          className: "text-low-emphesis",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: i18n._(
              /*i18n*/
              i18n._("Analytics"))
            }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Polling, {})]
      })
    })
  );
};

/* harmony default export */ const components_Footer = (Footer);

/***/ }),

/***/ 1451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: ./src/functions/feature.ts
var feature = __webpack_require__(1986);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8532);
// EXTERNAL MODULE: ./src/components/ExternalLink/index.tsx
var ExternalLink = __webpack_require__(3106);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(3802);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/functions/index.ts
var functions = __webpack_require__(7735);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "cookie-cutter"
var external_cookie_cutter_ = __webpack_require__(8760);
var external_cookie_cutter_default = /*#__PURE__*/__webpack_require__.n(external_cookie_cutter_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/LanguageSwitch/index.tsx











const LANG_TO_COUNTRY = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  ro: 'Română',
  ru: 'Русский',
  vi: 'Tiếng Việt',
  zh_CN: '简体中文',
  zh_TW: '繁體中文',
  ko: '한국어',
  ja: '日本語',
  fa: 'فارسی',
  pt_BR: 'Português',
  hi: 'हिन्दी',
  es: 'Español'
};
function LangSwitcher() {
  const {
    locale,
    locales,
    asPath
  } = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Menu, {
    as: "div",
    className: "relative inline-block text-right",
    children: ({
      open
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu.Button, {
          className: "inline-flex justify-center w-full px-4 py-2 text-sm font-bold bg-transparent border rounded shadow-sm text-primary border-dark-800 hover:bg-dark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-700 focus:ring-dark-800",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            className: "inline w-3 h-3 mr-1 align-middle",
            src: `/images/flags/${locale}-flag.png`,
            width: 20,
            height: 20,
            alt: locale,
            "aria-hidden": "true"
          }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronDownIcon */.v4q, {
            className: "w-5 h-5 ml-2 -mr-1",
            "aria-hidden": "true"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
        show: open,
        as: external_react_.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Menu.Items, {
          className: "absolute right-0 w-[max-content] mt-2 origin-top-right divide-y divide-dark-600 rounded shadow-lg bg-dark-800 ring-1 ring-black ring-opacity-5 focus:outline-none",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "p-2",
            children: locales.map(locale => {
              return /*#__PURE__*/jsx_runtime_.jsx(react_.Menu.Item, {
                children: ({
                  active
                }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: asPath,
                  locale: locale,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    className: (0,functions/* classNames */.AK)(active ? 'bg-dark-700 text-high-emphesis' : 'text-primary', 'group flex items-center p-2 text-sm hover:bg-dark-700 focus:bg-dark-700 rounded font-bold'),
                    onClick: () => external_cookie_cutter_default().set('NEXT_LOCALE', locale),
                    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      className: "inline w-3 h-3 mr-1 align-middle",
                      src: `/images/flags/${locale}-flag.png`,
                      width: 20,
                      height: 20,
                      alt: locale,
                      "aria-hidden": "true"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "ml-2",
                      children: LANG_TO_COUNTRY[locale]
                    })]
                  })
                })
              }, locale);
            })
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/functions/styling.ts
var styling = __webpack_require__(1769);
// EXTERNAL MODULE: external "@lingui/react"
var external_lingui_react_ = __webpack_require__(2339);
// EXTERNAL MODULE: ./src/components/NavLink/index.tsx
var NavLink = __webpack_require__(3233);
;// CONCATENATED MODULE: ./src/components/Header/More.tsx










const items = i18n => [{
  name: i18n._(
  /*i18n*/
  i18n._("Docs")),
  description: i18n._(
  /*i18n*/
  i18n._("Documentation for users of MIST.")),
  href: 'https://docs.mistswap.fi',
  external: true
}, {
  name: i18n._(
  /*i18n*/
  i18n._("Open Source")),
  description: i18n._(
  /*i18n*/
  i18n._("MIST is a supporter of Open Source.")),
  href: 'https://github.com/mistswapdex',
  external: true
}, {
  name: i18n._(
  /*i18n*/
  i18n._("Discord")),
  description: i18n._(
  /*i18n*/
  i18n._("Join the community on Discord.")),
  href: 'https://discord.gg/xFTnQEzu9T',
  external: true
}, {
  name: i18n._(
  /*i18n*/
  i18n._("Telegram")),
  description: i18n._(
  /*i18n*/
  i18n._("Join the community on Telegram.")),
  href: 'https://t.me/MistSwapOfficial',
  external: true
}];

function Menu() {
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const solutions = items(i18n);
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Popover, {
    className: "relative ml-auto md:m-0",
    children: ({
      open
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Popover.Button, {
        className: (0,styling/* classNames */.A)(open ? 'text-primary' : 'text-secondary', 'focus:outline-none hover:text-high-emphesis'),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          width: "16px",
          height: "16px",
          className: "inline-flex items-center w-5 h-5 ml-2",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
        show: open,
        as: external_react_.Fragment,
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 translate-y-1",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-1",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Popover.Panel, {
          static: true,
          className: "absolute z-50 w-screen max-w-xs px-2 mt-3 transform -translate-x-full bottom-12 lg:top-12 left-full sm:px-0",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "relative grid gap-6 px-5 py-6 bg-dark-900 sm:gap-8 sm:p-8",
              children: solutions.map(item => item.external ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(ExternalLink/* default */.Z, {
                href: item.href,
                className: "block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-dark-800",
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-base font-medium text-high-emphesis",
                  children: item.name
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "mt-1 text-sm text-secondary",
                  children: item.description
                })]
              }, item.name) : /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                href: item.href,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-dark-800",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text-base font-medium text-high-emphesis",
                    children: item.name
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "mt-1 text-sm text-secondary",
                    children: item.description
                  })]
                })
              }, item.name))
            })
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/components/QuestionHelper/index.tsx
var QuestionHelper = __webpack_require__(5068);
// EXTERNAL MODULE: ./src/config/networks.ts
var networks = __webpack_require__(9361);
// EXTERNAL MODULE: ./src/state/application/hooks.ts
var hooks = __webpack_require__(4663);
// EXTERNAL MODULE: ./src/state/application/actions.ts
var actions = __webpack_require__(434);
// EXTERNAL MODULE: ./src/components/Modal/index.tsx
var Modal = __webpack_require__(1441);
// EXTERNAL MODULE: ./src/components/ModalHeader/index.tsx
var ModalHeader = __webpack_require__(7144);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(8269);
;// CONCATENATED MODULE: ./src/modals/NetworkModal/index.tsx













const SUPPORTED_NETWORKS = {
  [sdk_.ChainId.SMARTBCH]: {
    chainId: '0x2710',
    chainName: 'SmartBCH',
    nativeCurrency: {
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      decimals: 18
    },
    rpcUrls: ['https://smartbch.fountainhead.cash/mainnet'],
    blockExplorerUrls: ['https://smartscan.cash']
  },
  [sdk_.ChainId.SMARTBCH_AMBER]: {
    chainId: '0x2711',
    chainName: 'Amber Testnet',
    nativeCurrency: {
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      decimals: 18
    },
    rpcUrls: ['http://35.220.203.194:8545'],
    blockExplorerUrls: ['https://smartscan.cash']
  }
};
function NetworkModal() {
  const {
    chainId,
    library,
    account
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const networkModalOpen = (0,hooks/* useModalOpen */.oL)(actions/* ApplicationModal.NETWORK */.Lk.NETWORK);
  const toggleNetworkModal = (0,hooks/* useNetworkModalToggle */.o)();
  if (!chainId) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Modal/* default */.Z, {
    isOpen: networkModalOpen,
    onDismiss: toggleNetworkModal,
    maxWidth: 672,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
      onClose: toggleNetworkModal,
      title: i18n._(
      /*i18n*/
      i18n._("Select a Network"))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mb-6 text-lg text-primary",
      children: ["You are currently browsing ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "font-bold text-pink",
        children: "MIST"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " on the ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "font-bold text-blue",
        children: networks/* NETWORK_LABEL */.z[chainId]
      }), " network"]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-flow-row-dense grid-cols-1 gap-5 overflow-y-auto md:grid-cols-2",
      children: [sdk_.ChainId.SMARTBCH].map((key, i) => {
        if (chainId === key) {
          return /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "w-full col-span-1 p-px rounded bg-gradient-to-r from-blue to-pink",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center w-full h-full p-3 space-x-3 rounded bg-dark-1000",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: networks/* NETWORK_ICON */.w[key],
                alt: `Switch to ${networks/* NETWORK_LABEL */.z[key]} Network`,
                className: "rounded-md",
                width: "32px",
                height: "32px"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "font-bold text-primary",
                children: networks/* NETWORK_LABEL */.z[key]
              })]
            })
          }, i);
        }

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          onClick: () => {
            toggleNetworkModal();
            const params = SUPPORTED_NETWORKS[key];
            external_cookie_cutter_default().set('chainId', key);

            if (key === sdk_.ChainId.SMARTBCH) {
              library === null || library === void 0 ? void 0 : library.send('wallet_switchEthereumChain', [{
                chainId: '0x2711'
              }, account]);
            } else {
              library === null || library === void 0 ? void 0 : library.send('wallet_addEthereumChain', [params, account]);
            }
          },
          className: "flex items-center w-full col-span-1 p-3 space-x-3 rounded cursor-pointer bg-dark-800 hover:bg-dark-700",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: networks/* NETWORK_ICON */.w[key],
            alt: "Switch Network",
            className: "rounded-md",
            width: "32px",
            height: "32px"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "font-bold text-primary",
            children: networks/* NETWORK_LABEL */.z[key]
          })]
        }, i);
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Web3Network/index.tsx









function Web3Network() {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const toggleNetworkModal = (0,hooks/* useNetworkModalToggle */.o)();
  if (!chainId) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto",
    onClick: () => toggleNetworkModal(),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid items-center grid-flow-col px-3 py-2 space-x-2 text-sm rounded-lg pointer-events-auto auto-cols-max bg-dark-1000 text-secondary",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: networks/* NETWORK_ICON */.w[chainId],
        alt: "Switch Network",
        className: "rounded-md",
        width: "22px",
        height: "22px"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-primary",
        children: networks/* NETWORK_LABEL */.z[chainId]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(NetworkModal, {})]
  });
}

/* harmony default export */ const components_Web3Network = (Web3Network);
// EXTERNAL MODULE: ./src/config/wallets.ts + 2 modules
var wallets = __webpack_require__(7491);
// EXTERNAL MODULE: ./src/state/transactions/hooks.tsx
var transactions_hooks = __webpack_require__(9123);
// EXTERNAL MODULE: ./src/components/Loader/index.tsx
var Loader = __webpack_require__(4419);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(417);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(7603);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var outline_esm = __webpack_require__(6049);
// EXTERNAL MODULE: ./src/hooks/useCopyClipboard.ts
var useCopyClipboard = __webpack_require__(3016);
// EXTERNAL MODULE: ./src/components/Typography/index.tsx
var Typography = __webpack_require__(3130);
;// CONCATENATED MODULE: ./src/components/AccountDetails/Copy.tsx










const CopyHelper = ({
  className,
  toCopy,
  children
}) => {
  const [isCopied, setCopied] = (0,useCopyClipboard/* default */.Z)();
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (0,functions/* classNames */.AK)('flex items-center flex-shrink-0 space-x-1 no-underline cursor-pointer whitespace-nowrap hover:no-underline focus:no-underline active:no-underline text-blue opacity-80 hover:opacity-100 focus:opacity-100', className),
    onClick: () => setCopied(toCopy),
    children: [isCopied && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-1 whitespace-nowrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        variant: "sm",
        children: i18n._(
        /*i18n*/
        i18n._("Copied"))
      }), /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* CheckCircleIcon */.rE2, {
        width: 16,
        height: 16
      })]
    }), !isCopied && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [children, /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* ClipboardCopyIcon */.dqY, {
        width: 16,
        height: 16
      })]
    })]
  });
};

/* harmony default export */ const Copy = (CopyHelper);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9337);
// EXTERNAL MODULE: ./src/config/archer.ts
var config_archer = __webpack_require__(423);
// EXTERNAL MODULE: ./src/state/transactions/actions.ts
var transactions_actions = __webpack_require__(7219);
// EXTERNAL MODULE: ./src/functions/explorer.ts
var explorer = __webpack_require__(3302);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./src/components/AccountDetails/Transaction.tsx


















const calculateSecondsUntilDeadline = tx => {
  var _tx$archer;

  if (tx !== null && tx !== void 0 && (_tx$archer = tx.archer) !== null && _tx$archer !== void 0 && _tx$archer.deadline && tx !== null && tx !== void 0 && tx.addedTime) {
    const millisecondsUntilUntilDeadline = tx.archer.deadline * 1000 - Date.now();
    return millisecondsUntilUntilDeadline < 0 ? -1 : Math.ceil(millisecondsUntilUntilDeadline / 1000);
  }

  return -1;
};

const Transaction = ({
  hash
}) => {
  var _tx$receipt, _tx$receipt2;

  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const allTransactions = (0,transactions_hooks/* useAllTransactions */.kf)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const tx = allTransactions === null || allTransactions === void 0 ? void 0 : allTransactions[hash];
  const summary = tx === null || tx === void 0 ? void 0 : tx.summary;
  const pending = !(tx !== null && tx !== void 0 && tx.receipt);
  const success = !pending && tx && (((_tx$receipt = tx.receipt) === null || _tx$receipt === void 0 ? void 0 : _tx$receipt.status) === 1 || typeof ((_tx$receipt2 = tx.receipt) === null || _tx$receipt2 === void 0 ? void 0 : _tx$receipt2.status) === 'undefined');
  const archer = tx === null || tx === void 0 ? void 0 : tx.archer;
  const secondsUntilDeadline = (0,external_react_.useMemo)(() => calculateSecondsUntilDeadline(tx), [tx]);
  const mined = (tx === null || tx === void 0 ? void 0 : tx.receipt) && tx.receipt.status !== 1337;
  const cancelled = (tx === null || tx === void 0 ? void 0 : tx.receipt) && tx.receipt.status === 1337;
  const expired = secondsUntilDeadline === -1;
  const cancelPending = (0,external_react_.useCallback)(() => {
    var _process$env$NEXT_PUB;

    const relayURI = config_archer/* ARCHER_RELAY_URI */.HB[chainId];
    if (!relayURI) return;
    const body = JSON.stringify({
      method: 'archer_cancelTx',
      tx: archer === null || archer === void 0 ? void 0 : archer.rawTransaction
    });
    fetch(relayURI, {
      method: 'POST',
      body,
      headers: {
        Authorization: (_process$env$NEXT_PUB = process.env.NEXT_PUBLIC_ARCHER_API_KEY) !== null && _process$env$NEXT_PUB !== void 0 ? _process$env$NEXT_PUB : '',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      dispatch((0,transactions_actions/* finalizeTransaction */.Aw)({
        chainId,
        hash,
        receipt: {
          blockHash: '',
          blockNumber: 0,
          contractAddress: '',
          from: '',
          status: 1337,
          to: '',
          transactionHash: '',
          transactionIndex: 0
        }
      }));
    }).catch(err => console.error(err));
  }, [dispatch, chainId, archer, hash]);
  if (!chainId) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col w-full gap-2 px-3 py-1 rounded bg-dark-800",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ExternalLink/* default */.Z, {
      href: (0,explorer/* getExplorerLink */.E)(chainId, hash, 'transaction'),
      className: "flex items-center gap-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
        variant: "sm",
        className: "flex items-center hover:underline py-0.5",
        children: [summary !== null && summary !== void 0 ? summary : hash, " \u2197"]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (0,functions/* classNames */.AK)(pending ? 'text-primary' : success ? 'text-green' : cancelled ? 'text-red' : 'text-red'),
        children: pending ? /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {}) : success ? /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* CheckCircleIcon */.rE2, {
          width: 16,
          height: 16
        }) : cancelled ? /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* XCircleIcon */.oOx, {
          width: 16,
          height: 16
        }) : /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* ExclamationIcon */.SI8, {
          width: 16,
          height: 16
        })
      })]
    }), archer && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
      variant: "sm",
      weight: 400,
      className: "flex items-center justify-between pb-1 text-decoration-none",
      children: [`#${archer.nonce} - Tip ${sdk_.CurrencyAmount.fromRawAmount(sdk_.SmartBCH.onChain(sdk_.ChainId.SMARTBCH), archer.ethTip).toSignificant(6)} BCH`, pending ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [secondsUntilDeadline >= 60 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-high-emphesis",
          children: ["\uD83D\uDD51 ", `${Math.ceil(secondsUntilDeadline / 60)} mins`, " "]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-high-emphesis",
          children: ["\uD83D\uDD51 ", `<1 min`, " "]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex items-center cursor-pointer",
          onClick: cancelPending,
          children: i18n._(
          /*i18n*/
          i18n._("Cancel"))
        })]
      }) : cancelled ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-red",
        children: i18n._(
        /*i18n*/
        i18n._("Cancelled"))
      }) : !mined && expired && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-red",
        children: i18n._(
        /*i18n*/
        i18n._("Expired"))
      })]
    })]
  });
};

/* harmony default export */ const AccountDetails_Transaction = (Transaction);
;// CONCATENATED MODULE: ./src/components/AccountDetails/index.tsx




















const WalletIcon = ({
  size,
  src,
  alt,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-row items-end justify-center mr-2 flex-nowrap md:items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: src,
      alt: alt,
      width: size,
      height: size
    }), children]
  });
};

function renderTransactions(transactions) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex flex-col gap-2 flex-nowrap",
    children: transactions.map((hash, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx(AccountDetails_Transaction, {
        hash: hash
      }, i);
    })
  });
}

const AccountDetails = ({
  toggleWalletModal,
  pendingTransactions,
  confirmedTransactions,
  ENSName,
  openOptions
}) => {
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const {
    chainId,
    account,
    connector
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const dispatch = (0,external_react_redux_.useDispatch)();

  function formatConnectorName() {
    const {
      ethereum
    } = window;
    const isMetaMask = !!(ethereum && ethereum.isMetaMask);
    const name = Object.keys(wallets/* SUPPORTED_WALLETS */.Vp).filter(k => wallets/* SUPPORTED_WALLETS */.Vp[k].connector === connector && (connector !== wallets/* injected */.Lj || isMetaMask === (k === 'METAMASK'))).map(k => wallets/* SUPPORTED_WALLETS */.Vp[k].name)[0];
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "font-medium text-baseline text-secondary",
      children: ["Connected with ", name]
    });
  }

  function getStatusIcon() {
    if (connector === wallets/* injected */.Lj) {
      return null; // return <IconWrapper size={16}>{/* <Identicon /> */}</IconWrapper>
    } else if (connector.constructor.name === 'WalletConnectConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/wallet-connect.png",
        alt: "Wallet Connect",
        size: 16
      });
    } else if (connector.constructor.name === 'WalletLinkConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/coinbase.svg",
        alt: "Coinbase",
        size: 16
      });
    } else if (connector.constructor.name === 'FortmaticConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/formatic.png",
        alt: "Fortmatic",
        size: 16
      });
    } else if (connector.constructor.name === 'PortisConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/portnis.png",
        alt: "Portis",
        size: 16,
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
          onClick: async () => {
            // casting as PortisConnector here defeats the lazyload purpose
            ;
            connector.portis.showPortis();
          },
          children: "Show Portis"
        })
      });
    } else if (connector.constructor.name === 'TorusConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/torus.png",
        alt: "Torus",
        size: 16
      });
    }

    return null;
  }

  const clearAllTransactionsCallback = (0,external_react_.useCallback)(() => {
    if (chainId) dispatch((0,transactions_actions/* clearAllTransactions */.fY)({
      chainId
    }));
  }, [dispatch, chainId]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "space-y-3",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-3",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
        title: i18n._(
        /*i18n*/
        i18n._("Account")),
        onClose: toggleWalletModal
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "space-y-3",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [formatConnectorName(), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex space-x-3",
            children: [connector === wallets/* injected */.Lj && connector.constructor.name !== 'WalletLinkConnector' && connector.constructor.name !== 'BscConnector' && connector.constructor.name !== 'KeystoneConnector' && /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
              variant: "outlined",
              color: "gray",
              size: "xs",
              onClick: () => {
                console.log(connector);
                ;
                connector.handleClose();
              },
              children: i18n._(
              /*i18n*/
              i18n._("Disconnect"))
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
              variant: "outlined",
              color: "gray",
              size: "xs",
              onClick: () => {
                openOptions();
              },
              children: i18n._(
              /*i18n*/
              i18n._("Change"))
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "web3-account-identifier-row",
          className: "flex flex-col justify-center space-y-3",
          children: [ENSName ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "bg-dark-800",
            children: [getStatusIcon(), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              children: ENSName
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-3 py-2 rounded bg-dark-800",
            children: [getStatusIcon(), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              children: account && (0,functions/* shortenAddress */.Xn)(account)
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center gap-2 space-x-3",
            children: [chainId && account && /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
              color: "blue",
              startIcon: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.ExternalLink, {
                size: 16
              }),
              href: chainId && (0,explorer/* getExplorerLink */.E)(chainId, ENSName || account, 'address'),
              children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "sm",
                children: i18n._(
                /*i18n*/
                i18n._("View on explorer"))
              })
            }), account && /*#__PURE__*/jsx_runtime_.jsx(Copy, {
              toCopy: account,
              children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "sm",
                children: i18n._(
                /*i18n*/
                i18n._("Copy Address"))
              })
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          weight: 700,
          children: i18n._(
          /*i18n*/
          i18n._("Recent Transactions"))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.ZP, {
            variant: "outlined",
            color: "gray",
            size: "xs",
            onClick: clearAllTransactionsCallback,
            children: i18n._(
            /*i18n*/
            i18n._("Clear all"))
          })
        })]
      }), !!pendingTransactions.length || !!confirmedTransactions.length ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [renderTransactions(pendingTransactions), renderTransactions(confirmedTransactions)]
      }) : /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        variant: "sm",
        className: "text-secondary",
        children: i18n._(
        /*i18n*/
        i18n._("Your transactions will appear here..."))
      })]
    })]
  });
};

/* harmony default export */ const components_AccountDetails = (AccountDetails);
// EXTERNAL MODULE: external "@web3-react/fortmatic-connector"
var fortmatic_connector_ = __webpack_require__(1698);
;// CONCATENATED MODULE: ./src/entities/FortmaticConnector.ts

const OVERLAY_READY = 'OVERLAY_READY';
const CHAIN_ID_NETWORK_ARGUMENT = {};
class FortmaticConnector extends (/* unused pure expression or super */ null && (FortmaticConnectorCore)) {
  async activate() {
    if (!this.fortmatic) {
      const {
        default: Fortmatic
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8099, 23));
      const {
        apiKey,
        chainId
      } = this;

      if (chainId in CHAIN_ID_NETWORK_ARGUMENT) {
        this.fortmatic = new Fortmatic(apiKey, CHAIN_ID_NETWORK_ARGUMENT[chainId]);
      } else {
        throw new Error(`Unsupported network ID: ${chainId}`);
      }
    }

    const provider = this.fortmatic.getProvider();
    const pollForOverlayReady = new Promise(resolve => {
      const interval = setInterval(() => {
        if (provider.overlayReady) {
          clearInterval(interval);
          this.emit(OVERLAY_READY);
          resolve();
        }
      }, 200);
    });
    const [account] = await Promise.all([provider.enable().then(accounts => accounts[0]), pollForOverlayReady]);
    return {
      provider: this.fortmatic.getProvider(),
      chainId: this.chainId,
      account
    };
  }

}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/modals/WalletModal/Option.tsx





const SubHeader = external_styled_components_default().div.withConfig({
  displayName: "Option__SubHeader",
  componentId: "sc-nljxhz-0"
})(["margin-top:10px;font-size:12px;"]);
function Option({
  link = null,
  clickable = true,
  size,
  onClick = null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  id
}) {
  const content = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: onClick,
    className: `flex items-center justify-between w-full p-3 rounded cursor-pointer ${!active ? 'bg-dark-800 hover:bg-dark-700' : 'bg-dark-1000'}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center",
        children: [active && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-4 h-4 mr-4 rounded-full",
          style: {
            background: color
          }
        }), header]
      }), subheader && /*#__PURE__*/jsx_runtime_.jsx(SubHeader, {
        children: subheader
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: icon,
      alt: 'Icon',
      width: "32px",
      height: "32px"
    })]
  });

  if (link) {
    return /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: link,
      children: content
    });
  }

  return !active ? content : /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-full p-px rounded bg-gradient-to-r from-blue to-pink",
    children: content
  });
}
// EXTERNAL MODULE: ./src/components/Dots/index.tsx
var Dots = __webpack_require__(8561);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(7158);
;// CONCATENATED MODULE: ./src/modals/WalletModal/PendingView.tsx








const PendingSection = external_styled_components_default().div.withConfig({
  displayName: "PendingView__PendingSection",
  componentId: "sc-mf9lsb-0"
})(["align-items:center;justify-content:center;width:100%;& > *{width:100%;}"]);
const LoadingMessage = external_styled_components_default().div.withConfig({
  displayName: "PendingView__LoadingMessage",
  componentId: "sc-mf9lsb-1"
})(["align-items:center;justify-content:flex-start;margin-bottom:20px;& > *{padding:1rem;}"]);
const ErrorGroup = external_styled_components_default().div.withConfig({
  displayName: "PendingView__ErrorGroup",
  componentId: "sc-mf9lsb-2"
})(["align-items:center;justify-content:flex-start;"]);
const ErrorButton = external_styled_components_default().div.withConfig({
  displayName: "PendingView__ErrorButton",
  componentId: "sc-mf9lsb-3"
})(["border-radius:8px;font-size:12px;margin-left:1rem;padding:0.5rem;font-weight:600;user-select:none;&:hover{cursor:pointer;}"]);
const LoadingWrapper = external_styled_components_default().div.withConfig({
  displayName: "PendingView__LoadingWrapper",
  componentId: "sc-mf9lsb-4"
})(["align-items:center;justify-content:center;"]);
function PendingView({
  connector,
  error = false,
  setPendingError,
  tryActivation
}) {
  var _window, _window$ethereum;

  const isMetamask = (_window = window) === null || _window === void 0 ? void 0 : (_window$ethereum = _window.ethereum) === null || _window$ethereum === void 0 ? void 0 : _window$ethereum.isMetaMask;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PendingSection, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(LoadingMessage, {
      error: error,
      children: /*#__PURE__*/jsx_runtime_.jsx(LoadingWrapper, {
        children: error ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(ErrorGroup, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Error connecting."
          }), /*#__PURE__*/jsx_runtime_.jsx(ErrorButton, {
            onClick: () => {
              setPendingError(false);
              connector && tryActivation(connector);
            },
            children: "Try Again"
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx(Dots/* default */.Z, {
          children: "Initializing"
        })
      })
    }), Object.keys(wallets/* SUPPORTED_WALLETS */.Vp).map(key => {
      const option = wallets/* SUPPORTED_WALLETS */.Vp[key];

      if (option.connector === connector) {
        if (option.connector === wallets/* injected */.Lj) {
          if (isMetamask && option.name !== 'MetaMask') {
            return null;
          }

          if (!isMetamask && option.name === 'MetaMask') {
            return null;
          }
        }

        return /*#__PURE__*/jsx_runtime_.jsx(Option, {
          id: `connect-${key}`,
          clickable: false,
          color: option.color,
          header: option.name,
          subheader: option.description,
          icon: '/images/wallets/' + option.iconName
        }, key);
      }

      return null;
    })]
  });
}
// EXTERNAL MODULE: external "@web3-react/walletconnect-connector"
var walletconnect_connector_ = __webpack_require__(9650);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
// EXTERNAL MODULE: ./src/hooks/usePrevious.ts
var usePrevious = __webpack_require__(4751);
;// CONCATENATED MODULE: ./src/modals/WalletModal/index.tsx





















const CloseIcon = external_styled_components_default().div.withConfig({
  displayName: "WalletModal__CloseIcon",
  componentId: "sc-1ubi9wb-0"
})(["position:absolute;right:0;top:0;&:hover{cursor:pointer;opacity:0.6;}"]);
const HeaderRow = external_styled_components_default().div.withConfig({
  displayName: "WalletModal__HeaderRow",
  componentId: "sc-1ubi9wb-1"
})(["margin-bottom:1rem;"]);
const UpperSection = external_styled_components_default().div.withConfig({
  displayName: "WalletModal__UpperSection",
  componentId: "sc-1ubi9wb-2"
})(["position:relative;h5{margin:0;margin-bottom:0.5rem;font-size:1rem;font-weight:400;}h5:last-child{margin-bottom:0px;}h4{margin-top:0;font-weight:500;}"]);
const WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending'
};
function WalletModal({
  pendingTransactions,
  confirmedTransactions,
  ENSName
}) {
  // console.log({ ENSName })
  // important that these are destructed from the account-specific web3-react context
  const {
    active,
    account,
    connector,
    activate,
    error,
    deactivate
  } = (0,core_.useWeb3React)();
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const {
    0: walletView,
    1: setWalletView
  } = (0,external_react_.useState)(WALLET_VIEWS.ACCOUNT);
  const {
    0: pendingWallet,
    1: setPendingWallet
  } = (0,external_react_.useState)();
  const {
    0: pendingError,
    1: setPendingError
  } = (0,external_react_.useState)();
  const walletModalOpen = (0,hooks/* useModalOpen */.oL)(actions/* ApplicationModal.WALLET */.Lk.WALLET);
  const toggleWalletModal = (0,hooks/* useWalletModalToggle */.mq)();
  const previousAccount = (0,usePrevious/* default */.Z)(account); // close on connection, when logged out before

  (0,external_react_.useEffect)(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal();
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen]); // always reset to account view

  (0,external_react_.useEffect)(() => {
    if (walletModalOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [walletModalOpen]); // close modal when a connection is successful

  const activePrevious = (0,usePrevious/* default */.Z)(active);
  const connectorPrevious = (0,usePrevious/* default */.Z)(connector);
  (0,external_react_.useEffect)(() => {
    if (walletModalOpen && (active && !activePrevious || connector && connector !== connectorPrevious && !error)) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [setWalletView, active, error, connector, walletModalOpen, activePrevious, connectorPrevious]);

  const tryActivation = async connector => {
    var _conn$walletConnectPr, _conn$walletConnectPr2;

    let name = '';
    let conn = typeof connector === 'function' ? await connector() : connector;
    Object.keys(wallets/* SUPPORTED_WALLETS */.Vp).map(key => {
      if (connector === wallets/* SUPPORTED_WALLETS */.Vp[key].connector) {
        return name = wallets/* SUPPORTED_WALLETS */.Vp[key].name;
      }

      return true;
    });
    setPendingWallet(conn); // set wallet for pending view

    setWalletView(WALLET_VIEWS.PENDING); // if the connector is walletconnect and the user has already tried to connect, manually reset the connector

    if (conn instanceof walletconnect_connector_.WalletConnectConnector && (_conn$walletConnectPr = conn.walletConnectProvider) !== null && _conn$walletConnectPr !== void 0 && (_conn$walletConnectPr2 = _conn$walletConnectPr.wc) !== null && _conn$walletConnectPr2 !== void 0 && _conn$walletConnectPr2.uri) {
      conn.walletConnectProvider = undefined;
    }

    conn && activate(conn, undefined, true).catch(error => {
      if (error instanceof core_.UnsupportedChainIdError) {
        activate(conn); // a little janky...can't use setError because the connector isn't set
      } else {
        setPendingError(true);
      }
    });
  }; // close wallet modal if fortmatic modal is active


  (0,external_react_.useEffect)(() => {
    var _connector$constructo;

    if ((connector === null || connector === void 0 ? void 0 : (_connector$constructo = connector.constructor) === null || _connector$constructo === void 0 ? void 0 : _connector$constructo.name) === 'FormaticConnector') {
      connector.on(OVERLAY_READY, () => {
        toggleWalletModal();
      });
    }
  }, [toggleWalletModal, connector]); // get wallets user can switch too, depending on device/browser

  function getOptions() {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(wallets/* SUPPORTED_WALLETS */.Vp).map(key => {
      const option = wallets/* SUPPORTED_WALLETS */.Vp[key]; // check for mobile options

      if (external_react_device_detect_.isMobile) {
        // disable portis on mobile for now
        if (option.name === 'Portis') {
          return null;
        }

        return /*#__PURE__*/jsx_runtime_.jsx(Option, {
          onClick: () => {
            tryActivation(option.connector);
          },
          id: `connect-${key}`,
          active: option.connector && option.connector === connector,
          color: option.color,
          link: option.href,
          header: option.name,
          subheader: null,
          icon: '/images/wallets/' + option.iconName
        }, key);
      } // overwrite injected when needed


      if (option.connector === wallets/* injected */.Lj) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === 'MetaMask') {
            return /*#__PURE__*/jsx_runtime_.jsx(Option, {
              id: `connect-${key}`,
              color: '#E8831D',
              header: 'Install Metamask',
              subheader: null,
              link: 'https://metamask.io/',
              icon: "/images/wallets/metamask.png"
            }, key);
          } else {
            return null; // dont want to return install twice
          }
        } // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
          return null;
        } // likewise for generic
        else if (option.name === 'Injected' && isMetamask) {
          return null;
        }
      } // return rest of options


      return !external_react_device_detect_.isMobile && !option.mobileOnly && /*#__PURE__*/jsx_runtime_.jsx(Option, {
        id: `connect-${key}`,
        onClick: () => {
          option.connector === connector ? setWalletView(WALLET_VIEWS.ACCOUNT) : !option.href && tryActivation(option.connector);
        },
        active: option.connector === connector,
        color: option.color,
        link: option.href,
        header: option.name,
        subheader: null // use option.descriptio to bring back multi-line
        ,
        icon: '/images/wallets/' + option.iconName
      }, key);
    });
  }

  function getModalContent() {
    if (error) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(UpperSection, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(CloseIcon, {
          onClick: toggleWalletModal,
          children: /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* XIcon */.b0D, {
            width: "24px",
            height: "24px"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(HeaderRow, {
          style: {
            paddingLeft: 0,
            paddingRight: 0
          },
          children: error instanceof core_.UnsupportedChainIdError ? i18n._(
          /*i18n*/
          i18n._("Wrong Network")) : i18n._(
          /*i18n*/
          i18n._("Error connecting"))
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [error instanceof core_.UnsupportedChainIdError ? /*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: i18n._(
            /*i18n*/
            i18n._("Please connect to the appropriate SmartBCH network."))
          }) : i18n._(
          /*i18n*/
          i18n._("Error connecting. Try refreshing the page.")), /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              marginTop: '1rem'
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* ButtonError */.Kd, {
            error: true,
            size: "sm",
            onClick: deactivate,
            children: i18n._(
            /*i18n*/
            i18n._("Disconnect"))
          })]
        })]
      });
    }

    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return /*#__PURE__*/jsx_runtime_.jsx(components_AccountDetails, {
        toggleWalletModal: toggleWalletModal,
        pendingTransactions: pendingTransactions,
        confirmedTransactions: confirmedTransactions,
        ENSName: ENSName,
        openOptions: () => setWalletView(WALLET_VIEWS.OPTIONS)
      });
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col space-y-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
        title: "Select a Wallet",
        onClose: toggleWalletModal
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-6",
        children: [walletView === WALLET_VIEWS.PENDING ? /*#__PURE__*/jsx_runtime_.jsx(PendingView, {
          connector: pendingWallet,
          error: pendingError,
          setPendingError: setPendingError,
          tryActivation: tryActivation
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col space-y-5 overflow-y-auto",
          children: getOptions()
        }), walletView !== WALLET_VIEWS.PENDING && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-secondary",
            children: i18n._(
            /*i18n*/
            i18n._("New to SmartBCH?"))
          }), /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
            href: "https://ethereum.org/wallets/",
            color: "blue",
            children: i18n._(
            /*i18n*/
            i18n._("Learn more about wallets"))
          })]
        })]
      })]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
    isOpen: walletModalOpen,
    onDismiss: toggleWalletModal,
    minHeight: 0,
    maxHeight: 90,
    children: getModalContent()
  });
}
// EXTERNAL MODULE: ./src/components/Web3Connect/index.tsx
var Web3Connect = __webpack_require__(1394);
// EXTERNAL MODULE: ./src/functions/format.ts
var format = __webpack_require__(8277);
// EXTERNAL MODULE: ./src/hooks/useENSName.ts
var useENSName = __webpack_require__(7816);
;// CONCATENATED MODULE: ./src/components/Web3Status/index.tsx

















const IconWrapper = external_styled_components_default().div.withConfig({
  displayName: "Web3Status__IconWrapper",
  componentId: "sc-1iz0jm-0"
})(["display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;& > *{height:", ";width:", ";}"], ({
  size
}) => size ? size + 'px' : '32px', ({
  size
}) => size ? size + 'px' : '32px'); // we want the latest one to come first, so return negative if a is after b

function newTransactionsFirst(a, b) {
  return b.addedTime - a.addedTime;
}

const SOCK = /*#__PURE__*/jsx_runtime_.jsx("span", {
  role: "img",
  "aria-label": "has socks emoji",
  style: {
    marginTop: -4,
    marginBottom: -4
  },
  children: "\uD83E\uDDE6"
}); // eslint-disable-next-line react/prop-types


function StatusIcon({
  connector
}) {
  if (connector === wallets/* injected */.Lj) {
    return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "/chef.svg",
      alt: "Injected (MetaMask etc...)",
      width: 20,
      height: 20
    }); // return <Identicon />
  } else if (connector.constructor.name === 'WalletConnectConnector') {
    return /*#__PURE__*/jsx_runtime_.jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/images/wallets/wallet-connect.png",
        alt: 'Wallet Connect',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'LatticeConnector') {
    return /*#__PURE__*/jsx_runtime_.jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/images/wallets/lattice.png",
        alt: 'Lattice',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'WalletLinkConnector') {
    return /*#__PURE__*/jsx_runtime_.jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/images/wallets/coinbase.svg",
        alt: 'Coinbase Wallet',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'FortmaticConnector') {
    return /*#__PURE__*/jsx_runtime_.jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/images/wallets/fortmatic.png",
        alt: 'Fortmatic',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'PortisConnector') {
    return /*#__PURE__*/jsx_runtime_.jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/images/wallets/portis.png",
        alt: 'Portis',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'KeystoneConnector') {
    return /*#__PURE__*/jsx_runtime_.jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/images/wallets/keystone.png",
        alt: 'Keystone',
        width: "16px",
        height: "16px"
      })
    });
  }

  return null;
}

function Web3StatusInner() {
  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const {
    account,
    connector
  } = (0,core_.useWeb3React)();
  const {
    ENSName
  } = (0,useENSName/* default */.Z)(account !== null && account !== void 0 ? account : undefined);
  const allTransactions = (0,transactions_hooks/* useAllTransactions */.kf)();
  const sortedRecentTransactions = (0,external_react_.useMemo)(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(transactions_hooks/* isTransactionRecent */.mH).sort(newTransactionsFirst);
  }, [allTransactions]);
  const pending = sortedRecentTransactions.filter(tx => {
    if (tx.receipt) {
      return false;
    } else if (tx.archer && tx.archer.deadline * 1000 - Date.now() < 0) {
      return false;
    } else {
      return true;
    }
  }).map(tx => tx.hash);
  const hasPendingTransactions = !!pending.length;
  const toggleWalletModal = (0,hooks/* useWalletModalToggle */.mq)();

  if (account) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "web3-status-connected",
      className: "flex items-center px-3 py-2 text-sm rounded-lg bg-dark-1000 text-secondary",
      onClick: toggleWalletModal,
      children: [hasPendingTransactions ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "pr-2",
          children: [pending === null || pending === void 0 ? void 0 : pending.length, " ", i18n._(
          /*i18n*/
          i18n._("Pending"))]
        }), ' ', /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {
          stroke: "white"
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mr-2",
        children: ENSName || (0,format/* shortenAddress */.Xn)(account)
      }), !hasPendingTransactions && connector && /*#__PURE__*/jsx_runtime_.jsx(StatusIcon, {
        connector: connector
      })]
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(Web3Connect/* default */.Z, {
      style: {
        paddingTop: '6px',
        paddingBottom: '6px'
      }
    });
  }
}

function Web3Status() {
  const {
    active,
    account
  } = (0,core_.useWeb3React)();
  const contextNetwork = (0,core_.useWeb3React)(constants/* NetworkContextName */.AQ);
  const {
    ENSName
  } = (0,useENSName/* default */.Z)(account !== null && account !== void 0 ? account : undefined);
  const allTransactions = (0,transactions_hooks/* useAllTransactions */.kf)();
  const sortedRecentTransactions = (0,external_react_.useMemo)(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(transactions_hooks/* isTransactionRecent */.mH).sort(newTransactionsFirst);
  }, [allTransactions]);
  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash);
  const confirmed = sortedRecentTransactions.filter(tx => tx.receipt).map(tx => tx.hash);

  if (!contextNetwork.active && !active) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Web3StatusInner, {}), /*#__PURE__*/jsx_runtime_.jsx(WalletModal, {
      ENSName: ENSName !== null && ENSName !== void 0 ? ENSName : undefined,
      pendingTransactions: pending,
      confirmedTransactions: confirmed
    })]
  });
}
// EXTERNAL MODULE: ./src/state/wallet/hooks.ts
var wallet_hooks = __webpack_require__(2319);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx
















 // import { ExternalLink, NavLink } from "./Link";
// import { ReactComponent as Burger } from "../assets/images/burger.svg";





function AppBar() {
  var _useETHBalances;

  const {
    i18n
  } = (0,external_lingui_react_.useLingui)();
  const {
    account,
    chainId,
    library
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const userEthBalance = (_useETHBalances = (0,wallet_hooks/* useETHBalances */.AE)(account ? [account] : [])) === null || _useETHBalances === void 0 ? void 0 : _useETHBalances[account !== null && account !== void 0 ? account : ''];
  return (
    /*#__PURE__*/
    //     // <header className="flex flex-row justify-between w-screen flex-nowrap">
    jsx_runtime_.jsx("header", {
      className: "flex-shrink-0 w-full",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Popover, {
        as: "nav",
        className: "z-10 w-full bg-transparent header-border-b",
        children: ({
          open
        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "px-4 py-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/logo.png",
                  alt: "Mist",
                  width: "32px",
                  height: "32px"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "hidden sm:block sm:ml-4",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex space-x-2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                      href: "/swap",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        id: `swap-nav-link`,
                        className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                        children: i18n._(
                        /*i18n*/
                        i18n._("Swap"))
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                      href: "/pool",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        id: `pool-nav-link`,
                        className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                        children: i18n._(
                        /*i18n*/
                        i18n._("Pool"))
                      })
                    }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.MIGRATE */.L0.MIGRATE, chainId) && /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                      href: '/migrate',
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        id: `migrate-nav-link`,
                        className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                        children: i18n._(
                        /*i18n*/
                        i18n._("Migrate"))
                      })
                    }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.LIQUIDITY_MINING */.L0.LIQUIDITY_MINING, chainId) && /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                      href: '/farm',
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        id: `farm-nav-link`,
                        className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                        children: i18n._(
                        /*i18n*/
                        i18n._("Farm"))
                      })
                    }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.KASHI */.L0.KASHI, chainId) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                        href: '/lend',
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          id: `lend-nav-link`,
                          className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                          children: i18n._(
                          /*i18n*/
                          i18n._("Lend"))
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                        href: '/borrow',
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          id: `borrow-nav-link`,
                          className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                          children: i18n._(
                          /*i18n*/
                          i18n._("Borrow"))
                        })
                      })]
                    }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.STAKING */.L0.STAKING, chainId) && /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                      href: '/stake',
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        id: `stake-nav-link`,
                        className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                        children: i18n._(
                        /*i18n*/
                        i18n._("Stake"))
                      })
                    })]
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "fixed bottom-0 left-0 z-10 flex flex-row items-center justify-center w-full p-4 lg:w-auto bg-dark-1000 lg:relative lg:p-0 lg:bg-transparent",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex items-center justify-between w-full space-x-2 sm:justify-end",
                  children: [chainId && [sdk_.ChainId.SMARTBCH].includes(chainId) && library && library.provider.isMetaMask && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
                      text: i18n._(
                      /*i18n*/
                      i18n._("Add xMIST to your MetaMask wallet")),
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "hidden p-0.5 rounded-md cursor-pointer sm:inline-flex bg-dark-900 hover:bg-dark-800",
                        onClick: () => {
                          if (library && library.provider.isMetaMask && library.provider.request) {
                            const params = {
                              type: 'ERC20',
                              options: {
                                address: '0xC41C680c60309d4646379eD62020c534eB67b6f4',
                                symbol: 'xMIST',
                                decimals: 18,
                                image: 'https://raw.githubusercontent.com/mistswapdex/assets/master/blockchains/smartbch/assets/0xC41C680c60309d4646379eD62020c534eB67b6f4/logo.png'
                              }
                            };
                            library.provider.request({
                              method: 'wallet_watchAsset',
                              params
                            }).then(success => {
                              if (success) {
                                console.log('Successfully added xMIST to MetaMask');
                              } else {
                                throw new Error('Something went wrong.');
                              }
                            }).catch(console.error);
                          }
                        },
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                          src: "/images/tokens/xmist-square.jpg",
                          alt: "xMIST",
                          width: "38px",
                          height: "38px",
                          objectFit: "contain",
                          className: "rounded-md"
                        })
                      })
                    })
                  }), chainId && chainId in sdk_.MIST_ADDRESS && library && library.provider.isMetaMask && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/jsx_runtime_.jsx(QuestionHelper/* default */.Z, {
                      text: i18n._(
                      /*i18n*/
                      i18n._("Add MIST to your MetaMask wallet")),
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "hidden rounded-md cursor-pointer sm:inline-flex bg-dark-900 hover:bg-dark-800 p-0.5",
                        onClick: () => {
                          const params = {
                            type: 'ERC20',
                            options: {
                              address: sdk_.MIST_ADDRESS[chainId],
                              symbol: 'MIST',
                              decimals: 18,
                              image: 'https://raw.githubusercontent.com/mistswapdex/assets/master/blockchains/smartbch/assets/0x5fA664f69c2A4A3ec94FaC3cBf7049BD9CA73129/logo.png'
                            }
                          };

                          if (library && library.provider.isMetaMask && library.provider.request) {
                            library.provider.request({
                              method: 'wallet_watchAsset',
                              params
                            }).then(success => {
                              if (success) {
                                console.log('Successfully added MIST to MetaMask');
                              } else {
                                throw new Error('Something went wrong.');
                              }
                            }).catch(console.error);
                          }
                        },
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                          src: "/images/tokens/mist-square.jpg",
                          alt: "MIST",
                          width: "38px",
                          height: "38px",
                          objectFit: "contain",
                          className: "rounded-md"
                        })
                      })
                    })
                  }), library && library.provider.isMetaMask && /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "hidden sm:inline-block",
                    children: /*#__PURE__*/jsx_runtime_.jsx(components_Web3Network, {})
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto",
                    children: [account && chainId && userEthBalance && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "px-3 py-2 text-primary text-bold",
                        children: [userEthBalance === null || userEthBalance === void 0 ? void 0 : userEthBalance.toSignificant(4), " ", sdk_.NATIVE[chainId].symbol]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx(Web3Status, {})]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "hidden md:block sm:block",
                    children: /*#__PURE__*/jsx_runtime_.jsx(LangSwitcher, {})
                  }), /*#__PURE__*/jsx_runtime_.jsx(Menu, {})]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex -mr-2 sm:hidden",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "inline-flex items-center",
                  children: /*#__PURE__*/jsx_runtime_.jsx(LangSwitcher, {})
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover.Button, {
                  className: "inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: i18n._(
                    /*i18n*/
                    i18n._("Open main menu"))
                  }), open ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    className: "block w-6 h-6",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  }) :
                  /*#__PURE__*/
                  // <X title="Close" className="block w-6 h-6" aria-hidden="true" />
                  jsx_runtime_.jsx("svg", {
                    className: "block w-6 h-6",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16"
                    })
                  }) // <Burger title="Burger" className="block w-6 h-6" aria-hidden="true" />
                  ]
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Popover.Panel, {
            className: "sm:hidden",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex flex-col px-4 pt-2 pb-3 space-y-1",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/swap',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: `swap-nav-link`,
                  className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                  children: i18n._(
                  /*i18n*/
                  i18n._("Swap"))
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/pool',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: `pool-nav-link`,
                  className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                  children: i18n._(
                  /*i18n*/
                  i18n._("Pool"))
                })
              }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.MIGRATE */.L0.MIGRATE, chainId) && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/migrate',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: `migrate-nav-link`,
                  className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                  children: i18n._(
                  /*i18n*/
                  i18n._("Migrate"))
                })
              }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.LIQUIDITY_MINING */.L0.LIQUIDITY_MINING, chainId) && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/farm',
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  id: `farm-nav-link`,
                  className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                  children: [' ', i18n._(
                  /*i18n*/
                  i18n._("Farm"))]
                })
              }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.KASHI */.L0.KASHI, chainId) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: '/lend',
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    id: `lend-nav-link`,
                    className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                    children: i18n._(
                    /*i18n*/
                    i18n._("Lend"))
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: '/borrow',
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    id: `borrow-nav-link`,
                    className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                    children: i18n._(
                    /*i18n*/
                    i18n._("Borrow"))
                  })
                })]
              }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.STAKING */.L0.STAKING, chainId) && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/stake',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  id: `stake-nav-link`,
                  className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                  children: i18n._(
                  /*i18n*/
                  i18n._("Stake"))
                })
              }), chainId && (0,feature/* featureEnabled */.vR)(feature/* Feature.ANALYTICS */.L0.ANALYTICS, chainId) && /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
                id: `analytics-nav-link`,
                href: constants/* ANALYTICS_URL */.fi[chainId] || 'https://analytics.mistswap.fi',
                className: "p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap",
                children: i18n._(
                /*i18n*/
                i18n._("Analytics"))
              })]
            })
          })]
        })
      })
    })
  );
}

/* harmony default export */ const Header = (AppBar);

/***/ }),

/***/ 7144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3130);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const ModalHeader = ({
  title = undefined,
  onClose = undefined,
  className = '',
  onBack = undefined
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `flex items-center justify-between mb-4 ${className}`,
    children: [onBack && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .ChevronLeftIcon */ .wyc, {
      onClick: onBack,
      width: 24,
      height: 24,
      className: "cursor-pointer"
    }), title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      component: "h2",
      variant: "h3",
      className: "font-bold",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "flex items-center justify-center w-6 h-6 cursor-pointer text-primary hover:text-high-emphesis",
      onClick: onClose,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .XIcon */ .b0D, {
        width: 24,
        height: 24
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);

/***/ }),

/***/ 1522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Popups)
});

// EXTERNAL MODULE: ./src/state/application/hooks.ts
var hooks = __webpack_require__(4663);
// EXTERNAL MODULE: ./src/state/user/hooks.tsx
var user_hooks = __webpack_require__(181);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9337);
// EXTERNAL MODULE: ./src/components/ExternalLink/index.tsx
var ExternalLink = __webpack_require__(3106);
// EXTERNAL MODULE: ./src/functions/explorer.ts
var explorer = __webpack_require__(3302);
// EXTERNAL MODULE: ./src/hooks/index.ts + 2 modules
var src_hooks = __webpack_require__(9202);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Popups/TransactionPopup.tsx








function TransactionPopup({
  hash,
  success,
  summary
}) {
  const {
    chainId
  } = (0,src_hooks/* useActiveWeb3React */.aQ)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-row w-full flex-nowrap",
    style: {
      zIndex: 1000
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pr-4",
      children: success ? /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.CheckCircle, {
        className: "text-2xl text-green"
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.AlertCircle, {
        className: "text-2xl text-red"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col gap-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "font-bold text-high-emphesis",
        children: summary !== null && summary !== void 0 ? summary : 'Hash: ' + hash.slice(0, 8) + '...' + hash.slice(58, 65)
      }), chainId && hash && /*#__PURE__*/jsx_runtime_.jsx(ExternalLink/* default */.Z, {
        className: "p-0 text-blue hover:underline md:p-0",
        href: (0,explorer/* getExplorerLink */.E)(chainId, hash, 'transaction'),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row items-center gap-1",
          children: ["View on explorer ", /*#__PURE__*/jsx_runtime_.jsx(esm/* ExternalLinkIcon */.h0n, {
            width: 20,
            height: 20
          })]
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Popups/PopupItem.tsx








const AnimatedFader = ({
  duration
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: style_default().dynamic([["3137773761", [duration]]]) + " " + "h-[3px] bg-dark-800 w-full",
  children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "3137773761",
    dynamic: [duration],
    children: [`.animation.__jsx-style-dynamic-selector{-webkit-animation-duration:${duration}ms;animation-duration:${duration}ms;-webkit-animation-name:fader-__jsx-style-dynamic-selector;animation-name:fader-__jsx-style-dynamic-selector;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}`, "@-webkit-keyframes fader-__jsx-style-dynamic-selector{from{width:100%;}to{width:0%;}}", "@keyframes fader-__jsx-style-dynamic-selector{from{width:100%;}to{width:0%;}}"]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: style_default().dynamic([["3137773761", [duration]]]) + " " + "animation h-[3px] bg-gradient-to-r from-blue to-pink"
  })]
});

function PopupItem({
  removeAfterMs,
  content,
  popKey
}) {
  const removePopup = (0,hooks/* useRemovePopup */.J3)();
  const removeThisPopup = (0,external_react_.useCallback)(() => removePopup(popKey), [popKey, removePopup]);
  (0,external_react_.useEffect)(() => {
    if (removeAfterMs === null) return undefined;
    const timeout = setTimeout(() => {
      removeThisPopup();
    }, removeAfterMs);
    return () => {
      clearTimeout(timeout);
    };
  }, [removeAfterMs, removeThisPopup]);
  let popupContent;

  if ('txn' in content) {
    const {
      txn: {
        hash,
        success,
        summary
      }
    } = content;
    popupContent = /*#__PURE__*/jsx_runtime_.jsx(TransactionPopup, {
      hash: hash,
      success: success,
      summary: summary
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mb-4",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative w-full overflow-hidden rounded bg-dark-700",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row p-4",
        children: [popupContent, /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cursor-pointer hover:text-white",
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
            width: 24,
            height: 24,
            onClick: removeThisPopup
          })
        })]
      }), removeAfterMs !== null ? /*#__PURE__*/jsx_runtime_.jsx(AnimatedFader, {
        duration: removeAfterMs
      }) : null]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Popups/index.tsx







const Popups = () => {
  const activePopups = (0,hooks/* useActivePopups */.iT)();
  const urlWarningActive = (0,user_hooks/* useURLWarningVisible */.wm)();
  if (activePopups.length === 0) return /*#__PURE__*/jsx_runtime_.jsx("span", {});
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `hidden md:block fixed right-[36px] max-w-[355px] w-full z-3 flex flex-col ${urlWarningActive ? 'top-[108px]' : 'top-[88px]'}`,
      children: activePopups.map(item => /*#__PURE__*/jsx_runtime_.jsx(PopupItem, {
        content: item.content,
        popKey: item.key,
        removeAfterMs: item.removeAfterMs
      }, item.key))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "fixed md:hidden left-4 right-4 top-[88px] fit-content mb-[20px]",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-[99%] overflow-x-auto overflow-y-hidden flex flex-col gap-4",
        style: {
          WebkitOverflowScrolling: 'touch'
        },
        children: activePopups // reverse so new items up front
        .slice(0).reverse().map(item => /*#__PURE__*/jsx_runtime_.jsx(PopupItem, {
          content: item.content,
          popKey: item.key,
          removeAfterMs: item.removeAfterMs
        }, item.key))
      })
    })]
  });
};

/* harmony default export */ const components_Popups = (Popups);

/***/ }),

/***/ 423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HB": () => (/* binding */ ARCHER_RELAY_URI),
/* harmony export */   "Rg": () => (/* binding */ DEFAULT_ARCHER_GAS_ESTIMATE),
/* harmony export */   "lW": () => (/* binding */ DEFAULT_ARCHER_GAS_PRICES),
/* harmony export */   "wP": () => (/* binding */ DEFAULT_ARCHER_ETH_TIP)
/* harmony export */ });
/* unused harmony export ARCHER_GAS_URI */
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__);


const ARCHER_RELAY_URI = {};
const ARCHER_GAS_URI = {}; // default archer gas estimate, 250k wei

const DEFAULT_ARCHER_GAS_ESTIMATE = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(250000); // default gas prices to use if all other sources unavailable

const DEFAULT_ARCHER_GAS_PRICES = [_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(60000000000), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(70000000000), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(100000000000), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(140000000000), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(300000000000), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(800000000000), _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(2000000000000)]; // default miner tip, equal to median gas price * default gas estimate

const DEFAULT_ARCHER_ETH_TIP = _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.JSBI.BigInt(DEFAULT_ARCHER_GAS_ESTIMATE.mul(DEFAULT_ARCHER_GAS_PRICES[4]).toString());

/***/ }),

/***/ 9361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ NETWORK_ICON),
/* harmony export */   "z": () => (/* binding */ NETWORK_LABEL)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);

const SmartBCH = 'https://raw.githubusercontent.com/mistswapdex/icons/master/network/smartbch.jpg';
const SmartBCHAmber = 'https://raw.githubusercontent.com/mistswapdex/icons/master/network/smartbch_amber.jpg';
const NETWORK_ICON = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: SmartBCH,
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: SmartBCHAmber
};
const NETWORK_LABEL = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: 'smartBCH',
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: 'Amber Testnet'
};

/***/ }),

/***/ 7491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Vp": () => (/* binding */ SUPPORTED_WALLETS),
  "Lj": () => (/* binding */ injected),
  "L5": () => (/* binding */ network)
});

// EXTERNAL MODULE: external "@mistswapdex/sdk"
var sdk_ = __webpack_require__(9652);
// EXTERNAL MODULE: external "@web3-react/injected-connector"
var injected_connector_ = __webpack_require__(7290);
// EXTERNAL MODULE: external "@web3-react/abstract-connector"
var abstract_connector_ = __webpack_require__(5008);
// EXTERNAL MODULE: external "tiny-invariant"
var external_tiny_invariant_ = __webpack_require__(4050);
var external_tiny_invariant_default = /*#__PURE__*/__webpack_require__.n(external_tiny_invariant_);
;// CONCATENATED MODULE: ./src/entities/NetworkConnector.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RequestError extends Error {
  constructor(message, code, data) {
    super(message);
    this.code = code;
    this.data = data;
  }

}

class MiniRpcProvider {
  constructor(chainId, url, batchWaitTimeMs) {
    _defineProperty(this, "isMetaMask", false);

    _defineProperty(this, "chainId", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "host", void 0);

    _defineProperty(this, "path", void 0);

    _defineProperty(this, "batchWaitTimeMs", void 0);

    _defineProperty(this, "nextId", 1);

    _defineProperty(this, "batchTimeoutId", null);

    _defineProperty(this, "batch", []);

    _defineProperty(this, "clearBatch", async () => {
      console.debug('Clearing batch', this.batch);
      const batch = this.batch;
      this.batch = [];
      this.batchTimeoutId = null;
      let response;

      try {
        response = await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify(batch.map(item => item.request))
        });
      } catch (error) {
        batch.forEach(({
          reject
        }) => reject(new Error('Failed to send batch call')));
        return;
      }

      if (!response.ok) {
        batch.forEach(({
          reject
        }) => reject(new RequestError(`${response.status}: ${response.statusText}`, -32000)));
        return;
      }

      let json;

      try {
        json = await response.json();
      } catch (error) {
        batch.forEach(({
          reject
        }) => reject(new Error('Failed to parse JSON response')));
        return;
      }

      const byKey = batch.reduce((memo, current) => {
        memo[current.request.id] = current;
        return memo;
      }, {});

      for (const result of json) {
        const {
          resolve,
          reject,
          request: {
            method
          }
        } = byKey[result.id];

        if (resolve && reject) {
          if ('error' in result) {
            var _result$error, _result$error2, _result$error3;

            reject(new RequestError(result === null || result === void 0 ? void 0 : (_result$error = result.error) === null || _result$error === void 0 ? void 0 : _result$error.message, result === null || result === void 0 ? void 0 : (_result$error2 = result.error) === null || _result$error2 === void 0 ? void 0 : _result$error2.code, result === null || result === void 0 ? void 0 : (_result$error3 = result.error) === null || _result$error3 === void 0 ? void 0 : _result$error3.data));
          } else if ('result' in result) {
            resolve(result.result);
          } else {
            reject(new RequestError(`Received unexpected JSON-RPC response to ${method} request.`, -32000, result));
          }
        }
      }
    });

    _defineProperty(this, "sendAsync", (request, callback) => {
      this.request(request.method, request.params).then(result => callback(null, {
        jsonrpc: '2.0',
        id: request.id,
        result
      })).catch(error => callback(error, null));
    });

    _defineProperty(this, "request", async (method, params) => {
      var _this$batchTimeoutId;

      if (typeof method !== 'string') {
        return this.request(method.method, method.params);
      }

      if (method === 'eth_chainId') {
        return `0x${this.chainId.toString(16)}`;
      }

      const promise = new Promise((resolve, reject) => {
        this.batch.push({
          request: {
            jsonrpc: '2.0',
            id: this.nextId++,
            method,
            params
          },
          resolve,
          reject
        });
      });
      this.batchTimeoutId = (_this$batchTimeoutId = this.batchTimeoutId) !== null && _this$batchTimeoutId !== void 0 ? _this$batchTimeoutId : setTimeout(this.clearBatch, this.batchWaitTimeMs);
      return promise;
    });

    this.chainId = chainId;
    this.url = url;
    const parsed = new URL(url);
    this.host = parsed.host;
    this.path = parsed.pathname; // how long to wait to batch calls

    this.batchWaitTimeMs = batchWaitTimeMs !== null && batchWaitTimeMs !== void 0 ? batchWaitTimeMs : 50;
  }

}

class NetworkConnector extends abstract_connector_.AbstractConnector {
  constructor({
    urls,
    defaultChainId
  }) {
    external_tiny_invariant_default()(defaultChainId || Object.keys(urls).length === 1, 'defaultChainId is a required argument with >1 url');
    super({
      supportedChainIds: Object.keys(urls).map(k => Number(k))
    });

    _defineProperty(this, "providers", void 0);

    _defineProperty(this, "currentChainId", void 0);

    this.currentChainId = defaultChainId || Number(Object.keys(urls)[0]);
    this.providers = Object.keys(urls).reduce((accumulator, chainId) => {
      accumulator[Number(chainId)] = new MiniRpcProvider(Number(chainId), urls[Number(chainId)]);
      return accumulator;
    }, {});
  }

  get provider() {
    return this.providers[this.currentChainId];
  }

  async activate() {
    return {
      provider: this.providers[this.currentChainId],
      chainId: this.currentChainId,
      account: null
    };
  }

  async getProvider() {
    return this.providers[this.currentChainId];
  }

  async getChainId() {
    return this.currentChainId;
  }

  async getAccount() {
    return null;
  }

  deactivate() {
    return;
  }

}
;// CONCATENATED MODULE: ./src/config/rpc.ts

const RPC = {
  [sdk_.ChainId.SMARTBCH]: 'https://smartbch.fountainhead.cash/mainnet',
  [sdk_.ChainId.SMARTBCH_AMBER]: 'https://moeing.tech:9545'
};
/* harmony default export */ const rpc = (RPC);
;// CONCATENATED MODULE: ./src/config/wallets.ts




const network = new NetworkConnector({
  defaultChainId: sdk_.ChainId.SMARTBCH,
  urls: rpc
});
const supportedChainIds = Object.values(sdk_.ChainId);
const injected = new injected_connector_.InjectedConnector({
  supportedChainIds
});
const SUPPORTED_WALLETS = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'injected.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  }
  /*
  WALLET_CONNECT: {
    connector: async () => {
      const WalletConnectConnector = (await import('@web3-react/walletconnect-connector')).WalletConnectConnector
      return new WalletConnectConnector({
        rpc: RPC,
        bridge: 'https://bridge.walletconnect.org',
        qrcode: true,
        supportedChainIds: [
          ChainId.SMARTBCH,
          ChainId.SMARTBCH_AMBER,
        ],
      })
    },
    name: 'WalletConnect',
    iconName: 'wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
  },
  KEYSTONE: {
    connector: async () => {
      const KeystoneConnector = (await import('@keystonehq/keystone-connector')).KeystoneConnector
      return new KeystoneConnector({
        chainId: ChainId.SMARTBCH,
        url: RPC[ChainId.SMARTBCH],
      })
    },
    name: 'Keystone',
    iconName: 'keystone.png',
    description: 'Connect to Keystone hardware wallet.',
    href: null,
    color: '#4196FC',
    mobile: true,
  },
  LATTICE: {
    connector: async () => {
      const LatticeConnector = (await import('@web3-react/lattice-connector')).LatticeConnector
      return new LatticeConnector({
        chainId: ChainId.SMARTBCH,
        url: RPC[ChainId.SMARTBCH],
        appName: 'MistSwap',
      })
    },
    name: 'Lattice',
    iconName: 'lattice.png',
    description: 'Connect to GridPlus Wallet.',
    href: null,
    color: '#40a9ff',
    mobile: true,
  },
  WALLET_LINK: {
    connector: async () => {
      const WalletLinkConnector = (await import('@web3-react/walletlink-connector')).WalletLinkConnector
      return new WalletLinkConnector({
        url: RPC[ChainId.SMARTBCH],
        appName: 'MistSwap',
        appLogoUrl: 'https://raw.githubusercontent.com/mistswapdex/art/master/sushi/logo-256x256.png',
      })
    },
    name: 'Coinbase Wallet',
    iconName: 'coinbase.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5',
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbase.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true,
  },
  FORTMATIC: {
    connector: async () => {
      const FortmaticConnector = (await import('@web3-react/fortmatic-connector')).FortmaticConnector
      return new FortmaticConnector({
        apiKey: process.env.NEXT_PUBLIC_FORTMATIC_API_KEY ?? '',
        chainId: 1,
      })
    },
    name: 'Fortmatic',
    iconName: 'fortmatic.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true,
  },
  Portis: {
    connector: async () => {
      const PortisConnector = (await import('@web3-react/portis-connector')).PortisConnector
      return new PortisConnector({
        dAppId: process.env.NEXT_PUBLIC_PORTIS_ID ?? '',
        networks: [ChainId.SMARTBCH],
      })
    },
    name: 'Portis',
    iconName: 'portis.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true,
  },
  Torus: {
    connector: async () => {
      const TorusConnector = (await import('@web3-react/torus-connector')).TorusConnector
      return new TorusConnector({
        chainId: ChainId.SMARTBCH,
      })
    },
    name: 'Torus',
    iconName: 'torus.png',
    description: 'Login using Torus hosted wallet',
    href: null,
    color: '#315CF5',
    mobile: true,
  },
  Binance: {
    connector: async () => {
      const BscConnector = (await import('@binance-chain/bsc-connector')).BscConnector
      return new BscConnector({
        supportedChainIds: [56],
      })
    },
    name: 'Binance',
    iconName: 'bsc.jpg',
    description: 'Login using Binance hosted wallet',
    href: null,
    color: '#F0B90B',
    mobile: true,
  },
  */

};

/***/ }),

/***/ 3302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getExplorerLink)
/* harmony export */ });
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9652);
/* harmony import */ var _mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__);
 // Multichain Explorer

const builders = {
  smartscan: (chainName, data, type) => {
    const prefix = `https://smartscan.cash`;

    switch (type) {
      case 'transaction':
        return `${prefix}/tx/${data}`;

      default:
        return `${prefix}/${type}/${data}`;
    }
  }
};
const chains = {
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH]: {
    chainName: '',
    builder: builders.smartscan
  },
  [_mistswapdex_sdk__WEBPACK_IMPORTED_MODULE_0__.ChainId.SMARTBCH_AMBER]: {
    chainName: 'amber',
    builder: builders.smartscan
  }
};
function getExplorerLink(chainId, data, type) {
  const chain = chains[chainId];
  return chain.builder(chain.chainName, data, type);
}

/***/ }),

/***/ 3016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCopyClipboard)
/* harmony export */ });
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8929);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useCopyClipboard(timeout = 500) {
  const {
    0: isCopied,
    1: setIsCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const staticCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(text => {
    const didCopy = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default()(text);
    setIsCopied(didCopy);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
      return () => {
        clearTimeout(hide);
      };
    }

    return undefined;
  }, [isCopied, setIsCopied, timeout]);
  return [isCopied, staticCopy];
}

/***/ }),

/***/ 4751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // modified from https://usehooks.com/usePrevious/

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Store current value in ref

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

/***/ })

};
;
//# sourceMappingURL=3746.js.map