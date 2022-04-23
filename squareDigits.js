/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

const squareDigits = (n) => {
	const digits = n.toString().split('')
	const squared = digits.map((e) => e * e)
	return parseInt(squared.join(''))
}

// Alternative using Number
const squareDigitsAlt = (n) => {
	const digits = n.toString().split('')
	const squared = digits.map((e) => e * e)
	return Number(squared.join(''))
}

// Shorter version that's less human readable.
const squareDigitsShort = (n) => {
	return Number(
		n
			.toString()
			.split('')
			.map((e) => e * e)
			.join('')
	)
}

module.exports = { squareDigits }
