var customersController = require('./../server/controllers/customersController.js');
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
		// app.get('/remove/:id', function(req, res)
		// {
		// 	nameController.remove_name(req, res);
		// })
	}