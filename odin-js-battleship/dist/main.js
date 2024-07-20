/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/player/player */ \"./src/modules/player/player.js\");\n/* harmony import */ var _modules_player_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_player_player__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM/initialRender */ \"./src/modules/DOM/initialRender.js\");\n/* harmony import */ var _modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM/renderEnd */ \"./src/modules/DOM/renderEnd.js\");\n/* harmony import */ var _modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2__);\nconsole.log('initiated'); \n\n//keep dom functions on the main.js file for easy data in/out\n\n//imports and init objects\n__webpack_require__.e(/*! import() */ \"src_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./style.css */ \"./src/style.css\"));\n\n\n//DOM modules \n\n\n\n//create players object\nconst players = (function () {\n    let p1 = _modules_player_player__WEBPACK_IMPORTED_MODULE_0___default()(); \n    let p2 = _modules_player_player__WEBPACK_IMPORTED_MODULE_0___default()(false);\n\n    return {\n        p1: () => p1, \n        p2: () => p2,\n    }\n})();\n\n//initial board render \n_modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1___default()(players.p1(), players.p2());\n\n\n//a lil cheat\ndocument.addEventListener(\"keydown\", (e) => {\n    if (e.code === \"Space\") {\n        if (document.querySelector('.startButton') === null) {\n            e.preventDefault();\n            const board = players.p2().getBoard().getGrid();\n            for (let row = 0; row < 10; row++) { \n                for (let column = 0; column < 10; column++) { \n                    if (board[row][column] !== 0 && board[row][column] !== 1 && board[row][column] !== -1) {\n                        players.p2().getBoard().receiveAttack(row, column); \n                    }\n                }\n            }\n            _modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2___default()(players.p1(), players.p2(), \"Player 1\");\n        }\n    }\n})\n\n\n//# sourceURL=webpack://odin-js-battleship/./src/main.js?");

/***/ }),

/***/ "./src/modules/DOM/initialRender.js":
/*!******************************************!*\
  !*** ./src/modules/DOM/initialRender.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderPlayer = __webpack_require__(/*! ./renderPlayer */ \"./src/modules/DOM/renderPlayer.js\");\nconst renderCPU = __webpack_require__(/*! ./renderCPU */ \"./src/modules/DOM/renderCPU.js\");\n\nconst initialRender = (p1, p2) => {\n    const P1BOARD = document.querySelector('#p1'); \n    const P2BOARD = document.querySelector('#p2'); \n    const STARTBUTTON = document.querySelector('.startButton'); \n\n    for (let player = 1; player < 3; player++) { \n        for (let row = 0; row < 11; row++) { \n            for (let column = 0; column < 11; column++) { \n                //render col labels\n                if (row === 0) {\n                    if (column !== 0) {\n                        const label = document.createElement(\"h4\"); \n                        const name = String.fromCharCode(64 + column);\n                        label.classList.add('col-label'); \n                        label.id = 'col-' + name;\n                        label.style.margin = '0'; \n                        label.style.textAlign = \"center\";\n                        label.innerHTML =  name;\n                        if (player === 1) { \n                            P1BOARD.appendChild(label);\n                        } else { \n                            P2BOARD.appendChild(label);\n                        }\n                    } else { //empty label for top left of board\n                        const label = document.createElement(\"div\");\n                        if (player === 1) { \n                            P1BOARD.appendChild(label);\n                        } else { \n                            P2BOARD.appendChild(label);\n                        }\n                    }\n                } else { //render rows\n                    if (column === 0) { //row labels\n                        const label = document.createElement(\"h4\");     \n                        label.classList.add('row-label'); \n                        label.style.textAlign = \"end\";\n                        label.id = 'row-' + row;\n                        label.style.margin = '0'; \n                        label.style.paddingRight = '10px';\n                        label.innerHTML = row;\n                        if (player === 1) { \n                            P1BOARD.appendChild(label);\n                        } else { \n                            P2BOARD.appendChild(label);\n                        }\n                    } else {\n                        const label = document.createElement(\"div\");\n                        label.classList.add('square'); \n                        label.style.border = '1px solid #999';\n                        label.style.height = '100%'; \n                        label.style.width = '100%';\n                        if (player === 1) { \n                            label.id = \"p1-\" + row + \"-\" + column;\n                            P1BOARD.appendChild(label);\n                        } else { \n                            label.id = \"p2-\" + row + \"-\" + column;\n                            P2BOARD.appendChild(label);\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    STARTBUTTON.addEventListener(\"click\", () => {\n        \n        p2.getBoard().randomiseShips();\n        renderPlayer(true, p1);\n        renderCPU(false, p2, p1);\n    })\n\n}\n\nmodule.exports = initialRender;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/initialRender.js?");

/***/ }),

/***/ "./src/modules/DOM/renderCPU.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/renderCPU.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderPlayer = __webpack_require__(/*! ./renderPlayer */ \"./src/modules/DOM/renderPlayer.js\");\nconst renderEnd = __webpack_require__(/*! ./renderEnd */ \"./src/modules/DOM/renderEnd.js\");\n\nconst renderCPU = (isTurn, player, otherPlayer) => {\n    const P2BOARD = document.querySelector('#p2'); \n    const ANNOUNCER = document.querySelector(\".announcer\");\n    const grid = player.getBoard().getGrid();\n    const board = player.getBoard();\n\n    for (let row = 0; row < 10; row++) { \n        for (let column = 0; column < 10; column++) { \n            if (grid[row][column] === 1) {\n                const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));\n                square.style.boxShadow = '0px 0px 3px 5px red inset'; \n            } else if (grid[row][column] === -1) {\n                const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));\n                square.style.boxShadow = '0px 0px 3px 5px white inset'; \n            } else {\n                continue;\n            }\n        }\n    }\n\n    if (isTurn) {\n        const OOF = document.createElement('div'); \n        OOF.classList.add('outoffocus'); \n        P2BOARD.appendChild(OOF);\n        ANNOUNCER.innerHTML = \"CPU's turn...\";\n        setTimeout(() => {\n            let cpuMove = player.cpuMove(); \n            let check = otherPlayer.getBoard().validAttack(cpuMove.getX(), cpuMove.getY());\n            while (!check) { \n                cpuMove = player.cpuMove(); \n                check = otherPlayer.getBoard().validAttack(cpuMove.getX(), cpuMove.getY());\n            }\n            otherPlayer.getBoard().receiveAttack(cpuMove.getX(), cpuMove.getY());\n            if (otherPlayer.getBoard().endCondition()) {\n                renderEnd(otherPlayer, player, \"CPU\"); \n                alert('CPU Wins!'); \n            } else {\n                renderPlayer(true, otherPlayer, player);\n                renderCPU(false, player, otherPlayer);\n            }\n        }, 1500)\n    } else {\n        if (P2BOARD.querySelector('.outoffocus') !== null) {\n            P2BOARD.querySelector('.outoffocus').outerHTML = \"\";\n        }\n        \n        for (let row = 0; row < 10; row++) { \n            for (let column = 0; column < 10; column++) { \n                if (grid[row][column] !== 1 && grid[row][column] !== -1) {\n                    const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));\n                    square.style.cursor = 'pointer';\n                    square.addEventListener(\"click\", () => {\n                        board.receiveAttack(row, column); \n                        if (board.endCondition()) {\n                            renderEnd(player, otherPlayer, \"Player 1\"); \n                            setTimeout(alert('Player 1 Wins!'), 500); \n                        } else {\n                            renderPlayer(false, otherPlayer);\n                            renderCPU(true, player, otherPlayer);\n                        }\n                    })  \n                }\n            }\n        }\n    }\n}\n\nmodule.exports = renderCPU;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/renderCPU.js?");

/***/ }),

/***/ "./src/modules/DOM/renderEnd.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/renderEnd.js ***!
  \**************************************/
/***/ ((module) => {

eval("const renderEnd = (p1, p2, winner) => {\n    const ANNOUNCER = document.querySelector(\".announcer\");\n\n    ANNOUNCER.innerHTML = winner + ' wins!';\n    document.querySelector('.outoffocus').outerHTML = '';\n\n    function removeAllEventListeners(parent) {\n        const newParent = parent.cloneNode(true);\n        parent.parentNode.replaceChild(newParent, parent);\n    }\n\n    removeAllEventListeners(document.querySelector(\"#p2\"));\n\n    for (let player = 1; player < 3; player++) { \n\n        let grid = null; \n        let board = null;\n        if (player === 1) {\n            grid = p1.getBoard().getGrid();\n            board = document.querySelector(\"#p1\");\n        } else {\n            grid = p2.getBoard().getGrid();\n            board = document.querySelector(\"#p2\");\n        }\n\n        for (let row = 0; row < 10; row++) { \n            for (let column = 0; column < 10; column++) { \n                const square = document.querySelector('#p' + player + '-' + (row + 1) + '-' + (column + 1));\n                square.style.cursor = 'auto';\n                if (grid[row][column] === 1) {\n                    square.style.boxShadow = '0px 0px 3px 5px red inset'; \n                } else if (grid[row][column] === -1) {\n                    square.style.boxShadow = '0px 0px 3px 5px white inset'; \n                } else {\n                    continue;\n                }\n            }\n        }\n    }\n    \n    setTimeout(() => {alert(winner + \" wins!\")}, 100);\n}\n\nmodule.exports = renderEnd;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/renderEnd.js?");

/***/ }),

/***/ "./src/modules/DOM/renderPlayer.js":
/*!*****************************************!*\
  !*** ./src/modules/DOM/renderPlayer.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const renderPlayer = (isTurn, player) => {\n    const P1BOARD = document.querySelector('#p1'); \n    const P2BOARD = document.querySelector('#p2'); \n    const ANNOUNCER = document.querySelector(\".announcer\");\n    const grid = player.getBoard().getGrid()\n\n    function removeAllEventListeners(parent) {\n        const newParent = parent.cloneNode(true);\n        parent.parentNode.replaceChild(newParent, parent);\n    }\n\n    for (let row = 0; row < 10; row++) { \n        for (let column = 0; column < 10; column++) { \n            if (grid[row][column] === 1) {\n                const square = document.querySelector('#p1-' + (row + 1) + '-' + (column + 1));\n                square.style.boxShadow = '0px 0px 3px 5px red inset'; \n            } else if (grid[row][column] === -1) {\n                const square = document.querySelector('#p1-' + (row + 1) + '-' + (column + 1));\n                square.style.boxShadow = '0px 0px 3px 5px white inset'; \n            } else if (grid[row][column] === 0) {\n                continue;\n            } else {\n                const square = document.querySelector('#p1-' + (row + 1) + '-'+ (column + 1));\n                square.style.boxShadow = '0px 0px 3px 5px blue inset'; \n            }\n        }\n    }\n\n    if (isTurn) { \n        const OOF = document.createElement('div'); \n        OOF.classList.add('outoffocus');\n        P1BOARD.appendChild(OOF);\n        ANNOUNCER.innerHTML = \"Player 1's turn...\";\n    } else {\n        P1BOARD.querySelector('.outoffocus').outerHTML = \"\";\n        removeAllEventListeners(P2BOARD);\n    }\n}\n\nmodule.exports = renderPlayer;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/renderPlayer.js?");

/***/ }),

/***/ "./src/modules/gameboard/gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/gameboard/gameboard.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ship = __webpack_require__(/*! ../ship/ship */ \"./src/modules/ship/ship.js\"); \n\nconst gameboard = () => {   \n    let grid = []; \n    for (let i = 0; i < 10; i++) {\n        grid.push([]);\n        for (let j = 0; j < 10; j++) {\n            grid[i].push(0);\n        }\n    }\n\n    const playerShips = [ship(5), ship(4), ship(3), ship(3), ship(2)]\n\n    const checkFree = (shipLength, startX, startY, orientation) => {\n        if (orientation === \"horizontal\") {\n            if (startY + shipLength < 10) {\n                for (let i = startY; i < startY + shipLength; i++) {\n                    if (grid[startX][i] !== 0) {\n                        return false;\n                    }\n                } \n                return true;\n            } else {\n                return false;\n            }\n        } else {\n            if (startX + shipLength < 10) {\n                for (let i = startX; i < startX + shipLength; i++) {\n                    if (grid[i][startY] !== 0) {\n                        return false;\n                    }\n                } \n\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }\n\n    const checkAllShipsPlaced = () => {\n        const countShips = grid.flat().filter(element => element !== 0).length;\n        if (countShips === 17) {\n            return true; \n        } else {\n            return false;\n        }\n    }\n\n    const placeShip = (ship, x, y, orientation=\"horizontal\") => {\n        if (checkFree(ship.length, x, y, orientation)) {\n            if (orientation === \"horizontal\") {\n                for (let i = y; i < y + ship.length; i++) {\n                    grid[x][i] = ship; \n                }\n                return true;\n            } else {\n                for (let i = x; i < x + ship.length; i++) {\n                    grid[i][y] = ship; \n                }\n                return true;\n            }\n        } else {\n            return false; \n        }\n    }\n\n    const randomiseShips = () => {\n        playerShips.forEach(ship => {\n            const ori = Math.floor(Math.random() * 2);\n            switch (ship.length) {\n                case 5: \n                    if (ori === 0) {\n                        const orientation = 'vertical'; \n                        let x = Math.floor(Math.random() * 6); \n                        let y = Math.floor(Math.random() * 10);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break \n                    } else {\n                        const orientation = 'horizontal'\n                        let x = Math.floor(Math.random() * 10); \n                        let y = Math.floor(Math.random() * 6);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break\n                    }\n                case 4: \n                    if (ori === 0) {\n                        const orientation = 'vertical'; \n                        let x = Math.floor(Math.random() * 7); \n                        let y = Math.floor(Math.random() * 10);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break\n                    } else {       \n                        const orientation = 'horizontal';              \n                        let x = Math.floor(Math.random() * 10); \n                        let y = Math.floor(Math.random() * 7);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break\n                    }\n                case 3: \n                    if (ori === 0) {\n                        const orientation = 'vertical'; \n                        let x = Math.floor(Math.random() * 8); \n                        let y = Math.floor(Math.random() * 10);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break\n                    } else {\n                        const orientation = 'horizontal';\n                        let x = Math.floor(Math.random() * 10); \n                        let y = Math.floor(Math.random() * 8);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break\n                    }\n                case 2: \n                    if (ori === 0) {\n                        const orientation = 'vertical'; \n                        let x = Math.floor(Math.random() * 9); \n                        let y = Math.floor(Math.random() * 10);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break\n                    } else {\n                        const orientation = 'horizontal';\n                        let x = Math.floor(Math.random() * 10); \n                        let y = Math.floor(Math.random() * 9);\n                        let check = checkFree(ship.length, x, y, orientation);\n                        if (!check) {\n                            while (!check) {\n                                x = Math.floor(Math.random() * 6); \n                                y = Math.floor(Math.random() * 10);\n                                check = checkFree(ship.length, x, y, orientation);\n                            }\n                        }\n                        placeShip(ship, x, y, orientation);\n                        break\n                    }\n            }\n        })\n    }\n\n    const receiveAttack = (x, y) => {\n        if (grid[x][y] === 0) {\n            console.log('miss! at ' + x + \" \" + y);\n            grid[x][y] = -1;\n        } else if (grid[x][y] === -1 || grid[x][y] === 1 ) {\n            console.log('invalid target');\n        } else {\n            console.log('hit! at ' + x + \" \" + y);\n            grid[x][y].hit();\n            grid[x][y] = 1;\n        }\n    }\n\n    const validAttack = (x, y) => {\n        if (grid[x][y] === -1 || grid[x][y] === 1 ) {\n            return false;\n        } \n\n        return true;\n    }\n\n    const endCondition = () => {\n        const noShips = grid.every(subArray => subArray.every(Number.isInteger)); \n        const played = grid.some(row => row.includes(1)); \n        if ((noShips && played)) {\n            return true; \n        } else {\n            return false;\n        }\n    }\n\n    return {\n        getGrid: () => grid, \n        getShips: () => playerShips, \n        placeShip, \n        checkAllShipsPlaced,\n        receiveAttack, \n        endCondition,\n        randomiseShips,\n        validAttack\n    }\n}\n\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/gameboard/gameboard.js?");

/***/ }),

/***/ "./src/modules/player/player.js":
/*!**************************************!*\
  !*** ./src/modules/player/player.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameboard = __webpack_require__(/*! ../gameboard/gameboard */ \"./src/modules/gameboard/gameboard.js\"); \n\nconst player = (real=true) => {\n    const board = gameboard(); \n\n    if (real) {\n        \n        return { \n            getBoard: () => board,\n        };\n    } else if (!real) {\n\n        const cpuMove = () => {\n            let x = Math.floor(Math.random() * 10);\n            let y = Math.floor(Math.random() * 10);\n        \n            return {\n                getX: () => x, \n                getY: () => y,\n            }\n        }\n\n        return { \n            getBoard: () => board, \n            cpuMove,\n        };\n    }\n}\n\nmodule.exports = player;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/player/player.js?");

/***/ }),

/***/ "./src/modules/ship/ship.js":
/*!**********************************!*\
  !*** ./src/modules/ship/ship.js ***!
  \**********************************/
/***/ ((module) => {

eval("const ship = (length) => {\n    let hitCount = 0; \n\n    const isSunk = () => {\n        if (hitCount === length) {\n            return true;\n        } \n    }\n\n    const hit = () => {\n        hitCount++;\n    }\n\n    return {\n        length,\n        hit,\n        isSunk,\n    }\n}\n\nmodule.exports = ship;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/ship/ship.js?");

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "odin-js-battleship:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkodin_js_battleship"] = self["webpackChunkodin_js_battleship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;