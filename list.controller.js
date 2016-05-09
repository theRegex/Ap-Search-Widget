apSearch.controller('list', ['$scope','apCall', function($scope,apCall){
	$scope.msg = "Hello Welcome to List View";
	$scope.dataResults = null
	$scope.props = null;
	
	 apCall.processRequestedLocation().
		then(function(res){
			//sucess
			$scope.dataResults = angular.fromJson(res)
			$scope.props = $scope.dataResults.properties;
			console.log($scope.dataResults + ": Response result")
		}, function(e){
			//error
			console.log("Widget caught an error: " + e)
		});


}])