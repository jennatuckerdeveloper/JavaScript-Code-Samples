class Book {
	constructor(title, author, year) {
		this.title = title
		this.author = author
		this.year = year
		this.price = 'PRICE NOT SET'
	}
	get info() {
		return `${this.title} by ${this.author} published ${this.year}`
	}

	get price() {
		return this._price
	}

	set price(newPrice) {
		this._price = newPrice
	}
}

const book1 = new Book('Spinning Silver', 'Naomi Novik', 2019)
console.log(book1.info)

class GraphicNovel extends Book {
	constructor(title, author, illustrator, year) {
		super(title, author, year)
		this.illustrator = illustrator
	}
	get info() {
		return `${this.title} written by ${this.author} illustrated by ${this.illustrator} published ${this.year}`
	}
}

const myComic = new GraphicNovel('Persepolis', 'name1', 'name2', 2010)
console.log(myComic)
console.log(myComic.info)
myComic.price = 20
console.log(myComic)
