"use strict";

var PORT = 3000;

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res,next) {
	
 res.redirect('/index.html'); 
});

app.listen(PORT);

console.log("MyProject Server is Listening on port " + PORT);