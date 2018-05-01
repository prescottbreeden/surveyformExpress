var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser")
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./public")));
app.use(session({secret: 'lakjdf;lkjadfs'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/process', function(req, res) {
    var user = {user: req.body};
    console.log(user)
    res.render('user', user);
})

app.listen(8000, function() {
    console.log("Power Overwhelming...")
})