myApp.factory("customerFactory", function($http)
				{
				// var customers = [
				// 	{name: "John", created_at: "2013-08-02"},
				// 	{name: "Frank", created_at: "2012-11-2"},
				// 	{name: "Erika", created_at: "2015-02-13"},
				// 	{name: "Steven", created_at: "2014-07-31"}
				// ];
				// var orders = [
				// 	{name: "Frank", product: "Shoes", quantity: 2},
				// 	{name: "Erika", product: "Bike", quantity: 1},
				// 	{name: "Steven", product: "Bath towel", quantity: 3}
				// ]
				var factory = {};
				// factory.customers = customers;
				// factory.orders = orders;
				factory.getCustomers = function (callback)
					{
						$http.get('/show_customers').success(function(output)
						{
							callback(output);
						})
					}
				factory.addCustomer = function(newCustomer, callback)
					{
						// var unique = true;
						// for(var person in customers)
						// {
						// 	if(customers[person].name == newCustomer.name)
						// 	{
						// 		unique = false;
						// 	}
						// }
						// if(unique)
						// {
						// 	var today = new Date().toISOString().slice(0, 10);
						// 	newCustomer.created_at = today;
						// 	customers.push(newCustomer);
						// }
						// else
						// {
						// 	alert("Name exist!");
						// }
						$http.post('/add_customer', newCustomer).success(function(output)
						{
							callback(output);
						})
					}
				factory.removeCustomer = function(person)
					{
						customers.splice(customers.indexOf(person), 1);
					}
				factory.removeOrder = function(order)
					{
						orders.splice(orders.indexOf(order), 1);
					}
				factory.addOrder = function(newOrder)
					{
						console.log(newOrder);
						orders.push(newOrder);
					}
				return factory;
				});