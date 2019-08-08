
//array.find(): Trả về phần tử đầu tiên thỏa mãn điều kiện lọc

var number  =   [3,4,5,6,7,8,9];

var result  =   number.find(function(item){
        return item > 5;
});



console.log(result);

//output: 6 (Số đầu tiên lớn hơn 5 trong mảng )