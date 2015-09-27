// back-end controller
var mongoose = require('mongoose');
var Customers = mongoose.model('customers');
module.exports = (function(){
	return {
		display_customers: function(req, res)
		{
			Customers.find({}, function(err, data)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(data);
				}
			})
		},
		create_customer: function(req, res)
			{
				var customer = new Customers(req.body);
				customer.save(function(err, data)
				{
					if(err)
					{
						console.log(err);
					}
					else
					{
						res.redirect("/show_customers");
					}
				})
			},
		remove_name: function(req, res)
			{
				console.log(req.params.id);
				var name_id = req.params.id.toLowerCase();
				Names.remove({_id: name_id}, function(err, data)
				{
					if(err)
					{
						console.log(err);
					}
					else
					{
						res.redirect('/show_names');
					}
				})
			}
	}
})()