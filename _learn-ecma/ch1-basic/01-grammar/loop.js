// funcArg 以函数为参数
var z = 10;
function foo() {
  console.log(z);
}

(function (funcArg) {
  var z = 20;
  funcArg();
})(foo); // 10

// 函数数组
// 覆盖 override
var data = [];
for(var k = 0; k < 3; k++){
  data[k] = function(){
      console.log(k);
  };
}
data[0]();
data[1]();
data[2]();
