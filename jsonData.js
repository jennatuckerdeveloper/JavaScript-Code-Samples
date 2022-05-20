const data = require('./exampleData.json')

const findMembersByPower = (team, power) => {
	return team.reduce((res, member) => {
		if (member.powers.includes(power)) res.push(member.name)
		return res
	}, [])
}

console.log(findMembersByPower(data.members, 'Turning tiny'))
console.log(findMembersByPower(data.members, 'Superhuman strength'))

const findMembersSharedPowers = (team) => {
	return team[0].powers.reduce((shared, power) => {
		const powersLists = team.map((member) => member.powers)
		if (powersLists.every((list) => list.includes(power))) shared.push(power)
		return shared
	}, [])
}
console.log(findMembersSharedPowers(data.members))
