"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Register() {\n    _s1();\n    var ref = _slicedToArray(useState(''), 2), name = ref[0], setName = ref[1];\n    var ref1 = _slicedToArray(useState(''), 2), email = ref1[0], setEmail = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"bg-light p-5 text-center bg-primary\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Register\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"name\",\n                        className: \"form-control\",\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        },\n                        value: name,\n                        __source: {\n                            fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                            lineNumber: 9,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    })\n                })\n            })\n        ]\n    }));\n}\n_s1(Register, \"+yYzMrF0jCuADaceubK5n/EGEjo=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQVNBLFFBQVEsR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQW1CQyxHQUFZLGtCQUFaQSxRQUFRLENBQUMsQ0FBRSxRQUE1QkMsSUFBSSxHQUFhRCxHQUFZLEtBQXZCRSxPQUFPLEdBQUlGLEdBQVk7SUFDcEMsR0FBSyxDQUFxQkEsSUFBWSxrQkFBWkEsUUFBUSxDQUFDLENBQUUsUUFBOUJHLEtBQUssR0FBY0gsSUFBWSxLQUF4QkksUUFBUSxHQUFJSixJQUFZO0lBQ3RDLE1BQU0sdUVBQ0RLLENBQUc7Ozs7Ozs7O2lGQUNDQyxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7MEJBQUMsQ0FBUTs7aUZBQzNERixDQUFHO2dCQUFDRSxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7K0ZBQy9DQyxDQUFJO29CQUFDQyxRQUFRLEVBQUVDLFlBQVk7Ozs7Ozs7bUdBQ3ZCQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQU07d0JBQUNOLFNBQVMsRUFBQyxDQUFjO3dCQUFDTyxRQUFRLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzs0QkFBSWIsTUFBTSxDQUFOQSxPQUFPLENBQUNhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzt3QkFBR0EsS0FBSyxFQUFFaEIsSUFBSTs7Ozs7Ozs7Ozs7O0FBTXRJLENBQUM7SUFkUUYsUUFBUTtLQUFSQSxRQUFRO0FBZ0JqQiwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nYmctbGlnaHQgcC01IHRleHQtY2VudGVyIGJnLXByaW1hcnknPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNSc+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nbmFtZScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17bmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclxuIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});