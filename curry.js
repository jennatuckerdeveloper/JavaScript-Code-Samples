// Demo currying in JS.

const makeAdder = (numA) => {
	return (numB) => numA + numB
}

const adder5 = makeAdder(5)

console.log(adder5(1))
console.log(adder5(2))
console.log(adder5(3))

const add3 = makeAdder(3)
console.log(add3(-1))
console.log(add3(0))
console.log(add3(1))
