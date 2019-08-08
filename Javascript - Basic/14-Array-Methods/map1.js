
//array.map(): Biến đổi các phần tử trong 1 mảng thành các phần tử khác

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 * 
 */
// Khai báo tripple function ở đây
var callback = function tripple(number){
    console.log(number*3);
}

var numbers = [10, 5, 8];
// Gợi ý: numbers.map... (tự viết tiếp)

function trippleNumber(array,callback){
    var result = [];
    array.map(function(x){
        var pushArray = callback(x);
        result.push(pushArray);
    })
    
}
console.log(trippleNumber(numbers,callback));