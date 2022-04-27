const chai = require('chai')
const { numObj } = require('../numbersToObjects')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Numbers  to Objects', () => {
	it('Testing for fixed tests', () => {
		assert.deepEqual(numObj([118, 117, 120]), [
			{ 118: 'v' },
			{ 117: 'u' },
			{ 120: 'x' }
		])
		assert.deepEqual(numObj([101, 121, 110, 113, 113, 103]), [
			{ 101: 'e' },
			{ 121: 'y' },
			{ 110: 'n' },
			{ 113: 'q' },
			{ 113: 'q' },
			{ 103: 'g' }
		])
	})
})
