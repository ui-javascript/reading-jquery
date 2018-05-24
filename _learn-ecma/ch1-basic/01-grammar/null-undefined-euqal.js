// 数值 布尔 字符类型进行比较时会先转化成数值类型
// 再比较
// 对象和上述类型比较，会先转化成原始类型
console.log(null == undefined); // true
console.log(0 == null); // false
console.log(false == '0'); // true
console.log(false == 'false'); // false
console.log('\n  123 \t' == 123); // true

var p = {toString: function () {
  return '1';
}};
console.log(p == 1); // true
