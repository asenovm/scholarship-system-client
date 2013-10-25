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
      })
      .otherwise({
        redirectTo: '/'
      });
  });
