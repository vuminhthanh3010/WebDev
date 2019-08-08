
// var infos   =   {
//     name:'Tom',
//     stomark: [],
//     eat: function(mouse){
//         this.stomark.push(mouse);
//         return this;
//     }
// };
// var mouse1 = {name:'Jerry'};
// var mouse2  =   {name:'Cat'};
// infos.eat(mouse1).eat(mouse2);
// console.log(infos);

//output:
    // { name: 'Tom',
    //   stomark: [ { name: 'Jerry' }, { name: 'Cat' } ],
    //   eat: [Function] }

function infor(name){
    this.name = 'Tom';
    this.stomark= [{'name':name}];
}
var mouse1 = new infor("Jerry");
var mouse2 = new infor("Cat");
var mouse1 = new infor("Dog");
console.log(mouse1);
console.log(mouse2);
console.log(mouse3);