/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

getCount("abracadabra") --> 5

*/

const countVowels = (str) => str.match(/[aeiou]/gi)?.length || 0

console.log(countVowels('abracadabra'))
console.log(countVowels('bbbddddcccc'))
