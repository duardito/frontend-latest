appModule.controller('navUrlController', ['$scope', '$http', 'SelectedId', 'globalVars', '$route',
  function ($scope, $http, SelectedId, globalVars, $route) {
    $scope.ShowId = function (obj) {
      SelectedId.dataObj = obj.target.getAttribute("id");
    }

    $http.get(globalVars.keemonoUrl + 'page/list').success(function (data) {
      $scope.urls = data;

    }).error(function (data) {

    });
  }]);

appModule.controller('empty', ['$scope', '$http', '$resource', '$location', 'SelectedId', 'globalVars', '$rootScope', '$compile', '$sce',
  function ($scope, $http, $resource, $location, SelectedId, globalVars, $rootScope, $compile, $sce) {
    var lastParam = SelectedId.dataObj;
    $http.get(globalVars.keemonoUrl + 'page/' + lastParam).success(function (data) {

      $scope.empty = data;

      if (typeof $rootScope.mode == 'undefined') {
        $scope.status = 'read';
      } else {
        $scope.status = $rootScope.mode;
      }
    }).error(function (data) {

    });
    /*
     //var value = $resource(globalVars.keemonoUrl+'page/:name');
     $scope.empty =value.get({name: lastParam},
     function(resp) {
     $scope.empty = resp;
     }, function(err) {

     });
     */
    //return $scope.empty;
  }]);

appModule.directive("c", function () {
  return {
    template: "<h1>Made by a directive!</h1>"
  };
});
