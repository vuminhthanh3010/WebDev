

var Mouse = require('./mouse');
var Cat = require('./cat');

var micky = new Mouse('red',10);
var jerry = new Mouse('blue',20);
console.log(micky);
console.log(jerry);

var tom = new Cat();
tom.eat(micky);
tom.eat(jerry);
console.log(tom);