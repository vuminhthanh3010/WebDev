/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

var request = require('request');
request('https://coders.tokyo/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var i;
console.time("test for loop");
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("test for loop");

i = 0;
console.time("test while loop");
while (i < 1000000) {
  i++
}
console.timeEnd("test while loop"); 