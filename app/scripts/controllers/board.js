'use strict';

angular.module('scholarshipSystemClientApp')
    .controller('BoardController', ['$scope', 'HttpService', function ($scope, httpService) {

        $scope.pendingApplications = [];

        function getPendingApplications() {
            httpService.getPendingApplications().then(function (response) {
                $scope.pendingApplications = response.data;
            });
        }

        $scope.approveApplication = function (application) {
            httpService.approveApplication(application).then(getPendingApplications, function (response) {
                console.log('err');
                console.dir(response);
            });;
        };
    }]);
