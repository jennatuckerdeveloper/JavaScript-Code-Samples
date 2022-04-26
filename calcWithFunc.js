/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

const numMaker = (num) => (op) => op ? op(num) : num
const zero = numMaker(0)
const one = numMaker(1)
const two = numMaker(2)
const three = numMaker(3)
const four = numMaker(4)
const five = numMaker(5)
const six = numMaker(6)
const seven = numMaker(7)
const eight = numMaker(8)
const nine = numMaker(9)

const plus = (b) => (a) => a + b
const minus = (b) => (a) => a - b
const times = (b) => (a) => a * b
const dividedBy = (b) => (a) => parseInt(a / b)

module.exports = {
	zero,
	one,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	plus,
	minus,
	times,
	dividedBy
}
