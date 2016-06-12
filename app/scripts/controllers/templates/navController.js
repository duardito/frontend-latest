appModule.controller('navUrlController', ['$scope', '$http', 'SelectedId', 'globalVars','$route',
  function ($scope, $http, SelectedId, globalVars,$route) {
  $scope.ShowId = function (obj) {
    SelectedId.dataObj = obj.target.getAttribute("id");
  }

  $http.get(globalVars.keemonoUrl + 'page/list').success(function (data) {
    $scope.urls = data;

  }).error(function (data) {

  });
}]);

appModule.controller('empty', ['$scope', '$http', '$resource', '$location', 'SelectedId', 'globalVars','$rootScope',
  function ($scope, $http, $resource, $location, SelectedId, globalVars,$rootScope) {
    var lastParam = SelectedId.dataObj;
    $http.get(globalVars.keemonoUrl + 'page/' + lastParam).success(function (data) {
      $scope.empty = data;
      $scope.validData = $scope.empty.layout.schema;
      if(typeof $rootScope.mode == 'undefined' || $rootScope.mode =='edit'){

        $scope.validData = $scope.validData.replace(/visualization/g, 'border-style: dashed');
        $scope.visualization = {
          "border-style": "dashed"
        }
      }else{
        $scope.validData = $scope.validData.replace(/visualization/g, 'border-style: none');
        $scope.visualization = {
          "border-style": "none"
        }
      }

     // console.table($scope.visualization);


      console.log($scope.validData);
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
