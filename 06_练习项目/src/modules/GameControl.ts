import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 1);
        this.init();
    }

    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', (e) => this.keydownHandler(e));
        // 调用run方法，使蛇移动
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        // 判断event.key的值是否合法
        // 修改direction属性
        this.direction = event.key;
    }

    run() {
        /**
         *  根据方向(this.direction)来使蛇的位置改变
         *       向上 top 减少
         *       向下 top 增加
         *       向左 left 减少
         *       向右 left 增加
         */
        //    获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case 'w':
            case 'W':
                // 向上移动 top 减少
                Y -= 10;
                break;
            case 's':
            case 'S':
                // 向下移动 top 增加
                Y += 10;
                break;
            case 'a':
            case 'A':
                // 向左移动 left 减少
                X -= 10;
                break;
            case 'd':
            case 'D':
                // 向右移动 left 增加
                X += 10;
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X, Y);

        // 修改蛇的X和Y值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert((e as Error).message);
            this.isLive = false;
        }

        // 开启一个定时调用
        this.isLive &&
            setTimeout(() => {
                this.run();
            }, 300 - (this.scorePanel.level - 1) * 30);
    }

    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 食物的位置进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        }
    }
}
