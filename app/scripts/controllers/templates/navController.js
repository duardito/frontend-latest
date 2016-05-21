appModule.controller('navUrlController',['$scope', '$http', 'SelectedId','globalVars', function($scope, $http, SelectedId, globalVars) {
	 $scope.ShowId = function(obj) {
		SelectedId.dataObj = obj.target.getAttribute("id");
    }

    $http.get(globalVars.keemonoUrl+'page'). success(function(data) {
            $scope.urls=data;
            // this callback will be called asynchronously
            // when the response is available
        }).
        error(function(data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
}]);


appModule.controller('empty' ,['$scope', '$http', '$route', '$location', 'SelectedId','globalVars', function($scope, $http,$resource, $location, SelectedId, globalVars) {

    var lastParam = SelectedId.dataObj;
    var value = $resource(globalVars.keemonoUrl+'page/:name');
    $scope.empty =value.get({
        name: lastParam
    }, function(resp) {
      console.log('las resp es :' + resp);
     }, function(err) {

     });
    return $scope.empty;
}]);
