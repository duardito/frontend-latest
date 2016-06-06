appModule.controller('savePageController',['$scope', '$http', '$route','globalVars','layoutService', function ($scope, $http, $route, globalVars,layoutService) {
  $scope.layouts = {};
  layoutService.getLayoutList().then(function(response) {
    $scope.layouts =response;
   // console.table($scope.layouts);
  });

 // console.table($scope.layouts);
  /*
  [
    {id: '1', name: 'layout 1', img: 'assets/img/Desert-mini.jpg'}
    ,
    {id: '2',name: 'layout 2', img: 'assets/img/Desert-mini.jpg' }
  ];
*/
  $scope.submit = function () {
    $http.post(globalVars.keemonoUrl+'page',
      {
        "name": $scope.pagename,
        "layout":  $scope.uuid
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
