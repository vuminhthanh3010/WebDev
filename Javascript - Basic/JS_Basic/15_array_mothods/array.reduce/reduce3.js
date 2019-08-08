var infos = [
	{name:'Apple',amount:2,price:20},
	{name:'Tomato',amount:3,price:30},
	{name:'Banana',amount:4,price:40}

];




var info = infos.reduce(function (sum,item) {

	return sum += item.amount*item.price;
	
},0);
console.log(info);