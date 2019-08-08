/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.
*/

function Student(diemToan, diemLy, diemHoa) {
    this.diemToan   =   diemToan;
    this.diemLy     =   diemLy;
    this.diemHoa    =   diemHoa;
}
Student.prototype.average = function () {
    var result = (this.diemToan+this.diemLy+this.diemHoa)/3;
    console.log(Math.round(result));
}

var student1 = new Student(7, 7, 7);
var student2 = new Student(8, 9, 10);

student1.average(); // 7
student2.average(); // 9