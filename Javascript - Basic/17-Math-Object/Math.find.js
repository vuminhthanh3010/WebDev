
//Math.find: Trả về phần tử đầu tiên trong mảng thoả mãn điều kiện

function maxNumbers(array){
    array.find(function(x){
        return x > 5;
    })
   
}
console.log(maxNumbers([1,2,3,4,5,6,7,8])); //output: 6