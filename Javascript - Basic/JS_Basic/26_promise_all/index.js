
// Promise.all sẽ rút gọn lại ngắn gọn hơn so với promise 

var fs	=	require('promise-fs');

function readFilePromise(path) {
	return new Promise(function (resovle,reject) { //resovle:nội dung, reject: khi có lỗi
		fs.readFile(path,{encoding:'utf8'},function (error, data) {
				if (error) {
					reject(error);
				} else {
					resovle(data);
				}
			})
	})
}



Promise.all([	readFilePromise('./text1.txt'),
				readFilePromise('./text2.txt'),
				readFilePromise('./text3.txt')])    		
				//Tất cả nội dung của file lưu  trong mảng 
.then(function (values) {	//Value sẽ chứa và trả về nội dung
	console.log(values);
})
.catch(function (error) {
	console.log(error)
})