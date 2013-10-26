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

    function isValidIncome(income) {
        return income && validationService.isValidIncome(income);
    }

    $scope.isValidName = function (nameType) {
        return validationService.isValidName($scope.application[nameType]);
    }

    $scope.isValidFirstParentIncome = function () {
        return isValidIncome($scope.application.firstParentIncome);
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
