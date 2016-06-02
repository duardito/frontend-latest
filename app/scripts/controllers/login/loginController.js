appModule.controller('loginController', [ '$scope', '$http', '$route','globalVars','Auth0Store',function ($scope, $http, $route,globalVars, Auth0Store) {
  $scope.submit = function () {
    $http.post(
      globalVars.keemonoUrl+'auth',
    {
      "username": $scope.username,
      "password": $scope.password
    }
    ).success(function (data, status, headers, config) {

      Auth0Store.set('api_key', data.token);

      //var myNewObject = Auth0Store.get('api_key');

      //console.table(' sirr :' +myNewObject);
      $route.reload();
      // this callback will be called asynchronously
      // when the response is available
    }).error(function (data, status, headers, config) {

      //console.log(config);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
}]);



appModule.controller('logoutController', ['$window','$scope', '$http','globalVars','Auth0Store','$route' ,
  function ($window,$scope, $http, globalVars,Auth0Store, $route) {

    Auth0Store.remove('api_key');

    console.log(' brrrr :' + Auth0Store.get('api_key'));
    // var myNewObject = Auth0Store.get('api_key');
    //console.table(' sirr :' +myNewObject);
  //$location.path('/');
  //$window.location.reload();

}]);
