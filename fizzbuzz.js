/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

const fizzBuzz = (n) => {
	const needsRep = (i) => i % 3 === 0 || i % 5 === 0
	let range = createRange(n)
	return range.map((n) => (needsRep(n) ? generateRepString(n) : n.toString()))
}

const createRange = (n) => new Array(n).fill(null).map((_, i) => i + 1)

const generateRepString = (n) => {
	let rep = ''
	if (n % 3 === 0) rep = rep.concat('Fizz')
	if (n % 5 === 0) rep = rep.concat('Buzz')
	return rep
}

/* Alternative using array methods

const generateRep = (n) => {
	const repFragments = []
	n % 3 === 0 ? repFragments.push('Fizz') : null
	n % 5 === 0 ? repFragments.push('Buzz') : null
	return repFragments.join('')
}

*/

console.log(fizzBuzz(15))
