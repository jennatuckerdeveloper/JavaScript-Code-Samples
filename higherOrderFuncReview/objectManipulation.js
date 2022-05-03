// Static methods are the ones most used, weirdly!

const myObj = { a: 1, b: 2, c: 3 }
const [keyVal1, keyVal2, keyVal3] = Object.entries(myObj)
console.log(keyVal1)
console.log(keyVal2)
console.log(keyVal3)

for (let [key, val] of Object.entries(myObj)) {
	console.log(key, val)
}

console.log(Object.keys(myObj))
console.log(Object.values(myObj))

// Instance methods!

// Check if this object has a particular key 
console.log(myObj.hasOwnProperty('a'))
console.log(myObj.hasOwnProperty('d'))
console.log(myObj.hasOwnProperty(1))

// Check if this object has a particular value 
console.log(myObj.a)  // 1 
console.log(myObj.d) // undefined 
console.log(myObj[1]) // undefined 

// can be deceiving, though! 
// You can assign falsy values
const myTrickyObj = { a: null, b: undefined, c: 0 }
console.log(!myTrickyObj.a)  // null 
console.log(!myTrickyObj.b) // undefined 
console.log(!myTrickyObj.c) // 0 

