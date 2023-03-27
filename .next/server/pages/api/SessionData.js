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
exports.id = "pages/api/sessiondata";
exports.ids = ["pages/api/sessiondata"];
exports.modules = {

/***/ "(api)/./pages/api/sessiondata.js":
/*!**********************************!*\
  !*** ./pages/api/sessiondata.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        console.log(\"post method received\");\n        // Process a POST request\n        res.status(200).json({\n            ServerSays: \"Request Received\"\n        });\n    } else {\n        console.log(\"some other method received\");\n        // Handle any other HTTP method\n        res.status(500).json({\n            error: \"Sorry you can only post to this endpoint\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2Vzc2lvbmRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUM7UUFDVix5QkFBeUI7UUFDekJILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsWUFBWTtRQUFtQjtJQUN4RCxPQUFPO1FBQ0xKLFFBQVFDLEdBQUcsQ0FBQztRQUNaLCtCQUErQjtRQUMvQkgsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDRSxPQUFPO1FBQTBDO0lBQ3pFLENBQUM7QUFFUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwYWJhc2UtcmVhY3QvLi9wYWdlcy9hcGkvc2Vzc2lvbmRhdGEuanM/YTQ3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgY29uc29sZS5sb2coJ3Bvc3QgbWV0aG9kIHJlY2VpdmVkJylcbiAgICAgICAgLy8gUHJvY2VzcyBhIFBPU1QgcmVxdWVzdFxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IFNlcnZlclNheXM6ICdSZXF1ZXN0IFJlY2VpdmVkJyB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NvbWUgb3RoZXIgbWV0aG9kIHJlY2VpdmVkJylcbiAgICAgICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6ICdTb3JyeSB5b3UgY2FuIG9ubHkgcG9zdCB0byB0aGlzIGVuZHBvaW50J30pXG4gICAgICB9XG4gICBcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiU2VydmVyU2F5cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sessiondata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sessiondata.js"));
module.exports = __webpack_exports__;

})();