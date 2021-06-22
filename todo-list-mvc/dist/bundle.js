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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Controller_1 = __webpack_require__(/*! ./Controller */ \"./src/Controller.ts\");\r\n// Starts application\r\nnew Controller_1.Controller();\r\n\n\n//# sourceURL=webpack://mvc-observer/./src/App.ts?");

/***/ }),

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Controller = void 0;\r\nvar Model_1 = __webpack_require__(/*! ./Model */ \"./src/Model.ts\");\r\nvar View_1 = __webpack_require__(/*! ./View */ \"./src/View.ts\");\r\nvar Controller = /** @class */ (function () {\r\n    function Controller() {\r\n        this.model = new Model_1.Model();\r\n        this.view = new View_1.View(this);\r\n    }\r\n    // Bridge for input data\r\n    Controller.prototype.addTodo = function (todoText) {\r\n        // Data Validation\r\n        if (todoText === '')\r\n            return;\r\n        this.model.addTodo(todoText);\r\n    };\r\n    Controller.prototype.displayTodos = function () {\r\n        var todos = this.model.getTodos();\r\n        this.view.update(todos);\r\n    };\r\n    return Controller;\r\n}());\r\nexports.Controller = Controller;\r\n\n\n//# sourceURL=webpack://mvc-observer/./src/Controller.ts?");

/***/ }),

/***/ "./src/Model.ts":
/*!**********************!*\
  !*** ./src/Model.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Model = void 0;\r\nvar Model = /** @class */ (function () {\r\n    function Model() {\r\n        this.todos = [];\r\n    }\r\n    Model.prototype.getTodos = function () {\r\n        return this.todos;\r\n    };\r\n    Model.prototype.addTodo = function (todoText) {\r\n        // Creates new todo \r\n        this.todos.push({\r\n            id: Math.max.apply(Math, __spreadArray(__spreadArray([], this.todos.map(function (todo) { return todo.id; })), [0])) + 1,\r\n            text: todoText\r\n        });\r\n    };\r\n    return Model;\r\n}());\r\nexports.Model = Model;\r\n\n\n//# sourceURL=webpack://mvc-observer/./src/Model.ts?");

/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.View = void 0;\r\nvar View = /** @class */ (function () {\r\n    function View(controller) {\r\n        this.root = document.querySelector('div#root');\r\n        // Creates list for todos\r\n        var list = document.createElement('ul');\r\n        this.root.append(list);\r\n        // Creates input field for new todo\r\n        var input = document.createElement('input');\r\n        input.type = 'text';\r\n        this.root.append(input);\r\n        // Creates submit button and adds input field \r\n        var button = document.createElement('button');\r\n        button.onclick = function () {\r\n            var input = document.querySelector('input');\r\n            controller.addTodo(input.value);\r\n            input.value = '';\r\n        };\r\n        button.textContent = 'Add Todo';\r\n        this.root.append(button);\r\n        var updateList = document.createElement('button');\r\n        updateList.onclick = function () {\r\n            controller.displayTodos();\r\n        };\r\n        updateList.textContent = 'Display List';\r\n        this.root.append(updateList);\r\n    }\r\n    View.prototype.update = function (todos) {\r\n        // Get list item\r\n        var list = this.root.querySelector('ul');\r\n        // Reset list items\r\n        list.innerHTML = '';\r\n        // Render with new data\r\n        todos.forEach(function (todo) {\r\n            list.innerHTML += \"<li>\" + todo.text + \"</li>\";\r\n        });\r\n    };\r\n    return View;\r\n}());\r\nexports.View = View;\r\n\n\n//# sourceURL=webpack://mvc-observer/./src/View.ts?");

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