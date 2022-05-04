/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

const high = (wordsString) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const words = wordsString.split(' ')
	const letters = words.map((word) => word.split(''))
	const scores = letters.map((arrChar) =>
		arrChar.reduce((score, char) => (score += alphabet.indexOf(char) + 1), 0)
	)
	const maxScore = Math.max(...scores)
	const index = scores.indexOf(maxScore)
	return words[index]
}

module.exports = { high }

