"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/api.tsx":
/*!****************************!*\
  !*** ./components/api.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction MovieList() {\n    _s();\n    const API_ID = \"01bfaed3\";\n    const API_KEY = \"f76a8dd1feb49872198a8499513ec02a\";\n    const url = \"https://api.edamam.com/api/recipes/v2?app_id=\".concat(API_ID, \"&app_key=\").concat(API_KEY, \"&cuisineType=Asian\");\n    const [searchRecipes, setSearchRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(url).then((response)=>response.json()).then((data)=>{\n            console.log(\"API 데이터 확인:\", data);\n            setSearchRecipes(data.hits || []);\n        }).catch((error)=>{\n            console.error(\"API 호출 에러:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Recipes\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\components\\\\api.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: searchRecipes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item.recipe.label\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\components\\\\api.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\components\\\\api.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\components\\\\api.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(MovieList, \"e/1hqS03JyNsYCWI1dnUhZtApwc=\");\n_c = MovieList;\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwaS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUVsQyxTQUFTRzs7SUFDdEIsTUFBTUMsU0FBVTtJQUNoQixNQUFNQyxVQUFXO0lBQ2pCLE1BQU1DLE1BQU0sZ0RBQWtFRCxPQUFsQkQsUUFBTyxhQUFtQixPQUFSQyxTQUFRO0lBRXRGLE1BQU0sQ0FBQ0UsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFckRDLGdEQUFTQSxDQUFDO1FBQ1JPLE1BQU1ILEtBQ0hJLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsZUFBZUY7WUFDM0JMLGlCQUFpQkssS0FBS0csSUFBSSxJQUFJLEVBQUU7UUFDbEMsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQTtZQUNMSixRQUFRSSxLQUFLLENBQUMsY0FBY0E7UUFDOUI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs4QkFDRWQsY0FBY2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN4Qiw4REFBQ0M7c0NBQWdCRixLQUFLRyxNQUFNLENBQUNDLEtBQUs7MkJBQXpCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0EvQndCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkudHN4Pzk5MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVMaXN0KCkge1xyXG4gIGNvbnN0IEFQSV9JRCA9IGAwMWJmYWVkM2A7XHJcbiAgY29uc3QgQVBJX0tFWSA9IGBmNzZhOGRkMWZlYjQ5ODcyMTk4YTg0OTk1MTNlYzAyYWA7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmVkYW1hbS5jb20vYXBpL3JlY2lwZXMvdjI/YXBwX2lkPSR7QVBJX0lEfSZhcHBfa2V5PSR7QVBJX0tFWX0mY3Vpc2luZVR5cGU9QXNpYW5gO1xyXG5cclxuICBjb25zdCBbc2VhcmNoUmVjaXBlcywgc2V0U2VhcmNoUmVjaXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FQSSDrjbDsnbTthLAg7ZmV7J24OicsIGRhdGEpO1xyXG4gICAgICAgIHNldFNlYXJjaFJlY2lwZXMoZGF0YS5oaXRzIHx8IFtdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkg7Zi47LacIOyXkOufrDonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPlJlY2lwZXM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtzZWFyY2hSZWNpcGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtLnJlY2lwZS5sYWJlbH08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW92aWVMaXN0IiwiQVBJX0lEIiwiQVBJX0tFWSIsInVybCIsInNlYXJjaFJlY2lwZXMiLCJzZXRTZWFyY2hSZWNpcGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoaXRzIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImgyIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsInJlY2lwZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/api.tsx\n"));

/***/ })

});