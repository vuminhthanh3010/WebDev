
//array.filter(): Lọc các phần tử trong mảng và trả về  mảng chứa các phần tử thỏa mãn điều kiện Lọc

var number  =   [2,3,4,5];

var result  =   number.filter(function(item){
    return item >= 3;
});

console.log(result);

//output: [ 3, 4, 5 ]
