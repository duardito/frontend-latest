'use strict';
appModule.service ('SelectedId', function() {
  // private variable
  var _dataObj = {};

  // public API
  return {
    dataObj: _dataObj
  };

});
// simple stub that could use a lot of work...
appModule.factory('RESTService',
    function ($http) {
        return {
            get:function (url, callback) {
                return $http({method:'GET', url:url}).
                    success(function (data, status, headers, config) {
                        callback(data);
                        //console.log(data.json);
                    }).
                    error(function (data, status, headers, config) {
                        console.log("failed to retrieve data");
                    });
            }
        };
    }
);

appModule.factory('testFactory', function(){
    return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }
    }
});


// simple auth service that can use a lot of work...
appModule.factory('AuthService', function ($rootScope, $route, $http ) {
        var currentUser = null;
        var authorized = false;

        // initMaybe it wasn't meant to work for mpm?ial state says we haven't logged in or out yet...
        // this tells us we are in public browsing
        var initialState = true;

        return {
            initialState:function () {
                return initialState;
            },
            login:function (name, password) {

                $http.post('http://localhost:8080/keemono/login',
                    {"username": $rootScope.username, "password": $rootScope.password}).
                    success(function(data, status, headers, config) {

                        currentUser = name;
                        authorized = true;
                        //console.log("Logged in as " + name);
                        initialState = false;

                        console.log('reloadddd');
                        $route.reload();
                        // this callback will be called asynchronously
                        // when the response is available
                    }).
                    error(function(data, status, headers, config) {

                        currentUser = name;
                        authorized = true;
                        //console.log("Logged in as " + name);
                        initialState = false;
                        console.log('errrrrrrr');
                        $route.reload();
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            },
            logout:function () {
                currentUser = null;
                authorized = false;
            },
            isLoggedIn:function () {
                return authorized;
            },
            currentUser:function () {
                return currentUser;
            },
            authorized:function () {
                return authorized;
            }
        };
    }
);