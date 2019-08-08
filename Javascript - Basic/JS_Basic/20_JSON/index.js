
//Convert JSON to JSON String
var infors = {name:'Thanh',age:21,address:'Ha Noi'};
var infor = JSON.stringify(infors);
console.log(infor);
//output: {"name":"Thanh","age":21,"address":"Ha Noi"}


// Convert JSON String to Object
var infors = '{"name":"Thanh","age":21,"address":"Ha Noi"}';
var infor = JSON.parse(infors);
console.log(infor.name);
//output: Thanh
