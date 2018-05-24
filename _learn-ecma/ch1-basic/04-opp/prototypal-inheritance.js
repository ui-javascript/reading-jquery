// Define a "class" with two methods
function Accommodation() {}
Accommodation.prototype.lock = function() {};
Accommodation.prototype.unlock = function() {};

// Define a constructor function for what will become our subclass
function House(defaults) {
  defaults = defaults || {};
  this.floors = 2;
  this.rooms = defaults.rooms || 7;
}

// 原型继承
House.prototype = new Accommodation();

// 指向构造函数
// 没有的话会认为是Accommodation类创建的
// 默认指向父类的构造函数
House.prototype.constructor = House;

// Create an instance of a House
var myHouse = new House();
var myNeighborsHouse = new House({
  rooms: 8
});

console.log(myHouse.rooms); // 7
console.log(myNeighborsHouse.rooms); // 8

myHouse.lock();
myNeighborsHouse.unlock();

console.log(myHouse.constructor === House); // true
console.log(myHouse.constructor === Accommodation);
// false, since we pointed the constructor to House

console.log(myNeighborsHouse instanceof House); // true
console.log(myNeighborsHouse instanceof Accommodation);
// true, since House inherits Accommodation
console.log(myNeighborsHouse instanceof Object);
