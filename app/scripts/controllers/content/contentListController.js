appModule.controller('contentListController', ['$scope', '$http', 'globalVars',
  function ($scope, $http, globalVars) {
    $http.get(globalVars.keemonoUrl + 'content/list').success(function (data) {
      $scope.contentList = data;
      // this callback will be called asynchronously
      // when the response is available
    }).error(function (data) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }]);
