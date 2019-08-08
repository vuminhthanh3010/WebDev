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

var result	=	co.wrap(function* (file) {
	
	var value = yield file.map(function (item) {
		return readFilePromise(item);
	})
	return value;
	
})

result(['text1.txt','text2.txt','text3.txt'])
	.then(function (values) {
		console.log(values);
		})
	.catch(function (error) {
		console.log(error)
	})
	