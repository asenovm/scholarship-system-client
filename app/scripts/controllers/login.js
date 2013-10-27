'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('LoginController', ['$scope', '$location', 'HttpService', 'UserService', function ($scope, $location, httpService, userService) {
    
    $scope.login = function () {
        httpService.login($scope.credentials).then(function (response) {
            userService.storeUserProfile(response.data);
            $location.path('/home');
        }, function (response) {
            var $warningBox = $('.warning');
            $warningBox.append('Въвели сте невалиден имейл или парола.');
            $warningBox.show();
        });
    };
  
  }]);
