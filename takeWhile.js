/*

Here's another staple for the functional programmer. 
You have a sequence of values and some predicate for those values. 
You want to get the longest prefix of elements such that the predicate is true for each element. 
We'll call this the takeWhile function. It accepts two arguments. 
The first is the sequence of values, and the second is the predicate function. 
The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}

var seq = [2,4,6,8,1,2,5,4,3,2];

takeWhile(seq, isEven) // -> [2,4,6,8]
Your task is to implement the takeWhile function.

If you've got a span function lying around, this is a one-liner! 
Also, if you liked this problem, you'll surely love the dropWhile function.

Note:  
The difference from filter is that once a case fails, the rest of the list drops.
Any following cases that would pass are excluded from the result.  

*/

const takeWhile = (seq, cb) => {
	const firstFailure = seq.findIndex((n) => !cb(n))
	const isFailure = firstFailure === -1
	return isFailure ? seq : seq.slice(0, firstFailure)
}

module.exports = { takeWhile }
