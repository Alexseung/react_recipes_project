"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipe",{

/***/ "./pages/recipe.tsx":
/*!**************************!*\
  !*** ./pages/recipe.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecipeList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.mjs\");\n/* harmony import */ var _components_showSearchRecipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/showSearchRecipe */ \"./components/showSearchRecipe.tsx\");\n/* harmony import */ var _components_recipePageMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/recipePageMenu */ \"./components/recipePageMenu.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction RecipeList() {\n    _s();\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [ingredient, setIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchIngredient, setSearchIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAPIKeys = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:3333/cloud/yoon/recipeAPI\");\n                if (!response.ok) {\n                    throw new Error(\"API 키를 가져오는 데 실패했습니다.\");\n                }\n                const data = await response.json();\n                console.log(data);\n                // 서버리스로 올린 api id, key 가져옴\n                const { API_ID, API_KEY } = data.datas;\n                const queryIngredient = searchIngredient ? \"&q=\".concat(searchIngredient) : \"\";\n                const url = \"https://api.edamam.com/api/recipes/v2?type=public&app_id=\".concat(API_ID, \"&app_key=\").concat(API_KEY).concat(queryIngredient);\n                const recipesResponse = await fetch(url);\n                if (!recipesResponse.ok) {\n                    throw new Error(\"레시피를 가져오는 데 실패했습니다.\");\n                }\n                const recipesData = await recipesResponse.json();\n                console.log(recipesData);\n                const recipeList = recipesData.hits.map((item)=>item.recipe);\n                setRecipes(recipeList);\n            } catch (err) {\n                console.error(err);\n                setError(err.message);\n            }\n        };\n        fetchAPIKeys();\n    }, [\n        searchIngredient\n    ]); // 검색어 즉, searchIngredient가 변경되면 호출\n    const handleSearch = ()=>{\n        setSearchIngredient(ingredient);\n        setIngredient(\"\");\n    };\n    const activeEnter = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSearch();\n        }\n    };\n    const [activeBtn, setActiveBtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"오류: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: ingredient,\n                        onChange: (e)=>setIngredient(e.target.value),\n                        placeholder: \"What should I have?\",\n                        onKeyDown: (e)=>activeEnter(e),\n                        className: \"   w-rem-30 h-12 border-2 border-purple-300    mt-10 rounded-md outline-none pl-4 text-xl\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSearch,\n                        className: \"h-14 mt-10 ml-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                            color: \"purple.300\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_recipePageMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    menuButton: setActiveBtn,\n                    activeBtn: activeBtn\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            activeBtn === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"1번 nutrition 버튼\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                lineNumber: 86,\n                columnNumber: 27\n            }, this),\n            activeBtn === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"2번 allergies 버튼\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                lineNumber: 87,\n                columnNumber: 27\n            }, this),\n            activeBtn === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"3번 vegetarian 버튼\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                lineNumber: 88,\n                columnNumber: 27\n            }, this),\n            activeBtn === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: recipes.map((recipe, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_showSearchRecipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: recipe.label,\n                        ingredients: Object.keys(recipe.ingredients).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: recipe.ingredients[key].text\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, void 0)),\n                        // Object.keys(객체이름); ==> console.log(Object.keys(객체이름))  ==> '['키','여기에','나옴']'\n                        dishType: recipe.dishType,\n                        image: recipe.image\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmdmr\\\\Desktop\\\\coding\\\\myProject\\\\Health_recipe\\\\pages\\\\recipe.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n} // 이미지 느리게 나오는것들 --> 사이트 로고 같은거 만들어서 그거 이미지에 박아놓고  suspensce로 그거 먼저 보이게 하고 로딩되면 이미지 띄움\n // lazy suspence로 해결해보기\n_s(RecipeList, \"AOzkKcDevAGB4E0cC+drfiXABzM=\");\n_c = RecipeList;\nvar _c;\n$RefreshReg$(_c, \"RecipeList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQiw4REFBQ3RELG9FQUFnQkE7d0JBRWZ1RCxPQUFPeEIsT0FBT3dCLEtBQUs7d0JBQ25CQyxhQUFhQyxPQUFPQyxJQUFJLENBQUMzQixPQUFPeUIsV0FBVyxFQUFFM0IsR0FBRyxDQUFDUSxDQUFBQSxvQkFDL0MsOERBQUNzQjswQ0FBYzVCLE9BQU95QixXQUFXLENBQUNuQixJQUFJLENBQUN1QixJQUFJOytCQUFsQ3ZCOzs7Ozt3QkFFWCxnRkFBZ0Y7d0JBQ2hGd0IsVUFBVTlCLE9BQU84QixRQUFRO3dCQUN6QkMsT0FBTy9CLE9BQU8rQixLQUFLO3VCQVBkUjs7Ozs7Ozs7Ozs7Ozs7OztBQWNuQixFQUVBLHNGQUFzRjtDQUN0Rix1QkFBdUI7R0ExR0NwRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWNpcGUudHN4P2U0MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NlYXJjaEljb259IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5pbXBvcnQgU2hvd1NlYXJjaFJlY2lwZSBmcm9tICcuLi9jb21wb25lbnRzL3Nob3dTZWFyY2hSZWNpcGUnO1xyXG5pbXBvcnQgUmVjaXBlUGFnZU1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9yZWNpcGVQYWdlTWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVMaXN0KCkge1xyXG4gIGNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbmdyZWRpZW50LCBzZXRJbmdyZWRpZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VhcmNoSW5ncmVkaWVudCwgc2V0U2VhcmNoSW5ncmVkaWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEFQSUtleXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICdodHRwOi8vbG9jYWxob3N0OjMzMzMvY2xvdWQveW9vbi9yZWNpcGVBUEknXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FQSSDtgqTrpbwg6rCA7KC47Jik64qUIOuNsCDsi6TtjKjtlojsirXri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIC8vIOyEnOuyhOumrOyKpOuhnCDsmKzrprAgYXBpIGlkLCBrZXkg6rCA7KC47Ji0XHJcbiAgICAgICAgY29uc3Qge0FQSV9JRCwgQVBJX0tFWX0gPSBkYXRhLmRhdGFzO1xyXG5cclxuICAgICAgICBjb25zdCBxdWVyeUluZ3JlZGllbnQgPSBzZWFyY2hJbmdyZWRpZW50XHJcbiAgICAgICAgICA/IGAmcT0ke3NlYXJjaEluZ3JlZGllbnR9YFxyXG4gICAgICAgICAgOiAnJztcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmVkYW1hbS5jb20vYXBpL3JlY2lwZXMvdjI/dHlwZT1wdWJsaWMmYXBwX2lkPSR7QVBJX0lEfSZhcHBfa2V5PSR7QVBJX0tFWX0ke3F1ZXJ5SW5ncmVkaWVudH1gO1xyXG4gICAgICAgIGNvbnN0IHJlY2lwZXNSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgaWYgKCFyZWNpcGVzUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcign66CI7Iuc7ZS866W8IOqwgOyguOyYpOuKlCDrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVjaXBlc0RhdGEgPSBhd2FpdCByZWNpcGVzUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2lwZXNEYXRhKTtcclxuICAgICAgICBjb25zdCByZWNpcGVMaXN0ID0gcmVjaXBlc0RhdGEuaGl0cy5tYXAoaXRlbSA9PiBpdGVtLnJlY2lwZSk7XHJcbiAgICAgICAgc2V0UmVjaXBlcyhyZWNpcGVMaXN0KTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaEFQSUtleXMoKTtcclxuICB9LCBbc2VhcmNoSW5ncmVkaWVudF0pOyAvLyDqsoDsg4nslrQg7KaJLCBzZWFyY2hJbmdyZWRpZW506rCAIOuzgOqyveuQmOuptCDtmLjstpxcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5ncmVkaWVudChpbmdyZWRpZW50KTtcclxuICAgIHNldEluZ3JlZGllbnQoJycpO1xyXG4gIH07XHJcbiAgY29uc3QgYWN0aXZlRW50ZXIgPSBlID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBoYW5kbGVTZWFyY2goKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbYWN0aXZlQnRuLCBzZXRBY3RpdmVCdG5dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtlcnJvciAmJiA8cD7smKTrpZg6IHtlcnJvcn08L3A+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgdmFsdWU9e2luZ3JlZGllbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbmdyZWRpZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdXaGF0IHNob3VsZCBJIGhhdmU/J1xyXG4gICAgICAgICAgb25LZXlEb3duPXtlID0+IGFjdGl2ZUVudGVyKGUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdcclxuICAgICAgICAgIHctcmVtLTMwIGgtMTIgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS0zMDAgXHJcbiAgICAgICAgICBtdC0xMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBwbC00IHRleHQteGwnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0gY2xhc3NOYW1lPSdoLTE0IG10LTEwIG1sLTInPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gY29sb3I9J3B1cnBsZS4zMDAnIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgPFJlY2lwZVBhZ2VNZW51IG1lbnVCdXR0b249e3NldEFjdGl2ZUJ0bn0gYWN0aXZlQnRuPXthY3RpdmVCdG59IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qICAqL31cclxuXHJcbiAgICAgIHthY3RpdmVCdG4gPT09IDEgJiYgPGRpdj4x67KIIG51dHJpdGlvbiDrsoTtirw8L2Rpdj59XHJcbiAgICAgIHthY3RpdmVCdG4gPT09IDIgJiYgPGRpdj4y67KIIGFsbGVyZ2llcyDrsoTtirw8L2Rpdj59XHJcbiAgICAgIHthY3RpdmVCdG4gPT09IDMgJiYgPGRpdj4z67KIIHZlZ2V0YXJpYW4g67KE7Yq8PC9kaXY+fVxyXG5cclxuICAgICAgey8qIOqygOyDiSDqsrDqs7wg7LC9ICovfVxyXG4gICAgICB7YWN0aXZlQnRuID09PSAwICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3JlY2lwZXMubWFwKChyZWNpcGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxTaG93U2VhcmNoUmVjaXBlXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBsYWJlbD17cmVjaXBlLmxhYmVsfVxyXG4gICAgICAgICAgICAgIGluZ3JlZGllbnRzPXtPYmplY3Qua2V5cyhyZWNpcGUuaW5ncmVkaWVudHMpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT57cmVjaXBlLmluZ3JlZGllbnRzW2tleV0udGV4dH08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIC8vIE9iamVjdC5rZXlzKOqwneyytOydtOumhCk7ID09PiBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyjqsJ3ssrTsnbTrpoQpKSAgPT0+ICdbJ+2CpCcsJ+yXrOq4sOyXkCcsJ+uCmOyYtCddJ1xyXG4gICAgICAgICAgICAgIGRpc2hUeXBlPXtyZWNpcGUuZGlzaFR5cGV9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e3JlY2lwZS5pbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8g7J2066+47KeAIOuKkOumrOqyjCDrgpjsmKTripTqsoPrk6QgLS0+IOyCrOydtO2KuCDroZzqs6Ag6rCZ7J2A6rGwIOunjOuTpOyWtOyEnCDqt7jqsbAg7J2066+47KeA7JeQIOuwleyVhOuGk+qzoCAgc3VzcGVuc2Nl66GcIOq3uOqxsCDrqLzsoIAg67O07J206rKMIO2VmOqzoCDroZzrlKnrkJjrqbQg7J2066+47KeAIOudhOybgFxyXG4vLyBsYXp5IHN1c3BlbmNl66GcIO2VtOqysO2VtOuztOq4sFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaEljb24iLCJTaG93U2VhcmNoUmVjaXBlIiwiUmVjaXBlUGFnZU1lbnUiLCJSZWNpcGVMaXN0IiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJlcnJvciIsInNldEVycm9yIiwiaW5ncmVkaWVudCIsInNldEluZ3JlZGllbnQiLCJzZWFyY2hJbmdyZWRpZW50Iiwic2V0U2VhcmNoSW5ncmVkaWVudCIsImZldGNoQVBJS2V5cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiQVBJX0lEIiwiQVBJX0tFWSIsImRhdGFzIiwicXVlcnlJbmdyZWRpZW50IiwidXJsIiwicmVjaXBlc1Jlc3BvbnNlIiwicmVjaXBlc0RhdGEiLCJyZWNpcGVMaXN0IiwiaGl0cyIsIm1hcCIsIml0ZW0iLCJyZWNpcGUiLCJlcnIiLCJtZXNzYWdlIiwiaGFuZGxlU2VhcmNoIiwiYWN0aXZlRW50ZXIiLCJlIiwia2V5IiwiYWN0aXZlQnRuIiwic2V0QWN0aXZlQnRuIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciIsIm1lbnVCdXR0b24iLCJpbmRleCIsImxhYmVsIiwiaW5ncmVkaWVudHMiLCJPYmplY3QiLCJrZXlzIiwibGkiLCJ0ZXh0IiwiZGlzaFR5cGUiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/recipe.tsx\n"));

/***/ })

});