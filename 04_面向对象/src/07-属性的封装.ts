(() => {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        // public 修饰的属性可以在任意位置访问(修改) 默认值
        // private 私有属性, 私有属性只能在类内部进行访问(修改)
        //  - 通过在类中添加方法使得私有属性可以被外部访问
        // protected 受保护的属性, 受保护的属性只能在当前类和当前类的子类中访问(修改)
        private _name: string;
        _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         * getter方法用来读取属性
         * setter方法用来设置属性
         *  - 它们被称为属性的存取器
         */
        /* getName(): string {
            return this._name;
        }
        // 定义方法,用来设置name属性
        setName(value: string): void {
            this._name = value;
        }

        getAge(): number {
            return this._age;
        }

        setAge(value: number): void {
            // 判断年龄是否合法
            if (value >= 0) {
                this._age = value;
            }
        } */

        // TS中设置getter方法的方式
        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }

    const per = new Person('张三', 18);
    /**
     *  现在属性是在对象中设置的，属性可以任意的被修改
     *    属性可以任意被修改将会导致对象中的数据变得非常不安全
     */

    /* per.setName('李四');
    per.setAge(-30); */

    per.name = '李四';
    per.age = -30;
    console.log(per);

    class A {
        protected num: number;
        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A {
        test() {
            console.log(this.num);
        }
    }

    const b = new B(122);
    // B.num = 33; // 报错 num是受保护的属性, 只能在当前类和当前类的子类中访问

    class C {
        constructor(public name: string, public age: number) {}
    }

    const c = new C('王五', 20);
    console.log(c);
})();
