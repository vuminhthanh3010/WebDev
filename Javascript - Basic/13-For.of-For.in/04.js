function has(object, key) {
    // viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
    // Tham số:
    //	- object: object cần kiểm tra
    //	- key: key cần kiểm tra xem có tồn tại trong object không
    // Return:
    //	- true nếu có tồn tại
    //	- false nếu không tồn tại
    for (const key2 in object) {
        console.log(key2);
    }
    
  }

  var infors = {
    name: 'Thanh',
    age:    18,
    address: 'Ha Noi'
  };
  console.log(has(infors,'name'));
  