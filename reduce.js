const myArr = [2, 5, 7, 21]
const reduced = myArr.reduce((res, val) => res.concat(val), '')
const reduced2 = myArr.reduce((res, val) => [...res, val], [])
console.log(reduced)
console.log(reduced2)