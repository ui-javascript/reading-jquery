Array.prototype.printAll = function() {
	for(var i=0, len = this.length; i < len; i++) {
		console.log(this[i] + " ");
	}
};

var arr = [1, 2, 3, 4, 5, 6];
arr.reverse().printAll();

