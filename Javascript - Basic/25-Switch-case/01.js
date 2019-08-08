/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
for (var i = 0;i<arr.length;i++) {

    switch (arr[i]) {
        case 'A':
            arr[i] = 1;
            break;
        case 'a':
        arr[i] = 1;
            break;
        case 'b':
        arr[i] = 2;
            break;
        case 'B':
        arr[i] = 2;
            break;
            
        default:
        arr[i] = 0;
            break;
    }
}
console.log(arr);

}

transform(['A', 'b', 'a', 'B', 'd','x','a','B']);
// [1, 2, 1, 2, 0]