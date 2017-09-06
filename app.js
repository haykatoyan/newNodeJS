var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/index", function(req, res) {
	res.render("index");
});

app.get("/contact", function(req, res) {
	res.render("contact");
});

app.get("/profile/:id", function(req, res) {
	var data = {age: 20, job: "programmer", hobbies: ["eating", "fighting", "fishing"], profileOf: req.params.id};
	res.render("profile", {data: data});
});

app.listen(2000);