'use strict';

// Declare app level module which depends on views, and components
var appModule =angular.module('myApp', ['myApp.filters','myApp.directives',
  'ngRoute', 'ngSanitize','pascalprecht.translate','ui.bootstrap','ngResource',
  'myApp.version'
]);

var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);

appModule.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/welcome', {
                templateUrl: 'home.html'
            })
            .when('/login', {
                templateUrl: 'login/login.html'
            })
            .when('/user', {
                templateUrl: 'users/user.html'
            })
            .when('/userList', {
                templateUrl: 'users/userList.html'
            })
            .when('/pageList', {
                templateUrl: 'pages/pageList.html',
                controller:'pageListController'
            })
            .when('/page', {
                templateUrl: 'pages/page.html'
            }).when('/empty', {
            templateUrl: 'empty/empty.html'
        }).when('/:name', {
            templateUrl: 'empty/empty.html',
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
