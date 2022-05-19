/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// First, over-engineered version, because I was avoiding a switch statement
// const likes = (names) => {
// 	if (names.length > 3)
// 		names = names.slice(0, 2).concat([`${names.length - 2} others`])
// 	if (names.length >= 2)
// 		names = names
// 			.slice(0, names.length - 1)
// 			.concat(`and ${names[names.length - 1]}`)
// 	if (names.length > 2) names[0] = `${names[0]},`
// 	const ending = ` like${names.length <= 1 ? 's' : ''} this`
// 	return (names.join(' ') || 'no one') + ending
// }

/* 
Brilliant new way I learned from other people's solutions 
Use lengths as object keys and mapping to readable strings 
Then reference the correct one using Mat.min to say max length 4 or the length
I love this so much 
*/

const likes = (names) => {
	return {
		0: 'no one likes this',
		1: `${names[0]} likes this`,
		2: `${names[0]} and ${names[1]} like this`,
		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
		4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	}[Math.min(4, names.length)]
}

// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(['Jacob', 'Alex']))
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

module.exports = { likes }
