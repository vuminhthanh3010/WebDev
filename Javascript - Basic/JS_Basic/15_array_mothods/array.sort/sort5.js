// Sort the objects in the array by age
function byAge(arr){
var sortAge = arr.sort(function(a,b){
    return a.age - b.age;
});
console.log(sortAge);
}

byAge([
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]);