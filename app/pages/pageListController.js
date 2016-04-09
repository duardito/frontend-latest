	appModule.controller('pageListController',function($scope, $http) {
		$http.get('http://keemono.com:8888/keemono/page').
				success(function(data) {
				$scope.pagelist=data;
					// this callback will be called asynchronously
					// when the response is available
				}).
				error(function(data) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

});
