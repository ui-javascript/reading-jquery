var a = "12"
var b = a
console.log(b.constructor) // [Function: String]
b = +a
console.log(b.constructor) // [Function: Number]