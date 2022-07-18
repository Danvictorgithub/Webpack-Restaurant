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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./main-picture.jpg */ \"./src/main-picture.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./about-us-picture.jpg */ \"./src/about-us-picture.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n    box-sizing:border-box;\\r\\n    font-family: Roboto;\\r\\n    --matte-black:rgb(26, 25, 25);\\r\\n}\\r\\nbody {\\r\\n    margin: 0;\\r\\n}\\r\\n.hello {\\r\\n    color:red;\\r\\n}\\r\\n#container {\\r\\n    height: 100vh;\\r\\n    display:grid;\\r\\n    grid-template-rows: 65px 1fr;\\r\\n}\\r\\n.nav-bar{\\r\\n    background-color: var(--matte-black);\\r\\n    box-shadow: 0 5px 50px black;\\r\\n    z-index: 2;\\r\\n    color:lightgray;\\r\\n    \\r\\n}\\r\\nul {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight:bold;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    gap:64px;\\r\\n    align-items: center;\\r\\n}\\r\\nul > * {\\r\\n    list-style-type: none;\\r\\n}\\r\\nul > *:hover {\\r\\n    color:white;\\r\\n}\\r\\n.content {\\r\\n    background-color:white;\\r\\n}\\r\\n/* Landing Page */\\r\\n.home-page {\\r\\n    display:grid;\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n}\\r\\n.landing-image {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    object-fit: cover;\\r\\n}\\r\\n.landing-title {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items:center;\\r\\n    background-color: var(--matte-black);\\r\\n    color:white;\\r\\n    padding: 100px 125px 72px 125px;\\r\\n}\\r\\n.bar {\\r\\n    width: 100%;\\r\\n    border:3px solid white;\\r\\n}\\r\\n.apostrophe {\\r\\n    align-self:center;\\r\\n    height:4rem;\\r\\n}\\r\\n.landing-title p {\\r\\n    font-style: italic;\\r\\n}\\r\\n/* Menu Page */\\r\\n.menu-page {\\r\\n    display:grid;\\r\\n    grid-template-rows: 1.5fr 400px;\\r\\n}\\r\\n.main-dish {\\r\\n    height:100%;\\r\\n    display:grid;\\r\\n    grid-template-columns: 1.4fr 1fr 1fr;\\r\\n    z-index: 1;\\r\\n}\\r\\n.dish-text {\\r\\n    background-color: var(--matte-black);\\r\\n    color:white;\\r\\n    padding: 50px;\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    align-items:center;\\r\\n}\\r\\n.dish-text h2 {\\r\\n    font-weight:lighter;\\r\\n    margin:0;\\r\\n}\\r\\n.m-dish-container {\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n    justify-content:center;\\r\\n    align-items:center;\\r\\n    font-size: large;\\r\\n}\\r\\n.m-dish {\\r\\n    height: 250px;\\r\\n    filter: drop-shadow( 1rem 0.5rem 0.75rem black);\\r\\n}\\r\\n.card-list {\\r\\n    height: 100%;\\r\\n}\\r\\n.dish-text h1 {\\r\\n    margin: 0;\\r\\n}\\r\\n.bar1 {\\r\\n    width:75%;\\r\\n    border-bottom: 2px solid lightgray;\\r\\n    margin-bottom:8px;\\r\\n}\\r\\n.m1,.m2 {\\r\\n    text-align: center;\\r\\n}\\r\\n.card {\\r\\n    background-color:white;\\r\\n    filter: drop-shadow( 1rem 0.5rem 1rem black);\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    border-radius: 16px;\\r\\n}\\r\\n.card-list {\\r\\n    background-color: var(--matte-black);\\r\\n    display:grid;\\r\\n    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));\\r\\n    gap:34px;\\r\\n    color:var(--matte-black);\\r\\n    padding:24px;\\r\\n}\\r\\n.card img {\\r\\n    height: 200px;\\r\\n    filter: drop-shadow( .5rem 0.5rem 0.75rem black);\\r\\n}\\r\\n.about-us {\\r\\n    height:100%;\\r\\n    display:grid;\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n}\\r\\n.left-about {\\r\\n    background-color:var(--matte-black);\\r\\n    color:white;\\r\\n    padding:120px;\\r\\n}\\r\\n.right-about {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _apostrophe_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apostrophe.png */ \"./src/apostrophe.png\");\n/* harmony import */ var _dish1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dish1.png */ \"./src/dish1.png\");\n/* harmony import */ var _dish2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dish2.png */ \"./src/dish2.png\");\n/* harmony import */ var _dish3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dish3.png */ \"./src/dish3.png\");\n/* harmony import */ var _dish4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dish4.png */ \"./src/dish4.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction component() {\r\n    const container = document.createElement('div');\r\n    container.setAttribute('id','container');\r\n    const _Home = genHome();\r\n    const _Menu = genMenu();\r\n    const _About = genAboutUs();\r\n    const navBar = document.createElement('div');\r\n    navBar.classList.add('nav-bar');\r\n        const unlistedItem = document.createElement('ul');\r\n\r\n            const home = document.createElement('li');\r\n            home.classList.add('home');\r\n            home.textContent = 'Home';\r\n\r\n            const menu = document.createElement('li');\r\n            menu.classList.add('menu');\r\n            menu.textContent = 'Menu'\r\n\r\n            const aboutUs = document.createElement('li');\r\n            aboutUs.classList.add('about-us');\r\n            aboutUs.textContent = 'About Us';\r\n    [home,menu,aboutUs].forEach( (child) => unlistedItem.appendChild(child));\r\n    navBar.appendChild(unlistedItem);\r\n    container.appendChild(navBar);\r\n    container.appendChild(genHome());\r\n\r\n    home.addEventListener('click', () => {\r\n        container.removeChild(container.lastChild);\r\n        container.appendChild(_Home);\r\n    });\r\n    menu.addEventListener('click', () => {\r\n        container.removeChild(container.lastChild);\r\n        container.appendChild(_Menu);\r\n    });\r\n    aboutUs.addEventListener('click', () => {\r\n        container.removeChild(container.lastChild);\r\n        container.appendChild(_About);\r\n    });\r\n\r\n\r\n    // Generates the Landing Page\r\n    function genHome() {\r\n        const homeContent = document.createElement('div');\r\n        homeContent.classList.add('content');\r\n        homeContent.classList.add('home-page');\r\n            const landingImage = document.createElement('div');\r\n            landingImage.classList.add('landing-image');\r\n\r\n            const landTitle = document.createElement('div');\r\n            landTitle.classList.add('landing-title');\r\n                const headerOne = document.createElement('h1');\r\n                headerOne.textContent = 'Kderya Restaurant';\r\n                landTitle.appendChild(headerOne);\r\n\r\n                const bar = document.createElement('div');\r\n                bar.classList.add('bar');\r\n                landTitle.appendChild(bar);\r\n\r\n                const headerThree = document.createElement('h3');\r\n                headerThree.textContent = 'ORGANIC FOOD';\r\n                landTitle.appendChild(headerThree);\r\n                \r\n                const image = document.createElement('img');\r\n                image.src = _apostrophe_png__WEBPACK_IMPORTED_MODULE_1__;\r\n                image.classList.add('apostrophe');\r\n                landTitle.appendChild(image);\r\n                \r\n                const paragraph = document.createElement('p');\r\n                paragraph.classList.add('quote');\r\n                paragraph.textContent = 'We bring the dishes from most country, bringing the best of all worlds. Crafted to the taste of the masses with our organic products. Healthy and Organic';\r\n                landTitle.appendChild(paragraph);\r\n\r\n                const headerTwo = document.createElement('h2');\r\n                headerTwo.textContent = '- Dan Victor Lofranco';\r\n                landTitle.appendChild(headerTwo);\r\n        [landingImage,landTitle].forEach((child) => homeContent.appendChild(child));\r\n        \r\n        return homeContent;\r\n    }\r\n    // Generates Menu\r\n    function genMenu() {\r\n        const menuContent = document.createElement('div');\r\n        menuContent.classList.add('content');\r\n        menuContent.classList.add('menu-page');\r\n            const mainDish = document.createElement('div');\r\n            mainDish.classList.add('main-dish');\r\n            menuContent.appendChild(mainDish);\r\n                // <div class=\"dish-text\">\r\n                const dishText = document.createElement('div');\r\n                dishText.classList.add('dish-text');\r\n                mainDish.appendChild(dishText);\r\n                    // <h1>Our Main Dish</h1>\r\n                    const dishTexth1 = document.createElement('h1');\r\n                    dishTexth1.textContent = 'Our Main Dish';\r\n                    dishText.appendChild(dishTexth1);\r\n                    // <div class=\"bar1\"></div>\r\n                    const bar = document.createElement('div');\r\n                    bar.classList.add('bar1');\r\n                    dishText.appendChild(bar);\r\n                    // <div class=\"m1\">\r\n                    const mainDishOne = document.createElement('div');\r\n                    mainDishOne.classList.add('m1');\r\n                    dishText.appendChild(mainDishOne);\r\n                        // <h2>Pancit Canton</h2>\r\n                        const mainDishOneName = document.createElement('h2');\r\n                        mainDishOneName.textContent = 'Pancit Canton';\r\n                        mainDishOne.appendChild(mainDishOneName);\r\n                        // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor augue, dignissim porttitor eros vel, ultrices rutrum lacus.</p>\r\n                        const mainDishOneDescription = document.createElement('p');\r\n                        mainDishOneDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor augue, dignissim porttitor eros vel, ultrices rutrum lacus.';\r\n                        mainDishOne.appendChild(mainDishOneDescription);\r\n\r\n                    const mainDishTwo = document.createElement('div');\r\n                    mainDishTwo.classList.add('m2');\r\n                    dishText.appendChild(mainDishTwo);\r\n                        // <h2>Adobo</h2>\r\n                        const mainDishTwoName = document.createElement('h2');\r\n                        mainDishTwoName.textContent = 'Adobo';\r\n                        mainDishTwo.appendChild(mainDishTwoName);\r\n                        // <p>Nam lectus velit, porta eu mi sed, consectetur tincidunt sem. Morbi ut sodales eros. Curabitur sed posuere arcu.</p>\r\n                        const mainDishTwoDescription = document.createElement('p');\r\n                        mainDishTwoDescription.textContent = 'Nam lectus velit, porta eu mi sed, consectetur tincidunt sem. Morbi ut sodales eros. Curabitur sed posuere arcu.';\r\n                        mainDishTwo.appendChild(mainDishTwoDescription);\r\n                // <div class=\"m-dish-container\">\r\n                const mDishContainerOne = document.createElement('div');\r\n                mDishContainerOne.classList.add('m-dish-container');\r\n                mainDish.appendChild(mDishContainerOne);\r\n                    // <img class=\"m-dish\" src=\"./dish3.png\">\r\n                    const mDishImageOne = document.createElement('img');\r\n                    mDishImageOne.classList.add('m-dish');\r\n                    mDishImageOne.src = _dish3_png__WEBPACK_IMPORTED_MODULE_4__;\r\n                    mDishContainerOne.appendChild(mDishImageOne);\r\n                    // <p>Pancit Canton</p>\r\n                    const mDishParaOne = document.createElement('p');\r\n                    mDishParaOne.textContent = 'Pancit Cantot';\r\n                    mDishContainerOne.appendChild(mDishParaOne);\r\n\r\n                // <div class=\"m-dish-container\">\r\n                const mDishContainerTwo = document.createElement('div');\r\n                mDishContainerTwo.classList.add('m-dish-container');\r\n                mainDish.appendChild(mDishContainerTwo);\r\n                    // <img class=\"m-dish\" src=\"./dish4.png\">\r\n                    const mDishImageTwo = document.createElement('img');\r\n                    mDishImageTwo.classList.add('m-dish');\r\n                    mDishImageTwo.src = _dish4_png__WEBPACK_IMPORTED_MODULE_5__;\r\n                    mDishContainerTwo.appendChild(mDishImageTwo);\r\n                    // <p>Adobo</p>\r\n                    const mDishParaTwo = document.createElement('p');\r\n                    mDishParaTwo.textContent = 'Adobo';\r\n                    mDishContainerTwo.appendChild(mDishParaTwo);\r\n            // <div class=\"card-list\">\r\n            const cardList = document.createElement('div');\r\n            cardList.classList.add('card-list');\r\n            menuContent.appendChild(cardList);\r\n                // <div class=\"card\">\r\n                const cardOne = document.createElement('div');\r\n                cardOne.classList.add('card');\r\n                cardList.appendChild(cardOne);\r\n                    // <p>Dish 1</p>\r\n                    const cardParaOne = document.createElement('p');\r\n                    cardParaOne.textContent = 'Dish 1';\r\n                    cardOne.appendChild(cardParaOne);\r\n                    // <img src=\"./dish1.png\">\r\n                    const cardImageOne = document.createElement('img');\r\n                    cardImageOne.src = _dish1_png__WEBPACK_IMPORTED_MODULE_2__;\r\n                    cardOne.appendChild(cardImageOne);\r\n                    // <h3>porta eu mi sed</h3>\r\n                    const cardNameOne = document.createElement('h3');\r\n                    cardNameOne.textContent = 'prote eu mi sed';\r\n                    cardOne.appendChild(cardNameOne);\r\n                \r\n                const cardTwo = document.createElement('div');\r\n                cardTwo.classList.add('card');\r\n                cardList.appendChild(cardTwo);\r\n                    // <p>Dish 1</p>\r\n                    const cardParaTwo = document.createElement('p');\r\n                    cardParaTwo.textContent = 'Dish 2';\r\n                    cardTwo.appendChild(cardParaTwo);\r\n                    // <img src=\"./dish1.png\">\r\n                    const cardImageTwo = document.createElement('img');\r\n                    cardImageTwo.src = _dish2_png__WEBPACK_IMPORTED_MODULE_3__;\r\n                    cardTwo.appendChild(cardImageTwo);\r\n                    // <h3>porta eu mi sed</h3>\r\n                    const cardNameTwo = document.createElement('h3');\r\n                    cardNameTwo.textContent = 'prote eu mi sed';\r\n                    cardTwo.appendChild(cardNameTwo);\r\n\r\n                const cardThree = document.createElement('div');\r\n                cardThree.classList.add('card');\r\n                cardList.appendChild(cardThree);\r\n                    // <p>Dish 1</p>\r\n                    const cardParaThree = document.createElement('p');\r\n                    cardParaThree.textContent = 'Dish 3';\r\n                    cardThree.appendChild(cardParaThree);\r\n                    // <img src=\"./dish1.png\">\r\n                    const cardImageThree = document.createElement('img');\r\n                    cardImageThree.src = _dish3_png__WEBPACK_IMPORTED_MODULE_4__;\r\n                    cardThree.appendChild(cardImageThree);\r\n                    // <h3>porta eu mi sed</h3>\r\n                    const cardNameThree = document.createElement('h3');\r\n                    cardNameThree.textContent = 'prote eu mi sed';\r\n                    cardThree.appendChild(cardNameThree);\r\n                \r\n                const cardFour = document.createElement('div');\r\n                cardFour.classList.add('card');\r\n                cardList.appendChild(cardFour);\r\n                    // <p>Dish 1</p>\r\n                    const cardParaFour = document.createElement('p');\r\n                    cardParaFour.textContent = 'Dish 4';\r\n                    cardFour.appendChild(cardParaFour);\r\n                    // <img src=\"./dish1.png\">\r\n                    const cardImageFour = document.createElement('img');\r\n                    cardImageFour.src = _dish4_png__WEBPACK_IMPORTED_MODULE_5__;\r\n                    cardFour.appendChild(cardImageFour);\r\n                    // <h3>porta eu mi sed</h3>\r\n                    const cardNameFour = document.createElement('h3');\r\n                    cardNameFour.textContent = 'prote eu mi sed';\r\n                    cardFour.appendChild(cardNameFour);\r\n        return menuContent;\r\n    }\r\n    // Generates \"About Us\"\r\n    function genAboutUs(){\r\n        const aboutContent = document.createElement('div');\r\n        aboutContent.classList.add('content');\r\n        aboutContent.classList.add('about-us');\r\n\r\n        // <div class=\"left-about\">\r\n            const leftDiv = document.createElement('div');\r\n            leftDiv.classList.add('left-about');\r\n            aboutContent.appendChild(leftDiv);\r\n                //<h1>About Us</h1>\r\n                const headerOne = document.createElement('h1');\r\n                headerOne.textContent = 'About Us';\r\n                leftDiv.appendChild(headerOne);\r\n                // <p>Aliquam fermentum eu nulla nec eleifend. Maecenas iaculis auctor urna id vulputate. Integer commodo fringilla sagittis. Maecenas pulvinar gravida nisl, in consequat orci aliquet non. Aenean nec leo nisi. Nunc rhoncus sem ac bibendum eleifend. Vestibulum congue iaculis lorem, quis tempus magna ultricies nec. </p>\r\n                const aboutDescription = document.createElement('p');\r\n                aboutDescription.textContent = 'Aliquam fermentum eu nulla nec eleifend. Maecenas iaculis auctor urna id vulputate. Integer commodo fringilla sagittis. Maecenas pulvinar gravida nisl, in consequat orci aliquet non. Aenean nec leo nisi. Nunc rhoncus sem ac bibendum eleifend. Vestibulum congue iaculis lorem, quis tempus magna ultricies nec.';\r\n                leftDiv.appendChild(aboutDescription);\r\n                // <h2>Contact Us</h2>\r\n                const headerTwo = document.createElement('h2');\r\n                headerTwo.textContent = 'Contact Us';\r\n                leftDiv.appendChild(headerTwo);\r\n                // <p>Our Emailing Address is:</p>\r\n                const emailAddress = document.createElement('p');\r\n                emailAddress.textContent = 'Our Emailing Address is: abc@something.com';\r\n                leftDiv.appendChild(emailAddress);\r\n                // <p>152A Charlotte Street</p>\r\n                const cityAddress = document.createElement('p');\r\n                cityAddress.textContent = '152A Charlotte Street';\r\n                leftDiv.appendChild(cityAddress);\r\n                // <p>Peterborough ON</p>\r\n                const provinceAddress = document.createElement('p');\r\n                provinceAddress.textContent = 'Peterborough ON';\r\n                leftDiv.appendChild(cityAddress);\r\n                // <p>Phone:123-456-789</p>\r\n                const phoneNumber = document.createElement('p');\r\n                phoneNumber.textContent = 'Phone:123-456-789101';\r\n                leftDiv.appendChild(phoneNumber);\r\n            \r\n            const rightDiv = document.createElement('div');\r\n            rightDiv.classList.add('right-about');\r\n            aboutContent.appendChild(rightDiv);\r\n        return aboutContent;\r\n    }\r\n    return container;\r\n }\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://webpack-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/about-us-picture.jpg":
/*!**********************************!*\
  !*** ./src/about-us-picture.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2d339f97cc8ec5dc692.jpg\";\n\n//# sourceURL=webpack://webpack-restaurant/./src/about-us-picture.jpg?");

/***/ }),

/***/ "./src/apostrophe.png":
/*!****************************!*\
  !*** ./src/apostrophe.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e0f515bf38c129f6dee.png\";\n\n//# sourceURL=webpack://webpack-restaurant/./src/apostrophe.png?");

/***/ }),

/***/ "./src/dish1.png":
/*!***********************!*\
  !*** ./src/dish1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f86f9bff5f114da7558.png\";\n\n//# sourceURL=webpack://webpack-restaurant/./src/dish1.png?");

/***/ }),

/***/ "./src/dish2.png":
/*!***********************!*\
  !*** ./src/dish2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69c687c8d89cec9b94eb.png\";\n\n//# sourceURL=webpack://webpack-restaurant/./src/dish2.png?");

/***/ }),

/***/ "./src/dish3.png":
/*!***********************!*\
  !*** ./src/dish3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef7e213142499b5704dc.png\";\n\n//# sourceURL=webpack://webpack-restaurant/./src/dish3.png?");

/***/ }),

/***/ "./src/dish4.png":
/*!***********************!*\
  !*** ./src/dish4.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"281ec2dc8eedee3c4cb7.png\";\n\n//# sourceURL=webpack://webpack-restaurant/./src/dish4.png?");

/***/ }),

/***/ "./src/main-picture.jpg":
/*!******************************!*\
  !*** ./src/main-picture.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"346762a248507f138eb7.jpg\";\n\n//# sourceURL=webpack://webpack-restaurant/./src/main-picture.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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