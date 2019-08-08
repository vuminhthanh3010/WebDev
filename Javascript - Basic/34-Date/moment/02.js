/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
  var endDay = fromDate.getDate();
  var toDay = toDate.getDate();
  return toDay - endDay + " Day";
}

var start = new Date('2018/05/17');
var end = new Date('2018/05/19');

console.log(diff(start, end));

