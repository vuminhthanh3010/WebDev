function findMaxDiff(arr) {
	/*
  	- Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  */
 
 var x1 = Math.abs(arr[0] - arr[1]);

 var array = [];
  for (var i = 0; i < arr.length; i++) {


		var x2 = Math.abs(arr[i] - arr[i+1]);
		
		if (x2 > x1) {
			console.log(arr[i],arr[i+1]);
		}

  }


}
console.log(findMaxDiff([1,5,0,6,15]));