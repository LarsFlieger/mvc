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

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Controller_1 = __webpack_require__(/*! ./Controller */ \"./src/Controller.ts\");\nvar controller = new Controller_1.Controller();\n\n\n//# sourceURL=webpack://mvc/./src/App.ts?");

/***/ }),

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\nvar Model_1 = __webpack_require__(/*! ./Model */ \"./src/Model.ts\");\nvar View_1 = __webpack_require__(/*! ./View */ \"./src/View.ts\");\nvar Controller = /** @class */ (function () {\n    function Controller() {\n        this.model = new Model_1.Model();\n        this.view = new View_1.View(this);\n        this.model.addObserver(this.view);\n    }\n    Controller.prototype.updateTime = function () {\n        this.model.setTime(Date.now());\n    };\n    return Controller;\n}());\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack://mvc/./src/Controller.ts?");

/***/ }),

/***/ "./src/Model.ts":
/*!**********************!*\
  !*** ./src/Model.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Model = void 0;\nvar Observable_1 = __webpack_require__(/*! ./Observer/Observable */ \"./src/Observer/Observable.ts\");\nvar Model = /** @class */ (function (_super) {\n    __extends(Model, _super);\n    function Model() {\n        var _this = _super.call(this) || this;\n        _this.time = Date.now();\n        return _this;\n    }\n    Model.prototype.setTime = function (time) {\n        this.time = time;\n        this.notifyObserver({ time: this.time });\n    };\n    return Model;\n}(Observable_1.Observable));\nexports.Model = Model;\n\n\n//# sourceURL=webpack://mvc/./src/Model.ts?");

/***/ }),

/***/ "./src/Observer/Observable.ts":
/*!************************************!*\
  !*** ./src/Observer/Observable.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Observable = void 0;\nvar Observable = /** @class */ (function () {\n    function Observable() {\n        this.obs = [];\n    }\n    Observable.prototype.addObserver = function (observer) {\n        this.obs.push(observer);\n    };\n    Observable.prototype.notifyObserver = function (data) {\n        this.obs.forEach(function (observer) { return observer.update(data); });\n    };\n    return Observable;\n}());\nexports.Observable = Observable;\n\n\n//# sourceURL=webpack://mvc/./src/Observer/Observable.ts?");

/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.View = void 0;\nvar View = /** @class */ (function () {\n    function View(controller) {\n        this.root = document.querySelector('div#root');\n        var time = document.createElement('h1');\n        time.textContent = \"Init\";\n        this.root.append(time);\n        var button = document.createElement('button');\n        button.onclick = function () { return controller.updateTime(); };\n        button.textContent = \"Update time\";\n        this.root.append(button);\n    }\n    View.prototype.update = function (data) {\n        this.root.querySelector('h1').textContent = data.time;\n    };\n    return View;\n}());\nexports.View = View;\n\n\n//# sourceURL=webpack://mvc/./src/View.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.ts");
/******/ 	
/******/ })()
;