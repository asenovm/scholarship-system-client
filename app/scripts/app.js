'use strict';

angular.module('scholarshipSystemClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      }).
      when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      }).
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'UserProfileController'
      }).
      when('/board', {
        templateUrl: 'views/board.html',
        controller: 'BoardController'
      }).
      when('/admin-home', {
        templateUrl: 'views/admin-home.html',
        controller: 'AdminProfileController'
      }).
      when('/application', {
        templateUrl: 'views/application.html',
        controller: 'ApplicationFormController'
      }).
      when('/application-page-2', {
        templateUrl: 'views/application-page-2.html',
        controller: 'ApplicationFormController'
      }).
      when('/application-page-3', {
        templateUrl: 'views/application-page-3.html',
        controller: 'ApplicationFormController'
      }).
      when('/application-page-4', {
        templateUrl: 'views/application-page-4.html',
        controller: 'ApplicationFormController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
