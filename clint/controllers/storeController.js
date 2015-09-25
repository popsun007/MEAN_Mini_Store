myApp.controller("customersController", function($scope, customerFactory)
{
	$scope.customers = customerFactory.customers;
	$scope.orders = customerFactory.orders;
	$scope.addCustomer = function()
		{
			console.log($scope.newCustomer);
			customerFactory.addCustomer($scope.newCustomer);
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