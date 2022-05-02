const isPrimitive = (data) => data === null || typeof data !== 'object'

const arrayDeepCopy = (toCopy) => {
	if (isPrimitive(toCopy)) return toCopy
	if (Array.isArray(toCopy))
		return toCopy.map((e) => (isPrimitive(e) ? e : arrayDeepCopy(e)))
	return Object.assign(
		{},
		...Object.keys(toCopy).map((key) =>
			isPrimitive(toCopy[key])
				? { [key]: toCopy[key] }
				: { [key]: arrayDeepCopy(toCopy[key]) }
		)
	)
}

const arr1 = [1, 2, [4, 5, [7, 8, [9, 10]]]]
const arrCopy = arrayDeepCopy(arr1)
arrCopy[2][2][2] = 'NEW!'

console.log(arr1[2][2][2])
console.log(arrCopy[2][2][2])

let prim = 'myString'
let primCop = arrayDeepCopy(prim)
prim = prim.concat('MORE')
console.log(prim)
console.log(primCop)

const obj1 = { a: 1, b: { c: 2, d: 3 } }
const obj2 = arrayDeepCopy(obj1)
console.log(obj1)
console.log(obj2)
obj1.b.c = '!!!'
console.log(obj1)
console.log(obj2)
