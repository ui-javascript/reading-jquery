function factorial(n) {
	if(n === 1 || n === 0) { return 1;}
	else { return factorial(n-1)*n; }
}

console.log(factorial(3));

