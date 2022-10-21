"use strict";
class Dog {
    // constructor是一个构造函数，用来接收参数
    //构造函数会在对象创建时调用
    constructor(name, age) {
        // 实例方法中的 this 指向当前实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过 this 向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('汪汪汪！', this);
    }
}
const dog = new Dog('旺财', 3);
const dog2 = new Dog('小黑', 2);
const dog3 = new Dog('小白', 1);
const dog4 = new Dog('小黄', 4);
// console.log(dog);
// console.log(dog2);
dog3.bark();
