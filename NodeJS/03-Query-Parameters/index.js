var express = require('express');
var app = express();
var port = 3000;

var users = [{name:"Thanh",age:23},{name:"Lam",age:23}]

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (request, response) {
    response.render('index');
});
app.get("/users", function (request, response) {
    response.render('users/index', {
        users: users
    });
});
app.get("/users/search", function (request, response) {
    var q = request.query.q;
    var filterQuery = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    response.render('users/index', {
        users: filterQuery
    });
});
app.listen(port, function () {
    console.log("Server running on port " + port);
});