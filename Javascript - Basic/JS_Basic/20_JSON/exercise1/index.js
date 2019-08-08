/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */
var fs = require('fs');

//1. Sử dụng module fs để đọc file `data.json`
var read = fs.readFileSync('./data.json',{encoding:'utf8'});

//2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 var convert = JSON.parse(read);

//3. Log property `name` từ object ở bước 2


 //4.Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn

    convert.members = []; 
    var str = {};
    str.name = 'Thanh';
    str.age = 21;
    str.address = 'HN';
    convert.members.push(str);

    console.log(convert);

//5. Ghi lại dữ liệu vào file data.json

    var convertToJSON = JSON.stringify(convert);
    console.log(convertToJSON);

    
    fs.writeFileSync('./data.json',convertToJSON);
