
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolved,reject){
        fs.readFile(path,{encoding:'utf8'},function(err,data) {
            if (err) {
                reject(error);
            }else{
                resolved(data);
            }
        });
    });
}

Promise.all([
    readFilePromise("1.txt"),
    readFilePromise("2.txt")
]).then(function(values){
    console.log(values);
    })
.catch(function(error){
    console.log(error);
})
