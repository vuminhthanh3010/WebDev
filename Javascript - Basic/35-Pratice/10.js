function nearestTo100(a, b){
	var max1 = 100 - a;
	var max2 = 100 - b;
	if (max1 > max2) {
		return b;
	} else if(max1 < max2) {
		return a;
	} else if(max1 == max2 ) {
		return a,b;
	}

}

console.log(nearestTo100(88,88));