
var fs = require('fs');
var co = require('co');

function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'},function(err,data){
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}



/* Cách 1:
co(function*(){
    var text1 = yield readFilePromise("1.txt");
    var text2 = yield readFilePromise("2.txt");
    console.log(text1,text2);
})
*/

/* Cách 2:
co(function*(){
var values =  yield[
    readFilePromise("1.txt"),
    readFilePromise("2.txt")
   ]
   return values;
}).then(function(values){
    console.log(values);
    
})
*/

/* Cách 3: Dùng co.wrap

var readFile = co.wrap(function*(files){
    var values = yield files.map(function(file){
        return readFilePromise(file);
    })
    return values
})
readFile(["1.txt","2.txt"])
.then(function(values){
    console.log(values);
})
*/