
var fs = require('fs');

function readFilePromise (path) {
	return new Promise(function(resolve,reject) {
		fs.readFile(path, {encoding:'utf8'}, function(err,data){
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}



async function run () {
	var text1	= await	readFilePromise('1.txt');
	var text2	= await	readFilePromise('2.txt');
	return [text1,text2];
}
run().then(function(values){
	console.log(values);
}).catch(function (error) {
	console.log(error)
})