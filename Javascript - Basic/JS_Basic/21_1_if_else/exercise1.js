/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {

var max = arr[0];
for(var i = 0;i<arr.length;i++){
    if(max < arr[i]) {
    max = arr[i];
    }
}
    console.log(max); 
}

max([5, 6, 9,10,15,20]); // 9