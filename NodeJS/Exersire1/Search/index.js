var express = require('express');
var app = express();
var port = 3000;

var users = [
    {name:"Thanh",age:23,address:"Ha Noi"},
    {name:"Lam",age:23,address:"Bac Ninh"},
    {name:"Nam",age:23,address:"Quang Ninh"}
]
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
    res.render("index");
});
app.get("/users", function (req, res) {
    res.render("./users/index", {
        users:users
    });
})
app.get("/users/search", function (req, res) {
    var q = req.query.q;
    var filter = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render("./users/index", {
        users: filter
    });
});
app.listen(port, function (req, res) {
    console.log("Server is running on port 3000 ....");
});