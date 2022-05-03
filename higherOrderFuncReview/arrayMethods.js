// Other array methods

// The only static method to remember! 
console.log(Array.isArray([]))
console.log(Array.isArray({}))

// Instance methods

const myArr = [3, 5, 7, 9]

console.log(myArr.at(1)) // 5

console.log(myArr.concat([1, 2])) // [3,5,7,9,1,2]

console.log([1, 2, [3, [4]]].flat().flat()) // [1,2,3,4], only goes one layer deep! 

console.log(myArr.reverse()) // [9,7,5,3]

// goes with string.split('')
console.log([1, 2, 3].join()) // '1,2,3'
console.log([1, 2, 3].join('')) // '1,2,3'
console.log([1, 2, 3].join(' ')) // '1 2 3'

// pop() lastelement 
// shift() firstelement 

// THESE TWO FREAKS RETURN NEW LENGTH NOT ELEMENT ITSELF 
// push() adds to end 
// unshift() adds to beginning 

