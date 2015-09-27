var mongoose = require('mongoose');
var Orders = mongoose.model('orders');
module.exports = (function(){
	return {
		display_orders: function(req, res)
			{
				Orders.find({}, function(err, data)
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
		add_order: function(req, res)
			{
				order = new Orders(req.body);
				order.save(function(err, data)
				{
					if(err)
					{
						console.log(err);
					}
					else
					{
						res.redirect("/get_orders");
					}
				})
			}
	}
})()