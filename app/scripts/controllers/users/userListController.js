	appModule.controller('userListController',['baseUrl',function($scope, $http) {
	$scope.submit = function() {
		$http.get('baseUrl'+'user/save',
				{"username": $scope.username, "password": $scope.password, "email" : $scope.email, "role" :$scope.role.name}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
	};
}]);
