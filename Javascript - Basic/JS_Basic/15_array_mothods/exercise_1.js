
var orders  =   [

    {name:'Iphone 7',amount:3,price:12000000,category:'Iphone'},
    {name:'Iphone 8',amount:2,price:18000000,category:'Iphone'},
    {name:'Samsung S7',amount:5,price:4000000,category:'Samsung'},
    {name:'Samsung S8',amount:2,price:15000000,category:'Samsung'},
    {name:'Sony XZ',amount:3,price:7000000,category:'Sony'},
    {name:'Sony Z5',amount:5,price:2000000,category:'Sony'},
    {name:'Iphone X',amount:5,price:20000000,category:'Iphone'},
    {name:'Samsung S9',amount:3,price:22000000,category:'Samsung'}
];



// Lọc ra những sản phẩm cùng 1 danh mục
//Ví dụ: Iphone, Samsung hay Sony
  
    var result = orders.filter(function(item){
            return item.category === "Iphone";
    }); 
console.log(result);

//Tính tổng số tiền mà khách hàng phải trả
    var result2 = orders.reduce(function(sum,item){
    return sum += item.amount * item.price;  
    },0); 
console.log(result2);

//Lọc ra những đơn hàng có tổng tiền > 40000000
    var result3 = orders.filter(function(item){
        return item.amount * item.price > 40000000;
    
    }); 
    console.log(result3);
