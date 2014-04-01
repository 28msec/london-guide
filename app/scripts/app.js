'use strict';

angular.module('guideApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'ngenter'
])
.constant('API_URL', 'http://london-guide.28.io/v1')  /* XXX Adjust API URL in this line */
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix("!"); 

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/results/:phrase', {
		templateUrl: '/views/results.html',
		controller: 'ResultsCtrl',
		resolve : {
			phrase : function($rootScope, $route) {
			  $rootScope.$broadcast('phrase', $route.current.params.phrase);		
			}
		}		
	  })
	  .when('/all/:phrase', {
		templateUrl: '/views/all.html',
		controller: 'AllResultsCtrl'
	  })
      .when('/detail/:id', {
		templateUrl: '/views/detail.html',
		controller: 'DetailCtrl'
	  })
	  .when('/detail/:id/:part', {
		templateUrl: '/views/detail.html',
		controller: 'DetailCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  }]);
