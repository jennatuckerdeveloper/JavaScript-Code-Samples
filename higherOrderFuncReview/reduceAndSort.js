// These took me longer to build intuition towards

// Reduce's method takes an accumulator / result value and the next element
// When you pass a second param, that goes in first, instead of first element

const myArr = [1, 2, 3, 5, 7, 9]
const reduced1 = myArr.reduce((res, n) => (res += n)) // 27
console.log(reduced1)

const reduced2 = myArr.reduce((res, n) => {
	if (n % 2 === 0) res.push(n)
	return res
}, []) // [2]
console.log(reduced2)

const reduced3 = myArr.reduce((res, n) => {
	n % 2 === 0
		? (res.even = (res.even || 0) + 1)
		: (res.odd = (res.odd || 0) + 1)
	return res
}, {})
console.log(reduced3) // {even: 1, odd: 5}

// SORTS IN PLACE!
// Sort takes a method that's sort of an interface
// It automatically treats everything like strings, which is blech
// it should have three returns
// 0 for a and b equal
// a negative for a before b
// a positive for a after b

const sorted = myArr.sort((a, b) => a - b) // a pointer, not a new value // ascending 
console.log(sorted)
myArr.push(10)
console.log(myArr) // shows 10
sorted.push(11)
console.log(myArr) // shows 11!
myArr.sort((a, b) => b - a) // descending 
console.log(myArr)

