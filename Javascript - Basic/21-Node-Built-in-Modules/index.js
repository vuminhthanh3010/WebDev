
var fs = require('fs');
var path = require('path');

// Đọc file text từ máy tính

var readFile    =   fs.readFileSync('./01.txt',{encoding:'utf8'});
console.log(readFile);

// Ghi vào file trong máy

fs.writeFileSync('./02.txt','Coder.Tokyo');

// Tìm đuôi của một file nào đó 

var pathName = path.extname('./02.txt');
console.log(pathName); //output: .txt
