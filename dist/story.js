/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nanoid/index.js":
/*!**************************************!*\
  !*** ./node_modules/nanoid/index.js ***!
  \**************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nanoid\", function() { return nanoid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customAlphabet\", function() { return customAlphabet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customRandom\", function() { return customRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"urlAlphabet\", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__[\"urlAlphabet\"]; });\n\n\n\n\n\n// We reuse buffers with the same size to avoid memory fragmentations\n// for better performance.\nlet buffers = {}\nlet random = bytes => {\n  let buffer = buffers[bytes]\n  if (!buffer) {\n    // `Buffer.allocUnsafe()` is faster because it doesn’t flush the memory.\n    // Memory flushing is unnecessary since the buffer allocation itself resets\n    // the memory with the new bytes.\n    buffer = Buffer.allocUnsafe(bytes)\n    if (bytes <= 255) buffers[bytes] = buffer\n  }\n  return crypto__WEBPACK_IMPORTED_MODULE_0___default.a.randomFillSync(buffer)\n}\n\nlet customRandom = (alphabet, size, getRandom) => {\n  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes\n  // values closer to the alphabet size. The bitmask calculates the closest\n  // `2^31 - 1` number, which exceeds the alphabet size.\n  // For example, the bitmask for the alphabet size 30 is 31 (00011111).\n  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1\n  // Though, the bitmask solution is not perfect since the bytes exceeding\n  // the alphabet size are refused. Therefore, to reliably generate the ID,\n  // the random bytes redundancy has to be satisfied.\n\n  // Note: every hardware random generator call is performance expensive,\n  // because the system call for entropy collection takes a lot of time.\n  // So, to avoid additional system calls, extra bytes are requested in advance.\n\n  // Next, a step determines how many random bytes to generate.\n  // The number of random bytes gets decided upon the ID size, mask,\n  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance\n  // according to benchmarks).\n  let step = Math.ceil((1.6 * mask * size) / alphabet.length)\n\n  return () => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      // A compact alternative for `for (var i = 0; i < step; i++)`.\n      let i = step\n      while (i--) {\n        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.\n        id += alphabet[bytes[i] & mask] || ''\n        // `id.length + 1 === size` is a more compact option.\n        if (id.length === +size) return id\n      }\n    }\n  }\n}\n\nlet customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)\n\nlet nanoid = (size = 21) => {\n  let bytes = random(size)\n  let id = ''\n  // A compact alternative for `for (var i = 0; i < step; i++)`.\n  while (size--) {\n    // It is incorrect to use bytes exceeding the alphabet size.\n    // The following mask reduces the random byte in the 0-255 value\n    // range to the 0-63 value range. Therefore, adding hacks, such\n    // as empty string fallback or magic numbers, is unneccessary because\n    // the bitmask trims bytes down to the alphabet size.\n    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__[\"urlAlphabet\"][bytes[size] & 63]\n  }\n  return id\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/index.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlAlphabet\", function() { return urlAlphabet; });\n// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped\n// optimize the gzip compression for this alphabet.\nlet urlAlphabet =\n  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'\n\n\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/url-alphabet/index.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import webdriver from 'selenium-webdriver';\nconst nanoid_1 = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.js\");\nconst options = {\n    year: 'numeric', month: 'numeric', day: 'numeric',\n    hour: 'numeric', minute: 'numeric', second: 'numeric',\n    hour12: false, timeZone: 'UTC', timeZoneName: 'short'\n};\nconst utcNow = () => new Intl.DateTimeFormat('en-US', options).format(Date.now());\nconst timeInSeconds = (start) => (Date.now() - start) / 1000;\nconst mklog = (story, message) => `[${story}] ${utcNow()} ${message}`;\nconst runner = {\n    uuid: nanoid_1.nanoid(),\n    numberOfStories: 1,\n    start: (driver) => __awaiter(void 0, void 0, void 0, function* () {\n        const results = [];\n        const name = 'login-form';\n        const start = Date.now();\n        const url = 'http://crossbrowsertesting.github.io/login-form.html';\n        const log = (message) => {\n            results.push(mklog(name, message));\n        };\n        log('started');\n        log(`subject: ${url}`);\n        try {\n            log(`loading`);\n            ///await driver.get(url);\n            //log(`Sending username to field`);\n            //await driver.findElement(webdriver.By.id(\"username\")).sendKeys(\"tester@crossbrowsertesting.com\");\n            //webdriver.\n            //log.push('[TRYING] send password to field');\n            //send keys to element to enter text\n            //await driver.findElement(webdriver.By.xpath(\"//*[@type=\\\"password\\\"]\")).sendKeys(\"test123\");\n            //log.push('[TRYING] submit form');\n            //await driver.findElement(webdriver.By.css(\"button[type=submit]\")).click();\n            //log.push('[TRYING] verify results');\n            //await driver.wait(webdriver.until.elementLocated(webdriver.By.id(\"logged-in-message\")), 10000);\n            //log.push('[TRYING] close down');\n            //await driver.quit();\n        }\n        catch (e) {\n            log(`error: ${e}`);\n            //await driver.quit();\n        }\n        log(`finished in ${timeInSeconds(start)} seconds}`);\n        return results;\n    })\n};\nexports.default = runner;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ })

/******/ });