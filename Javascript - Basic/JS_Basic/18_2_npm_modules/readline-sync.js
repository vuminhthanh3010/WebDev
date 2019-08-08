var readLineSync = require('readline-sync');

var infors = {};
var name = readLineSync.question('What your name? ');
var age = readLineSync.question('How old are you? ');
var address = readLineSync.question('Where do you live? ');

infors.name = name;
infors.age = parseInt(age);
infors.address = address;

console.log(infors);
