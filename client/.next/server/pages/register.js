"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Register() {\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/api/register\", {\n            name,\n            email,\n            password\n        });\n        console.log({\n            data\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"bg-light p-5 text-center bg-primary\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Register\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter your name\",\n                            className: \"form-control mb-4 p-2\",\n                            onChange: (e)=>setName(e.target.value)\n                            ,\n                            value: name,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter your email\",\n                            className: \"form-control mb-4\",\n                            onChange: (e)=>setEmail(e.target.value)\n                            ,\n                            value: email,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Enter your password\",\n                            className: \"form-control mb-4\",\n                            onChange: (e)=>setPassword(e.target.value)\n                            ,\n                            value: password,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn col-12 btn-primary\",\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNQO1NBRWhCRSxRQUFRLEdBQUcsQ0FBQztJQUNuQixLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJSiwrQ0FBUSxDQUFDLENBQUU7SUFDbkMsS0FBSyxNQUFFSyxLQUFLLE1BQUVDLFFBQVEsTUFBSU4sK0NBQVEsQ0FBQyxDQUFFO0lBQ3JDLEtBQUssTUFBRU8sUUFBUSxNQUFFQyxXQUFXLE1BQUlSLCtDQUFRLENBQUMsQ0FBRTtJQUUzQyxLQUFLLENBQUNTLFlBQVksVUFBVUMsQ0FBQyxHQUFLLENBQUM7UUFDakNBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ1gsaURBQVUsQ0FBQyxDQUFvQyxxQ0FBRSxDQUFDO1lBQ3ZFRSxJQUFJO1lBQ0pFLEtBQUs7WUFDTEUsUUFBUTtRQUNWLENBQUM7UUFDRE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0g7WUFBQUEsSUFBSTtRQUFBLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU0sdUVBQ0hJLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7MEJBQUMsQ0FBUTs7aUZBQzNERixDQUFHO2dCQUFDRSxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7Z0dBQ2pEQyxDQUFJO29CQUFDQyxRQUFRLEVBQUVYLFlBQVk7Ozs7Ozs7OzZGQUN6QlksQ0FBSzs0QkFDSkMsSUFBSSxFQUFDLENBQU07NEJBQ1hDLFdBQVcsRUFBQyxDQUFpQjs0QkFDN0JMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLFFBQVEsR0FBR2QsQ0FBQyxHQUFLTixPQUFPLENBQUNNLENBQUMsQ0FBQ2UsTUFBTSxDQUFDQyxLQUFLOzs0QkFDdkNBLEtBQUssRUFBRXZCLElBQUk7Ozs7Ozs7OzZGQUVaa0IsQ0FBSzs0QkFDSkMsSUFBSSxFQUFDLENBQU07NEJBQ1hDLFdBQVcsRUFBQyxDQUFrQjs0QkFDOUJMLFNBQVMsRUFBQyxDQUFtQjs0QkFDN0JNLFFBQVEsR0FBR2QsQ0FBQyxHQUFLSixRQUFRLENBQUNJLENBQUMsQ0FBQ2UsTUFBTSxDQUFDQyxLQUFLOzs0QkFDeENBLEtBQUssRUFBRXJCLEtBQUs7Ozs7Ozs7OzZGQUViZ0IsQ0FBSzs0QkFDSkMsSUFBSSxFQUFDLENBQVU7NEJBQ2ZDLFdBQVcsRUFBQyxDQUFxQjs0QkFDakNMLFNBQVMsRUFBQyxDQUFtQjs0QkFDN0JNLFFBQVEsR0FBR2QsQ0FBQyxHQUFLRixXQUFXLENBQUNFLENBQUMsQ0FBQ2UsTUFBTSxDQUFDQyxLQUFLOzs0QkFDM0NBLEtBQUssRUFBRW5CLFFBQVE7Ozs7Ozs7OzZGQUVoQm9CLENBQU07NEJBQUNMLElBQUksRUFBQyxDQUFROzRCQUFDSixTQUFTLEVBQUMsQ0FBd0I7Ozs7Ozs7c0NBQUMsQ0FFekQ7Ozs7Ozs7QUFLVixDQUFDO0FBRUQsaUVBQWVoQixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyXCIsIHtcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHtkYXRhfSlcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImJnLWxpZ2h0IHAtNSB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5XCI+UmVnaXN0ZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNVwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtMlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBjb2wtMTIgYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiUmVnaXN0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();