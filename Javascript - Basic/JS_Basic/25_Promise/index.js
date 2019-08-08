
var fs	= require('promise-fs');

function onData(text) {
	console.log(text)
}

function onError(error) {
	console.log(error)
}

function realFile(path) {
	return fs.readFile(path,{encoding:'utf8'});
}


	realFile('./text_1.txt') //Đọc file text_1.txt 
	.then(onData)
		.then(function (){ //Đọc file text_2.txt 
			return fs.readFile('./text_2.txt',{encoding:'utf8'});
		}) 
		.then(onData)
		
			.then(function (){ //Đọc file text_3.txt 
				return fs.readFile('./text_3.txt',{encoding:'utf8'});
			}) 
			.then(onData)
	.catch(onError)