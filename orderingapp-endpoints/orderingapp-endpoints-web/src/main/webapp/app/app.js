// - Create the angularJS module for our application
// - We could add other code for our angularJS module (e.g. adding controllers, routes, etc.) into this file but
//   we are separating it into other javascript files to make it cleaner

// - Javascript immediate execution - define function and immediately execute it
// - create the angular module for our app
// - we add all the angular javascript to our module
(function() {
	'use strict';

	// - the list (javascript - brackets) is the list of modules we're injecting into our module
	//   angular.module('emptrack-app', [ui.router']).  We're using services (e.g. $urlRouterProvider, $stateProvider)
	//   that are defined in the existing angularjs module, ui.router; therefore, we have to tell angularJS to give
	//   our module this one.
	angular
		.module('ordering-app', [
			'ui.router'
		]);
})();