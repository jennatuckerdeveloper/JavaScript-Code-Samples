const myArr = [2, 5, 7, 21]
const reduced = myArr.reduce((res, val) => [...res, val], [])
console.log(reduced)
