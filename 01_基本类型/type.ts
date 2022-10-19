/* 1、number声明 */

let a: number;

// a的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a ='hello'; // 此行代码会报错，因为变量a的类型为number，不能赋值为字符串

/* 2、string声明 */

let b: string;
b = 'hello';
// b = 123; // 此行代码会报错，因为变量b的类型为string，不能赋值为数字

/* 3、boolean声明 */

// 声明完变量直接进行赋值
// let c: boolean = true;

// 如果变量的声明和赋值是同时进行的，则TS可以自动对变量进行类型检测
let c = true;

c = true;

/* 4、函数声明 */

function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(123, 456); // 579
// let result = sum(123, '456'); // 此行代码会报错，因为sum函数的第二个参数的类型为number，不能赋值为字符串
