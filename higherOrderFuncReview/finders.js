const myArr = [3, 4, 5, 7, 9]

// If true, it stays, if false, it's dropped
const filt = myArr.filter((n) => n % 2 === 0) // []

console.log(filt)

// Same as using reduce with an empty []
const reduced = myArr.reduce((res, n) => {
	if (n % 2 === 0) res.push(n)
	return res
}, [])

console.log(reduced)

// find => returns the first element that passes the func

const finded = myArr.find((n) => n % 2 === 0)

console.log(finded) // 4

const finded2 = myArr.find((n) => n % 2 !== 0) // 3
console.log(finded2)

const finded3 = myArr.find((n) => n === 0) // undefined
console.log(finded3)

// some returns true or false if any one passes test

const somed = myArr.some((n) => n % 2 === 0) // true
console.log(somed)
console.log([(3, 5, 7)].some((n) => n % 2 === 0)) // false

// every runs check on all the elements 
const everyed = myArr.every((n) => n % 2 === 0) // false 
console.log(everyed)
console.log([(3, 5, 7)].some((n) => n % 2 !== 0)) // true

// This one is not really a higher order function, but it goes with this set... 
// includes returns true or false for a value, not a function
// does not coerce types 
const includes = myArr.includes(4) // true
const includes2 = myArr.includes('4') // false? 
console.log(includes)
console.log(includes2)