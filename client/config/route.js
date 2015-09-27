var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/customer.html'
    })
    .when('/partial2',{
        templateUrl: 'partials/order.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});