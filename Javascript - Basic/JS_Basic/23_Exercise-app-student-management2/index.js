
//Gọi đến các modules
var fs = require('fs');
var realLineSync = require('readline-sync');

//Tạo mảng để lưu các object là thông tin sinh viên và điểm
var students = [];

//Hàm hiển thị thông tin sinh viên
function showAllStudent(){
    var realFileJSON = fs.readFileSync('./data.json',{encoding:'utf8'}); //Đọc các object chứa thông tin sinh viên từ file JSON
    students = JSON.parse(realFileJSON); //Chuyển dữ liệu trong file từ string JSON sang object  
    for (var student of students) { //Lặp qua mảng chứa các object để lấy dữ liệu mỗi thuộc tính của object
        console.log(student.name+' - Math:'+student.math+' - Physical:'+student.physical+' - Chemistry:'+student.chemistry);
    }
}

//Hàm tìm điểm môn toán cao nhất
function mathMax() {
    var listMath = []; //Mảng chứa điểm môn toán của mỗi sinh viên
    for (var student of students) { //Lặp qua mảng chứa object là thông tin của sinh viên
        listMath.push(student.math); //Đẩy điểm môn toán vào mảng chứa điểm môn toán của các sinh viên
    }
    console.log('Điểm môn toán cao nhất: '+Math.max.apply(null,listMath)); //Lấy điểm cao nhất trong mảng chứa điểm môn toán
}

//Hàm tìm điểm môn lý cao nhất
function physicalMax() {
    var listPhysical = [];
    for (var student of students) {
        listPhysical.push(student.physical);
    }
    console.log('Điểm môn lý cao nhất: '+Math.max.apply(null,listPhysical));
}

//Hàm tìm điểm môn hóa cao nhất
function chemistryMax() {
    var listChemistry = [];
    for (var student of students) {
        listChemistry.push(student.chemistry);
    }
    console.log('Điểm môn hóa cao nhất: '+Math.max.apply(null,listChemistry));
}

//Hàm thêm sinh viên
function createNewStudent() {
    var name = realLineSync.question('* Name: ');
    var math = realLineSync.question('* Math: ');
    var physical = realLineSync.question('* Physical: ');
    var chemistry = realLineSync.question('* Chemistry: ');
    var infor = { //Tạo 1 object để chứa thông tin các sinh viên
        name: name,
        math: parseInt(math),
        physical: parseInt(physical), //ParseInt: chuyển điểm(number) sang dạy string để lát đẩy vào file JSON
        chemistry: parseInt(chemistry)
    };
    students.push(infor); //Đẩy object chứa thông tin sinh viên vào mảng 
}

//Lưu và thoát
function saveAndExit() {
    var convertToJSON = JSON.stringify(students); //Chuyển từ object sang JSON string
    fs.writeFileSync('./data.json',convertToJSON,{encoding:'utf8'}); //Ghi vào file JSON
}


function main(){
    console.log('1. Hiển thị tất cả thông tin về sinh viên ');
    console.log('2. Sinh viên có điểm môn Toán cao nhất ');
    console.log('3. Sinh viên có điểm môn Lý cao nhất ');
    console.log('4. Sinh viên có điểm môn Hóa cao nhất ');
    console.log('5. Thêm sinh viên ');
    console.log('6. Lưu và thoát ');

    var press = realLineSync.question("*** Press: ");
    switch (press) {
        case '1':
            showAllStudent();
            main();
            break;
        case '2':
            mathMax();
            main();
            break;
        case '3':
            physicalMax();
            main();
            break;
        case '4':
            chemistryMax();
            main();
            break; 
        case '5':
            createNewStudent();
            main();
            break;
        case '6':
            saveAndExit();
            break;

        default:
            console.log('Incorrect selection. Please select again');
            break;
    }
}
main();