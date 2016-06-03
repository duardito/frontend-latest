appModule.controller('saveContentController', ['$scope', '$http', '$route', 'globalVars',
  function ($scope, $http, $route, globalVars) {
    $scope.submit = function () {
      $http.post(globalVars.keemonoUrl + 'content', {
        "name": $scope.name,
        "creator": $scope.creator
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
