'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('ApplicationFormController', ['$scope', '$location', 'ValidationService', 'HttpService', function ($scope, $location, validationService, httpService) {

    $scope.student = {
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
        return isValidIncome($scope.student.firstParentIncome);
    };

    $scope.isValidSecondParentFirstName = function () {
        return isValidName($scope.student.secondParentFirstName);
    }

    $scope.isValidSecondParentSurname = function () {
        return isValidName($scope.student.secondParentSurname);
    };

    $scope.isValidSecondParentLastName = function () {
        return isValidName($scope.student.secondParentLastName);
    };

    $scope.isValidSecondParentCompanyName = function () {
        return isValidName($scope.student.secondParentCompanyName);
    };

    $scope.isValidSecondParentIncome = function () {
        return isValidIncome($scope.student.secondParentIncome);
    };

    $scope.isValidSchoolYear = function () {
        return validationService.isValidSchoolYear($scope.student.schoolYear);
    };

    $scope.isValidGrade = function () {
        return validationService.isValidGrade($scope.student.grade);
    };

    $scope.next = function (page) {
        httpService.addApplicationData($scope.student);  
        $location.path('/application-page' + page);
    };

    $scope.sendApplication = function () { 
        httpService.addApplicationData($scope.student);
        httpService.sendApplication();
    };

  }]);
