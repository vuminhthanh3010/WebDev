
var math = {
    
    sum: function(array){
    var result = array.reduce(function(sumArray,number){
        return sumArray + number;
    },0);
    return result;
    }
};
module.exports = math;

