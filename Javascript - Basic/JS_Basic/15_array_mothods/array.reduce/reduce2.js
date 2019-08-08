function shoppingSpree(arr) {
		
	var money	= arr.reduce(function (sum,item) {
			return sum+= item.price;
		},0);
		console.log(money);
}

var wishlist = [
	{ title: "Tesla Model S", price: 90000 },
	{ title: "4 carat diamond ring", price: 45000 },
	{ title: "Fancy hacky Sack", price: 5 },
	{ title: "Gold fidgit spinner", price: 2000 },
	{ title: "A second Tesla Model S", price: 90000 }
];
shoppingSpree(wishlist) // 227005