
//Requests: In ra nội dung HTML từ một url

var requests = require('requests');

requests("https:/wwww.google.com.vn",function(error,reponse,body){
    console.log("Error: ",error); //In ra lỗi nếu có
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    
});