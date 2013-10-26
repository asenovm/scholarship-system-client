'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('RegisterController', ['$scope', '$location', 'ValidationService', function ($scope, $location, validationService) {
    $('.selectpicker').selectpicker({
        width: 460,
        dropupAuto: false
    });

    function isValidName(name) {
        return validationService.isValidName(name);
    }

    $scope.register = function () {
        $location.path('/home');
    };

    $scope.isValidFirstName = function () {
        var student = $scope.student;
        return student && isValidName(student.firstName);
    };

    $scope.isValidSurname = function () {
        var student = $scope.student;
        return student && isValidName(student.surname);
    };

    $scope.isValidLastName = function () {
        var student = $scope.student;
        return student && isValidName(student.lastName);
    };

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
