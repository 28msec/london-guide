'use strict';

angular.module('guideApp')
  .controller('SearchCtrl', function ($scope, $location) {
      $scope.phrase = "";
      $scope.search = function() {
    	$location.path("/results/" + encodeURIComponent($scope.phrase));  
      };
      
      $scope.$on('phrase', function(event, phrase){
		$scope.phrase = phrase;
	  });
       
  });
