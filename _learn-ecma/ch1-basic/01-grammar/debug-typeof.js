console.log(typeof "John");
console.log(typeof 3.14);
console.log(typeof NaN);                    // 返回 number
console.log(typeof false);
console.log(typeof [1,2,3,4]);              // 返回 object
console.log(typeof {name:'John', age:34} );
console.log(typeof new Date());
console.log(typeof function () {} );         // 返回 function
console.log(typeof myCar);
console.log(typeof null);                   // 返回 object

console.log("John".constructor);                 // 返回函数 String()  { [native code] }
console.log((3.14).constructor);                 // 返回函数 Number()  { [native code] }
console.log(false.constructor);                  // 返回函数 Boolean() { [native code] }
console.log([1,2,3,4].constructor);              // 返回函数 Array()   { [native code] }
console.log({name:'John', age:34}.constructor);  // 返回函数 Object()  { [native code] }
console.log(new Date().constructor);             // 返回函数 Date()    { [native code] }
console.log(function () {}.constructor);         // 返回函数 Function(){ [native code] }
console.log();

console.log(String(true)); // "true"
console.log(false.toString()); // "false"
console.log(Number("3.14"));    // 返回 3.14
console.log(Number(" "));       // 返回 0
console.log(Number(""));        // 返回 0
console.log(Number("99 88"));   // 返回 NaN

var y = "5";
var x = + y;
console.log(x); // 数字
y = "John";
x = + y; 
console.log(x); // NaN

var d = new Date();
console.log(Number(d)); // 返回 1404568027739
console.log(d.getTime()); // 返回 1404568027739

var myVar = {name:"Fjohn"};  // toString 转换为 "[object Object]"
console.log(myVar.toString());
myVar = [1,2,3,4];       // toString 转换为 "1,2,3,4"
console.log(myVar.toString());
myVar = new Date();      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"
console.log(myVar.toString());