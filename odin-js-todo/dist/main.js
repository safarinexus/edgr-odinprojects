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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/close.svg */ \"./src/icons/close.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/folder-plus-outline.svg */ \"./src/icons/folder-plus-outline.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/plus.svg */ \"./src/icons/plus.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root { \n    font-family: 'Space Mono';\n    color: white;\n}\n\n\nbody {\n    background-color: #111;\n    box-sizing: border-box;\n    margin: 0; \n    padding: 0;\n    display: grid; \n    grid-gap: 0.4px;\n    height: 100vh; \n    width: 100vw;\n    grid-template-columns: min(max(20%, 200px), 360px) auto; \n    grid-template-rows: 80px auto 4%;\n    position: relative;\n}\n\n/*============================HEADER============================*/\n\nheader {\n    background-color: #111;\n    grid-column: span 2; \n    box-sizing: border-box;\n    padding: 20px;\n    position: relative;\n    box-shadow: 0px 0.1px 3px 0.5px black;\n}\n\nheader img {\n    height: 40px; \n    width: 40px; \n    filter: invert(100%);\n    margin-right: 15px;\n}\n\nheader>a {\n    position: absolute;\n    bottom: 18px;\n    display: flex; \n    justify-content: baseline;\n    align-items: center;\n    text-decoration: none;\n}\n\nheader>a:visited {\n    color: inherit; \n    text-decoration: none;\n}\n\nheader h1 {\n    margin: 0;\n}\n\nheader>h6 {\n    position: absolute; \n    right: 10px;\n    bottom: 0;\n    color: lightgray; \n}\n\nheader>h6:hover {\n    cursor: progress;\n}\n\n/*============================SIDEBAR============================*/\n\n#sidebar {\n    background-color: #333;\n    grid-row: 2;\n    display: grid; \n    grid-template-rows: 90px auto;\n    padding: 20px;\n    align-items: center;\n}\n\n#fixeditems {\n    height: 100%; \n    width: 100%;\n    padding-bottom: 20px;\n    box-sizing: border-box;\n    display: flex; \n    flex-direction: column;\n    justify-content: space-between;\n    border-bottom: 1px solid whitesmoke;\n}\n\n#projectlist {\n    height: 100%; \n    width: 100%;\n    box-sizing: border-box;\n    display: flex; \n    flex-direction: column;\n    justify-content: baseline;\n    padding-top: 20px;\n    flex-wrap: nowrap;\n    overflow: auto;\n}\n\n.sidebaritem {\n    border-radius: 5px;\n    height: 25px;\n    padding: 5px;\n    display: flex; \n    align-items: center;\n    position: relative;\n}\n\n.sidebaritem:hover {\n    background-color: rgb(200, 200, 200, 0.4);\n    cursor: pointer;\n}\n\n.sidebaritem>img {\n    height: 20px; \n    width: 20px;\n    filter: invert(100%);\n    margin-right: 5px;\n}\n\n#deleteproj {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    height: 20px; \n    width: 20px;\n    position: absolute; \n    right: 5px;\n    border: 0;\n    filter: invert(100%);\n    background-color: rgb(0,0,0,0);\n    opacity: 0;\n}\n\n#deleteproj:hover {\n    opacity: 100%;\n    cursor: pointer;\n}\n/*\n#deleteproj:active {\n}\n*/\n\n/*============================MAINAREA============================*/\n\n#main {\n    width: max(100%, 400px);\n    background-color: #222;\n    /*\n    display: grid; \n    grid-template-columns: repeat(auto-fit, 240px); \n    grid-template-rows: repeat(auto-fit, 270px);\n    */\n}\n\n.task {\n    height: 50px;\n    display: block grid;\n    grid-template-columns: 7% 65% 28%;\n    grid-template-rows: 1fr 1fr;\n    background-color: rgb(180, 180, 180, 0.75);\n    border-radius: 8px;\n    margin: 10px;\n    box-sizing: border-box;\n}\n\n.taskdone {\n    grid-row: 1 / span 2; \n    grid-column: 1;\n    margin: 0;\n    height: 15px; \n    width: 15px;\n    border: 0;\n    justify-self: center;\n    align-self: center;\n}\n\n.tasktitle {\n    font-weight: 500;\n    grid-column: 2; \n    grid-row: 1; \n    margin: 0;\n    align-self: end;\n}\n\n.taskdesc {\n    grid-column: 2; \n    grid-row: 2; \n    margin: 0;\n    font-size: x-small;\n}\n\n.taskduedate {\n    align-self: end;\n}\n\n.taskduedate, .taskpriority {\n    font-size: x-small;\n}\n\n/*=============================FOOTER=============================*/\n\n#pseudofooter {\n    background-color: #333;\n    display: flex; \n    justify-content: center;\n}\n\nfooter { \n    width: max(100%, 400px);\n    background-color: #222;\n    display: flex; \n    justify-content: center;\n}\n\n#projadd { \n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n#taskadd {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n#projadd, #taskadd { \n    height: 30px; \n    width: 30px;\n    border: 0;\n    filter: invert(100%);\n    background-color: rgb(0,0,0,0);\n}\n\n#projadd:hover, #taskadd:hover { \n    cursor: pointer;\n    opacity: 40%;\n}\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-js-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/formatDistance.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/subDays.mjs\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _icons_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/logo.svg */ \"./src/icons/logo.svg\");\n/* harmony import */ var _icons_today_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/today.svg */ \"./src/icons/today.svg\");\n/* harmony import */ var _icons_upcoming_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/upcoming.svg */ \"./src/icons/upcoming.svg\");\n/* harmony import */ var _icons_newproject_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/newproject.svg */ \"./src/icons/newproject.svg\");\nconsole.log('initiated');\n\n\n\n(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDistance)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.subDays)(new Date(), 3), new Date(), { addSuffix: true });\n\n\n\n\n\n \n//todo class\n//project class\n//crud project \n//crud todos\n//dom functions for project\n//dom functions for tasks\n//function to sort by today\n//function to sort by upcoming\n\nconst LOGO = document.querySelector('#toplogo');\nconst TODAY = document.querySelector('#today');\nconst UPCOMING = document.querySelector('#upcoming');\n\n//adding all images\nconst TopLogo = new Image(); \nTopLogo.src = _icons_logo_svg__WEBPACK_IMPORTED_MODULE_3__;\nLOGO.prepend(TopLogo);\n\nconst Today = new Image(); \nToday.src = _icons_today_svg__WEBPACK_IMPORTED_MODULE_4__; \nTODAY.prepend(Today);\n\nconst Upcoming = new Image(); \nUpcoming.src = _icons_upcoming_svg__WEBPACK_IMPORTED_MODULE_5__;\nUPCOMING.prepend(Upcoming);\n\nconst newProj = new Image(); \nnewProj.src = _icons_newproject_svg__WEBPACK_IMPORTED_MODULE_6__;\ndocument.querySelector('#newproj1').prepend(newProj);\n\n//# sourceURL=webpack://odin-js-todo/./src/index.js?");

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

/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nlet defaultOptions = {};\n\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\n\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/_lib/defaultOptions.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/getRoundingMethod.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)\n/* harmony export */ });\nfunction getRoundingMethod(method) {\n  return (number) => {\n    const round = method ? Math[method] : Math.trunc;\n    const result = round(number);\n    // Prevent negative zero\n    return result === 0 ? 0 : result;\n  };\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/_lib/getRoundingMethod.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const utcDate = new Date(\n    Date.UTC(\n      _date.getFullYear(),\n      _date.getMonth(),\n      _date.getDate(),\n      _date.getHours(),\n      _date.getMinutes(),\n      _date.getSeconds(),\n      _date.getMilliseconds(),\n    ),\n  );\n  utcDate.setUTCFullYear(_date.getFullYear());\n  return +date - +utcDate;\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDays: () => (/* binding */ addDays),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ \"./node_modules/date-fns/constructFrom.mjs\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param amount - The amount of days to be added.\n *\n * @returns The new date with the days added\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays(date, amount) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return _date;\n  }\n  _date.setDate(_date.getDate() + amount);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/addDays.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareAsc: () => (/* binding */ compareAsc),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to compare\n * @param dateRight - The second date to compare\n *\n * @returns The result of the comparison\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const diff = _dateLeft.getTime() - _dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/compareAsc.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),\n/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * @module constants\n * @summary Useful constants\n * @description\n * Collection of useful date constants.\n *\n * The constants could be imported from `date-fns/constants`:\n *\n * ```ts\n * import { maxTime, minTime } from \"./constants/date-fns/constants\";\n *\n * function isAllowedTime(time) {\n *   return time <= maxTime && time >= minTime;\n * }\n * ```\n */\n\n/**\n * @constant\n * @name daysInWeek\n * @summary Days in 1 week.\n */\nconst daysInWeek = 7;\n\n/**\n * @constant\n * @name daysInYear\n * @summary Days in 1 year.\n *\n * @description\n * How many days in a year.\n *\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n */\nconst daysInYear = 365.2425;\n\n/**\n * @constant\n * @name maxTime\n * @summary Maximum allowed time.\n *\n * @example\n * import { maxTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = 8640000000000001 <= maxTime;\n * //=> false\n *\n * new Date(8640000000000001);\n * //=> Invalid Date\n */\nconst maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * @constant\n * @name minTime\n * @summary Minimum allowed time.\n *\n * @example\n * import { minTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = -8640000000000001 >= minTime;\n * //=> false\n *\n * new Date(-8640000000000001)\n * //=> Invalid Date\n */\nconst minTime = -maxTime;\n\n/**\n * @constant\n * @name millisecondsInWeek\n * @summary Milliseconds in 1 week.\n */\nconst millisecondsInWeek = 604800000;\n\n/**\n * @constant\n * @name millisecondsInDay\n * @summary Milliseconds in 1 day.\n */\nconst millisecondsInDay = 86400000;\n\n/**\n * @constant\n * @name millisecondsInMinute\n * @summary Milliseconds in 1 minute\n */\nconst millisecondsInMinute = 60000;\n\n/**\n * @constant\n * @name millisecondsInHour\n * @summary Milliseconds in 1 hour\n */\nconst millisecondsInHour = 3600000;\n\n/**\n * @constant\n * @name millisecondsInSecond\n * @summary Milliseconds in 1 second\n */\nconst millisecondsInSecond = 1000;\n\n/**\n * @constant\n * @name minutesInYear\n * @summary Minutes in 1 year.\n */\nconst minutesInYear = 525600;\n\n/**\n * @constant\n * @name minutesInMonth\n * @summary Minutes in 1 month.\n */\nconst minutesInMonth = 43200;\n\n/**\n * @constant\n * @name minutesInDay\n * @summary Minutes in 1 day.\n */\nconst minutesInDay = 1440;\n\n/**\n * @constant\n * @name minutesInHour\n * @summary Minutes in 1 hour.\n */\nconst minutesInHour = 60;\n\n/**\n * @constant\n * @name monthsInQuarter\n * @summary Months in 1 quarter.\n */\nconst monthsInQuarter = 3;\n\n/**\n * @constant\n * @name monthsInYear\n * @summary Months in 1 year.\n */\nconst monthsInYear = 12;\n\n/**\n * @constant\n * @name quartersInYear\n * @summary Quarters in 1 year\n */\nconst quartersInYear = 4;\n\n/**\n * @constant\n * @name secondsInHour\n * @summary Seconds in 1 hour.\n */\nconst secondsInHour = 3600;\n\n/**\n * @constant\n * @name secondsInMinute\n * @summary Seconds in 1 minute.\n */\nconst secondsInMinute = 60;\n\n/**\n * @constant\n * @name secondsInDay\n * @summary Seconds in 1 day.\n */\nconst secondsInDay = secondsInHour * 24;\n\n/**\n * @constant\n * @name secondsInWeek\n * @summary Seconds in 1 week.\n */\nconst secondsInWeek = secondsInDay * 7;\n\n/**\n * @constant\n * @name secondsInYear\n * @summary Seconds in 1 year.\n */\nconst secondsInYear = secondsInDay * daysInYear;\n\n/**\n * @constant\n * @name secondsInMonth\n * @summary Seconds in 1 month\n */\nconst secondsInMonth = secondsInYear / 12;\n\n/**\n * @constant\n * @name secondsInQuarter\n * @summary Seconds in 1 quarter.\n */\nconst secondsInQuarter = secondsInMonth * 3;\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/constants.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from 'date-fns'\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use contrustor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   )\n * }\n */\nfunction constructFrom(date, value) {\n  if (date instanceof Date) {\n    return new date.constructor(value);\n  } else {\n    return new Date(value);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/constructFrom.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarMonths.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarMonths.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInCalendarMonths: () => (/* binding */ differenceInCalendarMonths)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name differenceInCalendarMonths\n * @category Month Helpers\n * @summary Get the number of calendar months between the given dates.\n *\n * @description\n * Get the number of calendar months between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of calendar months\n *\n * @example\n * // How many calendar months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInCalendarMonths(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 0, 31)\n * )\n * //=> 8\n */\nfunction differenceInCalendarMonths(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();\n  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();\n\n  return yearDiff * 12 + monthDiff;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarMonths);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/differenceInCalendarMonths.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInMilliseconds: () => (/* binding */ differenceInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name differenceInMilliseconds\n * @category Millisecond Helpers\n * @summary Get the number of milliseconds between the given dates.\n *\n * @description\n * Get the number of milliseconds between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of milliseconds\n *\n * @example\n * // How many milliseconds are between\n * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?\n * const result = differenceInMilliseconds(\n *   new Date(2014, 6, 2, 12, 30, 21, 700),\n *   new Date(2014, 6, 2, 12, 30, 20, 600)\n * )\n * //=> 1100\n */\nfunction differenceInMilliseconds(dateLeft, dateRight) {\n  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft) - +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMilliseconds);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/differenceInMilliseconds.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInMonths.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInMonths.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInMonths: () => (/* binding */ differenceInMonths)\n/* harmony export */ });\n/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareAsc.mjs */ \"./node_modules/date-fns/compareAsc.mjs\");\n/* harmony import */ var _differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceInCalendarMonths.mjs */ \"./node_modules/date-fns/differenceInCalendarMonths.mjs\");\n/* harmony import */ var _isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLastDayOfMonth.mjs */ \"./node_modules/date-fns/isLastDayOfMonth.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n\n\n/**\n * @name differenceInMonths\n * @category Month Helpers\n * @summary Get the number of full months between the given dates.\n *\n * @description\n * Get the number of full months between the given dates using trunc as a default rounding method.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of full months\n *\n * @example\n * // How many full months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))\n * //=> 7\n */\nfunction differenceInMonths(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const sign = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight);\n  const difference = Math.abs(\n    (0,_differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__.differenceInCalendarMonths)(_dateLeft, _dateRight),\n  );\n  let result;\n\n  // Check for the difference of less than month\n  if (difference < 1) {\n    result = 0;\n  } else {\n    if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {\n      // This will check if the date is end of Feb and assign a higher end of month date\n      // to compare it with Jan\n      _dateLeft.setDate(30);\n    }\n\n    _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);\n\n    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full\n    // If so, result must be decreased by 1 in absolute value\n    let isLastMonthNotFull = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight) === -sign;\n\n    // Check for cases of one full calendar month\n    if (\n      (0,_isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__.isLastDayOfMonth)((0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft)) &&\n      difference === 1 &&\n      (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(dateLeft, _dateRight) === 1\n    ) {\n      isLastMonthNotFull = false;\n    }\n\n    result = sign * (difference - Number(isLastMonthNotFull));\n  }\n\n  // Prevent negative zero\n  return result === 0 ? 0 : result;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMonths);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/differenceInMonths.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/differenceInSeconds.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/differenceInSeconds.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInSeconds: () => (/* binding */ differenceInSeconds)\n/* harmony export */ });\n/* harmony import */ var _lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getRoundingMethod.mjs */ \"./node_modules/date-fns/_lib/getRoundingMethod.mjs\");\n/* harmony import */ var _differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.mjs */ \"./node_modules/date-fns/differenceInMilliseconds.mjs\");\n\n\n\n/**\n * The {@link differenceInSeconds} function options.\n */\n\n/**\n * @name differenceInSeconds\n * @category Second Helpers\n * @summary Get the number of seconds between the given dates.\n *\n * @description\n * Get the number of seconds between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n * @param options - An object with options.\n *\n * @returns The number of seconds\n *\n * @example\n * // How many seconds are between\n * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?\n * const result = differenceInSeconds(\n *   new Date(2014, 6, 2, 12, 30, 20, 0),\n *   new Date(2014, 6, 2, 12, 30, 7, 999)\n * )\n * //=> 12\n */\nfunction differenceInSeconds(dateLeft, dateRight, options) {\n  const diff = (0,_differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(dateLeft, dateRight) / 1000;\n  return (0,_lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__.getRoundingMethod)(options?.roundingMethod)(diff);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInSeconds);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/differenceInSeconds.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/endOfDay.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/endOfDay.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfDay: () => (/* binding */ endOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name endOfDay\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The end of a day\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\nfunction endOfDay(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  _date.setHours(23, 59, 59, 999);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfDay);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/endOfDay.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/endOfMonth.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfMonth.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfMonth: () => (/* binding */ endOfMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name endOfMonth\n * @category Month Helpers\n * @summary Return the end of a month for the given date.\n *\n * @description\n * Return the end of a month for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The end of a month\n *\n * @example\n * // The end of a month for 2 September 2014 11:55:00:\n * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 23:59:59.999\n */\nfunction endOfMonth(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const month = _date.getMonth();\n  _date.setFullYear(_date.getFullYear(), month + 1, 0);\n  _date.setHours(23, 59, 59, 999);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfMonth);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/endOfMonth.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/formatDistance.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/formatDistance.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   formatDistance: () => (/* binding */ formatDistance)\n/* harmony export */ });\n/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareAsc.mjs */ \"./node_modules/date-fns/compareAsc.mjs\");\n/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.mjs */ \"./node_modules/date-fns/constants.mjs\");\n/* harmony import */ var _differenceInMonths_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./differenceInMonths.mjs */ \"./node_modules/date-fns/differenceInMonths.mjs\");\n/* harmony import */ var _differenceInSeconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./differenceInSeconds.mjs */ \"./node_modules/date-fns/differenceInSeconds.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ \"./node_modules/date-fns/locale/en-US.mjs\");\n/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ \"./node_modules/date-fns/_lib/defaultOptions.mjs\");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ \"./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs\");\n\n\n\n\n\n\n\n\n\n/**\n * The {@link formatDistance} function options.\n */\n\n/**\n * @name formatDistance\n * @category Common Helpers\n * @summary Return the distance between the given dates in words.\n *\n * @description\n * Return the distance between the given dates in words.\n *\n * | Distance between dates                                            | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance between dates | Result               |\n * |------------------------|----------------------|\n * | 0 secs ... 5 secs      | less than 5 seconds  |\n * | 5 secs ... 10 secs     | less than 10 seconds |\n * | 10 secs ... 20 secs    | less than 20 seconds |\n * | 20 secs ... 40 secs    | half a minute        |\n * | 40 secs ... 60 secs    | less than a minute   |\n * | 60 secs ... 90 secs    | 1 minute             |\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date\n * @param baseDate - The date to compare with\n * @param options - An object with options\n *\n * @returns The distance in words\n *\n * @throws `date` must not be Invalid Date\n * @throws `baseDate` must not be Invalid Date\n * @throws `options.locale` must contain `formatDistance` property\n *\n * @example\n * // What is the distance between 2 July 2014 and 1 January 2015?\n * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))\n * //=> '6 months'\n *\n * @example\n * // What is the distance between 1 January 2015 00:00:15\n * // and 1 January 2015 00:00:00, including seconds?\n * const result = formatDistance(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   new Date(2015, 0, 1, 0, 0, 0),\n *   { includeSeconds: true }\n * )\n * //=> 'less than 20 seconds'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, with a suffix?\n * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {\n *   addSuffix: true\n * })\n * //=> 'about 1 year ago'\n *\n * @example\n * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?\n * import { eoLocale } from 'date-fns/locale/eo'\n * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {\n *   locale: eoLocale\n * })\n * //=> 'pli ol 1 jaro'\n */\n\nfunction formatDistance(date, baseDate, options) {\n  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();\n  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__.enUS;\n  const minutesInAlmostTwoDays = 2520;\n\n  const comparison = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_2__.compareAsc)(date, baseDate);\n\n  if (isNaN(comparison)) {\n    throw new RangeError(\"Invalid time value\");\n  }\n\n  const localizeOptions = Object.assign({}, options, {\n    addSuffix: options?.addSuffix,\n    comparison: comparison,\n  });\n\n  let dateLeft;\n  let dateRight;\n  if (comparison > 0) {\n    dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(baseDate);\n    dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(date);\n  } else {\n    dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(date);\n    dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(baseDate);\n  }\n\n  const seconds = (0,_differenceInSeconds_mjs__WEBPACK_IMPORTED_MODULE_4__.differenceInSeconds)(dateRight, dateLeft);\n  const offsetInSeconds =\n    ((0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(dateRight) -\n      (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(dateLeft)) /\n    1000;\n  const minutes = Math.round((seconds - offsetInSeconds) / 60);\n  let months;\n\n  // 0 up to 2 mins\n  if (minutes < 2) {\n    if (options?.includeSeconds) {\n      if (seconds < 5) {\n        return locale.formatDistance(\"lessThanXSeconds\", 5, localizeOptions);\n      } else if (seconds < 10) {\n        return locale.formatDistance(\"lessThanXSeconds\", 10, localizeOptions);\n      } else if (seconds < 20) {\n        return locale.formatDistance(\"lessThanXSeconds\", 20, localizeOptions);\n      } else if (seconds < 40) {\n        return locale.formatDistance(\"halfAMinute\", 0, localizeOptions);\n      } else if (seconds < 60) {\n        return locale.formatDistance(\"lessThanXMinutes\", 1, localizeOptions);\n      } else {\n        return locale.formatDistance(\"xMinutes\", 1, localizeOptions);\n      }\n    } else {\n      if (minutes === 0) {\n        return locale.formatDistance(\"lessThanXMinutes\", 1, localizeOptions);\n      } else {\n        return locale.formatDistance(\"xMinutes\", minutes, localizeOptions);\n      }\n    }\n\n    // 2 mins up to 0.75 hrs\n  } else if (minutes < 45) {\n    return locale.formatDistance(\"xMinutes\", minutes, localizeOptions);\n\n    // 0.75 hrs up to 1.5 hrs\n  } else if (minutes < 90) {\n    return locale.formatDistance(\"aboutXHours\", 1, localizeOptions);\n\n    // 1.5 hrs up to 24 hrs\n  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInDay) {\n    const hours = Math.round(minutes / 60);\n    return locale.formatDistance(\"aboutXHours\", hours, localizeOptions);\n\n    // 1 day up to 1.75 days\n  } else if (minutes < minutesInAlmostTwoDays) {\n    return locale.formatDistance(\"xDays\", 1, localizeOptions);\n\n    // 1.75 days up to 30 days\n  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth) {\n    const days = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInDay);\n    return locale.formatDistance(\"xDays\", days, localizeOptions);\n\n    // 1 month up to 2 months\n  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth * 2) {\n    months = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth);\n    return locale.formatDistance(\"aboutXMonths\", months, localizeOptions);\n  }\n\n  months = (0,_differenceInMonths_mjs__WEBPACK_IMPORTED_MODULE_7__.differenceInMonths)(dateRight, dateLeft);\n\n  // 2 months up to 12 months\n  if (months < 12) {\n    const nearestMonth = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth);\n    return locale.formatDistance(\"xMonths\", nearestMonth, localizeOptions);\n\n    // 1 year up to max Date\n  } else {\n    const monthsSinceStartOfYear = months % 12;\n    const years = Math.trunc(months / 12);\n\n    // N years up to 1 years 3 months\n    if (monthsSinceStartOfYear < 3) {\n      return locale.formatDistance(\"aboutXYears\", years, localizeOptions);\n\n      // N years 3 months up to N years 9 months\n    } else if (monthsSinceStartOfYear < 9) {\n      return locale.formatDistance(\"overXYears\", years, localizeOptions);\n\n      // N years 9 months up to N year 12 months\n    } else {\n      return locale.formatDistance(\"almostXYears\", years + 1, localizeOptions);\n    }\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/formatDistance.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isLastDayOfMonth.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isLastDayOfMonth.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isLastDayOfMonth: () => (/* binding */ isLastDayOfMonth)\n/* harmony export */ });\n/* harmony import */ var _endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endOfDay.mjs */ \"./node_modules/date-fns/endOfDay.mjs\");\n/* harmony import */ var _endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endOfMonth.mjs */ \"./node_modules/date-fns/endOfMonth.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n\n/**\n * @name isLastDayOfMonth\n * @category Month Helpers\n * @summary Is the given date the last day of a month?\n *\n * @description\n * Is the given date the last day of a month?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n\n * @returns The date is the last day of a month\n *\n * @example\n * // Is 28 February 2014 the last day of a month?\n * const result = isLastDayOfMonth(new Date(2014, 1, 28))\n * //=> true\n */\nfunction isLastDayOfMonth(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  return +(0,_endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__.endOfDay)(_date) === +(0,_endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__.endOfMonth)(_date);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLastDayOfMonth);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/isLastDayOfMonth.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return (options = {}) => {\n    // TODO: Remove String()\n    const width = options.width ? String(options.width) : args.defaultWidth;\n    const format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\n\n/**\n * The localize function argument callback which allows to convert raw value to\n * the actual type.\n *\n * @param value - The value to convert\n *\n * @returns The converted value\n */\n\n/**\n * The map of localized values for each width.\n */\n\n/**\n * The index type of the locale unit value. It types conversion of units of\n * values that don't start at 0 (i.e. quarters).\n */\n\n/**\n * Converts the unit value to the tuple of values.\n */\n\n/**\n * The tuple of localized era values. The first element represents BC,\n * the second element represents AD.\n */\n\n/**\n * The tuple of localized quarter values. The first element represents Q1.\n */\n\n/**\n * The tuple of localized day values. The first element represents Sunday.\n */\n\n/**\n * The tuple of localized month values. The first element represents January.\n */\n\nfunction buildLocalizeFn(args) {\n  return (value, options) => {\n    const context = options?.context ? String(options.context) : \"standalone\";\n\n    let valuesArray;\n    if (context === \"formatting\" && args.formattingValues) {\n      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      const width = options?.width ? String(options.width) : defaultWidth;\n\n      valuesArray =\n        args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      const defaultWidth = args.defaultWidth;\n      const width = options?.width ? String(options.width) : args.defaultWidth;\n\n      valuesArray = args.values[width] || args.values[defaultWidth];\n    }\n    const index = args.argumentCallback ? args.argumentCallback(value) : value;\n\n    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!\n    return valuesArray[index];\n  };\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return (string, options = {}) => {\n    const width = options.width;\n\n    const matchPattern =\n      (width && args.matchPatterns[width]) ||\n      args.matchPatterns[args.defaultMatchWidth];\n    const matchResult = string.match(matchPattern);\n\n    if (!matchResult) {\n      return null;\n    }\n    const matchedString = matchResult[0];\n\n    const parsePatterns =\n      (width && args.parsePatterns[width]) ||\n      args.parsePatterns[args.defaultParseWidth];\n\n    const key = Array.isArray(parsePatterns)\n      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))\n      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type\n        findKey(parsePatterns, (pattern) => pattern.test(matchedString));\n\n    let value;\n\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback\n      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type\n        options.valueCallback(value)\n      : value;\n\n    const rest = string.slice(matchedString.length);\n\n    return { value, rest };\n  };\n}\n\nfunction findKey(object, predicate) {\n  for (const key in object) {\n    if (\n      Object.prototype.hasOwnProperty.call(object, key) &&\n      predicate(object[key])\n    ) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\nfunction findIndex(array, predicate) {\n  for (let key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/_lib/buildMatchFn.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return (string, options = {}) => {\n    const matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    const matchedString = matchResult[0];\n\n    const parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    let value = args.valueCallback\n      ? args.valueCallback(parseResult[0])\n      : parseResult[0];\n\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type\n    value = options.valueCallback ? options.valueCallback(value) : value;\n\n    const rest = string.slice(matchedString.length);\n\n    return { value, rest };\n  };\n}\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   enUS: () => (/* binding */ enUS)\n/* harmony export */ });\n/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ \"./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs\");\n/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ \"./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs\");\n/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ \"./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs\");\n/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ \"./node_modules/date-fns/locale/en-US/_lib/localize.mjs\");\n/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ \"./node_modules/date-fns/locale/en-US/_lib/match.mjs\");\n\n\n\n\n\n\n/**\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)\n * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)\n */\nconst enUS = {\n  code: \"en-US\",\n  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,\n  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,\n  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,\n  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,\n  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,\n  options: {\n    weekStartsOn: 0 /* Sunday */,\n    firstWeekContainsDate: 1,\n  },\n};\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/en-US.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDistance: () => (/* binding */ formatDistance)\n/* harmony export */ });\nconst formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: \"less than a second\",\n    other: \"less than {{count}} seconds\",\n  },\n\n  xSeconds: {\n    one: \"1 second\",\n    other: \"{{count}} seconds\",\n  },\n\n  halfAMinute: \"half a minute\",\n\n  lessThanXMinutes: {\n    one: \"less than a minute\",\n    other: \"less than {{count}} minutes\",\n  },\n\n  xMinutes: {\n    one: \"1 minute\",\n    other: \"{{count}} minutes\",\n  },\n\n  aboutXHours: {\n    one: \"about 1 hour\",\n    other: \"about {{count}} hours\",\n  },\n\n  xHours: {\n    one: \"1 hour\",\n    other: \"{{count}} hours\",\n  },\n\n  xDays: {\n    one: \"1 day\",\n    other: \"{{count}} days\",\n  },\n\n  aboutXWeeks: {\n    one: \"about 1 week\",\n    other: \"about {{count}} weeks\",\n  },\n\n  xWeeks: {\n    one: \"1 week\",\n    other: \"{{count}} weeks\",\n  },\n\n  aboutXMonths: {\n    one: \"about 1 month\",\n    other: \"about {{count}} months\",\n  },\n\n  xMonths: {\n    one: \"1 month\",\n    other: \"{{count}} months\",\n  },\n\n  aboutXYears: {\n    one: \"about 1 year\",\n    other: \"about {{count}} years\",\n  },\n\n  xYears: {\n    one: \"1 year\",\n    other: \"{{count}} years\",\n  },\n\n  overXYears: {\n    one: \"over 1 year\",\n    other: \"over {{count}} years\",\n  },\n\n  almostXYears: {\n    one: \"almost 1 year\",\n    other: \"almost {{count}} years\",\n  },\n};\n\nconst formatDistance = (token, count, options) => {\n  let result;\n\n  const tokenValue = formatDistanceLocale[token];\n  if (typeof tokenValue === \"string\") {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace(\"{{count}}\", count.toString());\n  }\n\n  if (options?.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return \"in \" + result;\n    } else {\n      return result + \" ago\";\n    }\n  }\n\n  return result;\n};\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatLong: () => (/* binding */ formatLong)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ \"./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs\");\n\n\nconst dateFormats = {\n  full: \"EEEE, MMMM do, y\",\n  long: \"MMMM do, y\",\n  medium: \"MMM d, y\",\n  short: \"MM/dd/yyyy\",\n};\n\nconst timeFormats = {\n  full: \"h:mm:ss a zzzz\",\n  long: \"h:mm:ss a z\",\n  medium: \"h:mm:ss a\",\n  short: \"h:mm a\",\n};\n\nconst dateTimeFormats = {\n  full: \"{{date}} 'at' {{time}}\",\n  long: \"{{date}} 'at' {{time}}\",\n  medium: \"{{date}}, {{time}}\",\n  short: \"{{date}}, {{time}}\",\n};\n\nconst formatLong = {\n  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateFormats,\n    defaultWidth: \"full\",\n  }),\n\n  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: timeFormats,\n    defaultWidth: \"full\",\n  }),\n\n  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateTimeFormats,\n    defaultWidth: \"full\",\n  }),\n};\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatRelative: () => (/* binding */ formatRelative)\n/* harmony export */ });\nconst formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: \"P\",\n};\n\nconst formatRelative = (token, _date, _baseDate, _options) =>\n  formatRelativeLocale[token];\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localize: () => (/* binding */ localize)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ \"./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs\");\n\n\nconst eraValues = {\n  narrow: [\"B\", \"A\"],\n  abbreviated: [\"BC\", \"AD\"],\n  wide: [\"Before Christ\", \"Anno Domini\"],\n};\n\nconst quarterValues = {\n  narrow: [\"1\", \"2\", \"3\", \"4\"],\n  abbreviated: [\"Q1\", \"Q2\", \"Q3\", \"Q4\"],\n  wide: [\"1st quarter\", \"2nd quarter\", \"3rd quarter\", \"4th quarter\"],\n};\n\n// Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you're working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\nconst monthValues = {\n  narrow: [\"J\", \"F\", \"M\", \"A\", \"M\", \"J\", \"J\", \"A\", \"S\", \"O\", \"N\", \"D\"],\n  abbreviated: [\n    \"Jan\",\n    \"Feb\",\n    \"Mar\",\n    \"Apr\",\n    \"May\",\n    \"Jun\",\n    \"Jul\",\n    \"Aug\",\n    \"Sep\",\n    \"Oct\",\n    \"Nov\",\n    \"Dec\",\n  ],\n\n  wide: [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\",\n  ],\n};\n\nconst dayValues = {\n  narrow: [\"S\", \"M\", \"T\", \"W\", \"T\", \"F\", \"S\"],\n  short: [\"Su\", \"Mo\", \"Tu\", \"We\", \"Th\", \"Fr\", \"Sa\"],\n  abbreviated: [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"],\n  wide: [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ],\n};\n\nconst dayPeriodValues = {\n  narrow: {\n    am: \"a\",\n    pm: \"p\",\n    midnight: \"mi\",\n    noon: \"n\",\n    morning: \"morning\",\n    afternoon: \"afternoon\",\n    evening: \"evening\",\n    night: \"night\",\n  },\n  abbreviated: {\n    am: \"AM\",\n    pm: \"PM\",\n    midnight: \"midnight\",\n    noon: \"noon\",\n    morning: \"morning\",\n    afternoon: \"afternoon\",\n    evening: \"evening\",\n    night: \"night\",\n  },\n  wide: {\n    am: \"a.m.\",\n    pm: \"p.m.\",\n    midnight: \"midnight\",\n    noon: \"noon\",\n    morning: \"morning\",\n    afternoon: \"afternoon\",\n    evening: \"evening\",\n    night: \"night\",\n  },\n};\n\nconst formattingDayPeriodValues = {\n  narrow: {\n    am: \"a\",\n    pm: \"p\",\n    midnight: \"mi\",\n    noon: \"n\",\n    morning: \"in the morning\",\n    afternoon: \"in the afternoon\",\n    evening: \"in the evening\",\n    night: \"at night\",\n  },\n  abbreviated: {\n    am: \"AM\",\n    pm: \"PM\",\n    midnight: \"midnight\",\n    noon: \"noon\",\n    morning: \"in the morning\",\n    afternoon: \"in the afternoon\",\n    evening: \"in the evening\",\n    night: \"at night\",\n  },\n  wide: {\n    am: \"a.m.\",\n    pm: \"p.m.\",\n    midnight: \"midnight\",\n    noon: \"noon\",\n    morning: \"in the morning\",\n    afternoon: \"in the afternoon\",\n    evening: \"in the evening\",\n    night: \"at night\",\n  },\n};\n\nconst ordinalNumber = (dirtyNumber, _options) => {\n  const number = Number(dirtyNumber);\n\n  // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',\n  // 'day', 'hour', 'minute', 'second'.\n\n  const rem100 = number % 100;\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + \"st\";\n      case 2:\n        return number + \"nd\";\n      case 3:\n        return number + \"rd\";\n    }\n  }\n  return number + \"th\";\n};\n\nconst localize = {\n  ordinalNumber,\n\n  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: eraValues,\n    defaultWidth: \"wide\",\n  }),\n\n  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: quarterValues,\n    defaultWidth: \"wide\",\n    argumentCallback: (quarter) => quarter - 1,\n  }),\n\n  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: monthValues,\n    defaultWidth: \"wide\",\n  }),\n\n  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayValues,\n    defaultWidth: \"wide\",\n  }),\n\n  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayPeriodValues,\n    defaultWidth: \"wide\",\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: \"wide\",\n  }),\n};\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/en-US/_lib/localize.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   match: () => (/* binding */ match)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ \"./node_modules/date-fns/locale/_lib/buildMatchFn.mjs\");\n/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ \"./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs\");\n\n\n\nconst matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nconst parseOrdinalNumberPattern = /\\d+/i;\n\nconst matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i,\n};\nconst parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i],\n};\n\nconst matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i,\n};\nconst parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i],\n};\n\nconst matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,\n};\nconst parseMonthPatterns = {\n  narrow: [\n    /^j/i,\n    /^f/i,\n    /^m/i,\n    /^a/i,\n    /^m/i,\n    /^j/i,\n    /^j/i,\n    /^a/i,\n    /^s/i,\n    /^o/i,\n    /^n/i,\n    /^d/i,\n  ],\n\n  any: [\n    /^ja/i,\n    /^f/i,\n    /^mar/i,\n    /^ap/i,\n    /^may/i,\n    /^jun/i,\n    /^jul/i,\n    /^au/i,\n    /^s/i,\n    /^o/i,\n    /^n/i,\n    /^d/i,\n  ],\n};\n\nconst matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,\n};\nconst parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],\n};\n\nconst matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,\n};\nconst parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i,\n  },\n};\n\nconst match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: (value) => parseInt(value, 10),\n  }),\n\n  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: \"wide\",\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: \"any\",\n  }),\n\n  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: \"wide\",\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: \"any\",\n    valueCallback: (index) => index + 1,\n  }),\n\n  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: \"wide\",\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: \"any\",\n  }),\n\n  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: \"wide\",\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: \"any\",\n  }),\n\n  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: \"any\",\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: \"any\",\n  }),\n};\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/locale/en-US/_lib/match.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/subDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/subDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   subDays: () => (/* binding */ subDays)\n/* harmony export */ });\n/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDays.mjs */ \"./node_modules/date-fns/addDays.mjs\");\n\n\n/**\n * @name subDays\n * @category Day Helpers\n * @summary Subtract the specified number of days from the given date.\n *\n * @description\n * Subtract the specified number of days from the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param amount - The amount of days to be subtracted.\n *\n * @returns The new date with the days subtracted\n *\n * @example\n * // Subtract 10 days from 1 September 2014:\n * const result = subDays(new Date(2014, 8, 1), 10)\n * //=> Fri Aug 22 2014 00:00:00\n */\nfunction subDays(date, amount) {\n  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_0__.addDays)(date, -amount);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subDays);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/subDays.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === \"object\" && argStr === \"[object Date]\")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === \"number\" ||\n    argStr === \"[object Number]\" ||\n    typeof argument === \"string\" ||\n    argStr === \"[object String]\"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://odin-js-todo/./node_modules/date-fns/toDate.mjs?");

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