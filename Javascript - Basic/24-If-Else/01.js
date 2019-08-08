/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    var max = arr[0];
    for(var i = 0;i<arr.length;i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max([5,8,6,9,15,30]));
 // 9