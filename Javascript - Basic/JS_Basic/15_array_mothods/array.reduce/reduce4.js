

var name    =   ['Thanh','Lam','Nam'];


//use reduce
    var result1 = name.reduce(function(char,item){
        return char+'>' + '<' +item;
    });
    console.log('<' +result1 + '>' );

//use map,join
    var result2 = name.map(function(item){
        return '<' + item ;
    });
    console.log(result2.join('>')+ '>') ;


//output: <Thanh><Lam><Nam>