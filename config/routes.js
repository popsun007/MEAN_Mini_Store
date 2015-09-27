var customersController = require('./../server/controllers/customersController.js');
var ordersController = require('./../server/controllers/ordersController.js');
module.exports = function(app)
	{
		app.post('/add_customer', function(req, res)
		{
			customersController.create_customer(req, res);
		});
		app.get('/show_customers', function(req, res)
		{
			customersController.display_customers(req, res);
		});
		app.post('/remove_customer/:id', function(req, res)
		{
			customersController.delete_customer(req, res);
		});
		app.get('/get_orders', function(req, res)
		{
			ordersController.display_orders(req, res);
		});
		app.post('/create_order', function(req, res)
		{
			ordersController.add_order(req, res);
		})
	}