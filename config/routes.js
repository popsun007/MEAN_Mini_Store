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
		app.post('/remove_customer/:id', function(req, res)
		{
			customersController.delete_customer(req, res);
		})
	}