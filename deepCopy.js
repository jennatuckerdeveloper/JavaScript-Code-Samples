const isPrimitive = (data) => data === null || typeof data !== 'object'

const deepCopy = (toCopy) => {
	if (isPrimitive(toCopy)) return toCopy
	if (Array.isArray(toCopy))
		return toCopy.map((e) => (isPrimitive(e) ? e : deepCopy(e)))
	return Object.assign(
		{},
		...Object.keys(toCopy).map((key) =>
			isPrimitive(toCopy[key])
				? { [key]: toCopy[key] }
				: { [key]: deepCopy(toCopy[key]) }
		)
	)
}

const arr1 = [1, 2, [4, 5, [7, 8, [9, 10]]]]
const arrCopy = deepCopy(arr1)
arrCopy[2][2][2] = 'NEW!'

console.log(arr1[2][2][2])
console.log(arrCopy[2][2][2])

let prim = 'myString'
let primCop = deepCopy(prim)
prim = prim.concat('MORE')
console.log(prim)
console.log(primCop)

const obj1 = { a: 1, b: { c: 2, d: 3 } }
const obj2 = deepCopy(obj1)
console.log(obj1)
console.log(obj2)
obj1.b.c = '!!!'
console.log(obj1)
console.log(obj2)
