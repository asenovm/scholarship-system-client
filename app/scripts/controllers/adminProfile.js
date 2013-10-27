'use strict';

angular.module('scholarshipSystemClientApp')
    .controller('AdminProfileController', ['$scope', 'HttpService', function ($scope, httpService) {


        function getPendingApplications() {
            httpService.getPendingApplications().then(function (response) {
                $scope.pendingApplications = response.data;
            });
        }

        getPendingApplications();

        $scope.pendingApplications = [];

        $scope.approveApplication = function (application) {
            httpService.approveApplication(application).then(function (response) {
                getPendingApplications();
            });;
        };
    }]);
