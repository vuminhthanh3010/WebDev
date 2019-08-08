var generator = require('generate-password');
 
var password = generator.generate({
    length: 10,     //Độ dài mật khẩu
    numbers: false,   //Mật khẩu không chứa số 
    uppercase: false, //Mật khẩu không chứa kí tự in hoa 
    symbols: true     //Mật khẩu chứa kí tự đặc biệt 
});
 
// 'uEyMTw32v9'
console.log(password);