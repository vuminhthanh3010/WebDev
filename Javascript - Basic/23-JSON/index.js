
//1.Show all students
//2. Create a Student
//3. Save and Exit

var fs = require('fs');
var readLineSync = require('readline-sync');



var allStudents = [];

function showAllStudent(){
    var readFileJSON = fs.readFileSync("./data.json",{encoding:'utf8'});
    var allStudents = JSON.parse(readFileJSON);
    for (var student of allStudents) {
        console.log("Show All Students: ");
        console.log(student.name + " - "+student.age +" - "+student.address);
    }
}

function createStudent(){
    var name = readLineSync.question("---Name: ");
    var age = readLineSync.question("---Age: ");
    var address = readLineSync.question("---Address: ");

    var student = {
        name: name,
        age: parseInt(age),
        address: address
    }
    allStudents.push(student);


}

function saveAndExit(){

    var convertToJSON = JSON.stringify(allStudents);
    fs.writeFileSync('./data.json',convertToJSON,{encoding: 'utf8'});
}

function showMenu(){
console.log("1. Show all Students");
console.log("2. Create a Student");
console.log("3. Save and Exit");

var choose = readLineSync.question("***Choose.... ");
    switch (choose) {
        case "1":
            showAllStudent();
            showMenu();
            break;
        case "2":
            createStudent();
            showMenu();
            break;
        case "3":
            saveAndExit();
            break;
        default:
            console.log("Try it....");
            showMenu();
            break;
    }
}
showMenu();