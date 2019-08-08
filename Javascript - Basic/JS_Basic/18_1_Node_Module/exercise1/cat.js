function Cat(){
    this.stomach = [];
}
Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.status();
}

module.exports = Cat;