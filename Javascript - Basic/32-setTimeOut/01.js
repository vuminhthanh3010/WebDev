
//setTimeOut(function,timer)
//Function: Hàm
//timer: Thời gian chạy tính theo ms giây, 1s = 1000 ms
//clearTimeOut: Xoá bỏ thời gian hẹn trước

console.log('Start');

var timer = setTimeout(function(){
  console.log('Finish');
}, 2000);
console.log("Done");

// 1. Chạy start
// 2. Bắt đầu đếm 2000ms = 2s
// 3. chạy Done
// 4. Sau khi đếm xong 2000ms mới chạy Finish

clearTimeout(timer);
//Xoá bỏ thời gian hẹn trước, cho nên không in ra Finish