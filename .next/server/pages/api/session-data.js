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
exports.id = "pages/api/session-data";
exports.ids = ["pages/api/session-data"];
exports.modules = {

/***/ "(api)/./pages/api/session-data.js":
/*!***********************************!*\
  !*** ./pages/api/session-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        console.log(\"post method received\");\n        // Process a POST request\n        res.status(200).json({\n            ServerSays: \"Request Received\"\n        });\n    } else {\n        console.log(\"some other method received\");\n        // Handle any other HTTP method\n        res.status(500).json({\n            error: \"Sorry you can only post to this endpoint\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2Vzc2lvbi1kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1YseUJBQXlCO1FBQ3pCSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFlBQVk7UUFBbUI7SUFDeEQsT0FBTztRQUNMSixRQUFRQyxHQUFHLENBQUM7UUFDWiwrQkFBK0I7UUFDL0JILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0UsT0FBTztRQUEwQztJQUN6RSxDQUFDO0FBRVAsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGFiYXNlLXJlYWN0Ly4vcGFnZXMvYXBpL3Nlc3Npb24tZGF0YS5qcz9kN2U2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICBjb25zb2xlLmxvZygncG9zdCBtZXRob2QgcmVjZWl2ZWQnKVxuICAgICAgICAvLyBQcm9jZXNzIGEgUE9TVCByZXF1ZXN0XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgU2VydmVyU2F5czogJ1JlcXVlc3QgUmVjZWl2ZWQnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnc29tZSBvdGhlciBtZXRob2QgcmVjZWl2ZWQnKVxuICAgICAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnJvcjogJ1NvcnJ5IHlvdSBjYW4gb25seSBwb3N0IHRvIHRoaXMgZW5kcG9pbnQnfSlcbiAgICAgIH1cbiAgIFxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJTZXJ2ZXJTYXlzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/session-data.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/session-data.js"));
module.exports = __webpack_exports__;

})();