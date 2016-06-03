appModule.controller('layoutListController', ['$scope', '$http','globalVars','Auth0Store' , function ($scope, $http, globalVars,Auth0Store) {
  $http.get(globalVars.keemonoUrl + 'layout/list').success(function (data) {

   // var myNewObject = Auth0Store.get('api_key');
    //console.table(' sirr :' +myNewObject);

    $scope.layoutList = data;
    // this callback will be called asynchronously
    // when the response is available
  }).error(function (data) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);

