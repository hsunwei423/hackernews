webpackHotUpdate_N_E("pages/top",{

/***/ "./pages/top.tsx":
/*!***********************!*\
  !*** ./pages/top.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/http */ "./api/http.tsx");
/* harmony import */ var _components_story__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/story */ "./components/story.tsx");
var _jsxFileName = "C:\\Users\\Weihsun\\Desktop\\projects\\hackernews\\pages\\top.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Top() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      storyIds = _useState[0],
      setStoryIds = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      page = _useState3[0],
      setPage = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_api_http__WEBPACK_IMPORTED_MODULE_3__["getTopStoryIds"])().then(function (res) {
      setStoryIds(res.data);
    });
  }, []);

  var handlePage = function handlePage(page, pageSize) {
    setIndex(page * 10 - 10);
    setPage(page); // page 1: 0 ~ 9
    // page 2: 10 ~ 19
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, storyIds.slice(index, index + 10).map(function (e, index) {
    return __jsx(_components_story__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      storyId: e,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    });
  }), storyIds.length != 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    style: {
      alignContent: 'center'
    },
    total: 50,
    pageSize: 9,
    current: page,
    onChange: handlePage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }));
}

_s(Top, "8g/z7cO5BmIyPDtUaqXSBTAvtOk=");

_c = Top;

var _c;

$RefreshReg$(_c, "Top");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9wLnRzeCJdLCJuYW1lcyI6WyJUb3AiLCJ1c2VTdGF0ZSIsInN0b3J5SWRzIiwic2V0U3RvcnlJZHMiLCJpbmRleCIsInNldEluZGV4IiwicGFnZSIsInNldFBhZ2UiLCJ1c2VFZmZlY3QiLCJnZXRUb3BTdG9yeUlkcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaGFuZGxlUGFnZSIsInBhZ2VTaXplIiwic2xpY2UiLCJtYXAiLCJlIiwibGVuZ3RoIiwiYWxpZ25Db250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ25CQyxRQURtQjtBQUFBLE1BQ1RDLFdBRFM7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsQ0FBRCxDQUZSO0FBQUEsTUFFbkJHLEtBRm1CO0FBQUEsTUFFWkMsUUFGWTs7QUFBQSxtQkFHRkosc0RBQVEsQ0FBQyxDQUFELENBSE47QUFBQSxNQUduQkssSUFIbUI7QUFBQSxNQUdiQyxPQUhhOztBQUsxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLG9FQUFjLEdBQ1RDLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVFIsaUJBQVcsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFMLENBQVg7QUFDSCxLQUhMO0FBSUgsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDUCxJQUFELEVBQWVRLFFBQWYsRUFBb0M7QUFDbkRULFlBQVEsQ0FBQ0MsSUFBSSxHQUFHLEVBQVAsR0FBWSxFQUFiLENBQVI7QUFDQUMsV0FBTyxDQUFDRCxJQUFELENBQVAsQ0FGbUQsQ0FJbkQ7QUFDQTtBQUNILEdBTkQ7O0FBUUEsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUosUUFBUSxDQUFDYSxLQUFULENBQWVYLEtBQWYsRUFBc0JBLEtBQUssR0FBRyxFQUE5QixFQUFrQ1ksR0FBbEMsQ0FBc0MsVUFBQ0MsQ0FBRCxFQUFJYixLQUFKO0FBQUEsV0FDbEMsTUFBQyx5REFBRDtBQUNJLFNBQUcsRUFBRUEsS0FEVDtBQUVJLGFBQU8sRUFBRWEsQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtDO0FBQUEsR0FBdEMsQ0FGUixFQVNNZixRQUFRLENBQUNnQixNQUFULElBQW1CLENBQW5CLElBQ0UsTUFBQywrQ0FBRDtBQUNJLFNBQUssRUFBRTtBQUNIQyxrQkFBWSxFQUFFO0FBRFgsS0FEWDtBQUlJLFNBQUssRUFBRSxFQUpYO0FBS0ksWUFBUSxFQUFFLENBTGQ7QUFNSSxXQUFPLEVBQUViLElBTmI7QUFPSSxZQUFRLEVBQUVPLFVBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZSLENBREo7QUF1Qkg7O0dBM0N1QmIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3AuMmM3ZTQyMmRiYjA1MTliYjg3OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBnZXRUb3BTdG9yeUlkcyB9IGZyb20gJy4uL2FwaS9odHRwJ1xyXG5pbXBvcnQgU3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9zdG9yeSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3AoKSB7XHJcbiAgICBjb25zdCBbc3RvcnlJZHMsIHNldFN0b3J5SWRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFRvcFN0b3J5SWRzKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFN0b3J5SWRzKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYWdlID0gKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KHBhZ2UgKiAxMCAtIDEwKTtcclxuICAgICAgICBzZXRQYWdlKHBhZ2UpO1xyXG5cclxuICAgICAgICAvLyBwYWdlIDE6IDAgfiA5XHJcbiAgICAgICAgLy8gcGFnZSAyOiAxMCB+IDE5XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUlkcy5zbGljZShpbmRleCwgaW5kZXggKyAxMCkubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeUlkPXtlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgc3RvcnlJZHMubGVuZ3RoICE9IDAgJiZcclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXs5fVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9