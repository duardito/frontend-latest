appModule.controller('groupController',['$scope', '$http', '$route','globalVars', function ($scope, $http, $route, globalVars) {
  $scope.groups = "{}";

  $scope.submit = function () {
    $http.post(globalVars.keemonoUrl+'group/save',
      {
        "name": $scope.pagename,
        "headerPage": {headerContent: $scope.headpage},
        "bodyPage": {bodyContent: $scope.bodypage},
        "footerPage": {footerContent: $scope.footerpage}
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
