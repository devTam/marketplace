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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Register() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"bg-light p-5 text-center bg-primary\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Register\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter your name\",\n                            className: \"form-control mb-4\",\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            value: name,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter your email\",\n                            className: \"form-control mb-4\",\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            },\n                            value: email,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Enter your password\",\n                            className: \"form-control mb-4\",\n                            onChange: function(e) {\n                                return setPassword(e.target.value);\n                            },\n                            value: password,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-block btn-primary\",\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n}\n_s(Register, \"vbqcGr/6BaaK1ETmInB26GkyFIw=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDOztTQUV2QkMsUUFBUSxHQUFHLENBQUM7O0lBQ25CLEdBQUssQ0FBbUJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTVCRSxJQUFJLEdBQWFGLEdBQVksS0FBdkJHLE9BQU8sR0FBSUgsR0FBWTtJQUNwQyxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QkksS0FBSyxHQUFjSixJQUFZLEtBQXhCSyxRQUFRLEdBQUlMLElBQVk7SUFDdEMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENNLFFBQVEsR0FBaUJOLElBQVksS0FBM0JPLFdBQVcsR0FBSVAsSUFBWTtJQUU1QyxHQUFLLENBQUNRLFlBQVksR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzNCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7WUFBQ1YsSUFBSSxFQUFKQSxJQUFJO1lBQUVFLEtBQUssRUFBTEEsS0FBSztZQUFFRSxRQUFRLEVBQVJBLFFBQVE7UUFBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxNQUFNLHVFQUNITyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQXFDOzs7Ozs7OzBCQUFDLENBQVE7O2lGQUMzREYsQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQXFDOzs7Ozs7O2dHQUNqREMsQ0FBSTtvQkFBQ0MsUUFBUSxFQUFFVCxZQUFZOzs7Ozs7Ozs2RkFDekJVLENBQUs7NEJBQ0pDLElBQUksRUFBQyxDQUFNOzRCQUNYQyxXQUFXLEVBQUMsQ0FBaUI7NEJBQzdCTCxTQUFTLEVBQUMsQ0FBbUI7NEJBQzdCTSxRQUFRLEVBQUUsUUFBUSxDQUFQWixDQUFDO2dDQUFLTixNQUFNLENBQU5BLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDYSxNQUFNLENBQUNDLEtBQUs7OzRCQUN2Q0EsS0FBSyxFQUFFckIsSUFBSTs7Ozs7Ozs7NkZBRVpnQixDQUFLOzRCQUNKQyxJQUFJLEVBQUMsQ0FBTTs0QkFDWEMsV0FBVyxFQUFDLENBQWtCOzRCQUM5QkwsU0FBUyxFQUFDLENBQW1COzRCQUM3Qk0sUUFBUSxFQUFFLFFBQVEsQ0FBUFosQ0FBQztnQ0FBS0osTUFBTSxDQUFOQSxRQUFRLENBQUNJLENBQUMsQ0FBQ2EsTUFBTSxDQUFDQyxLQUFLOzs0QkFDeENBLEtBQUssRUFBRW5CLEtBQUs7Ozs7Ozs7OzZGQUViYyxDQUFLOzRCQUNKQyxJQUFJLEVBQUMsQ0FBVTs0QkFDZkMsV0FBVyxFQUFDLENBQXFCOzRCQUNqQ0wsU0FBUyxFQUFDLENBQW1COzRCQUM3Qk0sUUFBUSxFQUFFLFFBQVEsQ0FBUFosQ0FBQztnQ0FBS0YsTUFBTSxDQUFOQSxXQUFXLENBQUNFLENBQUMsQ0FBQ2EsTUFBTSxDQUFDQyxLQUFLOzs0QkFDM0NBLEtBQUssRUFBRWpCLFFBQVE7Ozs7Ozs7OzZGQUVoQmtCLENBQU07NEJBQUNMLElBQUksRUFBQyxDQUFROzRCQUFDSixTQUFTLEVBQUMsQ0FBMkI7Ozs7Ozs7c0NBQUMsQ0FFNUQ7Ozs7Ozs7QUFLVixDQUFDO0dBMUNRZCxRQUFRO0tBQVJBLFFBQVE7QUE0Q2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBSZWdpc3RlcigpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImJnLWxpZ2h0IHAtNSB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5XCI+UmVnaXN0ZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNVwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVnaXN0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsInRhYmxlIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});