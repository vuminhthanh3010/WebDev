function sum(numbers) {
    // Giả thiết: numbers là một array các số nguyên
    // Yêu cầu: 
    //	- trả về tổng các số, dùng vòng lặp for ... of
    //  - nếu array trống trả về 0
    if (numbers.length == 0) {
        console.log('0');
    }else{
        var tong = 0;
        for (const number of numbers) {
            tong = tong + number;
        }
        return tong;
    }
  }

var array = [];
console.log(sum(array));
