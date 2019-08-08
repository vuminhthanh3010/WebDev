
var request = require('request');

request('https://google.com.vn',function(error,response,body) {
	console.log('Error: ',error);
	console.log('Body: ',body);
});