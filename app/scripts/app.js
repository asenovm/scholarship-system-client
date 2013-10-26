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
      when('/application', {
        templateUrl: 'views/application.html',
        controller: 'ApplicationFormController'
      }).
      when('/application-page2', {
        templateUrl: 'views/application-page-2.html',
        controller: 'ApplicationFormController'
      }).
      when('/application-page3', {
        templateUrl: 'views/application-page-3.html',
        controller: 'ApplicationFormController'
      }).
      when('/application-page4', {
        templateUrl: 'views/application-page-4.html',
        controller: 'ApplicationFormController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
