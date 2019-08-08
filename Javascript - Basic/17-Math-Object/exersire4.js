/*
  Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100
*/

function random() {
    var result1 = Math.random();
    var result2 = Math.ceil(result1*100);
    return result2;
    
}

console.log(random()); // The number between 1 and 100