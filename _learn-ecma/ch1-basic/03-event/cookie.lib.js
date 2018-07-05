/**
 * @Author: 骆金参
 * @Date:   2017-03-27T23:48:21+08:00
 * @Email:  1095947440@qq.com
 * @Filename: cookie.lib.js
 * @Last modified by:   骆金参
 * @Last modified time: 2017-03-27T23:51:39+08:00
 */


/**
 * cookies的演示
 * 需要搭服务器
 */

// key-value-time模式设置cookies
// 还可以设置domain
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // 毫秒级，按天算
  // d.setDate(d.getDate() + (exdays));
  var expires = "expires=" + d.toGMTString(); // 转化成GMT格式
  document.cookie = cname + "=" + cvalue + "; " + expires; // 设置cookies
}

// 通过name, 获取cookies
// 删除就是设置一个过去的时间
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim(); //去除首尾空格
    // 去空格以后,如果"username="在开头
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length); // sub出来名字
    }
  }
  return ""; // 默认返回空
}

function readCookie() {
  var cookieArr = decodeURI(document.cookie).split(";");
  console.log(cookieArr.length);
  for (var i in cookieArr) {
    var cookieNum = cookieArr[i].split("=");
    console.log(cookieNum[0] + " : " + cookieNum[1]);
  }
}

// 判断cookies状态
function checkCookie() {
  var user = getCookie("username");
  if (user !== "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user !== "" && user !== null) {
      setCookie("username", user, 1); // 1天后失效
    }
  }
}
