const strictEqual = require('chai').assert.strictEqual
const { validBraces } = require('../validBraces')

function doTest(braces, expected) {
	const actual = validBraces(braces)
	strictEqual(actual, expected, `for braces:\n"${braces}"\n`)
}

describe('Tests suite', function () {
	it('sample tests', function () {
		doTest('()))', false)
		doTest('()', true)
		doTest('[]', true)
		doTest('{}', true)
		doTest('(){}[]', true)
		doTest('([{}])', true)
		doTest('(}', false)
		doTest('[(])', false)
		doTest('({})[({})]', true)
		doTest('(})', false)
		doTest('(({{[[]]}}))', true)
		doTest('{}({})[]', true)
		doTest(')(}{][', false)
		doTest('())({}}{()][][', false)
		doTest('(((({{', false)
		doTest('}}]]))}])', false)
	})
})
