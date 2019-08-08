/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
var result = 1;
for (const value of arr) {
    result = result*value;
}
return result;
}

console.log(multiply([2, 3, 4,5])); // expect: 24