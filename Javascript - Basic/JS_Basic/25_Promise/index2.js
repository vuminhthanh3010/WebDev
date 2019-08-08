var fs	= require('fs');

function readFile(path) {
	return new Promise(function (resovle,reject) {
		fs.readFile(path,{encoding:'utf8'}, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resovle(data);
			}
		})
	})
}

readFile('./text_1.txt')
.then(function (data) {
	console.log(data)
})
.catch(function (err) {
	console.log(err)
})