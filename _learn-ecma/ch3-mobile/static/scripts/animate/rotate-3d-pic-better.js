/**
 * 应用事件框架化技术，根据移动设备的精确摆放姿态旋转图片
 */

// Create variables to store the data returned by the device orientation event
var alpha = 0,
  beta = 0,
  gamma = 0,
  imageElem = document.createElement("img");

imageElem.setAttribute("src", "../src/images/Listing10-5.jpg");

// Update the event handler to do nothing more than store the values from the event
function handleOrientationEvent(event) {
  alpha = event.alpha;
  beta = event.beta;
  gamma = event.gamma;
}

// Add a new function to perform just the image rotation using the stored variables
function rotateImage() {
  imageElem.style.webkitTransform = "rotateZ(" + alpha + "deg) rotateX(" + beta + "deg) rotateY(" + gamma + "deg)";
}

document.body.appendChild(imageElem);

// Connect the event to the handler function as normal
window.addEventListener("deviceorientation", handleOrientationEvent, false);

// Execute the new image rotation function once every 500 milliseconds, instead of every time
// the event fires, effectively improving application performance
window.setInterval(rotateImage, 500); // 每.5s才处理一次，不是一直响应
