/**
 * 表单有关事件
 */
// 获得焦点与失去焦点
function txtFocus() {
  var e = window.event;
  var obj = e.srcElement;
  console.log(obj);
  obj.style.background = "#FFFF66";
}

function txtBlur() {
  var e = window.event;
  var obj = e.srcElement;
  console.log(obj);
  obj.style.background = "red";
}

// 类似的select的onchange
// onsubmit onreset


/**
 * 滚动字幕事件
 * 已废弃元素 marquee
 * onstart
 */

/**
 * 编辑事件
 */
//  不允许复制
function prohibitCopy() {
  alert("不允许复制,但想复制你有的是方法！");
  return false;
}

// 屏蔽文本框中进行剪切的操作
function prohibitCut() {
  alert("不允许剪切,但是你还是有的是方法！");
  return false;
}

// 密码框禁止粘贴
// onbeforepaste + func
// onpaste false
// 类似的onselect


/**
 * 对象拖动事件
 * ondrag
 * [张鑫旭blog](http://www.zhangxinxu.com/wordpress/2010/03/javascript%E5%AE%9E%E7%8E%B0%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E6%8B%96%E6%8B%BD%E6%95%88%E6%9E%9C/)
 */

window.onload = function() {
  var oBox = document.getElementById("box");
  var oBar = document.getElementById("bar");
  startDrag(oBar, oBox);
};
