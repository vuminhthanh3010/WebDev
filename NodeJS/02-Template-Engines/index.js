var express = require('express');
var app = express();
var port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (request, response) {
    response.render('index');
});
app.get("/users", function (request, response) {
    response.render('users/index', {
        users: [
            { name: "Thanh", age: 18 },
            { name: "Lam", age: 19 }
        ]
    });
});
app.listen(port, function () {
    console.log("Server running on port " + port);
});