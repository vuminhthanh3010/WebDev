/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
	x = x+1;
	var result = setInterval(function(){
	  x--;
	  console.log(x);
	  if (x == 0) {
	  	clearInterval(result);
	  	console.log('Happy new year');
	  } 
	}, 1000);
}

countDown(5);