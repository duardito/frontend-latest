appModule.controller('saveLayoutController',['$scope', '$http', '$route','globalVars', function ($scope, $http, $route, globalVars) {
  $scope.layouts = "{}";

  $scope.submit = function () {
    $http.post(globalVars.keemonoUrl+'layout/save',
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
