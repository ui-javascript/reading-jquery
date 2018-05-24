// 函数模仿类
function Animal(name) {
  this.name = name;
}

// prototype扩展方法
Animal.prototype.getName = function() {
  return this.name;
};

var dragon = new Animal("😂");
console.log(dragon.getName());
