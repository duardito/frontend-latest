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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.sortable',
	'pascalprecht.translate',
	'mytodoApp.filters',
	'mytodoApp.directives'
  ]);
  
  var filters = angular.module('mytodoApp.filters', []);
var directives = angular.module('mytodoApp.directives', []);
  
appModule.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/welcome', {
                templateUrl: 'home.html'
            })
            .when('/login', {
                templateUrl: 'views/login/login.html'
            })
            .when('/user', {
                templateUrl: 'views/users/user.html'
            })
            .when('/userList', {
                templateUrl: 'views/users/userList.html'
            })
            .when('/pageList', {
                templateUrl: 'views/pages/pageList.html',
                controller:'pageListController'
            })
            .when('/page', {
                templateUrl: 'views/pages/page.html'
            }).when('/empty', {
                templateUrl: 'views/empty/empty.html'
        }).when('/:name', {
            templateUrl: 'views/empty/empty.html',
            controller: PagesController });

    }
]);

  function PagesController($scope, $http, $route, $routeParams, $compile) {
    /**$route.current.templateUrl = '' + $routeParams.name + ".html";**/
    $route.current.templateUrl =  "empty/empty.html";
    $http.get($route.current.templateUrl).then(function (msg) {
        $('#views').html($compile(msg.data)($scope));
    });
}
PagesController.$inject = ['$scope', '$http', '$route', '$routeParams', '$compile'];