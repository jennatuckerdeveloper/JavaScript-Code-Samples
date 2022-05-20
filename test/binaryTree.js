const chai = require('chai')
const { search } = require('../binaryTree.js')
const assert = chai.assert

class Node {
	constructor(value, left = null, right = null) {
		this.value = value
		this.left = left
		this.right = right
	}
}

describe('search', () => {
	it('Should work with an empty tree', () => {
		assert.strictEqual(search(666, null), false)
	})

	it('Should work with a simple tree', () => {
		const root = new Node(666, new Node(555), new Node(444))
		assert.strictEqual(search(444, root), true)
		assert.strictEqual(search(555, root), true)
		assert.strictEqual(search(666, root), true)
		assert.strictEqual(search(777, root), false)
	})

	it('Should work with a leaf tree', () => {
		const root = new Node(42)
		assert.strictEqual(search(42, root), true)
		assert.strictEqual(search(43, root), false)
	})

	it('Should work with a complete tree', () => {
		const SIZE = 20
		const nodes = Array.from({ length: SIZE }, (_, i) => new Node(i))

		for (let i = 0; i < SIZE; i++) {
			const idx_left = 2 * i + 1
			const idx_right = 2 * i + 2
			nodes[i].left = nodes[idx_left] || null
			nodes[i].right = nodes[idx_right] || null
		}

		for (let i = 0; i < SIZE; i++) {
			assert.strictEqual(search(i, nodes[0]), true)
		}

		assert.strictEqual(search(SIZE, nodes[0]), false)
	})
})
