/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {

    var result = arr.reduce(function(sum,a){
        return sum + a;
    },0);
    console.log(Math.round(result/3));
  
    
    
    
  }
  
  average([8, 8 , 6.75]) // 8