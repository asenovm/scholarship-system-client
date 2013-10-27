'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('UserProfileController', ['$scope', '$location', 'UserService', 'ValidationService', 'HttpService', function ($scope, $location, userService, validationService, httpService) {

    $scope.applications = [];
    retrieveApplications();

    function retrieveApplications() {
        httpService.getApplicationsForUser(userService.getActiveUser()).then(function (response) {
            $scope.applications = response.data;
            $scope.applications.map(function (item) {
                item.status = item.status === 'pending' ? 'Чакащ одобрение' : 'Одобрен';
            });
        });
    }

    $scope.deleteApplication = function (application) {
        httpService.deleteApplication(application).then(function (response) {
            retrieveApplications();
        });;
    };
    
  }]);
