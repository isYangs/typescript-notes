"use strict";
(() => {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log('动物在叫');
        }
    }
    /**
     * Dog extends Animal
     *  - 此时，Animal被称为父类，Dog被称为子类
     *  - 使用继承后，子类将会拥有父类所有的方法和属性
     *  - 使用继承的语法：class 子类 extends 父类
     *  - 通过继承可以将多个类中共有的代码写在一个父类中
     *      - 这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
     *      - 如果希望在子类中添加一些父类中没有的属性或方法直接添加即可
     *  - 如果子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
     *      - 这种子类覆盖掉父类的方法的形式，我们称之为方法的重写
     */
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
        bark() {
            console.log('汪汪汪');
        }
    }
    // 使Cat类继承Animal类
    class Cat extends Animal {
        bark() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财', 3);
    const cat = new Cat('咪咪', 2);
    console.log(dog);
    dog.bark();
    dog.run();
    console.log(cat);
    cat.bark();
})();
