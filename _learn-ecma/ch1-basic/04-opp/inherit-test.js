function Animal() {};
Animal.prototype.eat = function(food) {
  console.log("eat " + food);
}

function Cat() {};
Cat.prototype = new Animal(); // 实现继承
Cat.prototype.eat = function(food) {
  Animal.prototype.eat.call(this, food);
  // Cat special...
};

var animal = new Animal();
var cat = new Cat();
cat.eat("cheese");

console.log(animal instanceof Animal); // true
console.log(animal instanceof Cat); // false
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true

// 但是上述方法创建对象总是要初始化
// solution 1 在构造器中添加判断条件
function Animal(a) {
  if (false !== a) {
    return;
  }
  // 初始化code
}

Cat.prototype = new Animal(false);

// solution 2 再定义一个新的空构造器
function Animal() {
  // constructor stuff
}

function f() {};
f.prototype = Animal.prototype;
Cat.prototype = new f();
