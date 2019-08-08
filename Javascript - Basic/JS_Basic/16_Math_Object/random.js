
//Math.random(): Trả về  1 số ngẫu nhiên trong khoảng [0,1]

function random(){
    var ran = Math.random();

    if(ran == 0 ) return 1;
    if(ran >0 && ran < 0.2) return 2;
    if(ran >= 0.2 &&ran < 0.4) return 3;
    if(ran >= 0.4 && ran < 0.6) return 4;
    if(ran >= 0.6 && ran < 0.8) return 5;
    if(ran >= 0.8) return 6;
    
  }
  console.log(random());
  
