
//array.filter: Lọc lấy các giá trị thoải mãn điểu kiện nào đó

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.



function fiveAndGreaterOnly(arr) {
    var array = [];
    arr.filter(function(x){
        if (x >=6) {
            array.push(x);
        }
    })
    return array;
}

var result = fiveAndGreaterOnly([2,3,5,6,8,9,10]);
console.log(result);
