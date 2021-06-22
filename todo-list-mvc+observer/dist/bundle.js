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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Controller_1 = __webpack_require__(/*! ./Controller */ \"./src/Controller.ts\");\r\n// Starts application\r\nnew Controller_1.Controller();\r\n\n\n//# sourceURL=webpack://mvc/./src/App.ts?");

/***/ }),

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Controller = void 0;\r\nvar Model_1 = __webpack_require__(/*! ./Model */ \"./src/Model.ts\");\r\nvar View_1 = __webpack_require__(/*! ./View */ \"./src/View.ts\");\r\nvar Controller = /** @class */ (function () {\r\n    function Controller() {\r\n        this.model = new Model_1.Model();\r\n        this.view = new View_1.View(this);\r\n        // Adds observer to view to watch model\r\n        this.model.addObserver(this.view);\r\n    }\r\n    // Bridge for input data\r\n    Controller.prototype.addTodo = function (todoText) {\r\n        //TODO: Where should be the data validation? Should say something to the view?\r\n        if (todoText === '')\r\n            return;\r\n        this.model.addTodo(todoText);\r\n    };\r\n    return Controller;\r\n}());\r\nexports.Controller = Controller;\r\n\n\n//# sourceURL=webpack://mvc/./src/Controller.ts?");

/***/ }),

/***/ "./src/Model.ts":
/*!**********************!*\
  !*** ./src/Model.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Model = void 0;\r\nvar Observable_1 = __webpack_require__(/*! ./Observer/Observable */ \"./src/Observer/Observable.ts\");\r\nvar Model = /** @class */ (function (_super) {\r\n    __extends(Model, _super);\r\n    function Model() {\r\n        var _this = _super.call(this) || this;\r\n        _this.todos = [];\r\n        return _this;\r\n    }\r\n    Model.prototype.addTodo = function (todoText) {\r\n        // Creates new todo \r\n        this.todos.push({\r\n            id: Math.max.apply(Math, __spreadArray(__spreadArray([], this.todos.map(function (todo) { return todo.id; })), [0])) + 1,\r\n            text: todoText\r\n        });\r\n        // Informs the observer that data has changed\r\n        this.notifyObserver({ todos: this.todos });\r\n    };\r\n    return Model;\r\n}(Observable_1.Observable));\r\nexports.Model = Model;\r\n\n\n//# sourceURL=webpack://mvc/./src/Model.ts?");

/***/ }),

/***/ "./src/Observer/Observable.ts":
/*!************************************!*\
  !*** ./src/Observer/Observable.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Observable = void 0;\r\nvar Observable = /** @class */ (function () {\r\n    function Observable() {\r\n        this.obs = [];\r\n    }\r\n    Observable.prototype.addObserver = function (observer) {\r\n        this.obs.push(observer);\r\n    };\r\n    Observable.prototype.notifyObserver = function (data) {\r\n        this.obs.forEach(function (observer) { return observer.update(data); });\r\n    };\r\n    return Observable;\r\n}());\r\nexports.Observable = Observable;\r\n\n\n//# sourceURL=webpack://mvc/./src/Observer/Observable.ts?");

/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.View = void 0;\r\nvar View = /** @class */ (function () {\r\n    function View(controller) {\r\n        this.root = document.querySelector('div#root');\r\n        // Creates list for todos\r\n        var list = document.createElement('ul');\r\n        this.root.append(list);\r\n        // Creates input field for new todo\r\n        var input = document.createElement('input');\r\n        input.type = 'text';\r\n        this.root.append(input);\r\n        // Creates submit button and adds input field \r\n        var button = document.createElement('button');\r\n        button.onclick = function () {\r\n            var input = document.querySelector('input');\r\n            controller.addTodo(input.value);\r\n            input.value = '';\r\n        };\r\n        button.textContent = 'Add Todo';\r\n        this.root.append(button);\r\n    }\r\n    View.prototype.update = function (data) {\r\n        // Get list item\r\n        var list = this.root.querySelector('ul');\r\n        // Reset list items\r\n        list.innerHTML = '';\r\n        // Render with new data\r\n        data.todos.forEach(function (todo) {\r\n            list.innerHTML += \"<li>\" + todo.text + \"</li>\";\r\n        });\r\n    };\r\n    return View;\r\n}());\r\nexports.View = View;\r\n\n\n//# sourceURL=webpack://mvc/./src/View.ts?");

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