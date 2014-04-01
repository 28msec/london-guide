'use strict';

angular.module('guideApp')
  .controller('DetailCtrl', function ($scope, $http, API_URL, $routeParams) {
      $scope.id = $routeParams.id;
      $scope.part = $routeParams.part;
      $scope.data = {};
      $scope.zoom = 18;
  
            
      $scope.layout = function(data, type, idx) {
    	 
    	 if (type=="image" && idx==0) {    	
    		 return "col-md-4 pull-right";
    	 } else if (type=="image" && idx==1) {    	
    		 return "col-md-4 pull-left";
    	 } else if (type=="image") {
    		 return "clearfix";
    	 }
    	 if (type=="section" && !data.para && !data.image) return "";
    	 if (type=="section" && $scope.data.image) return "col-md-4 pull-left";
    	 if (type=="section") return "col-md-4 pull-right";
    	 
    	 if (type=="map" && $scope.data.section && $scope.data.image) return "col-md-4 pull-right";
    	 if (type=="map" && $scope.data.section) return "col-md-4 pull-left";
    	 if (type=="map" && $scope.data.image) return "col-md-4 pull-left";
    	 if (type=="map") return "col-md-4 pull-right";
    	 
    	 if (type=="table") return "col-md-6 pull-left";    	 
    	 return "";
      };
  	/*var cls = ["col-md-6","col-md-6","col-md-3","col-md-3","col-md-3"];
  	return cls[idx]; */
      
      $scope.load = function() {
    	 $http({
  			method: 'GET', 
  			url: API_URL + '/_queries/public/detail.jq',
  			params: {   				
  				"id": $scope.id,
  				"part" : $scope.part
  			}
  		}).success(function(data, status, headers, config) {
			if (status == 200 && data) {
			  $scope.data = data;
			  $scope.results = [ data ];
			  console.log(data);
			};
  		});    	  
      };
      console.log("LOAD");
      $scope.load();
       
  });
