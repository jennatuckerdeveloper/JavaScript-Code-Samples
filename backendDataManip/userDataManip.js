const userData = require('../exampleData/user-data.json')

// console.log(userData)

// List of names in alphabetical
// List of names in alpha with user ids
// companies represented (only one time)
// company info (catchphrase and bs by search term)

const userNames = (allUserData) => {
	return allUserData.map((user) => user.name)
}

// console.log(userNames(userData))

const userNamesVerbose = (allUserData) => {
	return allUserData
		.map((user) => {
			return { id: user.id, name: user.name }
		})
		.sort((userA, userB) => {
			if (userA.name < userB.name) return -1
			if (userA.name > userB.name) return 1
			if (userA.name === userB.name) return 0
		})
}

// console.log(userNamesVerbose(userData))

/* .sort() method pattern:  
  return 0 if equal 
  return -1 if a first 
  return 1 if b first       
*/

const companiesRepresented = (allUserData) => {
	return allUserData.reduce((companies, user) => {
		let company = user.company.name
		if (!companies.includes(company)) companies.push(company)
		return companies
	}, [])
}

// console.log(companiesRepresented(userData))

const companySearch = (allUserData, term) => {
	return allUserData.reduce((res, user) => {
		let found =
			user.company.name.includes(term) ||
			user.company.catchPhrase.includes(term) ||
			user.company.bs.includes(term)
		return found
			? Object.assign(res, { [user.company.name]: user.company })
			: res
	}, {})
}

// console.log(companySearch(userData, 'applications'))
