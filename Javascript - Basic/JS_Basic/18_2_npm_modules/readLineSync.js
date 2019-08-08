
var readLineSync = require('readline-sync');

var languages = [];

var language = readLineSync.question('Which Language ?');
    languages.push(language);   
    console.log(languages);