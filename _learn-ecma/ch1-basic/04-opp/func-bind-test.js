/**
 * 函数绑定
 * 使用正确的context
 */

// 创建元素，但没到document
var header = document.createElement("section");
header.innerHTML = "I am sorry too";

// 控制元素
var mouseState = "up",
  eventHandlers = {
    onClick: function() {
      // If the context is wrong when ‘onClick’ is called, the next two calls will fail
      this.onMouseDown();
      this.onMouseUp();
    },
    onMouseDown: function() {
      mouseState = "down";
    },
    onMouseUp: function() {
      mouseState = "up";
      header.innerHTML = "I am sorry three";
    }
  };

// Force the correct context for ‘eventHandlers.onClick’ by using ‘bind’ to return a new
// function, bound to the context we require
header.addEventListener("click", eventHandlers.onClick.bind(eventHandlers), false);
// header.addEventListener("click", eventHandlers.onMouseUp, false);

document.body.appendChild(header); // Add the <header> element to the page
