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

/***/ "./src/DrawableImages/DrawableImage.ts":
/*!*********************************************!*\
  !*** ./src/DrawableImages/DrawableImage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar DrawableImage = /** @class */ (function () {\n    function DrawableImage(context, src, width, height) {\n        this.context = context;\n        this.width = width;\n        this.height = height;\n        this.image = new Image();\n        this.image.src = src;\n    }\n    DrawableImage.prototype.draw = function () {\n        var _this = this;\n        this.image.onload = function () {\n            _this.context.drawImage(_this.image, _this.x, _this.y, _this.width, _this.height);\n        };\n    };\n    return DrawableImage;\n}());\nexports[\"default\"] = DrawableImage;\n\n\n//# sourceURL=webpack://banana-gamev2/./src/DrawableImages/DrawableImage.ts?");

/***/ }),

/***/ "./src/DrawableImages/Heart.ts":
/*!*************************************!*\
  !*** ./src/DrawableImages/Heart.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar DrawableImage_1 = __webpack_require__(/*! ./DrawableImage */ \"./src/DrawableImages/DrawableImage.ts\");\nvar Heart = /** @class */ (function (_super) {\n    __extends(Heart, _super);\n    function Heart(context, x, src) {\n        var _this = _super.call(this, context, src, 40, 40) || this;\n        _this.width = 40;\n        _this.height = 40;\n        _this.y = 12;\n        _this.x = x;\n        _this.src = src;\n        return _this;\n    }\n    Heart.prototype.draw = function () {\n        _super.prototype.draw.call(this);\n    };\n    return Heart;\n}(DrawableImage_1[\"default\"]));\nexports[\"default\"] = Heart;\n\n\n//# sourceURL=webpack://banana-gamev2/./src/DrawableImages/Heart.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar Heart_1 = __webpack_require__(/*! ./DrawableImages/Heart */ \"./src/DrawableImages/Heart.ts\");\nvar Player_1 = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\nvar Game = /** @class */ (function () {\n    function Game(canvas, context, score, screenWidth, screenHeight) {\n        this.initialLives = 4;\n        this.lives = 4;\n        this.canvas = canvas;\n        this.context = context;\n        this.score = score;\n        this.screenWidth = screenWidth;\n        this.screenHeight = screenHeight;\n        this.player = new Player_1[\"default\"](context, screenWidth, screenHeight);\n    }\n    Game.prototype.drawRect = function (x, y, width, height, color) {\n        this.context.beginPath();\n        this.context.rect(x, y, width, height);\n        this.context.fillStyle = color;\n        this.context.fill();\n    };\n    Game.prototype.drawLives = function () {\n        var filledHeartSrc = './sprites/heart.png';\n        var unfilledHeartSrc = './sprites/heart-empty.png';\n        for (var i = 1; i <= this.initialLives; i++) {\n            var x = 11 + 40 * (i - 1);\n            if (i <= this.lives) {\n                var heart = new Heart_1[\"default\"](this.context, x, filledHeartSrc);\n                heart.draw();\n            }\n            else {\n                var heart = new Heart_1[\"default\"](this.context, x, unfilledHeartSrc);\n                heart.draw();\n            }\n        }\n    };\n    Game.prototype.createPlayerMovement = function () {\n        var _this = this;\n        this.canvas.addEventListener('keydown', function (event) {\n            if (event.key === 'ArrowRight' || event.key === 'd') {\n                _this.player.moveRight();\n            }\n            if (event.key === 'ArrowLeft' || event.key === 'a') {\n                _this.player.moveLeft();\n            }\n        });\n    };\n    Game.prototype.start = function () {\n        this.drawRect(0, 0, this.screenWidth, 65, 'black');\n        this.drawRect(9, this.screenHeight - 26, this.screenWidth - 18, 1, 'white');\n        this.drawLives();\n        this.player.draw();\n        this.createPlayerMovement();\n    };\n    return Game;\n}());\nexports[\"default\"] = Game;\n\n\n//# sourceURL=webpack://banana-gamev2/./src/Game.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar DrawableImage_1 = __webpack_require__(/*! ./DrawableImages/DrawableImage */ \"./src/DrawableImages/DrawableImage.ts\");\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player(context, screenWidth, screenHeight) {\n        var _this = _super.call(this, context, './sprites/alien.png', 64, 97) || this;\n        _this.width = 64;\n        _this.height = 97;\n        _this.src = './sprites/alien.png';\n        _this.speed = 3;\n        _this.context = context;\n        _this.x = (screenWidth - _this.width) / 2;\n        _this.y = screenHeight - 27 - _this.height;\n        return _this;\n    }\n    Player.prototype.draw = function () {\n        _super.prototype.draw.call(this);\n    };\n    Player.prototype.moveRight = function () {\n        this.clearPlayer();\n        this.x += this.speed;\n        this.draw();\n    };\n    Player.prototype.moveLeft = function () {\n        this.clearPlayer();\n        this.x -= this.speed;\n        this.draw();\n    };\n    Player.prototype.clearPlayer = function () {\n        this.context.clearRect(this.x, this.y, this.width, this.height);\n    };\n    return Player;\n}(DrawableImage_1[\"default\"]));\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack://banana-gamev2/./src/Player.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nvar canvas = document.querySelector('#canvas');\nvar context = canvas.getContext('2d');\nvar score = document.querySelector('.score');\nvar screenWidth = window.innerWidth;\nvar screenHeight = window.innerHeight;\ncanvas.width = screenWidth;\ncanvas.height = screenWidth;\nvar game = new Game_1[\"default\"](canvas, context, score, screenWidth, screenHeight);\ngame.start();\n\n\n//# sourceURL=webpack://banana-gamev2/./src/app.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;