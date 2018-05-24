var hello;
var hi;

function test(hello) {
	hello = "hello, in fact I'm hi";
	return hello;
}

console.log(hello);
test(hello);
console.log(hello);
hi = test(hi);
console.log(hi);

