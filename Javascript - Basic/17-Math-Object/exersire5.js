/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không? 
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {
    if(a+b>c || b+c>a || a+c>b){
        if ((c*c == a*a+b*b ) || (b*b==a*a+c*c) || (a*a == b*b+c*c)) {
            console.log('Yes');
            
        }else{
        console.log('No');
        }
    }
}

rightTriangle(3, 4, 5); // "Yes"

rightTriangle(6, 8, 10); // "Yes"