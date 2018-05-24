/**
 * 保证这句话打印在开头??
 */
function showTitle() {
    console.log("hello");
}

// window.onload = function() {
//     document.write("<h2>展示各种时钟</h2>");
// };

/**
 * 全局变量
 */
// 获取DOM
var currentTime1 = document.getElementById('currentTime1'),
    currentTime2 = document.getElementById('currentTime2'),
    currentTime3 = document.getElementById('currentTime3'),
    currentTime4 = document.getElementById('currentTime4');
var clock_toggle_btn = document.getElementById("clock_toggle_btn");

// 控制元素
var isClockOn = true; // 按钮状态, 默认关闭
var clock = setInterval(showCurrentTime3, 1000); // 声名计时器

/**
 * requestAnimationFrame周期刷新当前时间
 * 自执行函数
 */
(function showCurrentTime1() {
    var d = new Date();
    currentTime1.innerHTML = d.toLocaleTimeString();
    requestAnimationFrame(showCurrentTime1);
}());

/**
 * setTimeout方法实现周期刷新当前时间
 * 需要先调用一次
 */
function showCurrentTime2() {
    currentTime2.innerHTML = Date();
    setTimeout("showCurrentTime2()", 1000);
}
showCurrentTime2();

/**
 * setIntervald方法实现刷新当前时间
 */
function showCurrentTime3() {
    currentTime3.innerHTML = showClockTime("Y-M-D h:m:s");
}

// 计时器启停
clock_toggle_btn.addEventListener("click", function() {
    isClockOn = !isClockOn;
    if(isClockOn === false) {
        clearInterval(clock);
        clock_toggle_btn.innerHTML = "打开时钟";
    }
    else {
        clock = setInterval(showCurrentTime3, 1000);
        clock_toggle_btn.innerHTML = "关闭时钟";
    }
}, false);

/**
 * 返回时间
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
// 返回时间
function showClockTime(str) {
    var clockTypeStr = "YMDhms";
    var outputStr = "";
    var regex;

    for(var i=0; i<str.length; i++) {
        regex = new RegExp(str[i]);
        if(regex.test(clockTypeStr) === true) {
            outputStr += judgeType(str[i]);
        } else {
            outputStr += str[i];
        }
    }
    return outputStr;
}

// 判断日期类型
function judgeType(str) {
    var d = new Date();
    switch(str) {
        case "Y": return d.getFullYear(); break;
        case "M": return d.getMonth() + 1; break;
        case "D": return d.getDate(); break; // 不是getDay()
        case "h": return d.getHours(); break;
        case "m": return checkTime(d.getMinutes()); break;
        case "s": return checkTime(d.getSeconds()); break;
        default: return "";
    }
}

// 校准数位, 例01
function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}

/**
 * 结合表单显示当前时间
 */
function showCurrentTime4() {
    currentTime4.value = showClockTime("h:m:s");
    requestAnimationFrame(showCurrentTime4);
}
showCurrentTime4();