appModule.controller('navUrlController', ['$scope', '$http', 'SelectedId', 'globalVars',
  function ($scope, $http, SelectedId, globalVars) {
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
      console.log($rootScope.mode);
      if($rootScope.mode !=='undefined' && $rootScope.mode =='edit'){
        $scope.mode = {
          "color" : "white",
          "background-color" : "coral",
          "font-size" : "60px",
          "padding" : "50px"
        }
      }else{
        $scope.mode = {
          "color" : "white",
          "background-color" : "blue",
          "font-size" : "60px",
          "padding" : "50px"
        }
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
