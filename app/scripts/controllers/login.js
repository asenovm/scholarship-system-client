'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('LoginController', ['$scope', '$location', 'HttpService', function ($scope, $location, httpService) {
    
    $scope.login = function () {
        httpService.login($scope.credentials).then(function (response) {
            $location.path('/home');
        }, function (response) {
            var $warningBox = $('.warning');
            $warningBox.append('Въвели сте невалиден имейл или парола.');
            $warningBox.show();
        });
    };
  
  }]);
