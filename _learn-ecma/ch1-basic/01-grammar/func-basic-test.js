"use strict"; // 使用严格模式

/**
 * 演示函数自调用
 */
(function () {
    document.getElementById("demo").innerHTML = "Hello! \
                 我是自己调用的";  // 反斜杠是和注释相反的...
})();

/**
 * arguments演示
 * 参数太多无法确定时, 可以这样调参数来用
 */
// 找最大值
function findMax() {
    var i, max = 0;
    for(i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max; // 暴露出来
}
document.getElementById("maxNum").innerHTML = findMax(4, 5, 6);
// 求和
function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("numSum").innerHTML = sumAll(1, 123, 500, 115, 44, 88);


/**
 * 函数调用演示
 * call与apply的区别
 */
function myFunction(a, b) {
    return a * b;
}
var myObject,
    myArray = [4, 2, 7];

// 在strict mode下, 在调用函数时第一个参数会成为 this 的值
// 即使该参数不是一个对象。
// 在non-strict mode下, 如果第一个参数的值是 null 或 undefined,
// 它将使用全局对象替代。
console.log("call方法：" + myFunction.call(myObject, 10, 2)); // 20
console.log("apply方法：" + myFunction.apply(myObject, myArray)); // 20
// console.log("apply方法：" + myFunction.apply(null, myArray)); // 20
                                                 // myArray相当于10 , 2


/**
 * 计数器困境
 * 摘自：http://www.runoob.com/js/js-function-closures.html
 * 与生命周期等有关
 * 解决的方法 内嵌函数？与函数闭包
 * 首先就是傲娇，不用全局变量
 * 闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。
 */

// 内嵌函数解决计数器困境
// 还是不行，因为要确保 counter = 0 只执行一次
add();
add();
document.getElementById("nestedFuncNum").innerHTML = add();
document.getElementById("nestedFuncNum").innerHTML = add(); // 还是1
function add() {
    var counter = 0; // 又初始化回去了
    // counter++;
    function plus() {counter += 1;}
    plus();
    return counter; // 暴露出去
}

// 函数闭包来解决计数器尴尬
// 变量 add 指定了函数自我调用的返回字值。
// 自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。
// add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。
// 这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。
// 计数器受匿名函数的作用域保护，只能通过 add 方法修改。
var funcClosureAdd = (function () {
    var counter = 0;
    return function () { return counter += 1;}
})(); // 逆天啊, 为什么??

function useFuncClosure(){
    document.getElementById("funcClosureNum").innerHTML = funcClosureAdd();
}


/**
 * 生命周期演示
 */
var i = 19;
function scopeTest() {
    // 内部的会覆盖外面的
    for(var i = 0; i<10; i++) {
        console.log("hello world!!");
    }
    console.log("func里的i = " + i);
    return i;
}

var j = scopeTest();
console.log("j = " + j); // return暴露出来的
console.log("i = " + i); // 19