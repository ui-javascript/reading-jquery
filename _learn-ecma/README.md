# JavaScript学习代码

- 说明

```js
编辑器 Atom + script插件
```

- 基本内容
  - JS原型链式域 | 面向对象
  - ajax
  - cookie
  - dom bom
  - 偏JS的动画
  - 设计模式
  - node.js
  - 移动端
  - 算法 已整理至 https://github.com/reading-digest/interview-preparation
  - es6

- 资源
    - http://eloquentjavascript.net/

# JS基础

- 基础

  - V8引擎深入 <https://segmentfault.com/a/1190000008618731>
  - HTTPS <https://juejin.im/post/58c5268a61ff4b005d99652a?utm_source=gold_browser_extension>

- DOM

```javascript
window.print(); // 执行打印命令
```

- 函数

```javascript
var a = function(i, j, k) {};
console.log(a.length); // 3
```

- 模块化

```javascript
// 防污染
var module = (function($, mudule2) {
  // code
})(jQuery, module2);

// 让jq支持AMD
if( typeof mudule === "object"
    && module
    && typeof module.exports === "") {
  module.exports = jQuery;
} else {
  window.jQuery = window.$ = jQuery;
  if(typeof define === "function" && define.end ) {
    define("jQuery", [], function() { return jQuery; });
  }
}
```


# JS常用设计模式

- 常用设计模式
  - 行为型
  - 观察型
  - 结构型
  - 构建型

- 资源
  - 图书 《精通JavaScript开发》 https://github.com/denodell/pro-javascript-development

# 移动端JS

- 说明

```javascript
部分内容和HTML5重合
```

- 是否联网

```javascript
var isOnline = navigator.onLine;

if (isOnline) {
  // Run code dependent on network access, for example, execute an Ajax call to the server
  console.log("online");
} else {
  console.log("The network has gone offline. Please try again later.");
}
```

- web geolocation

```javascript
// Create a <img> element on the page to display the map tile in
var mapElem = document.createElement("img");

function successCallback(position) {
    var lat = position.coords.latitude,
        long = position.coords.longitude;

    mapElem.setAttribute("src", "http://maps.googleapis.com/maps/api/staticmap?markers=" + lat + "," + long + "&zoom=15&size=300x300&sensor=false");
}

function errorCallback() {
    alert("Sorry - couldn't get your location.");
}

if (navigator.geolocation) {
    // 每秒钟refresh一次
    navigator.geolocation.watchPosition(successCallback, errorCallback, {
        maximumAge: 1000
    });

    // 指定图片尺寸
    mapElem.setAttribute("width", 300);
    mapElem.setAttribute("height", 300);
    document.body.appendChild(mapElem);
}
```

- web storage

```javascript
CACHE MANIFEST
# Version 1.0.1 - 2013-10-02

CACHE:
/library/styles/main.css
/library/scripts/lib/jquery.min.js
/library/scripts/main.js
/images/background.jpg
/images/logo.png

# Always go straight to the network for API calls from a base /api/ URL
NETWORK:
/api/

# Replace a 'network online' image with a 'network offline' image when the network is down
FALLBACK:
/images/network-status-online.png /images/network-status-offline.png
```

# JS简单应用

* 基础

```js
// yuidoc的使用
用于生成文档

// uglifyJS.js
// JSMIN
// JSLint

```

* 调试

```js

```

* local-weather-app 获取当地天气

```
百度定位API http://developer.baidu.com/map/ // 获取当前城市
百度天气API制作 // 获取当前城市四天内的天气情况

eg.
http://api.map.baidu.com/telematics/v3/weather?location=hangzhou&output=json&ak=E577a29e33bc8df7619f6c364501fd09

// 主要代码
$.ajax({
  url: "http://api.map.baidu.com/telematics/v3/weather?location="
    + cityName + "&output=json&ak=E577a29e33bc8df7619f6c364501fd09", // JSON形式 私钥?
  dataType: "jsonp", // 跨域
  callback: "callback", // 回调

  success: function(ret){
    //今天天气
    var container = ["#today","#next1","#next2","#next3"];
    var result = ret.results[0]; // 第1条
    var weather_data = result.weather_data; // 存储在这里

    //城市、风力
    var weather_today = result.weather_data[0].weather;

     // 根据天气替换背景
     // 正则匹配
    if(/雨/.test(weather_today)){
      $("body").css({"background-image":"url('http://ww1.sinaimg.cn/mw690/62d95157gw1ezb4l2hvg9j211y0lce5s.jpg')"});
    } else if(/雪/.test(weather_today)){
      $("body").css({"background-image":"url('http://ww1.sinaimg.cn/mw690/62d95157gw1ezb4wzmvmtj211y0lchdt.jpg')"});
    } else if(/多云|阴/.test(weather_today)){
      $("body").css({"background-image":"url('http://ww1.sinaimg.cn/mw690/62d95157gw1ezb4kyvuzmj211y0lcahf.jpg')"});
    }

    //天气情况
    for(var i in weather_data){
        $(container[i] + " img").attr("src", weather_data[i].dayPictureUrl);
        $(container[i] + " .temp").html(weather_data[i].temperature);
    }

  }
}); // ajax结束

```
![](http://ww3.sinaimg.cn/mw690/62d95157gw1ezasi5ix1gj211y0hvaha.jpg)

[点击查看效果](http://www.5941740.cn/local-weather/index.html)

[![Edit By zhangjh](https://img.shields.io/badge/EditBy-Zhangjh-brightgreen.svg?maxAge=2592000)](https://github.com/zhangjh/hello-blog)

* webrtc-videochat-app 在线视频聊天

```
代码相对比较难 多看几遍
参考
精通JS开发

可能访问的地址 https://qmen.space/webrtc-chat-app/
```

* first-node-app

```
cnpm install
node index.js // 启动

https://github.com/zmyforever1/NodeDemo/tree/master/12%20Socket.IO

This is the source code for a very simple chat example used for
the [Getting Started](http://socket.io/get-started/chat/) guide
of the Socket.IO website.
Please refer to it to learn how to run this application.

// 依赖
https://cdn.socket.io/socket.io-1.2.0.js
http://code.jquery.com/jquery-1.11.1.js

"dependencies": {
  "express": "4.10.2",
  "socket.io": "1.2.0"
}

// 主要代码
var socket = io();
$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val(''); // 清空
  return false;
});

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});

// index.js
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
```

* bower

```js
{
    "name": "my-project",
    "version": "0.0.1",
    "dependencies": {
        "jquery": "~2.1.1",
        "angular": "~1.2.17",
        "requirejs": "~2.1.14"
    },
    "devDependencies": {
        "firebug-lite": "~1.5.1"
    }
}
```
