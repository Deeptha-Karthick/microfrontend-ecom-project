"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproducts"] = self["webpackChunkproducts"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mount: () => (/* binding */ mount)\n/* harmony export */ });\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"webpack/sharing/consume/default/faker/faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst mount = (el) => {\n  let products = '';\n\n  for (let i = 0; i < 5; i++) {\n    const name = faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.productName();\n    products += `<div>${name}</div>`;\n  }\n\n  el.innerHTML = products;\n};\n\n// Context/Situation #1\n// We are running this file in development in isolation\n// We are using our local index.html file\n// Which DEFNITELY has an element with an id of 'dev-products\n// We want to immediately render our app into that element\nif (true) {\n  const el = document.querySelector('#dev-products');\n\n  // Assuming our container doesnt have an element\n  // with id 'dev-products'....\n  if (el) {\n    // We are probably running in isolation\n    mount(el);\n  }\n}\n\n// Context/Situation #2\n// We are running this file in develpment or production\n// through the CONTAINER app\n// NO GUARANTEE that an element with an id of 'dev-products' exists\n// WE DO NOT WANT try to immediately render the app\n\n\n\n//# sourceURL=webpack://products/./src/bootstrap.js?");

/***/ })

}]);