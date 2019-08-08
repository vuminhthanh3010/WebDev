
//splice sẽ thay thế một hoặc một số phần tử của mảng bằng một hoặc một số phần tử khác
//lưu ý rằng số phần tử bị bỏ đi có thể ít hơn số phần tử được thêm vào và ngược lại.

// Cấu trúc: Splice(begin, remove,add)
    //begin: Vị trí bắt đầu
    //remove: Xoá bỏ n phần từ bắt đầu từ vị trí begin
    //add: Thêm n phần tử 

var array = ["Samsung","Apple","Sony","HTC","LG","Oppo"];
//Phần tử bị xoá 
console.log(array.splice(2,2,"Xiaomi","Bphone")); //output:[ 'Sony', 'HTC' ]
 
//Tất cả phần tử còn lại của mảng
 console.log(array); //output:["Samsung,"Apple","Xiaomi","Bphone","LG","Oppo"] 