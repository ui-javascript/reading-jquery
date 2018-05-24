/**
 * 屏蔽鼠标键盘事件
 * 屏蔽组合键
 * [keyCode参照表](http://blog.csdn.net/woshishui6501/article/details/8282579)
 * [屏蔽鼠标右键](http://www.cnblogs.com/futao/archive/2012/07/18/2597561.html)
 */

// 屏蔽鼠标右键
// 不是onmousedown
document.oncontextmenu = function screenMouse(e) {
  if (e.button == 2) {
    // e.cancelBubble = true;
    e.returnValue = false;
    console.log("鼠标右键理论上被我屏蔽了");
  }
}


// 屏蔽键盘按键
// e在特殊环境下传进去这个参数
document.onkeydown = function screenKb(e) {
  if (e.keyCode == 8) {
    e.keyCode = 0; // 字母按键置0
    e.returnValue = false;
    console.log("呵呵，backspace被我屏蔽了");
  }
  if ((e.altKey) && ((e.keyCode == 37) || (e.keyCode == 39))) {
    e.returnValue = false;
    console.log("呵呵哒, 'alt + 左右键'也被我屏蔽了");
  }
};
