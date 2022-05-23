const data = {
	lists: {
		'id-1': {
			title: 'groceries',
			items: {
				1: 'cheese',
				2: 'bread'
			}
		},
		'id-2': {
			title: 'chores',
			items: {
				1: 'feed cat',
				2: 'do dishes'
			}
		}
	}
}

/*
Return this succinct form of the data:
{
  groceries: [ 'cheese', 'bread' ],
  chores: [ 'feed cat', 'do dishes' ]
}
*/

const succinct = (data) => {
	const lists = data.lists
	const listInfo = Object.values(lists)
	return listInfo.reduce((succinct, list) => {
		return Object.assign(succinct, { [list.title]: Object.values(list.items) })
	}, {})
}

console.log(succinct(data))


