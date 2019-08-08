/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

/*falsy
false
0 (zero)
'' or "" (empty string)
null
undefined
NaN
*/

/*truthy
'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)
*/

function isTruthy(x) {
        if (((typeof x === 'boolean') == true) || ((typeof x === 'string') == true) || ((typeof x === 'object') == true) ){
           return true;
        }else{
            return false;
        }
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([1]));
console.log(isTruthy(1));
