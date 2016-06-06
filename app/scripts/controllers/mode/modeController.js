appModule.controller('editModeController', ['$scope', '$rootScope',
  function ($scope, $rootScope) {
    $scope.submit = function () {
      $rootScope.mode = 'edit';
    };
  }]);

appModule.controller('readModeController',['$scope', '$rootScope',
  function ($scope, $rootScope) {
    $scope.submit = function () {
      $rootScope.mode = 'read';
    };
  }]);
