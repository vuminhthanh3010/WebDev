
var fs = require('fs');

var result = fs.readFileSync('./config.txt',{encoding: 'utf8'}); //read file config.txt

console.log(result);

fs.writeFileSync('./config2.txt','I am a Thanh'); // Write file config2.txt