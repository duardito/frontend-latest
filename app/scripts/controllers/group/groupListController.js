appModule.controller('groupListController',['baseUrl', function ($scope, $http) {
  $http.get('baseUrl'+'group/list').success(function (data) {
    $scope.groupList = data;
    // this callback will be called asynchronously
    // when the response is available
  }).error(function (data) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);
