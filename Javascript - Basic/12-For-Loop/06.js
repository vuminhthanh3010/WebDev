function has(array, value) {
    // sử dụng vòng lặp for...of viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
    // Tham số:
    //	- array: mảng cần kiểm tra
    //	- value: giá trị cần kiểm tra xem có tồn tại trong array không
    // Return:
    //	- true nếu có tồn tại
    //	- false nếu không tồn tại

    // for(var i=0;i<array.length;i++){
    //    console.log(array[i]);
    // }
    
    for (const values of array) {
        console.log(values);
        
    }
    

  }
  var a = [1,2,3,4,5];
  console.log(has(a,4));