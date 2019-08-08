/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
for (const key in apartment) {
    var value1 = apartment['bedroom'];
    console.log(key);
    
    for (const key in value1) {
        var value2 = apartment.bedroom['bed'];
        console.log(key);
        
    }
    for (const key in value2) {
        console.log(key);
        
    }
    
    

}  