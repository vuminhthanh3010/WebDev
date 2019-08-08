var express = require('express');
var app = express();
var port = 3000;

var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')
 db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({users: [] })
    .write()


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded


app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (request, response) {
    response.render('index');
});
app.get("/users", function (request, response) {
    response.render('users/index', {
        users: db.get('users').value()
    });
});
app.get("/users/create", function (req, res) {
    res.render("./users/create");
})
app.post("/users/create", function (req, res) {
    db.get('users').push(req.body).write();
    res.redirect("/users");
})
app.get("/users/search", function (request, response) {
    var q = request.query.q;
    var filterQuery = db.get('users').value().filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    response.render('users/index', {
        users: filterQuery
    });
});
app.listen(port, function () {
    console.log("Server running on port " + port);
});