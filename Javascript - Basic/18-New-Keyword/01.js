/* 
  Tạo một đối tượng student có thông tin như sau:
  Tên: Herry,
  Giới tính: Nam,
  Tuổi: 18
  
  Viết hàm showInfo để in ra các thông tin của đối tượng đó.
*/

var student = {
    name:'Herry',
    sex: 'Nam',
    age: 18
}

function showInfo(obj) {
    console.log(obj.name,obj.sex,obj.age);
}

showInfo(student); // In ra tất cả thông tin của đối tượng