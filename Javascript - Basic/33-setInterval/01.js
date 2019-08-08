//setInterval(function,timer): sau mỗi timer lại sẽ lặp đi lặp lại function
//Function: Hàm
//timer: Thời gian chạy tính theo ms giây, 1s = 1000 ms
//clearTimeOut: Xoá bỏ thời gian hẹn trước


var i = 0;

var countTime = setInterval(function(){
  ++i;
  console.log(i);
  if (i === 10) {
  	clearInterval(countTime); //Đếm khi i = 10 sẽ dừng lại
  }
}, 1000);