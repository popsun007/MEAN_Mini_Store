myApp.controller("customersController", function($scope, customerFactory)
{
	$scope.customers = customerFactory.getCustomers(function(showCustomers)
		{
			$scope.customers = showCustomers;
		});
	$scope.orders = customerFactory.getOrders(function(displayOrders)
		{
			$scope.orders = displayOrders;
		})
	$scope.addCustomer = function()
		{
			// console.log($scope.newCustomer);
			var customer_repack = { 
							name: $scope.newCustomer.name,
							created_at: new Date() 
						 	 };
			customerFactory.addCustomer(customer_repack, function(customers)
				{
					if(customers.error == undefined)
					{
						$scope.customers = customers;
					}
					else
					{
						alert(customers.error);
					}
				});
			$scope.newCustomer={};
		}
	$scope.removeCustomer = function(id)
		{
			customerFactory.removeCustomer(id, function(remain_customer)
				{
					$scope.customers = remain_customer;
				});
		}				

	$scope.addOrder = function()
		{
			orderRepack = {
				cus_name: $scope.newOrder.name,
				product: $scope.newOrder.product,
				quantity: $scope.newOrder.quantity,
				date: Date()
			}
			customerFactory.addOrder(orderRepack, function(orders)
				{
					$scope.orders = orders;
				});
		}
})