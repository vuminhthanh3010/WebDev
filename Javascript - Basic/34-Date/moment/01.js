/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

/*
    0 => chủ nhật
    1 => thứ 2
    2 => thú 3
    3 => thứ 4
    4 => thứ 5
    5 => thứ 6
    6 => thứ 7
*/
function isWeekend(dateString) {
	var checkDay = new Date(dateString);
	var result =  checkDay.getDay();
	if (result == 0 || result == 6) {
		return true;
	} else {
		return false;
	}
}

console.log(isWeekend('2019/01/14'));
console.log(isWeekend('2019/01/13'));
console.log(isWeekend('2019/01/12'));

