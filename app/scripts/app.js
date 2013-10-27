'use strict';

angular.module('scholarshipSystemClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      }).
      when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      }).
      when('/student/profile', {
        templateUrl: 'views/student-profile.html',
        controller: 'UserProfileController'
      }).
      when('/admin/profile', {
        templateUrl: 'views/admin-profile.html',
        controller: 'AdminProfileController'
      }).
      when('/application', {
        templateUrl: 'views/application.html',
        controller: 'ApplicationFormController'
      }).
      when('/application/2', {
        templateUrl: 'views/application-page-2.html',
        controller: 'ApplicationFormController'
      }).
      when('/application/3', {
        templateUrl: 'views/application-page-3.html',
        controller: 'ApplicationFormController'
      }).
      when('/application/4', {
        templateUrl: 'views/application-page-4.html',
        controller: 'ApplicationFormController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
