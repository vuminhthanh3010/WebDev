/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {

    var tong = 0;
  arr.map(function(x){
    tong += x
  })
  var result = tong/arr.length;
  console.log(Math.round(result));
  
}

average([8, 8 , 6.75]) // 8