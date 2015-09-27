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
				capitalize_name = req.body.name.split(' ');
				for(var i in capitalize_name)
				{
					capitalize_name[i] = capitalize_name[i].charAt(0).toUpperCase() + capitalize_name[i].slice(1);
				}
				req.body.name = capitalize_name.join(' ');// format name before insert(capitalize)
				Customers.find({name: req.body.name}, function(err, data)
				{
					if(err)
					{
						console.log(err);
					}
					else
					{
						if(data.length == 0) // data > 0 means the name already in our database!
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
						}
						else
						{
							res.json({error: "Customer already exist!"});
						}
					}
				});

				
			},
		delete_customer: function(req, res)
			{
				var customer_id = req.params.id;
				Customers.remove({_id: customer_id}, function(err, data)
				{
					if(err)
					{
						console.log(err);
					}
					else
					{
						res.redirect('/show_customers');
					}
				})
			}
	}
})()