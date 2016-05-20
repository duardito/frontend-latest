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
    'pascalprecht.translate'
  ]);

var filters = angular.module('mytodoApp.filters', []);
var directives = angular.module('mytodoApp.directives', []);

appModule.constant('baseUrl', 'http://localhost:9000/keemono/');

appModule.directive("profile", function() {
  return {
    template: '<ng-include src="getTemplateUrl()"/>',
    scope: {
      user: '=data'
    },
    restrict: 'E',
    controller: function($scope) {
      //function used on the ng-include to resolve the template
      $scope.getTemplateUrl = function() {
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
        controller: 'pageListController'
      })
      .when('/page', {
        templateUrl: 'views/pages/page.html',
        controller: 'savePageController'

      }).when('/empty', {
      templateUrl: 'views/empty/empty.html'

    }).when('/:name', {
      templateUrl: 'views/empty/empty.html',
      //controller: PagesController
    });

  }
]);

function PagesController($scope, $http, $route, $routeParams, $compile) {
  /**$route.current.templateUrl = '' + $routeParams.name + ".html";**/
  $route.current.templateUrl = 'views/empty/empty.html';
  $http.get($route.current.templateUrl).then(function (msg) {
    $('#views').html($compile(msg.data)($scope));
  });
}
PagesController.$inject = ['$scope', '$http', '$route', '$routeParams', '$compile'];
