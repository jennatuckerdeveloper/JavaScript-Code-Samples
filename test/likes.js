const chai = require('chai')
const {likes} = require('../likes.js')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('example tests', function () {
	it('should return correct text', function () {
		assert.strictEqual(likes([]), 'no one likes this')
		assert.strictEqual(likes(['Peter']), 'Peter likes this')
		assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
		assert.strictEqual(
			likes(['Max', 'John', 'Mark']),
			'Max, John and Mark like this'
		)
		assert.strictEqual(
			likes(['Alex', 'Jacob', 'Mark', 'Max']),
			'Alex, Jacob and 2 others like this'
		)
	})
})
