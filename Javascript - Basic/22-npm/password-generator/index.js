

// generate-password: Tạo mật khẩu ngẫu nhiên

var generatePassword = require('generate-password');

// Tạo một password ngẫu nhiên
var password = generatePassword.generate({
    length:10,          //Độ dài mật khẩu là 10
    numbers: true,      //Mật khẩu có chứa các số
    symbols: true,      //Mật khẩu có chứa các kí tự đặc biệt
    uppercase: true     //Chứa chữ in hoa
});
console.log(password);

//Tạo nhiều password ngẫu nhiên cùng 1 lúc
var multiPassword = generatePassword.generateMultiple(5, {
    length:10,          //Độ dài mật khẩu là 10
    numbers: true,      //Mật khẩu có chứa các số
    symbols: true,      //Mật khẩu có chứa các kí tự đặc biệt
    uppercase: true     //Chứa chữ in hoa
});
console.log(multiPassword); //Trả về mảng chứa các giá trị password