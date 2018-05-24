"use strict";

var x = 3.14;
delete x;   // 报错
function x(p1, p1) {};   // 报错
var x = 010;             // 报错
delete Object.prototype; // 报错
with (Math){x = cos(2)}; // 报错

var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;            // 报错 只读属性

var obj = {get x() {return 0} };
obj.x = 3.14;            // 报错

eval ("var x = 2");
console.log(x);               // 报错

function f(){ return !this;} 
// 返回false，因为"this"指向全局对象，"!this"就是false

function f(){ 
    // "use strict";
    return !this;
} 
// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。