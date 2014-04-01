'use strict';

angular.module('guideApp')
  .controller('ResultsCtrl', function ($scope, $http, API_URL, $routeParams) {
      $scope.phrase = $routeParams.phrase;
      $scope.results = [];
      $scope.left = 12;
      $scope.loading = true;
      
      $scope.zoom = 18;
      
      $scope.classA = function(idx) {
    	if (idx==0) $scope.left = 12;
    	
    	var s = $scope.estlen(idx);
    	var ns = idx < 5 ? $scope.estlen(idx + 1) : 0;
    	
    	
        if ($scope.left - s == 1) s += 1;
        if ($scope.left - s >= 0 && $scope.left - ns >= 0 && $scope.left - s < ns && s < ns) s = ns;
        console.log("idx="+idx+" s="+s+ " ns="+ns+" left="+$scope.left);
        $scope.left -= s;
        if ($scope.left <= 0) $scope.left = 12;
		return "col-md-" + s + " result-"+s;
    	
		/*var cls = ["col-md-6","col-md-6","col-md-3","col-md-3","col-md-3"];
    	return cls[idx]; */
      };
      
      $scope.layout = function(data, type, idx) {
     	 if (type=="image" && idx==0 && !data.section) {    	
     		 return "col-md-5 pull-right";
     	 } 	 
     	 return "";
       };
      
      $scope.estlen = function(idx) {
    
      	var l = 0; 
      	var r = $scope.results[idx];
      	if (!r) return 0;
      	if (r.para) for (var i=0;i<r.para.length;i++) l+= r.para[i].html.length / 30;      	
      	if (r.extra) for (var i=0;i<r.extra.length;i++) l+=1 + r.extra[i].html.length / 30;
  		if (r.link) l+=1 + r.link.length;
  		if (r.table) l+=16;
  		if (r.unknown) l+=20;
  		if (r.section) l+=2 + r.section.length;
  		if (r.image) l+=r.image.length * 5;  		
  		var s = (l > 14) ? 6 : 3;
  		console.log("idx="+idx+" l="+l+" s="+s);
  		return s;
      };
      
     
      $scope.load = function() {
    	  $scope.loading = true;
    	 $http({
  			method: 'GET', 
  			url: API_URL + '/_queries/public/query.jq',
  			params: {   				
  				"q": $scope.phrase,
  				"limit" : 5
  			}
  		}).success(function(data, status, headers, config) {
			if (status == 200 && data) {
			  $scope.results = data;
			  $scope.result1 = data[0];
			  $scope.result2 = data.length > 1 ? data[1] : {};
			  $scope.result3 = data.length > 2 ? data[2] : {};
			  $scope.result4 = data.length > 3 ? data[3] : {};
			  $scope.result5 = data.length > 4 ? data[4] : {};
			  $scope.loading = false;
			  
			  //$scope.result2.extra = null;
			  //$scope.result2.link = null;
			  //$scope.result2.table = null;
			  //$scope.result2.section = null;
			  //$scope.result2.image = null;
			  $scope.result2.map = null;
			  
			  if ($scope.result3.para) $scope.result3.extra = null;
			  $scope.result3.link = null;
			  //$scope.result3.table = null;
			  //$scope.result3.section = null;
			  $scope.result3.image = null;
			  $scope.result3.map = null;
			  
			  if ($scope.result4.para) $scope.result4.extra = null;
			  $scope.result4.link = null;
			  $scope.result4.table = null;
			  $scope.result4.section = null;
			  $scope.result4.image = null;
			  $scope.result4.map = null;
			  
			  if ($scope.result5.para) $scope.result5.extra = null;
			  $scope.result5.link = null;
			  $scope.result5.table = null;
			  $scope.result5.section = null;
			  $scope.result5.image = null;
			  $scope.result5.map = null;
			  
			  console.log(data);
			};
  		});    	  
      };
      console.log("LOAD");
      $scope.load();
       
  });

angular.module('guideApp')
.controller('AllResultsCtrl', function ($scope, $http, API_URL, $routeParams) {
    $scope.phrase = $routeParams.phrase;
    $scope.results = [];
    $scope.loading = true;
    
    $scope.load = function() {
    	$scope.loading = true;
  	 $http({
			method: 'GET', 
			url: API_URL + '/_queries/public/query.jq',
			params: {   				
				"q": $scope.phrase,
				"limit" : 20
			}
		}).success(function(data, status, headers, config) {
			if (status == 200 && data) {
			  $scope.results = data;
			  $scope.loading = false;
			};
		});    	  
    };
    console.log("LOAD");
    $scope.load();
     
});
