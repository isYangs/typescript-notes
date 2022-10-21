import { hi } from './m1';
function sum(a: number, b: number) {
    return a + b;
}
const obj = { name: '张三', age: 18 };
console.log(obj);

obj.age = 20;
console.log(obj);

console.log(sum(1, 2));
console.log('哈哈');
console.log(hi);

console.log(Promise);
