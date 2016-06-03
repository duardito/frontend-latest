appModule.controller('pageListController',['$scope', '$http', 'globalVars', function ($scope, $http, globalVars) {
  $http.get(globalVars.keemonoUrl+'page/list').success(function (data) {
    $scope.pagelist = data;
    // this callback will be called asynchronously
    // when the response is available
  }).error(function (data) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);
