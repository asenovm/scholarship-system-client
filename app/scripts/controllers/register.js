'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('RegisterController', ['$scope', '$location', 'ValidationService', 'HttpService', function ($scope, $location, validationService, httpService) {
    $('.selectpicker').selectpicker({
        width: 460,
        dropupAuto: false
    });

    $scope.register = function () {
        $scope.student.facultyName = $('.selectpicker').val();
        httpService.register($scope.student);
    };

    $scope.isValidName = function (nameType) {
        if($scope.student) {
            console.log('name type is ' + $scope.student[nameType]);
        }
        console.log('value is ' + ($scope.student && validationService.isValidName($scope.student[nameType])));
        return $scope.student && validationService.isValidName($scope.student[nameType]);
    }

    $scope.isValidFacultyId = function () {
        var student = $scope.student;
        return student && validationService.isValidFacultyId(student.facultyId);
    };

    $scope.isValidEmail = function () {
        var student = $scope.student;
        return student && validationService.isValidEmail(student.email);
    };

    $scope.isValidPassword = function () {
        var student = $scope.student;
        return student && validationService.isValidPassword(student.password);
    };

  }]);
