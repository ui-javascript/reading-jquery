// Create a function to add together
// any parameters ('arguments') passed to it
var add = function() {
  var total = 0;
  for (var index = 0, length = arguments.length; index < length; index++) {
    total += arguments[index];
  }
  return total;
};

// Try the function out with different numbers of parameters
// console.log(add(1, 1)); // 2
// console.log(add(1, 2, 7)); // 10
// console.log(add(17, 19, 12, 25, 182, 42, 2)); // 299

// Define our parent Accommodation "class"
function Accommodation() {
  this.isAlarmed = false;
}

Accommodation.prototype.alarm = function(note, time) {
  var message = "Alarm activated at " + time +
    " with the note: " + note;
  this.isAlarmed = true;
  console.log(message); // 输出信息
};

// Define a class House
function House() {
  this.isLocked = false;
}
House.prototype = new Accommodation(); // 继承
House.prototype.alarm = function() {
  // 调用父类方法 无需将参数一一列出
  Accommodation.prototype.alarm.apply(this, arguments);

  this.isLocked = true; // 特有的
};

// Create an object instance from the subclass and try it out
var myHouse = new House();
myHouse.alarm("Activating alarm", new Date());

// 测试继承
console.log(myHouse.isLocked); // true

// constructor
var arr = [1, 2, 3];
console.log(arr.constructor); // [Function: Array]
console.log(arr.constructor.toString());
// function Array() { [native code] }
function isArray(arr) {
  var isIt = arr.constructor.toString();
  return isIt.indexOf("Array") > -1;

}
arr = 45;
console.log(Array.isArray(arr)); // false
console.log(isArray(arr)); // false
