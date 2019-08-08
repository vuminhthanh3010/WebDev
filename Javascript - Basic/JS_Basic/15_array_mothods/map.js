
//array.map(): Biến đổi mảng array thành mảng khác

var number  =   [1,2,3,4,5];

var result  =   number.map(function(item){ //Item như 1 biến lặp, lặp hết các phần tử trong mảng
        return item*10;
});

console.log(result);

//output: number  =   [10,20,30,40,50];