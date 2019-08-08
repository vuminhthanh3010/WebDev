/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */
/*
Tất cả các giá trị sau đây luôn là falsy:

    false (kiểu boolean)
    0 (kiểu số)
    '' hay "" (chuỗi rỗng)
    null
    undefined
    NaN (chẳng hạn kết quả của 0/0)

Những giá trị sau đây là truthy:

    "any string" (chuỗi bất kỳ bao gồm "0", "false")
    [1, 2] (mảng bất kỳ bao gồm mảng rỗng [])
    {a:1, b:2} (đối tượng bất kỳ bao gồm đối tượng rỗng {})
    function () {} (hàm bất kỳ)
*/

function isTruthy(x) {
    var truthy = typeof x;
 if(truthy == 'number' || truthy == 'object' || truthy == 'function' ||  truthy == true){
     return true;
 }else{
     return false;
 }
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([]));
console.log(isTruthy(1));

