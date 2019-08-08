/*
1. Show all student
2. Create a student
3. Save and Exit
*/

 var fs = require('fs');
 var readLineSync = require('readline-sync');

console.log("1. Show all student");
console.log("2. Create a student");
console.log("3. Save and exit");

var press = readLineSync.question('*** Press: ');

switch (press) {
    case '1':
        var showAllStudent = fs.readFileSync('./data.json',{encoding:'utf8'});
        var show = JSON.parse(showAllStudent);
        console.log('All Student: ');
        console.log(show); 
    break;        
    case '2':
        var newStudent = {};
        var name = readLineSync.question('* Name: ');
        var age = readLineSync.question('* Age: ');
        var address = readLineSync.question('* Address: ');
            newStudent.name = name;
            newStudent.age = age;
            newStudent.address = address;
        console.log('You have add one student: ');
        console.log(newStudent);
        var convertToJSON = JSON.stringify(newStudent);
        fs.writeFileSync('./data.json',convertToJSON);
        break;

    case '3':
        var convertToJSON = JSON.stringify(newStudent);
        console.log(convertToJSON);
    break;
}
