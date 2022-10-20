// import { hi } from './m';
let a = 10;
// console.log(hi);
console.log(a);

// a='hello';

function fn(a: number, b: number) {
    return a + b;
}

function fn2(this: Window) {
    alert(this);
}

let box1 = document.getElementById('box1');
box1?.addEventListener('click', function () {
    console.log(this);
});
