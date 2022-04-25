/*

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

*/

const findOdd = (nums) => {
	const count = {}
	for (num of nums) {
		count[num] ? (count[num] += 1) : (count[num] = 1)
	}
	for (key of Object.keys(count)) {
		if (count[key] % 2 !== 0) {
			return Number(key)
		}
	}
}

/* 
This is possible in a succinct, one line version with a bitwise or.  
This is so obscure, I would assume it's not good for the next developer
working with this code.  
But it reminds me of something Ben Eater would do, so I am noting it.

*/
const findOddBitwise = (xs) => xs.reduce((a, b) => a ^ b)

console.log(findOdd([1, 1, 1, 1, 1, 1, 15, 1, 1, 1, 1]))
