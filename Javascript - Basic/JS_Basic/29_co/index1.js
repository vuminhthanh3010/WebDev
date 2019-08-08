var fs	=	require('fs');
var co 	=	require('co');

function readFilePromise(path) {
	return new Promise(function (resovle,reject) {
		fs.readFile(path, {encoding:'utf8'}, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resovle(data);
			}
		})
	})
}

co(function *() {
	var result	=	yield [
		readFilePromise('./text1.txt'),
		readFilePromise('./text2.txt'),
		readFilePromise('./text3.txt'),
	];
	return result;
})
	.then(function (values) {
		console.log(values);
		})
	.catch(function (error) {
		console.log(error)
	})
	