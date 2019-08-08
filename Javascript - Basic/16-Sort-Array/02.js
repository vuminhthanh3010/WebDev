/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
 */
function sortNumbers(arr) {
    arr.sort(function(a,b){
        //a = 5, b = 1 
        return b-a;
    })
    console.log(arr);
    }
    

sortNumbers([5, 1, 3, 2]); // [5, 3, 2, 1]