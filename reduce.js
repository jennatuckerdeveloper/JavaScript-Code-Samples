// const myArr = [2, 19, 6, 37, 8, 10, 12]
const addOne = (num) => {
	return num + 1
}

const multBy30 = (num) => {
	return num * 30
}
const myArr = [addOne, multBy30]
const v = 0
const reduced = myArr.reduce((v, func) => func(v), v)
console.log(reduced)

const myArr2 = [2, 4, 6, 8] // 6, 12, 18, 24 => 58 
const reduced2 = myArr2.reduce((acc, arrVal) => {
  console.log(arrVal)
  return arrVal * 3
}, 0)