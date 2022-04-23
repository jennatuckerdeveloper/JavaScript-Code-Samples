/* Create a closure to demo the JS behavior.

 This is the better way to write code that prints 1, 2, 3, 4 with a pause between each.

 const myCloj = () => {
 	for (let i = 0; i < 4; i++) {
 		setTimeout(() => console.log(i), i * 1000)
 	}
 }

 Without let to make the i variable block scoped, the function breaks and prints 4, 4, 4, 4.
 This can also be fixed with a closure.
 This version uses an IIFE (immediately invoked function expression).

*/

const myCloj = () => {
	// var or implied global scope
	for (i = 0; i < 4; i++) {
		;((j) => setTimeout(() => console.log(j), i * 1000))(i)
	}
}

myCloj()
