// Create a <canvas> element dynamically in JavaScript and get a reference to its
// 2d drawing context
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d"),

    // Get a reference to the image on the page
    img = document.getElementById("image");

// Define a function to process the image data
function processImage() {

    // Store the image width and height to avoid looking them up each time
    var imgWidth = img.width,
        imgHeight = img.height,

    workerThread = new Worker("invert-img-web-worker.js");

    canvas.width = imgWidth;
    canvas.height = imgHeight;
    context.drawImage(img, 0, 0, imgWidth, imgHeight);

    workerThread.addEventListener("message", function(e) {
        var imageData = e.data;

        // Push the new image pixel data to the canvas, starting in the top-left corner
        context.putImageData(imageData, 0, 0);
        document.body.appendChild(canvas); // 先处理再append,避免重绘
    }, false);

    // Kick off the web worker, sending it the raw image data displayed on the canvas
    workerThread.postMessage(context.getImageData(0,0, imgWidth, imgHeight));
}

// Execute the processImage function once the image has finished loading
img.addEventListener("load", processImage, false);