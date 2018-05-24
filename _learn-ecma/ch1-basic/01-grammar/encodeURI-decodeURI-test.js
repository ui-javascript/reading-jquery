/**
 * decodeURI将encodeURI转码的网络资源地址转化成字符串返回
 */
uri = "http://127.0.0.1/save.html?name='测试'";
res = encodeURI(uri);
console.log(res);
// http://127.0.0.1/save.html?name='%E6%B5%8B%E8%AF%95'
console.log(decodeURI(res));
console.log(decodeURI(encodeURI(uri)));