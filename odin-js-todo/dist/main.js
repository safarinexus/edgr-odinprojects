/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/DOM/projectPromptStyle.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/DOM/projectPromptStyle.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#projectPromptText { \n    background-color: rgb(0,0,0,0);\n    border: 0;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    width: 100%; \n}\n\n#projectPromptText:focus {\n    outline: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/projectPromptStyle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/DOM/taskPromptStyle.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/DOM/taskPromptStyle.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../icons/plus.svg */ \"./src/icons/plus.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#addtask {\n    grid-row: 1 / span 2; \n    grid-column: 1;\n    margin: 0;\n    height: 18px; \n    width: 18px;\n    border: 0;\n    border-radius: 2px;\n    justify-self: center;\n    align-self: center;\n    position: relative;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    filter: invert(100%);\n    background-color: rgb(255, 0, 180);\n}\n\n#addtask:hover {\n    transform: scale(1.2);\n    transition: all 0.4s ease-in-out;\n}\n\n#addtask:active {\n    opacity: 10%;\n}\n\n#taskprompt{\n    display: block grid;\n    background-color: rgb(210, 210, 210, 0.1);\n    grid-template-columns: 7% auto max(23%, 105px);\n    grid-template-rows: 1fr 1fr;\n}\n\n#tasktitleprompt {\n    grid-column: 2; \n    grid-row: 1; \n    align-self: center;\n    text-overflow: hidden;\n    font-weight: 500;\n    margin: 0;\n    font-size: small;\n    padding: 0;\n    height: 16px;\n}\n\n#taskdescprompt {\n    grid-column: 2; \n    grid-row: 2; \n    margin: 0; \n    margin-right: 5px;\n    font-size: xx-small;\n    padding: 0;\n    height: 16px;\n}\n\n.prompttext {\n    background-color: rgb(0,0,0,0);\n    border: 0;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n}\n\n.prompttext:focus {\n    outline:none;\n}\n\n#duedateprompt {\n    align-self: end;\n    font-size: x-small;\n    box-sizing: border-box;\n}\n#dateprompt {\n    color-scheme: dark;\n}\n\ninput[type=\"radio\"] {\n    -webkit-appearance: none; /*to disable the default appearance of radio button*/\n    -moz-appearance: none;\n    display: none;\n}\n\n.priobuttons {\n    display: inline-block;\n    margin-right: 5px;\n    height: 13px; \n    width: 30%;\n    border-radius: 5px;\n    font-weight: 200;\n    font-size: small;\n    text-align: center;\n    background-color: transparent;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    transition: all 0.2s ease-in-out;\n}\n\n\n#highlabel {\n    color: red; \n    border: red solid 1px; \n}\n\n#highlabel:hover {\n    background-color: red;\n    color: white;\n}  \n\n\n\n#medlabel {\n    color: orange; \n    border: orange solid 1px; \n}\n\n#medlabel:hover {\n    background-color: orange;\n    color: white;\n}  \n\n#lowlabel {\n    color: green; \n    border: green solid 1px; \n    margin-right: 0;\n}\n\n#lowlabel:hover {\n    background-color: green;\n    color: white;\n}  \n\n#high:checked + #highlabel {\n    background-color: red;\n    color: white;\n}\n\n#med:checked + #medlabel {\n    background-color: orange;\n    color: white;\n}\n\n#low:checked + #lowlabel {\n    background-color: green;\n    color: white;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/taskPromptStyle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/close.svg */ \"./src/icons/close.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/folder-plus-outline.svg */ \"./src/icons/folder-plus-outline.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/plus.svg */ \"./src/icons/plus.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root { \n    font-family: 'Space Mono';\n    color: white;\n}\n\n\nbody {\n    background-color: #111;\n    box-sizing: border-box;\n    margin: 0; \n    padding: 0;\n    display: grid; \n    grid-gap: 0.4px;\n    height: 100vh; \n    width: 100vw;\n    grid-template-columns: minmax(200px, 360px) minmax(560px, auto); \n    grid-template-rows: 80px auto 4%;\n    position: relative;\n}\n\n/*============================HEADER============================*/\n\nheader {\n    background-color: #111;\n    grid-column: span 2; \n    box-sizing: border-box;\n    padding: 20px;\n    position: relative;\n    box-shadow: 0px 0.1px 3px 0.5px black;\n}\n\nheader img {\n    height: 40px; \n    width: 40px; \n    filter: invert(100%);\n    margin-right: 15px;\n}\n\nheader>a {\n    position: absolute;\n    bottom: 18px;\n    display: flex; \n    justify-content: baseline;\n    align-items: center;\n    text-decoration: none;\n}\n\nheader>a:visited {\n    color: inherit; \n    text-decoration: none;\n}\n\nheader h1 {\n    margin: 0;\n}\n\nheader>h6 {\n    position: absolute; \n    right: 10px;\n    bottom: 0;\n    color: lightgray; \n}\n\nheader>h6:hover {\n    cursor: progress;\n}\n\n/*============================SIDEBAR============================*/\n\n#sidebar {\n    background-color: #333;\n    grid-row: 2;\n    display: grid; \n    grid-template-rows: 90px auto;\n    padding: 20px;\n    align-items: center;\n}\n\n#fixeditems {\n    height: 100%; \n    width: 100%;\n    padding-bottom: 20px;\n    box-sizing: border-box;\n    display: flex; \n    flex-direction: column;\n    justify-content: space-between;\n    border-bottom: 1px solid whitesmoke;\n}\n\n#projectlist {\n    height: 100%; \n    width: 100%;\n    box-sizing: border-box;\n    display: flex; \n    flex-direction: column;\n    justify-content: baseline;\n    padding-top: 20px;\n    flex-wrap: nowrap;\n    overflow: auto;\n}\n\n.sidebaritem {\n    border-radius: 5px;\n    height: 25px;\n    padding: 5px;\n    display: flex; \n    align-items: center;\n    position: relative;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n}\n\n.sidebaritem:hover {\n    background-color: rgb(200, 200, 200, 0.2);\n    cursor: pointer;\n}\n\n.sidebaritem>img {\n    height: 20px; \n    width: 20px;\n    filter: invert(100%);\n    margin-right: 5px;\n}\n\n.deleteproj {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    height: 20px; \n    width: 20px;\n    position: absolute; \n    right: 5px;\n    border: 0;\n    filter: invert(100%);\n    background-color: rgb(0,0,0,0);\n    opacity: 0;\n}\n\n.deleteproj:hover {\n    opacity: 100%;\n    cursor: pointer;\n}\n/*\n#deleteproj:active {\n}\n*/\n\n/*============================MAINAREA============================*/\n\n#main {\n    background-color: #222;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    \n    /*\n    make it such that beyond 1kpx, you can squeeze more than one task\n    display: grid; \n    grid-template-columns: repeat(auto-fit, 240px); \n    grid-template-rows: repeat(auto-fit, 270px);\n    */\n}\n\n.task {\n    display: block grid;\n    grid-template-columns: 7% auto max(23%, 105px);\n    grid-template-rows: 1fr 1fr;\n    background-color: rgb(210, 210, 210, 0.3);\n    border-radius: 8px;\n    margin: 10px;\n    padding: 10px;\n    padding-left: 0px;\n    box-sizing: border-box;\n}\n\n.taskcheck {\n    grid-row: 1 / span 2; \n    grid-column: 1;\n    margin: 0;\n    height: 15px; \n    width: 15px;\n    border: 0;\n    border-radius: 10px;\n    justify-self: center;\n    align-self: center;\n    position: relative;\n}\n\n.taskcheck:hover {\n    border: 1px solid rgb(0, 0, 255, 0.4);\n}\n\n/* this goes into js */\n.taskcheck:active {\n    background-color: darkblue;\n    border: 1.5px solid white;\n}\n\n.tasktitle {\n    grid-column: 2; \n    grid-row: 1; \n    align-self: center;\n    text-overflow: hidden;\n}\n\n.tasktitle>h5 {\n    font-weight: 500;\n    margin: 0;\n}\n\n.taskdesc {\n    grid-column: 2; \n    grid-row: 2; \n    margin: 0; \n    margin-right: 5px;\n    font-size: x-small;\n}\n\n.taskduedate {\n    align-self: end;\n    font-size: x-small;\n    margin: 0;\n    margin-bottom: 3px;\n}\n\n.taskpriority {\n    width: 125px;\n    display: flex; \n    justify-content: start;\n    align-content: start;\n}\n\n.prio {\n    margin-right: 5px;\n    height: 15px; \n    width: 30%;\n    border-radius: 5px;\n    font-weight: 100;\n    font-size: small;\n    text-align: center;\n    background-color: transparent;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    transition: all 0.2s ease-in-out;\n}\n\nbutton[id*='high'] {\n    color: red; \n    border: red solid 1px; \n}\n\nbutton[id*='high']:hover {\n    background-color: red;\n    color: white;\n}  \n\nbutton[id*='med'] {\n    color: orange; \n    border: orange solid 1px; \n}\n\nbutton[id*='med']:hover {\n    background-color: orange;\n    color: white;\n}  \n\nbutton[id*='low'] {\n    color: green; \n    border: green solid 1px; \n    margin-right: 0;\n}\n\nbutton[id*='low']:hover {\n    background-color: green;\n    color: white;\n}  \n\n/*=============================FOOTER=============================*/\n\n#pseudofooter {\n    background-color: #333;\n    display: flex; \n    justify-content: center;\n}\n\nfooter { \n    width: max(100%, 400px);\n    background-color: #222;\n    display: flex; \n    justify-content: center;\n}\n\n#projadd { \n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n#taskadd {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n#projadd, #taskadd { \n    height: 30px; \n    width: 30px;\n    border: 0;\n    filter: invert(100%);\n    background-color: rgb(0,0,0,0);\n    transition: all 0.2s ease-in-out;\n}\n\n#projadd:hover, #taskadd:hover { \n    cursor: pointer;\n    opacity: 40%;\n}\n\n#projadd:active, #taskadd:active { \n    transform: scale(1.1);\n}\n\n/*===============================*/\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-js-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/modules/DOM/projectPromptStyle.css":
/*!************************************************!*\
  !*** ./src/modules/DOM/projectPromptStyle.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./projectPromptStyle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modules/DOM/projectPromptStyle.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_projectPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_projectPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/projectPromptStyle.css?");

/***/ }),

/***/ "./src/modules/DOM/taskPromptStyle.css":
/*!*********************************************!*\
  !*** ./src/modules/DOM/taskPromptStyle.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./taskPromptStyle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modules/DOM/taskPromptStyle.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_taskPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_taskPromptStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/taskPromptStyle.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-js-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_DOM_IconRenders_mainLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM/IconRenders/mainLogo */ \"./src/modules/DOM/IconRenders/mainLogo.js\");\n/* harmony import */ var _modules_DOM_IconRenders_todayIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM/IconRenders/todayIcon */ \"./src/modules/DOM/IconRenders/todayIcon.js\");\n/* harmony import */ var _modules_DOM_IconRenders_upcomingIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DOM/IconRenders/upcomingIcon */ \"./src/modules/DOM/IconRenders/upcomingIcon.js\");\n/* harmony import */ var _modules_storage_getProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage/getProjects */ \"./src/modules/storage/getProjects.js\");\n/* harmony import */ var _modules_DOM_renderProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/DOM/renderProjects */ \"./src/modules/DOM/renderProjects.js\");\n/* harmony import */ var _modules_DOM_renderTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/DOM/renderTasks */ \"./src/modules/DOM/renderTasks.js\");\n/* harmony import */ var _modules_DOM_projectPrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/DOM/projectPrompt */ \"./src/modules/DOM/projectPrompt.js\");\n/* harmony import */ var _modules_storage_checkActive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/storage/checkActive */ \"./src/modules/storage/checkActive.js\");\n/* harmony import */ var _modules_DOM_taskPrompt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/DOM/taskPrompt */ \"./src/modules/DOM/taskPrompt.js\");\nconsole.log('initiated');\n\n\n\n//Icon Renders\n \n \n\n(0,_modules_DOM_IconRenders_mainLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_DOM_IconRenders_todayIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_DOM_IconRenders_upcomingIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//Initial retrive and render Projects and Tasks\n\n\n\n\n/*\nlocalStorage.clear(); \nconsole.log(localStorage);\n*/\n\nlet projects = (0,_modules_storage_getProjects__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconsole.log(projects);\n(0,_modules_DOM_renderProjects__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(projects);\nif (localStorage.getItem('active') !== null) {\n    const active = projects.filter((proj) => proj.id === localStorage.getItem('active'))[0]\n    console.log(\"active: \" + active.name);\n    (0,_modules_DOM_renderTasks__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(active.id);\n}\n\n\n//Home Page Buttons\nconst NEWPROJECT = document.querySelector('#projadd');\nconst NEWTASK = document.querySelector('#taskadd');\n\n\n\nNEWPROJECT.addEventListener(\"click\", () => {\n    if (document.querySelector('#projectPrompt') === null) {\n        (0,_modules_DOM_projectPrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projects); \n        //need to add edit button for the project name too\n    }\n});\n\n\n\n\nNEWTASK.addEventListener(\"click\", () => {\n    const active = (0,_modules_storage_checkActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    if (!active) {\n        alert(\"Please select a project to add task into!\");\n    } else if (document.querySelector('#taskPrompt') === null) {\n        let projectid = null;\n        projects = (0,_modules_storage_getProjects__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        for (let i = 0; i < projects.length; i++) {\n            if (projects[i].id === active) {\n                console.log(\"task adding into: \" + projects[i].name); \n                projectid = projects[i].id;\n            }\n        }\n        (0,_modules_DOM_taskPrompt__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(projectid);\n    }\n});\n\n//crud for project\n//crud for todos\n//dom functions for project\n//dom functions for tasks\n//function to sort by today\n//function to sort by upcoming\n\n\n\n//# sourceURL=webpack://odin-js-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM/IconRenders/mainLogo.js":
/*!*************************************************!*\
  !*** ./src/modules/DOM/IconRenders/mainLogo.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mainLogo)\n/* harmony export */ });\n/* harmony import */ var _icons_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../icons/logo.svg */ \"./src/icons/logo.svg\");\n \n\nfunction mainLogo() {\n    const LOGO = document.querySelector('#toplogo');\n\n    const TopLogo = new Image(); \n    TopLogo.src = _icons_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\n    LOGO.prepend(TopLogo);\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/IconRenders/mainLogo.js?");

/***/ }),

/***/ "./src/modules/DOM/IconRenders/todayIcon.js":
/*!**************************************************!*\
  !*** ./src/modules/DOM/IconRenders/todayIcon.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todayIcon)\n/* harmony export */ });\n/* harmony import */ var _icons_today_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../icons/today.svg */ \"./src/icons/today.svg\");\n\n\nfunction todayIcon() {\n    const TODAY = document.querySelector('#today');\n\n    const Today = new Image(); \n    Today.src = _icons_today_svg__WEBPACK_IMPORTED_MODULE_0__; \n    TODAY.prepend(Today);\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/IconRenders/todayIcon.js?");

/***/ }),

/***/ "./src/modules/DOM/IconRenders/upcomingIcon.js":
/*!*****************************************************!*\
  !*** ./src/modules/DOM/IconRenders/upcomingIcon.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ upcomingIcon)\n/* harmony export */ });\n/* harmony import */ var _icons_upcoming_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../icons/upcoming.svg */ \"./src/icons/upcoming.svg\");\n\n\nfunction upcomingIcon() {\n    const UPCOMING = document.querySelector('#upcoming');\n\n    const Upcoming = new Image(); \n    Upcoming.src = _icons_upcoming_svg__WEBPACK_IMPORTED_MODULE_0__;\n    UPCOMING.prepend(Upcoming);\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/IconRenders/upcomingIcon.js?");

/***/ }),

/***/ "./src/modules/DOM/priority.js":
/*!*************************************!*\
  !*** ./src/modules/DOM/priority.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ priority)\n/* harmony export */ });\n/* harmony import */ var _storage_updatePrio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/updatePrio */ \"./src/modules/storage/updatePrio.js\");\n\n\nfunction priority(task, i){ \n    setTimeout(() => {\n        const high = document.querySelector('#high' + i);\n        const med = document.querySelector('#med' + i);\n        const low = document.querySelector('#low' + i);\n\n        high.addEventListener(\"click\", () => {\n            \n        })\n\n        if (task.priority === 'high') {\n            high.style.backgroundColor = 'red'; \n            high.style.color = 'white';\n        } else if (task.priority === 'med') {\n            med.style.backgroundColor = 'orange'; \n            med.style.color = 'white';\n        } else {\n            low.style.backgroundColor = 'green'; \n            low.style.color = 'white';\n        }\n    }, 50);\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/priority.js?");

/***/ }),

/***/ "./src/modules/DOM/projectPrompt.js":
/*!******************************************!*\
  !*** ./src/modules/DOM/projectPrompt.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectPrompt)\n/* harmony export */ });\n/* harmony import */ var _projectPromptStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPromptStyle.css */ \"./src/modules/DOM/projectPromptStyle.css\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _storage_storeProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storeProject */ \"./src/modules/storage/storeProject.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjects */ \"./src/modules/DOM/renderProjects.js\");\n/* harmony import */ var _storage_getProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/getProjects */ \"./src/modules/storage/getProjects.js\");\n/* harmony import */ var _storage_updateActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/updateActive */ \"./src/modules/storage/updateActive.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderTasks */ \"./src/modules/DOM/renderTasks.js\");\n/* harmony import */ var _storage_checkActive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage/checkActive */ \"./src/modules/storage/checkActive.js\");\n\n\n\n\n\n\n\n\n \nfunction projectPrompt(projects) {\n    \n    const PROJECTLIST = document.querySelector('#projectlist');\n\n    const prompt = () => {\n        const element = document.createElement(\"div\");\n        element.classList.add(\"sidebaritem\");\n        element.setAttribute('id', 'projectPrompt');\n        element.innerHTML = '<input type=\"text\" id=\"projectPromptText\">';\n        element.style.backgroundColor = 'rgb(200, 200, 200, 0.1)';\n\n        return element;\n    }\n\n    PROJECTLIST.appendChild(prompt());\n    document.querySelector('#projectPromptText').focus(); \n\n    function myClick(event) {\n        if (!document.querySelector('#projectPromptText').contains(event.target) && !document.querySelector('#projadd').contains(event.target)) {\n            const projName = document.querySelector('#projectPromptText').value;\n\n            for (let i = 0; i < projects.length; i++) {\n                if (projects[i].name === projName) {\n                    alert('Project already exists. Please enter another name.');\n                    return;\n                }\n            }\n\n            if (projName.length === 0) {\n                //to 'cancel'\n                (0,_renderProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_storage_getProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n                (0,_renderTasks__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_storage_checkActive__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()); \n                document.removeEventListener('click', myClick);\n            } else {\n                const id = (0,uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); \n                (0,_storage_storeProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projName, id);\n                (0,_storage_updateActive__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id); \n                (0,_renderProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_storage_getProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n                (0,_renderTasks__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(id);\n                document.removeEventListener('click', myClick);\n                console.log(id + \" => \" + projName + \" added!\");\n            }\n        }\n    }\n    \n    document.addEventListener('click', myClick);\n}\n\n\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/projectPrompt.js?");

/***/ }),

/***/ "./src/modules/DOM/renderProjects.js":
/*!*******************************************!*\
  !*** ./src/modules/DOM/renderProjects.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _icons_newproject_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/newproject.svg */ \"./src/icons/newproject.svg\");\n/* harmony import */ var _storage_getProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/getProjects */ \"./src/modules/storage/getProjects.js\");\n/* harmony import */ var _storage_removeActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/removeActive */ \"./src/modules/storage/removeActive.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTasks */ \"./src/modules/DOM/renderTasks.js\");\n\n\n\n\n\nfunction renderProjects(arr) { \n    const PROJECTLIST = document.querySelector('#projectlist');\n    PROJECTLIST.innerHTML = '';\n\n    for (let i = 0; i < arr.length; i++) {\n        const element = document.createElement(\"div\");\n        element.classList.add(\"sidebaritem\");\n        element.setAttribute('id', arr[i].id);\n        element.textContent = arr[i].name;\n\n        const deleteButton = document.createElement(\"button\");\n        deleteButton.classList.add(\"deleteproj\");\n\n        deleteButton.addEventListener(\"click\", () => {\n            (0,_storage_removeActive__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr[i].id); \n            localStorage.removeItem(arr[i].id);\n            console.log(arr[i].id + \" => \" + arr[i].name + \" removed!\");\n            renderProjects((0,_storage_getProjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()); \n            document.querySelector('#main').innerHTML = '';\n        })\n\n        element.appendChild(deleteButton);  \n\n        const newProj = new Image(); \n        newProj.src = _icons_newproject_svg__WEBPACK_IMPORTED_MODULE_0__;\n        element.prepend(newProj);\n\n        if (arr[i].id === localStorage.getItem(\"active\")) {\n            element.style.backgroundColor = 'rgb(200, 200, 200, 0.4)';\n        }\n\n        element.addEventListener(\"click\", (e) => {\n            if (!deleteButton.contains(e.target)) {\n                localStorage.setItem(\"active\", arr[i].id);\n                console.log(\"active project: \" + arr[i].name); \n                renderProjects((0,_storage_getProjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()); \n                (0,_renderTasks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arr[i].id);\n            }\n        })\n\n        PROJECTLIST.appendChild(element);\n    }\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/renderProjects.js?");

/***/ }),

/***/ "./src/modules/DOM/renderTasks.js":
/*!****************************************!*\
  !*** ./src/modules/DOM/renderTasks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _storage_retrieveTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/retrieveTasks */ \"./src/modules/storage/retrieveTasks.js\");\n/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priority */ \"./src/modules/DOM/priority.js\");\n\n\n\nfunction renderTasks(projectid) {\n    const store = (0,_storage_retrieveTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectid); \n    const MAIN = document.querySelector('#main');\n    MAIN.innerHTML = \"\";\n\n    for (let i = 0; i < store.length; i++) {\n        const task = store[i];\n\n        const element = document.createElement(\"div\");\n        element.classList.add(\"task\");\n        element.setAttribute('id', \"task\" + i);\n        element.innerHTML = '<button class=\"taskcheck\"></button>\\\n                            <div class=\"tasktitle\"><h5>' + task.title + '</h5></div>\\\n                            <div class=\"taskdesc\">' + task.description + '</div>\\\n                            <div class=\"taskduedate\">Due:' + task.dueDate + '</div>\\\n                            <div class=\"taskpriority\">\\\n                                <button id=\"high' + i + '\" class=\"prio\">***</button>\\\n                                <button id=\"med' + i + '\" class=\"prio\">**</button>\\\n                                <button id=\"low' + i + '\" class=\"prio\">*</button>\\\n                            </div>'; \n\n                           \n        (0,_priority__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task, i, projectid);\n\n        element.appendChild \n    \n        MAIN.appendChild(element);\n    }\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/renderTasks.js?");

/***/ }),

/***/ "./src/modules/DOM/taskPrompt.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/taskPrompt.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskPrompt)\n/* harmony export */ });\n/* harmony import */ var _taskPromptStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPromptStyle.css */ \"./src/modules/DOM/taskPromptStyle.css\");\n/* harmony import */ var _storage_storeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storeTask */ \"./src/modules/storage/storeTask.js\");\n/* harmony import */ var _DOM_renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOM/renderTasks */ \"./src/modules/DOM/renderTasks.js\");\n/* harmony import */ var _storage_checkActive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/checkActive */ \"./src/modules/storage/checkActive.js\");\n\n\n\n\n\nfunction taskPrompt(projectid) {\n    const prompt = () => {\n        const element = document.createElement(\"div\");\n        element.classList.add(\"task\");\n        element.setAttribute('id', 'taskPrompt');\n        element.innerHTML = '<button id=\"addtask\"></button>\\\n                                <input class=\"prompttext\" type=\"text\" id=\"tasktitleprompt\" placeholder=\"Task Name\">\\\n                                <input class=\"prompttext\" type=\"text\" id=\"taskdescprompt\" placeholder=\"Task Description\">\\\n                                <div id=\"duedateprompt\">\\\n                                    <label for=\"dateprompt\">Due: </label>\\\n                                    <input class=\"prompttext\" type=\"date\" id=\"dateprompt\">\\\n                                </div>\\\n                                <div class=\"taskpriority\" id=\"taskprioprompt\">\\\n                                    <input type=\"radio\" name=\"prio\"  id=\"high\" value=\"high\">\\\n                                    <label for=\"high\" id=\"highlabel\" class=\"priobuttons\">***</label>\\\n                                    <input type=\"radio\" name=\"prio\" id=\"med\" value=\"med\">\\\n                                    <label for=\"med\" id=\"medlabel\" class=\"priobuttons\">**</label>\\\n                                    <input type=\"radio\" name=\"prio\" id=\"low\" value=\"low\">\\\n                                    <label for=\"low\" id=\"lowlabel\" class=\"priobuttons\">*</label>\\\n                                </div>';\n\n        return element;\n    }\n\n    const element = prompt();\n    const MAIN = document.querySelector('#main'); \n    MAIN.appendChild(element);\n\n    const TITLE = document.querySelector('#tasktitleprompt');\n    const DESC = document.querySelector('#taskdescprompt');\n    const DATE = document.querySelector('#dateprompt');\n\n    function exitOnce(event) {\n        if (!document.querySelector('#taskPrompt').contains(event.target) && !document.querySelector('#taskadd').contains(event.target)) {\n            console.log(\"exited\");\n            (0,_DOM_renderTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_storage_checkActive__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n            document.removeEventListener(\"click\", exitOnce);\n        }\n    }\n\n    document.querySelector('#addtask').addEventListener(\"click\", () => {\n        const PRIO = document.querySelector('input[name=\"prio\"]:checked');\n        if (TITLE.value === \"\") {\n            alert(\"Please enter a valid task name!\");\n        } else if (DATE.value === \"\") { //format: 2024-07-01\n            //need to check for current date here\n            alert(\"Please select a due date for your task!\");\n        } else if (PRIO === null) {\n            alert(\"Please select a priority for this task!\");\n        } else if (DESC.value.length > 30) {\n            alert(\"Please shorten your description!\");\n        } else {\n            TITLE.focus();\n            document.removeEventListener(\"click\", exitOnce);\n            (0,_storage_storeTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectid, TITLE.value, DESC.value, DATE.value, PRIO.value);\n            (0,_DOM_renderTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectid);\n        }\n    })\n\n    document.addEventListener(\"click\", exitOnce);\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/DOM/taskPrompt.js?");

/***/ }),

/***/ "./src/modules/classes/project.js":
/*!****************************************!*\
  !*** ./src/modules/classes/project.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\nfunction project(id, name) {\n    const store = [];\n    \n    return {\n        id, \n        name,\n        store\n    }\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/classes/project.js?");

/***/ }),

/***/ "./src/modules/classes/todo.js":
/*!*************************************!*\
  !*** ./src/modules/classes/todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todo)\n/* harmony export */ });\nfunction todo(title, description, dueDate, priority, done=false) {\n\n        return {\n            title, \n            description, \n            dueDate, \n            priority, \n            done\n        }\n    }\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/classes/todo.js?");

/***/ }),

/***/ "./src/modules/storage/checkActive.js":
/*!********************************************!*\
  !*** ./src/modules/storage/checkActive.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkActive)\n/* harmony export */ });\nfunction checkActive() { \n    if (localStorage.getItem('active') !== null) {\n        const active = localStorage.getItem('active'); \n        console.log(active + \" retrieved!\");\n        return active;\n    } else {    \n        return false; \n    }\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/checkActive.js?");

/***/ }),

/***/ "./src/modules/storage/getProjects.js":
/*!********************************************!*\
  !*** ./src/modules/storage/getProjects.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getProjects)\n/* harmony export */ });\nfunction getProjects() {\n    let projects = [];\n    for (let i = 0; i < localStorage.length; i++) {\n      let key = localStorage.key(i);\n      if (key !== \"active\") {\n        let value = localStorage.getItem(key);\n        projects.push(JSON.parse(value));\n      }\n    }\n\n    //can try sorting here to maintain add order;\n\n    return projects;\n  }\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/getProjects.js?");

/***/ }),

/***/ "./src/modules/storage/removeActive.js":
/*!*********************************************!*\
  !*** ./src/modules/storage/removeActive.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeActive)\n/* harmony export */ });\nfunction removeActive(id) {\n    if (localStorage.getItem('active') !== null) {\n        if (id === localStorage.getItem(\"active\")) {\n            localStorage.removeItem(\"active\");\n            console.log(\"active updated!\");\n            console.log(localStorage.getItem(\"active\"));\n        }\n    }\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/removeActive.js?");

/***/ }),

/***/ "./src/modules/storage/retrieveTasks.js":
/*!**********************************************!*\
  !*** ./src/modules/storage/retrieveTasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveTasks)\n/* harmony export */ });\nfunction retrieveTasks(projectid) {\n    const project = JSON.parse(localStorage.getItem(projectid));\n    return project.store;  \n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/retrieveTasks.js?");

/***/ }),

/***/ "./src/modules/storage/storeProject.js":
/*!*********************************************!*\
  !*** ./src/modules/storage/storeProject.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ storeProject)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/modules/classes/project.js\");\n\n\nfunction storeProject(name, id) {\n    const newProject = (0,_classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, name); \n    localStorage.setItem(id, JSON.stringify(newProject));\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/storeProject.js?");

/***/ }),

/***/ "./src/modules/storage/storeTask.js":
/*!******************************************!*\
  !*** ./src/modules/storage/storeTask.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ storeTask)\n/* harmony export */ });\n/* harmony import */ var _classes_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/todo */ \"./src/modules/classes/todo.js\");\n\n\nfunction storeTask(projectid, title, description, dueDate, priority) {\n    const newTask = (0,_classes_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority);\n    const project = JSON.parse(localStorage.getItem(projectid));\n    project.store.push(newTask);\n    localStorage.setItem(projectid, JSON.stringify(project))\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/storeTask.js?");

/***/ }),

/***/ "./src/modules/storage/updateActive.js":
/*!*********************************************!*\
  !*** ./src/modules/storage/updateActive.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateActive)\n/* harmony export */ });\nfunction updateActive(id) { \n    localStorage.setItem('active', id); \n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/updateActive.js?");

/***/ }),

/***/ "./src/modules/storage/updatePrio.js":
/*!*******************************************!*\
  !*** ./src/modules/storage/updatePrio.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updatePrio)\n/* harmony export */ });\nfunction updatePrio(projectid, task) {\n    /*const proj = localStorage.getItem(projectid);\n    for (let i = 0; i < proj.store.length; i++) {\n        const task = store[i];\n        if (task.id === ) {}\n    }\n    */\n}\n\n//# sourceURL=webpack://odin-js-todo/./src/modules/storage/updatePrio.js?");

/***/ }),

/***/ "./src/icons/close.svg":
/*!*****************************!*\
  !*** ./src/icons/close.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97d4c0a10ac97607dc65.svg\";\n\n//# sourceURL=webpack://odin-js-todo/./src/icons/close.svg?");

/***/ }),

/***/ "./src/icons/folder-plus-outline.svg":
/*!*******************************************!*\
  !*** ./src/icons/folder-plus-outline.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d2fd870c4ed4c97433c.svg\";\n\n//# sourceURL=webpack://odin-js-todo/./src/icons/folder-plus-outline.svg?");

/***/ }),

/***/ "./src/icons/logo.svg":
/*!****************************!*\
  !*** ./src/icons/logo.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad9e4abc7465fd3cbc14.svg\";\n\n//# sourceURL=webpack://odin-js-todo/./src/icons/logo.svg?");

/***/ }),

/***/ "./src/icons/newproject.svg":
/*!**********************************!*\
  !*** ./src/icons/newproject.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d27b5abe21b7f274559.svg\";\n\n//# sourceURL=webpack://odin-js-todo/./src/icons/newproject.svg?");

/***/ }),

/***/ "./src/icons/plus.svg":
/*!****************************!*\
  !*** ./src/icons/plus.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cffe9a515498593b872.svg\";\n\n//# sourceURL=webpack://odin-js-todo/./src/icons/plus.svg?");

/***/ }),

/***/ "./src/icons/today.svg":
/*!*****************************!*\
  !*** ./src/icons/today.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3faae0cf01e4ecd160ef.svg\";\n\n//# sourceURL=webpack://odin-js-todo/./src/icons/today.svg?");

/***/ }),

/***/ "./src/icons/upcoming.svg":
/*!********************************!*\
  !*** ./src/icons/upcoming.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18f552623324e58156e6.svg\";\n\n//# sourceURL=webpack://odin-js-todo/./src/icons/upcoming.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;