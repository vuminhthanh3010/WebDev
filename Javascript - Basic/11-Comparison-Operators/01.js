var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// Sai vì nếu so sánh 2 mảng với nhau ta phải so sánh độ dài của 2 mảng
//Sửa lại
console.log(a.length === b.length);