'use strict';

/**
 * @ngdoc overview
 * @name frontendV3YeomanApp
 * @description
 * # frontendV3YeomanApp
 *
 * Main module of the application.
 */
var appModule = angular
  .module('mytodoApp', [
    'mytodoApp.filters',
    'mytodoApp.directives',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'pascalprecht.translate',
    'angular-jwt',
    'angular-storage',
    'ngDragDrop'
  ]);

var filters = angular.module('mytodoApp.filters', []);
var directives = angular.module('mytodoApp.directives', []);

appModule.value('globalVars', {
   keemonoUrl: 'http://samuris.com:9339/keemono/'
 // keemonoUrl: 'http://localhost:8080/keemono/'
});

appModule.directive("profile", function () {
  return {
    template: '<ng-include src="getTemplateUrl()"/>',
    scope: {
      user: '=data'
    },
    restrict: 'E',
    controller: function ($scope) {
      //function used on the ng-include to resolve the template
      $scope.getTemplateUrl = function () {
        return "views/templates/header.tpl.html";

      }
    }
  };
});
appModule.config(['$routeProvider', '$locationProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/content', {
        templateUrl: 'views/content/content.html',
        controller: 'saveContentController'
      })
      .when('/contentList', {
        templateUrl: 'views/content/contentList.html',
        controller: 'contentListController'
      })

      .when('/group', {
        templateUrl: 'views/group/group.html',
        controller: 'groupController'
      })
      .when('/groupList', {
        templateUrl: 'views/group/groupList.html',
        controller: 'groupListController'
      })
      .when('/layoutList', {
        templateUrl: 'views/layout/layoutList.html',
        controller: 'layoutListController'
      })
      .when('/layout', {
        templateUrl: 'views/layout/layout.html',
        controller: 'saveLayoutController'
      })
      .when('/welcome', {
        templateUrl: 'views/home.html'
      })
      .when('/auth', {
        templateUrl: 'views/login/login.html',
        controller: 'loginController'
      })

      .when('/logout', {
        template: '',
        controller: 'logoutController'
      })

      .when('/edit', {
        template: '',
        controller: 'editModeController'
      })
      .when('/read', {
        template: '',
        controller: 'readModeController'
      })



      .when('/user', {
        templateUrl: 'views/users/user.html'
      })
      .when('/userList', {
        templateUrl: 'views/users/userList.html',
        controller: 'userListController'
      })
      .when('/pageList', {
        templateUrl: 'views/pages/pageList.html',
        controller: 'pageListController'
      })
      .when('/page', {
        templateUrl: 'views/pages/page.html',
        controller: 'savePageController'

      }).when('/:name', {
      templateUrl: 'views/empty/empty.html',
      controller: 'empty'
    });
  }

]);

/*
 appModule.factory('userService', function() {
 return {
 getAuthorization: function() {
 return 'Taco';
 }
 }
 });

 appModule.config(function($httpProvider) {
 // Pull in `userService` from the dependency injector
 $httpProvider.interceptors.push(function(userService) {
 return {
 request: function(req) {
 // Set the `Authorization` header for every outgoing HTTP request
 req.headers.Authorization =
 userService.getAuthorization();
 return req;
 }};}
 });
 */

/*
 appModule.factory('Auth0Store', function(store) {
 return{
 getToken:function () {
 return store.getNamespacedStore('auth0');;
 }

 }
 });
 */
/*
 appModule.factory('Auth0Store', function(store) {
 return store.getNamespacedStore('auth0');
 });
 angular.module('app', ['angular-jwt'])
 .controller('Controller', function Controller(jwtHelper) {
 var bool = jwtHelper.isTokenExpired(expToken);
 })
 appModule.config(function($stateProvider, Auth0Store, $locationProvider) {
 $stateProvider.state('logout', {
 url: '/logout',
 controller: function($scope, $route) {

 Auth0Store.remove(Auth0Store.get('api_key'));
 $route.reload()
 }
 })});
 */
appModule.factory('Auth0Store', function() {
  return {
    getAuthorization: function() {
      return Auth0Store.get('api_key');
    }
  }
});


appModule.factory('Auth0Store', function (store) {
  return store.getNamespacedStore('auth0');
});


appModule.factory('authenticatedService', function(Auth0Store, jwtHelper) {
  return {
    getAuthenticated:function () {
      var token = Auth0Store.get('api_key');
      if(token != null){
        return !jwtHelper.isTokenExpired(token);
      }
      return false;
    }
  }
 });

appModule.controller('testController',
  ['$window','$scope', '$http','globalVars','Auth0Store','$route' ,'authenticatedService',
  function ($window,$scope, $http, globalVars,Auth0Store, $route, authenticatedService) {

    $scope.goCats = authenticatedService.getAuthenticated();

    $scope.$watch($scope.goCats);

    // console.log(' brrrr :' + Auth0Store.get('api_key'));
    // var myNewObject = Auth0Store.get('api_key');
    //console.table(' sirr :' +myNewObject);
    //$location.path('/');
    //$window.location.reload();

  }]);


appModule.config(function ($httpProvider) {
  // Pull in `userService` from the dependency injector
  $httpProvider.interceptors.push(function (Auth0Store, jwtHelper) {
    return {
      request: function (req) {

        if (req.url == 'http://samuris.com:9339/keemono/auth') {
          req.headers['api_key'] = '';
        } else {
          var token = Auth0Store.get('api_key');
          if(token != null){

            var bool = jwtHelper.isTokenExpired(token);
           // $scope.authenticaticated = bool;
            var date = jwtHelper.getTokenExpirationDate(token);
            if(bool){
              req.headers['api_key'] ='';
            }else{
              req.headers['api_key'] = Auth0Store.get('api_key');
            }
          }else{
            req.headers['api_key'] = '';
          }
        }
        //console.log(' req.headers  ' +req.headers['api_key'] );
        // Set the `Authorization` header for every outgoing HTTP request
        // req.headers.Authorization = userService.getAuthorization();

        //console.table(req.headers.Authorization);
        return req;
      }
    };
  })
});


function PagesController($scope, $http, $route, $routeParams, $compile) {
}

