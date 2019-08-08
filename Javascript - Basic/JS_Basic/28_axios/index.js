/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var fs		=	require('promise-fs');
var axios	=	require('axios');
var url		=	'https://jsonplaceholder.typicode.com';



function realFile(url) {
	return new Promise(function (resovle,reject) {
		axios.get(url)
		.then(function (data) {
			console.log(data)
			console.log('-----------------------------------------------')
		})
		.catch(function (error) {
			console.log(error)
			})
	})
}

Promise.all([	realFile('https://jsonplaceholder.typicode.com/todos/1'),
				realFile('https://jsonplaceholder.typicode.com/todos/2'),
				realFile('https://jsonplaceholder.typicode.com/todos/3')
])
.then(function (value) {
	console.log(value)
})	
.catch(function (error) {
	console.log(error)
})