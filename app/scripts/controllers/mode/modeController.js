appModule.controller('editModeController', ['$scope', '$rootScope','$route',
  function ($scope, $rootScope,$route) {
    $scope.submit = function () {
      $rootScope.mode = 'edit';
      $route.reload();
    };
  }]);

appModule.controller('readModeController', ['$scope', '$rootScope','$route',
  function ($scope, $rootScope,$route) {
    $scope.submit = function () {
      $rootScope.mode = 'read';
      $route.reload();
    };
  }]);
