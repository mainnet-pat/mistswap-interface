"use strict";
exports.id = 1441;
exports.ids = [1441];
exports.modules = {

/***/ 1441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4025);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2047);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function Modal({
  isOpen,
  onDismiss,
  minHeight = 0,
  maxHeight = 90,
  initialFocusRef,
  children,
  padding = 5,
  maxWidth = 420
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Transition, {
      appear: true,
      show: isOpen,
      as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Dialog, {
        as: "div",
        onClose: onDismiss,
        className: "fixed inset-0 z-10 overflow-y-hidden backdrop-blur-md",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Dialog.Overlay, {
          className: "fixed inset-0 bg-black backdrop-blur-md opacity-30"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "flex items-center justify-center h-screen px-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "transition-all transform",
              style: {
                width: react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile ? `100%` : '65vw',
                maxWidth: `${maxWidth}px`
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "w-full p-px rounded bg-gradient-to-r from-blue to-pink",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "flex flex-col w-full h-full p-6 overflow-y-hidden rounded bg-dark-900",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    style: {
                      minHeight: `${minHeight}vh`,
                      maxHeight: `${maxHeight}vh`
                    },
                    children: children
                  })
                })
              })
            })
          })
        })]
      })
    })
  });
}

/***/ })

};
;
//# sourceMappingURL=1441.js.map