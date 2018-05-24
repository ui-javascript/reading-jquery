/**
 * BOM location assign使用演示
 */
function newDoc(){
    window.location.assign("http://www.w3cschool.cc");
}

/**
 * BOM prompt演示
 */
function myFunction(){
    var x;
    var person = prompt("请输入\n您的名字","Harry Potter");  // 换行
    if (person !== null && person !== "") {  // 两种空值??
        x ="你好 " + person + "<br>今天感觉如何?";  // 换行
        document.getElementById("demo").innerHTML = x;
    }
}

/**
 * confirm与alert的演示
 * @type {[type]}
 */
// var truthBeTold = window.confirm("给个面子,点确定吧");
// if (truthBeTold) {
// 	window.alert("欢迎访问灿哥哥的测试页！");
// }
// else window.alert("再见啦！");

/**
 * 打开新窗口/关闭窗口
 * 关闭子窗口
 * 移动和调整窗口大小 window.moveTo window.resizeTo
 * resizeBy 扩大或缩小
 */
var win_open_btn = document.getElementById("win_open_btn");
win_open_btn.addEventListener("click", function() {
	// window.close();
	pp = window.open("basic-test.html", "new", "height=166,width=155,scrollbars,resizable");
}, false);
win_new_close_btn.addEventListener("click", function() {
    window.location.reload(); // 刷新父窗口 opener什么鬼
    // document.write("我被刷新了");
    pp.close(); // 关闭子窗口
}, false);

/**
 * screen对象的演示
 * 窗口自动滚动
 * 当页面打开时，出现纵向滚动条，页面中的内容从上向下滚动至底部
 * [判断是否达到底部](http://www.jb51.net/article/42744.htm)
 * [jq判断是否滚动到底部](http://www.111cn.net/wy/jquery/59199.htm)
 */
var pos = 0;
var scrollStep = 100;
function scroller() {
    var scrollTop = $(this).scrollTop();
　　var scrollHeight = $(document).height();
　　var windowHeight = $(this).height();
　　if(scrollTop + windowHeight == scrollHeight){
        clearTimeout(timer);
        alert("滚到底了");
　　　　return 0;
　　}
    pos += scrollStep;
    window.scrollTo(0, pos);
    var timer = setTimeout(scroller(), 1000);
}

win_scroll_btn.addEventListener("click", function() {
    scroller();
}, false);
// window.scrollTo(100, 200); // 单独放一条语句不能执行??

// jQuery 判断是否滚动到底部
// $(window).scroll(function(){
// 　　var scrollTop = $(this).scrollTop();
// 　　var scrollHeight = $(document).height();
// 　　var windowHeight = $(this).height();
// 　　if(scrollTop + windowHeight == scrollHeight){
// 　　　　alert("you are in the bottom");
// 　　}
// });


/**
 * 访问窗口历史
 * 在标记里
 */

/**
 * 控制窗口状态栏
 * 窗口时间和超时设定 setTimeout
 */

/**
 * 调整窗口大小
 * 有bug...
 */
function quarter() {
  var w = window.open('','', 'width=100,height=100');
  w.focus();
  w.resizeTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  );
}
