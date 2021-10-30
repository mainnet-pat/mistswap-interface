"use strict";
exports.id = 8268;
exports.ids = [8268];
exports.modules = {

/***/ 8268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LineGraph)
/* harmony export */ });
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3741);
/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_visx_scale__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(617);
/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_visx_shape__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3804);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _visx_gradient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8349);
/* harmony import */ var _visx_gradient__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_visx_gradient__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










function Graph({
  data,
  stroke,
  strokeWidth,
  width,
  height
}) {
  const xScale = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _minBy, _maxBy;

    return (0,_visx_scale__WEBPACK_IMPORTED_MODULE_2__.scaleLinear)({
      domain: [(_minBy = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.minBy)(data, 'x')) === null || _minBy === void 0 ? void 0 : _minBy.x, (_maxBy = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.maxBy)(data, 'x')) === null || _maxBy === void 0 ? void 0 : _maxBy.x],
      range: [0, width]
    });
  }, [JSON.stringify(data), width]);
  const yScale = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _maxBy2, _minBy2;

    return (0,_visx_scale__WEBPACK_IMPORTED_MODULE_2__.scaleLinear)({
      domain: [(_maxBy2 = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.maxBy)(data, 'y')) === null || _maxBy2 === void 0 ? void 0 : _maxBy2.y, (_minBy2 = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.minBy)(data, 'y')) === null || _minBy2 === void 0 ? void 0 : _minBy2.y],
      range: [0, height]
    });
  }, [JSON.stringify(data), height]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "w-full h-full",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
      width: width,
      height: height,
      children: ['gradient' in stroke && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_visx_gradient__WEBPACK_IMPORTED_MODULE_5__.LinearGradient, {
        id: "gradient",
        from: stroke.gradient.from,
        to: stroke.gradient.to,
        vertical: false
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_visx_shape__WEBPACK_IMPORTED_MODULE_3__.LinePath, {
        data: data,
        x: d => {
          var _xScale;

          return (_xScale = xScale(d.x)) !== null && _xScale !== void 0 ? _xScale : 0;
        },
        y: d => {
          var _yScale;

          return (_yScale = yScale(d.y)) !== null && _yScale !== void 0 ? _yScale : 0;
        },
        stroke: 'solid' in stroke ? stroke.solid : "url('#gradient')",
        strokeWidth: strokeWidth
      })]
    })
  });
}

function LineGraph({
  data,
  stroke = {
    solid: '#0993EC'
  },
  strokeWidth = 2
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: data && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: ({
        width,
        height
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Graph, {
        data: data,
        stroke: stroke,
        strokeWidth: strokeWidth,
        width: width,
        height: height
      })
    })
  });
}

/***/ })

};
;
//# sourceMappingURL=8268.js.map