//  尽量避免使用
with(Math) {
  var a = PI*3;
  console.log(a); // 9.42477796076938
}

var o = { "x" : 123};

console.log(o.x); // 123
var key = "y";
eval('console.log(o.'+ key +');'); // undefined
key = "x";
console.log(o[key]); // 123

var x = 'hello';
function f(o, x) {
  with(o) {
    console.log(x);
  }
}
f(o, x); // 123
o = 123;
f(o, x); // hello
