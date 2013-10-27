'use strict';

angular.module('scholarshipSystemClientApp')
    .controller('BoardController', ['$scope', 'HttpService', function ($scope, httpService) {


        function getPendingApplications() {
            httpService.getPendingApplications().then(function (response) {
                $scope.pendingApplications = response.data;
            });
        }

        getPendingApplications();

        $scope.pendingApplications = [];

        $scope.approveApplication = function (application) {
            httpService.approveApplication(application).then(getPendingApplications, function (response) {
                console.log('err');
                console.dir(response);
            });;
        };
    }]);
