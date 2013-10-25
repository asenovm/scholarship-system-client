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
      })
      .otherwise({
        redirectTo: '/'
      });
  });
