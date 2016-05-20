appModule.controller('layoutListController',['baseUrl', function ($scope, $http) {
  $http.get('baseUrl'+'layout/list').success(function (data) {
    $scope.layoutList = data;
    // this callback will be called asynchronously
    // when the response is available
  }).error(function (data) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);
