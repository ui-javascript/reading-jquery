/**
 * json对象的转化
 * 不安全的这个eval方法
 */

"use strict";

// json字符串 → js对象
var txt = '{"employees":[' +
    '{"firstName":"Bill","lastName":"Gates" },' +
    '{"firstName":"George","lastName":"Bush" },' +
    '{"firstName":"Thomas","lastName":"Carter" }]}';

var obj = eval( "(" + txt + ")" );  // eval处理这个字符串 但有安全问题
// var obj = JSON.parse(txt);
var obj2 = JSON.parse(txt); // 返回对象直接量
console.log(JSON.stringify(obj2)); // 返回包含JSON格式的数据的字符串
// {"employees":[{"firstName":"Bill","lastName":"Gates"},{"firstName":"George","lastName":"Bush"},{"firstName":"Thomas","lastName":"Carter"}]}

// 显示
document.getElementById("fname").innerHTML = obj.employees[0].firstName;
document.getElementById("lname").innerHTML = obj2.employees[0].lastName;
document.getElementById("fname2").innerHTML = obj.employees[1].firstName;
document.getElementById("lname2").innerHTML = obj2.employees[1].lastName;