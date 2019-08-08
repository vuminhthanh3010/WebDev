/* 
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

function lengthObj(obj) {
    var result = [];
    for(var key in obj){
        result.push(key);
    }
    console.log(result.length);
    
    
}

var student = {
  name: "Jerry", 
  age: 14,
  role: "student",
  address: 'Ha Noi'
}

lengthObj(student); // length: 3