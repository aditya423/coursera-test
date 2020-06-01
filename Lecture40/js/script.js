// Function Constructor:
/*
function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getArea = function () {
		return Math.PI * Math.pow(this.radius,2);
	};

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var abc = new Circle(100);
console.log(abc.getArea());

var def = new Circle(1000);
console.log(def.getArea());
*/


// Object literals and 'this':

var literalCircle = {
	radius : 10,

	getArea: function () {
		console.log(this);
		return Math.PI * Math.pow(this.radius , 2);
	}
};

console.log(literalCircle.getArea());






























