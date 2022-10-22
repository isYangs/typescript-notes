// 定义表示记分牌的类
export default class ScorePanel {
    // score和level用来记录分数和等级
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.querySelector('#score')!;
        this.levelEle = document.querySelector('#level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.score++;
        this.scoreEle.innerHTML = `${this.score}`;
        // 判断分数是多少，如果是10的倍数，就提升等级
        if (this.score % this.upScore === 0) {
            this.addLevel();
        }
    }

    // 设置一个升级的方法
    addLevel() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = `${this.level}`;
        }
    }
}
