
/* Cách 1
var fs = require('promise-fs');

fs.readFile("1.txt",{encoding:'utf8'})
    .then(function(data){
        console.log(data);
        
    })
    .catch(function(error){
        console.log(error);
    })
*/
/*Cách 2: Rút gọn

    var fs = require('promise-fs');
    function onDone(data){
        console.log(data);
    }
    function onError(error){
        console.log(onError);
    }
    function readFile(path){
        return fs.readFile(path,{encoding:'utf8'});
    }

    readFile("1.txt")
    .then(onDone)
    .catch(onError)
*/

/* Cách 3:
*/
var fs = require('fs');

function readFilePromise(path){
    return new Promise(function(Data,Error){
        fs.readFile(path,{encoding:'utf8'},function(err,data){
            if (err) {
                Error(err);
            }else{
                Data(data);
            }
        });
    });
}

    readFilePromise("2.txt")
    .then(function(text){
        console.log(text);
    })
    .catch(function(error) {
        console.log(error);
    })

