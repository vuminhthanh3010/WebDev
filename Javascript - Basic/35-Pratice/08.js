function first(array, n) {
  // viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
  // Tham số:
  //	- array: mảng gốc
  //	- n: số phần tử trả về

if (n<=0) {
	return [];
} else {
	var result = [];
	for (var i = 0; i < n; i++) {
		result.push(array.shift());
		}
		return result;
		
}

}

console.log(first([5,8,1,2,3,8,9,7],5));