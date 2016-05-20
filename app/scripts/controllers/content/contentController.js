appModule.controller('saveContentController', ['baseUrl',function ($scope, $http, $route) {
  $scope.submit = function () {
    $http.post('baseUrl'+'content/save',
      {
        "content": $scope.content
      }).success(function (data, status, headers, config) {
      $route.reload();
      // this callback will be called asynchronously
      // when the response is available
    }).error(function (data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
}]);
