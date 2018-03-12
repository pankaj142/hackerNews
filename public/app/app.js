var app = angular.module("myApp",['ngRoute', 'angularUtils.directives.dirPagination']);

app.config(function($routeProvider,$locationProvider){
	console.log("HEy its working")

	$routeProvider
   	 	.when("/",{
   	 		templateUrl : "app/views/pages/search.html"
   	 	})
   	 	.when("/portfolio",{
   	 		templateUrl : "app/views/pages/portfolio.html"
   	 	})
   	 	
   	 	.otherwise({templateUrl : 'app/views/pages/error.html'});

       //to remove # from route    
       $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
       });  

});

app.controller("searchController",function($scope, $http){
	$http.get("https://rawgit.com/pankaj142/hackerNews/master/hackernews.html")
         .then(function(response){
          $scope.articles=response.data;
          var firstItem=$scope.articles.shift();
          console.log("articles",$scope.articles)
          console.log("firstItem",firstItem)
         });


     $scope.cancelSearch= function(){
     	$scope.searchKeyword="";
     	console.log("hhhh",$scope.searchKeyword)
     }    

     
   $scope.sortOrder="num_points";     
   $scope.setAscendingOrder = function(){
   	$scope.sortOrder = "num_points";
   }      
   $scope.setDescendingOrder = function(){
   	$scope.sortOrder = "-num_points";
   } 

   $scope.setDateAscendingOrder= function(){
   	$scope.sortOrder="created_at"
   }
   $scope.setDateDescendingOrder= function(){
   	$scope.sortOrder="-created_at"
   }

});

//filter for getting website from url
app.filter("getWebsite",function(){
	return function(url){
		var arr =url.split("/");
	 return arr[0]+ "//" + arr[2];
	};
})

//filter for getting date
app.filter('getDateTime', function() {
	    return function(x) {
	    	return x.split(" ")[0] + "  at  "+x.split(" ")[1] ;
	    };
});


app.controller("portfolioCntrl", function($scope, $http){
	//get request for project details
	$http.get("/getprojects")
	   .then(function(response){
	   		console.log("res", response.data)
	   		$scope.projectsData=response.data;
	});
	
});
