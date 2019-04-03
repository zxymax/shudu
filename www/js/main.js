/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const toolkit = __webpack_require__(1)
	
	// 绘制九宫格类
	class Grid {
	    constructor(container) {
	        this._$container = container
	    }
	    build() {
	        // 通过 toolkit.makeMatrix() 生成数组
	        const matrix = toolkit.makeMatrix()
	        // 定义 span div class样式
	        const rowGroupClasses = ["row-g-top", "row-g-middle", "row-g-bottom"]
	        const colGroupClasses = ["col-g-left", "col-g-center", "col-g-right"]
	        /**
	         * @param rowValues 每一行
	         * @param cellValues 每一列
	         * @description 将每一个元素映射成一个span
	         */
	        const $cells = matrix.map(rowValues => rowValues
	            .map((cellValues, colIndex) => {
	                return $("<span>")
	                    .addClass(colGroupClasses[colIndex % 3])
	                    .text(cellValues)
	            }))
	        // 每行span生成一个div
	        const $divArray = $cells.map(($spanArray, rowIndex) => {
	            return $("<div>")
	                .addClass("row")
	                .addClass(rowGroupClasses[rowIndex % 3])
	                .append($spanArray)
	        })
	        // 将每行的div加到主容器container当中
	        this._$container.append($divArray)
	        
	    }
	    layout() {
	        const width = $("span:first", this._$container).width()
	        $("span", this._$container)
	            .height(width)
	            .css({
	                "line-height": `${width}px`,
	                "font-size": width < 32 ? `${width / 2}px` : ""
	            })
	    }
	}
	
	// 生成实例构建九宫格
	const grid = new Grid($("#container"))
	grid.build()
	grid.layout()

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	const matrixTool = {
	    makeRow( v = 0 ) {
	        let array = new Array(9)
	        array.fill(v)
	        return array
	    },
	    makeMatrix( v = 0 ) {
	        return Array.from({length: 9}, () => this.makeRow(v))
	    },
	    shuffle(array) {
	        let endIndex = array.length - 2
	        for(let i = 0; i < endIndex; i++) {
	            let j = i + ( Math.floor(Math.random() *  (array.length - i)) );
	            [array[i], array[j]] = [array[j], array[i]]
	        }
	        return array
	    }
	}
	module.exports = matrixTool;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map