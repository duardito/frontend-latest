appModule.controller('saveLayoutController',['$scope', '$http', '$route','globalVars', function ($scope, $http, $route, globalVars) {
  $scope.submit = function () {
    $http.post(globalVars.keemonoUrl+'layout',
      {
        "creator": "none",
        "name": $scope.name,
        "schema":  $scope.content
      }).success(function (data, status, headers, config) {
      $route.reload();

    }).error(function (data, status, headers, config) {

    });
  };
}]);
