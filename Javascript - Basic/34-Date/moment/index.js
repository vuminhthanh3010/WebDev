
var moment = require('moment');

var time = moment('2019-01-13');

console.log(time.format("YYYY-MM-DD")); //Định dạng ngày Năm-Tháng-Ngày
console.log(time.fromNow());            // Tính thời gian từ 1 thời điểm nào đến đến hiện tại