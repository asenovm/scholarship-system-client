'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('LoginController', ['$scope', 'HttpService', function ($scope, httpService) {
    
    $scope.login = function () {
        httpService.login($scope.credentials);
    };
  
  }]);
