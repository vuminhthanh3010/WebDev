var math = {
    add: function(a, b) {
      return a + b;
    },
    sum: function (array) {
        var tong = 0;
        array.map(function(x){
            return tong += x;
        })
        return tong;
    }
  };
  
  module.exports = math;