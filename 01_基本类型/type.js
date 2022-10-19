/* 1、number声明 */
var a;
// a的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a ='hello'; // 此行代码会报错，因为变量a的类型为number，不能赋值为字符串
/* 2、string声明 */
var b;
b = 'hello';
// b = 123; // 此行代码会报错，因为变量b的类型为string，不能赋值为数字
/* 3、boolean声明 */
// 声明完变量直接进行赋值
// let c: boolean = true;
// 如果变量的声明和赋值是同时进行的，则TS可以自动对变量进行类型检测
var c = true;
c = true;
/* 4、函数声明 */
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456); // 579
// let result = sum(123, '456'); // 此行代码会报错，因为sum函数的第二个参数的类型为number，不能赋值为字符串
/* 5、字面量声明 */
var a1;
a1 = 10;
// a1 = 11; // 此行代码会报错，因为变量a1的类型为10，不能赋值为11
/* 6、联合类型 */
var b2;
b2 = 'male';
b2 = 'female';
var c2;
c2 = true;
c2 = 'hello';
/* 7、组合类型 */
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后面加上？表示属性是可选的
var a3;
a3 = {
    name: '张三'
};
// [propName: string]: any 表示任意类型的属性
var b3;
b3 = { name: '张三', age: 18 };
/*
 *  设置函数结构的类型声明
 *  语法：(形参:类型,形参:类型...) => 返回值
 */
var c3;
c3 = function (n1, n2) {
    return n1 + n2;
};
/* 8、Any任意类型 */
// any 表示相当于任何类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// let a3: any; // 显式声明变量a3为any类型
// 声明变量如故不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
var a4;
a4 = 10;
a4 = 'hello';
a4 = true;
/* 9、unknown 表示未知类型 */
var b4;
b4 = 10;
b4 = 'hello';
b4 = true;
var c4;
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
c4 = b4;
c4 = b4;
/* 11、void类型 */
// void表示没有任何类型，一般用于定义方法的时候方法没有返回值
function fn() {
    // return 'hello'; // 此行代码会报错，因为函数没有返回值
}
/* 12、never类型 */
// never表示永远不，是其他类型（包括null和undefined）的子类型，代表从不会出现的值
function fn2() {
    throw new Error('报错了');
}
/* 13、对象类型 没啥用*/
var a5;
a5 = {};
a5 = function () { };
/* 14、数组类型 */
/*
 * 素组的两种定义方式
 *   1、类型[]
 *   2、Array<类型>
 */
// string[] 表示字符串数组
var a6;
a6 = ['a', 'b', 'c'];
// number[] 表示数值数组
var b6;
b6 = [1, 2, 3];
var c6;
c6 = [1, 2, 3];
/* 15、tuple元组类型 */
// 元组就是固定长度的数组
// 语法：[类型,类型,类型]
var a7;
a7 = ['hello', 'world'];
/* 16、enum枚举类型 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var a8;
a8 = {
    name: '张三',
    gender: Gender.Male
};
console.log(a8.gender === Gender.Male); // true
