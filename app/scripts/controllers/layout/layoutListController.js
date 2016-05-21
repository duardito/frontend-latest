appModule.controller('layoutListController', ['$scope', '$http','globalVars' , function ($scope, $http, globalVars) {
  $http.get(globalVars.keemonoUrl + 'layout').success(function (data) {
    $scope.layoutList = data;
    // this callback will be called asynchronously
    // when the response is available
  }).error(function (data) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);
