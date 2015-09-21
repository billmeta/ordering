// - routing for our top-level, shell page
// - We could put this code into app.js but we've separated it into separate JS files to make it cleaner

// - Javascript immediate execution - define function and immediately execute it
// - Use angular's ui.router module's $urlRouterProvider / $stateProvider to 
// # App Routes
(function() {
	'use strict';

	// - Get our angularJS module that we created in app.js and have our function, 'routes', called during the config phase
	// - angularJS runs all module.config() functions first (of all modules) and then all module.run() functions
	angular
		.module('ordering-app')
		.config(routes);

	// - This is for the shell page as opposed to any routing for the views like 'product.html' that, in turn, have
	//   their own views that can be injected into their ui-view DIV.  Doing this is referred to as 'nested views' 
	// - 'ui router' is the newer routing service from angularJS; it supports 'nested views' and 'multiple views'.
	// - Nested views just mean that a view (a template/html page - e.g. product.html) can, in turn, have views
	//   injected into them (as opposed to ONLY being able to get angularJS to construct controllers and inject
	//   the view into the shell page - at <div ui-view></div>))
	// - Multiple views mean that you can have more than one <div ui-view></div> in a page; prior to 'ui router',
	//   you could only have one <div ng-view></div> (note the 'ng-view' instead of 'ui-view') and ONLY in the shell
	//   page.  With multiple views, you have to provide a name for each ui-view to identify them.
	// - Prior to 'ui router', views could only be injected into the shell page; to get nested views (view + separate controller),
	//   we had to do a manual include and manual association of the controller to the view in, for ex., product.html.  
	//   For example, prior to 'ui router', we'd see the following in product.html (product.html is a view that is 
	//   injected into the shell page & we want the  concept of a 'nested view' in product.html called 'my_nested_view.html'):
	//     <div ng-include='my_nested_view.html' ng-controller='controller_for_nested_view'></div>

	// - When angularJS injects a view into ui-view DIV, it creates the controller, creates an instance of the
	//   scope object (made available via calling the $scope service passed into the controller), requests the view
	//   from the web server, renders the view, and injects it into the ui-view DIV.
	// - The scope object is an existing, defined angularJS Javascript object with existing methods and properties 
	//   (well, everything is a property in a Javascript object).   We then add additional properties (model objects and 
	//   gui control functions - functions that are called in response to events like clicking on a button) to 
	//   the scope object in our angularJS controller.  Scope is the object that has the actual controller methods 
	//   (meaning, event handlers for  gui objects) and the model or data that is a) set by these methods (e.g. 
	//   via the method calling a service object to get data) and b) used to render the view (which occurs automatically 
	//   by angularJS whenever a model object on our scope changes and appears in the view).
	// - The view or 'template', product.html, is downloaded by angular from the web server (http GET request)
	//   only when we route to it (you can see this if you open the browser debugger & click on network tab)
	
	// - Important: use 'resolve' to provide the controller with content or data that is custom to this state change.
	//   One good use is that if any of the dependencies are promises then they will be resolved and converted to a
	//   value BEFORE the controller is instantiated (therefore, you can use 'resolve' to wait for the promise)
	function routes($urlRouterProvider, $stateProvider) {
		
		// - Look at the shell page, index.html.  When user clicks on a link, the state is set via ui-sref.  That
		//   state is then processed by $stateProvider which retrieves the view, e.g. product.html, calls the
		//   controller constructor function that we specified for the view in the following (e.g. ProductController) passing
		//   it the $scope service that will return the scope object it created at the 'scope' of the view (the scope
		//   of the view is the beginning of the product.html which defines a scope that is not the whole page -- the
		//   whole page is the shell page and now with the view injected into it)
		$stateProvider
			.state('product', {
				url: '/product',
				templateUrl: 'product/product.html',
				controller: 'ProductController'
			})
			.state('customer', {
				url: '/customer',
				templateUrl: 'customer/customer.html',
				controller: 'CustomerController'
			})
		;
	}
})();