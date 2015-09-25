// express and app
var express = require('express');
var app = express();

// path and bodyParser
var path = require('path');
var bodyParser = require('body-parser');

// params over URL

app.use(express.static(path.join(__dirname, "./clint")));
// view folder and view engine
app.use(bodyParser.json());



// server listen and port number
app.listen(2010, function(){
	console.log('Mini Store is on port 2010');
})