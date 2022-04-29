class Num {
	constructor(num) {
		this.num = num
	}
	toString() {
		return 'The number is ' + this.num
	}
	valueOf() {
		return { num: this.num }
	}
}
/*
Trying to work with it like this:

x = new Num(100);
y = new Num(5);
x + y == 105;
x*y == 500;
x-y == 95
x/y == 20
Math.floor(new Num(100.5)) == 100
etc..
But it doesn't work.. He keeps getting '[object Object][object Object]' as a result..

Wants to be able to use the existing valueOf and toString methods, so we shouldn't change those.

x = new Num(100);
x.toString() == "The number is " + num
x.valueOf() == {num: this.num}
Can you help make this class work?

The class is preloaded.

Test.assertEquals(new Num(123) + new Num(123), 246);
Test.assertEquals(new Num(15) + new Num(15) + 5, 35);
Test.assertEquals(new Num(1) * new Num(0) + 5, 5);
Test.assertEquals(new Num(1) - new Num(10), -9);
Test.assertEquals(new Num(0) + new Num(0) + 0, 0);
Test.assertEquals(Math.floor(new Num(5.5)), Math.floor(5.5), "should work with Math");
Test.assertEquals(typeof new Num(150), "object","typeof new Num should be object")
Test.assertEquals(new Num(100).toString(), "The number is 100", "toString should not be modified")

Test.assertEquals(typeof new Num(150).valueOf().num, "number")
*/

Num.prototype[Symbol.toPrimitive] = function () {
	return this.num
}

const num1 = new Num(10)
console.log(num1.toString())
console.log(num1.valueOf())
console.log(new Num(123) + new Num(123)) // ==> 246
console.log(new Num(15) + new Num(15) + 5) // ==> 35
