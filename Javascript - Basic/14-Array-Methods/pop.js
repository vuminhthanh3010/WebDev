
//Xoá phần tử cuối cùng của mảng

function removeEnd(arr, n) {
    /*
        Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
    */
   for(var i = 0;i<n;i++){
       arr.pop();
   }
   console.log(arr);
   
    }

var array = [1,2,3,4,5];
console.log(removeEnd(array,1));