"use strict";
exports.id = 2492;
exports.ids = [2492];
exports.modules = {

/***/ 4624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChartCard)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7735);
/* harmony import */ var _ColoredNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var _components_LineGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function ChartCard({
  header,
  subheader,
  figure,
  change,
  chart,
  currentTimespan,
  timespans,
  setTimespan
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "w-full p-5 space-y-4 font-bold border rounded bg-dark-900 border-dark-700",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "text-xs text-secondary",
          children: subheader
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "text-high-emphesis",
          children: header
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "flex justify-end text-2xl text-high-emphesis",
          children: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(figure, true, false)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-row items-center justify-end",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ColoredNumber__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            number: change,
            percent: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "ml-3 font-normal",
            children: "Past 24 Hours"
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "py-8 h-36",
      children: chart && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_LineGraph__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        data: chart,
        stroke: {
          gradient: {
            from: '#27B0E6',
            to: '#FA52A0'
          }
        },
        strokeWidth: 1
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "flex flex-row justify-end space-x-4",
      children: timespans.map((timespan, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(timespan === currentTimespan ? 'text-blue bg-blue bg-opacity-30 rounded-xl font-bold border border-blue border-opacity-50' : 'text-secondary', 'text-sm px-3 py-0.5'),
        onClick: () => setTimespan(timespan),
        children: timespan
      }, i))
    })]
  });
}

/***/ }),

/***/ 3555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TransactionList)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7735);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(906);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function TransactionList({
  transactions
}) {
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    Header: 'Type',
    accessor: 'symbols',
    Cell: props => {
      var _props$value, _props$value2;

      return `Swap ${(_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.incoming} for ${(_props$value2 = props.value) === null || _props$value2 === void 0 ? void 0 : _props$value2.outgoing}`;
    },
    align: 'left'
  }, {
    Header: 'Value',
    accessor: 'value',
    Cell: props => (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(props.value, true),
    align: 'right'
  }, {
    Header: 'Incoming',
    accessor: 'incomingAmt',
    align: 'right'
  }, {
    Header: 'Outgoing',
    accessor: 'outgoingAmt',
    align: 'right'
  }, {
    Header: 'Address',
    accessor: 'address',
    Cell: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
      href: `https://etherscan.com/address/${props.value}`,
      children: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .shortenAddress */ .Xn)(props.value)
    }),
    align: 'right'
  }, {
    Header: 'Time',
    accessor: 'time',
    Cell: props => (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .formatDateAgo */ .s4)(props.value),
    align: 'right'
  }], []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Table, {
      columns: columns,
      data: transactions !== null && transactions !== void 0 ? transactions : []
    })
  });
}

function Table({
  columns,
  data
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({
    columns,
    data,
    defaultCanSort: false
  }, react_table__WEBPACK_IMPORTED_MODULE_2__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_2__.usePagination);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "w-full overflow-x-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", _objectSpread(_objectSpread({
        className: "w-auto min-w-full border-collapse table-fixed"
      }, getTableProps()), {}, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("thead", {
          className: "w-full h-12 border-b border-gray-800",
          children: headerGroups.map(headerGroup => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map((column, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(i === 0 && 'pl-2', i === headerGroup.headers.length - 1 && 'pr-2'),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)('w-full font-bold'),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(column.align === 'right' && `justify-end`, column.align === 'left' && 'justify-start', i !== 0 && 'ml-2', i !== columns.length - 1 && 'mr-2', 'whitespace-nowrap flex flex-row xl:mx-auto'),
                    children: column.render('Header')
                  })
                })
              })
            })))
          })))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("tbody", _objectSpread(_objectSpread({
          className: "w-full border-t border-b border-gray-800"
        }, getTableBodyProps()), {}, {
          children: page.map((row, i) => {
            prepareRow(row);
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
              children: row.cells.map((cell, cI) => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", _objectSpread(_objectSpread({
                  className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(i === 0 && 'pt-4', 'pl-0 pr-0 pb-4')
                }, cell.getCellProps()), {}, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "flex items-center text-secondary",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(cell.column.align === 'right' && `text-right`, cell.column.align === 'left' && 'text-left', cI !== 0 && 'ml-2', cI !== row.cells.length - 1 && 'mr-2', 'w-full xl:mx-auto whitespace-nowrap'),
                      children: cell.render('Cell')
                    })
                  })
                }));
              })
            }));
          })
        }))]
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex justify-between mt-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "text-sm text-secondary",
          children: `${pageSize * pageIndex + 1}-${pageSize * (pageIndex + 1)} of ${rows.length}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          onClick: () => previousPage(),
          className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(!canPreviousPage ? 'opacity-50 hover:cursor-default' : '', 'ml-3'),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .ArrowLeftIcon */ .Y4O, {
            width: 16,
            height: 16
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          onClick: () => nextPage(),
          className: (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .classNames */ .AK)(!canNextPage ? 'opacity-50 hover:cursor-default' : '', 'ml-3'),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .ArrowRightIcon */ .LZ3, {
            width: 16,
            height: 16
          })
        })]
      })]
    })]
  });
}

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

/***/ })

};
;
//# sourceMappingURL=2492.js.map