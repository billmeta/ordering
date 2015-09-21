/*
Angular Controller for the Product View
*/
'use strict';

// - Create the controller in our module
// - $scope will be the scope object created by angular when it puts the view into the shell page
//   and associates this controller with it (the scope will be for that view)
// - IMPORTANT: after this initial call of the controller 'constructor', the controller is NOT used -
//   it adds properties (model data, functions) to the scope object.  ONLY those properties are used -
//   the view references them via angular directives, we register events (e.g. via '$on') and specify
//   a function on the scope object to be called, etc.  

var app = angular.module('ordering-app');

// - The anonymous javascript function for the controller is called when angular
//   creates it.  There are NO other functions called on the controller - the rest
//   of the function calls from the view are to functions added to the scope object
//   (which is what the controller does in here)
// - This function is known as the 'Controller constructor'. 
// - We add this controller to our app's angularJS module by calling the module's controller() method
app.controller('ProductController', ['$scope','$rootScope', '$log','ProductService', function ($scope, $rootScope, $log, ProductService) {

	$log.log("In ProductController");

	// - The view uses only the scope object - the model is set on the scope.
	// - Add each of our angular model objects to the scope object
	$scope.products=[]; // javascript List, array
	$scope.productName=""; // String

	// - 'getProducts' is another property that we add to our scope model object (which is a javascript
	//   object).  It's a 'controller' method in that it handles gui event handling
	// - Again, the ONLY time the controller function is called is when it's created for the view -
	//   all other function calls from the view's directives (or from the controller setting event
	//   receiving via $on) are function calls on the scope object!  There are NO function calls to
	//   our angularJS controller after this call.  This call is really a 'controller constructor'.
	// - The following is a controller method.  
	$scope.getProducts= function(){

		// - $log calls a service factory function that returns an object; the object returned
		//   has a property, 'log', that is assigned to a function.   The end result is that
		//   the following is calling the 'log' function on the RETURNED object from the $log
		//   function call ($log is the service factory function).
		$log.log("In getProducts function of scope object.");

		// - $scope.productName will hold the value of whatever the user typed into the text field
		//   b/c we bound productName to the html/DOM element via ng-model directive in the view
		// - ProductService calls a service factory function which ultimately returns the results
		//   from the ajax call to the server.  Initially, it immediately returns without any data
		//   and, when the underneath ajax call returns, it is populated.  We then have angular's automatic
		//   mechanism of updating the view when the model changes (and then re-rendering the view)
		// - Best practice is to not put 'non controller' code in this controller function.  We should call a service,
		//   have it do the work to get the data, and then the 'controller method' ($scope.getProducts) is
		//   responsible for setting the returned data to a model object (which, if it's in the view, will cause
		//   the view to be re-rendered)
		// - TO DO: See if we need to pass in a callback for the promise (and under what circumstances we'd need to)
		$scope.products = ProductService.getProducts($scope.productName);
	};
}]);