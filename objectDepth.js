/*

Object depth
Write a JavaScript function that returns the depth of an object. 
This function takes one argument that can be any data-type.

The depth of an object, say obj, is how many nested objects obj contains.

Assume an empty object has a depth of 0, while an object non-empty but without nested objects has a depth of 1.

For example :

var obj = {a: 1, b: {c: 2}};
has a depth of 2 because it is a non-empty object containing another non-empty object.

While :

var emptyObj = {};
has a depth of 0 because it is empty.

And :

var obj = {a: 1, b: 2, c: 3};
has a depth of 1.

Arrays should always return a depth of 0.

Be careful about null.

describe('Basic tests', function() {
  it('returns the right depth when an object is passed in', function() {
    Test.assertEquals(depth({}), 0, 'An empty object has no depth');
    Test.assertEquals(depth({a: 1}), 1, 'Depth of {a: 1} should be 1');
    Test.assertEquals(depth({a: 1, b: {c: 2}}), 2, 'Depth of {a: 1, b: {c: 2}} should be 2');
  });
  it('accounts for `null`', function() {
    Test.assertEquals(depth(null), 0, 'Depth of null should be 0');
  });
  it('ignores arrays', function() {
    Test.assertEquals(depth(['a', 'b', 'c']), 0, 'The depth of any array should be 0');
    Test.assertEquals(depth(['a', ['b', 'c']]), 0, "Depth of ['a', ['b', 'c']] should be 0");
  });
});

*/

// const depth = (obj) => {
// 	let objDepth = 0

// 	const isNotEmptyObj = (someData) =>
// 		someData &&
// 		someData.constructor == Object &&
// 		!Array.isArray(someData) &&
// 		Object.keys(someData).length > 0

//   const recursive = (obj, d = 0) => {
//     if (isNotEmptyObj(obj)) {
// 			d += 1
// 			for (let val of Object.values(obj)) {
// 				if (isNotEmptyObj(val)) {
// 					recursive(val, d)
// 				}
// 			}
// 			if (d > objDepth) {
// 				objDepth = d
// 			}
// 		}
// 	}

// 	recursive(obj)

// 	return objDepth
// }

const depth = (obj) => {
	// Needs to keep the deepest depth seen outside of recursive function scope
	let objDepth = 0

	const isNotEmptyObj = (someData) =>
		someData &&
		someData.constructor == Object &&
		!Array.isArray(someData) &&
		Object.keys(someData).length > 0

	const recursive = (obj, currentDepth = 0) => {
		if (isNotEmptyObj(obj)) {
			currentDepth += 1
			for (let val of Object.values(obj)) {
				if (isNotEmptyObj(val)) {
					recursive(val, currentDepth)
				}
			}
			// Needs to record the deepest depth ever seen
			currentDepth > objDepth ? (objDepth = currentDepth) : null
		}
	}

	recursive(obj)

	return objDepth
}

// Return of 0 expected for the following 
const mySet1 = new Set()
mySet1.add(1) // Set [ 1 ]
mySet1.add(5) // Set [ 1, 5 ]
mySet1.add(5) // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 }
mySet1.add(o)
console.log(depth(mySet1))
let Sym1 = Symbol('Sym')
console.log(depth(Sym1))
console.log(depth(BigInt(Number.MAX_SAFE_INTEGER)))
console.log(depth(new Date()))
console.log(depth(() => {}))
console.log(depth(/regex/))
console.log(depth())
console.log(depth(true))
console.log(depth(false))
console.log(depth(null))
console.log(depth(undefined))
console.log(depth('string'))
console.log(depth(1))
console.log(depth([]))
console.log(depth({}))

console.log('>>>>>>>>>>>>>>>> non zero expcted >>>>>>>>>>>>>>>>>>>')

console.log(depth({ a: 1 }) === 1)
console.log(depth({ a: 1, b: {} }) === 1)
console.log(depth({ a: 1, b: { c: null } }) === 2)
console.log(depth({ a: 1, b: { c: undefined } }) === 2)
console.log(depth({ a: 1, b: { c: 0 } }) === 2)
console.log(depth({ a: 1, b: { c: { d: 10 } } }) === 3)
console.log(depth({ a: 1, b: { c: { d: { e: 2 } } } }) === 4)
