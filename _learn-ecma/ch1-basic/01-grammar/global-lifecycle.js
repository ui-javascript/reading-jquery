/**
* @Author: 骆金参
* @Date:   2017-03-14T23:43:11+08:00
* @Email:  1095947440@qq.com
* @Filename: lifecycle.js
* @Last modified by:   骆金参
* @Last modified time: 2017-03-14T23:49:50+08:00
*/

// 防止代码污染
var hi = (function() {
  var length = 0;
  function init() {
    length = 0;
  }
  function action() {
    length++;
  }
  function getLength() {
    console.log(length);
  }
  return {
    length: length,
    init: init, // 将函数暴露出来
    action: action,
    getLength
  }
}());



hi.action();
hi.action();
console.log(hi.length); // 0
hi.getLength(); // 2

hi.init();
hi.getLength(); // 0
