"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/InstagramAnalyzer.js":
/*!*********************************************!*\
  !*** ./src/components/InstagramAnalyzer.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _barrel_optimize_names_HelpCircle_Instagram_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=HelpCircle,Instagram!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/instagram.js\");\n/* harmony import */ var _barrel_optimize_names_HelpCircle_Instagram_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=HelpCircle,Instagram!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-help.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n //icon kullanımı\n // animasyyonlar ve geçişler\nconst InstagramAnalyzer = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showTip, setShowTip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>setShowTip(true), 1000); // 3 saniye sonra showtip true olur ve tip kullanıcıya gösterilir. Burada 3 saniye alınıyor.\n        return ()=>clearTimeout(timer);\n    }, []);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        router.push(\"/results/\".concat(username));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-md space-y-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    y: -50\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"text-center space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-24 h-24 mx-auto bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-2xl p-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center w-full h-full bg-gray-900 rounded-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HelpCircle_Instagram_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"h-12 w-12 text-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500\",\n                        children: \"Instagram Profil Analizi\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-300 text-xl\",\n                        children: \"Analiz i\\xe7in kullanıcı adını girin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.form, {\n                onSubmit: handleSubmit,\n                className: \"mt-8 space-y-6\",\n                initial: {\n                    opacity: 0,\n                    scale: 0.8\n                },\n                animate: {\n                    opacity: 1,\n                    scale: 1\n                },\n                transition: {\n                    delay: 0.3,\n                    duration: 0.5\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-md shadow-sm -space-y-px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Instagram kullanıcı adı\",\n                            value: username,\n                            onChange: (e)=>setUsername(e.target.value),\n                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm bg-gray-800\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200\",\n                            children: \"Analiz Et\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 text-center\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                lineNumber: 69,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: showTip && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        y: 20\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    exit: {\n                        opacity: 0,\n                        y: -20\n                    },\n                    className: \"bg-gray-800 border-l-4 border-pink-500 text-gray-300 p-4 rounded mt-4\",\n                    role: \"alert\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-shrink-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HelpCircle_Instagram_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"h-5 w-5 text-pink-400\",\n                                    \"aria-hidden\": \"true\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm\",\n                                    children: \"İpucu: Pop\\xfcler bir influencer'ın kullanıcı adını deneyin!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ef/Desktop/insta_analiz/frontend/src/components/InstagramAnalyzer.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InstagramAnalyzer, \"4NYWfCf3AY5aJ9s1CC4g0suWhFQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = InstagramAnalyzer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstagramAnalyzer);\nvar _c;\n$RefreshReg$(_c, \"InstagramAnalyzer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0luc3RhZ3JhbUFuYWx5emVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1A7QUFDUyxDQUFDLGdCQUFnQjtBQUNkLENBQUMsNEJBQTRCO0FBRXJGLE1BQU1RLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNWSxTQUFTViwwREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksUUFBUUMsV0FBVyxJQUFNSCxXQUFXLE9BQU8sT0FBTyw0RkFBNEY7UUFDcEosT0FBTyxJQUFNSSxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxNQUFNRyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCTixPQUFPTyxJQUFJLENBQUMsWUFBcUIsT0FBVFg7SUFDMUI7SUFFQSxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQixpREFBTUEsQ0FBQ2UsR0FBRztnQkFDVEUsU0FBUztvQkFBRUMsU0FBUztvQkFBR0MsR0FBRyxDQUFDO2dCQUFHO2dCQUM5QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLFlBQVk7b0JBQUVDLFVBQVU7Z0JBQUk7Z0JBQzVCTixXQUFVOztrQ0FFViw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDbEIsZ0dBQVNBO2dDQUFDa0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHekIsOERBQUNPO3dCQUFHUCxXQUFVO2tDQUErRzs7Ozs7O2tDQUc3SCw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQXdCOzs7Ozs7Ozs7Ozs7MEJBR3ZDLDhEQUFDaEIsaURBQU1BLENBQUN5QixJQUFJO2dCQUNWQyxVQUFVZjtnQkFDVkssV0FBVTtnQkFDVkMsU0FBUztvQkFBRUMsU0FBUztvQkFBR1MsT0FBTztnQkFBSTtnQkFDbENQLFNBQVM7b0JBQUVGLFNBQVM7b0JBQUdTLE9BQU87Z0JBQUU7Z0JBQ2hDTixZQUFZO29CQUFFTyxPQUFPO29CQUFLTixVQUFVO2dCQUFJOztrQ0FFeEMsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDYTs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBTzdCOzRCQUNQOEIsVUFBVSxDQUFDckIsSUFBTVIsWUFBWVEsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDM0NoQixXQUFVOzRCQUNWbUIsUUFBUTs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNwQjtrQ0FDQyw0RUFBQ3FCOzRCQUNDTixNQUFLOzRCQUNMZCxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztZQU1KcUIsdUJBQVMsOERBQUNiO2dCQUFFUixXQUFVOzBCQUE0QnFCOzs7Ozs7MEJBRW5ELDhEQUFDcEMsMERBQWVBOzBCQUNiSSx5QkFDQyw4REFBQ0wsaURBQU1BLENBQUNlLEdBQUc7b0JBQ1RFLFNBQVM7d0JBQUVDLFNBQVM7d0JBQUdDLEdBQUc7b0JBQUc7b0JBQzdCQyxTQUFTO3dCQUFFRixTQUFTO3dCQUFHQyxHQUFHO29CQUFFO29CQUM1Qm1CLE1BQU07d0JBQUVwQixTQUFTO3dCQUFHQyxHQUFHLENBQUM7b0JBQUc7b0JBQzNCSCxXQUFVO29CQUNWdUIsTUFBSzs4QkFFTCw0RUFBQ3hCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNqQixnR0FBVUE7b0NBQUNpQixXQUFVO29DQUF3QndCLGVBQVk7Ozs7Ozs7Ozs7OzBDQUU1RCw4REFBQ3pCO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDUTtvQ0FBRVIsV0FBVTs4Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXZDO0dBdkZNZDs7UUFHV0wsc0RBQVNBOzs7S0FIcEJLO0FBeUZOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5zdGFncmFtQW5hbHl6ZXIuanM/YzBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IEluc3RhZ3JhbSwgSGVscENpcmNsZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7IC8vaWNvbiBrdWxsYW7EsW3EsVxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJzsgLy8gYW5pbWFzeXlvbmxhciB2ZSBnZcOnacWfbGVyXG5cbmNvbnN0IEluc3RhZ3JhbUFuYWx5emVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dUaXAsIHNldFNob3dUaXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VGlwKHRydWUpLCAxMDAwKTsgLy8gMyBzYW5peWUgc29ucmEgc2hvd3RpcCB0cnVlIG9sdXIgdmUgdGlwIGt1bGxhbsSxY8SxeWEgZ8O2c3RlcmlsaXIuIEJ1cmFkYSAzIHNhbml5ZSBhbMSxbsSxeW9yLlxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goYC9yZXN1bHRzLyR7dXNlcm5hbWV9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBzcGFjZS15LThcIj5cbiAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHNwYWNlLXktMlwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IG14LWF1dG8gYmctZ3JhZGllbnQtdG8tdHIgZnJvbS15ZWxsb3ctNDAwIHZpYS1yZWQtNTAwIHRvLXB1cnBsZS02MDAgcm91bmRlZC0yeGwgcC0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktOTAwIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgIDxJbnN0YWdyYW0gY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTQwMCB2aWEtcGluay01MDAgdG8teWVsbG93LTUwMFwiPlxuICAgICAgICAgIEluc3RhZ3JhbSBQcm9maWwgQW5hbGl6aVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQteGxcIj5BbmFsaXogacOnaW4ga3VsbGFuxLFjxLEgYWTEsW7EsSBnaXJpbjwvcD5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgPG1vdGlvbi5mb3JtIFxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMywgZHVyYXRpb246IDAuNSB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgc2hhZG93LXNtIC1zcGFjZS15LXB4XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc3RhZ3JhbSBrdWxsYW7EsWPEsSBhZMSxXCJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS03MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLXQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcGluay01MDAgZm9jdXM6Ym9yZGVyLXBpbmstNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbSBiZy1ncmF5LTgwMFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAwIHZpYS1waW5rLTUwMCB0by15ZWxsb3ctNTAwIGhvdmVyOmZyb20tcHVycGxlLTYwMCBob3Zlcjp2aWEtcGluay02MDAgaG92ZXI6dG8teWVsbG93LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1waW5rLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFuYWxpeiBFdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmZvcm0+XG5cbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1jZW50ZXJcIj57ZXJyb3J9PC9wPn1cblxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge3Nob3dUaXAgJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXItbC00IGJvcmRlci1waW5rLTUwMCB0ZXh0LWdyYXktMzAwIHAtNCByb3VuZGVkIG10LTRcIlxuICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPEhlbHBDaXJjbGUgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXBpbmstNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIMSwcHVjdTogUG9ww7xsZXIgYmlyIGluZmx1ZW5jZXInxLFuIGt1bGxhbsSxY8SxIGFkxLFuxLEgZGVuZXlpbiFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW1BbmFseXplcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkluc3RhZ3JhbSIsIkhlbHBDaXJjbGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJJbnN0YWdyYW1BbmFseXplciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzaG93VGlwIiwic2V0U2hvd1RpcCIsInJvdXRlciIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaDEiLCJwIiwiZm9ybSIsIm9uU3VibWl0Iiwic2NhbGUiLCJkZWxheSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwiZXJyb3IiLCJleGl0Iiwicm9sZSIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/InstagramAnalyzer.js\n"));

/***/ })

});