const productsData = require('../exampleData/products.json')
const allProducts = productsData.products
// console.log(allProducts)


const productsExcludingBrand = (allProducts, excludedBrand) => {
	return allProducts.filter(
		(product) => product.brand.toLowerCase() !== excludedBrand.toLowerCase()
	)
}

// console.log(productsExcludingBrand(allProducts, 'Apple').length)

const productsNearPrice = (allProducts, productId) => {
	const priceRange = 200
	const refPrice = allProducts.find((product) => product.id === productId).price
	return allProducts.filter(
    (product) =>
			product.price <= refPrice + priceRange &&
			product.price >= refPrice - priceRange
	)
}

// console.log(productsNearPrice(allProducts, 1)) // $549 ==> $349 to $749 

const productsPerPriceRange = (allProducts) => {
	const ranges = new Array(20)
		.fill(null)
		.map((_, ind) => [ind * 100, ind * 100 + 99])
	let productsPerPriceRange = {}
	for (let [low, high] of ranges) {
		let rangeKey = `${low}-${high}}`
		let rangeProducts = allProducts.filter(
			(product) => product.price >= low && product.price <= high
		)
		productsPerPriceRange[rangeKey] = rangeProducts.length
	}
	return productsPerPriceRange
}

// console.log(productsPerPriceRange(allProducts))

const stockPerPriceRange = (allProducts) => {
	const ranges = new Array(20)
		.fill(null)
		.map((_, ind) => [ind * 100, ind * 100 + 99])
	let stockPerPriceRange = {}
	for (let [low, high] of ranges) {
		let rangeKey = `${low}-${high}}`
		let rangeProducts = allProducts.filter(
			(product) => product.price >= low && product.price <= high
		)
		stockPerPriceRange[rangeKey] = rangeProducts.reduce(
			(stock, prod) => (stock += prod.stock),
			0
		)
	}
	return stockPerPriceRange
}

// console.log(stockPerPriceRange(allProducts))