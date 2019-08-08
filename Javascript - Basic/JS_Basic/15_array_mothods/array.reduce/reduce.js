

//array.reduce(): Biến đổi 1 mảng thành 1 giá trị

var number  =   [10,20,30,40];



var result  =   number.reduce(function(a,b){
    return a + b;
},0);

console.log(result);

//output: 100