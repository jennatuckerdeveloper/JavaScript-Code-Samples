const arr1 = [1, 3, 5, 7, 9] 

const mappedArr = arr1.map((e, i) => e + i)

console.log(arr1) // unchanged 
console.log(mappedArr) // [1, 4, 7, 10, 13]

// use forEach when the return isn't relevant 
// return is undefined, same as something like console.log 

const forEached = arr1.forEach((e, i) => e + i)

console.log(arr1) // same 
console.log(forEached) // ? 

for (let index in arr1) {
  console.log('counting up from 0', index)
}

for (let num of arr1) {
	console.log('seeing each of the elements', num)
}