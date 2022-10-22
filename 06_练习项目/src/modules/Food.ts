// 定义食物类
export default class Food {
    // 定义一个属性表示食物所对应的元素
    el: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其复制给el
        this.el = document.querySelector('#food')!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.el.offsetLeft;
    }

    get Y() {
        return this.el.offsetTop;
    }

    // 修改食物位置的方法
    change() {
        // 生成一个随机的位置
        const X = Math.round(Math.random() * 29) * 10;
        const Y = Math.round(Math.random() * 29) * 10;
        this.el.style.left = X + 'px';
        this.el.style.top = Y + 'px';
    }
}
