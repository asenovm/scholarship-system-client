'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('LoginController', ['$scope', '$location', 'HttpService', 'UserService', function ($scope, $location, httpService, userService) {
    
    $scope.login = function () {
        httpService.login($scope.credentials).then(function (response) {
            userService.storeUserProfile(response.data);
            if(response.data.userType === 'admin') {
                $location.path('/admin/profile');   
            } else {
                $location.path('/student/profile');
            }
        }, function (response) {
            $('span.content').text('Въвели сте невалиден имейл или парола.');
            $('.warning').show();
        });
    };
  
  }]);
