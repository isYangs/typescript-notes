// 声明一个变量a，同时指定它的类型为number
var a;
// a的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a ='hello'; // 此行代码会报错，因为变量a的类型为number，不能赋值为字符串
var b;
b = 'hello';
// b = 123; // 此行代码会报错，因为变量b的类型为string，不能赋值为数字
// 声明完变量直接进行赋值
// let c: boolean = true;
// 如果变量的声明和赋值是同时进行的，则TS可以自动对变量进行类型检测
var c = true;
c = true;
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456); // 579
