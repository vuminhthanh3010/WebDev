/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */

var request			=	require('request');
var fs				=	require('promise-fs');


function load(path) {
	return new Promise(function (resovle,reject) {
		 fs.readFile(path,{encoding:'utf8'}, function (data) {
				request(path,function (err,response,body) {
					if (err) {
						reject(err);
					} else {
						resovle(body);
					}
				})
			})
	})	
	
}

//load('https://jsonplaceholder.typicode.com/todos/3')
//.then(function(body) {
// console.log('Done', body);
// });

Promise.all([	load('https://jsonplaceholder.typicode.com/todos/1'),
				load('https://jsonplaceholder.typicode.com/todos/2'),
				load('https://jsonplaceholder.typicode.com/todos/3')	
])
.then(function (value) {
	console.log(value)
})