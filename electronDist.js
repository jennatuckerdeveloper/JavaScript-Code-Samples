/*
You are a khmmadkhm scientist and you decided to play with electron 
distribution among atom's shells. You know that basic idea of electron 
distribution is that electrons should fill a shell untill it's holding 
the maximum number of electrons.

Rules:

Maximum number of electrons in a shell is distributed with a rule of 2n^2 (n being position of a shell).
For example, maximum number of electrons in 3rd shield is 2*3^2 = 18.
Electrons should fill the lowest level shell first.
If the electrons have completely filled the lowest level shell, the other unoccupied 
electrons will fill the higher level shell and so on.

Ex.:    atomicNumber(1); should return [1]
        atomicNumber(10); should return [2, 8]
        atomicNumber(11); should return [2, 8, 1]
        atomicNumber(47); should return [2, 8, 18, 19]

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(atomicNumber(1),[1]);
Test.assertDeepEquals(atomicNumber(10),[2, 8]);
Test.assertDeepEquals(atomicNumber(11),[2, 8, 1]);
Test.assertDeepEquals(atomicNumber(22),[2, 8, 12]);
Test.assertDeepEquals(atomicNumber(23),[2, 8, 13]);
Test.assertDeepEquals(atomicNumber(47),[2, 8, 18, 19]);
Test.assertDeepEquals(atomicNumber(50),[2, 8, 18, 22]);
Test.assertDeepEquals(atomicNumber(52),[2, 8, 18, 24]);
Test.assertDeepEquals(atomicNumber(60),[2, 8, 18, 32]);
Test.assertDeepEquals(atomicNumber(61),[2, 8, 18, 32, 1]);
  });
});


*/

const atomicNumber = (n) => {
	const shells = []
	let electrons = n
	while (electrons > 0) {
		const shellMax = 2 * (shells.length + 1) ** 2
		const shell = electrons > shellMax ? shellMax : electrons
		shells.push(shell)
		electrons -= shell
	}
	return shells
}

console.log(atomicNumber(1)) // should return [1]
console.log(atomicNumber(10)) // should return [2, 8]
console.log(atomicNumber(11)) // should return [2, 8, 1]
console.log(atomicNumber(47)) // should return [2, 8, 18, 19]
