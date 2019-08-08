function middleArray(arr1,arr2){

arr1.filter(function(x) {
	arr2.filter(function(y) {
	if (x == y) {
	console.log(x,y);
	}
});
});

}
console.log(middleArray([1,2,3,4,5,6],[5,6,7,8,9]));