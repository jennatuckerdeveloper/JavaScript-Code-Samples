// The spread operator and Object.assign go one layer deep to make copies.

const myArr = [1, 3, 5, 7]
const myArr2 = [6, 7, 9, 10]
const myArr3 = [...myArr, ...myArr2]

console.log(myArr3)

const myObj = { 1: myArr, 2: myArr2, 3: myArr3 }

const myObj3 = { ...myObj }
const myObj2 = Object.assign({}, myObj)

// Makes a copy.
console.log(myObj2)
myObj[2] = 'replacement value'
console.log('These will differ:')
console.log(myObj[2])
console.log(myObj2[2])

// Not a deep copy.
console.log('But these will be the same:')
myObj[1][2] = 'something new'
console.log(myObj[1])
console.log(myObj2[1])
console.log(myObj3[1])

