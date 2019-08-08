/* 
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
    var s = r*r*Math.PI;
    var c = r*2*Math.PI;
    console.log('Chuvi: ',Math.ceil(c,-2));
    console.log('Dientich: ',Math.ceil(s,-2));   

  
}

circleMachine(3);
// Chu vi: 18.85
// Diện tích: 28.27