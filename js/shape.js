// 封装形状类

class Shape {

    // 形状类型 0  -  6  一共 7 种类型，每种形状 4 种类型

    type = 0

    // 形状角度

    angle = 0

    // 定义形状数据

    shapes = [
        // 定义 【一】字型数据 
        [
            [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ],
            [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ]
        ],
        // 定义【土】字型数据
        [
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0]
            ]
        ],
        // 定义【田】字型数据
        [
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ],
        ],
        //定义 【L】字型数据
        [
            [
                [1, 0, 0],
                [1, 0, 0],
                [1, 1, 0]
            ],
            [
                [1, 1, 1],
                [1, 0, 0],
                [0, 0, 0]
            ],
            [
                [1, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 0, 0],
                [1, 1, 1]
            ]
        ],
        //定义 反【L】字型数据
        [
            [
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 0, 0],
                [1, 1, 1]
            ],
            [
                [1, 1, 0],
                [1, 0, 0],
                [1, 0, 0]
            ],
            [
                [1, 1, 1],
                [0, 0, 1],
                [0, 0, 0]
            ]
        ],
        // 定义反 【z】字型数据
        [
            [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0]
            ],
            [
                [1, 0, 0],
                [1, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 0, 1]
            ]
        ],
        // 定义 【z】字型数据
        [
            [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [1, 0, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 0, 1],
                [0, 1, 1],
                [0, 1, 0]
            ]
        ]
    ]
    origin = [0, 3]

    // 封装形状砖块坐标推导方法
    getPos(type, angle) {

        var shape = this.shapes[type][angle]

        // 存储形状坐标
        var pos = []

        // 遍历形状数据，根据原点推算出可移动方块的坐标

        shape.forEach((row, y) => {
            row.forEach((block, x) => {

                //   console.log(x, y);  
                // 遍历某个形状的具体的行和列的值为1进行推导
                if (block == 1) {

                    // 如果遍历到某个block块为 1 （即为红色）
                    // 根据形状原点推算出红色块所在的x坐标和y坐标
                    // 推算出4个数组之后，将这4个push到pos数组中
                    pos.push([this.origin[0] + y, this.origin[1] + x])

                }
            })
        })

        // 返回 pos 数组，该数组有4个元素
        // 每个元素都是一个拥有两个元素的的数组，每一个数组表示一个小方块的坐标
        return pos
    }

    // 封装图形的显示方法
    show() {
        // 調用getPos 方法獲得可移動磚塊坐標（4個表示坐標的的數組），
        // 其中第 0 個 元素表示 x 坐標， 第一個元素表示 y 坐標
        // 遍歷這 4 個 表示坐標的數組，並把對應 的坐標數據設置為 1 即可

        this.getPos(this.type, this.angle).forEach(pos => {

            // 第 0 個元素表示 x 坐標， 第 1 個元素表示 y 坐標
            blocks[pos[0]][pos[1]] = 1
        })
    }
    add() {

        // 重置形狀原點坐標
        this.origin = [0, 3]

        // 重置形狀角度
        this.angle = 0

        // 生成隨機形狀 0 --- 6   【0， 6】
        this.type = Math.floor(Math.random() * 7)

        // 判斷新興莊是否會與固定方塊有重合（默認不重合）
        var flag = true

        // 判斷形狀的4個坐標位置的對應的值，如果有數字為2的，表示有重合部分
        this.getPos(this.type, this.angle).forEach(pos => {
            if (blocks[pos[0]][pos[1]] == 2) {
                flag = false
            }
        })
        if (flag) {
            this.show()
        } else {
            clearInterval(id)
            id = 0;
            alert('Game Over!');
            // 清空屏幕
            clearAll();
        }
    }
    // 按上箭头变形
    rotate() {

        // 获取类型
        let type = this.shapes[this.type]
        let arr = [0, 1, 2, 3]
        let i = Math.floor(Math.random()*4)
            arr.forEach((i) => {
              console.log(i, this.shapes[this.type][i]);  
            })
            
            // shape = this.shapes[this.type][i];
            // map.render();
    }
}