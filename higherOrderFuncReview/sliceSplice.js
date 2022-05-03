// These two always mess me up

// Copies section, returns new array 

const myArr = [2, 3, 5, 7] 

const sliced = myArr.slice(0, 2) // [2,3] // stop BEFORE index 
console.log(sliced)
sliced.push(12)
console.log(myArr) // no 12 

// splice, the really freaky one
// adds or removes elements from an array 
// three params (indexWhereToAdd, elementsToRemove, toAdd...)
console.log(myArr.splice(2, 0, 4, 6)) // WHY DOES THIS PRINT AN EMPTY ARRAY?? 
console.log(myArr)// [2,3,4,6,5,7]

myArr.splice(3, 1) // cuts the 6 out 
console.log(myArr)
myArr.splice(4, 0, 6) // puts the 6 in order
console.log(myArr)