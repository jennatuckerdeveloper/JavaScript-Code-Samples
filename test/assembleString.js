const { assert } = require('chai')
const { assembleString } = require('../assembleString')

describe('Sample tests', () => {
	it('Tests', () => {
		assert.strictEqual(
			assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*']),
			'Hello, World!'
		)
		assert.strictEqual(
			assembleString([
				".** . .' .'' ! ! .",
				". . . .' **' ! * .",
				"* . .*.* .'' * ! .",
				". . .*.' .**** ! .",
				"**. * .* .*' ! ! ."
			]),
			". . . .' .'' ! ! ."
		)
		assert.strictEqual(
			assembleString(['. . . .', '. . . .', '. . . .', '. . . .', '. . . .']),
			'. . . .'
		)
		assert.strictEqual(
			assembleString([
				'12***6789',
				'**3456789',
				'12345**8*',
				'***456**9',
				'1*3*5*7*9',
				'*2*456789'
			]),
			'123456789'
		)
		assert.strictEqual(
			assembleString(['******', '******', '******', '******']),
			'######'
		)
		assert.strictEqual(
			assembleString([
				'*#*#*#*#*#*#*#*',
				'*#*#*#*#*#*#*#*',
				'*#*#*#*#*#*#*#*',
				'*#*#*#*#*#*#*#*'
			]),
			'###############'
		)
	})
})
