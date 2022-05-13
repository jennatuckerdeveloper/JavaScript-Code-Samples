/*
Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// First solution
// const solution = (arr) => {
// 	if (!arr) return []
// 	const mathematicalAscending = (a, b) => {
// 		if (a < b) return -1
// 		if (a > b) return 1
// 		return 0
// 	}
// 	return arr.sort(mathematicalAscending)
// }

// Sort only needs <, =, or > 0, not 1, -1, 0.
const solution = (arr) => {
	return arr ? arr.sort((a, b) => a - b) : []
}

console.log(solution([1, 2, 10, 50, 5])) // should return [1,2,5,10,50]
console.log(solution(null)) // should return []
