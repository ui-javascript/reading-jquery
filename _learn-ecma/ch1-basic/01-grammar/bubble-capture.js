/**
 * 演示冒泡和捕获两种流的区别
 * 默认为false冒泡
 */

document.getElementById("myP").addEventListener("click", function() {
  alert("你点击了 P 元素!");
}, false);
document.getElementById("myDiv").addEventListener("click", function() {
  alert(" 你点击了 DIV 元素 !");
}, false);
document.getElementById("myDiv2").addEventListener("click", function() {
  alert("你点击了 DIV2 元素 !");
}, true);
document.getElementById("myP2").addEventListener("click", function() {
  alert("你点击了 P2 元素!");
}, true);