
var Mouse = require('./mouse');

var Cat = require('./cat');

var micky = new Mouse('Micky','red');
var jerry  =new Mouse('Jerry','green');

console.log(micky);
console.log(jerry);

var Tom = new Cat();

Tom.eat(micky);
Tom.eat(jerry);
console.log(Tom);