/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
const createRange = (n) => {
	return new Array(n).fill(null).map((_, i) => i)
}

const solution = (n) => {
	if (n < 1) return 0
	const multThreeOrFive = (n) => {
		return n % 3 === 0 || n % 5 === 0
	}

	const range = createRange(n)

	return range.reduce((res, n) => (multThreeOrFive(n) ? res + n : res))
}

console.log(solution(10)) // => 23
