
var products    =   [
    {name:'IPhone 7',price:12,stock:10},
    {name:'Sansung S7',price:4,stock:5},
    {name:'SOny XZ',price:7,stock:2},
    {name:'HTC U12',price:15,stock:15},
    {name:'LG G7',price:17,stock:3},
    {name:'Xiaomi Mi8',price:8,stock:7}
];


var sortPriceProducts = products.sort(function(a,b){
    // a = 12, b = 4
    return a.price - b.price;
});
console.log(sortPriceProducts);

var sortStockProducts = products.sort(function(a,b){
    // a = 12, b = 4
    return b.stock - a.stock;
});
console.log(sortStockProducts);