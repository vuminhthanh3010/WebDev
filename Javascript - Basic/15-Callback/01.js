/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

var intro = function sayHello() {
  console.log('I love Coders.Tokyo');
}


var show = function showNumbers(){
    for(var i = 0;i<=10;i++){
        console.log(i);
    }
}

function countAndDo(callback1,callback2) {

    callback1();
    callback2();
}


countAndDo(intro,show)