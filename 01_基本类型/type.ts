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

/* 5、字面量声明 */

let a1: 10;
a1 = 10;
// a1 = 11; // 此行代码会报错，因为变量a1的类型为10，不能赋值为11

/* 6、联合类型 */

let b2: 'male' | 'female';

b2 = 'male';
b2 = 'female';

let c2: boolean | string;

c2 = true;
c2 = 'hello';

/* 7、组合类型 */

let a3: { name: string; age: number };
a3 = {
    name: '张三',
    age: 19,
};

/* 8、Any任意类型 */
// any 表示相当于任何类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测

// let a3: any; // 显式声明变量a3为any类型

// 声明变量如故不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let a4;
a4 = 10;
a4 = 'hello';
a4 = true;

/* 9、unknown 表示未知类型 */

let b4: unknown;
b4 = 10;
b4 = 'hello';
b4 = true;

let c4: string;

// c4 = a4; // a4的类型为any，可以赋值给任意变量

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量

if (typeof b4 === 'string') {
    c4 = b4;
}

/* 10、类型断言 */

/* 
* 语法：
*   变量 as 类型
*   <类型>变量
*/

// 类型断言，可以用来告诉解析器变量的实际类型
c4 = b4 as string;
c4 = <string>b4;

/* 11、void类型 */

// void表示没有任何类型，一般用于定义方法的时候方法没有返回值
function fn(): void {
    // return 'hello'; // 此行代码会报错，因为函数没有返回值
}

/* 12、never类型 */

// never表示永远不，是其他类型（包括null和undefined）的子类型，代表从不会出现的值
function fn2(): never {
    throw new Error('报错了');
}