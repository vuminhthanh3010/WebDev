
//Gọi đến các modules
var fs = require('fs');
var readLineSync = require('readline-sync');

//Tạo mảng để lưu các object là thông tin sinh viên
var inforStudent = [];

//Hàm hiển thị thông tin sinh viên
function showAllStudent() {
    var readFileJSON = fs.readFileSync('./data.json',{encoding: 'utf8'}); //Đọc các object chứa thông tin sinh viên từ file JSON
    inforStudent = JSON.parse(readFileJSON); //Chuyển dữ liệu trong file từ string JSON sang object
    for(var student of inforStudent){ //Lặp qua mảng chứa các object để lấy dữ liệu mỗi thuộc tính của object
        console.log(student.name + ' - '+ student.age+' - '+student.address);
    }
}

//Hàm thêm sinh viên
function createNewStudent() {
    var name = readLineSync.question("* Name: ");
    var age = readLineSync.question("* Age: ");
    var address = readLineSync.question("* Address: ");
    var infor = { //Tạo 1 object để chứa thông tin các sinh viên
        name: name,
        age: parseInt(age),
        address: address
    }
    inforStudent.push(infor); //Đẩy object chứa thông tin sinh viên vào mảng

}

//Lưu và thoát
function saveAndExit() {
    var convertToJSON = JSON.stringify(inforStudent); //Chuyển từ object sang JSON string
    fs.writeFileSync('./data.json',convertToJSON,{encoding: 'utf8'}); //{encoding: 'utf8'}: ghì đè lên file JSON
}

function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save and Exit');
    var press = readLineSync.question("*** Press: ");
    switch (press) {
        case '1':
            showAllStudent();
            showMenu();
            break;
        case '2':
            createNewStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Incorrect selection. Please select again');
            break;
    }
}

showMenu();

