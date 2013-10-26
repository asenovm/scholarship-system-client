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


    $scope.isValidName = function (nameType) {
        return validationService.isValidName($scope.application[nameType]);
    }
    $scope.isValidIncome = function (incomeType) {
        var income = $scope.application[incomeType];
        return income && validationService.isValidIncome(income);
    }

    $scope.isValidSchoolYear = function () {
        return validationService.isValidSchoolYear($scope.application.schoolYear);
    };

    $scope.isValidGrade = function () {
        return validationService.isValidGrade($scope.application.grade);
    };

    $scope.next = function (page) {
        httpService.addApplicationData($scope.application);  
        $location.path('/application-page-' + page);
    };

    $scope.sendApplication = function () { 
        httpService.addApplicationData($scope.application);
        httpService.sendApplication();
    };

  }]);
