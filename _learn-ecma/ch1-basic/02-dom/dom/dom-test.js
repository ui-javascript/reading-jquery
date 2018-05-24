/**
 * JS操作DOM
 */
var para = document.createElement("p");
var node = document.createTextNode("这是一个新段落。");
var node2 = document.createTextNode("哈哈。");
para.appendChild(node);
para.appendChild(node2); // 追加文字
var element = document.getElementById("DOM-operate-demo");
element.appendChild(para); // 最后再append

/**
 * 开关灯
 * 实际上是操控img.src
 */
function changeImage() {
  var element = document.getElementById('myimage');
  // 字符匹配来判断图片src
  if (element.src.match("bulbon")) {
    element.src = "../src/images/pic_bulboff.gif";
  } else {
    element.src = "../src/images/pic_bulbon.gif";
  }
}

/**
 * 操控样式
 * 这里举例的是style.color
 * 和css抢会怎么样??
 */
function changeColorFunc() {
  var element = document.getElementById("js-change-color");
  element.style.color = "#e89764";
}

/**
 * document对象
 * 链接颜色修改
 * bgColor背景颜色 fgColor文字颜色
 * 文档信息
 */
document.vlinkColor = "#00CCFF"; // 单击过的
document.linkColor = "blue";
document.alinkColor = "red"; // 获得焦点时的

// ie中貌似还是可以的
console.log(document.fileCreatedDate);
console.log(document.fileModifiedDate);
console.log(document.lastModified);
console.log(document.fileSize);
console.log(document.URL);
console.log(document.readyState);

// document.URL = "https://www.baidu.com"; // 是不是只能读取?

// 利用ActiveX控件实现
// var fso = new ActiveXObject("Scripting.FileSystemObject");
// console.log("文件大小为："+fso.GetFile(filePath).size);

/**
 * 打开新窗口并输入内容
 */
var win_open_btn = document.getElementById("win_open_btn");
win_open_btn.addEventListener("click", function() {
  var dw = window.open();
  dw.document.open(); // about:blank
  dw.document.write("<html><title>新窗口</title><h3>hello</h3></html>");
}, false);
