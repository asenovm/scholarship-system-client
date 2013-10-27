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

    $scope.next = function (page, isFormValid) {
        if(isFormValid) {
            httpService.addApplicationData($scope.application);  
            $location.path('/application-page-' + page);
        } else {
            showWarning();
        }
    };

    $scope.deleteApplication = function (application) {
        httpService.deleteApplication(application).then(function (response) {
            console.log('deleted');   
        }, function (response) {
            console.log('not deleted');
        });
    };

    $scope.sendApplication = function (isFormValid) { 
        if(!isFormValid) {
            showWarning();
        } else {
            httpService.addApplicationData($scope.application);
            httpService.sendApplication().then(function (response) {
                $location.path('/profile');
            }, function (response) {
                var $warningBox = $('.warning-application');
                $warningBox.append('Въвели сте невалидни данни. Формата не е запазена.');
                $warningBox.show();
            });
        }
    };

    function showWarning() {
        var $warningBox = $('.warning-application');
        $warningBox.append('Не сте попълнили коректно всички полета');
        $warningBox.show();
    }


  }]);
