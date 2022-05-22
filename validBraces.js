/*
Write a function that takes a string of braces, and determines if 
the order of the braces is valid. It should return true if the string 
is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new 
characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, 
brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"{}()[]"   =>  True
"{()}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

const validBraces = (brackets) => {
	if (brackets.length % 2 !== 0) return false
	const open = {
		'[': ']',
		'{': '}',
		'(': ')'
	}
	let stack = []
	for (let bracket of brackets) {
		if (open[bracket]) {
			stack.push(open[bracket])
		} else {
			if (stack.pop() !== bracket) {
				return false
			}
		}
	}
	return stack.length === 0
}

console.log(validBraces('{}()[]')) //  =>  True
console.log(validBraces('{()}[]')) //  =>  True
console.log(validBraces('([{}])')) //  =>  True
console.log(validBraces('(}')) //  =>  False
console.log(validBraces('[(])')) //  =>  False
console.log(validBraces('[({})](]')) // =>  False
console.log(validBraces('[({}{})](]')) // =>  False

module.exports = { validBraces }
