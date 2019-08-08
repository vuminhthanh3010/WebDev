
//readline-sync: Tạo những câu hỏi tương tác

var readLineSync = require('readline-sync');

var student = {};
var name        = readLineSync.question('What your name? ');
var age         = readLineSync.question('How old are you? ');
var address     = readLineSync.question('Where do you live? ');

    student.name    =   name,
    student.age     =   parseInt(age), //Chuyển về dạng number
    student.address =   address,

console.log(student);