const toolkit = require('./toolkit')

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