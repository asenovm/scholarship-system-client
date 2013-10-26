'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('ApplicationFormController', ['$scope', '$location', 'ValidationService', function ($scope, $location, validationService) {

    $scope.student = {};

    function isValidName(name) {
        return name && validationService.isValidName(name);
    }

    //TODO check how to call the function with params and quit this madness
    $scope.isValidFirstParentFirstName = function () {
        return isValidName($scope.student.firstParentFirstName);
    };

    $scope.isValidFirstParentSurname = function () {
        return isValidName($scope.student.firstParentSurname);
    };

    $scope.isValidFirstParentLastName = function () {
        return isValidName($scope.student.firstParentLastName);
    };

    $scope.isValidFirstParentCompanyName = function () {
        return isValidName($scope.student.firstParentCompanyName);
    };

    $scope.isValidFirstParentIncome = function () {
        var income = $scope.student.firstParentIncome;
        return income && validationService.isValidIncome(income);
    };
  }]);
