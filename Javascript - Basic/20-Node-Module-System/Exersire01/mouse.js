
function Mouse(color,weight){
    this.color = color;
    this.weight = weight;
    this.status = true;
}
Mouse.prototype.die = function () {
    this.status = false;   
}

module.exports = Mouse;