'use strict';

var app = angular.module('ordering-app');

app.
	// - Use angularJS 'factory' function to create our service factory function that creates the singleton object
	// - Notice that we're adding it to our application module via calling the module's 'factory' method
	factory('ProductService', function(GetProductService, $log) {
	
		// - Create and return a javascript object with a single property, getProduct, set to an anonymous function
		// - Calling 'getProducts' function results in 'resource object'.query(...) function called.
		// - TO DO: see if you need to provide a callback for the promise
		return {
			
			getProducts: function(productName) {
				$log.log("In ProductService of object created by ProductService factory");

				// - Look at the debugger's Network tab to see if you see this request going through.
				// - GetEmployeeList calls our service factory function (defined below).  Inside that function,
				//   it calls $resource (another service factory function) which creates the 'resource object'.
				//   The 'resource object' has the method, 'query'.
				// - 'query' internally use angularJS's $http service which makes the http call to the web server.
				//   It returns immediately with empty results and 
				return GetEmployeeList.query({productName: productName}); // , callback, callback1);
			}
		} 
	}).
	// - GetProductService calls the anonymous service factory function that we set to it.  
	// - Its implementation calls angularJS $resource service factory function.  This creates a
	//   'resource object' (javascript object) that has defined methods on it (see 
	//   https://docs.angularjs.org/api/ngResource/service/$resource)
	//   an object and returns that object!  What object does it return?  It uses another service factory function
	//   by calling $resource which creates an object (we refer to it as the 'resource object') and that's returned.
	//   $resource is NOT returned!  It's a service factory function call that creates and returns an object!
	factory('GetProductService', function($resource, $log) {

		$log.log("Entered GetProductService service factory function");

		// - For debugging, mimic returning the 'resource object' that's created by the 
		//   call to $resource (the service factory function that creates the resource object)
		// - Note that we add a property, 'query', that's set to function
		
		/*
		return {
			query: function(obj) {
				$log.log("In fake object query method");

				return [ {
					"id" : "123",
					"name" : "legos",
					"price" : "$12.45",
					"customer" : {
						"id" : "456",
						"lastName" : "smith",
						"firstName" : "tim",
						"address" : "10 main street anywhere, nj 11111"
					}
					}, {
					"id" : "123",
					"name" : "legos",
					"price" : "$12.45",
					"customer" : {
						"id" : "456",
						"lastName" : "smith",
						"firstName" : "tim",
						"address" : "10 main street anywhere, nj 11111"
					}
				} ]
			}
		}
		*/

		// - No http call to server yet; $resource (an existing angularJS factory object) creates a 'resource object'
		//   and returns it.
		// - the context root, 'orderingapp', is automatically prefixed to the following (look in Network
		//   tab of the debugger); 'rest' is just a convention we're using to route on the server side
		// - When debugging, try the URL that you see from the debugger (Network tab) in the browser directly
		return $resource('rest/product/productName/:productName');
	});