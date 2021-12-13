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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Register() {\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/api/register\", {\n                name,\n                email,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(data.message);\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.response.data.message);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"bg-light p-5 text-center bg-primary\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Register\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                __source: {\n                    fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter your name\",\n                            className: \"form-control mb-4 p-2\",\n                            onChange: (e)=>setName(e.target.value)\n                            ,\n                            value: name,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter your email\",\n                            className: \"form-control mb-4\",\n                            onChange: (e)=>setEmail(e.target.value)\n                            ,\n                            value: email,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Enter your password\",\n                            className: \"form-control mb-4\",\n                            onChange: (e)=>setPassword(e.target.value)\n                            ,\n                            value: password,\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn col-12 btn-primary\",\n                            __source: {\n                                fileName: \"/Users/devtam/Desktop/Websites/udemy/client/pages/register.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1A7QUFDYTtTQUU3QkcsUUFBUSxHQUFHLENBQUM7SUFDbkIsS0FBSyxNQUFFQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxDQUFFO0lBQ25DLEtBQUssTUFBRU0sS0FBSyxNQUFFQyxRQUFRLE1BQUlQLCtDQUFRLENBQUMsQ0FBRTtJQUNyQyxLQUFLLE1BQUVRLFFBQVEsTUFBRUMsV0FBVyxNQUFJVCwrQ0FBUSxDQUFDLENBQUU7SUFFM0MsS0FBSyxDQUFDVSxZQUFZLFVBQVVDLENBQUMsR0FBSyxDQUFDO1FBQ2pDQSxDQUFDLENBQUNDLGNBQWM7UUFDaEIsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ1osaURBQVUsQ0FBQyxDQUFvQyxxQ0FBRSxDQUFDO2dCQUN2RUcsSUFBSTtnQkFDSkUsS0FBSztnQkFDTEUsUUFBUTtZQUNWLENBQUM7WUFFRE4seURBQWEsQ0FBQ1csSUFBSSxDQUFDRyxPQUFPO1FBRTVCLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1lBQ2ZmLHVEQUFXLENBQUNlLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTCxJQUFJLENBQUNHLE9BQU87UUFDekMsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLHVFQUNIRyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQXFDOzs7Ozs7OzBCQUFDLENBQVE7O2lGQUMzREYsQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQXFDOzs7Ozs7O2dHQUNqREMsQ0FBSTtvQkFBQ0MsUUFBUSxFQUFFYixZQUFZOzs7Ozs7Ozs2RkFDekJjLENBQUs7NEJBQ0pDLElBQUksRUFBQyxDQUFNOzRCQUNYQyxXQUFXLEVBQUMsQ0FBaUI7NEJBQzdCTCxTQUFTLEVBQUMsQ0FBdUI7NEJBQ2pDTSxRQUFRLEdBQUdoQixDQUFDLEdBQUtOLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDaUIsTUFBTSxDQUFDQyxLQUFLOzs0QkFDdkNBLEtBQUssRUFBRXpCLElBQUk7Ozs7Ozs7OzZGQUVab0IsQ0FBSzs0QkFDSkMsSUFBSSxFQUFDLENBQU07NEJBQ1hDLFdBQVcsRUFBQyxDQUFrQjs0QkFDOUJMLFNBQVMsRUFBQyxDQUFtQjs0QkFDN0JNLFFBQVEsR0FBR2hCLENBQUMsR0FBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNpQixNQUFNLENBQUNDLEtBQUs7OzRCQUN4Q0EsS0FBSyxFQUFFdkIsS0FBSzs7Ozs7Ozs7NkZBRWJrQixDQUFLOzRCQUNKQyxJQUFJLEVBQUMsQ0FBVTs0QkFDZkMsV0FBVyxFQUFDLENBQXFCOzRCQUNqQ0wsU0FBUyxFQUFDLENBQW1COzRCQUM3Qk0sUUFBUSxHQUFHaEIsQ0FBQyxHQUFLRixXQUFXLENBQUNFLENBQUMsQ0FBQ2lCLE1BQU0sQ0FBQ0MsS0FBSzs7NEJBQzNDQSxLQUFLLEVBQUVyQixRQUFROzs7Ozs7Ozs2RkFFaEJzQixDQUFNOzRCQUFDTCxJQUFJLEVBQUMsQ0FBUTs0QkFBQ0osU0FBUyxFQUFDLENBQXdCOzs7Ozs7O3NDQUFDLENBRXpEOzs7Ozs7O0FBS1YsQ0FBQztBQUVELGlFQUFlbEIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyXCIsIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gIFxuICAgICAgdG9hc3Quc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC01IHRleHQtY2VudGVyIGJnLXByaW1hcnlcIj5SZWdpc3RlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNCBvZmZzZXQtbWQtNCBwYi01XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC0yXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGNvbC0xMiBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJ0b2FzdCIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwb3N0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnJvciIsInJlc3BvbnNlIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-toastify");

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