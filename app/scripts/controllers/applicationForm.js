'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('ApplicationFormController', ['$scope', '$location', 'ValidationService', 'HttpService', 'UserService', function ($scope, $location, validationService, httpService, userService) {

    var user = userService.getActiveUser();

    $scope.application = {
        'firstName': user.firstName,
        'lastName': user.surname,
        'surname': user.lastName,
        'facultyId': user.facultyId,
        'email': user.email,
        'major': user.major
    };


    $scope.isValidName = function (nameType) {
        return validationService.isValidName($scope.application[nameType]);
    };

    $scope.isValidCompany = function (companyType) {
        return validationService.isValidCompany($scope.application[companyType]);
    };

    $scope.isValidIncome = function (incomeType) {
        return validationService.isValidIncome($scope.application[incomeType]);
    };

    $scope.isValidSchoolYear = function () {
        return validationService.isValidSchoolYear($scope.application.schoolYear);
    };

    $scope.isValidGrade = function () {
        return validationService.isValidGrade($scope.application.grade);
    };

    $scope.next = function (page, isFormValid) {
        if(isFormValid) {
            httpService.addApplicationData($scope.application);  
            $location.path('/application/' + page);
        } else {
            showWarning();
        }
    };

    $scope.sendApplication = function (isFormValid) { 
        if(!isFormValid) {
            showWarning();
        } else {
            httpService.addApplicationData($scope.application);
            httpService.sendApplication().then(function (response) {
                $location.path('/student/profile');
            }, function (response) {
                showWarning();
            });
        }
    };

    function showWarning() {
        $('span.content').text(' Формата не е запазена.');
        $('.warning-application').show();
    }


  }]);
