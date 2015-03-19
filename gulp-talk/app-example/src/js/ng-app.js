var app = angular.module('cp-app', ['ngMaterial', 'ui.router', 'ngResource']);

app.config(['$stateProvider', '$urlRouterProvider', "$httpProvider",  
            function($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "partials/home.html",
	      controller: "HomeController"
	    })

	    .state('vendor-info', {
	      url: "/vendor-info",
	      templateUrl: "partials/vendor-info.html",
	      controller: "VendorInfoController"
	    })

	    .state('reports', {
	      url: "/reports",
	      templateUrl: "partials/reports.html",
	      controller: "HomeController"
	    })

	    .state('coming-soon', {
	      url: "/coming-soon",
	      templateUrl: "partials/coming-soon.html",
	      controller: "HomeController"
	    })
	    
	  
	  ;
	
}]);