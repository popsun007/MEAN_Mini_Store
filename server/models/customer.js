var mongoose = require('mongoose');
var customers = new mongoose.Schema({
	name: String,
	created_at: Date
});
customers.path('name').required(true, "Customer name can not be empty!");

mongoose.model('customers', customers);