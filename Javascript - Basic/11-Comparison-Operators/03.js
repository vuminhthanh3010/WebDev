var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.

//Sai vì so sánh 2 biến là so sánh số kí tự của 2 biến chứ không phải là so sánh giá trị của biến
//sửa lại

console.log(a.length > b.length);