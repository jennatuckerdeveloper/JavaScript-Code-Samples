// This one is static!

const myObj1 = { a: 1, b: 2 }
const myObj2 = { c: 3, d: 4 }

console.log(Object.assign(myObj1, myObj2))

// instance properties 
console.log(myObj1.constructor) // function that creates prototype 
// valueOf returns primitive value 

