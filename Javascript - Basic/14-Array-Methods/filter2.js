
// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    var result = [];
    arr.filter(function(x){
        if (x %2 == 0) {
            result.push(x);
        }
    })
    return result;
}

console.log(evensOnly([1,2,3,4,5,6,7,8,9,10]));
