/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
    if (score >= 0 && score <5) {
        console.log("C");
    }else if(score >= 5 && score <7){
        console.log("B");
    }else if(score >= 7 && score <= 10){
        console.log("A");
    }
}

console.log(grade(4)); // C
console.log(grade(5)); // B