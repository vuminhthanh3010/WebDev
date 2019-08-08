// /**
//  * Tính số ms chênh lệch giữa 2 date object bất kì
//  */
// function diffMs(a, b) {

// }
// // viết ví dụ để kiểm tra
// // 

var moment = require('moment');

var ob = { y:2010, M:3, d:5, h:15, m:10, s:3, ms:123};
var time = [];
for (var values in ob) {
	time.push(ob[values]);
	
}
console.log(time);

var tim = moment([2010, 1, 14, 15, 25, 50, 125]);
console.log(tim.format("YYYY-MM-DD hh:mm:ss:ms")); //Định dạng ngày Năm-Tháng-Ngày
