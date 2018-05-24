/**
 * try-catch捕获错误
 * err.message显示
 * @return {[type]} [description]
 */
function message(){
    try {
        adlert("Welcome guest!"); // 这里alert拼写错误
    }
    catch(err) {
        var txt = "";
        txt += "错误描述：" + err.message + "\n\n";
        alert(txt);
    }
}

/**
 * throw抛出错误
 * Error对象的演示
 * EvalError RangeError ReferenceError
 * TypeError URIError
 */
function myFunction() {
    try {
        var x=document.getElementById("demo").value;
        if(x=="")    {
            // throw "值为空";
            throw new Error("值为空");
        }
        if(isNaN(x)) throw "不是数字";
        if(x>10)     throw "太大";
        if(x<5)      throw "太小";
    } catch(err){
        var y = document.getElementById("mess");
        y.innerHTML="错误：" + err; // Error: 值为空
        console.log(err.message); // 值为空
    }
}

/**
 * 手动设置断点
 * debugger
 */
var x = 15 * 5;
// debugger;
    // 手动设置断点,需要打开调试台再refresh
    // 发布代码的时候一定要删掉

document.getElementById("debugger-demo").innerHTML = x;

/**
 * 只是变量提升, 但是赋的值是不会提升的
 * @type {[type]}
 */
elem = document.getElementById("variable-hoisting");
elem.innerHTML = "y 为：" + y;  // undefined
var y = 7;
// elem.innerHTML = "y 为：" + y;


/**
 * 演示window.onerror
 * img.onerror
 * bug: 理论上显示错误信息行号等,但没有
 * 图片这里也没有显示出来??
 */
// window.onerror = function(message, url, line) {
//     console.log("你调用的函数不存在");
//     console.log(message + " " + url + " " + line);
//     return true;
// };
// onHave(); // 这个函数不存在，所以会报错

// function imgLoad() {
//     document.images[0].onerror = function() {
//         console.log("你调用的图片不存在");
//     };
//     document.images[0].src = "test.gif";
// }
// imgLoad(); // 压根没有


