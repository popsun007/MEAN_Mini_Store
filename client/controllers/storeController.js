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
					$scope.customers = customers;
				});
			$scope.newCustomer={};
		}
	$scope.removeCustomer = function(person)
		{
			customerFactory.removeCustomer(person);
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