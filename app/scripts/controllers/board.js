'use strict';

angular.module('scholarshipSystemClientApp')
    .controller('BoardController', ['$scope', 'HttpService', function ($scope, httpService) {

        $scope.pendingApplications = [];

        httpService.getPendingApplications().then(function (response) {
            console.dir(response);
            $scope.pendingApplications = response.data;
        });
    }]);
