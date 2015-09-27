myApp.controller("customersController", function($scope, customerFactory)
{
	$scope.customers = customerFactory.getCustomers(function(showCustomers)
		{
			$scope.customers = showCustomers;
		});
	// $scope.orders = customerFactory.orders;
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
	$scope.removeOrder = function(order)
		{
			customerFactory.removeOrder(order);
		}
	$scope.addOrder = function()
		{
			customerFactory.addOrder($scope.newOrder);
		}
})