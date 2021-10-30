"use strict";
exports.id = 2653;
exports.ids = [2653];
exports.modules = {

/***/ 2653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3879);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function MisoInfo({
  name = 'Bad Trip',
  symbol = '$LSD',
  auctionType = 'Batch Auction',
  minRaised = 1380,
  minRaisedUsd = 11040,
  tokenForSale = 20,
  auctionEndDate = 1627044000000
}) {
  const {
    0: remainingTime,
    1: setRemainingTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime(); // Set the date counting down to

      const countDownDate = new Date(auctionEndDate).getTime(); // Find the distance between now and the count down time

      const distance = countDownDate - now; // If the count down is finished, write some text

      if (distance < 0) {
        setRemainingTime('');
        clearInterval(intervalId);
        return;
      } // Time calculations for days, hours, minutes and seconds


      const SECONDS = 1000;
      const MINUTES = SECONDS * 60;
      const HOURS = MINUTES * 60;
      const DAYS = HOURS * 24;
      const days = Math.floor(distance / DAYS);
      const hours = Math.floor(distance % DAYS / HOURS);
      const minutes = Math.floor(distance % HOURS / MINUTES);
      const seconds = Math.floor(distance % MINUTES / SECONDS); // Update display days, hours, minutes and seconds

      const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
      const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
      const displayHours = hours < 10 ? '0' + hours : hours;
      const displayDays = days < 10 ? '0' + days : days;
      let remainingTime = '';
      if (days > 0) remainingTime += displayDays + 'd ';
      if (remainingTime || hours > 0) remainingTime += displayHours + 'h ';
      if (remainingTime || minutes > 0) remainingTime += displayMinutes + 'm ';
      if (remainingTime || seconds > 0) remainingTime += displaySeconds + 's ';
      setRemainingTime(remainingTime + ' Left');
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [auctionEndDate]);

  const formatDate = date => {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addMinutes)(date, date.getTimezoneOffset()), 'MMMM do yyyy, h:mm a');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-row items-end mt-6",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        src: "/images/miso/trident/trident-auction-icon.png",
        width: 85,
        height: 85
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "flex flex-col items-center flex-1 mx-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-base font-bold sm:text-xl",
            children: 'Trident NFT'
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-2xl font-bold tracking-normal text-white sm:text-3xl md:text-5xl sm:tracking-widest",
            children: name
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "px-5 py-1",
        style: {
          borderRadius: 10,
          backgroundColor: '#809090a0',
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold'
        },
        children: symbol
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "grid grid-cols-12 mt-6 divide-x divide-white divide-opacity-50",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col col-span-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "text-sm sm:text-lg",
          children: 'Auction Type'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "text-base font-bold text-white md:text-xl",
          children: auctionType
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
            src: "/images/miso/trident/trident_auction_type.png",
            width: 25,
            height: 25
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "flex flex-col col-span-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mx-auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-sm sm:text-lg",
            children: 'MIN Raised'
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-base font-bold text-white md:text-xl",
            children: `${minRaised} $SUSHI`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-sm sm:text-base",
            children: `$${minRaisedUsd} USD`
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "flex flex-col col-span-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "ml-auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-sm sm:text-lg",
            children: 'Token For Sale'
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-base font-bold text-white md:text-xl",
            children: tokenForSale
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "text-sm sm:text-base",
            children: symbol
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-row mt-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "text-sm sm:text-lg",
          children: 'Auction ends on'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-base font-bold text-white md:text-xl",
          children: [formatDate(new Date(auctionEndDate)), " GMT"]
        }), remainingTime != '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-row items-center text-base",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
            src: "/images/miso/trident/trident_timer.png",
            width: 15,
            height: 15
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "ml-2 text-sm sm:text-lg",
            children: remainingTime
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "ml-5 cursor-pointer md:ml-8",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "https://miso.mistswap.fi/auctions/0x15c5E87Ce788F0dEBcAF70cF1dde69E3Bc3E6Ad1",
          target: "_blank",
          rel: "noreferrer noopener",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
            src: "/images/miso/trident/trident_view_auction.svg",
            width: 91,
            height: 88
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col mt-6",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        children: "About"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        children: "The Trident NFT is introduced as a celebratory piece for the announcement and upcoming release of Sushi\u2019s Trident AMM. This NFT can be redeemed for a 19cm x 19cm 900 tab piece of blotter paper with this Chewy Stoll artwork on the left printed on it."
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MisoInfo);

/***/ })

};
;
//# sourceMappingURL=2653.js.map