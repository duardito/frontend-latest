
appModule.controller('navUrlController',['baseUrl', function($scope, $http, SelectedId) {
	
	 $scope.ShowId = function(obj) {
		SelectedId.dataObj = obj.target.getAttribute("id");
    }
	
    $http.get('baseUrl'+'page').
        success(function(data) {
            $scope.urls=data;
            // this callback will be called asynchronously
            // when the response is available
        }).
        error(function(data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
}]);


appModule.controller('empty' ,['baseUrl', function($scope, $http,$resource, $location, SelectedId) {

    var lastParam = SelectedId.dataObj;
    var value = $resource('baseUrl'+'page/:name');
    $scope.empty =value.get({
        name: lastParam
    }, function(resp) {
      console.log('las resp es :' + resp);
     }, function(err) {

     });
    return $scope.empty;
}]);
