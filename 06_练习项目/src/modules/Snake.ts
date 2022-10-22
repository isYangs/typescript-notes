export default class Snake {
    el: HTMLElement;
    head: HTMLElement;
    body: HTMLCollection;

    constructor() {
        this.el = document.querySelector('#snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.body = this.el.getElementsByTagName('div');
    }

    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.X === value) {
            return;
        }
        // X的值的合法范围0-290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了！');
        }

        // 修改X时，蛇在向右移动时，不能向左掉头，反之亦然
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.X) {
                // 如果新值value大于旧值X，则说明蛇在向右走
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.left = `${value}px`;
        this.checkHeadBody();
    }

    set Y(value) {
        if (this.Y === value) {
            return;
        }
        // Y的值的合法范围0-290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了！');
        }
        // 修改Y时，蛇在向上移动时，不能向下掉头，反之亦然
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = `${value}px`;
        // 检查是否撞到了身体
        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody() {
        // 向element中添加一个div
        this.el.insertAdjacentHTML('beforeend', '<div></div>');
    }

    // 添加一个蛇身体移动的方法
    moveBody() {
        /**
         * 将后边的身体设置为前边身体的位置
         *  举例子：
         *      第4节 = 第3节的位置
         *      第3节 = 第2节的位置
         *      第2节 = 蛇头的位置
         */
        // 遍历获取所有的身体
        for (let i = this.body.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.body[i] as HTMLElement).style.left = `${X}px`;
            (this.body[i] as HTMLElement).style.top = `${Y}px`;
        }
    }

    // 检查蛇头是否和身体撞到了
    checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！');
            }
        }
    }
}
