'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('UserProfileController', ['$scope', '$location', 'UserService', 'ValidationService', 'HttpService', function ($scope, $location, userService, validationService, httpService) {

    $scope.applications = [];
    httpService.getApplicationsForUser(userService.getActiveUser()).then(function (response) {
        $scope.applications = response.data;
        $scope.applications.map(function (item) {
            item.status = item.status === 'pending' ? 'Чакащ одобрение' : 'Одобрен';
        });
    });

  }]);
