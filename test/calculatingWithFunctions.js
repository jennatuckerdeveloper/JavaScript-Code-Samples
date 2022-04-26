const { assert } = require('chai')
const {
	zero,
	one,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	plus,
	minus,
	times,
	dividedBy
} = require('../calcWithFunc.js')

describe('Tests', () => {
	it('test', () => {
		assert.strictEqual(seven(times(five())), 35)
		assert.strictEqual(four(plus(nine())), 13)
		assert.strictEqual(eight(minus(three())), 5)
		assert.strictEqual(six(dividedBy(two())), 3)
		assert.strictEqual(zero(times(two())), 0)
		assert.strictEqual(zero(plus(one())), 1)
	})
})
