/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    var result = arr.map(function(x) {
        switch (x) {
            case 'a':
                return x = 1;
                break;
            case 'A':
                return x = 1;
                break;
            case 'b':
                return x = 2;
                break;
            case 'B':
                return x = 2;
                break;
            default:
                return x = 0;
                break;
        }
        
    });
    console.log(result);


}

var show = transform(['F', 'b', 'a', 'B', 'A']);
console.log(show);
// [1, 2, 1, 2, 0]