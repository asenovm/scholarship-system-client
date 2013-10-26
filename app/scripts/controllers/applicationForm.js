'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('ApplicationFormController', ['$scope', '$location', 'ValidationService', 'HttpService', function ($scope, $location, validationService, httpService) {

    $scope.application = {
        'firstName': 'Martin',
        'lastName': 'Asenov',
        'surname': 'Asenov',
        'facultyId': '80457',
        'email': 'asenov.m@gmail.com'
    };

    function isValidName(name) {
        return name && validationService.isValidName(name);
    }

    function isValidIncome(income) {
        return income && validationService.isValidIncome(income);
    }

    //TODO check how to call the function with params and quit this madness
    $scope.isValidFirstParentFirstName = function () {
        return isValidName($scope.application.firstParentFirstName);
    };

    $scope.isValidFirstParentSurname = function () {
        return isValidName($scope.application.firstParentSurname);
    };

    $scope.isValidFirstParentLastName = function () {
        return isValidName($scope.application.firstParentLastName);
    };

    $scope.isValidFirstParentCompanyName = function () {
        return isValidName($scope.application.firstParentCompanyName);
    };

    $scope.isValidFirstParentIncome = function () {
        return isValidIncome($scope.application.firstParentIncome);
    };

    $scope.isValidSecondParentFirstName = function () {
        return isValidName($scope.application.secondParentFirstName);
    }

    $scope.isValidSecondParentSurname = function () {
        return isValidName($scope.application.secondParentSurname);
    };

    $scope.isValidSecondParentLastName = function () {
        return isValidName($scope.application.secondParentLastName);
    };

    $scope.isValidSecondParentCompanyName = function () {
        return isValidName($scope.application.secondParentCompanyName);
    };

    $scope.isValidSecondParentIncome = function () {
        return isValidIncome($scope.application.secondParentIncome);
    };

    $scope.isValidSchoolYear = function () {
        return validationService.isValidSchoolYear($scope.application.schoolYear);
    };

    $scope.isValidGrade = function () {
        return validationService.isValidGrade($scope.application.grade);
    };

    $scope.next = function (page) {
        httpService.addApplicationData($scope.application);  
        $location.path('/application-page' + page);
    };

    $scope.sendApplication = function () { 
        httpService.addApplicationData($scope.application);
        httpService.sendApplication();
    };

  }]);
