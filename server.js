// express and app
var express = require('express');
var app = express();

// path and bodyParser
var path = require('path');
var bodyParser = require('body-parser');

// params over URL

app.use(express.static(path.join(__dirname, "./client")));
// view folder and view engine
app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);


// server listen and port number
app.listen(2010, function(){
	console.log('Customers and orders is on port 2010');
})