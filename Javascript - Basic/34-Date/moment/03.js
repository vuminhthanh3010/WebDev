/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */
function subtractDays(date, n) {
	var date = new Date(date);
	var popDate = date.getDate();
	var popMonth = date.getMonth();
	var popYear = date.getFullYear();
	console.log(popYear+"-"+(popMonth+1)+"-"+(popDate-n));
}

subtractDays("2019-01-14", 5);