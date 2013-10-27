'use strict';

angular.module('scholarshipSystemClientApp')
    .controller('BoardController', ['$scope', 'HttpService', function ($scope, httpService) {

        $scope.pendingApplications = [];

        httpService.getPendingApplications().then(function (response) {
            $scope.pendingApplications = response.data;
            console.dir(response.data);
        }, function (response) {
            console.dir(response);
            console.log('err');
        });

        $scope.approveApplication = function (application) {
            httpService.approveApplication(application).then(function (response) {
                console.log('ok!');
                console.dir(response);
            }, function (response) {
                console.log('err');
                console.dir(response);
            });;
        };
    }]);
