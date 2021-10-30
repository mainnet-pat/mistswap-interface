"use strict";
exports.id = 8861;
exports.ids = [8861];
exports.modules = {

/***/ 8861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(906);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7735);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6049);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Table({
  columns,
  data,
  columnsHideable = [],
  defaultSortBy = {
    id: '',
    desc: false
  },
  link,
  loading = true
}) {
  const {
    0: isHidden,
    1: setHidden
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(columnsHideable.length === 0 ? false : true);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    allColumns,
    state: {
      pageIndex,
      pageSize
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({
    columns,
    data,
    defaultCanSort: false,
    initialState: {
      hiddenColumns: columnsHideable,
      sortBy: [{
        id: defaultSortBy.id,
        desc: defaultSortBy.desc
      }]
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_1__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_1__.usePagination);

  const toggleHide = e => {
    const list = allColumns.filter(column => columnsHideable.find(c => c === column.id));
    list.forEach(column => column.toggleHidden(!isHidden));
    setHidden(!isHidden);
    e.stopPropagation();
  };

  const getProperty = (obj, prop) => {
    var parts = prop.split('.');

    if (Array.isArray(parts)) {
      var last = parts.pop(),
          l = parts.length,
          i = 1,
          current = parts[0];

      while ((obj = obj[current]) && i < l) {
        current = parts[i];
        i++;
      }

      if (obj) {
        return obj[last];
      }
    } else {
      throw 'parts is not valid array';
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "w-full overflow-x-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", _objectSpread(_objectSpread({
        className: "w-auto min-w-full border-collapse table-fixed"
      }, getTableProps()), {}, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("thead", {
          children: headerGroups.map(headerGroup => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map((column, i, columns) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(i === 0 && 'pl-2', i === headerGroup.headers.length - 1 && 'pr-2', 'select-none w-full'),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "flex flex-row pb-2 text-sm text-secondary",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(i !== 0 && column.align === 'right' && `justify-end`, i !== 0 && column.align === 'left' && 'justify-start', !column.align && (i !== 0 ? 'justify-start' : 'justify-end'), i !== 0 && 'ml-2', i !== columns.length - 1 && 'mr-2', i === 0 && 'flex-row-reverse', i === 0 ? column.align === 'right' ? 'justify-start' : 'justify-end' : '', 'w-full flex whitespace-nowrap xl:mx-auto'),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)('flex items-center', column.isSorted ? 'block' : 'hidden'),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                        className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)('fill-current text-secondary', !column.isSortedDesc && 'rotate-180 transform'),
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "w-5 h-5",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          })
                        })
                      })
                    }), column.render('Header'), column.HideHeader && isHidden && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                      onClick: e => toggleHide(e),
                      className: "ml-1 text-dark-700",
                      children: column.render('HideHeader')
                    })]
                  })
                })
              })
            }), i))
          }), "tr"))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
          children: page.map((row, i) => {
            prepareRow(row);
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
              children: row.cells.map((cell, cI) => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("td", _objectSpread(_objectSpread({
                  className: "pb-3 pl-0 pr-0"
                }, cell.getCellProps()), {}, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    onClick: link ? () => router.push(link.href + getProperty(cell.row.values, link.id)) : () => {},
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(cI === 0 && 'rounded-l pl-4', cI === row.cells.length - 1 && 'rounded-r pr-4', link && 'cursor-pointer', 'h-20 text-primary bg-dark-900 flex items-center'),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                        className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(cell.column.align === 'right' && `text-right`, cell.column.align === 'left' && 'text-left', cI !== 0 && 'ml-2', cI !== row.cells.length - 1 && 'mr-2', 'w-full xl:mx-auto'),
                        children: cell.render('Cell')
                      })
                    })
                  })
                }), cI);
              })
            }), i);
          })
        }))]
      }))
    }), (data === null || data === void 0 ? void 0 : data.length) > 10 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex justify-between w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex text-sm font-bold text-secondary",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: "Rows per page: "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("select", {
          value: pageSize,
          onChange: e => setPageSize(Number(e.target.value)),
          className: "ml-1 bg-transparent",
          children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("option", {
            className: "bg-dark-1000",
            value: pageSize,
            children: pageSize
          }, pageSize))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "text-sm text-secondary",
          children: `${pageSize * pageIndex + 1}-${pageSize * (pageIndex + 1)} of ${rows.length}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
          onClick: () => previousPage(),
          className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(!canPreviousPage ? 'opacity-50 hover:cursor-default' : '', 'ml-3'),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .ArrowLeftIcon */ .Y4O, {
            width: 16,
            height: 16
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
          onClick: () => nextPage(),
          className: (0,_functions__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(!canNextPage ? 'opacity-50 hover:cursor-default' : '', 'ml-3'),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .ArrowRightIcon */ .LZ3, {
            width: 16,
            height: 16
          })
        })]
      })]
    })]
  });
}

/***/ })

};
;
//# sourceMappingURL=8861.js.map