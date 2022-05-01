/*
Comparing objects is not an easy task in JavaScript. 
The comparison operator only returns true if both variables point 
to the same object, that's why two objects with the same properties 
and values are different for JavaScript, like this:

var a = { name: 'Joe' };
var b = { name: 'Joe' };
a == b;  //-> false
Sometimes it's really useful to detect when two objects have the same 
values.

Your task is to develop the deepCompare function to test if two objects 
have the same properties and values. 

Remember that an object can contain other objects. 
The function should also be able to correctly compare simple values, 
like strings and numbers (without using type coercion, please).

To make things simpler, it will only have to deal with simple values 
and objects and arrays containing strings, booleans and numbers, without 
taking into account regular expressions, dates and functions.
*/

const deepCompare = (o1, o2, nestedObj) => {
	const isObj = (maybeObj) => maybeObj && typeof maybeObj === 'object'
	if (!nestedObj && (!isObj(o1) || !isObj(o2))) return o1 === o2
	if (Object.keys(o1).length !== Object.keys(o2).length) return false
	for (let [key, val] of Object.entries(o1)) {
		if (isObj(val)) return deepCompare(o1[key], o2[key], true)
		if (!o2.hasOwnProperty(key) || !(o2[key] === val)) return false
	}
	return true
}

console.log(deepCompare({ a: 1, b: 2 }, { a: 1 }) === false) // missing key-value pair
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 3 }) === false) // different value
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, c: 3 }) === false) // diferrent key
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }) === false) // extra key-value pair
console.log(deepCompare({ a: { b: 2, c: 3 } }, { a: { b: 2, c: 3 } }) === true) //
console.log(deepCompare({ a: { b: 2, c: 3 } }, { a: { b: 2, c: 4 } }) === false) // different value
console.log(deepCompare({ a: { b: 2, c: 4 } }, { a: { b: 2, d: 4 } }) === false) // different key
console.log(
	deepCompare({ a: { b: 2, c: null } }, { a: { b: 2, c: null } }) === true
)
console.log(
	deepCompare({ a: { b: 2, c: undefined } }, { a: { b: 2, c: undefined } }) ===
		true
)
console.log(deepCompare(null, null) === true)

module.exports = deepCompare
