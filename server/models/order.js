var mongoose = require('mongoose');
var ordersSchema = mongoose.Schema({
	cus_name: String,
	product: String,
	quantity: Number,
	date: Date
});
ordersSchema.path('cus_name').required(true, "Name can not be empty!");
ordersSchema.path('product').required(true, "Product can not be empty!");
ordersSchema.path('quantity').required(true, "Give some number here!");

mongoose.model('orders', ordersSchema);
